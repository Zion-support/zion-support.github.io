import React from 'react';

interface MetadataManagerProps {
  className?: string;
}

const MetadataManager: React.FC<MetadataManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MetadataManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MetadataManager;