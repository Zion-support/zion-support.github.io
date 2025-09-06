import React from 'react';

interface MetadataFormProps {
  className?: string;
}

const MetadataForm: React.FC<MetadataFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MetadataForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MetadataForm;