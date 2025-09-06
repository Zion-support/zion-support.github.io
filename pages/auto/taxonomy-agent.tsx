import React from 'react';

interface TaxonomyAgentProps {
  className?: string;
}

const TaxonomyAgent: React.FC<TaxonomyAgentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TaxonomyAgent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TaxonomyAgent;