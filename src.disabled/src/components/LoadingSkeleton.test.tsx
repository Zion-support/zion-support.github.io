import React from 'react';

interface LoadingSkeleton.testProps {
  className?: string;
}

const LoadingSkeleton.test: React.FC<LoadingSkeleton.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoadingSkeleton.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoadingSkeleton.test;