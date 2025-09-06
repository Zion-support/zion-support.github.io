import React from 'react';

interface Loading-skeletonProps {
  className?: string;
}

const Loading-skeleton: React.FC<Loading-skeletonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Loading-skeleton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Loading-skeleton;