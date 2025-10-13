import React from 'react';

interface image-optimizer.testProps {
  className?: string;
  children?: React.ReactNode;
}

export default function image-optimizer.test({ className = '', children }: image-optimizer.testProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}