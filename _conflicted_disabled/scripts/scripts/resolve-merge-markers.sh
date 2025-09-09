#!/usr/bin/env bash
set -euo pipefail

# Heuristic resolver: for files with conflict markers, prefer the first side (HEAD) by default.
# Create a backup alongside with .conflict-backup suffix.

ROOT_DIR="${1:-$(pwd)}"

resolve_file() {
  local file="$1"
  if ! grep -q '<<<<<<< ' "$file"; then
    return 0
  fi
  cp -f "$file" "$file.conflict-backup"
  # Strip conflict sections by keeping the first side before =======
  awk '
    BEGIN { inconf=0; keepfirst=0 }
    /^<<<<<<< / { inconf=1; keepfirst=1; next }
    /^=======/ { if (inconf) { keepfirst=0; next } }
    /^>>>>>>> / { inconf=0; keepfirst=0; next }
    { if (!inconf || keepfirst) print }
  ' "$file.conflict-backup" > "$file"
}

export -f resolve_file

find "$ROOT_DIR" -type f \
  -not -path "*/node_modules/*" \
  -not -path "*/.git/*" \
  -not -path "*/dist/*" \
  -not -path "*/.next/*" \
  -print0 | xargs -0 -I{} bash -lc 'resolve_file "$0"' {}

echo "Merge markers resolved where possible. Backups saved as *.conflict-backup"
