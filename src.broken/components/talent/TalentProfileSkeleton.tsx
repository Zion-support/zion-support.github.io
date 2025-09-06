import React from 'react';

interface TalentProfileSkeletonProps {
  className?: string;
}

const TalentProfileSkeleton: React.FC<TalentProfileSkeletonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentProfileSkeleton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentProfileSkeleton;