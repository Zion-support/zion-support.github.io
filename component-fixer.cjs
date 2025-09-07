#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ComponentFixer {
  constructor() {
    this.fixedFiles = [];
    this.failedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'WARN' ? '⚠️' : '✅';
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async fixComponentIssues(filePath) {
    if (!fs.existsSync(filePath)) {
      this.failedFiles.push(filePath);
      return;
    }

    this.log(`Fixing component issues in: ${filePath}`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Fix missing components
      content = this.addMissingComponents(content);
      
      // Write the fixed content
      fs.writeFileSync(filePath, content, 'utf8');
      
      this.fixedFiles.push(filePath);
      this.log(`Successfully fixed component issues in: ${filePath}`);
    } catch (error) {
      this.failedFiles.push(filePath);
      this.log(`Failed to fix component issues in ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  addMissingComponents(content) {
    // Common missing components that need to be added
    const missingComponents = [
      'TestimonialCard',
      'FeatureCard',
      'PricingCard',
      'ServiceCard',
      'BenefitCard',
      'StatsCard',
      'ProcessStep',
      'TeamMember',
      'FaqItem',
      'ComparisonRow'
    ];

    let hasMissingComponents = false;
    let componentDefinitions = '';

    for (const component of missingComponents) {
      if (content.includes(`<${component}`) && !content.includes(`const ${component}`)) {
        hasMissingComponents = true;
        componentDefinitions += this.getComponentDefinition(component);
      }
    }

    if (hasMissingComponents) {
      // Find the import section and add component definitions
      const importMatch = content.match(/import.*from ['"]next\/link['"];?\s*/);
      if (importMatch) {
        const insertPoint = importMatch.index + importMatch[0].length;
        content = content.slice(0, insertPoint) + '\n' + componentDefinitions + '\n' + content.slice(insertPoint);
      } else {
        // If no imports found, add at the beginning
        content = componentDefinitions + '\n' + content;
      }
    }

    return content;
  }

  getComponentDefinition(componentName) {
    const definitions = {
      'TestimonialCard': `// Simple TestimonialCard component
const TestimonialCard = ({ name, role, company, content }: { name: string; role: string; company: string; content: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 mb-4">"{content}"</p>
    <div>
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-500">{role}, {company}</p>
    </div>
  </div>
);`,

      'FeatureCard': `// Simple FeatureCard component
const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);`,

      'PricingCard': `// Simple PricingCard component
const PricingCard = ({ title, price, features, isPopular }: { title: string; price: string; features: string[]; isPopular?: boolean }) => (
  <div className={`bg-white p-8 rounded-lg shadow-md border-2 ${isPopular ? 'border-blue-500' : 'border-gray-200'}`}>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <div className="text-4xl font-bold text-gray-900 mb-6">{price}</div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <span className="text-green-500 mr-2">✓</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);`,

      'ServiceCard': `// Simple ServiceCard component
const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);`,

      'BenefitCard': `// Simple BenefitCard component
const BenefitCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);`,

      'StatsCard': `// Simple StatsCard component
const StatsCard = ({ number, label, description }: { number: string; label: string; description: string }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
    <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
    <div className="text-sm text-gray-600">{description}</div>
  </div>
);`,

      'ProcessStep': `// Simple ProcessStep component
const ProcessStep = ({ step, title, description }: { step: number; title: string; description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
      {step}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);`,

      'TeamMember': `// Simple TeamMember component
const TeamMember = ({ name, role, image, bio }: { name: string; role: string; image: string; bio: string }) => (
  <div className="text-center">
    <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
    <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
    <p className="text-blue-600 mb-2">{role}</p>
    <p className="text-sm text-gray-600">{bio}</p>
  </div>
);`,

      'FaqItem': `// Simple FaqItem component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="border-b border-gray-200 py-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);`,

      'ComparisonRow': `// Simple ComparisonRow component
const ComparisonRow = ({ feature, basic, pro, enterprise }: { feature: string; basic: string; pro: string; enterprise: string }) => (
  <div className="grid grid-cols-4 gap-4 py-3 border-b border-gray-200">
    <div className="font-medium text-gray-900">{feature}</div>
    <div className="text-center text-gray-600">{basic}</div>
    <div className="text-center text-gray-600">{pro}</div>
    <div className="text-center text-gray-600">{enterprise}</div>
  </div>
);`
    };

    return definitions[componentName] || '';
  }

  async findServicePages() {
    const servicePages = [];
    
    try {
      const result = require('child_process').execSync('find app/services -name "page.tsx"', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      if (result.trim()) {
        servicePages.push(...result.trim().split('\n').filter(f => f.trim()));
      }
    } catch (error) {
      this.log('Could not find service pages', 'WARN');
    }

    return servicePages;
  }

  async fixAllServicePages() {
    this.log('Starting component fixing for service pages...');
    
    try {
      const servicePages = await this.findServicePages();
      this.log(`Found ${servicePages.length} service pages`);

      for (const filePath of servicePages) {
        await this.fixComponentIssues(filePath);
      }

      this.log(`Fixed ${this.fixedFiles.length} service pages`);
      this.log(`Failed to fix ${this.failedFiles.length} service pages`);

    } catch (error) {
      this.log(`Error during component fixing: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async run() {
    try {
      await this.fixAllServicePages();
      this.log('Component fixing completed successfully!');
    } catch (error) {
      this.log(`Component fixing failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new ComponentFixer();
  fixer.run();
}

module.exports = ComponentFixer;