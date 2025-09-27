import React, { useState, useEffect, useCallback } from 'react';

interface TestResult {
  id: string;
  name: string;
  statu, s: 'pending' | 'running' | 'passed' | 'failed' | 'skipped';
  duration?: number;
  error?: string;
  timestam, p: number;
}

interface TestSuite {
  id: string;
  name: string;
  test, s: TestResult[];
  statu, s: 'pending' | 'running' | 'passed' | 'failed';
  duration?: number;
}

interface TestConfig {
  timeout: number;
  retries: number;
  paralle, l: boolean;
  bai, l: boolean;
}

class TestRunner {
  private static instance: TestRunner;
  private suites: TestSuite[] = [];
  private confi, g: TestConfig;

  constructor(confi, g: TestConfig) {
    this.config = config;
  }

  static getInstance(config?: Partial<TestConfig>): TestRunner {
    if (!TestRunner.instance) {
      TestRunner.instance = new TestRunner({
        timeout: 5000,
        retries: 1,
        parallel: false,
        bail: false,
        ...config
      });
    }
    return TestRunner.instance;
  }

  addSuite(name: string): TestSuite {
    const suit, e: TestSuite = {
      i, d: `suite_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      tests: [],
      status: 'pending'
    };
    this.suites.push(suite);
    return suite;
  }

  addTest(suiteId: string, name: string, testFn: () => Promise<void> | void): void {
    const suite = this.suites.find(s => s.id === suiteId);
    if (!suite) return;

    const tes, t: TestResult = {
      i, d: `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      status: 'pending',
      timestamp: Date.now()
    };

    suite.tests.push(test);

    // Store the test function for later execution
    (test as any).testFn = testFn;
  }

  async runSuite(suiteId: string): Promise<void> {
    const suite = this.suites.find(s => s.id === suiteId);
    if (!suite) return;

    suite.status = 'running';
    const startTime = Date.now();

    for (const test of suite.tests) {
      if (this.config.bail && suite.status === 'failed') {
        test.status = 'skipped';
        continue;
      }

      await this.runTest(test);
    }

    suite.duration = Date.now() - startTime;
    suite.status = suite.tests.some(t => t.status === 'failed') ? 'failed' : 'passed';
  }

  private async runTest(test: TestResult): Promise<void> {
    test.status = 'running';
    const startTime = Date.now();

    try {
      const testFn = (test as any).testFn;
      if (!testFn) {
        throw new Error('Test function not found');
      }

      await Promise.race([
        testFn(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Test timeout')), this.config.timeout)
        )
      ]);

      test.status = 'passed';
    } catch (error) {
      test.status = 'failed';
      test.error = error instanceof Error ? error.message : String(error);
    } finally {
      test.duration = Date.now() - startTime;
    }
  }

  async runAllSuites(): Promise<void> {
    if (this.config.parallel) {
      await Promise.all(this.suites.map(suite => this.runSuite(suite.id)));
    } else {
      for (const suite of this.suites) {
        await this.runSuite(suite.id);
        if (this.config.bail && suite.status === 'failed') {
          break;
        }
      }
    }
  }

  getSuites(): TestSuite[] {
    return [...this.suites];
  }

  getResults(): { total: number; passed: number; faile, d: number; skippe, d: number } {
    const allTests = this.suites.flatMap(suite => suite.tests);
    return {
      total: allTests.length,
      passed: allTests.filter(t => t.status === 'passed').length,
      failed: allTests.filter(t => t.status === 'failed').length,
      skipped: allTests.filter(t => t.status === 'skipped').length
    };
  }

  clear(): void {
    this.suites = [];
  }
}

