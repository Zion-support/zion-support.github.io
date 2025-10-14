#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix comprehensive syntax errors
function fixComprehensiveSyntax(content) {
  let fixed = content;

  // Fix import statements
  fixed = fixed.replace(/importReactfrom/g, 'import React from');
  fixed = fixed.replace(/importEnhancedSEOfrom/g, 'import EnhancedSEO from');
  fixed = fixed.replace(/importHomePagefrom/g, 'import HomePage from');
  fixed = fixed.replace(/import\s*(\w+)\s*from/g, 'import $1 from');
  
  // Fix JSX attributes
  fixed = fixed.replace(/<metaname\s*=/g, '<meta name=');
  fixed = fixed.replace(/<divclassName\s*=/g, '<div className=');
  fixed = fixed.replace(/<h1className\s*=/g, '<h1 className=');
  fixed = fixed.replace(/<h2className\s*=/g, '<h2 className=');
  fixed = fixed.replace(/<h3className\s*=/g, '<h3 className=');
  fixed = fixed.replace(/<pclassName\s*=/g, '<p className=');
  fixed = fixed.replace(/<spanclassName\s*=/g, '<span className=');
  fixed = fixed.replace(/<aclassName\s*=/g, '<a className=');
  fixed = fixed.replace(/<buttonclassName\s*=/g, '<button className=');
  fixed = fixed.replace(/<sectionclassName\s*=/g, '<section className=');
  fixed = fixed.replace(/<articleclassName\s*=/g, '<article className=');
  fixed = fixed.replace(/<mainclassName\s*=/g, '<main className=');
  fixed = fixed.replace(/<navclassName\s*=/g, '<nav className=');
  fixed = fixed.replace(/<headerclassName\s*=/g, '<header className=');
  fixed = fixed.replace(/<footerclassName\s*=/g, '<footer className=');
  fixed = fixed.replace(/<ulclassName\s*=/g, '<ul className=');
  fixed = fixed.replace(/<liclassName\s*=/g, '<li className=');
  fixed = fixed.replace(/<imgclassName\s*=/g, '<img className=');
  fixed = fixed.replace(/<inputclassName\s*=/g, '<input className=');
  fixed = fixed.replace(/<formclassName\s*=/g, '<form className=');
  fixed = fixed.replace(/<labelclassName\s*=/g, '<label className=');
  fixed = fixed.replace(/<selectclassName\s*=/g, '<select className=');
  fixed = fixed.replace(/<optionclassName\s*=/g, '<option className=');
  fixed = fixed.replace(/<textareaclassName\s*=/g, '<textarea className=');
  
  // Fix className values with missing spaces
  fixed = fixed.replace(/className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, 'className="$1$2 $3$4"');
  fixed = fixed.replace(/className="([^"]*?)([a-z])(\d+)([^"]*?)"/g, 'className="$1$2-$3$4"');
  fixed = fixed.replace(/className="([^"]*?)(\d+)([a-z])([^"]*?)"/g, 'className="$1$2-$3$4"');
  
  // Fix specific broken patterns
  fixed = fixed.replace(/containermx-auto/g, 'container mx-auto');
  fixed = fixed.replace(/text-4xlfont-bold/g, 'text-4xl font-bold');
  fixed = fixed.replace(/text-xlmd:text-2xl/g, 'text-xl md:text-2xl');
  fixed = fixed.replace(/text-whitepy-20/g, 'text-white py-20');
  fixed = fixed.replace(/from-emerald-900to-teal-900/g, 'from-emerald-900 to-teal-900');
  fixed = fixed.replace(/max-w-4xlmx-autotext-center/g, 'max-w-4xl mx-auto text-center');
  fixed = fixed.replace(/text-4xlmd:text-6xlfont-boldmb-6/g, 'text-4xl md:text-6xl font-bold mb-6');
  fixed = fixed.replace(/text-xlmd:text-2xlmb-8text-emerald-100/g, 'text-xl md:text-2xl mb-8 text-emerald-100');
  fixed = fixed.replace(/min-h-screenbg-gray-50/g, 'min-h-screen bg-gray-50');
  fixed = fixed.replace(/bg-blue-50border border-blue-200rounded-lgp-6/g, 'bg-blue-50 border border-blue-200 rounded-lg p-6');
  fixed = fixed.replace(/text-blue-900mb-2/g, 'text-blue-900 mb-2');
  fixed = fixed.replace(/bg-green-50border border-green-200rounded-lgp-6/g, 'bg-green-50 border border-green-200 rounded-lg p-6');
  fixed = fixed.replace(/bg-purple-50border border-purple-200rounded-lgp-6/g, 'bg-purple-50 border border-purple-200 rounded-lg p-6');
  
  // Fix spaces in text content
  fixed = fixed.replace(/5GStrategy/g, '5G Strategy');
  fixed = fixed.replace(/5Gimplementation/g, '5G implementation');
  fixed = fixed.replace(/5Gnetwork/g, '5G network');
  fixed = fixed.replace(/5Gsolutions/g, '5G solutions');
  fixed = fixed.replace(/5Gservices/g, '5G services');
  fixed = fixed.replace(/5Gtechnology/g, '5G technology');
  fixed = fixed.replace(/5Ginfrastructure/g, '5G infrastructure');
  fixed = fixed.replace(/5Goptimization/g, '5G optimization');
  fixed = fixed.replace(/5Gsecurity/g, '5G security');
  fixed = fixed.replace(/5Gperformance/g, '5G performance');
  fixed = fixed.replace(/5Greliability/g, '5G reliability');
  fixed = fixed.replace(/5Gscalability/g, '5G scalability');
  fixed = fixed.replace(/5Gtesting/g, '5G testing');
  fixed = fixed.replace(/5Gtraining/g, '5G training');
  fixed = fixed.replace(/5Gtransformation/g, '5G transformation');
  fixed = fixed.replace(/5Gupgrade/g, '5G upgrade');
  fixed = fixed.replace(/5Gsupport/g, '5G support');
  fixed = fixed.replace(/5Gmaintenance/g, '5G maintenance');
  fixed = fixed.replace(/5Gmigration/g, '5G migration');
  fixed = fixed.replace(/5Gmonitoring/g, '5G monitoring');
  fixed = fixed.replace(/5Gmodernization/g, '5G modernization');
  fixed = fixed.replace(/5Gintegration/g, '5G integration');
  fixed = fixed.replace(/5Gdeployment/g, '5G deployment');
  fixed = fixed.replace(/5Gconsulting/g, '5G consulting');
  fixed = fixed.replace(/5Gdata/g, '5G data');
  fixed = fixed.replace(/5Gedge/g, '5G edge');
  fixed = fixed.replace(/5Gimplementation/g, '5G implementation');
  fixed = fixed.replace(/5Ginfrastructure/g, '5G infrastructure');
  fixed = fixed.replace(/5Giot/g, '5G IoT');
  fixed = fixed.replace(/5Gmobile/g, '5G mobile');
  fixed = fixed.replace(/5Gnetwork/g, '5G network');
  fixed = fixed.replace(/5Goptimization/g, '5G optimization');
  fixed = fixed.replace(/5Gprivate/g, '5G private');
  fixed = fixed.replace(/5Gsmart/g, '5G smart');
  fixed = fixed.replace(/5Gsolutions/g, '5G solutions');
  
  // Fix other common patterns
  fixed = fixed.replace(/Comprehensive5G/g, 'Comprehensive 5G');
  fixed = fixed.replace(/implementationstrategies/g, 'implementation strategies');
  fixed = fixed.replace(/tailoredtoyourbusiness/g, 'tailored to your business');
  fixed = fixed.replace(/ZionTechGroup/g, 'Zion Tech Group');
  fixed = fixed.replace(/Professional404/g, 'Professional 404');
  fixed = fixed.replace(/solutionsandservices/g, 'solutions and services');
  
  // Fix component names
  fixed = fixed.replace(/constNotFoundPage:/g, 'const NotFoundPage:');
  fixed = fixed.replace(/constFiveGConsultingPage/g, 'const FiveGConsultingPage');
  fixed = fixed.replace(/constFiveGDataAnalyticsPage/g, 'const FiveGDataAnalyticsPage');
  
  // Fix JSX element names
  fixed = fixed.replace(/<CheckCircleclassName/g, '<CheckCircle className');
  fixed = fixed.replace(/<ArrowRightclassName/g, '<ArrowRight className');
  fixed = fixed.replace(/<UsersclassName/g, '<Users className');
  fixed = fixed.replace(/<ShieldclassName/g, '<Shield className');
  
  // Fix className values in JSX elements
  fixed = fixed.replace(/className="w-8h-8"/g, 'className="w-8 h-8"');
  fixed = fixed.replace(/className="w-6h-6"/g, 'className="w-6 h-6"');
  fixed = fixed.replace(/className="w-4h-4"/g, 'className="w-4 h-4"');
  fixed = fixed.replace(/className="w-5h-5"/g, 'className="w-5 h-5"');
  
  // Fix missing spaces in general patterns
  fixed = fixed.replace(/([a-z])([A-Z])/g, '$1 $2');
  fixed = fixed.replace(/([a-z])(\d+)/g, '$1-$2');
  fixed = fixed.replace(/(\d+)([a-z])/g, '$1-$2');
  
  // But be careful not to break existing valid patterns
  fixed = fixed.replace(/React\.FC/g, 'React.FC');
  fixed = fixed.replace(/ArrowRight/g, 'ArrowRight');
  fixed = fixed.replace(/CheckCircle/g, 'CheckCircle');
  fixed = fixed.replace(/EnhancedSEO/g, 'EnhancedSEO');
  fixed = fixed.replace(/HomePage/g, 'HomePage');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixComprehensiveSyntax(content);
    
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

module.exports = { fixComprehensiveSyntax, processFile };