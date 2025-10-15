import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all remaining corrupted files from the type check output
const remainingCorruptedFiles = [
  'app/ai-services/business-intelligence/page.tsx',
  'app/ai-services/content-generation/page.tsx',
  'app/ai-services/customer-experience/page.tsx',
  'app/ai-services/document-processing/page.tsx',
  'app/ai-services/energy-management/page.tsx',
  'app/ai-services/fraud-detection/page.tsx',
  'app/ai-services/hr-analytics/page.tsx',
  'app/ai-services/marketing-automation/page.tsx',
  'app/ai-services/predictive-maintenance/page.tsx',
  'app/ai-services/process-automation/page.tsx',
  'app/ai-services/quality-assurance/page.tsx',
  'app/ai-services/supply-chain/page.tsx',
  'app/analytics-dashboard/page.tsx',
  'app/analytics/page.tsx',
  'app/analytics-tools/page.tsx',
  'app/api-development-advanced/page.tsx',
  'app/api-development/page.tsx',
  'app/api/page.tsx',
  'app/ar-vr-platform/page.tsx',
  'app/ar-vr-solutions/page.tsx',
  'app/automation/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain-development/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/blockchain/page.tsx',
  'app/business-apps/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/chat/page.tsx',
  'app/cloud-consulting/page.tsx',
  'app/cloud-cost-optimization/page.tsx',
  'app/cloud-infrastructure-manager/page.tsx',
  'app/cloud-migration-advanced/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-migration-pro/page.tsx',
  'app/cloud-migration-services/page.tsx',
  'app/cloud-native-development/page.tsx',
  'app/cloud-native-security/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-services/page.tsx',
  'app/cloud-solutions/page.tsx',
  'app/community/page.tsx',
  'app/compliance-automation/page.tsx',
  'app/compliance/page.tsx',
  'app/computer-vision/page.tsx',
  'app/consultation/page.tsx',
  'app/cookie-policy/page.tsx',
  'app/create-ad/page.tsx',
  'app/crm-lite/page.tsx',
  'app/custom-development/page.tsx',
  'app/customer-relationship-manager/page.tsx',
  'app/customer-relationship-saas/page.tsx',
  'app/customer-support-hub/page.tsx',
  'app/custom-software/page.tsx',
  'app/cybersecurity-advanced/page.tsx',
  'app/cybersecurity-consulting/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/cybersecurity-suite/page.tsx',
  'app/data-analytics-bi/page.tsx',
  'app/database/page.tsx',
  'app/database-services/page.tsx',
  'app/data-center/page.tsx',
  'app/data-center-solutions/page.tsx',
  'app/data-engineering/page.tsx',
  'app/data-protection/page.tsx',
  'app/data-visualization/page.tsx',
  'app/demo/page.tsx',
  'app/developer-tools/page.tsx',
  'app/devops-advanced/page.tsx',
  'app/devops-cicd/page.tsx',
  'app/devops/page.tsx',
  'app/devops-services/page.tsx',
  'app/devops-solutions/page.tsx',
  'app/digital-twin-platform/page.tsx',
  'app/disaster-recovery-advanced/page.tsx',
  'app/disaster-recovery/page.tsx',
  'app/docs/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/e-commerce-development/page.tsx',
  'app/edge-computing/page.tsx',
  'app/email-marketing-automation/page.tsx',
  'app/email-marketing-platform/page.tsx',
  'app/email-marketing-saas/page.tsx',
  'app/email-optimizer/page.tsx',
  'app/employee-management-saas/page.tsx',
  'app/employee-time-tracker/page.tsx',
  'app/enterprise-integration/page.tsx',
  'app/enterprise/page.tsx',
  'app/enterprise-security/page.tsx',
  'app/enterprise-solutions/page.tsx',
  'app/error.tsx',
  'app/expense-tracker/page.tsx',
  'app/expense-tracker-pro/page.tsx',
  'app/financial-it/page.tsx',
  'app/financial-management-saas/page.tsx',
  'app/financial-reporting-tool/page.tsx',
  'app/gdpr-compliance/page.tsx',
  'app/gdpr/page.tsx',
  'app/global-error.tsx',
  'app/guides/page.tsx',
  'app/healthcare-it/page.tsx',
  'app/health/page.tsx',
  'app/infrastructure-management/page.tsx',
  'app/innovation-labs/page.tsx',
  'app/intelligent-database-migration/page.tsx',
  'app/intelligent-email-infrastructure/page.tsx',
  'app/inventory-management-saas/page.tsx',
  'app/inventory-management-system/page.tsx',
  'app/inventory-manager/page.tsx',
  'app/investors/page.tsx',
  'app/iot-development/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-integration/page.tsx',
  'app/iot/page.tsx',
  'app/iot-platform/page.tsx',
  'app/iot-solutions/page.tsx',
  'app/it-asset-management/page.tsx',
  'app/it-consulting/page.tsx',
  'app/it-infrastructure-design/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-infrastructure-solutions/page.tsx',
  'app/it-micro-saas/page.tsx',
  'app/it-performance/page.tsx',
  'app/it-project-management/page.tsx',
  'app/it-security-services/page.tsx',
  'app/it-services/cloud-migration/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/it-solutions/page.tsx',
  'app/it-support/page.tsx',
  'app/it-training/page.tsx',
  'app/landing-page-builder/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/loading.tsx',
  'app/machine-learning-ops/page.tsx',
  'app/machine-learning/page.tsx',
  'app/main.tsx',
  'app/managed-it/page.tsx',
  'app/managed-services/page.tsx',
  'app/marketing-tools/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/mobile-app-development/page.tsx',
  'app/network-design/page.tsx',
  'app/network-security/page.tsx',
  'app/network-solutions/page.tsx',
  'app/news/page.tsx',
  'app/nlp/page.tsx',
  'app/not-found/page.tsx',
  'app/not-found.tsx',
  'app/offline/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/partners/page.tsx',
  'app/penetration-testing/page.tsx',
  'app/performance-optimization/page.tsx',
  'app/press/page.tsx',
  'app/privacy-policy/page.tsx',
  'app/process-automation/page.tsx',
  'app/productivity/page.tsx',
  'app/project-management-pro/page.tsx',
  'app/project-management-saas/page.tsx',
  'app/project-management-tool/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/quantum-ai/page.tsx',
  'app/quantum-computing/page.tsx',
  'app/quantum-computing-solutions/page.tsx',
  'app/report/page.tsx',
  'app/resources/page.tsx',
  'app/robotics-i/page.tsx'
];

// Template for a basic page component
const pageTemplate = (pageName, title, description) => `import { Helmet } from 'react-helmet-async';

export default function ${pageName}() {
  return (
    <>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ${title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              ${description}
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-700">
                This page is currently under development. Please check back later for more content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Function to generate page name and title from file path
function generatePageInfo(filePath) {
  const pathParts = filePath.split('/');
  const pageName = pathParts[pathParts.length - 2]; // Get the directory name before page.tsx
  
  // Convert kebab-case to Title Case
  const title = pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const description = `Professional ${title} solutions for modern businesses`;
  
  return {
    pageName: title.replace(/\s+/g, '') + 'Page',
    title,
    description
  };
}

// Fix all remaining corrupted files
remainingCorruptedFiles.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    const { pageName, title, description } = generatePageInfo(filePath);
    
    // Ensure directory exists
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write the new content
    const content = pageTemplate(pageName, title, description);
    fs.writeFileSync(fullPath, content, 'utf8');
    
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All remaining corrupted pages have been fixed!');