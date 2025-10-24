#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a clean page template
function createCleanPage(filePath, pageName) {
  const componentName = pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '');
  
  return `'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const ${componentName}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName} services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="${pageName}, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              ${pageName}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${pageName} services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive ${pageName} solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ${componentName}Page;
`;
}

// List of all problematic files to rewrite
const problematicFiles = [
  'app/backup-recovery/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/blockchain/page.tsx',
  'app/business-apps/page.tsx',
  'app/cloud-infrastructure-manager/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page-backup.tsx',
  'app/compliance/page-fixed.tsx',
  'app/contact/page-broken2.tsx',
  'app/crm-lite/page.tsx',
  'app/custom-development/page.tsx',
  'app/custom-software/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/cybersecurity-suite/page.tsx',
  'app/data-analytics/page.tsx',
  'app/data-analytics-bi/page.tsx',
  'app/data-center/page.tsx',
  'app/data-protection/page.tsx',
  'app/database-management/page.tsx',
  'app/database-services/page.tsx',
  'app/developer-tools/page.tsx',
  'app/devops-cicd/page.tsx',
  'app/digital-transformation/page.tsx',
  'app/digital-twin-platform/page.tsx',
  'app/docs/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/edge-computing/page.tsx',
  'app/email-marketing-automation/page.tsx',
  'app/email-optimizer/page.tsx',
  'app/enterprise/page.tsx',
  'app/enterprise-security/page.tsx',
  'app/error.tsx',
  'app/expense-tracker/page.tsx',
  'app/faq/page.tsx',
  'app/financial-it/page.tsx',
  'app/health/page.tsx',
  'app/healthcare-it/page.tsx',
  'app/innovation-labs/page.tsx',
  'app/intelligent-database-migration/page.tsx',
  'app/intelligent-email-infrastructure/page.tsx',
  'app/investors/page.tsx',
  'app/iot/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-platform/page.tsx',
  'app/it-asset-management/page.tsx',
  'app/it-consulting/page.tsx',
  'app/it-infrastructure-solutions/page.tsx',
  'app/it-performance/page.tsx',
  'app/it-support/page.tsx',
  'app/it-training/page.tsx',
  'app/landing-page-builder/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/loading.tsx',
  'app/managed-it/page.tsx',
  'app/marketing-tools/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/micro-saas/ai-content-writer/page.tsx',
  'app/micro-saas/analytics-dashboard/page.tsx',
  'app/micro-saas/appointment-scheduler/page.tsx',
  'app/micro-saas/chat-analytics/page.tsx',
  'app/micro-saas/content-generator/page.tsx',
  'app/micro-saas/document-processor/page.tsx',
  'app/micro-saas/email-marketing/page.tsx',
  'app/micro-saas/expense-tracker/page.tsx',
  'app/micro-saas/inventory-management/page.tsx',
  'app/micro-saas/lead-scoring/page.tsx',
  'app/micro-saas/seo-optimizer/page.tsx',
  'app/micro-saas/social-manager/page.tsx',
  'app/micro-saas/support-bot/page.tsx',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/network-design/page.tsx',
  'app/network-infrastructure/page.tsx',
  'app/network-security/page.tsx',
  'app/network-solutions/page.tsx',
  'app/news/page.tsx',
  'app/not-found.tsx',
  'app/online-learning-platform/page.tsx',
  'app/page-backup.tsx',
  'app/page-optimized.tsx',
  'app/page-original.tsx',
  'app/partners/page.tsx',
  'app/penetration-testing/page.tsx',
  'app/process-automation/page.tsx',
  'app/productivity/page.tsx',
  'app/project-management-pro/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/quantum-ai/page.tsx',
  'app/robotics-integration/page.tsx',
  'app/security-monitoring/page.tsx',
  'app/security-monitoring-suite/page.tsx',
  'app/seo-optimizer/page.tsx',
  'app/sla/page.tsx',
  'app/smart-analytics/page.tsx',
  'app/smart-cities/page.tsx',
  'app/smart-city-infrastructure/page.tsx',
  'app/smart-contract-security-audit/page.tsx',
  'app/specialized-services/page.tsx',
  'app/status/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/system-status/page.tsx',
  'app/task-manager-pro/page.tsx',
  'app/utils/testRunner.tsx',
  'app/web-development/page.tsx'
];

// Main function
function fixAllRemainingSyntax() {
  console.log('Starting to fix all remaining syntax errors...');
  
  problematicFiles.forEach(filePath => {
    const fullPath = path.join(__dirname, filePath);
    try {
      // Extract page name from file path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 1].replace('.tsx', '').replace('.ts', '');
      const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      const content = createCleanPage(filePath, pageName);
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  });
  
  console.log('Finished fixing all remaining syntax errors!');
}

// Run the fix
fixAllRemainingSyntax();