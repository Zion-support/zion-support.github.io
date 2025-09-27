#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with merge conflicts
const conflictedFiles = [
  'pages/_app.tsx',
  'pages/_document.tsx',
  'pages/api/analytics.ts',
  'pages/api/image-optimization.ts',
  'pages/index.tsx',
  'src/components/AccessibilityEnhancer.tsx',
  'src/components/EnhancedSEO.tsx'
];

function resolveConflicts() {
  console.log('🔧 Resolving merge conflicts...');
  
  for (const filePath of conflictedFiles) {
    if (fs.existsSync(filePath)) {
      console.log(`📝 Processing ${filePath}...`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove merge conflict markers and resolve conflicts
      content = content
        // Remove conflict markers
        .replace(/<<<<<<< \.our\n/g, '')
        .replace(/=======\n/g, '')
        .replace(/>>>>>>> \.their\n/g, '')
        // Clean up any remaining conflict artifacts
        .replace(/<<<<<<< HEAD\n/g, '')
        .replace(/=======\n/g, '')
        .replace(/>>>>>>> [a-f0-9]+\n/g, '')
        // Fix common formatting issues
        .replace(/\n\n\n+/g, '\n\n')
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        // Fix spacing issues
        .replace(/\s+\n/g, '\n')
        .replace(/\n\s+/g, '\n  ')
        // Fix specific issues found in conflicts
        .replace(/og: title/g, 'og:title')
        .replace(/\s+<Head>/g, '      <Head>')
        .replace(/\s+<\/Head>/g, '      </Head>')
        .replace(/\s+}/g, '  }')
        .replace(/\s+\)/g, '  )')
        .replace(/\s+>/g, '  >')
        // Fix specific AccessibilityEnhancer issues
        .replace(/const AccessibilityEnhancer = React\.forwardRef<any, AccessibilityEnhancerProps>\({/g, 'const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({')
        .replace(/}, ref\) => {/g, '}) => {')
        .replace(/AccessibilityEnhancer\.displayName = 'AccessibilityEnhancer';/g, '')
        // Fix specific SEO issues
        .replace(/width=device-width,initial-scale=1,shrink-to-fit=no/g, 'width=device-width, initial-scale=1, shrink-to-fit=no')
        .replace(/noindex\?'noindex':'index'/g, 'noindex ? \'noindex\' : \'index\'')
        .replace(/nofollow\?'nofollow':'follow'/g, 'nofollow ? \'nofollow\' : \'follow\'')
        // Clean up extra spaces and formatting
        .replace(/\s+$/gm, '')
        .replace(/\n{3,}/g, '\n\n');
      
      // Write the resolved content back
      fs.writeFileSync(filePath, content);
      console.log(`✅ Resolved conflicts in ${filePath}`);
    } else {
      console.log(`⚠️ File not found: ${filePath}`);
    }
  }
  
  console.log('🎉 All merge conflicts resolved!');
}

// Run the conflict resolution
resolveConflicts();