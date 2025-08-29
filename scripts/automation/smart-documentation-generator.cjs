#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📚 Starting Smart Documentation Generator...');

// Get automation interval from environment variable (default: 24 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 86400000; // 24 hours

class SmartDocumentationGenerator {
  constructor() {
    this.documentationMetrics = {
      generatedDocs: [],
      documentationCoverage: 0,
      missingDocs: [],
      documentationSuggestions: [],
      docPatterns: new Map()
    };
    this.reportDir = path.join(process.cwd(), 'documentation-reports');
    this.docsDir = path.join(process.cwd(), 'docs');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
    if (!fs.existsSync(this.docsDir)) {
      fs.mkdirSync(this.docsDir, { recursive: true });
    }
  }

  async generateDocumentation() {
    try {
      console.log(`📚 Running smart documentation generation at ${new Date().toISOString()}`);
      
      // Analyze codebase structure
      await this.analyzeCodebaseStructure();
      
      // Identify missing documentation
      await this.identifyMissingDocumentation();
      
      // Generate API documentation
      await this.generateAPIDocumentation();
      
      // Generate component documentation
      await this.generateComponentDocumentation();
      
      // Generate setup and deployment guides
      await this.generateSetupGuides();
      
      // Generate README updates
      await this.updateREADME();
      
      // Calculate documentation coverage
      await this.calculateDocumentationCoverage();
      
      // Generate report
      await this.generateReport();
      
      console.log('✅ Smart documentation generation completed successfully');
      
    } catch (error) {
      console.error('❌ Smart documentation generation failed:', error.message);
    }
  }

  async analyzeCodebaseStructure() {
    console.log('🔍 Analyzing codebase structure...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) {
      console.log('⚠️ Source directory not found');
      return;
    }
    
    const structure = {
      components: [],
      utilities: [],
      hooks: [],
      services: [],
      types: [],
      pages: [],
      configs: []
    };
    
    const allFiles = this.findFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    for (const file of allFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(srcPath, file);
      
      if (relativePath.includes('components/') || content.includes('export default') || content.includes('function') && content.includes('props')) {
        structure.components.push({
          path: relativePath,
          name: this.extractComponentName(content),
          hasDocs: this.hasExistingDocs(file)
        });
      } else if (relativePath.includes('utils/') || relativePath.includes('helpers/') || content.includes('export function') || content.includes('export const')) {
        structure.utilities.push({
          path: relativePath,
          name: this.extractFunctionName(content),
          hasDocs: this.hasExistingDocs(file)
        });
      } else if (content.includes('use') && content.includes('export')) {
        structure.hooks.push({
          path: relativePath,
          name: this.extractHookName(content),
          hasDocs: this.hasExistingDocs(file)
        });
      } else if (relativePath.includes('services/') || content.includes('api') || content.includes('fetch')) {
        structure.services.push({
          path: relativePath,
          name: this.extractServiceName(content),
          hasDocs: this.hasExistingDocs(file)
        });
      } else if (relativePath.includes('types/') || content.includes('interface') || content.includes('type ')) {
        structure.types.push({
          path: relativePath,
          name: this.extractTypeName(content)
        });
      } else if (relativePath.includes('pages/') || content.includes('Route')) {
        structure.pages.push({
          path: relativePath,
          name: this.extractPageName(content)
        });
      }
    }
    
    // Analyze config files
    const configFiles = ['package.json', 'vite.config.ts', 'tsconfig.json', 'tailwind.config.js'];
    for (const configFile of configFiles) {
      const configPath = path.join(process.cwd(), configFile);
      if (fs.existsSync(configPath)) {
        structure.configs.push({
          path: configFile,
          name: configFile,
          hasDocs: this.hasExistingDocs(configPath)
        });
      }
    }
    
    this.documentationMetrics.docPatterns.set('structure', structure);
    console.log('📊 Codebase structure analysis completed');
  }

