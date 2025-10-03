#!/bin/bash

echo "🔧 Fixing TypeScript syntax errors..."

# Fix className: to className= in all TSX files
echo "Fixing className syntax..."
find src -name "*.tsx" -type f -exec sed -i 's/className: "/className="/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/className: "/className="/g' {} \;

# Fix unterminated string literals in solutions pages
echo "Fixing unterminated string literals..."

# Fix EnterpriseSolutionsPage.tsx
sed -i 's/title: "Enterprise AI Platform/title: "Enterprise AI Platform"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/description: "Comprehensive AI platform designed for large-scale enterprise deployment with advanced analytics and automation capabilities./description: "Comprehensive AI platform designed for large-scale enterprise deployment with advanced analytics and automation capabilities."/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/icon: "🏢/icon: "🏢"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx

sed -i 's/title: "Digital Transformation/title: "Digital Transformation"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/description: "Complete digital transformation solutions that modernize legacy systems and enable new digital capabilities./description: "Complete digital transformation solutions that modernize legacy systems and enable new digital capabilities."/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/icon: "🔄/icon: "🔄"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx

sed -i 's/title: "Enterprise Security/title: "Enterprise Security"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/description: "Comprehensive security solutions including threat detection, compliance management, and data protection./description: "Comprehensive security solutions including threat detection, compliance management, and data protection."/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/icon: "🛡️/icon: "🛡️"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx

sed -i 's/title: "Enterprise Analytics/title: "Enterprise Analytics"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/description: "Advanced analytics and business intelligence solutions for data-driven decision making across the organization./description: "Advanced analytics and business intelligence solutions for data-driven decision making across the organization."/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/icon: "📊/icon: "📊"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx

sed -i 's/title: "Enterprise Integration/title: "Enterprise Integration"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/description: "Seamless integration solutions that connect disparate systems and enable data flow across the enterprise./description: "Seamless integration solutions that connect disparate systems and enable data flow across the enterprise."/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/icon: "🔗/icon: "🔗"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx

sed -i 's/title: "Enterprise Support/title: "Enterprise Support"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/description: "24\/7 enterprise-grade support and maintenance services to ensure optimal system performance./description: "24\/7 enterprise-grade support and maintenance services to ensure optimal system performance."/g' src/pages/solutions/EnterpriseSolutionsPage.tsx
sed -i 's/icon: "🛠️/icon: "🛠️"/g' src/pages/solutions/EnterpriseSolutionsPage.tsx

# Fix SMBSolutionsPage.tsx
sed -i 's/title: "Business Process Automation/title: "Business Process Automation"/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/description: "Streamline your business operations with cost-effective automation solutions designed for small and medium businesses./description: "Streamline your business operations with cost-effective automation solutions designed for small and medium businesses."/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/icon: "⚙️/icon: "⚙️"/g' src/pages/solutions/SMBSolutionsPage.tsx

sed -i 's/title: "Cloud Solutions/title: "Cloud Solutions"/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/description: "Affordable cloud solutions that provide enterprise-grade capabilities without the enterprise price tag./description: "Affordable cloud solutions that provide enterprise-grade capabilities without the enterprise price tag."/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/icon: "☁️/icon: "☁️"/g' src/pages/solutions/SMBSolutionsPage.tsx

sed -i 's/title: "Business Intelligence/title: "Business Intelligence"/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/description: "Transform your data into actionable insights with user-friendly analytics and reporting tools./description: "Transform your data into actionable insights with user-friendly analytics and reporting tools."/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/icon: "📊/icon: "📊"/g' src/pages/solutions/SMBSolutionsPage.tsx

sed -i 's/title: "Customer Management/title: "Customer Management"/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/description: "Enhance customer relationships with integrated CRM and customer service solutions./description: "Enhance customer relationships with integrated CRM and customer service solutions."/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/icon: "👥/icon: "👥"/g' src/pages/solutions/SMBSolutionsPage.tsx

sed -i 's/title: "Security Solutions/title: "Security Solutions"/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/description: "Protect your business with comprehensive security solutions tailored for SMB needs and budgets./description: "Protect your business with comprehensive security solutions tailored for SMB needs and budgets."/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/icon: "🔒/icon: "🔒"/g' src/pages/solutions/SMBSolutionsPage.tsx

