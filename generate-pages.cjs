const fs = require('fs');
const path = require('path');

const pages = [
  'ai-marketing', 'ai-healthcare', 'ai-fintech', 'ai-content-generation', 
  'ai-data-analytics', 'ai-cybersecurity', 'ai-workflow-automation', 
  'ai-mobile-app-development', 'ai-ecommerce-solutions', 'ai-customer-support', 
  'ai-sales-automation', 'ai-data-visualization', 'ai-lead-generation', 
  'ai-document-processing', 'it-services', 'it-infrastructure', 'cybersecurity', 
  'cloud-migration', 'devops', 'database', 'networking', 'it-consulting', 
  'micro-saas', 'ai-crm', 'ai-analytics-dashboard', 'ai-chatbot-builder', 
  'ai-email-marketing', 'ai-writing-assistant', 'quantum-computing', 
  'autonomous-systems', 'blockchain-web3', 'iot-edge-computing', 
  'business-intelligence', 'robotics', 'news', 'docs', 'api-docs', 
  'support', 'status', 'demo', 'consultation'
];

const template = `import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart, Users, ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PAGE_NAME: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            PAGE_TITLE
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            PAGE_DESCRIPTION
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how our solutions can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PAGE_NAME;`;

const getPageTitle = (pageName) => {
  return pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

const getPageDescription = (pageName) => {
  const descriptions = {
    'ai-marketing': 'AI-powered marketing solutions that optimize campaigns and drive results',
    'ai-healthcare': 'Cutting-edge AI solutions for healthcare and medical applications',
    'ai-fintech': 'Revolutionary AI-powered financial technology solutions',
    'ai-content-generation': 'Intelligent content creation and generation using advanced AI',
    'ai-data-analytics': 'Advanced data analytics powered by artificial intelligence',
    'ai-cybersecurity': 'AI-enhanced cybersecurity solutions for enterprise protection',
    'ai-workflow-automation': 'Intelligent workflow automation with AI decision-making',
    'ai-mobile-app-development': 'AI-assisted mobile application development services',
    'ai-ecommerce-solutions': 'AI-powered e-commerce solutions for online businesses',
    'ai-customer-support': 'Intelligent customer support solutions powered by AI',
    'ai-sales-automation': 'AI-driven sales automation and optimization tools',
    'ai-data-visualization': 'Advanced data visualization powered by artificial intelligence',
    'ai-lead-generation': 'AI-powered lead generation and qualification systems',
    'ai-document-processing': 'Intelligent document processing and management solutions',
    'it-services': 'Comprehensive IT services and technology solutions',
    'it-infrastructure': 'Enterprise IT infrastructure design and management',
    'cybersecurity': 'Advanced cybersecurity solutions and protection services',
    'cloud-migration': 'Seamless cloud migration and optimization services',
    'devops': 'DevOps solutions and automation for modern development',
    'database': 'Database management and optimization services',
    'networking': 'Network infrastructure design and management solutions',
    'it-consulting': 'Strategic IT consulting and technology advisory services',
    'micro-saas': 'Micro SAAS solutions and AI-powered applications',
    'ai-crm': 'AI-powered customer relationship management solutions',
    'ai-analytics-dashboard': 'Intelligent analytics dashboards and reporting tools',
    'ai-chatbot-builder': 'No-code AI chatbot creation and management platform',
    'ai-email-marketing': 'AI-powered email marketing automation and optimization',
    'ai-writing-assistant': 'Intelligent writing assistant and content creation tools',
    'quantum-computing': 'Next-generation quantum computing solutions and services',
    'autonomous-systems': 'Autonomous systems and self-managing technology solutions',
    'blockchain-web3': 'Blockchain and Web3 technology solutions and development',
    'iot-edge-computing': 'IoT and edge computing solutions for connected devices',
    'business-intelligence': 'Advanced business intelligence and analytics solutions',
    'robotics': 'Intelligent robotics and automation solutions',
    'news': 'Latest news and updates from Zion Tech Group',
    'docs': 'Documentation and technical resources',
    'api-docs': 'API documentation and developer resources',
    'support': 'Customer support and technical assistance',
    'status': 'System status and service availability',
    'demo': 'Request a demo of our AI solutions',
    'consultation': 'Free consultation and technology assessment'
  };
  
  return descriptions[pageName] || 'Advanced AI and technology solutions for your business';
};

pages.forEach(pageName => {
  const pageTitle = getPageTitle(pageName);
  const pageDescription = getPageDescription(pageName);
  const componentName = pageTitle.replace(/\s+/g, '');
  
  const content = template
    .replace(/PAGE_NAME/g, componentName)
    .replace(/PAGE_TITLE/g, pageTitle)
    .replace(/PAGE_DESCRIPTION/g, pageDescription);
  
  const dir = path.join('src', pageName);
  const filePath = path.join(dir, 'page.tsx');
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Created ${filePath}`);
});

console.log('All pages created successfully!');
