#!/""usr/bin/env""
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
console.log(""🧪 Starting Adaptive Test Generator...")
// Get automation interval from environment variable ("default")
      "testCoverage"
      "untestedFiles"
      "testSuggestions"
      "testPatterns"
const { execSync } = require("child_process")
<<<<<<< HEAD

=======
const fs = require("fs")
const path = require("path")
>>>>>>> merged-prs-20250907-203621
console.log(""🧪 Starting Adaptive Test Generator...")
// Get automation interval from environment variable ("default")
>>>>>>> origin/chore/fix-lint-and-merge
console.log("🧪 Starting Adaptive Test Generator...")
// Get automation interval from environment variable (default)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      "testCoverage"
      "untestedFiles"
      "testSuggestions"
      "testPatterns"
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
console.log(""🧪 Starting Adaptive Test Generator...")
// Get automation interval from environment variable ("default")
console.log("🧪 Starting Adaptive Test Generator...")
      "testCoverage"
      "untestedFiles"
      "testSuggestions"
      "testPatterns"
    this.reportDir = path.join(process.cwd(), "test-generation-reports"
  fs.mkdirSync(this.reportDir, { "recursive"})
  console.log(`🧪 Running adaptive test generation at ${new Date().toISOString()}
<<<<<<< HEAD
      console.log(`" Adaptive test generation completed successfully"`)
  console.error(" Adaptive test generation "failed": ")
  console.log(" Analyzing codebase structure...")
const srcPath = path.join(process.cwd(), "src";
=======
<<<<<<< HEAD

=======
      console.log(`" Adaptive test generation completed successfully"`)
  console.error(" Adaptive test generation "failed": ")
  console.log(" Analyzing codebase structure...")
    const srcPath = path.join(process.cwd(), "src"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  console.log("⚠ Source directory not found")
  "components"
      "utilities"
      "hooks"
      "types"
      "services"
<<<<<<< HEAD
const allFiles = this.findFiles(srcPath, [".ts", ".tsx", ".js", ".jsx")];
const content = fs.readFileSync(file, "utf8");
=======
    const allFiles = this.findFiles(srcPath, [".ts", ".tsx", ".js", ".jsx")]
  const content = fs.readFileSync(file, "utf8")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        relativePath.includes("components/")
        content.includes("export default")
        (content.includes("function") && content.includes("props")
  "path"
          "name"
          "hasTests"
        relativePath.includes("utils/")
        relativePath.includes("helpers/")
        content.includes("export function")
        content.includes("export const")
  "path"
          "name"
          "hasTests": this.hasExistingTests(file)})} else if (content.includes("use") && content.includes("export")
  "path"
          "name"
          "hasTests"
        relativePath.includes("types/")
        content.includes("interface")
        content.includes("type ")
  "path"
          "name"
        relativePath.includes("services/")
        content.includes("api")
        content.includes("fetch")
  "path"
          "name"
          "hasTests"
    console.log(" Codebase structure "analysis": ")
  "components"
      "utilities"
      "hooks"
      "types"
      "services"
    this.testMetrics.testPatterns.set("structure")
  console.log(" Identifying untested components...")
<<<<<<< HEAD
const structure = this.testMetrics.testPatterns.get("structure");
    this.testMetrics.untestedFiles = ["...untestedComponents.map(comp => ({ "type": "component"", "...comp }))", "...untestedUtilities.map(util => ({ "type": "utility"", "...util }))", "...untestedHooks.map(hook => ({ "type": "hook"", "...hook }))", "...untestedServices.map(service => ({ "type": "service"", "...service }))", ""]
=======
    const structure = this.testMetrics.testPatterns.get("structure")
    this.testMetrics.untestedFiles = ["...untestedComponents.map(comp => ({ "type": "component"", "...comp }))", "...untestedUtilities.map(util => ({ "type": "utility"", "...util }))", "...untestedHooks.map(hook => ({ "type": "hook"", "...hook }))", "...untestedServices.map(service => ({ "type": "service"", "...service }))", ""]
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// console.log( Found ${this.testMetrics.untestedFiles.length} untested files")
  console.log("⚛ Generating component tests...")
      file => file.type === "component"
  "type": "
            "path"
            "component"
            "timestamp"
  "type": "component"
            "path"
            "component"
            "timestamp"
// console.log( Generated test for "component")
  console.log(⚠ Failed to generate test for ${component.name  }:")
  console.log(" Generating utility tests...")
      file => file.type === "utility"
  console.log(" Generating utility tests...")
      file => file.type === "utility"
  "type": "utility"
            "path"
            "utility"
            "timestamp": new Date().toISOString()}
});console.log( Generated test for "utility")
  console.log("� Generating integration tests...")
<<<<<<< HEAD
const integrationTests = ["];
  "name": "App Navigation"", ""description": "Test navigation between main app routes"", ""content": this.generateIntegrationTest("navigation")", "}", "
  "name": "Form Submission"", ""description": "Test form submission flows"", ""content": this.generateIntegrationTest("form")", "}", "
  "name": "API Integration"", ""description": "Test API integration flows"", ""content": this.generateIntegrationTest("api")", "}", ""
const testsDir = path.join(process.cwd(), "tests", "integration";
  fs.mkdirSync(testsDir, { "recursive"})
const testPath = path.join(testsDir, "${test.name.toLowerCase().replace(/\s+/g", "-"});
  console.log("� Generating integration tests...")
const integrationTests = ["];
  "name": "App Navigation", ""description": "Test navigation between main app routes", ""content": this.generateIntegrationTest("navigation")", "}", "
  "name": "Form Submission", ""description": "Test form submission flows", ""content": this.generateIntegrationTest("form")", "}", "
  "name": "API Integration", ""description": "Test API integration flows", ""content": this.generateIntegrationTest("api")", "}", "
const testsDir = path.join(process.cwd(), "tests", "integration";
  fs.mkdirSync(testsDir, { "recursive"})
const testPath = path.join(testsDir, "${test.name.toLowerCase().replace(/\s+/g", "-"});
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
    const integrationTests = ["]
  "name": "App Navigation"", ""description": "Test navigation between main app routes"", ""content": this.generateIntegrationTest("navigation")", "}", "
  "name": "Form Submission"", ""description": "Test form submission flows"", ""content": this.generateIntegrationTest("form")", "}", "
  "name": "API Integration"", ""description": "Test API integration flows"", ""content": this.generateIntegrationTest("api")", "}", ""
    const testsDir = path.join(process.cwd(), "tests", "integration"
  fs.mkdirSync(testsDir, { "recursive"})
  const testPath = path.join(testsDir, "${test.name.toLowerCase().replace(/\s+/g", "-"})
  console.log("� Generating integration tests...")
    const integrationTests = ["]
  "name": "App Navigation", ""description": "Test navigation between main app routes", ""content": this.generateIntegrationTest("navigation")", "}", "
  "name": "Form Submission", ""description": "Test form submission flows", ""content": this.generateIntegrationTest("form")", "}", "
  "name": "API Integration", ""description": "Test API integration flows", ""content": this.generateIntegrationTest("api")", "}", "
    const testsDir = path.join(process.cwd(), "tests", "integration"
  fs.mkdirSync(testsDir, { "recursive"})
  const testPath = path.join(testsDir, "${test.name.toLowerCase().replace(/\s+/g", "-"})
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "type": "integration"
          "path"
          "name"
          "timestamp": new Date().toISOString()}
});console.log( Generated integration "test": ${test.name}"")
  console.log("" Analyzing test patterns...")
<<<<<<< HEAD
const existingTests = this.findFiles(process.cwd(), [".test.ts", ".test.tsx", ".spec.ts", ".spec.tsx", "];
  "totalTests"
=======
    const existingTests = this.findFiles(process.cwd(), [".test.ts", ".test.tsx", ".spec.ts", ".spec.tsx", "]
  "totalTests"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      "testTypes"
        "integration"
        "e2e"
      "frameworks"
        "vitest"
<<<<<<< HEAD
        "cypress"
// console.log("" Analyzing test patterns...")
    console.log(" Analyzing test patterns...")
const existingTests = this.findFiles(process.cwd(), [".test.ts"", ".test.tsx", ".spec.ts"", ".spec.tsx", ""];
=======
<<<<<<< HEAD

=======
        "cypress"
// console.log("" Analyzing test patterns...")
    console.log(" Analyzing test patterns...")
    const existingTests = this.findFiles(process.cwd(), [".test.ts"", ".test.tsx", ".spec.ts"", ".spec.tsx", ""]
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "totalTests"
      "testTypes"
        "integration"
        "e2e"
      "frameworks"
        "vitest"
        "cypress"
<<<<<<< HEAD
const content = fs.readFileSync(testFile, "utf8");
=======
  const content = fs.readFileSync(testFile, "utf8")
      if (content.includes("describe(") && content.includes("it(")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      if (content.includes("describe(") && content.includes("it(")
      if (content.includes("cy.") || content.includes("cypress")
      if (content.includes("integration") || content.includes("user flow")
      if (content.includes("jest") || content.includes("expect(")
      if (content.includes("vitest") || content.includes("vi.")
      if (content.includes("cy.") || content.includes("cypress")
    this.testMetrics.testPatterns.set("existing")
// console.log("" Test pattern "analysis": ")
  console.log("" Generating test suggestions...")
    console.log("" Test pattern "analysis": ", patterns);")}"
<<<<<<< HEAD
"
  async generateTestSuggestions() {"}
    console.log(" Generating test suggestions...")
const structure = this.testMetrics.testPatterns.get("structure");
const existing = this.testMetrics.testPatterns.get("existing");
  "priority": "high"
        "category": "coverage"
        "title": "Low Test Coverage`,"description"
        "action": Focus on testing critical business logic and user-facing components"
  "priority": "
        "category": "test_types"
        "title": "Missing Integration Tests"
        "description": "No integration tests found"
        "action": "Add integration tests for critical user flows"
  "priority": "high"
        "category": "coverage"
        "title": "Low Test Coverage","description": Current test coverage: ${this.testMetrics.testCoverage.toFixed(1)}%"
        "action": Focus on testing critical business logic and user-facing components"
  "priority": "medium"
        "category": "test_types"
        "title": "Missing Integration Tests"
        "description": "No integration tests found"
        "action": "Add integration tests for critical user flows"
  "priority": "low"
        "category": "test_types"
        "title": "Missing E2E Tests"
        "description": "No end-to-end tests found"
        "action": "Consider adding E2E tests for critical user journeys"
      .filter(file => file.type === "component")
  "priority": "high"
        "category": `priority
        "title": "
        "description": Components: ${criticalComponents.map(c => c.name).join(", "})
        "action": `Generate tests for these critical components first
  console.log(" Generating test generation report..."")
  "timestamp"
      "summary"
  totalFilesAnalyzed: this.testMetrics.testPatterns.get("structure")
              this.testMetrics.testPatterns.get("structure")
        "untestedFiles"
        "generatedTests"
        "testCoverage"
      "metrics"
      "suggestions"
      this.reportDir,test-generation-${Date.now()}.json"
      "test-generation-report.json"
console.log(")
  // Skip directories that can"
const testExtensions = [".test.ts", ".test.tsx", ".spec.ts", ".spec.tsx"];
const basePath = filePath.replace(/\.(ts|tsx|js|jsx)$/, "";
const basePath = filePath.replace(/\.(ts|tsx|js|jsx)$/, ";
return basePath + ".test.ts";
return match ? match[1] : "UnknownComponent";
return match ? match[1] : "UnknownFunction";
return match ? match[1] : "UnknownHook";
return match ? match[1] : "UnknownType";
return match ? match[1] : "UnknownService";
  generateComponentTest(component) {return import { render, screen  } from "@testing-";"library/react"""
import { describe, it, expect } from "
import ${component.name} from `./${path.basename(component.path, path.extname(component.path"))}"
  it("renders without crashing")
  generateComponentTest(component) {return import { render, screen  } from "@testing-";library/react""
import { describe, it, expect  } from "vitest"}"
"
  generateComponentTest(component) {return import { render, screen  } from "@testing-";"library/react""";"
import { describe, it, expect  } from "vitest";"
=======
"
  async generateTestSuggestions() {"}
    console.log(" Generating test suggestions...")
    const structure = this.testMetrics.testPatterns.get("structure")
    const existing = this.testMetrics.testPatterns.get("existing")
  "priority": "high"
        "category": "coverage"
        "title": "Low Test Coverage`,"description"
        "action": Focus on testing critical business logic and user-facing components"
  "priority": "
        "category": "test_types"
        "title": "Missing Integration Tests"
        "description": "No integration tests found"
        "action": "Add integration tests for critical user flows"
  "priority": "high"
        "category": "coverage"
        "title": "Low Test Coverage","description": Current test coverage: ${this.testMetrics.testCoverage.toFixed(1)}%"
        "action": Focus on testing critical business logic and user-facing components"
  "priority": "medium"
        "category": "test_types"
        "title": "Missing Integration Tests"
        "description": "No integration tests found"
        "action": "Add integration tests for critical user flows"
  "priority": "low"
        "category": "test_types"
        "title": "Missing E2E Tests"
        "description": "No end-to-end tests found"
        "action": "Consider adding E2E tests for critical user journeys"
>>>>>>> origin/chore/fix-lint-and-merge
      .filter(file => file.type === "component")
  priority: "high"
        category: `priority
        "title": 
        description": Components: ${criticalComponents.map(c => c.name).join(", })
        action": `Generate tests for these critical components first
  console.log(" Generating test generation report...)
  "timestamp"
      summary
  totalFilesAnalyzed: this.testMetrics.testPatterns.get("structure")
              this.testMetrics.testPatterns.get(structure)
        "untestedFiles"
        generatedTests
        "testCoverage"
      metrics
      "suggestions"
      this.reportDir,test-generation-${Date.now()}.json
      test-generation-report.json"
console.log(")
<<<<<<< HEAD

=======
  // Skip directories that can"
  // Skip directories that can"
  const testExtensions = [".test.ts", ".test.tsx", ".spec.ts", ".spec.tsx"]
    const basePath = filePath.replace(/\.(ts|tsx|js|jsx)$/, ""
  const basePath = filePath.replace(/\.(ts|tsx|js|jsx)$/, "
    return basePath + ".test.ts"
    return match ? match[1] : "UnknownComponent"
    return match ? match[1] : "UnknownFunction"
    return match ? match[1] : "UnknownHook"
    return match ? match[1] : "UnknownType"
    return match ? match[1] : "UnknownService"
<<<<<<< HEAD
  generateComponentTest($2) {return import { render, screen  } from "@testing-";"library/react"""
=======
  generateComponentTest(component) {return import { render, screen  } from "@testing-";"library/react"""
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
import { describe, it, expect } from "
import ${component.name} from `./${path.basename(component.path, path.extname(component.path))}
  it("renders without crashing")
<<<<<<< HEAD
  generateComponentTest($2) {return import { render, screen  } from "@testing-";library/react""
import { describe, it, expect  } from "vitest"}"
"
  generateComponentTest($2) {return import { render, screen  } from "@testing-";"library/react""";"
import { describe, it, expect  } from "vitest";"
=======
  generateComponentTest(component) {return import { render, screen  } from @testing-;library/react""
import { describe, it, expect  } from vitest}"
"
  generateComponentTest(component) {return import { render, screen  } from @testing-;"library/react";"
import { describe, it, expect  } from "vitest;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import ${component.name} from "./${path.basename(component.path, path.extname(component.path`))}
describe("${component.name}")
  it("renders without crashing")
    expect(screen.getByRole(`main``)
  it(")
<<<<<<< HEAD
return `import { describe, it, expect } from "vitest";
  it("should handle normal input")
const result = ${utility.name}("test input");
  it("should handle edge cases")
return "import { describe, it, expect  } from "vitest";
import { ${utility.name} } from "./${path.basename(utility.path, path.extname(utility.path))}"
describe("${utility.name}")
  it("should handle normal input")
const result = ${utility.name}("test input");
  it("should handle edge cases")
  it("should handle error cases")
  "navigation": "import { render, screen, fireEvent } from "@testing-""library/react"""
  "navigation": "import { render, screen, fireEvent  } from "@testing-";library/react""
import { describe, it, expect  } from "vitest"
import { BrowserRouter  } from "react-router-dom"
import App from "../"src/App""
describe("Navigation Integration")
  it("should navigate between main routes")
const homeLink = screen.getByText(/""home/i"");
    expect(window.location.pathname).toBe("/")})}
});"
"form": "import { render, screen, fireEvent, waitFor  } from "@testing-";library/react""
import { describe, it, expect  } from "vitest"
describe("Form Submission Integration")
  it("should handle form submission correctly")
const input = screen.getByLabelText(/""email/i"");
    fireEvent.change(input, { "target": { value: "test@example.com"})
const submitButton = screen.getByRole("button", { "name": /""submit/i""});
  expect(screen.getByText(/""success/i"")
const input = screen.getByLabelText(/"email/i");
    fireEvent.change(input, { "target": { value: "test@example.com"})
const submitButton = screen.getByRole("button", { "name": /"submit/i"});
  expect(screen.getByText(/"success/i")).toBeInTheDocument()})})}
});"
"api": "import { render, screen, waitFor  } from "@testing-";library/react""
import { describe, it, expect, vi  } from "vitest"
describe("API Integration")
  it("should fetch and display data")
  "json": () => Promise.resolve({ data: "test data"})
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  expect(screen.getByText("test data")).toBeInTheDocument()})})}
});"
  expect(screen.getByText("test data")).toBeInTheDocument()})})}
});"
  console.log("🧪 Starting adaptive test generator with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals")
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGTERM")
  console.log("� Received SIGTERM, shutting down gracefully...")

  console.error(" Failed to start adaptive test "generator")


<<<<<<< HEAD



=======
  console.error(" Failed to start adaptive test generator)

  console.error(" Failed to start adaptive test "generator)
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  console.error( Failed to start adaptive test "generator")

  async generateReport() {
    console.log('📊 Generating test generation report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFilesAnalyzed: this.testMetrics.testPatterns.get('structure') ? 
          Object.values(this.testMetrics.testPatterns.get('structure')).reduce((sum, arr) => sum + arr.length, 0) : 0,
        untestedFiles: this.testMetrics.untestedFiles.length,
        generatedTests: this.testMetrics.generatedTests.length,
        testCoverage: this.testMetrics.testCoverage
      },
      metrics: this.testMetrics,
      suggestions: this.testMetrics.testSuggestions
    };
    
    const reportPath = path.join(this.reportDir, `test-generation-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(process.cwd(), 'test-generation-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Test generation report saved to ${reportPath}`);
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

  hasExistingTests(filePath) {
    const testExtensions = ['.test.ts', '.test.tsx', '.spec.ts', '.spec.tsx'];
    const basePath = filePath.replace(/\.(ts|tsx|js|jsx)$/, '');
    
    return testExtensions.some(ext => {
      const testPath = basePath + ext;
      return fs.existsSync(testPath);
    });
  }

  getTestPath(filePath) {
    const basePath = filePath.replace(/\.(ts|tsx|js|jsx)$/, '');
    return basePath + '.test.ts';
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

  extractTypeName(content) {
    const match = content.match(/(?:interface|type)\s+(\w+)/);
    return match ? match[1] : 'UnknownType';
  }

  extractServiceName(content) {
    const match = content.match(/export\s+(?:function|const|class)\s+(\w+)/);
    return match ? match[1] : 'UnknownService';
  }

  generateComponentTest(component) {
    return `import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ${component.name} from './${path.basename(component.path, path.extname(component.path))}';

describe('${component.name}', () => {
  it('renders without crashing', () => {
    render(<${component.name} />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<${component.name} />);
    // Add specific content checks based on component functionality
  });

  it('handles user interactions', () => {
    render(<${component.name} />);
    // Add interaction tests based on component functionality
  });
});
`;
  }

  generateUtilityTest(utility) {
    return `import { describe, it, expect } from 'vitest';
import { ${utility.name} } from './${path.basename(utility.path, path.extname(utility.path))}';

describe('${utility.name}', () => {
  it('should handle normal input', () => {
    // Add test cases based on utility function behavior
    const result = ${utility.name}('test input');
    expect(result).toBeDefined();
  });

  it('should handle edge cases', () => {
    // Add edge case tests
    const result = ${utility.name}(null);
    expect(result).toBeDefined();
  });

  it('should handle error cases', () => {
    // Add error handling tests
    expect(() => ${utility.name}(undefined)).not.toThrow();
  });
});
`;
  }

  generateIntegrationTest(type) {
    const templates = {
      navigation: `import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

describe('Navigation Integration', () => {
  it('should navigate between main routes', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    // Test navigation between main routes
    const homeLink = screen.getByText(/home/i);
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
  });
});`,
      
      form: `import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Form Submission Integration', () => {
  it('should handle form submission correctly', async () => {
    render(<YourFormComponent />);
    
    // Fill out form
    const input = screen.getByLabelText(/email/i);
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    // Wait for submission
    await waitFor(() => {
      expect(screen.getByText(/success/i)).toBeInTheDocument();
    });
  });
});`,
      
      api: `import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('API Integration', () => {
  it('should fetch and display data', async () => {
    // Mock API response
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: 'test data' }),
      })
    );
    
    render(<YourApiComponent />);
    
    await waitFor(() => {
      expect(screen.getByText('test data')).toBeInTheDocument();
    });
  });
});`
    };
    
    return templates[type] || templates.navigation;
  }
  {/* Removed stray closing brace */}

// Main continuous loop
async function runContinuous() {
  console.log(`🧪 Starting adaptive test generator with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  const generator = new AdaptiveTestGenerator();
  
  // Run initial test generation
  await generator.generateAdaptiveTests();
  
  // Set up continuous execution
  setInterval(async () => {
    await generator.generateAdaptiveTests();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Adaptive test generator running. Next generation in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
  {/* Removed stray closing brace */}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the adaptive test generator
runContinuous().catch(error => {
  console.error('❌ Failed to start adaptive test generator:', error);
  process.exit(1);
});