sed -i 's/title: "IT Support/title: "IT Support"/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/description: "Reliable IT support and maintenance services to keep your systems running smoothly and efficiently./description: "Reliable IT support and maintenance services to keep your systems running smoothly and efficiently."/g' src/pages/solutions/SMBSolutionsPage.tsx
sed -i 's/icon: "🛠️/icon: "🛠️"/g' src/pages/solutions/SMBSolutionsPage.tsx

# Fix StartupSolutionsPage.tsx
sed -i 's/title: "MVP Development/title: "MVP Development"/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/description: "Rapid development of minimum viable products to validate your ideas and get to market quickly./description: "Rapid development of minimum viable products to validate your ideas and get to market quickly."/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/icon: "🚀/icon: "🚀"/g' src/pages/solutions/StartupSolutionsPage.tsx

sed -i 's/title: "Scalable Architecture/title: "Scalable Architecture"/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/description: "Build your startup on a foundation that can scale from prototype to enterprise without major rewrites./description: "Build your startup on a foundation that can scale from prototype to enterprise without major rewrites."/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/icon: "📈/icon: "📈"/g' src/pages/solutions/StartupSolutionsPage.tsx

sed -i 's/title: "AI Integration/title: "AI Integration"/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/description: "Leverage artificial intelligence to differentiate your product and create competitive advantages./description: "Leverage artificial intelligence to differentiate your product and create competitive advantages."/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/icon: "🤖/icon: "🤖"/g' src/pages/solutions/StartupSolutionsPage.tsx

sed -i 's/title: "Growth Analytics/title: "Growth Analytics"/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/description: "Data-driven insights to understand user behavior, optimize conversion, and drive sustainable growth./description: "Data-driven insights to understand user behavior, optimize conversion, and drive sustainable growth."/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/icon: "📊/icon: "📊"/g' src/pages/solutions/StartupSolutionsPage.tsx

sed -i 's/title: "Technical Co-founder Services/title: "Technical Co-founder Services"/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/description: "Get the technical expertise you need without hiring a full-time CTO through our co-founder services./description: "Get the technical expertise you need without hiring a full-time CTO through our co-founder services."/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/icon: "👨‍💻/icon: "👨‍💻"/g' src/pages/solutions/StartupSolutionsPage.tsx

sed -i 's/title: "Funding Support/title: "Funding Support"/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/description: "Technical documentation and demos to support your fundraising efforts and investor presentations./description: "Technical documentation and demos to support your fundraising efforts and investor presentations."/g' src/pages/solutions/StartupSolutionsPage.tsx
sed -i 's/icon: "💰/icon: "💰"/g' src/pages/solutions/StartupSolutionsPage.tsx

# Fix SmartAppointmentScheduler.tsx syntax errors
echo "Fixing SmartAppointmentScheduler.tsx..."
sed -i 's/className="bg-white rounded-lg shadow-lg p-8">",/className="bg-white rounded-lg shadow-lg p-8">/g' src/pages/services/SmartAppointmentScheduler.tsx
sed -i 's/className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block",/className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"/g' src/pages/services/SmartAppointmentScheduler.tsx
sed -i 's/className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center",/className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"/g' src/pages/services/SmartAppointmentScheduler.tsx
sed -i 's/className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center",/className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"/g' src/pages/services/SmartAppointmentScheduler.tsx
sed -i 's/className="bg-white rounded-xl shadow-lg p-8">",/className="bg-white rounded-xl shadow-lg p-8">/g' src/pages/services/SmartAppointmentScheduler.tsx

# Remove corrupted syntax patterns
echo "Removing corrupted syntax patterns..."
find src -name "*.tsx" -type f -exec sed -i 's/className: "/className="/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/className: "/className="/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/className: "/className="/g' {} \;

# Fix common JSX syntax issues
find src -name "*.tsx" -type f -exec sed -i 's/className: "/className="/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/className: "/className="/g' {} \;

echo "✅ Syntax fixes applied!"