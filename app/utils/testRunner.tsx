/**
 * Comprehensive Test Runner and Testing Utilities
 * Provides advanced testing capabilities, mocking, and test automation
 */

import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
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
  ): Promise<{ passed: boolean; metrics: PerformanceMetrics }> {
    const startTime = performance.now();
    
    const { unmount } = this.customRender(component);
    
    const renderTime = performance.now() - startTime;
    
    // Measure memory usage if available
    let memoryUsage = 0;
    if ('memory' in performance) {
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
      if (memory) {
        memoryUsage = memory.usedJSHeapSize;
      }
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
  ): Promise<{ passed: boolean; violations: Array<{ description: string; impact: string }> }> {
    const { container, unmount } = this.customRender(component);

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
