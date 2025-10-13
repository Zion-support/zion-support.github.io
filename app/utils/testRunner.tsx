import React from 'react';

interface TestRunnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function TestRunner({ className = '', children }: TestRunnerProps) {
  return (
    <div className={`test-runner ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Test Runner</h3>
          <p className="text-gray-300">Test runner component under construction</p>
        </div>
      )}
    </div>
  );
}