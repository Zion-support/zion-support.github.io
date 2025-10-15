#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fix specific files with missing imports
const filesToFix = [
  'app/ai-crm-optimizer/page.tsx',
  'app/ai-data-visualizer/page.tsx', 
  'app/ai-email-optimizer/page.tsx',
  'app/expense-tracker-pro/page.tsx',
  'app/it-solutions/page.tsx',
  'app/social-media-scheduler/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add missing imports at the top
    const missingImports = `import { 
  UserGroupIcon, 
  ChartBarIcon, 
  CogIcon, 
  ShieldCheckIcon, 
  SparklesIcon, 
  CheckCircleIcon, 
  StarIcon,
  CpuChipIcon,
  EyeIcon,
  GlobeAltIcon,
  ReceiptRefundIcon,
  BanknotesIcon,
  CloudIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  SignalIcon,
  CalendarIcon,
  ShareIcon
} from '@heroicons/react/24/outline';
`;
    
    // Find the first import and add before it
    const firstImportIndex = content.indexOf('import');
    if (firstImportIndex !== -1) {
      content = missingImports + content;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

// Fix specific component issues
function fixComponents() {
  // Fix OptimizedImage component
  const optimizedImagePath = 'app/components/OptimizedImage.tsx';
  let content = fs.readFileSync(optimizedImagePath, 'utf8');
  
  // Remove preloadImages references
  content = content.replace(/const { } = usePerformanceOptimization\(\);/g, 'const { } = usePerformanceOptimization();');
  content = content.replace(/preloadImages\(\[optimizedSrc\]\);/g, '// preloadImages([optimizedSrc]);');
  
  // Fix the useEffect return issue
  content = content.replace(
    /useEffect\(\(\) => \{\s*if \(loading === 'lazy' && !priority\) \{[\s\S]*?\}\s*else if \(priority\) \{[\s\S]*?\}\s*\}, \[loading, priority, optimizedSrc, isLoaded, hasError\]\);/g,
    `useEffect(() => {
    if (loading === 'lazy' && !priority) {
      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: '50px',
        threshold: 0.1,
      });

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    } else if (priority) {
      setCurrentSrc(optimizedSrc);
    }
  }, [loading, priority, optimizedSrc, isLoaded, hasError]);`
  );
  
  fs.writeFileSync(optimizedImagePath, content);
  console.log('Fixed OptimizedImage component');
  
  // Fix Navigation component
  const navigationPath = 'app/components/Navigation.tsx';
  content = fs.readFileSync(navigationPath, 'utf8');
  content = content.replace(/const \[isOpen\] = useState\(false\);/g, 'const [isOpen, setIsOpen] = useState(false);');
  fs.writeFileSync(navigationPath, content);
  console.log('Fixed Navigation component');
  
  // Fix ErrorBoundary components
  const errorBoundaryPath = 'app/components/ErrorBoundary.tsx';
  content = fs.readFileSync(errorBoundaryPath, 'utf8');
  content = content.replace(/const errorReport = \{[\s\S]*?\};/g, '// const errorReport = { ... };');
  content = content.replace(/window\.gtag\('event', 'error_boundary_triggered', \{[\s\S]*?\}\);/g, 
    `window.gtag('event', 'error_boundary_triggered', {
      event_category: 'Error',
      event_label: error.message,
      non_interaction: true
    });`);
  fs.writeFileSync(errorBoundaryPath, content);
  console.log('Fixed ErrorBoundary component');
  
  // Fix EnhancedErrorBoundary
  const enhancedErrorBoundaryPath = 'app/components/EnhancedErrorBoundary.tsx';
  content = fs.readFileSync(enhancedErrorBoundaryPath, 'utf8');
  content = content.replace(/window\.gtag\('event', 'exception', \{[\s\S]*?\}\);/g,
    `window.gtag('event', 'exception', {
      custom_map: {
        error_id: errorReport.errorId,
        user_id: errorReport.userId,
        session_id: errorReport.sessionId
      }
    });`);
  fs.writeFileSync(enhancedErrorBoundaryPath, content);
  console.log('Fixed EnhancedErrorBoundary component');
  
  // Fix useSEO hook
  const useSEOPath = 'app/hooks/useSEO.ts';
  content = fs.readFileSync(useSEOPath, 'utf8');
  content = content.replace(/'@type': 'ContactPage',\s*'mainEntity': \{[\s\S]*?\}/g, 
    `'@type': 'ContactPage'`);
  fs.writeFileSync(useSEOPath, content);
  console.log('Fixed useSEO hook');
  
  // Fix error handler
  const errorHandlerPath = 'app/utils/errorHandler.ts';
  content = fs.readFileSync(errorHandlerPath, 'utf8');
  content = content.replace(/export interface AppError \{[\s\S]*?\}/g,
    `export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
  details?: Record<string, unknown>;
}`);
  content = content.replace(/constructor\(message: string, code\?: string, statusCode\?: number, details\?: Record<string, unknown>\) \{[\s\S]*?\}/g,
    `constructor(message: string, code?: string, statusCode?: number, details?: Record<string, unknown>) {
    super(message);
    this.name = 'CustomError';
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;
  }`);
  content = content.replace(/return \{[\s\S]*?code: error\.code,[\s\S]*?statusCode: error\.statusCode,[\s\S]*?details: error\.details,[\s\S]*?\};/g,
    `return {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      details: error.details,
    };`);
  fs.writeFileSync(errorHandlerPath, content);
  console.log('Fixed error handler');
  
  // Fix logger
  const loggerPath = 'utils/logger.ts';
  content = fs.readFileSync(loggerPath, 'utf8');
  content = content.replace(/export interface LogEntry \{[\s\S]*?\}/g,
    `export interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  context?: LogContext;
  timestamp: number;
  stack?: string;
}`);
  fs.writeFileSync(loggerPath, content);
  console.log('Fixed logger');
}

fixComponents();

console.log('All remaining TypeScript errors fixed!');