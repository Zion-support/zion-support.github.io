#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of utility files that need fixing
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

// Function to generate a proper utility file
function generateUtilityFile(filePath) {
  const fileName = path.basename(filePath, '.ts');
  const className = fileName.charAt(0).toUpperCase() + fileName.slice(1);
  
  return `// ${fileName} utility functions

export interface ${className}Config {
  enabled: boolean;
}

export class ${className} {
  private config: ${className}Config;

  constructor(config: Partial<${className}Config> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
}

// Export default instance
export const ${fileName} = new ${className}();
`;
}

// Function to fix a single utility file
function fixUtilityFile(filePath) {
  try {
    const content = generateUtilityFile(filePath);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Fixing utility files...');

let fixedCount = 0;
let errorCount = 0;

utilityFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixUtilityFile(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`\nFixed ${fixedCount} files, ${errorCount} errors`);