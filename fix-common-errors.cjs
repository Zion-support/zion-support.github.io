const fs = require('fs');
const path = require('path');

// Common fixes for the most frequent errors
const fixes = [
  // Fix unescaped apostrophes
  {
    pattern: /Let's/g,
    replacement: "Let&apos;s"
  },
  {
    pattern: /don't/g,
    replacement: "don&apos;t"
  },
  {
    pattern: /can't/g,
    replacement: "can&apos;t"
  },
  {
    pattern: /won't/g,
    replacement: "won&apos;t"
  },
  {
    pattern: /it's/g,
    replacement: "it&apos;s"
  },
  {
    pattern: /we're/g,
    replacement: "we&apos;re"
  },
  {
    pattern: /you're/g,
    replacement: "you&apos;re"
  },
  {
    pattern: /they're/g,
    replacement: "they&apos;re"
  },
  {
    pattern: /I'm/g,
    replacement: "I&apos;m"
  },
  {
    pattern: /'s/g,
    replacement: "&apos;s"
  },
  // Fix unescaped quotes
  {
    pattern: /"([^"]*)"([^>]*>)/g,
    replacement: "&quot;$1&quot;$2"
  }
];

// Files to process
const filesToProcess = [
  'app/components/EnhancedLoading.tsx',
  'app/components/ErrorBoundary.tsx',
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
  'app/support/page.tsx',
  'app/terms/page.tsx',
  'app/utils/errorHandler.tsx',
  'app/utils/image.tsx',
  'src/components/PerformanceDashboard.tsx',
  'src/main.tsx'
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all files
filesToProcess.forEach(fixFile);

console.log('Common error fixes completed!');