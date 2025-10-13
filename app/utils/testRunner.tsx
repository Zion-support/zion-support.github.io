import React from 'react';

interface TestRunnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function TestRunner({ className = '', children }: TestRunnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}