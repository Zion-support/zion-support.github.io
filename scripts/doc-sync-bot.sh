#!/usr/bin/env bash
# scripts/doc-sync-bot.sh - Automatically generates and updates documentation from code
# Uses only free tools: awk, grep, find

set -euo pipefail

REPO_ROOT="${REPO_ROOT:-$(git rev-parse --show-toplevel)}"
DOCS_DIR="$REPO_ROOT/docs/auto-generated"
LOG_FILE="${LOG_FILE:-$HOME/.hermes/memory/doc-sync.log}"

mkdir -p "$DOCS_DIR"

log() { echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] $1" | tee -a "$LOG_FILE"; }

# Extract JSDoc/TSDoc comments and generate markdown
generate_api_docs() {
  log "Generating API documentation from TypeScript/JavaScript files..."
  find "$REPO_ROOT/app" -name "*.ts" -o -name "*.js" 2>/dev/null | while read -r file; do
    # Extract function comments and signatures
    awk '/\/\*\*[\s\S]*?\*\// { 
      comment=$0; 
      gsub(/\/\*\*|\*\/|\*/, "", comment);
      getline; 
      if (/function|const|export/ && !/^\s*\/\//) print "## " $0 "  \n" comment > "'$DOCS_DIR'/api-$(basename "$file" .ts).md"
    }' "$file"
  done
}

# Generate route documentation
generate_route_docs() {
  log "Generating route documentation..."
  find "$REPO_ROOT/app/api" -name "route.ts" -o -name "route.js" 2>/dev/null | while read -r file; do
    route_path=$(echo "$file" | sed "s|$REPO_ROOT/app/api/||; s|/[^/]*$||; s|route\\.ts||")
    methods=$(grep -E "GET|POST|PUT|DELETE|PATCH" "$file" | awk '{print $1}' | tr '\n' ' ')
    echo "### $route_path`  \nHTTP Methods: $methods  \nFile: $file" >> "$DOCS_DIR/routes.md"
  done
}

# Generate component documentation
generate_component_docs() {
  log "Generating component documentation..."
  find "$REPO_ROOT/components" -name "*.tsx" -o -name "*.jsx" 2>/dev/null | while read -r file; do
    comp_name=$(basename "$file" .tsx)
    echo "### $comp_name
File: $file
" > "$DOCS_DIR/components.md"
  done
}

# Main execution
log "Starting documentation sync..."
generate_api_docs
generate_route_docs
generate_component_docs
log "Documentation sync complete"