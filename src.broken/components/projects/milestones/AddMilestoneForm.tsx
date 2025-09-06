import React from 'react';

interface AddMilestoneFormProps {
  className?: string;
}

const AddMilestoneForm: React.FC<AddMilestoneFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AddMilestoneForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AddMilestoneForm;