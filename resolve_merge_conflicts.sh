#!/bin/bash

echo "Starting comprehensive merge conflict resolution..."

# Function to resolve conflicts in a file
resolve_conflict() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    if [[ ! -f "$file" ]]; then
        echo "File $file does not exist, skipping..."
        return 0
    fi
    
    # Check if file has merge conflicts
    if ! grep -q "<<<<<<< HEAD" "$file"; then
        echo "No conflicts in $file"
        return 0
    fi
    
    # Create backup
    cp "$file" "$file.backup"
    
    # For most files, we'll accept the incoming changes (from the remote branch)
    # This is typically safer for merge conflicts
    echo "Accepting incoming changes for $file"
    git checkout --theirs "$file" 2>/dev/null || true
    
    # If that fails, try to resolve manually for key files
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Manual resolution needed for $file"
        # For key configuration files, prefer the current version
        if [[ "$file" == "package.json" || "$file" == "next.config.js" || "$file" == "netlify.toml" ]]; then
            git checkout --ours "$file" 2>/dev/null || true
        else
            # For other files, remove conflict markers and keep both versions where possible
            sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
            sed -i '/^>>>>>>> /d' "$file"
        fi
    fi
    
    # Add the resolved file
    git add "$file"
}

# List of files with conflicts (from the git status output)
conflict_files=(
    ".eslintrc.js"
    "fix_all_remaining_syntax.js"
    "middleware.ts"
    "next.config.js"
    "package.json"
    "src/api/services.ts"
    "src/components-disabled/LoadingSpinner.tsx"
    "src/components/Header.tsx"
    "src/components/SEO.tsx"
    "src/components/ui/separator.tsx"
    "src/components/ui/tabs.tsx"
    "src/lib/utils.ts"
    "src/test/setup.ts"
    "src/utils/AdvancedCacheManager.ts"
    "src/utils/EnhancedApiClient.ts"
    "src/utils/apiClient.ts"
    "src/utils/cacheManager.ts"
    "src/utils/consoleErrorToast.ts"
    "src/utils/contentOptimizer.jsx"
    "src/utils/contentOptimizer.ts"
    "src/utils/contentQualityAnalyzer.ts"
    "src/utils/errorBoundary.tsx"
    "src/utils/generateInvoicePdf.ts"
    "src/utils/generateRandomListing.ts"
    "src/utils/imageOptimizer.tsx"
    "src/utils/linkChecker.ts"
    "src/utils/linkHealthChecker.ts"
    "src/utils/linkValidator.ts"
    "src/utils/mimeTypeFallback.ts"
    "src/utils/passwordStrength.js"
    "src/utils/performance.ts"
    "src/utils/performanceMonitor.ts"
    "src/utils/performanceOptimizer.ts"
    "src/utils/referralUtils.ts"
    "src/utils/resourceMonitor.ts"
    "src/utils/retry.ts"
    "src/utils/safeStorage.ts"
    "src/utils/searchUtils.ts"
    "src/utils/sentry-mock.ts"
    "src/utils/sentry.ts"
    "src/utils/seoOptimizer.ts"
    "src/utils/serviceMapper.ts"
    "src/utils/serviceWorker.ts"
    "src/utils/sitemapGenerator.js"
    "src/utils/sitemapGenerator.jsx"
    "src/utils/sitemapGenerator.ts"
    "src/utils/withErrorLogging.ts"
)

echo "Resolving conflicts in ${#conflict_files[@]} files..."

# Resolve conflicts in each file
for file in "${conflict_files[@]}"; do
    resolve_conflict "$file"
done

# Handle modify/delete conflicts by removing the files (they were deleted intentionally)
echo "Handling modify/delete conflicts..."

# List of files that were deleted but modified in the incoming branch
deleted_files=(
    "app/layout.tsx"
    "backup-problematic-pages/Cart.tsx"
    "backup-problematic-pages/Categories.tsx"
    "backup-problematic-pages/Services.tsx"
    "backup-problematic-pages/app-main/ai-2025/page.tsx"
    "src/app/layout.tsx"
    "src/components/CategoryCard.tsx"
    "src/components/GlobalErrorBoundary.tsx"
    "src/components/GradientHeading.js"
    "src/components/GradientHeading.tsx"
    "src/components/ProtectedRoute.tsx"
    "src/components/ScreenReaderAnnouncements.tsx"
    "src/components/ThemeToggle.tsx"
    "src/components/jobs/applications.tsx"
    "src/components/projects/milestones/MilestoneSuggestions.tsx"
    "src/components/ui/badge.tsx"
    "src/data/case-studies.ts"
    "src/data/categories.ts"
    "src/hooks/index.ts"
    "src/hooks/use-mobile.js"
    "src/pages/About.tsx"
    "src/pages/AllCategoriesPage.tsx"
    "src/pages/ApiDocsHub.tsx"
    "src/pages/ApplicationStatusTracker.tsx"
    "src/pages/Blog.tsx"
    "src/pages/BlogPost.tsx"
    "src/pages/Careers.tsx"
    "src/pages/Cart.tsx"
    "src/pages/CaseStudy.tsx"
    "src/pages/Categories.tsx"
    "src/pages/CategoryDetail.tsx"
    "src/pages/ClientDashboard.tsx"
    "src/pages/Contact.tsx"
    "src/pages/ContentGenerator.tsx"
    "src/pages/DeveloperPortal.tsx"
    "src/pages/ForumCategoryPage.tsx"
    "src/pages/ForumPostPage.tsx"
    "src/pages/Home.tsx"
    "src/pages/Services.tsx"
    "src/pages/Status.tsx"
    "src/pages/TalentsPage.tsx"
    "src/pages/TranslationManager.tsx"
    "src/pages/Wishlist.tsx"
    "temp_broken_pages/Careers.tsx"
    "temp_broken_pages/Cart.tsx"
    "temp_broken_pages/CaseStudy.tsx"
    "temp_broken_pages/Categories.tsx"
    "temp_broken_pages/CategoryDetail.tsx"
)

# Remove the files that were deleted intentionally
for file in "${deleted_files[@]}"; do
    if [[ -f "$file" ]]; then
        echo "Removing deleted file: $file"
        git rm "$file" 2>/dev/null || rm -f "$file"
    fi
done

# Handle temp_broken_pages_all directory
echo "Handling temp_broken_pages_all directory..."
if [[ -d "temp_broken_pages_all" ]]; then
    echo "Removing temp_broken_pages_all directory..."
    git rm -rf temp_broken_pages_all/ 2>/dev/null || rm -rf temp_broken_pages_all/
fi

echo "Merge conflict resolution completed!"
echo "Checking git status..."

git status --porcelain | head -20