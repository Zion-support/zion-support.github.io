#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to restore broken files by reverting the entity replacements
function restoreBrokenFiles() {
  const brokenFiles = [
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
  
  brokenFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Restore proper quotes and apostrophes
        content = content
          .replace(/&apos;/g, "'")
          .replace(/&quot;/g, '"');
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Restored file: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error restoring file ${filePath}:`, error.message);
      }
    }
  });
}

// Function to fix specific unescaped entities in JSX
function fixJSXEntities() {
  const filesToFix = [
    'app/services/page.tsx',
    'app/terms/page.tsx'
  ];
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Fix specific unescaped entities in JSX content only
        content = content
          .replace(/(<[^>]*>[^<]*)(['"])([^<]*)(['"])([^<]*<\/[^>]*>)/g, (match, p1, p2, p3, p4, p5) => {
            // Only replace in text content, not in attributes
            if (p2 === "'" && p4 === "'") {
              return p1 + '&apos;' + p3 + '&apos;' + p5;
            }
            if (p2 === '"' && p4 === '"') {
              return p1 + '&quot;' + p3 + '&quot;' + p5;
            }
            return match;
          });
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed JSX entities in: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error fixing JSX entities in ${filePath}:`, error.message);
      }
    }
  });
}

// Function to fix API files properly
function fixAPIFilesProperly() {
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
        
        // Fix try-catch blocks properly
        if (content.includes('try {') && !content.includes('catch')) {
          // Find the last try block and add proper catch
          const tryIndex = content.lastIndexOf('try {');
          if (tryIndex !== -1) {
            const beforeTry = content.substring(0, tryIndex);
            const afterTry = content.substring(tryIndex);
            
            // Find the matching closing brace
            let braceCount = 0;
            let endIndex = -1;
            for (let i = 0; i < afterTry.length; i++) {
              if (afterTry[i] === '{') braceCount++;
              if (afterTry[i] === '}') {
                braceCount--;
                if (braceCount === 0) {
                  endIndex = i;
                  break;
                }
              }
            }
            
            if (endIndex !== -1) {
              const tryBlock = afterTry.substring(0, endIndex + 1);
              const afterTryBlock = afterTry.substring(endIndex + 1);
              content = beforeTry + tryBlock + '\n  } catch (error) {\n    console.error(\'Error:\', error);\n    return res.status(500).json({ error: \'Internal server error\' });\n  }' + afterTryBlock;
            }
          }
        }
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed API file properly: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error fixing API file ${filePath}:`, error.message);
      }
    }
  });
}

console.log('Restoring broken files and fixing issues...');

// Restore broken files
restoreBrokenFiles();

// Fix JSX entities properly
fixJSXEntities();

// Fix API files properly
fixAPIFilesProperly();

console.log('File restoration and fixes completed!');