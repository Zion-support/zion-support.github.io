#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class TestFileFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.testDir = path.join(this.projectRoot, '__tests__');
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    }
  getAllTestFiles() {
    const testFiles = [];
    const findTestFiles = (dir) => {
      if (!fs.existsSync(dir)) return;
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          findTestFiles(filePath)} else if (file.match(/\.(test|spec)\.(js|jsx|ts|tsx)$/)) {
          testFiles.push(filePath)}
      })};
    findTestFiles(this.testDir);
    return testFiles}
  fixTestFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;
      // Fix unterminated strings
      const unterminatedStringRegex = /import\s+.*?from\s+['"]([^'"]*?)['"]\s*['"]/g;
      if (unterminatedStringRegex.test(content)) {
        content = content.replace(unterminatedStringRegex, (match, importPath) => {
          return match.replace(/['"]\s*['"]$/, '"')});
        fixed = true}
      // Fix missing quotes in import statements
      const missingQuoteRegex = /import\s+.*?from\s+['"]([^'"]*?)['"]\s*$/gm;
      content = content.replace(missingQuoteRegex, (match) => {
        if (!match.endsWith('"') && !match.endsWith("'")) {
          return match + '"'}
        return match});
      // Fix JSX syntax issues
      const jsxIssues = [{ "pattern": /render\(<([^>]+)>\s*\)/g, "replacement": 'render(<$1 />)' },
        { "pattern": /expect\(screen\.getByTestId\('([^']+)'\)\)\.toBeInTheDocument\(\)/g, "replacement": 'expect(screen.getByTestId("$1")).toBeInTheDocument()' }
      ];
      jsxIssues.forEach(({ pattern, replacement }) => {
        if (pattern.test(content)) {
          content = content.replace(pattern, replacement);
          fixed = true}
      });
      // Fix component import names
      const componentImportRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g;
      content = content.replace(componentImportRegex, (match, componentName, importPath) => {
        // Fix common naming issues
        if (componentName.includes('test') && !componentName.endsWith('Test')) {
          const cleanName = componentName.replace(/test/g, '');
          return match.replace(componentName, cleanName)}
        return match});
      if (fixed) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`✅ "Fixed": ${path.relative(this.projectRoot, filePath)}`);
        return true}
      return false} catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}
  }
  createBasicTestTemplate(componentName, filePath) {
    const template = `import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ${componentName} from '../components/${componentName}';
describe('${componentName}', () => {
  test('renders without crashing', () => {
    render(<${componentName} />);
    expect(screen.getByRole('main')).toBeInTheDocument()});
  test('displays correct content', () => {
    render(<${componentName} />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
`;
    fs.writeFileSync(filePath, template, 'utf8');
    this.log(`✅ Created basic test "template": ${path.relative(this.projectRoot, filePath)}`)}
  async run() {
    this.log('🔧 Starting Test File Fixer');
    const testFiles = this.getAllTestFiles();
    this.log(`Found ${testFiles.length} test files`);
    let fixedCount = 0;
    let createdCount = 0;
    // Fix existing test files
    for (const filePath of testFiles) {
      if (this.fixTestFile(filePath)) {
        fixedCount++}
    }
    // Create missing test files for main components
    const mainComponents = ['Navigation',
      'SEO',
      'Button',
      'PageTransition'
    ];
    for (const component of mainComponents) {
      const testFilePath = path.join(this.testDir, `${component}.test.tsx`);
      if (!fs.existsSync(testFilePath)) {
        this.createBasicTestTemplate(component, testFilePath);
        createdCount++}
    }
    // Generate report
    const report = {
      "timestamp": new Date().toISOString(),
      "summary": {
        totalTestFiles: testFiles.length,
        "fixedFiles": fixedCount,
        "createdFiles": createdCount
      },
      "details": {
        fixedFiles: testFiles.filter(file => this.fixTestFile(file)),
        "createdFiles": mainComponents.filter(comp => {
          const testPath = path.join(this.testDir, `${comp}.test.tsx`);
          return !fs.existsSync(testPath)})
      }
    };
    const reportPath = path.join(this.reportsDir, 'test-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log("✅ Test File Fixer completed");
    this.log(`   "Fixed": ${fixedCount} files`);
    this.log(`   "Created": ${createdCount} files`);
    this.log(`   "Report": ${reportPath}`);
    return report}
}
// Run the fixer
if (require.main === module) {
  const fixer = new TestFileFixer();
  fixer.run().catch(console.error)}
module.exports = TestFileFixer;
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class TestFileFixer { constructor() { this.projectRoot = process.cwd();" this.testDir = path.join(this.projectRoot, "__tests__");" this.reportsDir = path.join(this.projectRoot, "automation-reports"); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] ${message}`)} getAllTestFiles() { const testFiles = []; const findTestFiles = (dir) => { if (!fs.existsSync(dir)) return; const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { findTestFiles(filePath)} else if (file.match(/\.(test|spec)\.(js|jsx|ts|tsx)$/)) { testFiles.push(filePath)} })}; findTestFiles(this.testDir); return testFiles} fixTestFile(filePath) { try {" let content = fs.readFileSync(filePath, "utf8"); let fixed = false; / Fix unterminated strings"" const unterminatedStringRegex = /import\s+.*?from\s+[""]([^""]*?)[""]\s*[""]/g; if (unterminatedStringRegex.test(content)) { content = content.replace(unterminatedStringRegex, (match, importPath) => {"" return match.replace(/[""]\s*[""]$/, """)}); fixed = true} / Fix missing quotes in import statements"" const missingQuoteRegex = /import\s+.*?from\s+[""]([^""]*?)[""]\s*$/gm; content = content.replace(missingQuoteRegex, (match) => {"" if (!match.endsWith(""") && !match.endsWith(""")) {"" return match + """} return match}); / Fix JSX syntax issues"" const jsxIssues = [{ pattern: /render\(<([^>]+)>\s*\)/g, replacement: "render(<$1 />)" },"" { pattern: /expect\(screen\.getByTestId\("([^"]+)"\)\)\.toBeInTheDocument\(\)/g, replacement: "expect(screen.getByTestId("$1")).toBeInTheDocument()" } ]; jsxIssues.forEach(({ pattern, replacement }) => { if (pattern.test(content)) { content = content.replace(pattern, replacement); fixed = true} }); / Fix component import names"" const componentImportRegex = /import\s+(\w+)\s+from\s+[""]([^""]+)[""]/g; content = content.replace(componentImportRegex, (match, componentName, importPath) => { / Fix common naming issues" if (componentName.includes("test") && !componentName.endsWith("Test")) {" const cleanName = componentName.replace(/test/g, ""); return match.replace(componentName, cleanName)} return match}); if (fixed) {" fs.writeFileSync(filePath, content, "utf8");"` this.log(` Fixed: ${path.relative(this.projectRoot, filePath)}`); return true} return false} catch (error) {` this.log(` Error fixing ${filePath}: ${error.message}`); return false} } createBasicTestTemplate(componentName, filePath) {"` const template = `import React from "react";"const { render, screen } from "@testing-library/react";"const "@testing-library/jest-dom";"const ${componentName} from "./components/${componentName}";"describe("${componentName}", () => {" test("renders without crashing", () => { render(<${componentName} />);" expect(screen.getByRole("main")).toBeInTheDocument()});" test("displays correct content", () => { render(<${componentName} />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});`;" fs.writeFileSync(filePath, template, "utf8");"` this.log(` Created basic test template: ${path.relative(this.projectRoot, filePath)}`)} async run() {" this.log(" Starting Test File Fixer"); const testFiles = this.getAllTestFiles();` this.log(`Found ${testFiles.length} test files`); let fixedCount = 0; let createdCount = 0; / Fix existing test files for (const filePath of testFiles) { if (this.fixTestFile(filePath)) { fixedCount++} } / Create missing test files for main components" const mainComponents = ["Navigation"," "SEO"," "Button"," "PageTransition" ]; for (const component of mainComponents) {` const testFilePath = path.join(this.testDir, `${component}.test.tsx`); if (!fs.existsSync(testFilePath)) { this.createBasicTestTemplate(component, testFilePath); createdCount++} } / Generate report const report = {" timestamp: new Date().toISOString()," summary: { totalTestFiles: testFiles.length," fixedFiles: fixedCount," createdFiles: createdCount }," details: { fixedFiles: testFiles.filter(file => this.fixTestFile(file))," createdFiles: mainComponents.filter(comp => {` const testPath = path.join(this.testDir, `${comp}.test.tsx`); return !fs.existsSync(testPath)}) } };" const reportPath = path.join(this.reportsDir, "test-fixer-report.json"); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));" this.log(" Test File Fixer completed");"` this.log(` Fixed: ${fixedCount} files`);"` this.log(` Created: ${createdCount} files`);"` this.log(` Report: ${reportPath}`); return report}}/ Run the fixerif (require.main === module) { const fixer = new TestFileFixer(); fixer.run().catch(console.error)}module.exports = TestFileFixer;""`"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.testDir = path.join(this.projectRoot, '__tests__')
    this.reportsDir = path.join(this.projectRoot, 'automation-reports')
      let content = fs.readFileSync(filePath, 'utf8')
      const unterminatedStringRegex = /import\s+.*?from\s+['"]([^'"]*?)['']
          return match.replace(/['"]\s*['"]$/, '')
      const missingQuoteRegex = /import\s+.*?from\s+['"]([^'')]
        if (!match.endsWith('"') && !match.endsWith(')
          return match + ''
      const jsxIssues = [{ "pattern": /render\(<([^>]+)>\s*\)/g, "replacement"}
        { "pattern": /expect\(screen\.getByTestId\('([^']+)'\)\)\.toBeInTheDocument\(\)/g, "replacement": 'expect(screen.getByTestId("$1"})
      const componentImportRegex = /import\s+(\w+)\s+from\s+['"]([^'')]
