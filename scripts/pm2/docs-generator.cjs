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