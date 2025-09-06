import React from 'react';

interface EducationFormFieldsProps {
  className?: string;
}

const EducationFormFields: React.FC<EducationFormFieldsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EducationFormFields</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EducationFormFields;