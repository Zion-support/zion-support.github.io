#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SimpleComponentFixer {
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
    // Check for missing components and add them
    if (content.includes('<TestimonialCard') && !content.includes('const TestimonialCard')) {
      content = this.addTestimonialCard(content);
    }
    
    if (content.includes('<FeatureCard') && !content.includes('const FeatureCard')) {
      content = this.addFeatureCard(content);
    }
    
    if (content.includes('<PricingCard') && !content.includes('const PricingCard')) {
      content = this.addPricingCard(content);
    }
    
    if (content.includes('<ServiceCard') && !content.includes('const ServiceCard')) {
      content = this.addServiceCard(content);
    }

    return content;
  }

  addTestimonialCard(content) {
    const testimonialCard = `
// Simple TestimonialCard component
const TestimonialCard = ({ name, role, company, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 mb-4">"{content}"</p>
    <div>
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-500">{role}, {company}</p>
    </div>
  </div>
);
`;

    const importMatch = content.match(/import.*from ['"]next\/link['"];?\s*/);
    if (importMatch) {
      const insertPoint = importMatch.index + importMatch[0].length;
      content = content.slice(0, insertPoint) + testimonialCard + content.slice(insertPoint);
    } else {
      content = testimonialCard + content;
    }
    
    return content;
  }

  addFeatureCard(content) {
    const featureCard = `
// Simple FeatureCard component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
`;

    const importMatch = content.match(/import.*from ['"]next\/link['"];?\s*/);
    if (importMatch) {
      const insertPoint = importMatch.index + importMatch[0].length;
      content = content.slice(0, insertPoint) + featureCard + content.slice(insertPoint);
    } else {
      content = featureCard + content;
    }
    
    return content;
  }

  addPricingCard(content) {
    const pricingCard = `
// Simple PricingCard component
const PricingCard = ({ title, price, features, isPopular }) => (
  <div className={\`bg-white p-8 rounded-lg shadow-md border-2 \${isPopular ? 'border-blue-500' : 'border-gray-200'}\`}>
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
);
`;

    const importMatch = content.match(/import.*from ['"]next\/link['"];?\s*/);
    if (importMatch) {
      const insertPoint = importMatch.index + importMatch[0].length;
      content = content.slice(0, insertPoint) + pricingCard + content.slice(insertPoint);
    } else {
      content = pricingCard + content;
    }
    
    return content;
  }

  addServiceCard(content) {
    const serviceCard = `
// Simple ServiceCard component
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
`;

    const importMatch = content.match(/import.*from ['"]next\/link['"];?\s*/);
    if (importMatch) {
      const insertPoint = importMatch.index + importMatch[0].length;
      content = content.slice(0, insertPoint) + serviceCard + content.slice(insertPoint);
    } else {
      content = serviceCard + content;
    }
    
    return content;
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
  const fixer = new SimpleComponentFixer();
  fixer.run();
}

module.exports = SimpleComponentFixer;