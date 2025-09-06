import React from 'react';

interface ZapierIntegrationProps {
  className?: string;
}

const ZapierIntegration: React.FC<ZapierIntegrationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ZapierIntegration</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ZapierIntegration;