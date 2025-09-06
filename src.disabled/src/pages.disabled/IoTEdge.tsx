import React from 'react';

interface IoTEdgeProps {
  className?: string;
}

const IoTEdge: React.FC<IoTEdgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>IoTEdge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default IoTEdge;