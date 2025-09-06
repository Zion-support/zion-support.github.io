import React from 'react';

interface WorkExperienceItemFormProps {
  className?: string;
}

const WorkExperienceItemForm: React.FC<WorkExperienceItemFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WorkExperienceItemForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WorkExperienceItemForm;