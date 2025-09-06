#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class FinalSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixFileContent(content, filePath) {
    let fixed = content;
    const originalContent = content;

    // Fix missing closing tags in JSX
    fixed = fixed.replace(/<h3([^>]*)>([^<]*?)(?=\s*<p)/g, '<h3$1>$2</h3>');
    fixed = fixed.replace(/<h3([^>]*)>([^<]*?)(?=\s*<div)/g, '<h3$1>$2</h3>');
    fixed = fixed.replace(/<h3([^>]*)>([^<]*?)(?=\s*<Button)/g, '<h3$1>$2</h3>');
    
    // Fix malformed JSX structure
    fixed = fixed.replace(/<h3([^>]*)>([^<]*?)(?=\s*<p[^>]*>)/g, '<h3$1>$2</h3>');
    fixed = fixed.replace(/<h3([^>]*)>([^<]*?)(?=\s*<div[^>]*>)/g, '<h3$1>$2</h3>');
    
    // Fix missing closing tags in specific patterns
    fixed = fixed.replace(/<h3 className="font-medium mb-2">([^<]*?)(?=\s*<div)/g, '<h3 className="font-medium mb-2">$1</h3>');
    fixed = fixed.replace(/<h3 className="font-semibold text-white">([^<]*?)(?=\s*<p)/g, '<h3 className="font-semibold text-white">$1</h3>');
    fixed = fixed.replace(/<h3 className="text-xl font-bold mb-4">([^<]*?)(?=\s*<div)/g, '<h3 className="text-xl font-bold mb-4">$1</h3>');
    
    // Fix malformed JSX closing tags
    fixed = fixed.replace(/<\/ActiveFiltersBar>/g, '');
    fixed = fixed.replace(/<\/FilterSidebar>/g, '');
    
    // Fix malformed function calls
    fixed = fixed.replace(/fetchSavedTalents\(\);\s*}, \[user\]\);/g, 'fetchSavedTalents();\n    }, [user]);');
    
    // Fix malformed JSX structure
    fixed = fixed.replace(/<\/main>\)\}/g, '</main>');
    fixed = fixed.replace(/<\/div>\)\}/g, '</div>');
    fixed = fixed.replace(/<\/>\}\)/g, '</>');
    
    // Fix missing semicolons
    fixed = fixed.replace(/}\s*fetchSavedTalents\(\);\s*}, \[user\]\);/g, '}\n    fetchSavedTalents();\n    }, [user]);');
    
    // Fix malformed JSX attributes
    fixed = fixed.replace(/disabled\s*=\s*\{!enableBackup\}>/g, 'disabled={!enableBackup}>');
    
    // Fix malformed JSX structure in specific files
    if (filePath.includes('AccountSettings')) {
      fixed = fixed.replace(/<h3 className="font-medium mb-2">Recovery Options\s*<Button/g, '<h3 className="font-medium mb-2">Recovery Options</h3>\n                    <Button');
    }
    
    if (filePath.includes('ComprehensiveContact')) {
      fixed = fixed.replace(/<h3 className="font-semibold text-white">Address\s*<p/g, '<h3 className="font-semibold text-white">Address</h3>\n                    <p');
    }
    
    if (filePath.includes('ComprehensiveServicesShowcase')) {
      fixed = fixed.replace(/<h3 className="text-xl font-bold mb-4">Pricing\s*& Details\s*<div/g, '<h3 className="text-xl font-bold mb-4">Pricing & Details</h3>\n                          <div');
    }
    
    if (filePath.includes('Marketplace')) {
      fixed = fixed.replace(/<\/main>\)\}/g, '</main>');
      fixed = fixed.replace(/<\/ActiveFiltersBar>/g, '');
      fixed = fixed.replace(/<\/FilterSidebar>/g, '');
    }
    
    if (filePath.includes('SavedTalentsPage')) {
      fixed = fixed.replace(/}\s*fetchSavedTalents\(\);\s*}, \[user\]\);/g, '}\n    fetchSavedTalents();\n    }, [user]);');
      fixed = fixed.replace(/<\/>\}\)/g, '</>');
    }

    return fixed;
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = this.fixFileContent(content, filePath);
      
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixSpecificFiles() {
    const filesToFix = [
      'src/pages/AccountSettings.js.jsx',
      'src/pages/ComprehensiveContact.js.jsx',
      'src/pages/ComprehensiveServicesShowcase.tsx',
      'src/pages/Marketplace.js.jsx',
      'src/pages/SavedTalentsPage.js.jsx'
    ];
    
    for (const file of filesToFix) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        await this.fixFile(filePath);
      }
    }
  }

  async run() {
    this.log('🚀 Starting Final Syntax Fixer');
    
    await this.fixSpecificFiles();
    
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'final-syntax-fix-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log(`🎉 Final Syntax Fix Complete!`);
    this.log(`📊 Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} errors encountered`);
  }
}

// Run the fixer
const fixer = new FinalSyntaxFixer();
fixer.run().catch(console.error);