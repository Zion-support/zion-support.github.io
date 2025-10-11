/**
 * Test runner utilities for React components
 */

import React from 'react';
import { render, RenderResult } from '@testing-library/react';

/**
 * Performance metrics interface
 */
export interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  componentCount: number;
}

/**
 * Coverage metrics interface
 */
export interface CoverageMetrics {
  statements: number;
  branches: number;
  functions: number;
  lines: number;
}

/**
 * Test configuration interface
 */
export interface TestConfig {
  timeout: number;
  verbose: boolean;
  bail: boolean;
  reporter: 'console' | 'json' | 'html' | 'junit';
}

/**
 * Default test configuration
 */
export const defaultTestConfig: TestConfig = {
  timeout: 5000,
  verbose: false,
  bail: false,
  reporter: 'console',
};

/**
 * Test result interface
 */
interface TestResult {
  name: string;
  status: 'passed' | 'failed' | 'skipped';
  duration: number;
  error?: string;
  metrics?: PerformanceMetrics;
}

/**
 * Assertion result interface
 */
interface AssertionResult {
  passed: boolean;
  message: string;
  expected?: any;
  actual?: any;
}

/**
 * Coverage result interface
 */
interface CoverageResult {
  file: string;
  coverage: CoverageMetrics;
}

/**
 * Test suite interface
 */
interface TestSuite {
  name: string;
  tests: Test[];
  beforeAll: (() => void)[];
  afterAll: (() => void)[];
  beforeEach: (() => void)[];
  afterEach: (() => void)[];
}

/**
 * Test interface
 */
interface Test {
  name: string;
  fn: () => void | Promise<void>;
  timeout?: number;
}

/**
 * Test runner class
 */
export class TestRunner {
  private suites: TestSuite[] = [];
  private currentSuite: TestSuite | null = null;
  private results: TestResult[] = [];
  private config: TestConfig;

  constructor(config: Partial<TestConfig> = {}) {
    this.config = { ...defaultTestConfig, ...config };
  }

  /**
   * Get singleton instance
   */
  static getInstance(config?: Partial<TestConfig>): TestRunner {
    if (!TestRunner.instance) {
      TestRunner.instance = new TestRunner(config);
    }
    return TestRunner.instance;
  }

  private static instance: TestRunner;

  /**
   * Render component for testing
   */
  renderComponent(
    ui: React.ReactElement,
    options: any = {}
  ): RenderResult {
    const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
      return <>{children}</>;
    };

