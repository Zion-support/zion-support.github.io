<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======
=======
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class DocsGenerator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/docs-generator.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/docs-generator-report.json');
    this.startTime = Date.now();
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
  }
  async generateReadme() {
    try {
      this.log('📝 Generating README...');
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const readmeContent = `# ${packageJson.name}
${packageJson.description || 'A Next.js application'}
## Getting Started
### Prerequisites
- Node.js ${packageJson.engines?.node || '18.0.0'} or later
- npm ${packageJson.engines?.npm || '8.0.0'} or later
### Installation
\`\`\`bash
npm install
\`\`\`
### Development
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
### Build
\`\`\`bash
npm run build
npm run start
\`\`\`
## Available Scripts
${Object.entries(packageJson.scripts || {}).map(([key, value]) => `- \`${key}\`: ${value}`).join('\n')}
## Project Structure
\`\`\`
${this.getProjectStructure()}
\`\`\`
## Technologies Used
${this.getTechnologiesUsed(packageJson)}
## Contributing
1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request
## License
This project is licensed under the ${packageJson.license || 'MIT'} License.
---
Generated on ${new Date().toISOString()}
`;
      const readmePath = path.join(this.projectRoot, 'README.md');
      fs.writeFileSync(readmePath, readmeContent);
      return { success: true, file: 'README.md' };
    } catch (error) {
      this.log(`README generation failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
  getProjectStructure() {
    try {
      const structure = [];
      const maxDepth = 3;
      const walkDir = (dir, prefix = '', depth = 0) => {
        if (depth >= maxDepth) return;
        const items = fs.readdirSync(dir);
        const filteredItems = items.filter(item =>
          !item.startsWith('.') &&
          item !== 'node_modules' &&
          item !== 'dist' &&
          item !== 'build'
        );
        filteredItems.forEach((item, index) => {
          const fullPath = path.join(dir, item);
          const isLast = index === filteredItems.length - 1;
          const currentPrefix = isLast ? '└── ' : '├── ';
          const nextPrefix = isLast ? '    ' : '│   ';
          structure.push(prefix + currentPrefix + item);
          if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath, prefix + nextPrefix, depth + 1);
          }
        });
      };
      walkDir(this.projectRoot);
      return structure.join('\n');
    } catch (error) {
      return 'Unable to generate project structure';
    }
  }
  getTechnologiesUsed(packageJson) {
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    const techMap = {
      'next': 'Next.js',
      'react': 'React',
      'typescript': 'TypeScript',
      'tailwindcss': 'Tailwind CSS',
      'eslint': 'ESLint',
      'prettier': 'Prettier',
      'jest': 'Jest',
      'cypress': 'Cypress',
      'storybook': 'Storybook'
    };
    const technologies = Object.keys(dependencies)
      .filter(dep => techMap[dep])
      .map(dep => `- ${techMap[dep]}`)
      .join('\n');
    return technologies || 'No specific technologies detected';
  }
  async generateAPIDocs() {
    try {
      this.log('🔌 Generating API documentation...');
      const apiDir = path.join(this.projectRoot, 'pages/api');
      if (!fs.existsSync(apiDir)) {
        return { success: true, files: [] };
      }
      const apiFiles = fs.readdirSync(apiDir)
        .filter(file => file.endsWith('.js') || file.endsWith('.ts'))
        .map(file => {
          const filePath = path.join(apiDir, file);
          const content = fs.readFileSync(filePath, 'utf8');
          // Extract basic info from the file
          const route = file.replace(/\.(js|ts)$/, '');
          const methods = this.extractHTTPMethods(content);
          const description = this.extractDescription(content);
          return {
            route: `/api/${route}`,
            methods,
            description,
            file
          };
        });
      const apiDocsContent = `# API Documentation
## Endpoints
${apiFiles.map(api => `
### ${api.route}
**Methods:** ${api.methods.join(', ')}
${api.description || 'No description available'}
**File:** \`pages/api/${api.file}\`
`).join('\n')}
---
Generated on ${new Date().toISOString()}
`;
      const apiDocsPath = path.join(this.projectRoot, 'docs', 'API.md');
      const docsDir = path.dirname(apiDocsPath);
      if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { recursive: true });
      }
      fs.writeFileSync(apiDocsPath, apiDocsContent);
      return { success: true, files: apiFiles.map(f => f.file) };
    } catch (error) {
      this.log(`API docs generation failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
  extractHTTPMethods(content) {
    const methods = [];
    if (content.includes('export default function handler')) {
      methods.push('GET', 'POST', 'PUT', 'DELETE', 'PATCH');
    } else {
      if (content.includes('export async function GET')) methods.push('GET');
      if (content.includes('export async function POST')) methods.push('POST');
      if (content.includes('export async function PUT')) methods.push('PUT');
      if (content.includes('export async function DELETE')) methods.push('DELETE');
      if (content.includes('export async function PATCH')) methods.push('PATCH');
    }
    return methods.length > 0 ? methods : ['GET'];
  }
  extractDescription(content) {
    const commentMatch = content.match(/\/\*\*[\s\S]*?\*\//);
    if (commentMatch) {
      const descriptionMatch = commentMatch[0].match(/@description\s+(.+)/);
      if (descriptionMatch) {
        return descriptionMatch[1].trim();
      }
    }
    return null;
  }
  async generateComponentDocs() {
    try {
      this.log('🧩 Generating component documentation...');
      const componentsDir = path.join(this.projectRoot, 'components');
      if (!fs.existsSync(componentsDir)) {
        return { success: true, files: [] };
      }
      const componentFiles = this.getComponentFiles(componentsDir);
      const componentDocs = componentFiles.map(file => {
        const content = fs.readFileSync(file, 'utf8');
        const componentName = path.basename(file, path.extname(file));
        return {
          name: componentName,
          file: path.relative(this.projectRoot, file),
          props: this.extractProps(content),
          description: this.extractComponentDescription(content)
        };
      });
      const componentDocsContent = `# Component Documentation
## Components
${componentDocs.map(comp => `
### ${comp.name}
**File:** \`${comp.file}\`
${comp.description || 'No description available'}
${comp.props.length > 0 ? `
**Props:**
${comp.props.map(prop => `- \`${prop.name}\`: ${prop.type}${prop.required ? ' (required)' : ''} - ${prop.description || 'No description'}`).join('\n')}
` : ''}
`).join('\n')}
---
Generated on ${new Date().toISOString()}
`;
      const componentDocsPath = path.join(this.projectRoot, 'docs', 'COMPONENTS.md');
      const docsDir = path.dirname(componentDocsPath);
      if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { recursive: true });
      }
      fs.writeFileSync(componentDocsPath, componentDocsContent);
      return { success: true, files: componentFiles.map(f => path.basename(f)) };
    } catch (error) {
      this.log(`Component docs generation failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
  getComponentFiles(dir) {
    const files = [];
    const walkDir = (currentDir) => {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (stat.isFile() && (item.endsWith('.jsx') || item.endsWith('.tsx'))) {
          files.push(fullPath);
        }
      }
    };
    walkDir(dir);
    return files;
  }
  extractProps(content) {
    const props = [];
    // Look for TypeScript interfaces
    const interfaceMatch = content.match(/interface\s+(\w+Props)\s*{([^}]+)}/);
    if (interfaceMatch) {
      const propsContent = interfaceMatch[2];
      const propLines = propsContent.split('\n');
      propLines.forEach(line => {
        const propMatch = line.match(/(\w+)\??:\s*([^;]+);?\s*\/\/\s*(.+)/);
        if (propMatch) {
          props.push({
            name: propMatch[1],
            type: propMatch[2].trim(),
            required: !line.includes('?'),
            description: propMatch[3].trim()
          });
        }
      });
    }
    return props;
  }
  extractComponentDescription(content) {
    const commentMatch = content.match(/\/\*\*[\s\S]*?\*\//);
    if (commentMatch) {
      const descriptionMatch = commentMatch[0].match(/@description\s+(.+)/);
      if (descriptionMatch) {
        return descriptionMatch[1].trim();
      }
    }
    return null;
  }
  generateReport(readmeResult, apiResult, componentResult) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        readmeGenerated: readmeResult.success,
        apiDocsGenerated: apiResult.success,
        componentDocsGenerated: componentResult.success,
        totalFiles: (apiResult.files?.length || 0) + (componentResult.files?.length || 0)
      },
      readme: readmeResult,
      apiDocs: apiResult,
      componentDocs: componentResult,
      recommendations: this.generateRecommendations(readmeResult, apiResult, componentResult)
    };
    return report;
  }
  generateRecommendations(readmeResult, apiResult, componentResult) {
    const recommendations = [];
    if (!readmeResult.success) {
      recommendations.push({
        type: 'readme',
        priority: 'high',
        message: 'README generation failed',
        action: 'Check package.json and project structure'
      });
    }
    if (!apiResult.success) {
      recommendations.push({
        type: 'api-docs',
        priority: 'medium',
        message: 'API documentation generation failed',
        action: 'Check API files in pages/api directory'
      });
    }
    if (!componentResult.success) {
      recommendations.push({
        type: 'component-docs',
        priority: 'medium',
        message: 'Component documentation generation failed',
        action: 'Check component files in components directory'
      });
    }
    return recommendations;
  }
  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }
  async run() {
    this.log('📚 Starting Docs Generator...');
    this.log(`Project root: ${this.projectRoot}`);
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      // Generate README
      const readmeResult = await this.generateReadme();
      // Generate API docs
      const apiResult = await this.generateAPIDocs();
      // Generate component docs
      const componentResult = await this.generateComponentDocs();
      // Generate report
      const report = this.generateReport(readmeResult, apiResult, componentResult);
      // Save report
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary
      this.log('\n📊 Docs Generator Report:');
      this.log(`README: ${readmeResult.success ? '✅' : '❌'}`);
      this.log(`API docs: ${apiResult.success ? '✅' : '❌'}`);
      this.log(`Component docs: ${componentResult.success ? '✅' : '❌'}`);
      this.log(`Files processed: ${report.summary.totalFiles}`);
      this.log(`Duration: ${duration}ms`);
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      }
    } catch (error) {
      this.log(`❌ Error running docs generator: ${error.message}`);
      process.exit(1);
    }
  }
}
// Run the docs generator
const generator = new DocsGenerator();
generator.run().catch(error => {
  process.exit(1);
});
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");class DocsGenerator { constructor() {" this.processName = process.env.PM2_PROCESS_NAME | "docs-generator";" this.autoGenerate = process.env.AUTO_GENERATE === "true";" this.updateReadme = process.env.UPDATE_README === "true";" this.apiDocs = process.env.API_DOCS === "true";" this.componentDocs = process.env.COMPONENT_DOCS === "true";" this.logFile = path.join(__dirname, "././logs/pm2/docs-generator.log"); this.ensureLogDir(); } ensureLogDir() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile, logMessage); } async generateApiDocs() { if (!this.apiDocs) {" this.log("API documentation generation disabled");" return { generated: false }; } try {" this.log("Generating API documentation."); / Check if JSDoc is available try {"" execSync("npx jsdoc --version", { stdio: "pipe" }); } catch (error) {" this.log("JSDoc not found, installing.");"" execSync("npm install -g jsdoc", { stdio: "pipe" }); } / Create docs directory" const docsDir = "docs/api"; if (!fs.existsSync(docsDir)) {" fs.mkdirSync(docsDir, { recursive: true }); } / Generate API docs` const jsdocCommand = `npx jsdoc -c jsdoc.conf.json -d ${docsDir} -r src/ lib/ scripts/`;"" execSync(jsdocCommand, { stdio: "pipe" });" this.log("API documentation generated successfully");" return { generated: true, outputDir: docsDir }; } catch (error) {"` this.log(`API documentation generation failed: ${error.message}`);" return { generated: false, error: error.message }; } } async generateComponentDocs() { if (!this.componentDocs) {" this.log("Component documentation generation disabled");" return { generated: false }; } try {" this.log("Generating component documentation."); / Look for React/Vue/Svelte components const componentFiles = this.findComponentFiles(); if (componentFiles.length === 0) {" this.log("No component files found");"" return { generated: false, reason: "No components found" }; } / Generate component documentation const componentDocs = this.generateComponentMarkdown(componentFiles); " const docsDir = "docs/components"; if (!fs.existsSync(docsDir)) {" fs.mkdirSync(docsDir, { recursive: true }); }" const docsFile = path.join(docsDir, "components.md"); fs.writeFileSync(docsFile, componentDocs);"` this.log(`Component documentation generated: ${docsFile}`);" return { generated: true, outputFile: docsFile, componentCount: componentFiles.length }; } catch (error) {"` this.log(`Component documentation generation failed: ${error.message}`);" return { generated: false, error: error.message }; } } findComponentFiles() {" const extensions = [".jsx", ".tsx", ".vue", ".svelte"]; const componentFiles = []; const scanDir = (dir) => { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); " if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDir(filePath); } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) { componentFiles.push(filePath); } } } catch (err) {" / Skip directories that can"t be read } }; / Scan common source directories" const sourceDirs = ["src", "components", "lib", "pages"]; for (const dir of sourceDirs) { if (fs.existsSync(dir)) { scanDir(dir); } } return componentFiles; } generateComponentMarkdown(componentFiles) {" let markdown = "# Component Documentation\n\n";"` markdown += `Generated on: ${new Date().toISOString()}\n\n`;"` markdown += `Total components: ${componentFiles.length}\n\n`; for (const file of componentFiles) { const relativePath = path.relative(process.cwd(), file); const fileName = path.basename(file);` markdown += `# ${fileName}\n\n`;" markdown += "**File: ** \"${relativePath}\"\n\n"; try {" const content = fs.readFileSync(file, "utf8"); / Extract component name (simplified) const componentMatch = content.match(/(?:export\s+(?:default\s+)?(?:function|const|class)\s+)(\w+)/); if (componentMatch) {" markdown += "**Component Name: ** \"${componentMatch[1]}\"\n\n"; } / Extract JSDoc comments const jsdocMatch = content.match(/\/\*\*[\s\S]*?\*\/); if (jsdocMatch) { const jsdoc = jsdocMatch[0]" .replace(/\/\*\*|\*\/g, "")" .replace(/^\s*\*/gm, "") .trim();"` markdown += `**Description: **\n${jsdoc}\n\n`; } / Extract props (simplified for React) const propsMatch = content.match(/props\s*:\s*\{([^}]+)\}/); if (propsMatch) {" markdown += "**Props: **\n\"\"\"typescript\n${propsMatch[1].trim()}\n\"\"\"\n\n"; } } catch (err) {"` markdown += `*Error reading file: ${err.message}*\n\n`; }" markdown += "---\n\n"; } return markdown; } async updateReadme() { if (!this.updateReadme) {" this.log("README update disabled");" return { updated: false }; } try {" this.log("Updating README."); " const readmePath = "README.md";" let readmeContent = ""; if (fs.existsSync(readmePath)) {" readmeContent = fs.readFileSync(readmePath, "utf8"); } / Generate project information const projectInfo = await this.generateProjectInfo(); / Update or create README const newReadme = this.generateReadmeContent(projectInfo, readmeContent); fs.writeFileSync(readmePath, newReadme);" this.log("README updated successfully");" return { updated: true, file: readmePath }; } catch (error) {"` this.log(`README update failed: ${error.message}`);" return { updated: false, error: error.message }; } } async generateProjectInfo() { try {" const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8")); return {"" name: packageJson.name | "Unknown Project","" version: packageJson.version | "1.0.0","" description: packageJson.description | "No description available"," scripts: packageJson.scripts | {}," dependencies: Object.keys(packageJson.dependencies | {})," devDependencies: Object.keys(packageJson.devDependencies | {})," repository: packageJson.repository?.url | packageJson.repository | null,"" license: packageJson.license | "MIT" }; } catch (error) {"` this.log(`Failed to read package.json: ${error.message}`); return {"" name: "Unknown Project","" version: "1.0.0","" description: "No description available"," scripts: {}," dependencies: []," devDependencies: []," repository: null,"" license: "MIT" }; } } generateReadmeContent(projectInfo, existingContent) { const timestamp = new Date().toISOString();` let readme = `# ${projectInfo.name}\n\n`;"` readme += `**Version: ** ${projectInfo.version}\n\n`;` readme += `${projectInfo.description}\n\n`; if (projectInfo.repository) {"` readme += `**Repository: ** ${projectInfo.repository}\n\n`; } "` readme += `**License: ** ${projectInfo.license}\n\n`;" readme += "---\n\n";"` readme += `*Last updated: ${timestamp}*\n\n`; / Add available scripts if (Object.keys(projectInfo.scripts).length > 0) {" readme += "# Available Scripts\n\n"; for (const [script, command] of Object.entries(projectInfo.scripts)) {"` readme += "- \"npm run ${script}\`: ${command}\n`; }" readme += "\n"; } / Add dependencies info if (projectInfo.dependencies.length > 0) {" readme += "# Dependencies\n\n";"` readme += `**Production: ** ${projectInfo.dependencies.length} packages\n`;"` readme += `**Development: ** ${projectInfo.devDependencies.length} packages\n\n`; } / Preserve existing content if it exists if (existingContent && existingContent.trim()) {" readme += "# Project Details\n\n"; readme += existingContent; } return readme; } async generateReport() { const report = {" timestamp: new Date().toISOString()," processName: this.processName," apiDocs: await this.generateApiDocs()," componentDocs: await this.generateComponentDocs()," readmeUpdate: await this.updateReadme()," environment: { NODE_ENV: process.env.NODE_ENV," autoGenerate: this.autoGenerate," updateReadme: this.updateReadme," apiDocs: this.apiDocs," componentDocs: this.componentDocs } };" const reportFile = path.join(__dirname, "././logs/pm2/docs-generator-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); "` this.log(`Documentation generator report generated: ${reportFile}`); return report; } async start() {` this.log(`${this.processName} started`); try { const report = await this.generateReport(); let generatedCount = 0; if (report.apiDocs.generated) generatedCount++; if (report.componentDocs.generated) generatedCount++; if (report.readmeUpdate.updated) generatedCount++; "` this.log(`Documentation generation completed: ${generatedCount} items generated`); } catch (error) {"` this.log(`Documentation generator error: ${error.message}`); } }}/ Start the serviceif (require.main === module) { const docsGenerator = new DocsGenerator(); docsGenerator.start().catch(console.error);}module.exports = DocsGenerator;'"`'"`
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
#!/usr/bin/env node;
/**
 * PM2 Documentation Generator Service;
 * Automatically generates and updates documentation;
 */
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
class DocsGenerator {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME ||docs-generator';
    this.autoGenerate = process.env.AUTO_GENERATE ===true;
    this.updateReadme = process.env.UPDATE_README ===true;
    this.apiDocs = process.env.API_DOCS ===true;
    this.componentDocs = process.env.COMPONENT_DOCS ===true;
    this.logFile = path.join(__dirname,../../logs/pm2/docs-generator.log');
    this.ensureLogDir();
  };
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true }")
});
  log(message) {}
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

<<<<<<< HEAD
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  async generateApiDocs() {}
    if (!this.apiDocs) {}"
      this.log('API documentation generation disabled');
<<<<<<< HEAD
      return { "generated": false };
    };
    try {}
      this.log('Generating API documentation...');
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======
      return { "generated": false };"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Check if JSDoc is available;
      try {}
        execSync('npx jsdoc --version', { "stdio": 'pipe' }')
      } catch (error) {}
        this.log('JSDoc not found, installing...');
        execSync('npm install -g jsdoc', { "stdio": 'pipe' }')

      // Create docs directory;
      const docsDir = 'docs/api';
      if (!fs.existsSync(docsDir)) {}
<<<<<<< HEAD
        fs.mkdirSync(docsDir, { "recursive": true }
});
      };
      // Generate API docs;
      const jsdocCommand = `npx jsdoc -c jsdoc.conf.json -d ${docsDir} -r src/ lib/ scripts/`;`
      execSync(jsdocCommand, { "stdio": 'pipe' }
});

<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
        fs.mkdirSync(docsDir, { "recursive": true }")
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
      this.log('API documentation generated successfully');
      return { "generated": true, "outputDir": docsDir };"
    } catch (error) {}"
      this.log(`API documentation generation "failed": ${error.message});
      return { "generated": false, "error": error.message };"
    };
  };
  async generateComponentDocs() {}
    if (!this.componentDocs) {}"
      this.log('Component documentation generation disabled');
      return { "generated": false };"
    };
