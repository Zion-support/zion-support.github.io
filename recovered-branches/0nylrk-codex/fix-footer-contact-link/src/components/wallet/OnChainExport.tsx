import React from 'react';

interface OnChainExportProps {
  className?: string;
}

const OnChainExport: React.FC<OnChainExportProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OnChainExport</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OnChainExport;