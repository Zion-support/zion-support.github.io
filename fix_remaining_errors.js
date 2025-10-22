import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all page files
const appDir = path.join(__dirname, 'app');
const pageFiles = [];

function findPageFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        pageFiles.push(pageFile);
      }
    }
  }
}

findPageFiles(appDir);

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the page name from the file path
    const pageName = path.basename(path.dirname(filePath))
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Page';
    
    console.log(`Fixing ${filePath} - Component name: ${pageName}`);
    
    // Check which icons are actually used in the content
    const usedIcons = new Set();
    if (content.includes('CheckCircle')) usedIcons.add('CheckCircle');
    if (content.includes('ArrowRight')) usedIcons.add('ArrowRight');
    if (content.includes('Zap')) usedIcons.add('Zap');
    if (content.includes('Shield')) usedIcons.add('Shield');
    if (content.includes('Brain')) usedIcons.add('Brain');
    if (content.includes('Globe')) usedIcons.add('Globe');
    if (content.includes('MapPin')) usedIcons.add('MapPin');
    if (content.includes('Phone')) usedIcons.add('Phone');
    if (content.includes('Mail')) usedIcons.add('Mail');
    if (content.includes('Users')) usedIcons.add('Users');
    if (content.includes('Clock')) usedIcons.add('Clock');
    if (content.includes('AlertCircle')) usedIcons.add('AlertCircle');
    if (content.includes('XCircle')) usedIcons.add('XCircle');
    
    // Build the icon imports array
    const iconImports = Array.from(usedIcons).sort();
    
    // Build the new import section
    let newImports = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';`;
    
    if (iconImports.length > 0) {
      newImports += `\nimport { ${iconImports.join(', ')} } from 'lucide-react';`;
    }
    
    // Find the start of the component definition
    const componentStartPatterns = [
      `const ${pageName}: React.FC = () => {`,
      'const AiAutomationPage: React.FC = () => {',
      'const AiCustomerSupportPage: React.FC = () => {',
      'const AiCybersecurityPage: React.FC = () => {',
      'const AiDataAnalyticsPage: React.FC = () => {',
      'const AiDataVisualizationPage: React.FC = () => {',
      'const AiFintechPage: React.FC = () => {',
      'const AiHealthcarePage: React.FC = () => {',
      'const AiMarketingPage: React.FC = () => {',
      'const AiSalesAutomationPage: React.FC = () => {',
      'const AiWorkflowAutomationPage: React.FC = () => {',
      'const ARVRSolutionsPage: React.FC = () => {',
      'const ArVrSolutionsPage: React.FC = () => {',
      'const AutonomousSystemsPage: React.FC = () => {',
      'const ConsultationPage: React.FC = () => {',
      'const IoTEdgeComputingPage: React.FC = () => {',
      'const IotEdgeComputingPage: React.FC = () => {',
      'const ItInfrastructurePage: React.FC = () => {',
      'const ItSupportPage: React.FC = () => {',
      'const MicroSaasPage: React.FC = () => {',
      'const QuantumComputingPage: React.FC = () => {',
      'const StatusPage: React.FC = () => {'
    ];
    
    let componentStartIndex = -1;
    for (const pattern of componentStartPatterns) {
      const index = content.indexOf(pattern);
      if (index !== -1) {
        componentStartIndex = index;
        break;
      }
    }
    
    if (componentStartIndex === -1) {
      console.log(`Could not find component start in ${filePath}`);
      return;
    }
    
    // Replace everything before the component with new imports
    content = newImports + '\n\n' + content.substring(componentStartIndex);
    
    // Fix the component name and export
    content = content.replace(/const \w+Page: React\.FC = \(\) => \{/, `const ${pageName}: React.FC = () => {`);
    content = content.replace(/export default \w+Page;/, `export default ${pageName};`);
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
pageFiles.forEach(filePath => {
  fixFile(filePath);
});

console.log('All remaining files fixed!');