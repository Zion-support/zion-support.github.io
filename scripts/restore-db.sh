#!/usr/bin/env bash
set -euo pipefail

# Restore from latest backup
LATEST=$(ls -1 backups/backup-*.sql.gz 2>/dev/null | sort -V | tail -n1)

if [[ -z "$LATEST" ]]; then
  echo "❌ No backup found in ./backups"
  exit 1
fi

echo "🔄 Restoring from $LATEST ..."
gunzip -c "$LATEST" | psql -h "${POSTGRES_HOST:-localhost}" -U "${POSTGRES_USER:-zion_user}" "${POSTGRES_DB:-zion}"
echo "✅ Restore completed."