<<<<<<< HEAD
    try {}
      this.log('Generating component documentation...');
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

      // Look for React/Vue/Svelte components;
      const componentFiles = this.findComponentFiles();

<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
      
      // Look for React/Vue/Svelte components;
      const componentFiles = this.findComponentFiles();
      
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
      if (componentFiles.length === 0) {}
        this.log('No component files found');
        return { "generated": false, "reason": 'No components found' };
      };
      // Generate component documentation;
      const componentDocs = this.generateComponentMarkdown(componentFiles);
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======
    try {}"
      this.log('Generating component documentation...);

      // Look for React/Vue/Svelte components;
      const componentFiles = this.findComponentFiles();
      if (componentFiles.length === 0) {}
        this.log('No component files found');

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const docsDir = 'docs/components';
      if (!fs.existsSync(docsDir)) {}
        fs.mkdirSync(docsDir, { "recursive": true }")
});
      };"
      const docsFile = path.join(docsDir,components.md');
      fs.writeFileSync(docsFile, componentDocs);

<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
      this.log(`Component documentation "generated": ${docsFile}`);
      return { "generated": true, "outputFile": docsFile, "componentCount": componentFiles.length };
    } catch (error) {}
      this.log(`Component documentation generation "failed": ${error.message}`);
      return { "generated": false, "error": error.message };
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    };
  };
  findComponentFiles() {}"
    const extensions = [.jsx,.tsx,.vue,.svelte];

    const componentFiles = [];

