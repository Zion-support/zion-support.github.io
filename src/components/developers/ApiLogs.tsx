import React from 'react';

interface ApiLogsProps {
  className?: string;
}

const ApiLogs: React.FC<ApiLogsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiLogs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiLogs;