import React from 'react';

interface UNBridgeProps {
  className?: string;
}

const UNBridge: React.FC<UNBridgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UNBridge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UNBridge;