<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const scanDir = (dir) => {}
        const files = fs.readdirSync(dir);
        for (const file of files) {}
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
          
          
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}

            scanDir(filePath);
          } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {}
            componentFiles.push(filePath);
      } catch (err) {}
        // Skip directories that can't be read;


<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
    // Scan common source directories;
    const sourceDirs = [src,components,lib,pages];
    for (const dir of sourceDirs) {}
      if (fs.existsSync(dir)) {}
        scanDir(dir);
    return componentFiles;
  generateComponentMarkdown(componentFiles) {}
<<<<<<< HEAD
    let markdown = '# Component Documentation\n\n';
    markdown += `Generated "on": ${new Date().toISOString()}\n\n`;`
    markdown += `Total "components": ${componentFiles.length}\n\n`;`
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    markdown += `Total "components": ${componentFiles.length}\n\n`;`"
    for (const file of componentFiles) {}
      const relativePath = path.relative(process.cwd(), file);
      const fileName = path.basename(file);
<<<<<<< HEAD
      markdown += `## ${fileName}\n\n`;`
      markdown += "**"File": ** \"${relativePath}\"\n\n";
      try {}
        const content = fs.readFileSync(file, 'utf8');
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

    for (const file of componentFiles) {}
      const relativePath = path.relative(process.cwd(), file);
      const fileName = path.basename(file);

      markdown += `## ${fileName}\n\n`;`
      markdown += "**"File": ** \"${relativePath}\"\n\n";

      try {}
        const content = fs.readFileSync(file, 'utf8');

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        // Extract component name (simplified);
        const componentMatch = content.match(/(?:export\s+(?:default\s+)?(?:function|const|class)\s+)(\w+)/);
        if (componentMatch) {}
          markdown += "**Component "Name": ** \"${componentMatch[1]}\"\n\n";"

        // Extract JSDoc comments;
        const jsdocMatch = content.match(/\/\*\*[\s\S]*?\*\//);
        if (jsdocMatch) {}
          const jsdoc = jsdocMatch[0];"
            .replace(/\/\*\*|\*\//g, );
            .replace(/^\s*\*/gm, );

        // Extract props (simplified for React);
        const propsMatch = content.match(/props\s*:\s*\{([^}]+)\}/);
        if (propsMatch) {}"
          markdown += "**"Props": **\n\"\"\"typescript\n${propsMatch[1].trim()}\n\"\"\"\n\n";"

    return markdown;
  async updateReadme() {}
    if (!this.updateReadme) {}
      this.log('README update disabled');
<<<<<<< HEAD
      return { "updated": false };
    };
    try {}
      this.log('Updating README...');
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

      const readmePath = 'README.md';
      let readmeContent = '';

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
      
      const readmePath = 'README.md';
      let readmeContent = '';

<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
      if (fs.existsSync(readmePath)) {}
        readmeContent = fs.readFileSync(readmePath, 'utf8');
      };
      // Generate project information;
      const projectInfo = await this.generateProjectInfo();
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
      
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      // Update or create README;
      const newReadme = this.generateReadmeContent(projectInfo, readmeContent);
      fs.writeFileSync(readmePath, newReadme);

<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
      this.log('README updated successfully');
      return { "updated": true, "file": readmePath };
    } catch (error) {}
      this.log(`README update "failed": ${error.message}`);
      return { "updated": false, "error": error.message };
    };
  };
  async generateProjectInfo() {}
    try {}
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======
      return { "updated": false };"

      // Generate project information;
      const projectInfo = await this.generateProjectInfo();
      // Update or create README;
      const newReadme = this.generateReadmeContent(projectInfo, readmeContent);
      fs.writeFileSync(readmePath, newReadme);
'
      this.log('README updated successfully');
      return { "updated": true, "file": readmePath };"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      return {}
        "name": packageJson.name || 'Unknown Project',
        "version": packageJson.version || '1.0.0',
        "description": packageJson.description || 'No description available',
        "scripts": packageJson.scripts || {},""
        "dependencies": Object.keys(packageJson.dependencies || {}),""
        "devDependencies": Object.keys(packageJson.devDependencies || {}),""
        "repository": packageJson.repository?.url || packageJson.repository || null,""
        "license": packageJson.license || 'MIT
    } catch (error) {}`;
      this.log(`Failed to read package."json": ${error.message}`);"
      return {}"
        "name": 'Unknown Project',
        "version": '1.0.0',
        "description": 'No description available',
        "scripts": {},""
        "dependencies": [],""
        "devDependencies": [],""
        "repository": null,""
        "license": 'MIT
  generateReadmeContent(projectInfo, existingContent) {}
