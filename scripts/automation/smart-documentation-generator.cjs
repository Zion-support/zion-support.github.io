
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');


class SmartDocumentationGenerator {;
  constructor() {;
    this.documentationMetrics = {;
      generatedDocs: [],;
      documentationCoverage: 0,;
      missingDocs: [],;
      documentationSuggestions: [],;
      docPatterns: new Map(),};
    this.reportDir = path.join(process.cwd(), `documentation-reports`);
    this.docsDir = path.join(process.cwd(), `docs`);
    this.ensureDirectories()}
;
  ensureDirectories() {;
    if (!fs.existsSync(this.reportDir)) {;
      fs.mkdirSync(this.reportDir { recursive: true })}
    if (!fs.existsSync(this.docsDir)) {;
      fs.mkdirSync(this.docsDir { recursive: true })}
  }

      );
;
      // Analyze codebase structure;
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
;

      // Calculate documentation coverage;
      await this.calculateDocumentationCoverage();

      console.error('❌ Smart documentation generation failed:', error.message)}

  }

  async analyzeCodebaseStructure() {
    console.log('🔍 Analyzing codebase structure...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) {
      console.log('⚠️ Source directory not found');
      return}
;
    const structure = {;
      components: [],;
      utilities: [],;
      hooks: [],;
      services: [],;
      types: [],;
      pages: [],;
      configs: [],};
;
    const allFiles = this.findFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    for (const file of allFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(srcPath, file);
;
      if (;
        relativePath.includes('components/') ||;
        content.includes('export default') ||;
        (content.includes('function') && content.includes('props'));
      ) {;
        structure.components.push({;
          path: relativePath,;
          name: this.extractComponentName(content),;
          hasDocs: this.hasExistingDocs(file),})} else if (;
        relativePath.includes('utils/') ||;
        relativePath.includes('helpers/') ||;
        content.includes('export function') ||;
        content.includes('export const');
      ) {;
        structure.utilities.push({;
          path: relativePath,;
          name: this.extractFunctionName(content),;
          hasDocs: this.hasExistingDocs(file),})} else if (content.includes('use') && content.includes('export')) {;
        structure.hooks.push({;
          path: relativePath,;
          name: this.extractHookName(content),;
          hasDocs: this.hasExistingDocs(file),})} else if (;
        relativePath.includes('services/') ||;
        content.includes('api') ||;
        content.includes('fetch');
      ) {;
        structure.services.push({;
          path: relativePath,;
          name: this.extractServiceName(content),;
          hasDocs: this.hasExistingDocs(file),})} else if (;
        relativePath.includes('types/') ||;
        content.includes('interface') ||;
        content.includes('type ');
      ) {;
        structure.types.push({;
          path: relativePath,;
          name: this.extractTypeName(content),})} else if (relativePath.includes('pages/') || content.includes('Route')) {;
        structure.pages.push({;
          path: relativePath,;
          name: this.extractPageName(content),})}
    }

      const configPath = path.join(process.cwd(), 'configFile);
      if (fs.existsSync(configPath)) {;
        structure.configs.push({;
          path: configFile', name: configFile,;
          hasDocs: this.hasExistingDocs(configPath),})}
    }
    
    this.documentationMetrics.docPatterns.set('structure', structure);
    console.log('📊 Codebase structure analysis completed')}
;
  async identifyMissingDocumentation() {;
    console.log('🔍 Identifying missing documentation...');
    
    const structure = this.documentationMetrics.docPatterns.get('structure');
    if (!structure) return;
    
    const missingDocs = [];

      comp => !comp.hasDocs;
    );
    if (undocumentedComponents.length > 0) {;
      missingDocs.push({;
        type: 'component',;
        items: undocumentedComponents,;
        priority: 'high',})}

      util => !util.hasDocs;
    );
    if (undocumentedUtilities.length > 0) {;
      missingDocs.push({;
        type: 'utility',;
        items: undocumentedUtilities,;
        priority: 'medium',})}

    // Check for missing hook documentation;
    const undocumentedHooks = structure.hooks.filter(hook => !hook.hasDocs);
    if (undocumentedHooks.length > 0) {;
      missingDocs.push({;
        type: 'hook',;
        items: undocumentedHooks,;
        priority: 'medium',})}

      })}
;
    this.documentationMetrics.missingDocs = missingDocs;

    if (!structure) return;
    
    const apiDocs = [];

        // Ensure API docs directory exists;
        const apiDocsDir = path.dirname(docPath);
        if (!fs.existsSync(apiDocsDir)) {;
          fs.mkdirSync(apiDocsDir { recursive: true })}
;
        fs.writeFileSync(docPath, apiDoc);

          error.message;
        `)}
    }
  }



    const structure = this.documentationMetrics.docPatterns.get('structure');
    if (!structure) return;

        // Ensure components docs directory exists;
        const componentsDocsDir = path.dirname(docPath);
        if (!fs.existsSync(componentsDocsDir)) {;
          fs.mkdirSync(componentsDocsDir { recursive: true })}
;
        fs.writeFileSync(docPath, componentDoc)});


        `)}
    }
  }


    const installationGuide = this.generateInstallationGuide();
    const installPath = path.join(this.docsDir, 'installation.md');
    fs.writeFileSync(installPath, installationGuide);

    // Generate development guide;
    const developmentGuide = this.generateDevelopmentGuide();
    const devPath = path.join(this.docsDir, 'development.md');
    fs.writeFileSync(devPath, developmentGuide);

    // Generate deployment guide;
    const deploymentGuide = this.generateDeploymentGuide();
    const deployPath = path.join(this.docsDir, 'deployment.md');
    fs.writeFileSync(deployPath, deploymentGuide);
