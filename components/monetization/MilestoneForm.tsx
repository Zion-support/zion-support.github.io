import React from 'react';

interface MilestoneFormProps {
  className?: string;
}

const MilestoneForm: React.FC<MilestoneFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MilestoneForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MilestoneForm;