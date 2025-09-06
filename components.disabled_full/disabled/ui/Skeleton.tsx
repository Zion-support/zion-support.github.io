import React from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Skeleton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Skeleton;