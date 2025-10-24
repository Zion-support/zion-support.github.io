import React from 'react';

interface testRunnerProps {
  className?: string;
  children?: React.ReactNode;
}

const testRunner: React.FC<testRunnerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'testrunner ' + className}>
      {children || <p>testRunner component</p>}
    </div>
  );
};

export default testRunner;
