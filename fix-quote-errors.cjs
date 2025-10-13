const fs = require('fs');
const path = require('path');

// Fix over-escaped quotes in JSX
const fixes = [
  // Fix over-escaped quotes in JSX attributes
  {
    pattern: /className=&quot;([^&]*)&quot;/g,
    replacement: 'className="$1"'
  },
  {
    pattern: /name=&quot;([^&]*)&quot;/g,
    replacement: 'name="$1"'
  },
  {
    pattern: /content=&quot;([^&]*)&quot;/g,
    replacement: 'content="$1"'
  },
  {
    pattern: /href=&quot;([^&]*)&quot;/g,
    replacement: 'href="$1"'
  },
  {
    pattern: /src=&quot;([^&]*)&quot;/g,
    replacement: 'src="$1"'
  },
  {
    pattern: /alt=&quot;([^&]*)&quot;/g,
    replacement: 'alt="$1"'
  },
  {
    pattern: /type=&quot;([^&]*)&quot;/g,
    replacement: 'type="$1"'
  },
  {
    pattern: /placeholder=&quot;([^&]*)&quot;/g,
    replacement: 'placeholder="$1"'
  },
  {
    pattern: /aria-label=&quot;([^&]*)&quot;/g,
    replacement: 'aria-label="$1"'
  },
  {
    pattern: /role=&quot;([^&]*)&quot;/g,
    replacement: 'role="$1"'
  },
  {
    pattern: /id=&quot;([^&]*)&quot;/g,
    replacement: 'id="$1"'
  },
  {
    pattern: /value=&quot;([^&]*)&quot;/g,
    replacement: 'value="$1"'
  },
  {
    pattern: /title=&quot;([^&]*)&quot;/g,
    replacement: 'title="$1"'
  },
  {
    pattern: /data-([^=]*)=&quot;([^&]*)&quot;/g,
    replacement: 'data-$1="$2"'
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

console.log('Quote error fixes completed!');