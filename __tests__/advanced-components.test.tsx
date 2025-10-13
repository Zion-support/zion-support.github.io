import React from 'react';

interface advanced-components.testProps {
  className?: string;
  children?: React.ReactNode;
}

export default function advanced-components.test({ className = '', children }: advanced-components.testProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}