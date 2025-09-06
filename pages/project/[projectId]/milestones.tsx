import React from 'react';

interface MilestonesProps {
  className?: string;
}

const Milestones: React.FC<MilestonesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Milestones</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Milestones;