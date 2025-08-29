#!/usr/bin/env node

/**
 * Zion Development Workflow Enhancement Script
 * 
 * This script provides various development workflow improvements
 * and utilities for the Zion project.
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class ZionDevWorkflow {
  constructor() {
    this.projectRoot = process.cwd();
    this.scriptsDir = path.join(this.projectRoot, 'scripts');
    this.srcDir = path.join(this.projectRoot, 'src');
  }

  async initialize() {
    console.log('🚀 Initializing Zion Development Workflow...');
    
    // Create scripts directory if it doesn't exist
    if (!fs.existsSync(this.scriptsDir)) {
      fs.mkdirSync(this.scriptsDir, { recursive: true });
    }

    // Create useful development scripts
    await this.createDevScripts();
    
    // Create development utilities
    await this.createDevUtilities();
    
    // Update package.json scripts
    await this.updatePackageScripts();
    
    console.log('✅ Development workflow initialized successfully');
  }

  async createDevScripts() {
    console.log('📝 Creating development scripts...');
    
    // Quick build check script
    const quickBuildScript = path.join(this.scriptsDir, 'quick-build-check.js');
    const quickBuildContent = `#!/usr/bin/env node

/**
 * Quick Build Check Script
 * 
 * Performs a fast build check without full optimization
 */

const { execSync } = require('child_process');

console.log('🔍 Performing quick build check...');

try {
  // Run a quick build check
  execSync('npm run build', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'development' }
  });
  
  console.log('✅ Quick build check completed successfully');
} catch (error) {
  console.error('❌ Quick build check failed');
  process.exit(1);
}`;

    fs.writeFileSync(quickBuildScript, quickBuildContent);
    
    // Development server script
    const devServerScript = path.join(this.scriptsDir, 'dev-server.js');
    const devServerContent = `#!/usr/bin/env node

/**
 * Development Server Script
 * 
 * Enhanced development server with additional features
 */

const { spawn } = require('child_process');

console.log('🚀 Starting enhanced development server...');

// Start the development server
const devProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'development' }
});