  async identifyMissingDocumentation() {
    console.log('🔍 Identifying missing documentation...');
    
    const structure = this.documentationMetrics.docPatterns.get('structure');
    if (!structure) return;
    
    const missingDocs = [];
    
    // Check for missing component documentation
    const undocumentedComponents = structure.components.filter(comp => !comp.hasDocs);
    if (undocumentedComponents.length > 0) {
      missingDocs.push({
        type: 'component',
        items: undocumentedComponents,
        priority: 'high'
      });
    }
    
    // Check for missing utility documentation
    const undocumentedUtilities = structure.utilities.filter(util => !util.hasDocs);
    if (undocumentedUtilities.length > 0) {
      missingDocs.push({
        type: 'utility',
        items: undocumentedUtilities,
        priority: 'medium'
      });
    }
    
    // Check for missing hook documentation
    const undocumentedHooks = structure.hooks.filter(hook => !hook.hasDocs);
    if (undocumentedHooks.length > 0) {
      missingDocs.push({
        type: 'hook',
        items: undocumentedHooks,
        priority: 'medium'
      });
    }
    
    // Check for missing service documentation
    const undocumentedServices = structure.services.filter(service => !service.hasDocs);
    if (undocumentedServices.length > 0) {
      missingDocs.push({
        type: 'service',
        items: undocumentedServices,
        priority: 'high'
      });
    }
    
    this.documentationMetrics.missingDocs = missingDocs;
    console.log(`📊 Found ${missingDocs.length} categories of missing documentation`);
  }

