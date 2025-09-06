import React from 'react';

interface Api-observabilityProps {
  className?: string;
}

const Api-observability: React.FC<Api-observabilityProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Api-observability</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Api-observability;