import React from 'react';

interface WorkFuturesSimulatorProps {
  className?: string;
}

const WorkFuturesSimulator: React.FC<WorkFuturesSimulatorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WorkFuturesSimulator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WorkFuturesSimulator;