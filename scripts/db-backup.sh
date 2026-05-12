#!/usr/bin/env bash
set -euo pipefail

# DB backup script
DB_HOST=${POSTGRES_HOST:-localhost}
DB_PORT=${POSTGRES_PORT:-5432}
DB_NAME=${POSTGRES_DB:-zion}
DB_USER=${POSTGRES_USER:-zion_user}
DB_PASS=${POSTGRES_PASSWORD:-password}

export PGPASSWORD="$DB_PASS"

BACKUP_DIR="./backups"
mkdir -p "$BACKUP_DIR"
DATE=$(date +%F)
FILE="${BACKUP_DIR}/backup-${DATE}.sql.gz"

echo "🔧 Creating backup for ${DB_NAME} @ ${DB_HOST}:${DB_PORT}"
pg_dump -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" "$DB_NAME" | gzip > "$FILE"
echo "✅ Backup saved to $FILE"