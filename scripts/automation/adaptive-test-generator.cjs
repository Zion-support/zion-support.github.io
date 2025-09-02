#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Adaptive Test Generator...');

// Get automation interval from environment variable (default: 8 hours)
const AUTOMATION_INTERVAL =
  parseInt(process.env.AUTOMATION_INTERVAL) || 28800000; // 8 hours

class AdaptiveTestGenerator {
  constructor() {
    this.testMetrics = {
      generatedTests: [],
      testCoverage: 0,
      untestedFiles: [],
      testSuggestions: [],
      testPatterns: new Map(),
    };
    this.reportDir = path.join(process.cwd(), 'test-generation-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async generateAdaptiveTests() {
    try {
      console.log(
        `🧪 Running adaptive test generation at ${new Date().toISOString()}`
      );

      // Analyze codebase structure
      await this.analyzeCodebaseStructure();

      // Identify untested components
      await this.identifyUntestedComponents();

      // Generate component tests
      await this.generateComponentTests();

      // Generate utility function tests
      await this.generateUtilityTests();

      // Generate integration tests
      await this.generateIntegrationTests();

      // Analyze test patterns
      await this.analyzeTestPatterns();

      // Generate test suggestions
      await this.generateTestSuggestions();

      // Generate report
      await this.generateReport();

      console.log('✅ Adaptive test generation completed successfully');
    } catch (error) {
      console.error('❌ Adaptive test generation failed:', error.message);
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
      types: [],
      services: [],
    };

    // Scan for different file types
    const allFiles = this.findFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);

    for (const file of allFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(srcPath, file);

      if (
        relativePath.includes('components/') ||
        content.includes('export default') ||
        (content.includes('function') && content.includes('props'))
      ) {
        structure.components.push({
          path: relativePath,
          name: this.extractComponentName(content),
          hasTests: this.hasExistingTests(file),
        });
      } else if (
        relativePath.includes('utils/') ||
        relativePath.includes('helpers/') ||
        content.includes('export function') ||
        content.includes('export const')
      ) {
        structure.utilities.push({
          path: relativePath,
          name: this.extractFunctionName(content),
          hasTests: this.hasExistingTests(file),
        });
      } else if (content.includes('use') && content.includes('export')) {
        structure.hooks.push({
          path: relativePath,
          name: this.extractHookName(content),
          hasTests: this.hasExistingTests(file),
        });
      } else if (
        relativePath.includes('types/') ||
        content.includes('interface') ||
        content.includes('type ')
      ) {
        structure.types.push({
          path: relativePath,
          name: this.extractTypeName(content),
        });
      } else if (
        relativePath.includes('services/') ||
        content.includes('api') ||
        content.includes('fetch')
      ) {
        structure.services.push({
          path: relativePath,
          name: this.extractServiceName(content),
          hasTests: this.hasExistingTests(file),
        });
      }
    }

    console.log('📊 Codebase structure analysis:', {
      components: structure.components.length,
      utilities: structure.utilities.length,
      hooks: structure.hooks.length,
      types: structure.types.length,
      services: structure.services.length,
    });

    this.testMetrics.testPatterns.set('structure', structure);
  }

  async identifyUntestedComponents() {
    console.log('🔍 Identifying untested components...');

    const structure = this.testMetrics.testPatterns.get('structure');
    if (!structure) return;

    const untestedComponents = structure.components.filter(
      comp => !comp.hasTests
    );
    const untestedUtilities = structure.utilities.filter(
      util => !util.hasTests
    );
    const untestedHooks = structure.hooks.filter(hook => !hook.hasTests);
    const untestedServices = structure.services.filter(
      service => !service.hasTests
    );

    this.testMetrics.untestedFiles = [
      ...untestedComponents.map(comp => ({ type: 'component', ...comp })),
      ...untestedUtilities.map(util => ({ type: 'utility', ...util })),
      ...untestedHooks.map(hook => ({ type: 'hook', ...hook })),
      ...untestedServices.map(service => ({ type: 'service', ...service })),
    ];

    console.log(
      `📊 Found ${this.testMetrics.untestedFiles.length} untested files`
    );
  }

