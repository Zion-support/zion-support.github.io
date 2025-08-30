#!/bin/bash

echo "🔧 Fixing TypeScript syntax errors..."

# Fix the most common syntax errors
echo "Fixing 'any' syntax errors..."

# Fix CustomerFeedbackSystem.tsx
sed -i '' 's/date: anynew Date/date: new Date/g' src/components/CustomerFeedbackSystem.tsx
sed -i '' 's/feedbackId: anystring/feedbackId: string/g' src/components/CustomerFeedbackSystem.tsx
sed -i '' 's/sentiment: anystring/sentiment: string/g' src/components/CustomerFeedbackSystem.tsx
sed -i '' 's/category: anystring/category: string/g' src/components/CustomerFeedbackSystem.tsx

# Fix DataVisualization.tsx
sed -i '' 's/datasets: {;/datasets: {/g' src/components/DataVisualization.tsx

# Fix EnhancedAccessibilityPanel.tsx
sed -i '' 's/key: anykeyof AccessibilitySettings/key: keyof AccessibilitySettings/g' src/components/EnhancedAccessibilityPanel.tsx

# Fix EnhancedContact.tsx
sed -i '' 's/field: anykeyof ContactFormData/field: keyof ContactFormData/g' src/components/EnhancedContact.tsx

# Fix EnhancedHeroSection.tsx
sed -i '' 's/title: any"AI-Powered Business Solutions"/title: "AI-Powered Business Solutions"/g' src/components/EnhancedHeroSection.tsx

# Fix EnhancedNewsletter.tsx
sed -i '' 's/field: anykeyof NewsletterFormData/field: keyof NewsletterFormData/g' src/components/EnhancedNewsletter.tsx

# Fix EnhancedStatsSection.tsx
sed -i '' 's/threshold: any0.3/threshold: 0.3/g' src/components/EnhancedStatsSection.tsx

# Fix InteractiveUserExperience.tsx
sed -i '' 's/id: any'\''1'\''/id: '\''1'\''/g' src/components/InteractiveUserExperience.tsx

# Fix ModernUIEnhancer.tsx
sed -i '' 's/setting: anykeyof UISettings/setting: keyof UISettings/g' src/components/ModernUIEnhancer.tsx

# Fix NotificationSystem.tsx
sed -i '' 's/action?: {;/action?: {/g' src/components/NotificationSystem.tsx
sed -i '' 's/success: any(title: string/success: (title: string/g' src/components/NotificationSystem.tsx
sed -i '' 's/type: any'\''success'\''/type: '\''success'\''/g' src/components/NotificationSystem.tsx
sed -i '' 's/type: any'\''warning'\''/type: '\''warning'\''/g' src/components/NotificationSystem.tsx
sed -i '' 's/type: any'\''error'\''/type: '\''error'\''/g' src/components/NotificationSystem.tsx
sed -i '' 's/type: any'\''info'\''/type: '\''info'\''/g' src/components/NotificationSystem.tsx

# Fix PerformanceMonitor.tsx
sed -i '' 's/}, \[\]);/}, []);/g' src/components/PerformanceMonitor.tsx

# Fix ProjectManagementTimeline.tsx
sed -i '' 's/id: any'\''1'\''/id: '\''1'\''/g' src/components/ProjectManagementTimeline.tsx

# Fix ResourceManagementSystem.tsx
sed -i '' 's/id: any'\''1'\''/id: '\''1'\''/g' src/components/ResourceManagementSystem.tsx

# Fix SecurityEnhancer.tsx
sed -i '' 's/id: any'\''1'\''/id: '\''1'\''/g' src/components/SecurityEnhancer.tsx

# Fix SEOOptimizer.tsx
sed -i '' 's/coreWebVitals: {;/coreWebVitals: {/g' src/components/SEOOptimizer.tsx

# Fix ServicesOverview.tsx
sed -i '' 's/} from '\''lucide-react.ts'\'';/} from '\''lucide-react'\'';/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''ai-analytics'\''/id: '\''ai-analytics'\''/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''quantum-computing'\''/id: '\''quantum-computing'\''/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''blockchain'\''/id: '\''blockchain'\''/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''iot-edge'\''/id: '\''iot-edge'\''/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''cybersecurity'\''/id: '\''cybersecurity'\''/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''digital-twin'\''/id: '\''digital-twin'\''/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''sustainability'\''/id: '\''sustainability'\''/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''hr-talent'\''/id: '\''hr-talent'\''/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''content-creation'\''/id: '\''content-creation'\''/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''legal-tech'\''/id: '\''legal-tech'\''/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''fintech'\''/id: '\''fintech'\''/g' src/components/ServicesOverview.tsx
sed -i '' 's/id: any'\''healthcare-ai'\''/id: '\''healthcare-ai'\''/g' src/components/ServicesOverview.tsx

# Fix UltimateServicesShowcase.tsx
sed -i '' 's/contactInfo: {;/contactInfo: {/g' src/components/UltimateServicesShowcase.tsx
sed -i '' 's/color: any'\''from-purple-600 to-pink-700'\''/color: '\''from-purple-600 to-pink-700'\''/g' src/components/UltimateServicesShowcase.tsx

# Fix other common issues
echo "Fixing other syntax errors..."

# Fix lucide-react imports
find src -name "*.tsx" -exec sed -i '' 's/from '\''lucide-react\.ts'\''/from '\''lucide-react'\''/g' {} \;

# Fix JSX syntax issues
find src -name "*.tsx" -exec sed -i '' 's/anykeyof/keyof/g' {} \;
find src -name "*.tsx" -exec sed -i '' 's/anystring/string/g' {} \;

echo "✅ TypeScript syntax errors fixed!"
echo "Running TypeScript check..."
npx tsc --noEmit --skipLibCheck
