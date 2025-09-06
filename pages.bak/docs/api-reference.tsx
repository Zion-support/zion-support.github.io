import React from 'react';

interface Api-referenceProps {
  className?: string;
}

const Api-reference: React.FC<Api-referenceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Api-reference</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Api-reference;