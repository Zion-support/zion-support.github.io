import React from 'react';

interface ApiDemoProps {
  className?: string;
}

const ApiDemo: React.FC<ApiDemoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiDemo</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiDemo;