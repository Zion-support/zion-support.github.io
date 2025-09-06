import React from 'react';

interface CertificationFormFieldsProps {
  className?: string;
}

const CertificationFormFields: React.FC<CertificationFormFieldsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CertificationFormFields</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CertificationFormFields;