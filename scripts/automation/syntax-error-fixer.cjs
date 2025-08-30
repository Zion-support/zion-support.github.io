const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixesApplied = 0;
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const colors = {
      info: '\x1b[34m',
      success: '\x1b[32m',
      warning: '\x1b[33m',
      error: '\x1b[31m',
      reset: '\x1b[0m'
    };
    console.log(`${colors[type]}[${type.toUpperCase()}]${colors.reset} [${timestamp}] ${message}`);
  }

  async fixServiceWorkerSyntax() {
    const filePath = path.join(this.projectRoot, 'src/utils/serviceWorker.ts');
    if (!fs.existsSync(filePath)) return;

    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // Fix type assertion syntax errors
      content = content.replace(/\(registration as \)/g, '(registration as any)');
      content = content.replace(/\(window as \)/g, '(window as any)');
      content = content.replace(/\(event: \)/g, '(event: any)');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixesApplied++;
        this.log(`Fixed type assertion syntax in ${filePath}`, 'success');
      }
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'error');
    }
  }

  async fixChatAssistantSyntax() {
    const filePath = path.join(this.projectRoot, 'src/components/ChatAssistant.tsx');
    if (!fs.existsSync(filePath)) return;

    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // Fix type assertion syntax errors
      content = content.replace(/\(window as \)/g, '(window as any)');
      content = content.replace(/\(event: \)/g, '(event: any)');
      content = content.replace(/metadata: /g, 'metadata: any');
      content = content.replace(/\(content: anystring\)/g, '(content: string)');
      content = content.replace(/id: anyDate\.now\(\)/g, 'id: Date.now()');

      // Fix malformed JSX closing tags
      content = content.replace(/<\/\s*$/gm, '</div>');
      content = content.replace(/>\s*<\/div>/g, '></div>');

      // Fix duplicate function declarations
      content = content.replace(/const clearChat = \(\) => \{[\s\S]*?\};[\s\S]*?const clearChat = \(\) => \{/g, 'const clearChat = () => {');
      content = content.replace(/const exportChat = \(\) => \{[\s\S]*?\};[\s\S]*?const exportChat = \(\) => \{/g, 'const exportChat = () => {');

      // Fix malformed useEffect dependency arrays
      content = content.replace(/}, \[theme\]\);[\s\S]*?const/g, '}, []);\n\n  const');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixesApplied++;
        this.log(`Fixed syntax errors in ${filePath}`, 'success');
      }
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'error');
    }
  }

  async fixPageSyntaxErrors() {
    const pagesDir = path.join(this.projectRoot, 'src/pages');
    if (!fs.existsSync(pagesDir)) return;

    const pageFiles = [
      'FAQ.tsx',
      'Careers.tsx',
      'Support.tsx'
    ];

    for (const fileName of pageFiles) {
      const filePath = path.join(pagesDir, fileName);
      if (!fs.existsSync(filePath)) continue;

      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Fix malformed JSX closing tags
        content = content.replace(/<\/\s*$/gm, '</div>');
        content = content.replace(/>\s*<\/div>/g, '></div>');
        content = content.replace(/export default [^;]+;>\s*$/gm, 'export default $1;');

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          this.fixesApplied++;
          this.log(`Fixed syntax errors in ${filePath}`, 'success');
        }
      } catch (error) {
        this.log(`Error fixing ${filePath}: ${error.message}`, 'error');
      }
    }
  }

  async run() {
    this.log('🚀 Starting Syntax Error Fixer...');
    
    try {
      await this.fixServiceWorkerSyntax();
      await this.fixChatAssistantSyntax();
      await this.fixPageSyntaxErrors();

      this.log(`✅ Syntax Error Fixer completed! Fixed ${this.fixesApplied} issues`, 'success');
      
      // Generate report
      const report = {
        timestamp: new Date().toISOString(),
        fixesApplied: this.fixesApplied,
        filesFixed: [
          'src/utils/serviceWorker.ts',
          'src/components/ChatAssistant.tsx',
          'src/pages/FAQ.tsx',
          'src/pages/Careers.tsx',
          'src/pages/Support.tsx'
        ]
      };

      fs.writeFileSync(
        path.join(this.projectRoot, 'syntax-error-fixer-report.json'),
        JSON.stringify(report, null, 2)
      );

      this.log('📊 Report generated: /workspace/syntax-error-fixer-report.json', 'info');
    } catch (error) {
      this.log(`❌ Syntax Error Fixer failed: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new SyntaxErrorFixer();
fixer.run();