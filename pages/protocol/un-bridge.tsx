import React from 'react';

interface UnBridgeProps {
  className?: string;
}

const UnBridge: React.FC<UnBridgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UnBridge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UnBridge;