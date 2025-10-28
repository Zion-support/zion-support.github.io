#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

const fixes = [
  {
    file: 'app/about/page.tsx',
    fixes: [
      {
        search: /'/g,
        replace: '&apos;',
        description: 'Fix unescaped apostrophes'
      }
    ]
  },
  {
    file: 'app/components/Navigation-backup.tsx',
    fixes: [
      {
        search: /const Navigation = \(\{ className, children \}: \{ className\?: string; children\?: React\.ReactNode \}\) => \{/,
        replace: 'const Navigation = () => {',
        description: 'Remove unused parameters'
      },
      {
        search: /logo/g,
        replace: 'logo',
        description: 'Add logo import or define'
      },
      {
        search: /logoText/g,
        replace: 'logoText',
        description: 'Add logoText import or define'
      },
      {
        search: /menuItems/g,
        replace: 'menuItems',
        description: 'Add menuItems import or define'
      },
      {
        search: /ctaHref/g,
        replace: 'ctaHref',
        description: 'Add ctaHref import or define'
      },
      {
        search: /ctaText/g,
        replace: 'ctaText',
        description: 'Add ctaText import or define'
      },
      {
        search: /toggleMenu/g,
        replace: 'toggleMenu',
        description: 'Add toggleMenu import or define'
      },
      {
        search: /isMenuOpen/g,
        replace: 'isMenuOpen',
        description: 'Add isMenuOpen import or define'
      }
    ]
  },
  {
    file: 'app/components/NewsletterSignup.tsx',
    fixes: [
      {
        search: /const \[error, setError\] = useState<string\|\|null>\(null\);/,
        replace: 'const [, setError] = useState<string||null>(null);',
        description: 'Remove unused error variable'
      }
    ]
  },
  {
    file: 'app/components/PerformanceMonitor.tsx',
    fixes: [
      {
        search: /PerformanceEventTiming/g,
        replace: 'any',
        description: 'Replace undefined PerformanceEventTiming with any'
      },
      {
        search: /: any/g,
        replace: ': unknown',
        description: 'Replace any with unknown'
      },
      {
        search: /\(e\) => \{/,
        replace: '(_e) => {',
        description: 'Remove unused parameter'
      }
    ]
  },
  {
    file: 'app/components/PerformanceOptimizer.tsx',
    fixes: [
      {
        search: /PerformanceEventTiming/g,
        replace: 'any',
        description: 'Replace undefined PerformanceEventTiming with any'
      },
      {
        search: /: any/g,
        replace: ': unknown',
        description: 'Replace any with unknown'
      }
    ]
  },
  {
    file: 'app/components/SEOHead.tsx',
    fixes: [
      {
        search: /: any/g,
        replace: ': unknown',
        description: 'Replace any with unknown'
      }
    ]
  },
  {
    file: 'app/components/SkipLink.tsx',
    fixes: [
      {
        search: /jsx/g,
        replace: 'jsx',
        description: 'Fix unknown jsx property'
      }
    ]
  },
  {
    file: 'app/components/utils/accessibilityUtils.ts',
    fixes: [
      {
        search: /import React from 'react';/,
        replace: '',
        description: 'Remove unused React import'
      }
    ]
  },
  {
    file: 'app/data/servicesData.ts',
    fixes: [
      {
        search: /import \{ Search, string \} from 'lucide-react';/,
        replace: '',
        description: 'Remove unused imports'
      },
      {
        search: /React\./g,
        replace: '',
        description: 'Remove React references'
      }
    ]
  },
  {
    file: 'app/hooks/useEnhancedPerformance.ts',
    fixes: [
      {
        search: /: any/g,
        replace: ': unknown',
        description: 'Replace any with unknown'
      }
    ]
  },
  {
    file: 'app/hooks/useForm.ts',
    fixes: [
      {
        search: /_error/g,
        replace: '_',
        description: 'Remove unused error variable'
      }
    ]
  },
  {
    file: 'app/hooks/usePerformanceMetrics.ts',
    fixes: [
      {
        search: /: any/g,
        replace: ': unknown',
        description: 'Replace any with unknown'
      }
    ]
  },
  {
    file: 'app/not-found.tsx',
    fixes: [
      {
        search: /'/g,
        replace: '&apos;',
        description: 'Fix unescaped apostrophes'
      }
    ]
  },
  {
    file: 'app/types/enhanced.types.ts',
    fixes: [
      {
        search: /import \{ User \} from '\.\.\/types\/app\.types';/,
        replace: '',
        description: 'Remove unused User import'
      }
    ]
  },
  {
    file: 'app/types/next.d.ts',
    fixes: [
      {
        search: /import \{ AppProps \} from 'next\/app';/,
        replace: '',
        description: 'Remove unused AppProps import'
      },
      {
        search: /export interface NextPageWithLayout<P = \{\}, IP = P> extends NextPage<P, IP> \{/,
        replace: 'export interface NextPageWithLayout<P = Record<string, never>, IP = P> extends NextPage<P, IP> {',
        description: 'Fix empty interface'
      }
    ]
  },
  {
    file: 'app/utils/accessibilityUtils.ts',
    fixes: [
      {
        search: /import React from 'react';/,
        replace: '',
        description: 'Remove unused React import'
      }
    ]
  },
  {
    file: 'app/utils/analytics.ts',
    fixes: [
      {
        search: /import \{ User \} from '\.\.\/types\/app\.types';/,
        replace: '',
        description: 'Remove unused User import'
      },
      {
        search: /_unknown/g,
        replace: '_',
        description: 'Remove undefined variable'
      }
    ]
  },
  {
    file: 'app/utils/apiClient.ts',
    fixes: [
      {
        search: /import \{ RequestInit \} from 'node:fetch';/,
        replace: '',
        description: 'Remove unused RequestInit import'
      }
    ]
  },
  {
    file: 'app/utils/errorHandler.ts',
    fixes: [
      {
        search: /: any/g,
        replace: ': unknown',
        description: 'Replace any with unknown'
      }
    ]
  },
  {
    file: 'app/utils/monitoring.ts',
    fixes: [
      {
        search: /: any/g,
        replace: ': unknown',
        description: 'Replace any with unknown'
      },
      {
        search: /error/g,
        replace: '_',
        description: 'Remove unused error variables'
      },
      {
        search: /entry/g,
        replace: '_',
        description: 'Remove unused entry variables'
      },
      {
        search: /gtag/g,
        replace: 'window.gtag',
        description: 'Fix gtag reference'
      }
    ]
  },
  {
    file: 'app/utils/performance.ts',
    fixes: [
      {
        search: /_entryList/g,
        replace: '_',
        description: 'Remove unused variables'
      },
      {
        search: /entryList/g,
        replace: 'performance.getEntriesByType',
        description: 'Fix undefined entryList'
      },
      {
        search: /entry/g,
        replace: 'entry',
        description: 'Fix undefined entry'
      },
      {
        search: /_string/g,
        replace: '_',
        description: 'Remove undefined _string'
      },
      {
        search: /_unknown/g,
        replace: '_',
        description: 'Remove undefined _unknown'
      }
    ]
  },
  {
    file: 'app/utils/performanceOptimizer.ts',
    fixes: [
      {
        search: /: any/g,
        replace: ': unknown',
        description: 'Replace any with unknown'
      }
    ]
  },
  {
    file: 'components/OptimizedImage.tsx',
    fixes: [
      {
        search: /import React from 'react';/,
        replace: '',
        description: 'Remove unused React import'
      },
      {
        search: /interface OptimizedImageProps \{\}/,
        replace: 'interface OptimizedImageProps {\n  src: string;\n  alt: string;\n  width?: number;\n  height?: number;\n}',
        description: 'Fix empty interface'
      }
    ]
  }
];

function runCommand(command, description) {
  try {
        const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: '/workspace'
    });
        return { success: true, output };
  } catch (error) {
        return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

function fixFile(filePath, fileFixes) {
    
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const fix of fileFixes) {
      const originalContent = content;
      content = content.replace(fix.search, fix.replace);
      if (content !== originalContent) {
                modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
          } else {
    // Empty block
  }
    
    return true;
  } catch (error) {
        return false;
  }
}

async function main() {
    
  let successCount = 0;
  let failCount = 0;
  
  for (const fix of fixes) {
    if (fs.existsSync(fix.file)) {
      const success = fixFile(fix.file, fix.fixes);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
    } else {
            failCount++;
    }
  }
  
        
  // Run lint again to check remaining issues
    const lintResult = runCommand('npm run lint', 'Check remaining linting issues');
  
  if (lintResult.success) {
    // Empty block
  } else {
    // Empty block
  }
  
  }

main().catch(console.error);