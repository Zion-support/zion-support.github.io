import React from 'react';

interface Performance-monitorProps {
  className?: string;
}

const Performance-monitor: React.FC<Performance-monitorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Performance-monitor</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Performance-monitor;