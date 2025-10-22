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

// All possible icons that might be used
const allIcons = [
  'CheckCircle', 'ArrowRight', 'Zap', 'Shield', 'Brain', 'Globe', 'MapPin', 
  'Phone', 'Mail', 'Users', 'Clock', 'AlertCircle', 'XCircle', 'BarChart', 
  'TrendingUp', 'Database', 'ShieldCheck', 'Smartphone', 'Monitor', 'Cloud',
  'Laptop', 'Server', 'Cpu', 'HardDrive', 'Wifi', 'Lock', 'Eye', 'Search',
  'Filter', 'Settings', 'Download', 'Upload', 'Edit', 'Trash', 'Plus',
  'Minus', 'ChevronDown', 'ChevronUp', 'ChevronLeft', 'ChevronRight',
  'Star', 'Heart', 'ThumbsUp', 'ThumbsDown', 'MessageCircle', 'Bell',
  'Home', 'User', 'ShoppingCart', 'CreditCard', 'Package', 'Truck',
  'Calendar', 'Map', 'Navigation', 'Target', 'Award', 'Trophy',
  'Gift', 'Bookmark', 'Tag', 'Flag', 'RefreshCw', 'RotateCcw', 'RotateCw',
  'Maximize', 'Minimize', 'ExternalLink', 'Link', 'Copy', 'Scissors',
  'FileText', 'Image', 'Video', 'Music', 'Headphones', 'Mic', 'Speaker',
  'Camera', 'CameraOff', 'MicOff', 'Volume2', 'VolumeX', 'Play', 'Pause',
  'Stop', 'SkipBack', 'SkipForward', 'Repeat', 'Shuffle', 'FastForward',
  'Rewind', 'Square', 'Circle', 'Triangle', 'Hexagon', 'Octagon'
];

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
    for (const icon of allIcons) {
      if (content.includes(`<${icon}`) || content.includes(`{${icon}`) || content.includes(`<${icon} `)) {
        usedIcons.add(icon);
      }
    }
    
    // Check if Navigation and Footer are used
    const usesNavigation = content.includes('<Navigation') || content.includes('{Navigation');
    const usesFooter = content.includes('<Footer') || content.includes('{Footer');
    
    // Build the new import section
    let newImports = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';`;
    
    if (usesNavigation) {
      newImports += `\nimport Navigation from '../components/Navigation';`;
    }
    
    if (usesFooter) {
      newImports += `\nimport Footer from '../components/Footer';`;
    }
    
    if (usedIcons.size > 0) {
      const iconImports = Array.from(usedIcons).sort();
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

console.log('All final errors fixed!');