import React from 'react';

interface WorkExperienceFormProps {
  className?: string;
}

const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WorkExperienceForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WorkExperienceForm;