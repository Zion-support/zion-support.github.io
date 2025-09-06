import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SkeletonLoader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SkeletonLoader;