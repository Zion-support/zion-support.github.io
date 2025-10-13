#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files with unused imports
const filesToFix = [
  'app/components/FuturisticText.tsx',
  'app/landing-page-builder/page.tsx',
  'app/zion-ai-customer-churn-predictor-pro/page.tsx',
  'app/zion-ai-email-marketing-pro/page.tsx',
  'app/zion-ai-inventory-optimizer-pro/page.tsx'
];

function cleanupUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused imports based on the linting errors
    if (filePath.includes('FuturisticText.tsx')) {
      // Remove unused FuturisticTextProps
      content = content.replace(/interface FuturisticTextProps[^}]+}\s*/g, '');
    }
    
    if (filePath.includes('landing-page-builder')) {
      // Remove unused Link and ArrowRight
      content = content.replace(/import { Link } from 'react-router-dom';\s*/g, '');
      content = content.replace(/import { ArrowRight } from 'lucide-react';\s*/g, '');
    }
    
    if (filePath.includes('zion-ai-customer-churn-predictor-pro')) {
      // Remove unused icons
      content = content.replace(/import { Globe, Heart, MousePointer } from 'lucide-react';\s*/g, '');
    }
    
    if (filePath.includes('zion-ai-email-marketing-pro')) {
      // Remove unused imports
      content = content.replace(/import { Link } from 'react-router-dom';\s*/g, '');
      content = content.replace(/import { Target, ArrowRight, Star, Clock, Sparkles, Cpu, Send, Heart, MousePointer, Shield, TrendingUp } from 'lucide-react';\s*/g, '');
    }
    
    if (filePath.includes('zion-ai-inventory-optimizer-pro')) {
      // Remove unused imports
      content = content.replace(/import { Link } from 'react-router-dom';\s*/g, '');
      content = content.replace(/import { Package, Target, ArrowRight, Star, Clock, Sparkles, Globe, AlertTriangle } from 'lucide-react';\s*/g, '');
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned unused imports in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Clean all files
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    cleanupUnusedImports(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Unused imports cleanup completed!');