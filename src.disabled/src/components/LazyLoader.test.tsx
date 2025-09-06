import React from 'react';

interface LazyLoader.testProps {
  className?: string;
}

const LazyLoader.test: React.FC<LazyLoader.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LazyLoader.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LazyLoader.test;