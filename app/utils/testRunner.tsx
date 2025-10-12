import React from 'react';

interface testRunnerProps {
  className?: string;
  children?: React.ReactNode;
}

const testRunner: React.FC<testRunnerProps> = ({ className = '', children }) => {
  return (
    <div className={`testrunner ${className}`}>
      {children}
    </div>
  );
};

export default testRunner;
