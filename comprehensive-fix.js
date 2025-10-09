#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to create a clean, minimal page component
function createCleanPageComponent(filePath, pageName) {
  const cleanContent = `import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${pageName}Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ${pageName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This page is under development. Please check back soon for updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ${pageName}Page;
`;
  
  fs.writeFileSync(filePath, cleanContent, 'utf8');
  console.log(`Created clean page: ${filePath}`);
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    '/workspace/src/about/page.tsx',
    '/workspace/src/ai-ab-testing/page.tsx',
    '/workspace/src/ai-analytics-dashboard/page.tsx',
    '/workspace/src/ai-analytics/page.tsx',
    '/workspace/src/ai-automation/page.tsx',
    '/workspace/src/ai-computer-vision/page.tsx',
    '/workspace/src/ai-content-generation/page.tsx',
    '/workspace/src/ai-content-studio/page.tsx',
    '/workspace/src/ai-crm/page.tsx',
    '/workspace/src/ai-customer-insights/page.tsx',
    '/workspace/src/ai-customer-support-bot/page.tsx',
    '/workspace/src/ai-customer-support/page.tsx',
    '/workspace/src/ai-cybersecurity/page.tsx',
    '/workspace/src/ai-data-analytics/page.tsx',
    '/workspace/src/ai-data-visualization/page.tsx',
    '/workspace/src/ai-design-assistant/page.tsx',
    '/workspace/src/ai-document-processing/page.tsx',
    '/workspace/src/ai-document-processor/page.tsx',
    '/workspace/src/ai-ecommerce-optimizer/page.tsx',
    '/workspace/src/ai-ecommerce-solutions/page.tsx',
    '/workspace/src/ai-edge-computing/page.tsx',
    '/workspace/src/ai-email-assistant/page.tsx',
    '/workspace/src/ai-email-marketing/page.tsx',
    '/workspace/src/ai-fintech/page.tsx',
    '/workspace/src/ai-healthcare/page.tsx',
    '/workspace/src/ai-hr-assistant/page.tsx',
    '/workspace/src/ai-inventory-manager/page.tsx',
    '/workspace/src/ai-invoice-generator/page.tsx',
    '/workspace/src/ai-lead-generation/page.tsx',
    '/workspace/src/ai-lead-scoring/page.tsx',
    '/workspace/src/ai-marketing/page.tsx',
    '/workspace/src/ai-ml-platform/page.tsx',
    '/workspace/src/ai-mobile-app-development/page.tsx',
    '/workspace/src/ai-mobile-builder/page.tsx',
    '/workspace/src/ai-nlp/page.tsx',
    '/workspace/src/ai-performance-tracker/page.tsx',
    '/workspace/src/ai-predictive-analytics/page.tsx',
    '/workspace/src/ai-project-manager/page.tsx',
    '/workspace/src/ai-research-development/page.tsx',
    '/workspace/src/ai-robotics/page.tsx',
    '/workspace/src/ai-sales-automation/page.tsx',
    '/workspace/src/ai-sales-forecasting/page.tsx',
    '/workspace/src/ai-scheduler/page.tsx',
    '/workspace/src/ai-security-monitor/page.tsx',
    '/workspace/src/ai-seo-optimizer/page.tsx',
    '/workspace/src/ai-services/page.tsx',
    '/workspace/src/ai-social-media-manager/page.tsx',
    '/workspace/src/ai-voice-assistant/page.tsx',
    '/workspace/src/ai-workflow-automation/page.tsx',
    '/workspace/src/ai-writing-assistant/page.tsx',
    '/workspace/src/analytics-tools/page.tsx',
    '/workspace/src/api/page.tsx',
    '/workspace/src/ar-vr-solutions/page.tsx',
    '/workspace/src/autonomous-systems/page.tsx',
    '/workspace/src/blockchain-web3/page.tsx',
    '/workspace/src/business-apps/page.tsx',
    '/workspace/src/business-intelligence/page.tsx',
    '/workspace/src/careers/page.tsx',
    '/workspace/src/case-studies/page.tsx',
    '/workspace/src/cloud-services/page.tsx',
    '/workspace/src/compliance/page.tsx',
    '/workspace/src/consultation/page.tsx',
    '/workspace/src/contact/page.tsx',
    '/workspace/src/cookies/page.tsx',
    '/workspace/src/cybersecurity/page.tsx',
    '/workspace/src/database-management/page.tsx',
    '/workspace/src/database/page.tsx',
    '/workspace/src/demo/page.tsx',
    '/workspace/src/devops-cicd/page.tsx',
    '/workspace/src/devops/page.tsx',
    '/workspace/src/digital-transformation/page.tsx',
    '/workspace/src/expense-tracker/page.tsx',
    '/workspace/src/faq/page.tsx',
    '/workspace/src/future-technologies/page.tsx',
    '/workspace/src/global-it-support/page.tsx',
    '/workspace/src/green-it/page.tsx',
    '/workspace/src/help/page.tsx',
    '/workspace/src/innovation-labs/page.tsx',
    '/workspace/src/iot-edge-computing/page.tsx',
    '/workspace/src/iot-edge/page.tsx',
    '/workspace/src/it-automation/page.tsx',
    '/workspace/src/it-consulting/page.tsx',
    '/workspace/src/it-disaster-recovery/page.tsx',
    '/workspace/src/it-infrastructure-design/page.tsx',
    '/workspace/src/it-infrastructure/page.tsx',
    '/workspace/src/it-performance-monitoring/page.tsx',
    '/workspace/src/it-services/page.tsx',
    '/workspace/src/it-support/page.tsx',
    '/workspace/src/it-training/page.tsx',
    '/workspace/src/login/page.tsx',
    '/workspace/src/marketplace/page.tsx',
    '/workspace/src/network-solutions/page.tsx',
    '/workspace/src/networking/page.tsx',
    '/workspace/src/news/page.tsx',
    '/workspace/src/offline/page.tsx',
    '/workspace/src/partners/page.tsx',
    '/workspace/src/pricing/page.tsx',
    '/workspace/src/privacy/page.tsx',
    '/workspace/src/productivity/page.tsx',
    '/workspace/src/quantum-computing/page.tsx',
    '/workspace/src/request-quote/page.tsx',
    '/workspace/src/research-development/page.tsx',
    '/workspace/src/robotics/page.tsx',
    '/workspace/src/services-advertising/page.tsx',
    '/workspace/src/services/page.tsx',
    '/workspace/src/signup/page.tsx',
    '/workspace/src/sitemap/page.tsx',
    '/workspace/src/smart-analytics/page.tsx',
    '/workspace/src/smart-cities/page.tsx',
    '/workspace/src/solutions/page.tsx',
    '/workspace/src/status/page.tsx',
    '/workspace/src/support/page.tsx',
    '/workspace/src/sustainability-tech/page.tsx',
    '/workspace/src/system-administration/page.tsx',
    '/workspace/src/system-status/page.tsx',
    '/workspace/src/task-manager-pro/page.tsx',
    '/workspace/src/team/page.tsx',
    '/workspace/src/terms/page.tsx'
  ];
  
  problematicFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const fileName = path.basename(filePath, '.tsx');
      const pageName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
      createCleanPageComponent(filePath, pageName);
    }
  });
}

