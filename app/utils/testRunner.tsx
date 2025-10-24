'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface TestResult {
  name: string;
  status: 'pass' | 'fail' | 'running';
  message?: string;
  duration?: number;
}

interface TestRunnerProps {
  tests: Array<{
    name: string;
    test: () => Promise<boolean> | boolean;
  }>;
}

const TestRunner: React.FC<TestRunnerProps> = ({ tests }) => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = useCallback(async () => {
    setIsRunning(true);
    setResults([]);

    for (const test of tests) {
      const startTime = performance.now();
      
      setResults(prev => [...prev, {
        name: test.name,
        status: 'running' as const
      }]);

      try {
        const result = await test.test();
        const duration = performance.now() - startTime;
        
        setResults(prev => prev.map(r => 
          r.name === test.name 
            ? { ...r, status: result ? 'pass' as const : 'fail' as const, duration }
            : r
        ));
      } catch (error) {
        const duration = performance.now() - startTime;
        
        setResults(prev => prev.map(r => 
          r.name === test.name 
            ? { 
                ...r, 
                status: 'fail' as const, 
                message: error instanceof Error ? error.message : 'Unknown error',
                duration 
              }
            : r
        ));
      }
    }

    setIsRunning(false);
  }, [tests]);

  useEffect(() => {
    runTests();
  }, [runTests]);

  const passedTests = results.filter(r => r.status === 'pass').length;
  const failedTests = results.filter(r => r.status === 'fail').length;
  const totalTests = results.length;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Test Results</h3>
        <button
          onClick={runTests}
          disabled={isRunning}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isRunning ? 'Running...' : 'Run Tests'}
        </button>
      </div>

      <div className="mb-4">
        <div className="flex space-x-4 text-sm">
          <span className="text-green-600">Passed: {passedTests}</span>
          <span className="text-red-600">Failed: {failedTests}</span>
          <span className="text-gray-600">Total: {totalTests}</span>
        </div>
      </div>

      <div className="space-y-2">
        {results.map((result, index) => (
          <div
            key={index}
            className={`p-3 rounded border-l-4 ${
              result.status === 'pass'
                ? 'bg-green-50 border-green-500'
                : result.status === 'fail'
                ? 'bg-red-50 border-red-500'
                : 'bg-yellow-50 border-yellow-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{result.name}</span>
              <div className="flex items-center space-x-2">
                {result.duration && (
                  <span className="text-xs text-gray-500">
                    {result.duration.toFixed(2)}ms
                  </span>
                )}
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    result.status === 'pass'
                      ? 'bg-green-100 text-green-800'
                      : result.status === 'fail'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {result.status}
                </span>
              </div>
            </div>
            {result.message && (
              <p className="mt-1 text-sm text-red-600">{result.message}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestRunner;