import React from 'react';

interface testRunnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function testRunner({ className = '', children }: testRunnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}