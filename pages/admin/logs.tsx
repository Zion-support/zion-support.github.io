import React from 'react';

interface LogsProps {
  className?: string;
}

const Logs: React.FC<LogsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Logs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Logs;