#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Template for 5G pages
const fiveGPageTemplate = (pageName, title, description) => `import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const ${pageName} = () => {
  const services = [
    {
      title: '${title} Strategy',
      description: 'Comprehensive ${title.toLowerCase()} strategies tailored to your business needs.',
    },
    {
      title: 'Security Assessment',
      description: 'Complete security evaluation for ${title.toLowerCase()} implementation.',
    },
    {
      title: 'Team Training',
      description: 'Expert training for your team on ${title.toLowerCase()} technologies and best practices.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO
        title="${title} - Zion Tech Group"
        description="${description}"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guidance for your ${title.toLowerCase()} transformation journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ${pageName};`;

// Page configurations
const pageConfigs = {
  '5g-consulting': { name: 'FiveGConsultingPage', title: '5G Consulting Services', description: 'Expert 5G consulting services to help your business leverage next-generation wireless technology.' },
  '5g-data-analytics': { name: 'FiveGDataAnalyticsPage', title: '5G Data Analytics', description: 'Professional 5G data analytics services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-deployment': { name: 'FiveGDeploymentPage', title: '5G Deployment', description: 'Professional 5G deployment services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-edge-computing': { name: 'FiveGEdgeComputingPage', title: '5G Edge Computing', description: 'Professional 5G edge computing services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-implementation': { name: 'FiveGImplementationPage', title: '5G Implementation', description: 'Professional 5G implementation services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-infrastructure': { name: 'FiveGInfrastructurePage', title: '5G Infrastructure', description: 'Professional 5G infrastructure services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-integration': { name: 'FiveGIntegrationPage', title: '5G Integration', description: 'Professional 5G integration services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-iot-solutions': { name: 'FiveGIoTSolutionsPage', title: '5G IoT Solutions', description: 'Professional 5G IoT solutions by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-maintenance': { name: 'FiveGMaintenancePage', title: '5G Maintenance', description: 'Professional 5G maintenance services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-migration': { name: 'FiveGMigrationPage', title: '5G Migration', description: 'Professional 5G migration services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-mobile-applications': { name: 'FiveGMobileApplicationsPage', title: '5G Mobile Applications', description: 'Professional 5G mobile applications by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-modernization': { name: 'FiveGModernizationPage', title: '5G Modernization', description: 'Professional 5G modernization services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-monitoring': { name: 'FiveGMonitoringPage', title: '5G Monitoring', description: 'Professional 5G monitoring services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-network-infrastructure': { name: 'FiveGNetworkInfrastructurePage', title: '5G Network Infrastructure', description: 'Professional 5G network infrastructure services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-network-optimization': { name: 'FiveGNetworkOptimizationPage', title: '5G Network Optimization', description: 'Professional 5G network optimization services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-optimization': { name: 'FiveGOptimizationPage', title: '5G Optimization', description: 'Professional 5G optimization services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-performance': { name: 'FiveGPerformancePage', title: '5G Performance', description: 'Professional 5G performance services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-private-networks': { name: 'FiveGPrivateNetworksPage', title: '5G Private Networks', description: 'Professional 5G private networks by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-reliability': { name: 'FiveGReliabilityPage', title: '5G Reliability', description: 'Professional 5G reliability services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-scalability': { name: 'FiveGScalabilityPage', title: '5G Scalability', description: 'Professional 5G scalability services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-security': { name: 'FiveGSecurityPage', title: '5G Security', description: 'Professional 5G security services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-smart-city-solutions': { name: 'FiveGSmartCitySolutionsPage', title: '5G Smart City Solutions', description: 'Professional 5G smart city solutions by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-solutions': { name: 'FiveGSolutionsPage', title: '5G Solutions', description: 'Professional 5G solutions by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-support': { name: 'FiveGSupportPage', title: '5G Support', description: 'Professional 5G support services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-testing': { name: 'FiveGTestingPage', title: '5G Testing', description: 'Professional 5G testing services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-training': { name: 'FiveGTrainingPage', title: '5G Training', description: 'Professional 5G training services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-transformation': { name: 'FiveGTransformationPage', title: '5G Transformation', description: 'Professional 5G transformation services by Zion Tech Group. Expert solutions for your business needs.' },
  '5g-upgrade': { name: 'FiveGUpgradePage', title: '5G Upgrade', description: 'Professional 5G upgrade services by Zion Tech Group. Expert solutions for your business needs.' },
};

// Main function to process files
async function main() {
  console.log('Fixing 5G pages...');
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const [pageDir, config] of Object.entries(pageConfigs)) {
    try {
      const pagePath = `app/${pageDir}/page.tsx`;
      console.log(`Processing: ${pagePath}`);
      
      // Create the page content
      const pageContent = fiveGPageTemplate(config.name, config.title, config.description);
      
      // Write the file
      fs.writeFileSync(pagePath, pageContent, 'utf8');
      
      processedCount++;
      console.log(`✓ Fixed: ${pagePath}`);
    } catch (error) {
      console.error(`✗ Error processing ${pageDir}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nProcessing complete!`);
  console.log(`✓ Successfully processed: ${processedCount} files`);
  console.log(`✗ Errors: ${errorCount} files`);
}

// Run the script
main().catch(console.error);