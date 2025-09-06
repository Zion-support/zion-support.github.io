import React from 'react';

interface ApiReferenceProps {
  className?: string;
}

const ApiReference: React.FC<ApiReferenceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiReference</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiReference;