import React from 'react';

interface DataQualityMonitorProps {
  className?: string;
}

const DataQualityMonitor: React.FC<DataQualityMonitorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DataQualityMonitor</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DataQualityMonitor;