import React from 'react';

interface UploadSectionProps {
  className?: string;
}

const UploadSection: React.FC<UploadSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UploadSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UploadSection;