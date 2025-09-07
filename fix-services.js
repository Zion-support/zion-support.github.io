import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const servicePages = [
  'ai-services',
  'micro-saas',
  'cloud-services',
  'blockchain',
  'data-analytics',
  'cybersecurity',
  'project-management',
  'ecommerce-platform',
  'mobile-development',
  'ai-chatbot',
  'ai-chatbot-builder',
  'ai-code-reviewer',
  'ai-content-writer',
  'ai-customer-support',
  'ai-customer-support-automation',
  'ai-data-analysis',
  'ai-data-analytics',
  'ai-documentation-generator',
  'ai-financial-analyzer',
  'ai-financial-analytics',
  'ai-healthcare-analytics',
  'ai-hr-management',
  'ai-inventory-management',
  'ai-marketing-automation',
  'ai-meeting-assistant',
  'ai-predictive-analytics',
  'ai-powered-crm',
  'ai-project-management-suite',
  'ai-social-media-scheduler',
  'ai-testing-automation',
  'ai-video-generator',
  'analytics-dashboard',
  'api-testing-suite',
  'automation-solutions',
  'blockchain-solutions',
  'ci-cd-pipeline-builder',
  'crm-platform',
  'crm-solution',
  'customer-support-automation',
  'devops-automation',
  'digital-transformation',
  'email-automation',
  'email-automation-suite',
  'email-campaign-manager',
  'expense-tracker',
  'helpdesk-platform',
  'invoice-automation',
  'it-services',
  'lead-generation-tool',
  'real-time-data-processing',
  'seo-analyzer',
  'smart-invoice-generator',
  'social-media-management',
  'social-media-scheduler',
  'team-collaboration-hub',
  'vulnerability-scanner',
  'website-analyzer',
  'ai-fintech-solutions'
];

const industrySolutions = [
  'finance',
  'healthcare'
];

function createServicePage(serviceName) {
  const title = serviceName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const content = `import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: '${title} - Zion Tech Group',
  description: 'Professional ${title.toLowerCase()} solutions for your business needs.',
};

export default function ${serviceName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ${title.toLowerCase()} solutions designed to meet your business requirements 
            and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Implementation</h3>
              <p className="text-gray-600">
                Quick deployment and setup to get your solution running in no time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security and reliability for your peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                Built to grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your ${title.toLowerCase()} requirements 
              and get a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  return content;
}

function createIndustrySolutionPage(industryName) {
  const title = industryName.charAt(0).toUpperCase() + industryName.slice(1);
  
  const content = `import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: '${title} Solutions - Zion Tech Group',
  description: 'Specialized technology solutions for the ${industryName} industry.',
};

export default function ${title}SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ${title} Industry Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized technology solutions designed specifically for the ${industryName} industry. 
            We understand the unique challenges and compliance requirements of your sector.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Industry-specific Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our ${title} Solutions?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                    <p className="text-gray-600">
                      Deep understanding of ${industryName} industry challenges and requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                    <p className="text-gray-600">
                      Built with industry regulations and compliance standards in mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                    <p className="text-gray-600">
                      Enterprise-grade security designed for sensitive ${industryName} data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our ${title} Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Custom Software Development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Data Analytics & Reporting</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Process Automation</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Compliance Management</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Security Solutions</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Cloud Migration</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your ${title} Operations?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our specialized ${industryName} solutions can help 
              your organization achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  return content;
}

// Create service pages
servicePages.forEach(serviceName => {
  const dirPath = path.join(__dirname, 'app', 'services', serviceName);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Write the page content
  fs.writeFileSync(filePath, createServicePage(serviceName));
  console.log(`Created: ${filePath}`);
});

// Create industry solution pages
industrySolutions.forEach(industryName => {
  const dirPath = path.join(__dirname, 'app', 'services', 'industry-solutions', industryName);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Write the page content
  fs.writeFileSync(filePath, createIndustrySolutionPage(industryName));
  console.log(`Created: ${filePath}`);
});

console.log('All service pages created successfully!');