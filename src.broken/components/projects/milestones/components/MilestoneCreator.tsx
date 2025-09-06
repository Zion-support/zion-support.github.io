import React from 'react';

interface MilestoneCreatorProps {
  className?: string;
}

const MilestoneCreator: React.FC<MilestoneCreatorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MilestoneCreator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MilestoneCreator;