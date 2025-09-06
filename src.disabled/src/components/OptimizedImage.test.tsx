import React from 'react';

interface OptimizedImage.testProps {
  className?: string;
}

const OptimizedImage.test: React.FC<OptimizedImage.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OptimizedImage.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OptimizedImage.test;