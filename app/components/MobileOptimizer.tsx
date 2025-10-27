import React from 'react';

interface _MobileOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function MobileOptimizer({ 
  className = '', 
  children 
}: MobileOptimizerProps) {
  return (
    <div className={'mobileoptimizer ' + className}>
      {children || <p>MobileOptimizer component</p>}
    </div>
  );
}
