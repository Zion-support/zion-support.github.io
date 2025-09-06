import React from 'react';

interface Api-documentationProps {
  className?: string;
}

const Api-documentation: React.FC<Api-documentationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Api-documentation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Api-documentation;