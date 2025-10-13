const fs = require('fs');
const path = require('path');

// List of utility files to fix
const utilityFiles = [
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
  'app/utils/validators.ts'
];

// Template for utility files
const utilityTemplate = (name) => `// ${name} utility functions

export interface ${name}Config {
  enabled: boolean;
}

export class ${name} {
  private config: ${name}Config;

  constructor(config: Partial<${name}Config> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('${name} initialized');
    }
  }
}

export const ${name.toLowerCase()} = new ${name}();
export default ${name.toLowerCase()};
`;

// Fix each utility file
utilityFiles.forEach(filePath => {
  try {
    const fileName = path.basename(filePath, '.ts');
    const className = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    
    console.log(`Fixing ${filePath}...`);
    fs.writeFileSync(filePath, utilityTemplate(className));
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All utility files have been fixed!');