import React from 'react';

interface CertificationsSectionProps {
  className?: string;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CertificationsSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CertificationsSection;