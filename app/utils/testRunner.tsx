'use client';

import React from 'react';

interface TestRunnerProps {
  tests: Array<{
    name: string;
    run: () => Promise<boolean>;
  }>;
  onComplete?: (results: Array<{ name: string; passed: boolean }>) => void;
}

export default function TestRunner({ tests, onComplete }: TestRunnerProps) {
  const [results, setResults] = React.useState<Array<{ name: string; passed: boolean }>>([]);
  const [isRunning, setIsRunning] = React.useState(false);

  const runTests = async () => {
    setIsRunning(true);
    const testResults = [];
    
    for (const test of tests) {
      try {
        const passed = await test.run();
        testResults.push({ name: test.name, passed });
      } catch {
        testResults.push({ name: test.name, passed: false });
      }
    }
    
    setResults(testResults);
    setIsRunning(false);
    
    if (onComplete) {
      onComplete(testResults);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={runTests}
        disabled={isRunning}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isRunning ? 'Running Tests...' : 'Run Tests'}
      </button>
      
      {results.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Test Results:</h3>
          {results.map((result, index) => (
            <div key={index} className={`p-2 rounded ${result.passed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {result.name}: {result.passed ? 'PASSED' : 'FAILED'}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
