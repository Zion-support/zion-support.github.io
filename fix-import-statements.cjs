#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix import statements specifically
function fixImportStatements(content) {
  let fixed = content;

  // Fix import statements with spaces in the middle
  fixed = fixed.replace(/import\s+\{\s*([^}]+)\s*\}\s*from\s+'([^']+)';/g, (match, imports, module) => {
    // Clean up the imports by removing extra spaces
    const cleanImports = imports
      .split(',')
      .map(imp => imp.trim())
      .join(', ');
    return `import { ${cleanImports} } from '${module}';`;
  });

  // Fix specific broken import patterns
  fixed = fixed.replace(/import\s+React\s+from\s+'react';/g, 'import React from \'react\';');
  fixed = fixed.replace(/import\s+\{\s*Arrow\s+Right\s*,\s*Check\s+Circle\s*,\s*Link\s*\}\s*from\s+'lucide-react';/g, 'import { ArrowRight, CheckCircle, Link } from \'lucide-react\';');
  fixed = fixed.replace(/import\s+Enhanced\s+SEO\s+from\s+'\.\.\/components\/Enhanced\s+SEO';/g, 'import EnhancedSEO from \'../components/EnhancedSEO\';');
  fixed = fixed.replace(/import\s+Home\s+Page\s+from\s+'\.\/page';/g, 'import HomePage from \'./page\';');
  fixed = fixed.replace(/import\s+\{\s*Browser\s+Router\s+as\s+Router\s*,\s*Routes\s*,\s*Route\s*,\s*Helmet\s+Provider\s*\}\s*from\s+'react-router-dom';/g, 'import { BrowserRouter as Router, Routes, Route, HelmetProvider } from \'react-router-dom\';');

  // Fix component names with spaces
  fixed = fixed.replace(/const\s+Not\s+Found\s+Page\s*:/g, 'const NotFoundPage:');
  fixed = fixed.replace(/const\s+Five\s+GConsulting\s+Page\s*=/g, 'const FiveGConsultingPage =');
  fixed = fixed.replace(/const\s+Five\s+GData\s+Analytics\s+Page\s*=/g, 'const FiveGDataAnalyticsPage =');
  fixed = fixed.replace(/const\s+Five\s+GDeployment\s+Page\s*=/g, 'const FiveGDeploymentPage =');
  fixed = fixed.replace(/const\s+Five\s+GEdge\s+Computing\s+Page\s*=/g, 'const FiveGEdgeComputingPage =');
  fixed = fixed.replace(/const\s+Five\s+GImplementation\s+Page\s*=/g, 'const FiveGImplementationPage =');
  fixed = fixed.replace(/const\s+Five\s+GInfrastructure\s+Page\s*=/g, 'const FiveGInfrastructurePage =');
  fixed = fixed.replace(/const\s+Five\s+GIntegration\s+Page\s*=/g, 'const FiveGIntegrationPage =');
  fixed = fixed.replace(/const\s+Five\s+GIot\s+Solutions\s+Page\s*=/g, 'const FiveGIotSolutionsPage =');
  fixed = fixed.replace(/const\s+Five\s+GMaintenance\s+Page\s*=/g, 'const FiveGMaintenancePage =');
  fixed = fixed.replace(/const\s+Five\s+GMigration\s+Page\s*=/g, 'const FiveGMigrationPage =');
  fixed = fixed.replace(/const\s+Five\s+GMobile\s+Applications\s+Page\s*=/g, 'const FiveGMobileApplicationsPage =');
  fixed = fixed.replace(/const\s+Five\s+GModernization\s+Page\s*=/g, 'const FiveGModernizationPage =');
  fixed = fixed.replace(/const\s+Five\s+GMonitoring\s+Page\s*=/g, 'const FiveGMonitoringPage =');
  fixed = fixed.replace(/const\s+Five\s+GNetwork\s+Infrastructure\s+Page\s*=/g, 'const FiveGNetworkInfrastructurePage =');
  fixed = fixed.replace(/const\s+Five\s+GNetwork\s+Optimization\s+Page\s*=/g, 'const FiveGNetworkOptimizationPage =');
  fixed = fixed.replace(/const\s+Five\s+GOptimization\s+Page\s*=/g, 'const FiveGOptimizationPage =');
  fixed = fixed.replace(/const\s+Five\s+GPerformance\s+Page\s*=/g, 'const FiveGPerformancePage =');
  fixed = fixed.replace(/const\s+Five\s+GPrivate\s+Networks\s+Page\s*=/g, 'const FiveGPrivateNetworksPage =');
  fixed = fixed.replace(/const\s+Five\s+GReliability\s+Page\s*=/g, 'const FiveGReliabilityPage =');
  fixed = fixed.replace(/const\s+Five\s+GScalability\s+Page\s*=/g, 'const FiveGScalabilityPage =');
  fixed = fixed.replace(/const\s+Five\s+GSecurity\s+Page\s*=/g, 'const FiveGSecurityPage =');
  fixed = fixed.replace(/const\s+Five\s+GSmart\s+City\s+Solutions\s+Page\s*=/g, 'const FiveGSmartCitySolutionsPage =');
  fixed = fixed.replace(/const\s+Five\s+GSolutions\s+Page\s*=/g, 'const FiveGSolutionsPage =');
  fixed = fixed.replace(/const\s+Five\s+GSupport\s+Page\s*=/g, 'const FiveGSupportPage =');
  fixed = fixed.replace(/const\s+Five\s+GTesting\s+Page\s*=/g, 'const FiveGTestingPage =');
  fixed = fixed.replace(/const\s+Five\s+GTraining\s+Page\s*=/g, 'const FiveGTrainingPage =');
  fixed = fixed.replace(/const\s+Five\s+GTransformation\s+Page\s*=/g, 'const FiveGTransformationPage =');
  fixed = fixed.replace(/const\s+Five\s+GUpgrade\s+Page\s*=/g, 'const FiveGUpgradePage =');

  // Fix JSX elements with spaces
  fixed = fixed.replace(/<Helmet\s+Provider>/g, '<HelmetProvider>');
  fixed = fixed.replace(/<\/Helmet\s+Provider>/g, '</HelmetProvider>');
  fixed = fixed.replace(/<Home\s+Page\s*\/>/g, '<HomePage />');
  fixed = fixed.replace(/<Route\s+path\s*=\s*"/g, '<Route path="/');
  fixed = fixed.replace(/class\s+Name\s*=/g, 'className=');

  // Fix text content with spaces
  fixed = fixed.replace(/5G\s+Strategy\s+Development/g, '5G Strategy Development');
  fixed = fixed.replace(/Comprehensive\s+5G\s+implementation\s+strategiestailored\s+toyourbusiness\s+needs\./g, 'Comprehensive 5G implementation strategies tailored to your business needs.');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixImportStatements(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixImportStatements, processFile };