  async generateComponentTests() {
    console.log('⚛️ Generating component tests...');

    const untestedComponents = this.testMetrics.untestedFiles.filter(
      file => file.type === 'component'
    );

    for (const component of untestedComponents.slice(0, 5)) {
      // Limit to 5 components per run
      try {
        const testContent = this.generateComponentTest(component);
        const testPath = this.getTestPath(component.path);

        if (!fs.existsSync(testPath)) {
          fs.writeFileSync(testPath, testContent);
          this.testMetrics.generatedTests.push({
            type: 'component',
            path: testPath,
            component: component.name,
            timestamp: new Date().toISOString(),
          });
          console.log(`✅ Generated test for component: ${component.name}`);
        }
      } catch (error) {
        console.log(
          `⚠️ Failed to generate test for ${component.name}:`,
          error.message
        );
      }
    }
  }

  async generateUtilityTests() {
    console.log('🔧 Generating utility tests...');

    const untestedUtilities = this.testMetrics.untestedFiles.filter(
      file => file.type === 'utility'
    );

    for (const utility of untestedUtilities.slice(0, 3)) {
      // Limit to 3 utilities per run
      try {
        const testContent = this.generateUtilityTest(utility);
        const testPath = this.getTestPath(utility.path);

        if (!fs.existsSync(testPath)) {
          fs.writeFileSync(testPath, testContent);
          this.testMetrics.generatedTests.push({
            type: 'utility',
            path: testPath,
            utility: utility.name,
            timestamp: new Date().toISOString(),
          });
          console.log(`✅ Generated test for utility: ${utility.name}`);
        }
      } catch (error) {
        console.log(
          `⚠️ Failed to generate test for ${utility.name}:`,
          error.message
        );
      }
    }
  }

  async generateIntegrationTests() {
    console.log('🔗 Generating integration tests...');

    // Generate integration tests for common user flows
    const integrationTests = [
      {
        name: 'App Navigation',
        description: 'Test navigation between main app routes',
        content: this.generateIntegrationTest('navigation'),
      },
      {
        name: 'Form Submission',
        description: 'Test form submission flows',
        content: this.generateIntegrationTest('form'),
      },
      {
        name: 'API Integration',
        description: 'Test API integration flows',
        content: this.generateIntegrationTest('api'),
      },
    ];

    const testsDir = path.join(process.cwd(), 'tests', 'integration');
    if (!fs.existsSync(testsDir)) {
      fs.mkdirSync(testsDir, { recursive: true });
    }

    for (const test of integrationTests) {
      const testPath = path.join(
        testsDir,
        `${test.name.toLowerCase().replace(/\s+/g, '-')}.test.ts`
      );

      if (!fs.existsSync(testPath)) {
        fs.writeFileSync(testPath, test.content);
        this.testMetrics.generatedTests.push({
          type: 'integration',
          path: testPath,
          name: test.name,
          timestamp: new Date().toISOString(),
        });
        console.log(`✅ Generated integration test: ${test.name}`);
      }
    }
  }

  async analyzeTestPatterns() {
    console.log('📊 Analyzing test patterns...');

    const existingTests = this.findFiles(process.cwd(), [
      '.test.ts',
      '.test.tsx',
      '.spec.ts',
      '.spec.tsx',
    ]);

    const patterns = {
      totalTests: existingTests.length,
      testTypes: {
        unit: 0,
        integration: 0,
        e2e: 0,
      },
      frameworks: {
        jest: 0,
        vitest: 0,
        cypress: 0,
      },
    };

    for (const testFile of existingTests) {
      const content = fs.readFileSync(testFile, 'utf8');

      // Analyze test types
      if (content.includes('describe(') && content.includes('it(')) {
        patterns.testTypes.unit++;
      }
      if (content.includes('cy.') || content.includes('cypress')) {
        patterns.testTypes.e2e++;
      }
      if (content.includes('integration') || content.includes('user flow')) {
        patterns.testTypes.integration++;
      }

      // Analyze frameworks
      if (content.includes('jest') || content.includes('expect(')) {
        patterns.frameworks.jest++;
      }
      if (content.includes('vitest') || content.includes('vi.')) {
        patterns.frameworks.vitest++;
      }
      if (content.includes('cy.') || content.includes('cypress')) {
        patterns.frameworks.cypress++;
      }
    }

    this.testMetrics.testPatterns.set('existing', patterns);
    console.log('📊 Test pattern analysis:', patterns);
  }

