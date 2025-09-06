#!/bin/bash

# Backup and Recovery System for Zion Tech Group
set -e

BACKUP_DIR="backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "💾 Starting backup process..."

# Backup source code
echo "📁 Backing up source code..."
tar -czf "$BACKUP_DIR/source-code.tar.gz" --exclude=node_modules --exclude=.next --exclude=.git .

# Backup database (if exists)
if [ -f "database.sqlite" ]; then
  echo "🗄️ Backing up database..."
  cp database.sqlite "$BACKUP_DIR/"
fi

# Backup configuration files
echo "⚙️ Backing up configuration..."
cp package.json "$BACKUP_DIR/"
cp next.config.js "$BACKUP_DIR/" 2>/dev/null || true
cp tsconfig.json "$BACKUP_DIR/" 2>/dev/null || true

# Create backup manifest
echo "📋 Creating backup manifest..."
cat > "$BACKUP_DIR/manifest.json" << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "version": "$(node -p "require('./package.json').version")",
  "files": [
    "source-code.tar.gz",
    "package.json",
    "next.config.js",
    "tsconfig.json"
  ]
}
EOF

echo "✅ Backup completed: $BACKUP_DIR"