<<<<<<< HEAD
    const timestamp = new Date().toISOString();
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

    let readme = `# ${projectInfo.name}\n\n`;`
    readme += `**"Version": ** ${projectInfo.version}\n\n`;`
    readme += `${projectInfo.description}\n\n`;`

<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
    
    let readme = `# ${projectInfo.name}\n\n`;`
    readme += `**"Version": ** ${projectInfo.version}\n\n`;`
    readme += `${projectInfo.description}\n\n`;`
    
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
    if (projectInfo.repository) {}
      readme += `**"Repository": ** ${projectInfo.repository}\n\n`;`
    };
    readme += `**"License": ** ${projectInfo.license}\n\n`;`
    readme += "---\n\n";
    readme += `*Last "updated": ${timestamp}*\n\n`;`
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
    // Add available scripts;
    if (Object.keys(projectInfo.scripts).length > 0) {}
      readme += "## Available Scripts\n\n";
      for (const [script, command] of Object.entries(projectInfo.scripts)) {}
        readme += "- \"npm run ${script}\`: ${command}\n`;`
      };
      readme += "\n";
    };
    // Add dependencies info;
    if (projectInfo.dependencies.length > 0) {}
      readme += "## Dependencies\n\n";
      readme += `**"Production": ** ${projectInfo.dependencies.length} packages\n`;`
      readme += `**"Development": ** ${projectInfo.devDependencies.length} packages\n\n`;`
    };
    // Preserve existing content if it exists;
    if (existingContent && existingContent.trim()) {}
      readme += "## Project Details\n\n";
      readme += existingContent;
    };
    return readme;
  };
  async generateReport() {}
    const report = {}
      "timestamp": new Date().toISOString(),
      "processName": this.processName,
      "apiDocs": await this.generateApiDocs(),
      "componentDocs": await this.generateComponentDocs(),
      "readmeUpdate": await this.updateReadme(),
      "environment": {}
        NODE_ENV: process.env.NODE_ENV,
        "autoGenerate": this.autoGenerate,
        "updateReadme": this.updateReadme,
        "apiDocs": this.apiDocs,
        "componentDocs": this.componentDocs;
      };
    };
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

    const reportFile = path.join(__dirname, '../../logs/pm2/docs-generator-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs

    const reportFile = path.join(__dirname, '../../logs/pm2/docs-generator-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
    this.log(`Documentation generator report "generated": ${reportFile}`);
=======
    let readme = `# ${projectInfo.name}\n\n`;``;
    readme += `**"Version": ** ${projectInfo.version}\n\n`;`"`;
    readme += `${projectInfo.description}\n\n`;`
    if (projectInfo.repository) {}"`;
      readme += `**"Repository": ** ${projectInfo.repository}\n\n`;`"
    };"`;
    readme += `**"License": ** ${projectInfo.license}\n\n`;`""
    readme += "---\n\n";""`;

    // Add available scripts;
    if (Object.keys(projectInfo.scripts).length > 0) {}"
      readme += "## Available Scripts\n\n";"

    // Preserve existing content if it exists;
    if (existingContent && existingContent.trim()) {}"
      readme += "## Project Details\n\n";"
      readme += existingContent;
    return readme;
  async generateReport() {}
    const report = {}"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return report;
  async start() {}`;
    this.log(`${this.processName} started`);
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

    try {}
      const report = await this.generateReport();

<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
    
    try {}
      const report = await this.generateReport();
      
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======
      const report = await this.generateReport();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      let generatedCount = 0;
      if (report.apiDocs.generated) generatedCount++;
      if (report.componentDocs.generated) generatedCount++;
      if (report.readmeUpdate.updated) generatedCount++;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

=======
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
      this.log(`Documentation generation "completed": ${generatedCount} items generated`);

      this.log(`Documentation generation "completed": ${generatedCount} items generated`);
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs

<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
    } catch (error) {}
      this.log(`Documentation generator "error": ${error.message}`);
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    };
  };
};

// Start the service;
if (require.main === module) {}
  const docsGenerator = new DocsGenerator();
  docsGenerator.start().catch(console.error);
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/docs-generator.cjs
<<<<<<< HEAD
=======
};
<<<<<<< HEAD
module.exports = DocsGenerator;module.exports = DocsGenerator;
module.exports = DocsGenerator;module.exports = DocsGenerator;

module.exports = DocsGenerator;
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

module.exports = DocsGenerator;


<<<<<<< HEAD
module.exports = DocsGenerator;module.exports = DocsGenerator;
module.exports = DocsGenerator;module.exports = DocsGenerator;
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/docs-generator.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
