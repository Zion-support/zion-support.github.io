import React from 'react';

interface ApiObservabilityStarterProps {
  className?: string;
}

const ApiObservabilityStarter: React.FC<ApiObservabilityStarterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiObservabilityStarter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiObservabilityStarter;