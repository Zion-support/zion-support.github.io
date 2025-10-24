#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;

  // Fix missing imports
  if (filePath.includes('ai-automation/page.tsx')) {
    if (content.includes('Settings') && !content.includes("import { Settings")) {
      content = content.replace(
        "import { Zap, Brain, Globe, Users, BarChart, MessageCircle, FileText, TrendingUp, Clock, Star, ArrowRight, CheckCircle, Cpu } from 'lucide-react';",
        "import { Zap, Brain, Settings, Globe, Users, BarChart, MessageCircle, FileText, TrendingUp, Clock, Shield, Star, ArrowRight, CheckCircle, Cpu } from 'lucide-react';"
      );
      modified = true;
    }
  }

  if (filePath.includes('ai-invoice-generator/page.tsx')) {
    if (content.includes('Settings') && !content.includes("import { Settings")) {
      content = content.replace(
        "import { FileText, DollarSign, Zap, CheckCircle, ArrowRight, Clock, Shield, Star, Users, BarChart, TrendingUp, Globe, MessageCircle, Cpu } from 'lucide-react';",
        "import { FileText, DollarSign, Zap, CheckCircle, ArrowRight, Clock, Settings, Shield, Star, Users, BarChart, TrendingUp, Globe, MessageCircle, Cpu } from 'lucide-react';"
      );
      modified = true;
    }
  }

  if (filePath.includes('ContentStatistics.tsx')) {
    if (content.includes('Shield') && !content.includes("import { Shield")) {
      content = content.replace(
        "import { BarChart, TrendingUp, Users, Globe, Zap, Star, ArrowRight, CheckCircle, Clock, Cpu, MessageCircle, FileText } from 'lucide-react';",
        "import { BarChart, TrendingUp, Users, Globe, Zap, Star, ArrowRight, CheckCircle, Clock, Cpu, MessageCircle, FileText, Shield, Database } from 'lucide-react';"
      );
      modified = true;
    }
  }

  if (filePath.includes('EnhancedAccessibility.tsx')) {
    // Add missing import
    if (content.includes('AccessibilitySettings') && !content.includes("import { AccessibilitySettings")) {
      content = content.replace(
        "import { Settings, Eye, Volume2, MousePointer, Type, Contrast, ZoomIn, Zap, CheckCircle, ArrowRight, Star, Users, Globe, BarChart, MessageCircle, FileText, TrendingUp, Clock, Cpu } from 'lucide-react';",
        "import { Settings, Eye, Volume2, MousePointer, Type, Contrast, ZoomIn, Zap, CheckCircle, ArrowRight, Star, Users, Globe, BarChart, MessageCircle, FileText, TrendingUp, Clock, Cpu } from 'lucide-react';\nimport { AccessibilitySettings } from '../contexts/AccessibilityContext';"
      );
      modified = true;
    }
    
    // Fix parameter types
    content = content.replace(/\(prev: any\)/g, '(prev: any)');
    content = content.replace(/\(prev\)/g, '(prev: any)');
    modified = true;
  }

  if (filePath.includes('EnhancedServicesShowcase.tsx')) {
    if (content.includes('Cloud') && !content.includes("import { Cloud")) {
      content = content.replace(
        "import { Zap, Star, ArrowRight, CheckCircle, Clock, Cpu, MessageCircle, FileText, TrendingUp, BarChart, Users, Globe, Shield, Database } from 'lucide-react';",
        "import { Zap, Star, ArrowRight, CheckCircle, Clock, Cpu, MessageCircle, FileText, TrendingUp, BarChart, Users, Globe, Cloud, Shield, Database } from 'lucide-react';"
      );
      modified = true;
    }
  }

  if (filePath.includes('database-services/page.tsx')) {
    if (content.includes('Footer') && !content.includes("import Footer")) {
      content = content.replace(
        "import { Database, Server, Cloud, Shield, Zap, CheckCircle, ArrowRight, Star, Users, Globe, BarChart, MessageCircle, FileText, TrendingUp, Clock, Cpu } from 'lucide-react';",
        "import { Database, Server, Cloud, Shield, Zap, CheckCircle, ArrowRight, Star, Users, Globe, BarChart, MessageCircle, FileText, TrendingUp, Clock, Cpu } from 'lucide-react';\nimport Footer from '../components/Footer';"
      );
      modified = true;
    }
  }

  if (filePath.includes('demo/page.tsx')) {
    if (content.includes('Shield') && !content.includes("import { Shield")) {
      content = content.replace(
        "import { Play, Zap, CheckCircle, ArrowRight, Star, Users, Globe, BarChart, MessageCircle, FileText, TrendingUp, Clock, Cpu, Workflow } from 'lucide-react';",
        "import { Play, Zap, CheckCircle, ArrowRight, Star, Users, Globe, BarChart, MessageCircle, FileText, TrendingUp, Clock, Cpu, Workflow, Shield } from 'lucide-react';"
      );
      modified = true;
    }
  }

  if (filePath.includes('services/page.tsx')) {
    if (content.includes('Cloud') && !content.includes("import { Cloud")) {
      content = content.replace(
        "import { Zap, Star, ArrowRight, CheckCircle, Clock, Cpu, MessageCircle, FileText, TrendingUp, BarChart, Users, Globe, Shield, Database } from 'lucide-react';",
        "import { Zap, Star, ArrowRight, CheckCircle, Clock, Cpu, MessageCircle, FileText, TrendingUp, BarChart, Users, Globe, Cloud, Shield, Database } from 'lucide-react';"
      );
      modified = true;
    }
  }

  // Fix error.tsx and global-error.tsx
  if (filePath.includes('error.tsx') || filePath.includes('global-error.tsx')) {
    content = content.replace(/error: Error/g, '_error: Error');
    content = content.replace(/error\.message/g, '_error.message');
    modified = true;
  }

  // Remove unused React imports
  if (content.includes("import React from 'react';") && !content.includes('React.')) {
    content = content.replace("import React from 'react';\n", '');
    modified = true;
  }

  // Remove unused useEffect imports
  if (content.includes("import { useEffect }") && !content.includes('useEffect(')) {
    content = content.replace("import { useEffect } from 'react';\n", '');
    content = content.replace("import { useState, useCallback, useEffect } from 'react';", "import { useState, useCallback } from 'react';");
    modified = true;
  }

  // Remove unused Navigation and Footer imports from layout.tsx
  if (filePath.includes('layout.tsx')) {
    if (content.includes("import Navigation from './components/Navigation';") && !content.includes('<Navigation')) {
      content = content.replace("import Navigation from './components/Navigation';\n", '');
      modified = true;
    }
    if (content.includes("import Footer from './components/Footer';") && !content.includes('<Footer')) {
      content = content.replace("import Footer from './components/Footer';\n", '');
      modified = true;
    }
  }

  // Remove unused Footer import from micro-saas/page.tsx
  if (filePath.includes('micro-saas/page.tsx')) {
    if (content.includes("import Footer from '../components/Footer';") && !content.includes('<Footer')) {
      content = content.replace("import Footer from '../components/Footer';\n", '');
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`No changes needed: ${filePath}`);
  }
}

const filesToFix = [
  'app/ai-automation/page.tsx',
  'app/ai-invoice-generator/page.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/CookieConsent.tsx',
  'app/components/EnhancedAccessibility.tsx',
  'app/components/EnhancedServicesShowcase.tsx',
  'app/components/LoadingOptimizer.tsx',
  'app/components/Navigation.tsx',
  'app/contexts/AccessibilityContext.tsx',
  'app/database-services/page.tsx',
  'app/demo/page.tsx',
  'app/error.tsx',
  'app/global-error.tsx',
  'app/layout.tsx',
  'app/micro-saas/page.tsx',
  'app/services/page.tsx'
];

console.log('Fixing remaining TypeScript errors...');

filesToFix.forEach(fixFile);

console.log('Done!');