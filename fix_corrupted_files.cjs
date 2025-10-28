const fs = require('fs');
const path = require('path');

// Template for page components
const createPageTemplate = (title, description, functionName, pageName) => `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: '${title} | Zion Tech Group',
  description: 'Professional ${description} services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: '${description}, technology, services, AI, automation',
  openGraph: {
    title: '${title} | Zion Tech Group',
    description: 'Professional ${description} services by Zion Tech Group.',
    type: 'website',
  },
};

function ${functionName}() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ${description} services powered by advanced AI and technology.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your business with our cutting-edge ${description} solutions. 
              We provide comprehensive services to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <${functionName} {...props} />
    </ErrorBoundary>
  );
}`;

// Files to fix with their details
const filesToFix = [
  {
    path: 'app/ai-powered-devops/page.tsx',
    title: 'AI Powered DevOps',
    description: 'ai powered devops',
    functionName: 'AIPoweredDevOps'
  },
  {
    path: 'app/ai-powered-email-analyzer/page.tsx',
    title: 'AI Powered Email Analyzer',
    description: 'ai powered email analyzer',
    functionName: 'AIPoweredEmailAnalyzer'
  },
  {
    path: 'app/micro-saas-services/ai-chatbot-builder/page.tsx',
    title: 'AI Chatbot Builder',
    description: 'ai chatbot builder',
    functionName: 'AIChatbotBuilder'
  },
  {
    path: 'app/micro-saas-services/ai-content-generator/page.tsx',
    title: 'AI Content Generator',
    description: 'ai content generator',
    functionName: 'AIContentGenerator'
  },
  {
    path: 'app/micro-saas-services/ai-email-assistant/page.tsx',
    title: 'AI Email Assistant',
    description: 'ai email assistant',
    functionName: 'AIEmailAssistant'
  },
  {
    path: 'app/micro-saas-services/ai-lead-generation/page.tsx',
    title: 'AI Lead Generation',
    description: 'ai lead generation',
    functionName: 'AILeadGeneration'
  },
  {
    path: 'app/legal-document-manager/page.tsx',
    title: 'Legal Document Manager',
    description: 'legal document manager',
    functionName: 'LegalDocumentManager'
  },
  {
    path: 'app/it-services/cybersecurity-audit/page.tsx',
    title: 'Cybersecurity Audit',
    description: 'cybersecurity audit',
    functionName: 'CybersecurityAudit'
  },
  {
    path: 'app/zion-ai-api-tester/page.tsx',
    title: 'Zion AI API Tester',
    description: 'zion ai api tester',
    functionName: 'ZionAIApiTester'
  },
  {
    path: 'app/ecommerce-analytics-pro/page.tsx',
    title: 'Ecommerce Analytics Pro',
    description: 'ecommerce analytics pro',
    functionName: 'EcommerceAnalyticsPro'
  }
];

function fixFile(fileInfo) {
  try {
    const fullPath = path.join(__dirname, fileInfo.path);
    const content = createPageTemplate(
      fileInfo.title,
      fileInfo.description,
      fileInfo.functionName,
      fileInfo.title.toLowerCase().replace(/\s+/g, '-')
    );
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${fileInfo.path}`);
  } catch (error) {
    console.error(`Error fixing ${fileInfo.path}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('All corrupted files have been fixed!');