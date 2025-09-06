import React from 'react';

interface ItAssetDiscoveryAgentProps {
  className?: string;
}

const ItAssetDiscoveryAgent: React.FC<ItAssetDiscoveryAgentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ItAssetDiscoveryAgent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ItAssetDiscoveryAgent;