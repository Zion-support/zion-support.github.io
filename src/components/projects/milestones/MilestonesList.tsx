import React from 'react';

interface MilestonesListProps {
  className?: string;
}

const MilestonesList: React.FC<MilestonesListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MilestonesList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MilestonesList;