  async generateTestSuggestions() {
    console.log('💡 Generating test suggestions...');

    const structure = this.testMetrics.testPatterns.get('structure');
    const existing = this.testMetrics.testPatterns.get('existing');

    if (!structure || !existing) return;

    // Calculate test coverage
    const totalFiles =
      structure.components.length +
      structure.utilities.length +
      structure.hooks.length +
      structure.services.length;
    const testedFiles = totalFiles - this.testMetrics.untestedFiles.length;
    this.testMetrics.testCoverage =
      totalFiles > 0 ? (testedFiles / totalFiles) * 100 : 0;

    // Generate suggestions based on coverage
    if (this.testMetrics.testCoverage < 70) {
      this.testMetrics.testSuggestions.push({
        priority: 'high',
        category: 'coverage',
        title: 'Low Test Coverage',
        description: `Current test coverage: ${this.testMetrics.testCoverage.toFixed(1)}%`,
        action:
          'Focus on testing critical business logic and user-facing components',
      });
    }

    // Suggest missing test types
    if (existing.testTypes.integration === 0) {
      this.testMetrics.testSuggestions.push({
        priority: 'medium',
        category: 'test_types',
        title: 'Missing Integration Tests',
        description: 'No integration tests found',
        action: 'Add integration tests for critical user flows',
      });
    }

    if (existing.testTypes.e2e === 0) {
      this.testMetrics.testSuggestions.push({
        priority: 'low',
        category: 'test_types',
        title: 'Missing E2E Tests',
        description: 'No end-to-end tests found',
        action: 'Consider adding E2E tests for critical user journeys',
      });
    }

    // Suggest testing priorities
    const criticalComponents = this.testMetrics.untestedFiles
      .filter(file => file.type === 'component')
      .slice(0, 3);

    if (criticalComponents.length > 0) {
      this.testMetrics.testSuggestions.push({
        priority: 'high',
        category: 'priority',
        title: 'Critical Components Need Testing',
        description: `Components: ${criticalComponents.map(c => c.name).join(', ')}`,
        action: 'Generate tests for these critical components first',
      });
    }
  }

  async generateReport() {
    console.log('📊 Generating test generation report...');

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFilesAnalyzed: this.testMetrics.testPatterns.get('structure')
          ? Object.values(
              this.testMetrics.testPatterns.get('structure')
            ).reduce((sum, arr) => sum + arr.length, 0)
          : 0,
        untestedFiles: this.testMetrics.untestedFiles.length,
        generatedTests: this.testMetrics.generatedTests.length,
        testCoverage: this.testMetrics.testCoverage,
      },
      metrics: this.testMetrics,
      suggestions: this.testMetrics.testSuggestions,
    };

    const reportPath = path.join(
      this.reportDir,
      `test-generation-${Date.now()}.json`
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Also save latest report
    const latestReportPath = path.join(
      process.cwd(),
      'test-generation-report.json'
    );
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
    const match = content.match(
      /export\s+(?:default\s+)?(?:function|const)\s+(\w+)/
    );
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
});`,
    };

    return templates[type] || templates.navigation;
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(
    `🧪 Starting adaptive test generator with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`
  );

  const generator = new AdaptiveTestGenerator();

  // Run initial test generation
  await generator.generateAdaptiveTests();

  // Set up continuous execution
  setInterval(async () => {
    await generator.generateAdaptiveTests();
  }, AUTOMATION_INTERVAL);

  console.log(
    `✅ Adaptive test generator running. Next generation in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`
  );
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

// Start the adaptive test generator
runContinuous().catch(error => {
  console.error('❌ Failed to start adaptive test generator:', error);
  process.exit(1);
});
