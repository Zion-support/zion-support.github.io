import React from 'react';

interface DigitalTwinProps {
  className?: string;
}

const DigitalTwin: React.FC<DigitalTwinProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DigitalTwin</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DigitalTwin;