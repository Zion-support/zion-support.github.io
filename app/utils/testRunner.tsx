
import React from 'react';

interface TestrunnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Testrunner({ className = '', children, ...props }: TestrunnerProps) {
  return (
    <div className={`testrunner-component ${className}`} {...props}>
      {children}
    </div>
  );
}

