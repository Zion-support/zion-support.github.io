import React from 'react';

interface WebVitalsMonitorProps {
  className?: string;
}

const WebVitalsMonitor: React.FC<WebVitalsMonitorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WebVitalsMonitor</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WebVitalsMonitor;