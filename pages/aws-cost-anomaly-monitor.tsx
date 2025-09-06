import React from 'react';

interface AwsCostAnomalyMonitorProps {
  className?: string;
}

const AwsCostAnomalyMonitor: React.FC<AwsCostAnomalyMonitorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AwsCostAnomalyMonitor</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AwsCostAnomalyMonitor;