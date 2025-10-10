'use client';
/**
 * Comprehensive Test Runner and Testing Utilities
 * Provides advanced testing capabilities, mocking, and test automation
 */
import React, { ReactElement, useCallback } from 'react';
import { render, RenderOptions } from '@testing-library/react';
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
  timeout: number;
  retries: number;
  parallel: boolean;
  coverage: boolean;
}

// Default test configuration
export const defaultTestConfig: TestConfig = {
  timeout: 5000,
  retries: 3,
  parallel: true,
  coverage: true
};

interface TestResult {
  name: string;
  status: 'passed' | 'failed' | 'skipped';
  duration: number;
  error?: string;
}

interface AssertionResult {
  passed: boolean;
  message: string;
  expected?: unknown;
  actual?: unknown;
}

interface CoverageResult {
  statements: number;
  branches: number;
  functions: number;
  lines: number;
}

interface TestSuite {
  name: string;
  tests: Test[];
  beforeEach?: () => void;
  afterEach?: () => void;
}

interface Test {
  name: string;
  fn: () => void | Promise<void>;
  timeout?: number;
}

export class TestRunner {
  private tests: Test[] = [];
  private suites: TestSuite[] = [];
  private isRunning: boolean = false;
  private config: TestConfig = defaultTestConfig;

  constructor(config?: Partial<TestConfig>) {
    if (config) {
      this.config = { ...defaultTestConfig, ...config };
    }
  }

  // Add a test to the runner
  addTest(name: string, fn: () => void | Promise<void>, timeout?: number): void {
    this.tests.push({ name, fn, timeout: timeout || this.config.timeout });
  }

  // Add a test suite
  addSuite(suite: TestSuite): void {
    this.suites.push(suite);
  }

  // Run all tests
  async runTests(): Promise<TestResult[]> {
    if (this.isRunning) {
      throw new Error('Test runner is already running');
    }

    this.isRunning = true;
    const results: TestResult[] = [];

    try {
      // Run individual tests
      for (const test of this.tests) {
        const result = await this.runSingleTest(test);
        results.push(result);
      }

      // Run test suites
      for (const suite of this.suites) {
        for (const test of suite.tests) {
          if (suite.beforeEach) {
            suite.beforeEach();
          }
          
          const result = await this.runSingleTest(test);
          results.push(result);
          
          if (suite.afterEach) {
            suite.afterEach();
          }
        }
      }
    } finally {
      this.isRunning = false;
    }

    return results;
  }

  // Run a single test
  private async runSingleTest(test: Test): Promise<TestResult> {
    const startTime = performance.now();
    
    try {
      await Promise.race([
        test.fn(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Test timeout')), test.timeout)
        )
      ]);
      
      const duration = performance.now() - startTime;
      return {
        name: test.name,
        status: 'passed',
        duration
      };
    } catch (error) {
      const duration = performance.now() - startTime;
      return {
        name: test.name,
        status: 'failed',
        duration,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  }

  // Get test statistics
  getStats(results: TestResult[]): {
    total: number;
    passed: number;
    failed: number;
    skipped: number;
    duration: number;
  } {
    const total = results.length;
    const passed = results.filter(r => r.status === 'passed').length;
    const failed = results.filter(r => r.status === 'failed').length;
    const skipped = results.filter(r => r.status === 'skipped').length;
    const duration = results.reduce((sum, r) => sum + r.duration, 0);

    return { total, passed, failed, skipped, duration };
  }
}

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  if (typeof window !== 'undefined') {
    return render(ui, { wrapper: AllTheProviders, ...options });
  }
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// Performance testing utilities
export const measurePerformance = (fn: () => void): PerformanceMetrics => {
  const startTime = performance.now();
  const startMemory = (performance as any).memory?.usedJSHeapSize || 0;
  
  fn();
  
  const endTime = performance.now();
  const endMemory = (performance as any).memory?.usedJSHeapSize || 0;
  
  return {
    renderTime: endTime - startTime,
    memoryUsage: endMemory - startMemory,
    timestamp: new Date().toISOString()
  };
};

// Mock utilities
export const createMock = <T extends Record<string, any>>(overrides: Partial<T> = {}): T => {
  return new Proxy({} as T, {
    get(target, prop) {
      if (prop in overrides) {
        return overrides[prop as keyof T];
      }
      return jest.fn();
    }
  });
};

// Assertion utilities
export const expect = (actual: unknown) => ({
  toBe: (expected: unknown): AssertionResult => ({
    passed: actual === expected,
    message: `Expected ${actual} to be ${expected}`,
    expected,
    actual
  }),
  toEqual: (expected: unknown): AssertionResult => ({
    passed: JSON.stringify(actual) === JSON.stringify(expected),
    message: `Expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}`,
    expected,
    actual
  }),
  toBeTruthy: (): AssertionResult => ({
    passed: Boolean(actual),
    message: `Expected ${actual} to be truthy`,
    actual
  }),
  toBeFalsy: (): AssertionResult => ({
    passed: !actual,
    message: `Expected ${actual} to be falsy`,
    actual
  })
});

// Export everything
export * from '@testing-library/react';
export { customRender as render };