import React from 'react';

interface MilestoneManagerProps {
  className?: string;
}

const MilestoneManager: React.FC<MilestoneManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MilestoneManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MilestoneManager;