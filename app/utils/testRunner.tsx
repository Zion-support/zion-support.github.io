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

interface TestResult {
  name: string;
  status: 'passed' | 'failed' | 'skipped' | 'pending';
  duration: number;
  error?: Error;
  coverage?: CoverageMetrics;
}

// Test utilities class
export class TestRunner {
  private static instance: TestRunner;
  private config: TestConfig;
  private testResults: TestResult[] = [];

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

    unmount();

    const metrics: PerformanceMetrics = {
      renderTime,
      memoryUsage,
      timestamp: new Date().toISOString(),
    };

    const passed = renderTime <= this.config.performanceThreshold;

    this.testResults.push({
      name: testName,
      status: passed ? 'passed' : 'failed',
      duration: renderTime,
    });

    return { passed, metrics };
  }

  // Accessibility test
  async runAccessibilityTest(
    component: ReactElement,
    testName: string
  ): Promise<{ passed: boolean; violations: unknown[] }> {
    const { container, unmount } = this.customRender(component);
    
    // Simplified accessibility check
    const violations: unknown[] = [];
    
    // Check for images without alt text
    const imagesWithoutAlt = container.querySelectorAll('img:not([alt])');
    if (imagesWithoutAlt.length > 0) {
      violations.push({
        type: 'missing-alt-text',
        count: imagesWithoutAlt.length,
      });
    }

    // Check for buttons without aria-label or text content
    const buttonsWithoutLabel = Array.from(container.querySelectorAll('button')).filter(
      (button) => !button.textContent?.trim() && !button.getAttribute('aria-label')
    );
    if (buttonsWithoutLabel.length > 0) {
      violations.push({
        type: 'missing-button-label',
        count: buttonsWithoutLabel.length,
      });
    }

    unmount();

    const passed = violations.length === 0;

    this.testResults.push({
      name: testName,
      status: passed ? 'passed' : 'failed',
      duration: 0,
    });

    return { passed, violations };
  }

  // Get test results
  getResults(): TestResult[] {
    return this.testResults;
  }

  // Clear test results
  clearResults(): void {
    this.testResults = [];
  }

  // Generate test report
  generateReport(): string {
    const totalTests = this.testResults.length;
    const passedTests = this.testResults.filter(r => r.status === 'passed').length;
    const failedTests = this.testResults.filter(r => r.status === 'failed').length;
    const skippedTests = this.testResults.filter(r => r.status === 'skipped').length;

    return `
Test Report
===========
Total Tests: ${totalTests}
Passed: ${passedTests}
Failed: ${failedTests}
Skipped: ${skippedTests}
Success Rate: ${totalTests > 0 ? ((passedTests / totalTests) * 100).toFixed(2) : 0}%

Test Results:
${this.testResults.map(r => `- ${r.name}: ${r.status} (${r.duration.toFixed(2)}ms)`).join('\n')}
    `.trim();
  }
}

// Export singleton instance
export const testRunner = TestRunner.getInstance();

// Custom render helper for tests
export const renderWithProviders = (
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

// Mock data generator
export const generateMockData = <T,>(template: T, count: number): T[] => {
  return Array.from({ length: count }, (_, index) => ({
    ...template,
    id: index + 1,
  }));
};

// Wait for async operations
export const waitForAsync = (ms: number = 0): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Performance measurement utilities
export const measurePerformance = async (
  fn: () => void | Promise<void>,
  label: string
): Promise<number> => {
  const start = performance.now();
  await fn();
  const duration = performance.now() - start;
  
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(`[Performance] ${label}: ${duration.toFixed(2)}ms`);
  }
  
  return duration;
};

// Memory usage tracking
export const getMemoryUsage = (): number => {
  if ('memory' in performance) {
    const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
    return memory?.usedJSHeapSize || 0;
  }
  return 0;
};

export default TestRunner;
