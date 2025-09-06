import React from 'react';

interface PerformanceProps {
  className?: string;
}

const Performance: React.FC<PerformanceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Performance</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Performance;