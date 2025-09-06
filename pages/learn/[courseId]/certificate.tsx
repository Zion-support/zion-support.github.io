import React from 'react';

interface CertificateProps {
  className?: string;
}

const Certificate: React.FC<CertificateProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Certificate</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Certificate;