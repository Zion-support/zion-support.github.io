#!/bin/bash

echo "🔧 Resolving all merge conflicts by accepting incoming changes..."

# List of files with conflicts
conflict_files=(
    ".eslintrc.js"
    "next.config.js"
    "package.json"
    "src/api/services.ts"
    "src/components-disabled/LoadingSpinner.tsx"
    "src/components/Header.tsx"
    "src/components/SEO.tsx"
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

# Resolve conflicts by accepting incoming changes for each file
for file in "${conflict_files[@]}"; do
    if [ -f "$file" ]; then
        echo "Resolving conflicts in: $file"
        git checkout --theirs "$file"
        git add "$file"
    else
        echo "File not found: $file"
    fi
done

# Handle deleted files (modify/delete conflicts) by removing them
deleted_files=(
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
)

echo "🗑️ Removing deleted files..."
for file in "${deleted_files[@]}"; do
    if [ -f "$file" ]; then
        echo "Removing: $file"
        git rm "$file"
    fi
done

echo "✅ All conflicts resolved!"