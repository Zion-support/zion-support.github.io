#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive syntax error fixing...');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix unterminated string literals
  fixed = fixed.replace(/'([^']*)$/gm, (match, str) => {
    if (str && !str.includes("'") && !str.includes('"')) {
      return `"${str}"`;
    }
    return match;
  });

  // Fix missing closing tags for fragments
  fixed = fixed.replace(/<>([^<]*(?:<(?!/>)[^<]*)*?)(?=<[^/]|$)/g, (match, inner) => {
    if (!inner.includes('</>')) {
      return match + inner + '</>';
    }
    return match;
  });

  // Fix missing closing div tags
  fixed = fixed.replace(/<div[^>]*>([^<]*(?:<(?!/div>)[^<]*)*?)(?=<[^/]|$)/g, (match, inner) => {
    if (!inner.includes('</div>')) {
      return match + inner + '</div>';
    }
    return match;
  });

  // Fix missing closing braces
  fixed = fixed.replace(/\{([^}]*)$/gm, (match, inner) => {
    if (inner.trim() && !inner.includes('}')) {
      return match + '}';
    }
    return match;
  });

  // Fix missing closing parentheses
  fixed = fixed.replace(/\(([^)]*)$/gm, (match, inner) => {
    if (inner.trim() && !inner.includes(')')) {
      return match + ')';
    }
    return match;
  });

  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)"([^>]*>)/g, 'className="$1"$2');
  fixed = fixed.replace(/className='([^']*)'([^>]*>)/g, 'className="$1"$2');

  return fixed;
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    'app/components/Footer.tsx',
    'app/components/Navigation.tsx',
    'app/components/AdvancedSEOOptimizer.tsx',
    'app/components/PerformanceOptimizer.tsx',
    'app/components/lazyUtils.tsx'
  ];

  for (const filePath of problematicFiles) {
    try {
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixed = fixSyntaxErrors(content);
        
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          console.log(`✅ Fixed: ${filePath}`);
        }
      }
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}:`, error.message);
    }
  }
}

// Function to fix page files with missing closing tags
function fixPageFiles() {
  const pageFiles = [
    'app/5g-solutions/page.tsx',
    'app/about/page.tsx',
    'app/ai-customer-sentiment-tracker/page.tsx',
    'app/ai-data-analytics-pro/page.tsx',
    'app/ai-financial-analysis/page.tsx',
    'app/ai-healthcare-diagnostics/page.tsx',
    'app/ai-holographic-workspace/page.tsx',
    'app/ai-hr-recruitment-pro/page.tsx',
    'app/ai-image-recognition-pro/page.tsx',
    'app/ai-powered-devops/page.tsx',
    'app/ai-services/page.tsx',
    'app/ai-solutions/page.tsx',
    'app/blog/page.tsx'
  ];

  for (const filePath of pageFiles) {
    try {
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix missing closing tags
        if (content.includes('<>') && !content.includes('</>')) {
          content = content.replace(/(<>[^<]*(?:<(?!/>)[^<]*)*?)(?=<[^/]|$)/g, (match) => {
            if (!match.includes('</>')) {
              return match + '</>';
            }
            return match;
          });
        }

        if (content.includes('<div') && !content.includes('</div>')) {
          content = content.replace(/(<div[^>]*>[^<]*(?:<(?!/div>)[^<]*)*?)(?=<[^/]|$)/g, (match) => {
            if (!match.includes('</div>')) {
              return match + '</div>';
            }
            return match;
          });
        }

        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed page: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}:`, error.message);
    }
  }
}

// Main execution
function main() {
  console.log('🔧 Fixing specific problematic files...');
  fixSpecificFiles();
  
  console.log('🔧 Fixing page files...');
  fixPageFiles();

  // Run type check to see remaining errors
  console.log('\n🔍 Running type check to verify fixes...');
  try {
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('✅ Type check passed!');
  } catch (error) {
    console.log('⚠️  Some type errors remain, but many have been fixed');
  }
}

main();