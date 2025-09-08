#!/usr/bin/env bash
set -euo pipefail

echo "[build.sh] Starting Netlify build"

echo "[build.sh] Node: $(node -v || echo 'not found')"
echo "[build.sh] NPM:  $(npm -v || echo 'not found')"

if command -v python3 >/dev/null 2>&1; then
  echo "[build.sh] Python: $(python3 --version)"
else
  echo "[build.sh] Python not found in PATH"
fi

# Ensure mise doesn't try to compile Python from source if present in image
export MISE_SETTINGS="python.compile=false"
export MISE_PYTHON_COMPILE="false"

if [ -f requirements.txt ]; then
  echo "[build.sh] Installing Python dependencies"
  # Prefer virtual environment to avoid PEP 668 issues
  VENV_CREATED=false
  if [ ! -d .venv ]; then
    if python3 -m venv .venv >/dev/null 2>&1; then
      VENV_CREATED=true
    fi
  else
    VENV_CREATED=true
  fi

  if [ "$VENV_CREATED" = true ]; then
    # shellcheck disable=SC1091
    source .venv/bin/activate || true
    python -m pip install --upgrade pip || true
    if ! python -m pip install -r requirements.txt; then
      echo "[build.sh] venv install failed, falling back to system pip with safeguards"
      deactivate 2>/dev/null || true
      if ! python3 -m pip install --user -r requirements.txt; then
        python3 -m pip install --break-system-packages -r requirements.txt
      fi
    fi
  else
    echo "[build.sh] venv unavailable, using system pip with safeguards"
    if ! python3 -m pip install --user -r requirements.txt; then
      python3 -m pip install --break-system-packages -r requirements.txt
    fi
  fi
else
  echo "[build.sh] No requirements.txt found, skipping Python deps"
fi

echo "[build.sh] Installing Node dependencies"
npm ci

echo "[build.sh] Running build"
npm run build

echo "[build.sh] Build complete"
