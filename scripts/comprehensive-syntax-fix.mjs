#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

class ComprehensiveSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixTestFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // Fix common syntax errors
      content = content.replace(/jest\.moc\.k\(/g, 'jest.mock(');
      content = content.replace(/React\.ReactNod\.e/g, 'React.ReactNode');
      content = content.replace(/childre n/g, 'children');
      content = content.replace(/< \/>/g, '</>');
      content = content.replace(/describe\('([^']+)'\(\) => \{/g, "describe('$1', () => {");
      content = content.replace(/it\('([^']+)'\(\) => \{/g, "it('$1', () => {");
      content = content.replace(/seoData={mockSEODat a}/g, 'seoData={mockSEOData}');
      content = content.replace(/keywords: \['test', 'seo''optimization'\]/g, "keywords: ['test', 'seo', 'optimization']");
      content = content.replace(/'@context': 'https:\/\/schema\.or\.g''@type': 'WebPage'name: 'Test Page'/g, "'@context': 'https://schema.org', '@type': 'WebPage', 'name': 'Test Page'");
      content = content.replace(/expect\(document\.tit\.l, e\)\.toB\.e\(mockSEOData\.tit\.l, e\);/g, 'expect(document.title).toBe(mockSEOData.title);');
      content = content.replace(/expect\(metaDescriptio, n\)\.toHaveAttribut\.e\('content'mockSEOData\.descripti\.o, n\);/g, "expect(metaDescription).toHaveAttribute('content', mockSEOData.description);");
      content = content.replace(/expect\(canonica, l\)\.toHaveAttribut\.e\('href'mockSEOData\.canonic\.a, l\);/g, "expect(canonical).toHaveAttribute('href', mockSEOData.canonical);");
      content = content.replace(/width={10 0}/g, 'width={100}');
      content = content.replace(/height={5 0}/g, 'height={50}');
      content = content.replace(/rounded={fals e}/g, 'rounded={false}');
      content = content.replace(/animate={fals e}/g, 'animate={false}');
      content = content.replace(/expect\(skeleto, n\)\.no\.t\.toHaveClas\.s\('rounded''animate-pulse'\);/g, "expect(skeleton).not.toHaveClass('rounded', 'animate-pulse');");
      content = content.replace(/expect\(spinne, r\)\.toHaveClas\.s\('animate-spin''w-8''h-8'\);/g, "expect(spinner).toHaveClass('animate-spin', 'w-8', 'h-8');");
      content = content.replace(/expect\(spinne, r\)\.toHaveClas\.s\('w-12''h-12'\);/g, "expect(spinner).toHaveClass('w-12', 'h-12');");
      content = content.replace(/it\('handles cache clearing'async \(\) => \{/g, "it('handles cache clearing', async () => {");
      content = content.replace(/it\('handles cache optimization'async \(\) => \{/g, "it('handles cache optimization', async () => {");
      content = content.replace(/await waitFor\(\(\) = > \{/g, 'await waitFor(() => {');
      content = content.replace(/expect\(clearButto, n\)\.no\.t\.toBeDisable\.d\(\);/g, 'expect(clearButton).not.toBeDisabled();');
      content = content.replace(/expect\(screen\.getByTex\.t\('Optimization Strategies Applied: '\)\)\.toBeInTheDocumen\.t\(\);/g, "expect(screen.getByText('Optimization Strategies Applied: ')).toBeInTheDocument();");
      content = content.replace(/expect\(screen\.getByText\(\/ARIA labels and roles\/\)\)\.toBeInTheDocument\(\);  \}\);/g, "expect(screen.getByText(/ARIA labels and roles/)).toBeInTheDocument();");
      content = content.replace(/it\('all components work together without conflicts'\(\) => \{/g, "it('all components work together without conflicts', () => {");
      content = content.replace(/<SEOOptimizer seoData={mockSEODat a} \/>/g, '<SEOOptimizer seoData={mockSEOData} />');
      
      // Fix more specific errors
      content = content.replace(/ok: truejso, n: \(\) = > Promise\.resolv\.e\(\{\}\)\}/g, 'ok: true, json: () => Promise.resolve({})}');
      content = content.replace(/jest\.spyO\.n\(console'error'\)\.mockImplementatio\.n\(\(\) => \{\}\);/g, "jest.spyOn(console, 'error').mockImplementation(() => {});");
      content = content.replace(/shouldError={tru e}/g, 'shouldError={true}');
      content = content.replace(/shouldError={fals e}/g, 'shouldError={false}');
      content = content.replace(/shouldThrow={tru e}/g, 'shouldThrow={true}');
      content = content.replace(/shouldThrow={fals e}/g, 'shouldThrow={false}');
      content = content.replace(/it\('should render accessibility panel when Alt\+A is pressed'async \(\) => \{/g, "it('should render accessibility panel when Alt+A is pressed', async () => {");
      content = content.replace(/it\('should toggle accessibility settings'async \(\) => \{/g, "it('should toggle accessibility settings', async () => {");
      content = content.replace(/it\('should close panel when close button is clicked'async \(\) => \{/g, "it('should close panel when close button is clicked', async () => {");
      content = content.replace(/onMetricsUpdate={mockOnMetricsUpdat e}/g, 'onMetricsUpdate={mockOnMetricsUpdate}');
      content = content.replace(/enableRealTimeMonitoring={tru e}/g, 'enableRealTimeMonitoring={true}');
      content = content.replace(/enableMemoryTracking={tru e}/g, 'enableMemoryTracking={true}');
      content = content.replace(/enableNetworkTracking={tru e}/g, 'enableNetworkTracking={true}');
      content = content.replace(/it\('changes theme when clicked'async \(\) => \{/g, "it('changes theme when clicked', async () => {");
      content = content.replace(/expect\(skeleto, n\)\.toHaveClas\.s\('bg-gray-200''rounded''animate-pulse'\);/g, "expect(skeleton).toHaveClass('bg-gray-200', 'rounded', 'animate-pulse');");

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed syntax errors in: ${filePath}`);
      }
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      this.errors.push(`${filePath}: ${error.message}`);
    }
  }

  async fixAllTestFiles() {
    this.log('🔧 Starting comprehensive syntax error fixes...');
    
    try {
      const testFiles = await glob('src/components/__tests__/*.test.tsx');
      
      for (const file of testFiles) {
        this.fixTestFile(file);
      }
      
      this.log(`✅ Fixed ${this.fixedFiles.length} test files`);
      
      if (this.errors.length > 0) {
        this.log(`❌ ${this.errors.length} errors encountered`);
        this.errors.forEach(error => this.log(`  - ${error}`));
      }
      
    } catch (error) {
      this.log(`❌ Error processing test files: ${error.message}`);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      summary: {
        totalFixed: this.fixedFiles.length,
        totalErrors: this.errors.length
      }
    };
    
    fs.writeFileSync('comprehensive-syntax-fix-report.json', JSON.stringify(report, null, 2));
    this.log('📊 Comprehensive syntax fix report generated');
  }

  async run() {
    this.log('🚀 Starting comprehensive syntax error fixes...');
    
    await this.fixAllTestFiles();
    await this.generateReport();
    
    this.log('✅ Comprehensive syntax error fixes completed!');
  }
}

const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);