import React from 'react';

interface JobDetailsSkeletonProps {
  className?: string;
}

const JobDetailsSkeleton: React.FC<JobDetailsSkeletonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>JobDetailsSkeleton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default JobDetailsSkeleton;