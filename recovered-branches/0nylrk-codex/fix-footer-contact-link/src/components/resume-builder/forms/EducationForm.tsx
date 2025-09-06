import React from 'react';

interface EducationFormProps {
  className?: string;
}

const EducationForm: React.FC<EducationFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EducationForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EducationForm;