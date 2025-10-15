import React from 'react';

interface usePerformanceProps {
  className?: string;
  children?: React.ReactNode;
}

const usePerformance: React.FC<usePerformanceProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`useperformance ${className}`}>
      {children}
    </div>
  );
};

export default usePerformance;