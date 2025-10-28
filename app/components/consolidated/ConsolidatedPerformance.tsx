'use client';

import React from 'react';

interface ConsolidatedPerformanceProps {
  className?: string;
  children?: React.ReactNode;
}

const ConsolidatedPerformance: React.FC<ConsolidatedPerformanceProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`consolidatedperformance-component ${className}`}>
      {children}
    </div>
  );
};

ConsolidatedPerformance.displayName = 'ConsolidatedPerformance';

export default ConsolidatedPerformance;