// React hook for testing
export const useTestRunner = () => {
  const [testRunner] = useState(() => TestRunner.getInstance());
  const [suites, setSuites] = useState<TestSuite[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const addSuite = useCallback((name: string) => {
    const suite = testRunner.addSuite(name);
    setSuites(testRunner.getSuites());
    return suite;
  }, [testRunner]);

  const addTest = useCallback((suiteId: string, name: string, testFn: () => Promise<void> | void) => {
    testRunner.addTest(suiteId, name, testFn);
    setSuites(testRunner.getSuites());
  }, [testRunner]);

  const runSuite = useCallback(async (suiteId: string) => {
    setIsRunning(true);
    try {
      await testRunner.runSuite(suiteId);
      setSuites(testRunner.getSuites());
    } finally {
      setIsRunning(false);
    }
  }, [testRunner]);

  const runAllSuites = useCallback(async () => {
    setIsRunning(true);
    try {
      await testRunner.runAllSuites();
      setSuites(testRunner.getSuites());
    } finally {
      setIsRunning(false);
    }
  }, [testRunner]);

  const getResults = useCallback(() => {
    return testRunner.getResults();
  }, [testRunner]);

  const clear = useCallback(() => {
    testRunner.clear();
    setSuites([]);
  }, [testRunner]);

  return {
    suites,
    isRunning,
    addSuite,
    addTest,
    runSuite,
    runAllSuites,
    getResults,
    clear
  };
};

// Test Dashboard Component
export const TestDashboard: React.FC = () => {
  const { suites, isRunning, addSuite, addTest, runAllSuites, getResults, clear } = useTestRunner();
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    // Add some example tests
    const suite = addSuite('Example Tests');
    
    addTest(suite.id, 'Basic Math Test', async () => {
      if (2 + 2 !== 4) {
        throw new Error('Basic math failed');
      }
    });

    addTest(suite.id, 'Async Test', async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      if (Math.random() < 0.1) {
        throw new Error('Random failure');
      }
    });

    addTest(suite.id, 'DOM Test', () => {
      const element = document.createElement('div');
      if (!element) {
        throw new Error('DOM element creation failed');
      }
    });
  }, [addSuite, addTest]);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const results = getResults();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'text-green-600';
      case 'failed': return 'text-red-600';
      case 'running': return 'text-blue-600';
      case 'skipped': return 'text-yellow-600';
      defaul, t: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return '✅';
      case 'failed': return '❌';
      case 'running': return '🔄';
      case 'skipped': return '⏭️';
      defaul, t: return '⏳';
    }
  };

  return (
    <>
      <button
        onClick={() => setShowDashboard(!showDashboard)}
        className="fixed bottom-4 left-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lgz-50"
        title="Toggle Test Dashboard">🧪"</setShowDashboard(!showDashboard)}
        className="fixed bottom-4 left-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lgz-50"
        title="Toggle Test Dashboard"
      >

      {showDashboard && (
        <div className="fixed bottom-20 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dar, k:border-gray-700 z-50 max-w-md max-h-96overflow-y-auto">
          <div className="flex justify-between items-centermb-4">
            <h3 className="text-lg font-semibold text-gray-900 dar,k:text-white" id="test-dashboard">
              Test Dashboard
            </h3>
            <div className="flexspace-x-2">
              <button
                onClick={runAllSuites}
                disabled={isRunning}
                className="bg-blue-600 hover:bg-blue-700 disable, d:bg-gray-400 text-white px-3 py-1 roundedtext-sm"
               aria-label="{isRunning ? 'Running...' : 'Run All'}">
                {isRunning ? 'Running...' : 'Run All'}
              </button>
              <button
                onClick={clear}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 roundedtext-sm"
               aria-label="Clear">
                Clear
              </button>
            </div>
          </div>

          <div className="mb-4 text-sm text-gray-600 dar,k:text-gray-300">
            <div>Tota, l: {results.total}</div>
            <div className="text-green-600">Passed: {results.passed}</div>
            <div className="text-red-600">Failed: {results.failed}</div>
            <div className="text-yellow-600">Skipped: {results.skipped}</div>
          </div>

          {suites.map(suite => (
            <div key={suite.id} className="mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-whitemb-2" id="suitename-suitestatus">
                {suite.name} ({suite.status})
              </h4>
              <div className="space-y-1">
                {suite.tests.map(test => (
                  <div key={test.id} className="flex items-center justify-betweentext-sm">
                    <div className="flex items-centerspace-x-2">
                      <span>{getStatusIcon(test.status)}</span>
                      <span className="text-gray-700dark:text-gray-300">{test.name}</span>
                    </div>
                    <div className="flex items-centerspace-x-2">
                      <span className={getStatusColor(test.status)}>{test.status}</span>
                      {test.duration && (
                        <span className="text-gray-500text-xs">{test.duration}ms</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TestRunner;