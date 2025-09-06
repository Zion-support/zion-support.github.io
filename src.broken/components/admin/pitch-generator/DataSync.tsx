import React from 'react';

interface DataSyncProps {
  className?: string;
}

const DataSync: React.FC<DataSyncProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DataSync</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DataSync;