import React from 'react';

interface IntegrationsPageProps {
  className?: string;
}

const IntegrationsPage: React.FC<IntegrationsPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>IntegrationsPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default IntegrationsPage;