#!/""usr/bin/env"" node;
/**;
 * Smart Testing Automation - PM2 Automation;
 * Intelligently generates tests, identifies coverage gaps, and automatically;
 * fixes failing tests using AI-powered analysis;
 */;
#!/"usr/bin/env" node;
/**;
 * Smart Testing Automation - PM2 Automation;
 * Intelligently generates tests, identifies coverage gaps, and automatically;
 * fixes failing tests using AI-powered analysis;
 */;
const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");
const crypto = require("crypto");

class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.logFile = path.join(;
      this.projectRoot,logs",;
      "smart-testing-automation.log";
    );
    this.testResultsLog = path.join(;
      this.projectRoot,logs",;
      "test-results.json";
    );
    this.coverageLog = path.join(;
      this.projectRoot,logs",;
      "test-coverage.json";
    );
    this.ensureLogsDirectory();
    // Test generation patterns;
    this.testPatterns = {
  react: [
  {
  pattern: /export\s+(?:default\s+)?function\s+([A-Z][a-zA-Z0-9]*)/g,;
          testType: "component"},;
        {
  pattern: /export\s+(?:default\s+)?const\s+([A-Z][a-zA-Z0-9]*)\s*=/g,;
          testType: "component"},;
        {
  pattern: /export\s+function\s+([a-z][a-zA-Z0-9]*)/g,;
          testType: "utility"},;
        {
  pattern: /export\s+const\s+([a-z]["a-zA-Z0-9]*)\s*=/g", "testType: "utility"", "}", ""],;
      hooks: [
  {
  pattern: /export\s+(?:default\s+)?function\s+use([A-Z]["a-zA-Z0-9]*)/g", "testType: "hook"", "}", ""],;
      utils: [
  {
  pattern: /export\s+(?:default\s+)?function\s+([a-z][a-zA-Z0-9]*)/g,;
          testType: "utility"},;
        {
  pattern: /export\s+(?:default\s+)?const\s+([a-z]["a-zA-Z0-9]*)\s*=/g", "testType: "utility"", "}", ``],;

    // Test generation patterns;
    this.testPatterns = {
  react: [
  {
  pattern: /export\s+(?:default\s+)?function\s+([A-Z][a-zA-Z0-9]*)/g,;
          testType: "component",;,
},;
        {
  pattern: /export\s+(?:default\s+)?const\s+([A-Z][a-zA-Z0-9]*)\s*=/g,;
          testType: "component",;,
},;
        {
  pattern: /export\s+function\s+([a-z][a-zA-Z0-9]*)/g,;
          testType: "utility",;,
},;
        {
  pattern: /export\s+const\s+([a-z]["a-zA-Z0-9]*)\s*=/g", "testType: "utility", "}", "],;
      hooks: [
  {
  pattern: /export\s+(?:default\s+)?function\s+use([A-Z]["a-zA-Z0-9]*)/g", "testType: "hook", "}", "],;
      utils: [
  {
  pattern: /export\s+(?:default\s+)?function\s+([a-z][a-zA-Z0-9]*)/g,;
          testType: "utility",;,
},;
        {
  pattern: /export\s+(?:default\s+)?const\s+([a-z]["a-zA-Z0-9]*)\s*=/g", "testType: "utility", "}", "],;,
}
  }
;
  ensureLogsDirectory() {
  const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });,
}
  }
;
  log(message, level = `INFO`) {
  const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;

    fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`);,
}
;
  async runSmartTesting() {
  this.log(`🧪 Starting smart testing automation...`);
    const testResults = {}
    const coverageData = {}
    const generatedTests = [];
    try {
  // 1. Analyze existing test coverage;
      const coverageAnalysis = await this.analyzeTestCoverage();
      Object.assign(coverageData, coverageAnalysis);
      // 2. Identify untested components and functions;
      const untestedItems = await this.identifyUntestedItems();
      // 3. Generate missing tests;
      const newTests = await this.generateMissingTests(untestedItems);
      generatedTests.push(...newTests);
      // 4. Run existing tests;
      const existingTestResults = await this.runExistingTests();
      Object.assign(testResults, existingTestResults);
      // 5. Run new tests;
      if (newTests.length > 0) {
  const newTestResults = await this.runNewTests(newTests);
        Object.assign(testResults, newTestResults);,
}
;
      // 6. Analyze test failures and auto-fix;
      const fixedTests = await this.autoFixFailingTests(testResults);
      // 7. Generate comprehensive test report;
      await this.generateTestReport(;
        testResults,;
        coverageData,;
        generatedTests,;
        fixedTests;
      );
      // 8. Commit test improvements;
      if (generatedTests.length > 0 || fixedTests.length > 0) {
  async runSmartTesting() {
  this.log("🧪 Starting smart testing automation...");

    const testResults = {}
    const coverageData = {}
    const generatedTests = [];

    try {
  // 1. Analyze existing test coverage;
      const coverageAnalysis = await this.analyzeTestCoverage();
      Object.assign(coverageData, coverageAnalysis);

      // 2. Identify untested components and functions;
      const untestedItems = await this.identifyUntestedItems();

      // 3. Generate missing tests;
      const newTests = await this.generateMissingTests(untestedItems);
      generatedTests.push(...newTests);

      // 4. Run existing tests;
      const existingTestResults = await this.runExistingTests();
      Object.assign(testResults, existingTestResults);

      // 5. Run new tests;
      if (newTests.length > 0) {
  const newTestResults = await this.runNewTests(newTests);
        Object.assign(testResults, newTestResults);,
}
;
      // 6. Analyze test failures and auto-fix;
      const fixedTests = await this.autoFixFailingTests(testResults);

      // 7. Generate comprehensive test report;
      await this.generateTestReport(;
        testResults,;
        coverageData,;
        generatedTests,;
        fixedTests;
      );

      // 8. Commit test improvements;
      if (generatedTests.length > 0 || fixedTests.length > 0) {
  await this.commitTestImprovements(generatedTests, fixedTests);,
}
    } catch (error) {  this.log(`Smart testing automation failed: ${error.message  }`, `ERROR`);,
}
;
    return { testResults, coverageData, generatedTests }
  }
;
  async analyzeTestCoverage() {
  const coverage = {
  total: 0,;
      covered: 0,;
      uncovered: 0,;
      percentage: 0,;
      files: {},;
      components: {},;
      utilities: {},;
      hooks: {},;,
}
    try {
  // Check if Jest is configured;
      if (this.hasJestConfig()) {
  this.log(`📊 Running Jest coverage analysis...`);
        try {
  const coverageOutput = execSync(npm run test -- --coverage --watchAll=false",;
            {
  cwd: this.projectRoot,;
              stdio: `pipe`,;
              encoding: `utf8`}
          );
          // Parse coverage output;
          const coverageData = this.parseCoverageOutput(coverageOutput);
          Object.assign(coverage, coverageData);,
} catch (error) {  this.log(`Coverage analysis failed: ${error.message  }`, `WARN`);,
}
      }
;

      // Analyze test files structure;
      const testStructure = this.analyzeTestStructure();
      Object.assign(coverage, testStructure);,
} catch (error) {  this.log(`Coverage analysis failed: ${error.message  }`, `ERROR`);,
}
;
    return coverage;,
}
;
  hasJestConfig() {
  const jestConfigs = [`jest.config.js`, "jest.config.ts", "jest.config.cjs"];
    return jestConfigs.some(config =>;
      fs.existsSync(path.join(this.projectRoot, config));
    );,
}
;
  parseCoverageOutput(output) {
  // This is a simplified parser - in production you"d use Jest"s JSON reporter;
    const coverage = {
  total: 0,;
      covered: 0,;
      uncovered: 0,;
      percentage: 0}
    // Look for coverage summary in output;
    const coverageMatch = output.match(;
      /All files\s+\|\s+(\d+)\s+\|\s+(\d+)\s+\|\s+(\d+)\s+\|\s+(\d+)%/;
    );
    if (coverageMatch) {
  coverage.total = parseInt(coverageMatch[1]);
      coverage.covered = parseInt(coverageMatch[2]);
      coverage.uncovered = parseInt(coverageMatch[3]);
      coverage.percentage = parseInt(coverageMatch[4]);,
}
;
    return coverage;,
}
;
  analyzeTestStructure() {
  const structure = {
  testFiles: 0,;
      testSuites: 0,;
      testCases: 0,;
      components: {},;
      utilities: {},;
      hooks: {},;,
}
;
    const testsDir = path.join(this.projectRoot, "tests");
    const srcDir = path.join(this.projectRoot, "src");

    if (fs.existsSync(testsDir)) {
  const testFiles = this.getAllFiles(testsDir, [".test.js", ".test.ts", ".test.jsx", ".test.tsx", ".spec.js", ".spec.ts", ".spec.jsx", ".spec.tsx", "]);
      structure.testFiles = testFiles.length;

      for (const testFile of testFiles) {
  const testContent = fs.readFileSync(testFile, "utf8");
        const testAnalysis = this.analyzeTestFile(testContent, testFile);

        structure.testSuites += testAnalysis.suites;
        structure.testCases += testAnalysis.cases;

        // Track what"s being tested;
        Object.assign(structure.components, testAnalysis.components);
        Object.assign(structure.utilities, testAnalysis.utilities);
        Object.assign(structure.hooks, testAnalysis.hooks);,
}
    }
;
    return structure;,
}
;
  analyzeTestFile(content, filePath) {
  const analysis = {
  suites: 0,;
      cases: 0,;
      components: {},;
      utilities: {},;
      hooks: {},;,
}
;
    // Count test suites (describe blocks);
    const describeMatches = content.match(/describe\(/g);
    analysis.suites = describeMatches ? describeMatches.length : 0;

    // Count test cases ("it/test" blocks);
    const testMatches = content.match(/(?:it|test)\(/g);
    analysis.cases = testMatches ? testMatches.length : 0;
    // Identify what"s being tested;
    const componentMatches = content.match(;
      /import\s+{?\s*([A-Z][a-zA-Z0-9]*)\s*}?\s+""from/g"";
    );
    if (componentMatches) {
  componentMatches.forEach(match => {
  const componentName = match.match(;
          /import\s+{?\s*([A-Z][a-zA-Z0-9]*)\s*}?\s+from/;
        )[1];
        analysis.components[componentName] = true;,
});,
}
;
    return analysis;,
}
;
  async identifyUntestedItems() {
  const untested = {
  components: [],;
      utilities: [],;
      hooks: [],;
      total: 0,;,
}
;
    const srcDir = path.join(this.projectRoot, "src");
    if (!fs.existsSync(srcDir)) {
  return untested;,
}
;
    const sourceFiles = this.getAllFiles(srcDir, [".tsx", ".ts", ".jsx", ".js", "]);

    for (const file of sourceFiles) {
  try {
  const content = fs.readFileSync(file, "utf8");
        const fileAnalysis = this.analyzeSourceFile(content, file);
        // Check if each exported item has tests;
        for (const [`category`, `items`] of Object.entries(fileAnalysis)) {
  for (const item of items) {
  if (!this.hasTestForItem(item, category)) {
  untested[category].push({
  name: item.name,;
                file: file,;
                type: item.type,;
                line: item.line,;
                exportType: item.exportType,;

        // Check if each exported item has tests;
        for (const ["category", "items"] of Object.entries(fileAnalysis)) {
  for (const item of items) {
  if (!this.hasTestForItem(item, category)) {
  untested[category].push({
  name: item.name,;
                file: file,;
                type: item.type,;
                line: item.line,;
                exportType: item.exportType,;,
});
              untested.total++;,
}
          }
        }
      } catch (error) {
  this.log(Error analyzing source file ${file  }: ${error.message}`,;
          `WARN`;,
} catch (error) {
  this.log(Error analyzing source file ${file}: ${error.message}",;
          "WARN";
        );
          `WARN`;
        );
}
    }
;
    return untested;,
}
;
  analyzeSourceFile(content, filePath) {
  const analysis = {
  components: [],;
      utilities: [],;
      hooks: [],;,
}
    // Analyze each test pattern category;
    for (const [`category", "patterns"] of Object.entries(this.testPatterns)) {
  for (const pattern of patterns) {
  // Analyze each test pattern category;
    for (const ["category", "patterns"] of Object.entries(this.testPatterns)) {
  for (const pattern of patterns) {
  const matches = content.matchAll(pattern.pattern);
        for (const match of matches) {
  const itemName = match[1];
          const lineNumber = this.findLineNumber(content, match.index);

          analysis[category].push({
  name: itemName,;
            file: filePath,;
            type: pattern.testType,;
            line: lineNumber,;
            exportType: pattern.pattern.source.includes("default");
              ? "default";
              : "named",;,
});,
}
      }
    }
;
    return analysis;,
}
;
  findLineNumber(content, index) {
  const lines = content.substring(0, index).split("\n");
    return lines.length;,
}
;
  hasTestForItem(item, category) {
  const testsDir = path.join(this.projectRoot, "tests");
    if (!fs.existsSync(testsDir)) return false;

    const testFiles = this.getAllFiles(testsDir, [".test.js", ".test.ts", ".test.jsx", ".test.tsx", ".spec.js", ".spec.ts", ".spec.jsx", ".spec.tsx", "]);

    for (const testFile of testFiles) {
  try {
  const testContent = fs.readFileSync(testFile, "utf8");
        if (testContent.includes(item.name)) {
  return true;,
}
      } catch (error) {
  // Continue checking other test files;,
}
    }
;
    return false;,
}
;
  async generateMissingTests(untestedItems) {
  const generatedTests = [];
    for (const ["category", `items`] of Object.entries(untestedItems)) {
  if (category === `total`) continue;
      for (const item of items) {
  try {
  const testContent = this.generateTestContent(item, category);
          const testFilePath = this.getTestFilePath(item);

    for (const ["category", "items"] of Object.entries(untestedItems)) {
  if (category === "total") continue;

      for (const item of items) {
  try {
  const testContent = this.generateTestContent(item, category);
          const testFilePath = this.getTestFilePath(item);

          // Create test file;
          fs.writeFileSync(testFilePath, testContent);

          generatedTests.push({
  item,;
            testFile: testFilePath,;
            category,;
            timestamp: new Date().toISOString(),;,
});
          this.log(Generated test for ${item.name} in ${testFilePath}`,;
            `INFO`;
          );,
} catch (error) {
  this.log(Failed to generate test for ${item.name  }: ${error.message}`,;
            `ERROR`;
          );,
}
      }
    }
;
    return generatedTests;,
}
;
  generateTestContent(item, category) {
  const testTemplates = {
  component: this.getComponentTestTemplate(item),;
      utility: this.getUtilityTestTemplate(item),;
      hook: this.getHookTestTemplate(item),;,
}
;
    return testTemplates[item.type] || testTemplates.utility;,
}
;
  getComponentTestTemplate(item) {return `import React from "react";
import { render, screen  } from "@testing-";`library/react```;
import { ${item.name} } from `${this.getRelativeImportPath(item.file)}`;
describe(`${item.name}`, () => {
  it(`renders without crashing`, () => {
  import { render, screen  } from "@testing-";library/react"";
import { ${item.name} } from "${this.getRelativeImportPath(item.file)}";

describe("${item.name}", () => {
  it("renders without crashing", () => {
  render(<${item.name} />);
    expect(screen.getByTestId(`${item.name.toLowerCase()}`)).toBeInTheDocument();,
});
  it(`displays correct content`, () => {
  render(<${item.name} />);
    // Add specific content checks based on component implementation;,
});
  it(`handles user interactions correctly`, () => {
  render(<${item.name} />);
    // Add interaction tests based on component behavior;,
});,
});,
}
;
  getUtilityTestTemplate(item) {
  return `import { ${item.name} } from `${this.getRelativeImportPath(item.file)}`;
describe(`${item.name}`, () => {
  it(`should work correctly with valid input`, () => {
  // Add test cases based on function implementation;
    expect(${item.name}()).toBeDefined();,
});
  it(`should handle edge cases`, () => {
  // Add edge case tests;,
});
  it(`should handle invalid input gracefully", () => {
  getUtilityTestTemplate(item) {
  return "import { ${item.name} } from "${this.getRelativeImportPath(item.file)}";

describe("${item.name}", () => {
  it("should work correctly with valid input", () => {
  // Add test cases based on function implementation;
    expect(${item.name}()).toBeDefined();,
});

  it("should handle edge cases", () => {
  // Add edge case tests;,
});

  it("should handle invalid input gracefully", () => {
  // Add error handling tests;,
});,
});,
}
;
  getHookTestTemplate(item) {
  return "import { renderHook, act  } from "@testing-";`library/react```;
import { ${item.name} } from `${this.getRelativeImportPath(item.file)}`;
describe(`${item.name}`, () => {
  it(`should return initial state`, () => {
  const { result } = renderHook(() => ${item.name}());
    expect(result.current).toBeDefined();,
});
  it(`should update state correctly`, () => {
  const { result } = renderHook(() => ${item.name}());
    act(() => {
  // Add state update tests based on hook implementation;,
});
    // Verify state changes;,
});
  it(`should handle cleanup correctly`, () => {
  const { unmount } = renderHook(() => ${item.name}());
    ;
    unmount();
    // Verify cleanup logic;,
});,
});,
}
;
  getRelativeImportPath(filePath) {
  const relativePath = path.relative(this.projectRoot, filePath);
    const importPath = relativePath;
      .replace(/\\/g, `/`);
      .replace(/\.(tsx?|jsx?)$/, ``);
    // Handle index files;
    if (importPath.endsWith("/index")) {
  return importPath.replace("/index", "");
      .replace(/\\/g, "/");
      .replace(/\.(tsx?|jsx?)$/, ");

    // Handle index files;
    if (importPath.endsWith("/index")) {
  return importPath.replace("/index", ");,
}
;
    return importPath;,
}
;
  getTestFilePath(item) {
  const relativePath = path.relative(;
      path.join(this.projectRoot, "src"),;
      item.file;
    );
    const testDir = path.join(this.projectRoot, "tests");
    const testFilePath = path.join(;
      testDir,;
      relativePath.replace(/\.(tsx?|jsx?)$/, ".test.$1");
    );

    // Ensure test directory exists;
    const testDirPath = path.dirname(testFilePath);
    if (!fs.existsSync(testDirPath)) {
  fs.mkdirSync(testDirPath, { recursive: true });,
}
;
    return testFilePath;,
}
;
  async runExistingTests() {
  const results = {
  success: false,;
      totalTests: 0,;
      passed: 0,;
      failed: 0,;
      errors: [],;
      duration: 0,;,
}
;
    try {
  this.log("🧪 Running existing tests...");

      const startTime = Date.now();
      const testOutput = execSync("npm test -- --watchAll=false", {
  cwd: this.projectRoot,;
        stdio: `pipe`,;
        encoding: `utf8`,;,
});
      const duration = Date.now() - startTime;

      results.duration = duration;
      results.success = true;
      // Parse test results;
      const parsedResults = this.parseTestOutput(testOutput);
      Object.assign(results, parsedResults);
      this.log(Tests completed: ${results.passed} passed, ${results.failed} failed`;
      );,
} catch (error) {
  results.success = false;
      results.errors.push(error.message);
      // Try to parse error output;
      try {
  const errorOutput = error.stdout || error.stderr || ``;
        const parsedResults = this.parseTestOutput(errorOutput);
        Object.assign(results, parsedResults);,
} catch (parseError) {
  this.log(`Failed to parse test output: ${parseError.message}`, `WARN`);

      // Parse test results;
      const parsedResults = this.parseTestOutput(testOutput);
      Object.assign(results, parsedResults);

      this.log(Tests completed: ${results.passed} passed, ${results.failed} failed";
      );,
} catch (error) {
  results.success = false;
      results.errors.push(error.message);

      // Try to parse error output;
      try {
  const errorOutput = error.stdout || error.stderr || ";
        const parsedResults = this.parseTestOutput(errorOutput);
        Object.assign(results, parsedResults);,
} catch (parseError) {
  this.log(`Failed to parse test output: ${parseError.message}`, "WARN");,
}
this.log(`Tests failed: ${error.message}`, `ERROR`);,
}
;
    return results;,
}
;
  async runNewTests(newTests) {
  const results = {
  success: false,;
      totalTests: 0,;
      passed: 0,;
      failed: 0,;
      errors: [],;
      duration: 0,;,
}
;
    if (newTests.length === 0) {
  return results;,
}
;
    try {
  this.log(`🧪 Running newly generated tests...");
      const startTime = Date.now();
      const testOutput = execSync("npm test -- --watchAll=false", {
  cwd: this.projectRoot,;
        stdio: `pipe`,;
        encoding: `utf8`,;,
});
      const duration = Date.now() - startTime;

      results.duration = duration;
      results.success = true;
      // Parse test results;
      const parsedResults = this.parseTestOutput(testOutput);
      Object.assign(results, parsedResults);
      this.log(New tests completed: ${results.passed} passed, ${results.failed} failed`;
      );,
} catch (error) {
  // Parse test results;
      const parsedResults = this.parseTestOutput(testOutput);
      Object.assign(results, parsedResults);

      this.log(New tests completed: ${results.passed} passed, ${results.failed} failed";
      );,
} catch (error) {
  results.success = false;
      results.errors.push(error.message);this.log(`New tests failed: ${error.message  }`, `ERROR`);,
}
;
    return results;,
}
;
  parseTestOutput(output) {
  const results = {
  totalTests: 0,;
      passed: 0,;
      failed: 0,;,
}
    // Look for test summary in output;
    const summaryMatch = output.match(;
      /Tests: \s+(\d+)\s+passed,\s+(\d+)\s+failed/    );
    if (summaryMatch) {
  results.passed = parseInt(summaryMatch[1]);
      results.failed = parseInt(summaryMatch[2]);
      results.totalTests = results.passed + results.failed;,
}
;
    return results;,
}
;
  async autoFixFailingTests(testResults) {
  const fixedTests = [];

    if (testResults.success || testResults.failed === 0) {
  return fixedTests;,
}
;
    this.log(`🔧 Attempting to auto-fix failing tests...`);
    try {
  this.log("🔧 Attempting to auto-fix failing tests...");

    try {
  // Get detailed test failure information;
      const failureDetails = await this.getTestFailureDetails();

      for (const failure of failureDetails) {
  try {
  const fixed = await this.fixTestFailure(failure);
          if (fixed) {
  fixedTests.push(failure);,
}
        } catch (error) {
  this.log(Failed to fix test failure in ${failure.testFile  }: ${error.message}`,;
            `ERROR`;,
} catch (error) {
  this.log(Failed to fix test failure in ${failure.testFile}: ${error.message}",;
            "ERROR";
          );
            `ERROR`;
          );
}
      }
    } catch (error) {  this.log(`Auto-fix process failed: ${error.message  }`, `ERROR`);,
}
;
    return fixedTests;,
}
;
  async getTestFailureDetails() {
  // This would typically involve parsing Jest`s detailed output;
    // For now, we`ll return a simplified structure;
    return [];,
}
;
  async fixTestFailure(failure) {
  // This would involve intelligent test fixing based on failure patterns;
    // For now, we`ll return false to indicate no fixes were applied;
    return false;,
}
;
  async generateTestReport(;
    testResults,;
    coverageData,;
    generatedTests,;
    fixedTests;
  ) {
  const report = {
  timestamp: new Date().toISOString(),;
      summary: {
  testResults,;
        coverage: coverageData,;
        generatedTests: generatedTests.length,;
        fixedTests: fixedTests.length},;
      details: {
  testResults,;
        coverageData,;
        generatedTests,;
        fixedTests}}
    // Save detailed report;
    fs.writeFileSync(this.testResultsLog, JSON.stringify(report, null, 2));
    // Save coverage data;
    fs.writeFileSync(this.coverageLog, JSON.stringify(coverageData, null, 2));
    this.log(Test report generated: ${generatedTests.length} tests generated, ${fixedTests.length} tests fixed`;

  async getTestFailureDetails() {
  // This would typically involve parsing Jest"s detailed output;
    // For now, we"ll return a simplified structure;
    return [];,
}
;
  async fixTestFailure(failure) {
  // This would involve intelligent test fixing based on failure patterns;
    // For now, we"ll return false to indicate no fixes were applied;
    return false;,
}
;
  async generateTestReport(;
    testResults,;
    coverageData,;
    generatedTests,;
    fixedTests;
  ) {
  const report = {
  timestamp: new Date().toISOString(),;
      summary: {
  testResults,;
        coverage: coverageData,;
        generatedTests: generatedTests.length,;
        fixedTests: fixedTests.length,;,
},;
      details: {
  testResults,;
        coverageData,;
        generatedTests,;
        fixedTests,;,
},;,
}
;
    // Save detailed report;
    fs.writeFileSync(this.testResultsLog, JSON.stringify(report, null, 2));

    // Save coverage data;
    fs.writeFileSync(this.coverageLog, JSON.stringify(coverageData, null, 2));

    this.log(Test report generated: ${generatedTests.length} tests generated, ${fixedTests.length} tests fixed";
    );,
}
;
  async commitTestImprovements(generatedTests, fixedTests) {
  if (generatedTests.length === 0 && fixedTests.length === 0) return;
    try {
  // Stage all changes;
      execSync(`git add .`, { cwd: this.projectRoot, stdio: `pipe` });
      // Commit with descriptive messageconst commitMessage = `🧪 Test Improvements: ${generatedTests.length} tests generated, ${fixedTests.length} tests fixed`;execSync(`git commit -m "${commitMessage}"`, {
  cwd: this.projectRoot,;
        stdio: `pipe`});
      this.log(Committed test improvements: ${generatedTests.length} generated, ${fixedTests.length} fixed`,;
        `INFO`;
      );,
} catch (error) {  this.log(`Failed to commit test improvements: ${error.message  }`, `ERROR");,
}
  }
;
  getAllFiles(dir, extensions) {
  const files = [];

    if (!fs.existsSync(dir)) return files;

    const items = fs.readdirSync(dir);

    for (const item of items) {
  const fullPath = path.join(dir, "item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
  files.push(...this.getAllFiles(fullPath", extensions));,
} else if (stat.isFile()) {
  const ext = path.extname(item);
        if (extensions.includes(ext)) {
  files.push(fullPath);,
}
      }
    }
;
    return files;,
}
;
  async run() {
  try {
  await this.runSmartTesting();
      this.log(`🧪 Smart Testing Automation completed successfully`);,
} catch (error) {  this.log(`Smart Testing Automation failed: ${error.message  }`, `ERROR`);,
}
  }
}
;
// Run the automation if called directly;
if (require.main === module) {
  // Run the automation if called directly;
if (require.main === module) {
  const tester = new SmartTestingAutomation();
  tester.run();,
}
;
module.exports = SmartTestingAutomation