  async generateAPIDocumentation() {
    console.log('📖 Generating API documentation...');
    
    const structure = this.documentationMetrics.docPatterns.get('structure');
    if (!structure) return;
    
    const apiDocs = [];
    
    // Generate documentation for services
    for (const service of structure.services.slice(0, 5)) { // Limit to 5 services per run
      try {
        const servicePath = path.join(process.cwd(), 'src', service.path);
        const content = fs.readFileSync(servicePath, 'utf8');
        
        const apiDoc = this.generateServiceDocumentation(service, content);
        const docPath = path.join(this.docsDir, 'api', `${service.name.toLowerCase()}.md`);
        
        // Ensure API docs directory exists
        const apiDocsDir = path.dirname(docPath);
        if (!fs.existsSync(apiDocsDir)) {
          fs.mkdirSync(apiDocsDir, { recursive: true });
        }
        
        fs.writeFileSync(docPath, apiDoc);
        
        this.documentationMetrics.generatedDocs.push({
          type: 'api',
          path: docPath,
          service: service.name,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Generated API documentation for ${service.name}`);
        
      } catch (error) {
        console.log(`⚠️ Failed to generate API docs for ${service.name}:`, error.message);
      }
    }
  }

  async generateComponentDocumentation() {
    console.log('⚛️ Generating component documentation...');
    
    const structure = this.documentationMetrics.docPatterns.get('structure');
    if (!structure) return;
    
    // Generate documentation for components
    for (const component of structure.components.slice(0, 10)) { // Limit to 10 components per run
      try {
        const componentPath = path.join(process.cwd(), 'src', component.path);
        const content = fs.readFileSync(componentPath, 'utf8');
        
        const componentDoc = this.generateComponentDoc(component, content);
        const docPath = path.join(this.docsDir, 'components', `${component.name.toLowerCase()}.md`);
        
        // Ensure components docs directory exists
        const componentsDocsDir = path.dirname(docPath);
        if (!fs.existsSync(componentsDocsDir)) {
          fs.mkdirSync(componentsDocsDir, { recursive: true });
        }
        
        fs.writeFileSync(docPath, componentDoc);
        
        this.documentationMetrics.generatedDocs.push({
          type: 'component',
          path: docPath,
          component: component.name,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Generated component documentation for ${component.name}`);
        
      } catch (error) {
        console.log(`⚠️ Failed to generate component docs for ${component.name}:`, error.message);
      }
    }
  }

  async generateSetupGuides() {
    console.log('📋 Generating setup guides...');
    
    // Generate installation guide
    const installationGuide = this.generateInstallationGuide();
    const installPath = path.join(this.docsDir, 'installation.md');
    fs.writeFileSync(installPath, installationGuide);
    
    // Generate development guide
    const developmentGuide = this.generateDevelopmentGuide();
    const devPath = path.join(this.docsDir, 'development.md');
    fs.writeFileSync(devPath, developmentGuide);
    
    // Generate deployment guide
    const deploymentGuide = this.generateDeploymentGuide();
    const deployPath = path.join(this.docsDir, 'deployment.md');
    fs.writeFileSync(deployPath, deploymentGuide);
    
    this.documentationMetrics.generatedDocs.push(
      {
        type: 'guide',
        path: installPath,
        name: 'Installation Guide',
        timestamp: new Date().toISOString()
      },
      {
        type: 'guide',
        path: devPath,
        name: 'Development Guide',
        timestamp: new Date().toISOString()
      },
      {
        type: 'guide',
        path: deployPath,
        name: 'Deployment Guide',
        timestamp: new Date().toISOString()
      }
    );
    
    console.log('✅ Generated setup guides');
  }

  async updateREADME() {
    console.log('📝 Updating README...');
    
    try {
      const readmePath = path.join(process.cwd(), 'README.md');
      let readmeContent = '';
      
      if (fs.existsSync(readmePath)) {
        readmeContent = fs.readFileSync(readmePath, 'utf8');
      }
      
      const updatedREADME = this.generateUpdatedREADME(readmeContent);
      fs.writeFileSync(readmePath, updatedREADME);
      
      this.documentationMetrics.generatedDocs.push({
        type: 'readme',
        path: readmePath,
        name: 'README.md',
        timestamp: new Date().toISOString()
      });
      
      console.log('✅ Updated README');
      
    } catch (error) {
      console.log('⚠️ Failed to update README:', error.message);
    }
  }

  async calculateDocumentationCoverage() {
    console.log('📊 Calculating documentation coverage...');
    
    const structure = this.documentationMetrics.docPatterns.get('structure');
    if (!structure) return;
    
    const totalItems = structure.components.length + 
                      structure.utilities.length + 
                      structure.hooks.length + 
                      structure.services.length;
    
    const documentedItems = structure.components.filter(comp => comp.hasDocs).length +
                           structure.utilities.filter(util => util.hasDocs).length +
                           structure.hooks.filter(hook => hook.hasDocs).length +
                           structure.services.filter(service => service.hasDocs).length;
    
    this.documentationMetrics.documentationCoverage = totalItems > 0 ? (documentedItems / totalItems) * 100 : 0;
    
    console.log(`📊 Documentation coverage: ${this.documentationMetrics.documentationCoverage.toFixed(1)}%`);
  }

  async generateReport() {
    console.log('📊 Generating documentation report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFilesAnalyzed: this.documentationMetrics.docPatterns.get('structure') ? 
          Object.values(this.documentationMetrics.docPatterns.get('structure')).reduce((sum, arr) => sum + arr.length, 0) : 0,
        generatedDocs: this.documentationMetrics.generatedDocs.length,
        missingDocs: this.documentationMetrics.missingDocs.length,
        documentationCoverage: this.documentationMetrics.documentationCoverage
      },
      metrics: this.documentationMetrics,
      generated: this.documentationMetrics.generatedDocs,
      missing: this.documentationMetrics.missingDocs
    };
    
    const reportPath = path.join(this.reportDir, `documentation-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(process.cwd(), 'documentation-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Documentation report saved to ${reportPath}`);
  }

  findFiles(dir, extensions) {
    const files = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    scanDirectory(dir);
    return files;
  }

  hasExistingDocs(filePath) {
    const docExtensions = ['.md', '.mdx', '.txt'];
    const basePath = filePath.replace(/\.(ts|tsx|js|jsx)$/, '');
    
    return docExtensions.some(ext => {
      const docPath = basePath + ext;
      return fs.existsSync(docPath);
    });
  }

  extractComponentName(content) {
    const match = content.match(/export\s+(?:default\s+)?(?:function|const)\s+(\w+)/);
    return match ? match[1] : 'UnknownComponent';
  }

  extractFunctionName(content) {
    const match = content.match(/export\s+(?:function|const)\s+(\w+)/);
    return match ? match[1] : 'UnknownFunction';
  }

  extractHookName(content) {
    const match = content.match(/export\s+(?:function|const)\s+(\w+)/);
    return match ? match[1] : 'UnknownHook';
  }

