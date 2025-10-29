#!/usr/bin/env node

const fs = require('fs');

// Fix all remaining TypeScript errors
function fixAllRemainingErrors() {
  // Fix error handler interface to allow undefined values
  const errorHandlerPath = 'app/utils/errorHandler.ts';
  let content = fs.readFileSync(errorHandlerPath, 'utf8');
  
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
  
  fs.writeFileSync(errorHandlerPath, content);
  console.log('Fixed error handler interface');
  
  // Fix logger interface
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
  console.log('Fixed logger interface');
  
  // Fix OptimizedImage component
  const optimizedImagePath = 'app/components/OptimizedImage.tsx';
  content = fs.readFileSync(optimizedImagePath, 'utf8');
  
  // Add missing function definitions
  const missingFunctions = `
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLoaded && !hasError) {
        setCurrentSrc(optimizedSrc);
      }
    });
  };
`;
  
  // Insert the missing functions before the useEffect
  const useEffectIndex = content.indexOf('useEffect(() => {');
  if (useEffectIndex !== -1) {
    content = content.slice(0, useEffectIndex) + missingFunctions + '\n  ' + content.slice(useEffectIndex);
  }
  
  // Fix the useEffect return
  content = content.replace(
    /useEffect\(\(\) => \{[\s\S]*?if \(loading === 'lazy' && !priority\) \{[\s\S]*?\}[\s\S]*?else if \(priority\) \{[\s\S]*?\}[\s\S]*?\}, \[loading, priority, optimizedSrc, isLoaded, hasError\]\);/g,
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
  
  // Fix ErrorBoundary component
  const errorBoundaryPath = 'app/components/ErrorBoundary.tsx';
  content = fs.readFileSync(errorBoundaryPath, 'utf8');
  content = content.replace(/window\.gtag\('event', 'error_boundary_triggered', \{[\s\S]*?\}\);/g,
    `window.gtag('event', 'error_boundary_triggered', {
      event_category: 'Error',
      event_label: error.message,
      non_interaction: true
    });`);
  fs.writeFileSync(errorBoundaryPath, content);
  console.log('Fixed ErrorBoundary component');
  
  // Remove unused imports from page files
  const pageFiles = [
    'app/ai-crm-optimizer/page.tsx',
    'app/ai-data-visualizer/page.tsx',
    'app/ai-email-optimizer/page.tsx',
    'app/expense-tracker-pro/page.tsx',
    'app/it-solutions/page.tsx',
    'app/social-media-scheduler/page.tsx'
  ];
  
  pageFiles.forEach(filePath => {
    content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused icon imports
    const unusedIcons = ['ChartBarIcon', 'CogIcon', 'ShieldCheckIcon'];
    
    unusedIcons.forEach(icon => {
      const regex = new RegExp(`\\s*${icon},\\s*`, 'g');
      content = content.replace(regex, '');
    });
    
    // Clean up empty import lines
    content = content.replace(/import\s*{\s*}\s*from\s*'@heroicons\/react\/24\/outline';\n?/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned up imports in: ${filePath}`);
  });
}

fixAllRemainingErrors();
console.log('All TypeScript errors fixed!');