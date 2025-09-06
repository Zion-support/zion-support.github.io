import React from 'react';

interface DataProtectionProps {
  className?: string;
}

const DataProtection: React.FC<DataProtectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DataProtection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DataProtection;