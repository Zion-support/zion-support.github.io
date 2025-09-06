import React from 'react';

interface CertificationsFormProps {
  className?: string;
}

const CertificationsForm: React.FC<CertificationsFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CertificationsForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CertificationsForm;