    return render(ui, {
      wrapper: AllTheProviders,
      ...options,
    });
  }

  /**
   * Setup test environment
   */
  setupTestEnvironment(): void {
    // Mock console methods
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  }

  /**
   * Cleanup test environment
   */
  cleanupTestEnvironment(): void {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  }

  /**
   * Create new test suite
   */
  describe(name: string, fn: () => void): void {
    const suite: TestSuite = {
      name,
      tests: [],
      beforeAll: [],
      afterAll: [],
      beforeEach: [],
      afterEach: [],
    };

    this.suites.push(suite);
    this.currentSuite = suite;
    fn();
    this.currentSuite = null;
  }

  /**
   * Add before all hook
   */
  beforeAll(fn: () => void): void {
    if (this.currentSuite) {
      this.currentSuite.beforeAll.push(fn);
    }
  }

  /**
   * Add after all hook
   */
  afterAll(fn: () => void): void {
    if (this.currentSuite) {
      this.currentSuite.afterAll.push(fn);
    }
  }

  /**
   * Add before each hook
   */
  beforeEach(fn: () => void): void {
    if (this.currentSuite) {
      this.currentSuite.beforeEach.push(fn);
    }
  }

  /**
   * Add after each hook
   */
  afterEach(fn: () => void): void {
    if (this.currentSuite) {
      this.currentSuite.afterEach.push(fn);
    }
  }

  /**
   * Add test case
   */
  it(name: string, fn: () => void | Promise<void>, timeout?: number): void {
    if (this.currentSuite) {
      this.currentSuite.tests.push({
        name,
        fn,
        timeout: timeout || this.config.timeout,
      });
    }
  }

  /**
   * Add test case (alias for it)
   */
  test(name: string, fn: () => void | Promise<void>, timeout?: number): void {
    this.it(name, fn, timeout);
  }

  /**
   * Add pending test
   */
  it.skip(name: string, fn: () => void | Promise<void>): void {
    if (this.currentSuite) {
      this.currentSuite.tests.push({
        name: `[SKIP] ${name}`,
        fn: () => {},
      });
    }
  }

  /**
   * Add test that should fail
   */
  it.todo(name: string, fn: () => void | Promise<void>): void {
    if (this.currentSuite) {
      this.currentSuite.tests.push({
        name: `[TODO] ${name}`,
        fn: () => {},
      });
    }
  }

  /**
   * Add test that should fail
   */
  it.failing(name: string, fn: () => void | Promise<void>): void {
    if (this.currentSuite) {
      this.currentSuite.tests.push({
        name: `[FAILING] ${name}`,
        fn: () => {},
      });
    }
  }

  /**
   * Run all tests
   */
  async run(): Promise<TestResult[]> {
    this.results = [];
    this.setupTestEnvironment();

    try {
      for (const suite of this.suites) {
        await this.runSuite(suite);
      }
    } finally {
      this.cleanupTestEnvironment();
    }

    return this.results;
  }

  /**
   * Run test suite
   */
  private async runSuite(suite: TestSuite): Promise<void> {
    // Run before all hooks
    for (const hook of suite.beforeAll) {
      try {
        hook();
      } catch (error) {
        console.error(`Error in beforeAll hook for suite "${suite.name}":`, error);
      }
    }

    // Run tests
    for (const test of suite.tests) {
      await this.runTest(test);
    }

    // Run after all hooks
    for (const hook of suite.afterAll) {
      try {
        hook();
      } catch (error) {
        console.error(`Error in afterAll hook for suite "${suite.name}":`, error);
      }
    }
  }

  /**
   * Run individual test
   */
  private async runTest(test: Test): Promise<void> {
    const startTime = Date.now();
    
    try {
      // Run before each hooks
      if (this.currentSuite) {
        for (const hook of this.currentSuite.beforeEach) {
          hook();
        }
      }

      // Run test
      await Promise.race([
        test.fn(),
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Test timeout')), test.timeout);
        }),
      ]);

      // Run after each hooks
      if (this.currentSuite) {
        for (const hook of this.currentSuite.afterEach) {
          hook();
        }
      }

      const duration = Date.now() - startTime;
      this.results.push({
        name: test.name,
        status: 'passed',
        duration,
      });

      if (this.config.verbose) {
        console.log(`✓ ${test.name} (${duration}ms)`);
      }
    } catch (error) {
      const duration = Date.now() - startTime;
      this.results.push({
        name: test.name,
        status: 'failed',
        duration,
        error: error instanceof Error ? error.message : String(error),
      });

      if (this.config.verbose) {
        console.error(`✗ ${test.name} (${duration}ms): ${error}`);
      }

      if (this.config.bail) {
        throw error;
      }
    }
  }

  /**
   * Get test results
   */
  getTestResults(): TestResult[] {
    return [...this.results];
  }

  /**
   * Get test statistics
   */
  getTestStatistics(): { passed: number; failed: number; skipped: number; total: number } {
    const passed = this.results.filter(r => r.status === 'passed').length;
    const failed = this.results.filter(r => r.status === 'failed').length;
    const skipped = this.results.filter(r => r.status === 'skipped').length;
    const total = this.results.length;

    return { passed, failed, skipped, total };
  }

  /**
   * Clear test results
   */
  clearTestResults(): void {
    this.results = [];
  }

  /**
   * Generate test report
   */
  generateTestReport(): void {
    const stats = this.getTestStatistics();
    console.log(`\nTest Results: ${stats.passed} passed, ${stats.failed} failed, ${stats.skipped} skipped, ${stats.total} total`);
  }
}

/**
 * Hook for using test runner
 */
export const useTestRunner = () => {
  const runner = TestRunner.getInstance();
  
  return {
    runner,
    describe: runner.describe.bind(runner),
    it: runner.it.bind(runner),
    test: runner.test.bind(runner),
    beforeAll: runner.beforeAll.bind(runner),
    afterAll: runner.afterAll.bind(runner),
    beforeEach: runner.beforeEach.bind(runner),
    afterEach: runner.afterEach.bind(runner),
    run: runner.run.bind(runner),
  };
};

/**
 * Test utilities object
 */
export const testUtils = {
  TestRunner,
  useTestRunner,
  defaultTestConfig,
};

export default testUtils;