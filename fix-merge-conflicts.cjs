const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesWithConflicts = [
  '/workspace/app/contact/ContactForm.tsx',
  '/workspace/app/components/TestimonialCard.tsx',
  '/workspace/app/services/mobile-development/page.tsx',
  '/workspace/app/services/email-automation-suite/page.tsx',
  '/workspace/app/services/project-management/page.tsx',
  '/workspace/app/services/automated-workflow-builder/page.tsx',
  '/workspace/app/services/vulnerability-scanner/page.tsx',
  '/workspace/app/services/customer-support-automation/page.tsx',
  '/workspace/app/services/expense-tracker/page.tsx',
  '/workspace/app/services/automation-solutions/page.tsx',
  '/workspace/app/services/crm-platform/page.tsx',
  '/workspace/app/services/email-campaign-manager/page.tsx',
  '/workspace/app/services/business-automation/page.tsx',
  '/workspace/app/services/real-time-data-processing/page.tsx',
  '/workspace/app/services/industry-solutions/healthcare/page.tsx',
  '/workspace/app/services/industry-solutions/finance/page.tsx',
  '/workspace/app/services/lead-generation-tool/page.tsx',
  '/workspace/app/services/social-media-scheduler/page.tsx',
  '/workspace/app/services/ci-cd-pipeline-builder/page.tsx',
  '/workspace/app/services/invoice-automation/page.tsx',
  '/workspace/app/services/crm-solution/page.tsx',
  '/workspace/app/services/helpdesk-platform/page.tsx',
  '/workspace/app/services/ecommerce-platform/page.tsx',
  '/workspace/app/services/api-testing-suite/page.tsx',
  '/workspace/app/services/team-collaboration-hub/page.tsx',
  '/workspace/app/services/digital-transformation/page.tsx',
  '/workspace/app/services/ai-video-generator/page.tsx',
  '/workspace/app/services/website-analyzer/page.tsx',
  '/workspace/app/services/analytics-dashboard/page.tsx',
  '/workspace/app/services/cloud-services/page.tsx',
  '/workspace/app/services/project-management-suite/page.tsx',
  '/workspace/app/services/social-media-management/page.tsx',
  '/workspace/app/services/email-automation/page.tsx',
  '/workspace/app/services/seo-analyzer/page.tsx',
  '/workspace/app/services/cybersecurity-suite/page.tsx'
];

function createCleanServicePage(title, description, keywords) {
  return `export const metadata = {
  title: '${title} | Zion Tech Group',
  description: '${description}',
  keywords: '${keywords}',
};

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-orange-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">${title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          ${description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Professional Solutions"
          details={[
            'Expert implementation',
            'Custom development',
            'Quality assurance',
            'Ongoing support',
            'Scalable architecture',
          ]}
        />
        <FeatureCard
          title="Advanced Technology"
          details={[
            'Cutting-edge tools',
            'Modern frameworks',
            'Best practices',
            'Performance optimization',
            'Security compliance',
          ]}
        />
        <FeatureCard
          title="Business Value"
          details={[
            'ROI optimization',
            'Process improvement',
            'Cost reduction',
            'Efficiency gains',
            'Competitive advantage',
          ]}
        />
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your business with our professional ${title.toLowerCase()} solutions.
          Contact us today to discuss your requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
}`;
}

function getServiceInfo(filename) {
  const basename = path.basename(filename, '.tsx');
  const serviceName = basename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const description = `Professional ${serviceName.toLowerCase()} solutions for your business needs.`;
  const keywords = basename + ', services, business, technology';
  
  return { serviceName, description, keywords };
}

// Fix each file
filesWithConflicts.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      const { serviceName, description, keywords } = getServiceInfo(filePath);
      const cleanContent = createCleanServicePage(serviceName, description, keywords);
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All merge conflicts fixed!');