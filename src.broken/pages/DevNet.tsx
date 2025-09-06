import React from 'react';

interface DevNetProps {
  className?: string;
}

const DevNet: React.FC<DevNetProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DevNet</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DevNet;