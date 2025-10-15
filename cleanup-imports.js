import fs from 'fs';
import path from 'path';

const filesToClean = [
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-healthcare-platform/page.tsx',
  'app/ai-neural-memory-assistant/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-smart-calendar/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/ai-video-analysis/page.tsx',
  'app/ai-video-editor/page.tsx',
  'app/ai-video-generation/page.tsx',
  'app/ai-video-generator/page.tsx',
  'app/ai-voice-assistant-enterprise/page.tsx',
  'app/api-docs/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-consulting/page.tsx',
  'app/cloud-cost-optimization/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/cloud-infrastructure-manager/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-migration-advanced/page.tsx',
  'app/cloud-migration-pro/page.tsx',
  'app/cloud-migration-services/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-native-development/page.tsx',
  'app/cloud-native-security/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-services/page.tsx',
  'app/cloud-solutions/page.tsx'
];

const cleanupFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused React import
    content = content.replace(/import React from 'react';\s*\n/, '');
    content = content.replace(/import React, \{ [^}]+ \} from 'react';\s*\n/, '');
    
    // Remove unused Helmet import
    content = content.replace(/import \{ Helmet \} from "react-helmet-async";\s*\n/, '');
    
    // Remove unused icon imports
    const unusedIcons = [
      'Video', 'Cloud', 'Calendar', 'Languages', 'Filter', 'X', 'Suspense', 'Check', 'useRef',
      'Database', 'ArrowRightIcon', 'RocketLaunchIcon', 'Activity', 'BarChart3', 'Cpu', 'Shield', 'ShoppingCart', 'Zap'
    ];
    
    unusedIcons.forEach(icon => {
      const regex = new RegExp(`\\b${icon}\\b,?\\s*`, 'g');
      content = content.replace(regex, '');
    });
    
    // Clean up empty import statements
    content = content.replace(/import \{ \} from '[^']+';\s*\n/g, '');
    content = content.replace(/import \{\s*\} from '[^']+';\s*\n/g, '');
    
    // Remove empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
};

filesToClean.forEach(cleanupFile);
console.log('All imports cleaned up');