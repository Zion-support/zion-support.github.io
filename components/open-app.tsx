import React from 'react';

interface Open-appProps {
  className?: string;
}

const Open-app: React.FC<Open-appProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Open-app</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Open-app;