import React from 'react';

interface IntegrationsProps {
  className?: string;
}

const Integrations: React.FC<IntegrationsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Integrations</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Integrations;