import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fix specific TypeScript issues
const fixes = [
  {
    file: 'app/components/AdvancedSEOOptimizer.tsx',
    fixes: [
      {
        search: '_addStructuredData',
        replace: 'addStructuredData'
      },
      {
        search: '_trackPageView',
        replace: 'trackPageView'
      },
      {
        search: '_trackPerformanceMetrics',
        replace: 'trackPerformanceMetrics'
      },
      {
        search: 'any',
        replace: 'unknown'
      }
    ]
  },
  {
    file: 'app/components/Analytics.tsx',
    fixes: [
      {
        search: 'any',
        replace: 'unknown'
      }
    ]
  },
  {
    file: 'app/components/EnhancedErrorBoundary.tsx',
    fixes: [
      {
        search: 'errorId',
        replace: '_errorId'
      }
    ]
  },
  {
    file: 'app/components/ErrorBoundary.tsx',
    fixes: [
      {
        search: 'FileWarning',
        replace: '_FileWarning'
      },
      {
        search: 'any',
        replace: 'unknown'
      }
    ]
  },
  {
    file: 'app/components/ImprovedErrorBoundary.tsx',
    fixes: [
      {
        search: '!',
        replace: ' as HTMLElement'
      }
    ]
  },
  {
    file: 'app/components/InteractiveAIROICalculator.tsx',
    fixes: [
      {
        search: '_annualSavings',
        replace: 'annualSavings'
      },
      {
        search: '_totalSavings',
        replace: 'totalSavings'
      },
      {
        search: '_roi',
        replace: 'roi'
      }
    ]
  },
  {
    file: 'app/components/Navigation.tsx',
    fixes: [
      {
        search: 'aiServicesOpen',
        replace: '_aiServicesOpen'
      },
      {
        search: 'itServicesOpen',
        replace: '_itServicesOpen'
      },
      {
        search: 'microSaasOpen',
        replace: '_microSaasOpen'
      }
    ]
  },
  {
    file: 'app/components/OptimizedLoadingSpinner.tsx',
    fixes: [
      {
        search: '_baseClasses',
        replace: 'baseClasses'
      },
      {
        search: '_fullScreenClasses',
        replace: 'fullScreenClasses'
      }
    ]
  },
  {
    file: 'app/components/PerformanceDashboard.tsx',
    fixes: [
      {
        search: '_renderStart',
        replace: 'renderStart'
      },
      {
        search: '_renderTime',
        replace: 'renderTime'
      },
      {
        search: '_memoryUsage',
        replace: 'memoryUsage'
      },
      {
        search: '_memory',
        replace: 'memory'
      },
      {
        search: '_fps',
        replace: 'fps'
      },
      {
        search: '_lastTime',
        replace: 'lastTime'
      },
      {
        search: '_frameCount',
        replace: 'frameCount'
      },
      {
        search: '_interval',
        replace: 'interval'
      }
    ]
  },
  {
    file: 'app/components/PerformanceMonitor.tsx',
    fixes: [
      {
        search: 'any',
        replace: 'unknown'
      }
    ]
  },
  {
    file: 'app/components/PerformanceOptimizer.tsx',
    fixes: [
      {
        search: 'optimizationStatus',
        replace: '_optimizationStatus'
      },
      {
        search: 'registration',
        replace: '_registration'
      },
      {
        search: 'any',
        replace: 'unknown'
      }
    ]
  },
  {
    file: 'app/components/SEOOptimizer.tsx',
    fixes: [
      {
        search: 'any',
        replace: 'unknown'
      }
    ]
  },
  {
    file: 'app/components/SystemMonitor.tsx',
    fixes: [
      {
        search: '_collectPerformanceMetrics',
        replace: 'collectPerformanceMetrics'
      },
      {
        search: '_navigation',
        replace: 'navigation'
      },
      {
        search: '_paint',
        replace: 'paint'
      },
      {
        search: '_metrics',
        replace: 'metrics'
      },
      {
        search: '_score',
        replace: 'score'
      }
    ]
  }
];

fixes.forEach(({ file, fixes }) => {
  const filePath = path.join(__dirname, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  fixes.forEach(({ search, replace }) => {
    if (content.includes(search)) {
      content = content.replace(new RegExp(search, 'g'), replace);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed TypeScript issues in ${file}`);
  }
});

console.log('TypeScript issues cleanup completed!');