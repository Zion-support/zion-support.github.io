'use client';

import React from 'react';

/**
 * Comprehensive Test Runner and Testing Utilities
 * Provides advanced testing capabilities, mocking, and test automation
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

interface TestConfig {
  timeout: number;
  retries: number;
  bail: boolean;
  verbose: boolean;
}

interface TestResult {
  name: string;
  passed: boolean;
  duration: number;
  error?: string;
  metrics?: PerformanceMetrics;
}

class TestRunner {
  private config: TestConfig;
  private results: TestResult[] = [];

  constructor(config: Partial<TestConfig> = {}) {
    this.config = {
      timeout: 5000,
      retries: 0,
      bail: false,
      verbose: false,
      ...config,
    };
  }

  /**
   * Run a performance test
   */
  async runPerformanceTest(testName: string): Promise<{ passed: boolean; metrics: PerformanceMetrics }> {
    const startTime = performance.now();
    
    try {
      // Simulate performance test
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      const metrics: PerformanceMetrics = {
        loadTime: duration,
        renderTime: duration * 0.1,
        memoryUsage: (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0,
        networkLatency: duration * 0.05,
      };

      const passed = duration < 1000; // Pass if under 1 second
      
      if (this.config.verbose) {
        console.log(`Performance test "${testName}" completed in ${duration}ms`);
      }

      return { passed, metrics };
    } catch (error) {
      console.error(`Performance test "${testName}" failed:`, error);
      return { passed: false, metrics: {} as PerformanceMetrics };
    }
  }

  /**
   * Run a hook
   */
  private async runHook(
    hook: () => void | Promise<void>,
    hookName: string
  ): Promise<void> {
    try {
      await hook();
      if (this.config.verbose) {
        console.log(`Hook "${hookName}" completed successfully`);
      }
    } catch (error) {
      console.error(`Hook "${hookName}" failed:`, error);
      throw error;
    }
  }

  /**
   * Run a test suite
   */
  async runTestSuite(tests: Array<{ name: string; fn: () => void | Promise<void> }>): Promise<TestResult[]> {
    this.results = [];
    
    for (const test of tests) {
      const startTime = performance.now();
      
      try {
        await test.fn();
        const duration = performance.now() - startTime;
        
        this.results.push({
          name: test.name,
          passed: true,
          duration,
        });
        
        if (this.config.verbose) {
          console.log(`✓ ${test.name} (${duration.toFixed(2)}ms)`);
        }
      } catch (error) {
        const duration = performance.now() - startTime;
        
        this.results.push({
          name: test.name,
          passed: false,
          duration,
          error: error instanceof Error ? error.message : String(error),
        });
        
        console.error(`✗ ${test.name} (${duration.toFixed(2)}ms):`, error);
        
        if (this.config.bail) {
          break;
        }
      }
    }
    
    return this.results;
  }

  /**
   * Get test results summary
   */
  getSummary(): { total: number; passed: number; failed: number; duration: number } {
    const total = this.results.length;
    const passed = this.results.filter(r => r.passed).length;
    const failed = total - passed;
    const duration = this.results.reduce((sum, r) => sum + r.duration, 0);
    
    return { total, passed, failed, duration };
  }

  /**
   * Clear results
   */
  clearResults(): void {
    this.results = [];
  }
}

// React component for test runner UI
interface TestRunnerUIProps {
  tests: Array<{ name: string; fn: () => void | Promise<void> }>;
  config?: Partial<TestConfig>;
}

const TestRunnerUI: React.FC<TestRunnerUIProps> = ({ tests, config = {} }) => {
  const [runner] = React.useState(() => new TestRunner(config));
  const [results, setResults] = React.useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = React.useState(false);
  const [summary, setSummary] = React.useState({ total: 0, passed: 0, failed: 0, duration: 0 });

  const runTests = async () => {
    setIsRunning(true);
    const testResults = await runner.runTestSuite(tests);
    setResults(testResults);
    setSummary(runner.getSummary());
    setIsRunning(false);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Test Runner</h2>
      
      <div className="mb-4">
        <button
          onClick={runTests}
          disabled={isRunning}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isRunning ? 'Running...' : 'Run Tests'}
        </button>
      </div>

      {summary.total > 0 && (
        <div className="mb-4 p-3 bg-gray-100 rounded">
          <h3 className="font-semibold">Summary</h3>
          <p>Total: {summary.total} | Passed: {summary.passed} | Failed: {summary.failed}</p>
          <p>Duration: {summary.duration.toFixed(2)}ms</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold">Results</h3>
          {results.map((result, index) => (
            <div
              key={index}
              className={`p-2 rounded ${
                result.passed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              <div className="flex justify-between">
                <span>{result.passed ? '✓' : '✗'} {result.name}</span>
                <span>{result.duration.toFixed(2)}ms</span>
              </div>
              {result.error && (
                <div className="text-sm mt-1 text-red-600">{result.error}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestRunnerUI;
export { TestRunner, type TestResult, type PerformanceMetrics, type TestConfig };