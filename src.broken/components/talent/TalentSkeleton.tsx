import React from 'react';

interface TalentSkeletonProps {
  className?: string;
}

const TalentSkeleton: React.FC<TalentSkeletonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentSkeleton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentSkeleton;