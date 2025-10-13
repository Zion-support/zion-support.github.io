const fs = require('fs');
const path = require('path');

const missingPages = [
  'it-consulting',
  'network-security',
  'software-development',
  'system-integration',
  'web-development',
  'contact',
  'blog',
  'privacy',
  'terms',
  'ai-content-generation',
  'ai-customer-support',
  'ai-cybersecurity',
  'ai-data-analytics',
  'ai-document-processing',
  'ai-marketing-automation',
  'ai-predictive-analytics',
  'ai-voice-assistant',
  'ai-workflow-automation',
  '5g-solutions',
  '5g-network-infrastructure',
  '5g-edge-computing',
  '5g-iot-solutions',
  '5g-smart-city-solutions',
  '5g-private-networks',
  '5g-mobile-applications',
  '5g-data-analytics',
  '5g-implementation',
  'project-management-tool',
  'customer-relationship-manager',
  'inventory-management-system',
  'financial-reporting-tool',
  'employee-time-tracker',
  'social-media-scheduler',
  'email-marketing-platform',
  'website-analytics-tool',
  'task-automation-workflow',
  'ai-powered-email-analyzer',
  'smart-inventory-optimizer',
  'ai-customer-sentiment-tracker',
  'smart-expense-categorizer',
  'zion-cloud-vault-pro',
  'zion-ai-crm-pro',
  'zion-ai-marketing-automation-pro',
  'zion-ai-project-manager-pro',
  'zion-ai-email-analyzer-pro',
  'zion-smart-inventory-optimizer-pro',
  'zion-ai-customer-sentiment-tracker-pro',
  'zion-smart-expense-categorizer-pro',
  'zion-ai-content-studio-pro',
  'zion-ai-devops-automation-pro'
];

const pageTemplate = (title, description) => `import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ${title.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())}() {
  return (
    <>
      <Helmet>
        <title>${title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Zion Tech Group</title>
        <meta
          name="description"
          content="${description}"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">${title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
          <p className="text-lg text-gray-300 mb-8">
            ${description}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}`;

missingPages.forEach(pageName => {
  const pageDir = path.join(__dirname, 'app', pageName);
  const pageFile = path.join(pageDir, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Create page file if it doesn't exist
  if (!fs.existsSync(pageFile)) {
    const title = pageName;
    const description = `Professional ${pageName.replace(/-/g, ' ')} services from Zion Tech Group`;
    const content = pageTemplate(title, description);
    fs.writeFileSync(pageFile, content);
    console.log(`Created ${pageFile}`);
  }
});

console.log('All missing pages created successfully!');