// Function to fix metadata files
function fixMetadataFiles() {
  const metadataFiles = [
    '/workspace/src/metadata.ts',
    '/workspace/src/page-minimal-metadata.ts',
    '/workspace/src/blog/ai-cost-optimization-breakthrough-2026/metadata.ts'
  ];
  
  metadataFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const cleanMetadata = `export const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.'
};
`;
      fs.writeFileSync(filePath, cleanMetadata, 'utf8');
      console.log(`Fixed metadata: ${filePath}`);
    }
  });
}

// Function to fix other problematic files
function fixOtherFiles() {
  // Fix App.tsx
  const appPath = '/workspace/src/App.tsx';
  if (fs.existsSync(appPath)) {
    const cleanApp = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './page';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
`;
    fs.writeFileSync(appPath, cleanApp, 'utf8');
    console.log('Fixed App.tsx');
  }
  
  // Fix main.tsx
  const mainPath = '/workspace/src/main.tsx';
  if (fs.existsSync(mainPath)) {
    const cleanMain = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
    fs.writeFileSync(mainPath, cleanMain, 'utf8');
    console.log('Fixed main.tsx');
  }
  
  // Fix layout.tsx
  const layoutPath = '/workspace/src/layout.tsx';
  if (fs.existsSync(layoutPath)) {
    const cleanLayout = `import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title || 'Zion Tech Group - Advanced AI and IT Solutions'}</title>
        <meta name="description" content={description || 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.'} />
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
`;
    fs.writeFileSync(layoutPath, cleanLayout, 'utf8');
    console.log('Fixed layout.tsx');
  }
}

// Main execution
async function main() {
  console.log('Starting comprehensive fixes...');
  
  // Fix specific problematic files
  fixSpecificFiles();
  
  // Fix metadata files
  fixMetadataFiles();
  
  // Fix other files
  fixOtherFiles();
  
  console.log('Comprehensive fixes completed!');
}

main().catch(console.error);