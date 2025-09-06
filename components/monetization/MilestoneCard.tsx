import React from 'react';

interface MilestoneCardProps {
  className?: string;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MilestoneCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MilestoneCard;