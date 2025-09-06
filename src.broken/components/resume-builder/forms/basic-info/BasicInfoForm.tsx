import React from 'react';

interface BasicInfoFormProps {
  className?: string;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BasicInfoForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BasicInfoForm;