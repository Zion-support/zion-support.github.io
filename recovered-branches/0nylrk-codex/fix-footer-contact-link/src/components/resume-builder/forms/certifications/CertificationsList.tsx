import React from 'react';

interface CertificationsListProps {
  className?: string;
}

const CertificationsList: React.FC<CertificationsListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CertificationsList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CertificationsList;