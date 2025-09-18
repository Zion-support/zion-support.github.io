#!/bin/bash

echo "Resolving merge conflicts for working-build-improvements branch..."

# Handle package-lock.json conflict - keep current version
git checkout --ours package-lock.json
git add package-lock.json

# Handle modify/delete conflicts - add files that were deleted in working-build-improvements
git rm components/feedback/FeedbackWidget.tsx
git rm recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/use-toast.ts

# Handle modify/delete conflicts - add files that were deleted in HEAD
git add src/components/FooterNewsletter.tsx
git add src/components/Header.tsx
git add src/components/ui/toast.tsx

# Resolve content conflicts by taking the incoming version for most files
conflict_files=(
    "App.tsx"
    "components/ErrorBoundary.tsx"
    "components/LoadingSpinner.tsx"
    "components/PerformanceMonitor.tsx"
    "pages/index.tsx"
    "pages/pricing.tsx"
    "pages/services.tsx"
    "src/App.tsx"
    "src/components/ErrorBoundary.tsx"
    "src/components/Footer.tsx"
    "src/components/layout/Sidebar.tsx"
    "vite.config.ts"
)

for file in "${conflict_files[@]}"; do
    if [ -f "$file" ]; then
        echo "Resolving conflicts in $file..."
        # Take the incoming version (theirs) for these files
        git checkout --theirs "$file"
        git add "$file"
    fi
done

echo "All conflicts resolved for working-build-improvements!"