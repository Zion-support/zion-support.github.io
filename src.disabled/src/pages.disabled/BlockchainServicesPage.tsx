import React from 'react';

interface BlockchainServicesPageProps {
  className?: string;
}

const BlockchainServicesPage: React.FC<BlockchainServicesPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BlockchainServicesPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BlockchainServicesPage;