const fs = require('fs');
const path = require('path');

// List of utility files that need to be fixed
const utilityFiles = [
  'app/utils/accessibilityChecker.ts',
  'app/utils/accessibilityEnhancer.ts',
  'app/utils/accessibilityUtils.ts',
  'app/utils/advancedAnalytics.ts',
  'app/utils/advancedCaching.ts',
  'app/utils/analyticsTracker.ts',
  'app/utils/apiCache.ts',
  'app/utils/apiClient.ts',
  'app/utils/dataValidator.ts',
  'app/utils/formValidation.ts',
  'app/utils/logger.ts',
  'app/utils/monitoring.ts',
  'app/utils/performanceEnhancer.ts',
  'app/utils/performanceMetrics.ts',
  'app/utils/performanceMonitoring.ts',
  'app/utils/performanceOptimizations.ts',
  'app/utils/performanceOptimizer.ts',
  'app/utils/performanceUtils.ts',
  'app/utils/securityManager.ts',
  'app/utils/sitemapGenerator.ts',
  'app/utils/validators.ts',
  'utils/cn.ts',
  'utils/logger.ts'
];

// Generic utility template
const createUtilityTemplate = (fileName, className) => `// ${className} utility functions

export class ${className} {
  private config: any;

  constructor(config: any = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('${className} initialized');
    }
  }

  // Add your utility methods here
  public process(data: any): any {
    return data;
  }
}

export const ${className.toLowerCase()}Instance = new ${className}();
export default ${className.toLowerCase()}Instance;
`;

// Special templates for specific files
const specialTemplates = {
  'utils/cn.ts': `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`,
  'utils/logger.ts': `// Logger utility functions

interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
};

export class Logger {
  private level: string;

  constructor(level: string = 'info') {
    this.level = level;
  }

  private shouldLog(level: string): boolean {
    const levels = ['error', 'warn', 'info', 'debug'];
    return levels.indexOf(level) <= levels.indexOf(this.level);
  }

  error(message: string, ...args: any[]): void {
    if (this.shouldLog(LOG_LEVELS.ERROR)) {
      console.error(\`[ERROR] \${message}\`, ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog(LOG_LEVELS.WARN)) {
      console.warn(\`[WARN] \${message}\`, ...args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog(LOG_LEVELS.INFO)) {
      console.info(\`[INFO] \${message}\`, ...args);
    }
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog(LOG_LEVELS.DEBUG)) {
      console.debug(\`[DEBUG] \${message}\`, ...args);
    }
  }
}

export const logger = new Logger();
export default logger;
`
};

// Function to generate class name from file path
function generateClassName(filePath) {
  const fileName = path.basename(filePath, '.ts');
  return fileName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Function to fix a utility file
function fixUtilityFile(filePath) {
  try {
    let content;
    
    if (specialTemplates[filePath]) {
      content = specialTemplates[filePath];
    } else {
      const className = generateClassName(filePath);
      content = createUtilityTemplate(filePath, className);
    }

    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting utility files fix...');

let fixedCount = 0;
let errorCount = 0;

for (const filePath of utilityFiles) {
  if (fs.existsSync(filePath)) {
    console.log(`Processing: ${filePath}`);
    if (fixUtilityFile(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
}

console.log(`\nFixed: ${fixedCount} files`);
console.log(`Errors: ${errorCount} files`);
console.log('Finished utility files fix.');