import React from 'react';

interface IoTEdgeComputingProps {
  className?: string;
}

const IoTEdgeComputing: React.FC<IoTEdgeComputingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>IoTEdgeComputing</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default IoTEdgeComputing;