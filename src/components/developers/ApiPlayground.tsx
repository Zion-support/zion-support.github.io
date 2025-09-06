import React from 'react';

interface ApiPlaygroundProps {
  className?: string;
}

const ApiPlayground: React.FC<ApiPlaygroundProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiPlayground</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiPlayground;