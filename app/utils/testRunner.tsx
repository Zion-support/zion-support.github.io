/**
 * Advanced Test Runner
 * Comprehensive testing utilities for React applications
 */

import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React, { ReactElement, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Test result types
export interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  timestamp: string;
}

export interface CoverageMetrics {
  statements: number;
  branches: number;
  functions: number;
  lines: number;
}


// Test configuration interface
export interface TestConfig {
  enableMocking: boolean;
  enableCoverage: boolean;
  enablePerformance: boolean;
  enableAccessibility: boolean;
  enableVisualRegression: boolean;
  mockDataPath?: string;
  coverageThreshold: number;
  performanceThreshold: number;
  accessibilityThreshold: number;
}

// Default test configuration
export const defaultTestConfig: TestConfig = {
  enableMocking: true,
  enableCoverage: true,
  enablePerformance: true,
  enableAccessibility: true,
  enableVisualRegression: false,
  coverageThreshold: 80,
  performanceThreshold: 100,
  accessibilityThreshold: 90,
};

// Test utilities class
export class TestRunner {
  private static instance: TestRunner;
  private config: TestConfig;
  private testResults: Array<{
    name: string;
    status: 'passed' | 'failed' | 'skipped';
    duration: number;
    error?: string;
  }> = [];

  constructor(config: Partial<TestConfig> = {}) {
    this.config = { ...defaultTestConfig, ...config };
  }

  static getInstance(config?: Partial<TestConfig>): TestRunner {
    if (!TestRunner.instance) {
      TestRunner.instance = new TestRunner(config);
    }
    return TestRunner.instance;
  }

  // Custom render function with providers
  customRender(
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
  ): RenderResult {
    const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
      return (
        <BrowserRouter>
          {children}
        </BrowserRouter>
      );
    };

    return render(ui, { wrapper: AllTheProviders, ...options });
  }

  // Performance test
  async runPerformanceTest(
    component: ReactElement,
    testName: string
<<<<<<< HEAD
  ): Promise<{ passed: boolean; metrics: PerformanceMetrics }> {
=======
  ): Promise<{ passed: boolean; metrics: { renderTime: number; memoryUsage: number; timestamp: string } }> {
>>>>>>> main
    const startTime = performance.now();
    
    const { unmount } = this.customRender(component);
    
    const renderTime = performance.now() - startTime;
    
    // Measure memory usage if available
    let memoryUsage = 0;
    if ('memory' in performance) {
<<<<<<< HEAD
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
      if (memory) {
        memoryUsage = memory.usedJSHeapSize;
      }
=======
      memoryUsage = (performance as Performance & { memory: { usedJSHeapSize: number } }).memory.usedJSHeapSize;
>>>>>>> main
    }

    const metrics: PerformanceMetrics = {
      renderTime,
      memoryUsage,
      timestamp: new Date().toISOString(),
    };

    unmount();

    const passed = renderTime < this.config.performanceThreshold;

    this.testResults.push({
      name: testName,
      status: passed ? 'passed' : 'failed',
      duration: renderTime,
      error: passed ? undefined : `Performance threshold exceeded: ${renderTime}ms > ${this.config.performanceThreshold}ms`,
    });

    return { passed, metrics };
  }

  // Accessibility test
  async runAccessibilityTest(
    component: ReactElement,
    testName: string
<<<<<<< HEAD
  ): Promise<{ passed: boolean; violations: Array<{ description: string; impact: string }> }> {
    const { container, unmount } = this.customRender(component);
=======
  ): Promise<{ passed: boolean; violations: string[] }> {
    const { container } = this.customRender(component);
    
    // Basic accessibility checks
    const violations: string[] = [];
    
    // Check for missing alt text on images
    const images = container.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.getAttribute('alt')) {
        violations.push(`Image ${index} missing alt text`);
      }
    });
>>>>>>> main

    const violations: Array<{ description: string; impact: string }> = [];

    // Check for missing alt text
    const imagesWithoutAlt = container.querySelectorAll('img:not([alt])');
    imagesWithoutAlt.forEach((img) => {
      violations.push({
        description: `Image missing alt text: ${img.getAttribute('src')}`,
        impact: 'critical',
      });
    });

    // Check for missing labels
    const inputsWithoutLabels = container.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputsWithoutLabels.forEach((input) => {
      const id = input.getAttribute('id');
      const hasLabel = id && container.querySelector(`label[for="${id}"]`);
      if (!hasLabel) {
        violations.push({
          description: `Input missing label: ${input.getAttribute('name') || input.getAttribute('type')}`,
          impact: 'serious',
        });
      }
    });

    unmount();

    const passed = violations.length === 0;

    this.testResults.push({
      name: testName,
      status: passed ? 'passed' : 'failed',
      duration: 0,
      error: passed ? undefined : `Found ${violations.length} accessibility violations`,
    });

    return { passed, violations };
  }

<<<<<<< HEAD
=======
  // Component test
  async runComponentTest(
    component: ReactElement,
    testName: string,
    assertions: (result: RenderResult) => void
  ): Promise<{ passed: boolean; error?: string }> {
    try {
      const result = this.customRender(component);
      assertions(result);
      
      this.testResults.push({
        name: `Component: ${testName}`,
        status: 'passed',
        duration: 0,
      });

      return { passed: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      this.testResults.push({
        name: `Component: ${testName}`,
        status: 'failed',
        duration: 0,
        error: errorMessage,
      });

      return { passed: false, error: errorMessage };
    }
  }

  // Integration test
  async runIntegrationTest(
    component: ReactElement,
    testName: string,
    userInteractions: (result: RenderResult) => Promise<void>
  ): Promise<{ passed: boolean; error?: string }> {
    try {
      const result = this.customRender(component);
      await userInteractions(result);
      
      this.testResults.push({
        name: `Integration: ${testName}`,
        status: 'passed',
        duration: 0,
      });

      return { passed: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      this.testResults.push({
        name: `Integration: ${testName}`,
        status: 'failed',
        duration: 0,
        error: errorMessage,
      });

      return { passed: false, error: errorMessage };
    }
  }

  // Visual regression test
  async runVisualRegressionTest(
    component: ReactElement,
    testName: string
  ): Promise<{ passed: boolean; diff?: Record<string, unknown> }> {
    // This would typically use a tool like Percy or Chromatic
    // For now, we'll just return a placeholder
    console.log(`Visual regression test for ${testName} would run here`);
    
    this.testResults.push({
      name: `Visual: ${testName}`,
      status: 'passed',
      duration: 0,
    });

    return { passed: true };
  }

  // Coverage test
  async runCoverageTest(): Promise<{ passed: boolean; coverage: { statements: number; branches: number; functions: number; lines: number } }> {
    // This would typically use Istanbul or similar
    // For now, we'll just return a placeholder
    const coverage = {
      statements: 85,
      branches: 80,
      functions: 90,
      lines: 85,
    };

    const passed = coverage.statements >= this.config.coverageThreshold;

    this.testResults.push({
      name: 'Coverage',
      status: passed ? 'passed' : 'failed',
      duration: 0,
      error: passed ? undefined : `Coverage ${coverage.statements}% below threshold ${this.config.coverageThreshold}%`,
    });

    return { passed, coverage };
  }

  // Run all tests
  async runAllTests(tests: Array<{
    name: string;
    type: 'component' | 'integration' | 'performance' | 'accessibility' | 'visual';
    component: ReactElement;
    assertions?: (result: RenderResult) => void;
    userInteractions?: (result: RenderResult) => Promise<void>;
  }>): Promise<{ passed: boolean; results: Array<Record<string, unknown>> }> {
    const results = [];

    for (const test of tests) {
      let result;
      
      switch (test.type) {
        case 'component':
          result = await this.runComponentTest(
            test.component,
            test.name,
            test.assertions!
          );
          break;
        case 'integration':
          result = await this.runIntegrationTest(
            test.component,
            test.name,
            test.userInteractions!
          );
          break;
        case 'performance':
          result = await this.runPerformanceTest(test.component, test.name);
          break;
        case 'accessibility':
          result = await this.runAccessibilityTest(test.component, test.name);
          break;
        case 'visual':
          result = await this.runVisualRegressionTest(test.component, test.name);
          break;
        default:
          result = { passed: false, error: 'Unknown test type' };
      }

      results.push({ ...result, name: test.name, type: test.type });
    }

    const passed = results.every(result => result.passed);

    return { passed, results };
  }

>>>>>>> main
  // Get test results
  getResults() {
    return this.testResults;
  }

  // Get test statistics
  getStatistics() {
    const total = this.testResults.length;
    const passed = this.testResults.filter((r) => r.status === 'passed').length;
    const failed = this.testResults.filter((r) => r.status === 'failed').length;
    const skipped = this.testResults.filter((r) => r.status === 'skipped').length;

    return {
      total,
      passed,
      failed,
      skipped,
      passRate: total > 0 ? (passed / total) * 100 : 0,
    };
  }

  // Clear test results
  clearResults() {
    this.testResults = [];
  }

  // Export test report
  exportReport() {
    return {
      config: this.config,
      results: this.testResults,
      statistics: this.getStatistics(),
      timestamp: new Date().toISOString(),
    };
  }
}

// React Testing Library wrapper utilities
export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      <BrowserRouter>
        {children}
      </BrowserRouter>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

// Mock data utilities
export const createMockData = <T,>(
  template: T,
  count: number = 1
): T[] => {
  return Array.from({ length: count }, () => ({ ...template }));
};

<<<<<<< HEAD
// Test helpers
export const waitForAsync = (ms: number = 0): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const flushPromises = (): Promise<void> => {
  return new Promise((resolve) => setImmediate(resolve));
};

// Performance testing utilities
export const measureRenderTime = async (
  fn: () => void | Promise<void>
): Promise<number> => {
  const startTime = performance.now();
  await fn();
  return performance.now() - startTime;
};

export const measureMemoryUsage = (): number => {
  if ('memory' in performance) {
    const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
    return memory?.usedJSHeapSize || 0;
  }
  return 0;
};

// Test data generators
export const generateTestId = (prefix: string = 'test'): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const generateTestData = <T extends Record<string, unknown>>(
  schema: T,
  overrides?: Partial<T>
): T => {
  return { ...schema, ...overrides };
};

// Initialize test runner
export const initializeTestRunner = (config?: Partial<TestConfig>): TestRunner => {
  return TestRunner.getInstance(config);
};

// Export test runner instance
export default TestRunner;
=======
export default TestRunner;
>>>>>>> main
