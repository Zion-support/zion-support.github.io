import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://zion.app';

const pages = [
  '',
  '/about',
  '/contact',
  '/research',
  '/services',
  '/solutions',
  '/services/ai-analytics-dashboard',
  '/services/ai-analytics-platform',
  '/services/ai-chatbot',
  '/services/ai-chatbot-builder',
  '/services/ai-chatbot-platform',
  '/services/ai-code-assistant',
  '/services/ai-code-reviewer',
  '/services/ai-content-generation',
  '/services/ai-content-generator',
  '/services/ai-content-optimizer',
  '/services/ai-content-writer',
  '/services/ai-copilots',
  '/services/ai-customer-insights',
  '/services/ai-customer-support',
  '/services/ai-customer-support-automation',
  '/services/ai-data-analysis',
  '/services/ai-data-analytics',
  '/services/ai-documentation-generator',
  '/services/ai-email-optimizer',
  '/services/ai-expense-tracker',
  '/services/ai-finance-analyzer',
  '/services/ai-financial-analytics',
  '/services/ai-financial-analyzer',
  '/services/ai-fintech-solutions',
  '/services/ai-healthcare-analytics',
  '/services/ai-healthcare-assistant',
  '/services/ai-hr-management',
  '/services/ai-inventory-management',
  '/services/ai-invoice-generator',
  '/services/ai-marketing-automation',
  '/services/ai-meeting-assistant',
  '/services/ai-meeting-transcriber',
  '/services/ai-powered-crm',
  '/services/ai-powered-tools',
  '/services/ai-predictive-analytics',
  '/services/ai-project-management',
  '/services/ai-project-management-suite',
  '/services/ai-project-manager',
  '/services/ai-services',
  '/services/ai-social-media-scheduler',
  '/services/ai-social-scheduler',
  '/services/ai-testing-automation',
  '/services/ai-video-generator',
  '/services/analytics-dashboard',
  '/services/api-development',
  '/services/api-testing-suite',
  '/services/automated-workflow-builder',
  '/services/automation-solutions',
  '/services/automation-tools',
  '/services/blockchain',
  '/services/blockchain-development',
  '/services/blockchain-solutions',
  '/services/business-automation',
  '/services/chatbot-development',
  '/services/ci-cd-pipeline-builder',
  '/services/cloud-migration',
  '/services/cloud-optimization',
  '/services/cloud-security-audit',
  '/services/cloud-services',
  '/services/computer-vision-solutions',
  '/services/crm-platform',
  '/services/crm-solution',
  '/services/customer-feedback-analyzer',
  '/services/customer-support-automation',
  '/services/cybersecurity',
  '/services/cybersecurity-consulting',
  '/services/cybersecurity-suite',
  '/services/data-analytics',
  '/services/database-optimization',
  '/services/devops-automation',
  '/services/digital-transformation',
  '/services/document-processing-automation',
  '/services/e-commerce-solutions',
  '/services/ecommerce-platform',
  '/services/edtech',
  '/services/email-automation',
  '/services/email-automation-suite',
  '/services/email-campaign-manager',
  '/services/email-marketing-automation',
  '/services/erp-solutions',
  '/services/expense-tracker',
  '/services/fintech',
  '/services/fintech-solutions',
  '/services/healthcare-solutions',
  '/services/healthtech',
  '/services/helpdesk-platform',
  '/services/industry-solutions',
  '/services/industry-solutions/finance',
  '/services/industry-solutions/healthcare',
  '/services/invoice-automation',
  '/services/iot-solutions',
  '/services/it-services',
  '/services/lead-generation-tool',
  '/services/micro-saas',
  '/services/mobile-app-development',
  '/services/mobile-development',
  '/services/natural-language-processing',
  '/services/predictive-analytics',
  '/services/project-management',
  '/services/project-management-suite',
  '/services/qa-testing',
  '/services/real-time-data-processing',
  '/services/seo-analyzer',
  '/services/smart-invoice-generator',
  '/services/social-media-automation',
  '/services/social-media-management',
  '/services/social-media-scheduler',
  '/services/software-development',
  '/services/team-collaboration-hub',
  '/services/voice-recognition',
  '/services/vulnerability-scanner',
  '/services/web-application-development',
  '/services/web-development',
  '/services/website-analyzer'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outDir = path.join(__dirname, '..', 'out');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully');
};

generateSitemap();