#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${NVM_DIR:-}" ]]; then
  export NVM_DIR="$HOME/.nvm"
fi

if [[ ! -s "$NVM_DIR/nvm.sh" ]]; then
  echo "nvm is required at $NVM_DIR/nvm.sh"
  exit 1
fi

source "$NVM_DIR/nvm.sh"

if ! nvm use 22 >/dev/null; then
  echo "Node 22 is required for OpenClaw. Installing..."
  nvm install 22 >/dev/null
  nvm use 22 >/dev/null
fi

if ! command -v openclaw >/dev/null 2>&1; then
  echo "OpenClaw is not installed globally. Run: npm install -g openclaw@latest"
  exit 1
fi

mkdir -p "$HOME/.openclaw"
if [[ ! -f "$HOME/.openclaw/openclaw.json" ]]; then
  cat > "$HOME/.openclaw/openclaw.json" <<'EOF'
{
  browser: {
    enabled: true,
    defaultProfile: "openclaw",
    headless: false,
    noSandbox: false,
    attachOnly: false,
    profiles: {
      openclaw: { color: "#FF4500" }
    }
  }
}
EOF
fi

if [[ "${1:-}" == "--status" ]]; then
  openclaw browser --browser-profile openclaw status
  exit 0
fi

openclaw browser --browser-profile openclaw status || true
openclaw browser --browser-profile openclaw start

nvm use 20 >/dev/null
npm run app:improvement-cycle