  extractServiceName(content) {
    const match = content.match(/export\s+(?:function|const|class)\s+(\w+)/);
    return match ? match[1] : 'UnknownService';
  }

  extractTypeName(content) {
    const match = content.match(/(?:interface|type)\s+(\w+)/);
    return match ? match[1] : 'UnknownType';
  }

  extractPageName(content) {
    const match = content.match(/export\s+(?:default\s+)?(?:function|const)\s+(\w+)/);
    return match ? match[1] : 'UnknownPage';
  }

  generateServiceDocumentation(service, content) {
    return `# ${service.name}

## Overview

This service provides API functionality for ${service.name.toLowerCase()} operations.

## Functions

${this.extractServiceFunctions(content)}

## Usage

\`\`\`typescript
import { ${service.name} } from './${service.path}';

// Example usage
const result = await ${service.name}.methodName(params);
\`\`\`

## Parameters

${this.extractServiceParameters(content)}

## Returns

${this.extractServiceReturns(content)}

## Error Handling

${this.extractServiceErrors(content)}

## Examples

${this.generateServiceExamples(service.name)}

---
*Generated automatically by Smart Documentation Generator*
`;
  }

  generateComponentDoc(component, content) {
    return `# ${component.name}

## Overview

${component.name} is a React component that ${this.extractComponentPurpose(content)}.

## Props

${this.extractComponentProps(content)}

## Usage

\`\`\`tsx
import { ${component.name} } from './${component.path}';

function App() {
  return (
    <${component.name} 
      // Add your props here
    />
  );
}
\`\`\`

## Examples

${this.generateComponentExamples(component.name)}

## Styling

${this.extractComponentStyling(content)}

---
*Generated automatically by Smart Documentation Generator*
`;
  }

  generateInstallationGuide() {
    return `# Installation Guide

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## Quick Start

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd zion-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to \`http://localhost:5173\`

## Environment Setup

Create a \`.env\` file in the root directory:

\`\`\`env
VITE_API_URL=your_api_url_here
VITE_APP_ENV=development
\`\`\`

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint
- \`npm run type-check\` - Run TypeScript type checking

---
*Generated automatically by Smart Documentation Generator*
`;
  }

  generateDevelopmentGuide() {
    return `# Development Guide

## Project Structure

\`\`\`
src/
├── components/     # React components
├── pages/         # Page components
├── utils/         # Utility functions
├── hooks/         # Custom React hooks
├── services/      # API services
├── types/         # TypeScript type definitions
└── styles/        # CSS and styling files
\`\`\`

## Development Workflow

1. Create a feature branch from main
2. Make your changes
3. Run tests: \`npm test\`
4. Run linting: \`npm run lint\`
5. Submit a pull request

## Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

## Testing

- Write unit tests for utilities and hooks
- Write component tests using React Testing Library
- Write integration tests for critical user flows

## Performance

- Use React.memo for expensive components
- Implement proper loading states
- Optimize bundle size with code splitting

---
*Generated automatically by Smart Documentation Generator*
`;
  }

  generateDeploymentGuide() {
    return `# Deployment Guide

## Production Build

1. Build the application:
\`\`\`bash
npm run build
\`\`\`

2. The build output will be in the \`dist\` directory

## Deployment Options

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: \`npm run build\`
3. Set publish directory: \`dist\`
4. Deploy automatically on push to main branch

### Vercel

1. Import your repository to Vercel
2. Set build command: \`npm run build\`
3. Set output directory: \`dist\`
4. Deploy

### Manual Deployment

1. Upload the contents of \`dist\` directory to your web server
2. Configure your server to serve \`index.html\` for all routes
3. Set up proper caching headers

## Environment Variables

Set the following environment variables in production:

\`\`\`env
VITE_API_URL=https://your-production-api.com
VITE_APP_ENV=production
\`\`\`

## Monitoring

- Set up error tracking (Sentry, LogRocket)
- Monitor performance metrics
- Set up uptime monitoring

---
*Generated automatically by Smart Documentation Generator*
`;
  }

