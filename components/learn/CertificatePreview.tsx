import React from 'react';

interface CertificatePreviewProps {
  className?: string;
}

const CertificatePreview: React.FC<CertificatePreviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CertificatePreview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CertificatePreview;