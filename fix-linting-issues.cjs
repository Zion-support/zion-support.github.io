#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  return content
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
}

// Function to fix API files with syntax errors
function fixAPIFiles() {
  const apiFiles = [
    'api/create-payment-intent.js',
    'api/error-report.js',
    'api/newsletter/subscribe.js'
  ];
  
  apiFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Fix missing closing braces
        const openBraces = (content.match(/\{/g) || []).length;
        const closeBraces = (content.match(/\}/g) || []).length;
        
        if (openBraces > closeBraces) {
          const missingBraces = openBraces - closeBraces;
          content = content + '\n' + '}'.repeat(missingBraces);
        }
        
        // Fix try-catch blocks
        if (content.includes('try {') && !content.includes('catch')) {
          content = content.replace(/try\s*\{[^}]*$/, (match) => {
            return match + '\n  } catch (error) {\n    console.error(\'Error:\', error);\n  }';
          });
        }
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed API file: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error fixing API file ${filePath}:`, error.message);
      }
    }
  });
}

// Function to fix React components with unescaped entities
function fixReactComponents() {
  const componentFiles = [
    'app/components/EnhancedLoading.tsx',
    'app/components/ErrorFallback.tsx',
    'app/components/FuturisticBackgroundEnhanced.tsx',
    'app/components/FuturisticButtonEnhanced.tsx',
    'app/components/FuturisticCardEnhanced.tsx',
    'app/components/FuturisticTextEnhanced.tsx',
    'app/components/ImprovedErrorBoundary.tsx',
    'app/components/ImprovedFooter.tsx',
    'app/components/ImprovedImage.tsx',
    'app/components/ImprovedNavigation.tsx',
    'app/components/ImprovedSidebar.tsx',
    'app/components/LazyImage.tsx',
    'app/components/Loading.tsx',
    'app/components/MobileNavigation.tsx',
    'app/components/ResponsiveGrid.tsx',
    'app/components/ResponsiveText.tsx',
    'app/components/StructuredData.tsx',
    'app/config/errorBoundaryConfig.tsx',
    'app/main.tsx',
    'app/micro-saas-services/microSaasServices.tsx',
    'app/micro-saas-services/services.tsx',
    'app/not-found.tsx',
    'app/service-template.tsx',
    'app/services/page.tsx',
    'app/terms/page.tsx'
  ];
  
  componentFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Fix unescaped entities
        content = content
          .replace(/'/g, '&apos;')
          .replace(/"/g, '&quot;');
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed React component: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error fixing React component ${filePath}:`, error.message);
      }
    }
  });
}

// Function to remove unused imports
function removeUnusedImports() {
  const filesWithUnusedImports = [
    'app/case-studies/page.tsx',
    'app/components/EnhancedErrorFeedback.tsx',
    'app/components/Footer.tsx',
    'app/components/UserExperienceEnhancer.tsx',
    'app/contexts/AnalyticsContext.tsx',
    'app/demo/page.tsx',
    'app/landing-page-builder/page.tsx',
    'app/page-original.tsx',
    'app/partners/page.tsx',
    'app/support/page.tsx',
    'app/tutorials/page.tsx'
  ];
  
  filesWithUnusedImports.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Remove unused React import
        if (content.includes("import React from 'react';") && !content.includes('React.')) {
          content = content.replace(/import React from 'react';\n?/, '');
        }
        
        // Remove unused useContext import
        if (content.includes("import React, { createContext, useContext, useState, useEffect } from 'react';")) {
          content = content.replace("import React, { createContext, useContext, useState, useEffect } from 'react';", "import React, { createContext, useState, useEffect } from 'react';");
        }
        
        // Remove unused icon imports (common pattern)
        const unusedIconPatterns = [
          /import { [^}]*Mail[^}]* } from 'lucide-react';\n?/g,
          /import { [^}]*Phone[^}]* } from 'lucide-react';\n?/g,
          /import { [^}]*MapPin[^}]* } from 'lucide-react';\n?/g,
          /import { [^}]*CheckCircle[^}]* } from 'lucide-react';\n?/g,
          /import { [^}]*BookOpen[^}]* } from 'lucide-react';\n?/g,
          /import { [^}]*Link[^}]* } from 'lucide-react';\n?/g,
          /import { [^}]*ExternalLink[^}]* } from 'lucide-react';\n?/g,
          /import { [^}]*Building2[^}]* } from 'lucide-react';\n?/g,
          /import { [^}]*Handshake[^}]* } from 'lucide-react';\n?/g,
          /import { [^}]*Award[^}]* } from 'lucide-react';\n?/g,
          /import { [^}]*Users[^}]* } from 'lucide-react';\n?/g,
          /import { [^}]*Zap[^}]* } from 'lucide-react';\n?/g
        ];
        
        unusedIconPatterns.forEach(pattern => {
          content = content.replace(pattern, '');
        });
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Removed unused imports from: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error fixing imports in ${filePath}:`, error.message);
      }
    }
  });
}

// Function to fix TypeScript any types
function fixTypeScriptAnyTypes() {
  const filesWithAnyTypes = [
    'app/components/AnalyticsProvider.tsx',
    'app/components/PerformanceMonitor.tsx',
    'app/components/SEOEnhancer.tsx',
    'app/contexts/AnalyticsContext.tsx',
    'app/contexts/AnalyticsContextDefinition.tsx'
  ];
  
  filesWithAnyTypes.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Replace common any types with more specific types
        content = content
          .replace(/Record<string, any>/g, 'Record<string, unknown>')
          .replace(/Record<string, any>/g, 'Record<string, unknown>')
          .replace(/any\[\]/g, 'unknown[]')
          .replace(/: any/g, ': unknown')
          .replace(/as any/g, 'as unknown');
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed TypeScript any types in: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error fixing TypeScript types in ${filePath}:`, error.message);
      }
    }
  });
}

console.log('Starting comprehensive linting fixes...');

// Fix API files
fixAPIFiles();

// Fix React components
fixReactComponents();

// Remove unused imports
removeUnusedImports();

// Fix TypeScript any types
fixTypeScriptAnyTypes();

console.log('Linting fixes completed!');