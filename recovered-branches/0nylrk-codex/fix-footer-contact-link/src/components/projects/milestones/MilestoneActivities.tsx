import React from 'react';

interface MilestoneActivitiesProps {
  className?: string;
}

const MilestoneActivities: React.FC<MilestoneActivitiesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MilestoneActivities</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MilestoneActivities;