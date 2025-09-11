#!/usr/bin/env node;

const fs = require('fs');
const path = require('path');
// Remaining files to fix (first 20 to avoid timeout);
const filesToFix = [;
  'src/pages/services/AIIncidentResponse.tsx',
  'src/pages/services/AIInsurance.tsx',
  'src/pages/services/AIInternetOfThings.tsx',
  'src/pages/services/AIKafka.tsx',
  'src/pages/services/AIKubernetes.tsx',
  'src/pages/services/AILegalDocumentAutomation.tsx',
  'src/pages/services/AILegalTech.tsx',
  'src/pages/services/AIManufacturing.tsx',
  'src/pages/services/AIManufacturingQualityControl.tsx',
  'src/pages/services/AIMarketingAutomation.tsx',
  'src/pages/services/AIMentalHealthSupportPlatform.tsx',
  'src/pages/services/AIMetaverse.tsx',
  'src/pages/services/AIMicroservices.tsx',
  'src/pages/services/AIMongoDB.tsx',
  'src/pages/services/AIMySQL.tsx',
  'src/pages/services/AINetworkSecurity.tsx',
  'src/pages/services/AIPenetrationTesting.tsx',
  'src/pages/services/AIPostgreSQL.tsx',
  'src/pages/services/AIPoweredSEO.tsx',
  'src/pages/services/AIPredictiveAnalytics.tsx';
];
// Template for a basic service page;
function generateServicePage(serviceName, icon = 'Brain') {