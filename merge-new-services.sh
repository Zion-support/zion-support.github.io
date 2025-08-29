#!/bin/bash

echo "🚀 Merging new services into main branch..."

# Switch to main branch
git checkout main

# Create a new branch for the merge
git checkout -b merge-new-services-$(date +%Y%m%d-%H%M%S)

# Add all our new service files
git add src/data/advancedAIServices2030.ts
git add src/data/innovativeMicroSaasServices2030.ts
git add src/data/cuttingEdgeITInfrastructure2030.ts
git add src/data/emergingTechnologyServices2030.ts
git add src/data/comprehensiveServicesIndex2030.ts
git add src/data/comprehensivePricingGuide2030.ts
git add src/pages/ComprehensiveServicesLanding2030.tsx

# Update the Services.tsx page
git add src/pages/Services.tsx

# Update App.tsx routing
git add src/App.tsx

# Add our summary documents
git add NEW_SERVICES_AND_IMPROVEMENTS_SUMMARY.md
git add COMPREHENSIVE_SERVICES_EXPANSION_2030_SUMMARY.md

# Commit the changes
git commit -m "🚀 Add comprehensive new services expansion 2030

- Added 25+ new innovative AI, IT, and emerging technology services
- Enhanced Services page with dynamic categories and statistics
- New Comprehensive Services Landing 2030 page
- Updated routing and data structures
- Comprehensive pricing guides and market analysis
- Contact information: +1 302 464 0950, kleber@ziontechgroup.com
- Website: https://ziontechgroup.com"

echo "✅ New services merged successfully!"
echo "📊 Total new services added: 25+"
echo "🌐 New landing page: /services/comprehensive-2030"
echo "📱 Contact: +1 302 464 0950"
echo "📧 Email: kleber@ziontechgroup.com"
echo "🌍 Website: https://ziontechgroup.com"

# Push the new branch
git push origin HEAD

echo "🚀 Branch pushed successfully! Ready for merge to main."