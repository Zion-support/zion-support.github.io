import React from 'react';

interface Iot-platformsProps {
  className?: string;
}

const Iot-platforms: React.FC<Iot-platformsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Iot-platforms</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Iot-platforms;