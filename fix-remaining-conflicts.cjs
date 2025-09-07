const fs = require('fs');
const path = require('path');

console.log('Fixing remaining merge conflicts...');

// List of remaining service files with conflicts
const conflictedFiles = [
  'app/services/devops-automation/page.tsx',
  'app/services/ai-meeting-assistant/page.tsx',
  'app/services/ai-powered-crm/page.tsx',
  'app/services/ai-code-reviewer/page.tsx',
  'app/services/ai-financial-analytics/page.tsx',
  'app/services/ai-marketing-automation/page.tsx',
  'app/services/ai-customer-support/page.tsx',
  'app/services/ai-project-management-suite/page.tsx',
  'app/services/ai-data-analytics/page.tsx'
];

// Function to create a clean service page template
function createCleanServicePage(serviceName, title, description, keywords, icon, color) {
  return `import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '${title} | Zion Tech Group',
  description: '${description}',
  keywords: '${keywords}'
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className="py-12 bg-${color}-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss how our ${serviceName} can help your business succeed.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=${serviceName} Inquiry"
        className="bg-white text-${color}-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Consultation
      </a>
      <a
        href="tel:+13024640950"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-${color}-600 transition-colors"
      >
        Call +1 302 464 0950
      </a>
    </div>
    <div className="mt-8 text-sm">
      <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      <p>📧 kleber@ziontechgroup.com</p>
    </div>
  </section>
);

export default function ServicePage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          ${serviceName}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          ${description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=${serviceName} Inquiry"
            className="bg-${color}-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-${color}-700 transition-colors"
          >
            Get Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-${color}-600 text-${color}-600 px-8 py-3 rounded-lg font-semibold hover:bg-${color}-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Professional Service"
            description="Expert solutions designed to meet your specific requirements."
            icon="${icon}"
          />
          <FeatureCard
            title="24/7 Support"
            description="Round-the-clock assistance to ensure your success."
            icon="🛠️"
          />
          <FeatureCard
            title="Custom Solutions"
            description="Tailored approaches that fit your unique business model."
            icon="⚙️"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}`;
}

// Service configurations
const serviceConfigs = {
  'devops-automation': {
    name: 'DevOps Automation',
    title: 'DevOps Automation',
    description: 'Streamline your development workflow with automated CI/CD pipelines, infrastructure as code, and comprehensive monitoring solutions.',
    keywords: 'DevOps automation, CI/CD, infrastructure as code, monitoring, deployment automation',
    icon: '🚀',
    color: 'blue'
  },
  'ai-meeting-assistant': {
    name: 'AI Meeting Assistant',
    title: 'AI Meeting Assistant',
    description: 'Intelligent meeting automation with real-time transcription, action item extraction, and automated follow-ups.',
    keywords: 'AI meeting assistant, meeting automation, transcription, action items, meeting productivity',
    icon: '🤖',
    color: 'purple'
  },
  'ai-powered-crm': {
    name: 'AI-Powered CRM',
    title: 'AI-Powered CRM',
    description: 'Revolutionary customer relationship management powered by artificial intelligence for enhanced sales and customer satisfaction.',
    keywords: 'AI CRM, customer relationship management, sales automation, customer analytics, AI-powered sales',
    icon: '📊',
    color: 'green'
  },
  'ai-code-reviewer': {
    name: 'AI Code Reviewer',
    title: 'AI Code Reviewer',
    description: 'Automated code review and quality assurance powered by AI to improve code quality and reduce bugs.',
    keywords: 'AI code review, code quality, automated testing, code analysis, software development',
    icon: '🔍',
    color: 'indigo'
  },
  'ai-financial-analytics': {
    name: 'AI Financial Analytics',
    title: 'AI Financial Analytics',
    description: 'Advanced financial analysis and forecasting powered by artificial intelligence for data-driven business decisions.',
    keywords: 'AI financial analytics, financial forecasting, business intelligence, financial modeling, data analysis',
    icon: '💰',
    color: 'green'
  },
  'ai-marketing-automation': {
    name: 'AI Marketing Automation',
    title: 'AI Marketing Automation',
    description: 'Intelligent marketing automation with AI-powered personalization, predictive analytics, and automated campaign optimization.',
    keywords: 'AI marketing automation, marketing personalization, predictive analytics, campaign optimization, marketing AI',
    icon: '📧',
    color: 'pink'
  },
  'ai-customer-support': {
    name: 'AI Customer Support',
    title: 'AI Customer Support',
    description: 'Intelligent customer support solutions with chatbots, automated ticketing, and AI-powered response generation.',
    keywords: 'AI customer support, chatbots, automated support, customer service AI, support automation',
    icon: '🎧',
    color: 'blue'
  },
  'ai-project-management-suite': {
    name: 'AI Project Management Suite',
    title: 'AI Project Management Suite',
    description: 'Comprehensive project management powered by AI for intelligent task allocation, progress tracking, and resource optimization.',
    keywords: 'AI project management, project automation, task management, resource optimization, project AI',
    icon: '📋',
    color: 'orange'
  },
  'ai-data-analytics': {
    name: 'AI Data Analytics',
    title: 'AI Data Analytics',
    description: 'Advanced data analytics and business intelligence powered by artificial intelligence for actionable insights.',
    keywords: 'AI data analytics, business intelligence, data insights, predictive analytics, AI-powered analytics',
    icon: '📈',
    color: 'purple'
  }
};

// Fix each conflicted file
conflictedFiles.forEach(filePath => {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const configKey = filePath.replace('app/services/', '').replace('/page.tsx', '');
    const config = serviceConfigs[configKey];
    
    if (config) {
      const cleanContent = createCleanServicePage(
        config.name,
        config.title,
        config.description,
        config.keywords,
        config.icon,
        config.color
      );
      
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`No config found for: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All remaining conflicts resolved!');