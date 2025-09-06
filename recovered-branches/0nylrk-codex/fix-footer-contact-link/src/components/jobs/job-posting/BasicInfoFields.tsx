import React from 'react';

interface BasicInfoFieldsProps {
  className?: string;
}

const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BasicInfoFields</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BasicInfoFields;