;
    this.documentationMetrics.generatedDocs.push(;
      {;
        type: 'guide',;
        path: installPath,;
        name: 'Installation Guide',;
        timestamp: new Date().toISOString(),},;
      {;
        type: 'guide',;
        path: devPath,;
        name: 'Development Guide',;
        timestamp: new Date().toISOString(),},;
      {;
        type: 'guide',;
        path: deployPath,;
        name: 'Deployment Guide',;
        timestamp: new Date().toISOString(),}
    );
;
    console.log('✅ Generated setup guides'`)}

      const readmePath = path.join(process.cwd(), 'README.md');
      let readmeContent = ';
;
      if (fs.existsSync(readmePath)) {;
        readmeContent = fs.readFileSync(readmePath, 'utf8')}
;
      const updatedREADME = this.generateUpdatedREADME(readmeContent);
      fs.writeFileSync(readmePath, updatedREADME);
;
      this.documentationMetrics.generatedDocs.push({;
        type: 'readme',;
        path: readmePath,;
        name: 'README.md',;
        timestamp: new Date().toISOString(),});
;
      console.log('✅ Updated README');

      console.log('⚠️ Failed to update README:', error.message)}
  }

    if (!structure) return;
;
    const totalItems =;
      structure.components.length +;
      structure.utilities.length +;
      structure.hooks.length +;
      structure.services.length;
;
    const documentedItems =;
      structure.components.filter(comp => comp.hasDocs).length +;
      structure.utilities.filter(util => util.hasDocs).length +;
      structure.hooks.filter(hook => hook.hasDocs).length +;
      structure.services.filter(service => service.hasDocs).length;
;
    this.documentationMetrics.documentationCoverage =;
      totalItems > 0 ? (documentedItems / totalItems) * 100 : 0;

    );
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));
console.log(📊 Documentation report saved to ${reportPath})}
;
  findFiles(dir, extensions) {;
    const files = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
;
          if (stat.isDirectory()) {;
            scanDirectory(fullPath)} else if (extensions.some(ext => item.endsWith(ext))) {;
            files.push(fullPath)}
        }

    }
    
    scanDirectory(dir);
    return files}

      const docPath = basePath + ext;
      return fs.existsSync(docPath)})}
;
  extractComponentName(content) {;
    const match = content.match(;
      /export\s+(?:default\s+)?(?:function|const)\s+(\w+)/;
    );
    return match ? match[1] : 'UnknownComponent'}
;
  extractFunctionName(content) {;
    const match = content.match(/export\s+(?:function|const)\s+(\w+)/);
    return match ? match[1] : 'UnknownFunction'}
;
  extractHookName(content) {;
    const match = content.match(/export\s+(?:function|const)\s+(\w+)/);
    return match ? match[1] : 'UnknownHook'}
;
  extractServiceName(content) {;
    const match = content.match(/export\s+(?:function|const|class)\s+(\w+)/);
    return match ? match[1] : 'UnknownService'}
;
  extractTypeName(content) {;
    const match = content.match(/(?:interface|type)\s+(\w+)/);
    return match ? match[1] : `UnknownType`}
;
  extractPageName(content) {;
    const match = content.match(;
      /export\s+(?:default\s+)?(?:function|const)\s+(\w+)/;
    );
    return match ? match[1] : `UnknownPage`}
;
  generateServiceDocumentation(service, content) {return # ${service.name}
;
## Overview;


${this.extractServiceFunctions(content)}



${this.extractServiceParameters(content)}

${this.generateServiceExamples(service.name)}
;
---;
*Generated automatically by Smart Documentation Generator*}


## Examples;
${this.generateComponentExamples(component.name)}

${this.extractComponentStyling(content)}
;
---;
*Generated automatically by Smart Documentation Generator*}
;
  generateInstallationGuide() {;
    return '# Installation Guide;


*Generated automatically by Smart Documentation Generator*}
;
  generateDevelopmentGuide() {;
    return '# Development Guide;


├── components/     # React components;
├── pages/         # Page components;
├── utils/         # Utility functions;
├── hooks/         # Custom React hooks;
├── services/      # API services;
├── types/         # TypeScript type definitions;

- Use TypeScript for all new code;
- Follow ESLint configuration;
- Use Prettier for code formatting;
- Write meaningful commit messages;

*Generated automatically by Smart Documentation Generator*}
;
  generateDeploymentGuide() {;
    return '# Deployment Guide;


return `# ${packageJson.name}
;
${packageJson.description || 'A modern React application built with Vite and TypeScript.'}


- **Framework**: React 18;
- **Build Tool**: Vite;
- **Language**: TypeScript;
- **Styling**: Tailwind CSS;
- **Testing**: Vitest + React Testing Library;
- **State Management**: Redux Toolkit;
- **Routing**: React Router DOM;

1. Fork the repository;
2. Create a feature branch;
3. Make your changes;
4. Run tests and linting;
5. Submit a pull request;

*README updated automatically by Smart Documentation Generator*}
;
  extractServiceFunctions(content) {;
    const functions = [];
    const lines = content.split('\n');

        const match = line.match(/export\s+(?:function|const)\s+(\w+)/);
        if (match) {;
          functions.push(match[1])}
      }
    }

  }
;
  generateComponentExamples(componentName) {return `\`\`\`tsx;
// Basic usage;
<${componentName}>Content</${componentName}>}
}


  );
;
  const generator = new SmartDocumentationGenerator();

  `)}
;
// Handle graceful shutdown;
process.on('SIGINT', () => {;
  console.log('🛑 Received SIGINT, shutting down gracefully...');

  process.exit(0)});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});

  console.error('❌ Failed to start smart documentation generator:', error);
  process.exit(1)});
