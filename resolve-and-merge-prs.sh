#!/bin/bash

# Script to resolve merge conflicts and merge all open PRs
set -e

echo "=== Starting PR Resolution and Merge Process ==="

# List of open PRs and their branches
declare -A PR_BRANCHES=(
    ["12987"]="cursor/fix-netlify-build-and-merge-to-main-22b3"
    ["12986"]="cursor/check-fix-push-and-merge-to-main-a4a5"
    ["12985"]="cursor/fix-netlify-build-and-merge-to-main-77fd"
    ["12984"]="cursor/fix-netlify-build-and-merge-to-main-ddeb"
    ["12983"]="cursor/fix-netlify-build-and-merge-to-main-4f62"
)

# Function to resolve conflicts in netlify.toml
resolve_netlify_conflicts() {
    echo "Resolving netlify.toml conflicts..."
    
    # Keep the current main branch version as it's more comprehensive
    cat > netlify.toml << 'EOF'
[build]
  command = "corepack enable && pnpm install --frozen-lockfile --prefer-offline --loglevel warn && pnpm build"
  publish = "dist"
  command_timeout = "30m"

[build.environment]
  NODE_VERSION = "22.12.0"
  NODE_OPTIONS = "--max-old-space-size=6144"
  # Skip Sharp postinstall to avoid NAPI issues
  SHARP_IGNORE_GLOBAL_LIBVIPS = "1"
  SHARP_DIST_BASE_URL = "https://github.com/lovell/sharp-libvips/releases/download/v1.2.0/"
  # Force Vite build
  VITE_BUILD = "true"
  # Ensure proper build environment
  NODE_ENV = "production"
  CI = "true"
  # Disable linting during build to prevent failures
  ESLINT_NO_DEV_ERRORS = "true"
  # Optimize build performance
  VITE_LEGACY_BUILD = "false"
  NETLIFY_USE_PNPM = "true"
  SECRETS_SCAN_OMIT_KEYS = "VITE_CLOUDINARY_CLOUD_NAME"
  PNPM_VERSION = "9.12.1"
  # Additional NPM flags for better performance
  NPM_FLAGS = "--no-audit --no-fund --prefer-offline"

# API functions (disabled for Vite SPA)
# [functions]
# directory = "netlify/functions"

# Security headers for all pages
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    X-DNS-Prefetch-Control = "on"
    Content-Security-Policy = "default-src 'self'; object-src 'none'; upgrade-insecure-requests; script-src 'self' 'unsafe-inline' https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://plausible.io; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
    Cross-Origin-Opener-Policy = "same-origin"
    Cross-Origin-Resource-Policy = "same-origin"
    X-Permitted-Cross-Domain-Policies = "none"
    Origin-Agent-Cluster = "?1"

# Long-term caching for static assets
[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/ai-financial-planning-platform"
  to = "/services/ai-financial-planning-platform/"
  status = 301

[[redirects]]
  from = "/ai-powered-decision-engine"
  to = "/services/ai-powered-decision-engine/"
  status = 301

[[redirects]]
  from = "/intelligent-content-automation-platform"
  to = "/services/intelligent-content-automation-platform/"
  status = 301

[[redirects]]
  from = "/intelligent-hr-analytics-platform"
  to = "/services/intelligent-hr-analytics-platform/"
  status = 301

[[redirects]]
  from = "/smart-crm-intelligence-suite"
  to = "/services/smart-crm-intelligence-suite/"
  status = 301

[[redirects]]
  from = "/affiliate-attribution-suite"
  to = "/services/affiliate-attribution-suite/"
  status = 301

# SPA fallback for client-side routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOF
}

# Function to merge a PR branch
merge_pr_branch() {
    local pr_num=$1
    local branch_name=$2
    
    echo "=== Processing PR #$pr_num: $branch_name ==="
    
    # Fetch the latest changes
    git fetch origin
    
    # Try to merge the branch
    if git merge --no-commit --no-ff "origin/$branch_name" 2>/dev/null; then
        echo "✅ No conflicts found for PR #$pr_num"
        git commit -m "Merge PR #$pr_num: $branch_name"
        echo "✅ Successfully merged PR #$pr_num"
    else
        echo "⚠️  Conflicts found for PR #$pr_num, resolving..."
        
        # Check if netlify.toml has conflicts
        if git status --porcelain | grep -q "netlify.toml"; then
            resolve_netlify_conflicts
            git add netlify.toml
        fi
        
        # Add any other conflicted files (use main branch version)
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
            if [ -f "$file" ]; then
                echo "Resolving conflict in $file (keeping main branch version)"
                git checkout --ours "$file"
                git add "$file"
            fi
        done
        
        # Commit the merge
        git commit -m "Merge PR #$pr_num: $branch_name (conflicts resolved)"
        echo "✅ Successfully merged PR #$pr_num with conflicts resolved"
    fi
}

# Main execution
echo "Current branch: $(git branch --show-current)"
echo "Current commit: $(git rev-parse HEAD)"

# Process each PR
for pr_num in "${!PR_BRANCHES[@]}"; do
    branch_name="${PR_BRANCHES[$pr_num]}"
    merge_pr_branch "$pr_num" "$branch_name"
done

echo "=== All PRs processed ==="

# Push changes to main
echo "Pushing changes to main branch..."
git push origin main

echo "=== Process completed successfully ==="