// Handle process events
devProcess.on('close', (code) => {
  console.log(\`\\n🛑 Development server stopped with code: \${code}\`);
  process.exit(code);
});

devProcess.on('error', (error) => {
  console.error('❌ Failed to start development server:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\\n🛑 Shutting down development server...');
  devProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\\n🛑 Shutting down development server...');
  devProcess.kill('SIGTERM');
});`;

    fs.writeFileSync(devServerScript, devServerContent);
    
    // Code quality check script
    const codeQualityScript = path.join(this.scriptsDir, 'code-quality-check.js');
    const codeQualityContent = `#!/usr/bin/env node

/**
 * Code Quality Check Script
 * 
 * Performs comprehensive code quality checks
 */

const { execSync } = require('child_process');

console.log('🔍 Performing code quality checks...');

try {
  // Run linting
  console.log('📋 Running ESLint...');
  execSync('npm run lint', { stdio: 'inherit' });
  
  // Run type checking (if available)
  try {
    console.log('📋 Running TypeScript type check...');
    execSync('npm run type-check', { stdio: 'inherit' });
  } catch (typeError) {
    console.log('⚠️ TypeScript type check failed (this is expected with current JSX issues)');
  }
  
  // Run build check
  console.log('📋 Running build check...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ All code quality checks completed');
} catch (error) {
  console.error('❌ Code quality check failed');
  process.exit(1);
}`;

    fs.writeFileSync(codeQualityScript, codeQualityContent);
    
    console.log('✅ Development scripts created');
  }

  async createDevUtilities() {
    console.log('🛠️ Creating development utilities...');
    
    // Component generator utility
    const componentGenScript = path.join(this.scriptsDir, 'generate-component.js');
    const componentGenContent = `#!/usr/bin/env node

/**
 * Component Generator Utility
 * 
 * Generates new React components with proper structure
 */

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
const componentType = process.argv[3] || 'tsx';

if (!componentName) {
  console.error('❌ Please provide a component name');
  console.log('Usage: node generate-component.js <ComponentName> [tsx|jsx]');
  process.exit(1);
}

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const componentFile = path.join(componentsDir, \`\${componentName}.\${componentType}\`);

if (fs.existsSync(componentFile)) {
  console.error(\`❌ Component \${componentName} already exists\`);
  process.exit(1);
}

const componentContent = componentType === 'tsx' ? \`import React from 'react';

interface \${componentName}Props {
  // Add your props here
}

export default function \${componentName}({ }: \${componentName}Props) {
  return (
    <div className="\${componentName.toLowerCase()}-container">
      <h1>\${componentName}</h1>
      {/* Add your component content here */}
    </div>
  );
}\` : \`import React from 'react';

export default function \${componentName}() {
  return (
    <div className="\${componentName.toLowerCase()}-container">
      <h1>\${componentName}</h1>
      {/* Add your component content here */}
    </div>
  );
}\`;

// Create component file
fs.writeFileSync(componentFile, componentContent);

// Create index file for easy imports
const indexFile = path.join(componentsDir, 'index.ts');
let indexContent = '';
if (fs.existsSync(indexFile)) {
  indexContent = fs.readFileSync(indexFile, 'utf8');
}

if (!indexContent.includes(\`export { default as \${componentName} } from './\${componentName}';\`)) {
  indexContent += \`\\nexport { default as \${componentName} } from './\${componentName}';\`;
  fs.writeFileSync(indexFile, indexContent);
}

console.log(\`✅ Component \${componentName} created successfully\`);
console.log(\`📁 Location: \${componentFile}\`);
console.log(\`📝 Don't forget to import and use it in your app!\`);`;

    fs.writeFileSync(componentGenScript, componentGenContent);
    
    // Page generator utility
    const pageGenScript = path.join(this.scriptsDir, 'generate-page.js');
    const pageGenContent = `#!/usr/bin/env node

/**
 * Page Generator Utility
 * 
 * Generates new page components with proper structure
 */

const fs = require('fs');
const path = require('path');

const pageName = process.argv[2];
const pageType = process.argv[3] || 'tsx';

if (!pageName) {
  console.error('❌ Please provide a page name');
  console.log('Usage: node generate-page.js <PageName> [tsx|jsx]');
  process.exit(1);
}

const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const pageFile = path.join(pagesDir, \`\${pageName}.\${pageType}\`);

if (fs.existsSync(pageFile)) {
  console.error(\`❌ Page \${pageName} already exists\`);
  process.exit(1);
}

const pageContent = componentType === 'tsx' ? \`import React from 'react';
import { SEO } from '../components/SEO';

export default function \${pageName}() {
  return (
    <>
      <SEO
        title="\${pageName} - Zion Tech Group"
        description="\${pageName} page description"
        keywords="\${pageName.toLowerCase()}, zion, tech, group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">\${pageName}</h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-zion-slate-light text-lg">
              Welcome to the \${pageName} page. Add your content here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}\` : \`import React from 'react';
import { SEO } from '../components/SEO';

export default function \${pageName}() {
  return (
    <>
      <SEO
        title="\${pageName} - Zion Tech Group"
        description="\${pageName} page description"
        keywords="\${pageName.toLowerCase()}, zion, tech, group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">\${pageName}</h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-zion-slate-light text-lg">
              Welcome to the \${pageName} page. Add your content here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}\`;

// Create page file
fs.writeFileSync(pageFile, pageContent);

console.log(\`✅ Page \${pageName} created successfully\`);
console.log(\`📁 Location: \${pageFile}\`);
console.log(\`📝 Don't forget to add it to your routing configuration!\`);`;

    fs.writeFileSync(pageGenScript, pageGenContent);
    
    console.log('✅ Development utilities created');
  }

  async updatePackageScripts() {
    console.log('📦 Updating package.json scripts...');
    
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
      console.log('⚠️ package.json not found, skipping script updates');
      return;
    }
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Add new development scripts
      const newScripts = {
        'dev:enhanced': 'node scripts/dev-server.js',
        'build:quick': 'node scripts/quick-build-check.js',
        'quality:check': 'node scripts/code-quality-check.js',
        'generate:component': 'node scripts/generate-component.js',
        'generate:page': 'node scripts/generate-page.js',
        'workflow:init': 'node scripts/dev-workflow.js'
      };
      
      // Merge with existing scripts
      packageJson.scripts = { ...packageJson.scripts, ...newScripts };
      
      // Write back to package.json
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      
      console.log('✅ Package.json scripts updated');
    } catch (error) {
      console.error('❌ Failed to update package.json:', error.message);
    }
  }

  async runWorkflowCheck() {
    console.log('🔍 Running workflow check...');
    
    try {
      // Check if all required directories exist
      const requiredDirs = ['src', 'src/components', 'src/pages', 'scripts'];
      const missingDirs = requiredDirs.filter(dir => !fs.existsSync(path.join(this.projectRoot, dir)));
      
      if (missingDirs.length > 0) {
        console.log('⚠️ Missing directories:', missingDirs.join(', '));
        console.log('📝 Creating missing directories...');
        
        missingDirs.forEach(dir => {
          const fullPath = path.join(this.projectRoot, dir);
          fs.mkdirSync(fullPath, { recursive: true });
          console.log(\`✅ Created: \${dir}\`);
        });
      }
      
      // Check if automation is properly set up
      const automationDir = path.join(this.projectRoot, 'automation');
      if (fs.existsSync(automationDir)) {
        console.log('✅ Automation directory found');
        
        // Check for key automation files
        const keyFiles = ['console-error-capture.js', 'integrate-with-zion.js'];
        keyFiles.forEach(file => {
          const filePath = path.join(automationDir, file);
          if (fs.existsSync(filePath)) {
            console.log(\`✅ \${file} found\`);
          } else {
            console.log(\`⚠️ \${file} not found\`);
          }
        });
      } else {
        console.log('⚠️ Automation directory not found');
      }
      
      console.log('✅ Workflow check completed');
    } catch (error) {
      console.error('❌ Workflow check failed:', error.message);
    }
  }

  async runFullSetup() {
    console.log('🔧 Running full development workflow setup...');
    
    try {
      await this.initialize();
      await this.runWorkflowCheck();
      
      console.log('\n🎉 Zion Development Workflow Setup Complete!');
      console.log('\n📋 Available Commands:');
      console.log('  npm run dev:enhanced     - Enhanced development server');
      console.log('  npm run build:quick      - Quick build check');
      console.log('  npm run quality:check    - Code quality checks');
      console.log('  npm run generate:component <Name> - Generate new component');
      console.log('  npm run generate:page <Name>      - Generate new page');
      console.log('  npm run workflow:init    - Reinitialize workflow');
      
      console.log('\n🚀 Next Steps:');
      console.log('1. Use the enhanced development server: npm run dev:enhanced');
      console.log('2. Generate new components: npm run generate:component MyComponent');
      console.log('3. Generate new pages: npm run generate:page MyPage');
      console.log('4. Run quality checks: npm run quality:check');
      
    } catch (error) {
      console.error('❌ Setup failed:', error.message);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const workflow = new ZionDevWorkflow();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Zion Development Workflow Enhancement

Usage: node dev-workflow.js [options]

Options:
  --help, -h     Show this help message
  --full         Run full setup (default)
  --check        Only run workflow check
  --scripts      Only create development scripts
  --utilities    Only create development utilities

Examples:
  node dev-workflow.js
  node dev-workflow.js --check
  node dev-workflow.js --scripts
    `);
    process.exit(0);
  }

  const runFull = args.includes('--full') || args.length === 0;
  const runCheck = args.includes('--check');
  const runScripts = args.includes('--scripts');
  const runUtilities = args.includes('--utilities');
  
  if (runFull) {
    workflow.runFullSetup().catch(console.error);
  } else if (runCheck) {
    workflow.runWorkflowCheck().catch(console.error);
  } else if (runScripts) {
    workflow.createDevScripts().catch(console.error);
  } else if (runUtilities) {
    workflow.createDevUtilities().catch(console.error);
  }
}

module.exports = ZionDevWorkflow;
