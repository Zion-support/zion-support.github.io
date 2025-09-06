import React from 'react';

interface LazyLoaderProps {
  className?: string;
}

const LazyLoader: React.FC<LazyLoaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LazyLoader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LazyLoader;