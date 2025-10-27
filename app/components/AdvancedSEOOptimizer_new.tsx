import React from 'react';

interface AdvancedSEOOptimizerNewProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdvancedSEOOptimizerNew({ 
  className = '', 
  children 
}: AdvancedSEOOptimizerNewProps) {
  return (
    <div className={`advancedseooptimizer-new ${className}`}>
      {children || <p>AdvancedSEOOptimizerNew component</p>}
    </div>
  );
}