#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ServicePageFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  getServiceTemplate(serviceName, title, description, keywords, features) {
    return `import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${title} | Zion Tech Group',
  description: '${description}',
  keywords: '${keywords}',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: '${title} | Zion Tech Group',
    description: '${description}',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function ${serviceName}Page() {
  const features = [
${features.map(f => `    {
      title: '${f.title}',
      description: '${f.description}',
      icon: '${f.icon}'
    }`).join(',\n')}
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ${title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link 
                href="/services" 
                className="border border-blue-300 text-blue-100 hover:bg-blue-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Contact us today to learn more about our ${title.toLowerCase()} solutions
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}`;
  }

  fixServicePage(filePath) {
    try {
      const fileName = path.basename(filePath, '.tsx');
      const serviceName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '');
      
      // Define service-specific data
      const serviceData = {
        'ai-data-analytics': {
          title: 'AI Data Analytics',
          description: 'Advanced data analytics and business intelligence powered by artificial intelligence to drive data-driven decisions.',
          keywords: 'AI data analytics, business intelligence, data visualization, predictive analytics, data science',
          features: [
            { title: 'Predictive Analytics', description: 'AI-powered forecasting and trend analysis for better business decisions.', icon: '📊' },
            { title: 'Data Visualization', description: 'Interactive dashboards and visualizations to understand your data better.', icon: '📈' },
            { title: 'Real-time Processing', description: 'Process and analyze data in real-time for immediate insights.', icon: '⚡' },
            { title: 'Machine Learning', description: 'Advanced ML models to uncover patterns and insights in your data.', icon: '🤖' },
            { title: 'Automated Reporting', description: 'Generate comprehensive reports automatically with AI insights.', icon: '📋' },
            { title: 'Data Integration', description: 'Seamlessly integrate data from multiple sources for unified analysis.', icon: '🔗' }
          ]
        },
        'ai-financial-analytics': {
          title: 'AI Financial Analytics',
          description: 'Intelligent financial analysis and forecasting solutions powered by AI for better financial decision making.',
          keywords: 'AI financial analytics, financial forecasting, risk analysis, financial modeling, fintech',
          features: [
            { title: 'Financial Forecasting', description: 'AI-powered predictions for revenue, expenses, and market trends.', icon: '💰' },
            { title: 'Risk Assessment', description: 'Comprehensive risk analysis and mitigation strategies.', icon: '⚠️' },
            { title: 'Portfolio Optimization', description: 'AI-driven portfolio management and optimization strategies.', icon: '📊' },
            { title: 'Fraud Detection', description: 'Advanced fraud detection and prevention systems.', icon: '🛡️' },
            { title: 'Compliance Monitoring', description: 'Automated compliance checking and regulatory reporting.', icon: '📋' },
            { title: 'Market Analysis', description: 'Real-time market analysis and investment recommendations.', icon: '📈' }
          ]
        },
        'ai-marketing-automation': {
          title: 'AI Marketing Automation',
          description: 'Intelligent marketing automation with AI-powered personalization, predictive analytics, and automated campaign optimization.',
          keywords: 'AI marketing automation, marketing personalization, predictive analytics, campaign optimization, marketing AI',
          features: [
            { title: 'Campaign Automation', description: 'Automated marketing campaigns with AI-driven optimization.', icon: '🎯' },
            { title: 'Personalization', description: 'AI-powered personalization for better customer engagement.', icon: '👤' },
            { title: 'Predictive Analytics', description: 'Predict customer behavior and optimize marketing strategies.', icon: '🔮' },
            { title: 'Lead Scoring', description: 'Intelligent lead scoring and qualification systems.', icon: '⭐' },
            { title: 'Content Generation', description: 'AI-generated marketing content and copywriting.', icon: '✍️' },
            { title: 'Performance Tracking', description: 'Comprehensive analytics and performance monitoring.', icon: '📊' }
          ]
        }
      };

      const data = serviceData[fileName] || {
        title: serviceName,
        description: `Professional ${serviceName.toLowerCase()} services for your business needs.`,
        keywords: `${serviceName.toLowerCase()}, business, technology, services`,
        features: [
          { title: 'Expert Consultation', description: 'Professional consultation and guidance for your business needs.', icon: '💼' },
          { title: 'Custom Solutions', description: 'Tailored solutions designed specifically for your requirements.', icon: '⚙️' },
          { title: '24/7 Support', description: 'Round-the-clock support to ensure your success.', icon: '🕐' },
          { title: 'Scalable Solutions', description: 'Solutions that grow with your business needs.', icon: '📈' },
          { title: 'Quality Assurance', description: 'Rigorous testing and quality assurance processes.', icon: '✅' },
          { title: 'Cost Effective', description: 'Competitive pricing with maximum value for your investment.', icon: '💰' }
        ]
      };

      const content = this.getServiceTemplate(serviceName, data.title, data.description, data.keywords, data.features);
      
      fs.writeFileSync(filePath, content, 'utf8');
      this.fixedFiles.push(filePath);
      this.log(`Fixed service page: ${path.relative(this.projectRoot, filePath)}`);
      return true;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixAllServicePages() {
    this.log('🔧 Starting service page fixes...');
    
    const servicesDir = path.join(this.projectRoot, 'app', 'services');
    if (!fs.existsSync(servicesDir)) {
      this.log('Services directory not found', 'WARNING');
      return { fixedFiles: 0, errors: 0 };
    }

    const serviceFiles = fs.readdirSync(servicesDir)
      .filter(item => {
        const itemPath = path.join(servicesDir, item);
        return fs.statSync(itemPath).isDirectory() && 
               fs.existsSync(path.join(itemPath, 'page.tsx'));
      })
      .map(item => path.join(servicesDir, item, 'page.tsx'));

    let fixedCount = 0;
    for (const file of serviceFiles) {
      if (this.fixServicePage(file)) {
        fixedCount++;
      }
    }

    this.log(`\n📊 Service Page Fix Summary:`);
    this.log(`Fixed files: ${fixedCount}`);
    this.log(`Errors: ${this.errors.length}`);

    if (this.errors.length > 0) {
      this.log('\n❌ Files with errors:');
      this.errors.forEach(({ file, error }) => {
        this.log(`  - ${path.relative(this.projectRoot, file)}: ${error}`);
      });
    }

    return {
      fixedFiles: fixedCount,
      errors: this.errors.length
    };
  }

  async run() {
    try {
      this.log('🚀 Starting service page fixes...');
      
      const results = await this.fixAllServicePages();
      
      this.log('\n✅ Service page fixes completed!');
      
      return results;
    } catch (error) {
      this.log(`❌ Service page fixes failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new ServicePageFixer();
  fixer.run().catch(console.error);
}

module.exports = ServicePageFixer;