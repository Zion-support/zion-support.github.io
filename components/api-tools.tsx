import React from 'react';

interface Api-toolsProps {
  className?: string;
}

const Api-tools: React.FC<Api-toolsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Api-tools</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Api-tools;