#!/bin/bash

# Script to resolve merge conflicts by accepting incoming changes
echo "Resolving merge conflicts by accepting incoming changes..."

# List of conflicted files
conflicted_files=(
    "app/about/page.tsx"
    "app/analytics-tools/page.tsx"
    "app/api-development/page.tsx"
    "app/api-docs/page.tsx"
    "app/api/page.tsx"
    "app/ar-vr-platform/page.tsx"
    "app/ar-vr-solutions/page.tsx"
    "app/backup-recovery/page.tsx"
    "app/blockchain-integration-services/page.tsx"
    "app/blockchain/page.tsx"
    "app/business-apps/page.tsx"
    "app/cloud-infrastructure-manager/page.tsx"
    "app/cloud-migration/page.tsx"
    "app/cloud-security/page.tsx"
    "app/cloud-services/page.tsx"
    "app/community/page.tsx"
    "app/components/Footer.tsx"
    "app/components/Navigation.tsx"
    "app/crm-lite/page.tsx"
    "app/custom-development/page.tsx"
    "app/custom-software/page.tsx"
    "app/cybersecurity-solutions/page.tsx"
    "app/cybersecurity-suite/page.tsx"
    "app/data-analytics-bi/page.tsx"
    "app/data-analytics/page.tsx"
    "app/data-center/page.tsx"
    "app/data-protection/page.tsx"
    "app/database-management/page.tsx"
    "app/database-services/page.tsx"
    "app/developer-tools/page.tsx"
    "app/devops-cicd/page.tsx"
    "app/digital-transformation/page.tsx"
    "app/digital-twin-platform/page.tsx"
    "app/docs/page.tsx"
)

# Resolve conflicts by accepting incoming changes
for file in "${conflicted_files[@]}"; do
    if [ -f "$file" ]; then
        echo "Resolving conflicts in $file..."
        git checkout --theirs "$file"
        git add "$file"
    else
        echo "File $file not found, skipping..."
    fi
done

echo "All conflicts resolved. Ready to commit."