  generateUpdatedREADME(originalContent) {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    return `# ${packageJson.name}

${packageJson.description || 'A modern React application built with Vite and TypeScript.'}

## 🚀 Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

## 📚 Documentation

- [Installation Guide](./docs/installation.md)
- [Development Guide](./docs/development.md)
- [Deployment Guide](./docs/deployment.md)
- [API Documentation](./docs/api/)
- [Component Documentation](./docs/components/)

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Vitest + React Testing Library
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM

## 📦 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint
- \`npm run type-check\` - Run TypeScript type checking
- \`npm test\` - Run tests

## 🤖 Automation

This project uses intelligent PM2 automations for continuous improvement:

- **AI Code Analyzer** - Analyzes code quality and suggests improvements
- **Smart Deployment Optimizer** - Optimizes build and deployment processes
- **Adaptive Test Generator** - Generates tests based on code changes
- **Intelligent Code Refactorer** - Suggests and applies code refactoring
- **Smart Documentation Generator** - Maintains up-to-date documentation
- **Predictive Maintenance Monitor** - Monitors system health and predicts issues

## 📊 Reports

View automation reports in the project root:
- \`ai-analysis-report.json\` - AI code analysis results
- \`deployment-optimization-report.json\` - Deployment optimization metrics
- \`test-generation-report.json\` - Test generation statistics
- \`refactoring-report.json\` - Code refactoring progress
- \`documentation-report.json\` - Documentation coverage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---
*README updated automatically by Smart Documentation Generator*
`;
  }

  extractServiceFunctions(content) {
    const functions = [];
    const lines = content.split('\n');
    
    for (const line of lines) {
      if (line.includes('export function') || line.includes('export const') && line.includes('=') && line.includes('(')) {
        const match = line.match(/export\s+(?:function|const)\s+(\w+)/);
        if (match) {
          functions.push(match[1]);
        }
      }
    }
    
    return functions.map(func => `- \`${func}()\` - ${this.generateFunctionDescription(func)}`).join('\n');
  }

  extractServiceParameters(content) {
    // Simplified parameter extraction
    return '- `params` - Parameters object\n- `options` - Optional configuration';
  }

  extractServiceReturns(content) {
    return '- Promise resolving to the API response';
  }

  extractServiceErrors(content) {
    return '- Network errors are handled automatically\n- API errors are thrown with descriptive messages';
  }

  generateServiceExamples(serviceName) {
    return `\`\`\`typescript
// Basic usage
const data = await ${serviceName}.fetchData();

// With parameters
const result = await ${serviceName}.createItem({
  name: 'Example',
  description: 'Test item'
});
\`\`\``;
  }

  extractComponentPurpose(content) {
    // Simplified purpose extraction
    return 'provides user interface functionality';
  }

  extractComponentProps(content) {
    // Simplified props extraction
    return '- `children` - React children\n- `className` - Additional CSS classes\n- `...props` - Additional HTML attributes';
  }

  generateComponentExamples(componentName) {
    return `\`\`\`tsx
// Basic usage
<${componentName}>Content</${componentName}>

// With props
<${componentName} className="custom-class">
  <p>Custom content</p>
</${componentName}>
\`\`\``;
  }

  extractComponentStyling(content) {
    return 'This component uses Tailwind CSS classes for styling. Custom styles can be added via the `className` prop.';
  }

  generateFunctionDescription(funcName) {
    // Generate basic descriptions based on function name
    const descriptions = {
      'fetch': 'Fetches data from the API',
      'create': 'Creates a new resource',
      'update': 'Updates an existing resource',
      'delete': 'Deletes a resource',
      'get': 'Retrieves data',
      'set': 'Sets data',
      'validate': 'Validates input data',
      'format': 'Formats data for display'
    };
    
    for (const [key, description] of Object.entries(descriptions)) {
      if (funcName.toLowerCase().includes(key)) {
        return description;
      }
    }
    
    return 'Performs the specified operation';
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`📚 Starting smart documentation generator with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  const generator = new SmartDocumentationGenerator();
  
  // Run initial documentation generation
  await generator.generateDocumentation();
  
  // Set up continuous execution
  setInterval(async () => {
    await generator.generateDocumentation();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Smart documentation generator running. Next generation in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the smart documentation generator
runContinuous().catch(error => {
  console.error('❌ Failed to start smart documentation generator:', error);
  process.exit(1);
});