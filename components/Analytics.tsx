import React, { useEffect } from 'react';

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  className = '', 
  children 
}) => {
  useEffect(() => {
    // Analytics initialization
    console.log('Analytics initialized');
  }, []);

  return (
    <div 
      className={`analytics ${className}`}
      data-testid="analytics"
    >
      {children || `Analytics Component`}
    </div>
  );
};

export default Analytics;