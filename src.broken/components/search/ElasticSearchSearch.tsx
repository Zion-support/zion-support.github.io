import React from 'react';

interface ElasticSearchSearchProps {
  className?: string;
}

const ElasticSearchSearch: React.FC<ElasticSearchSearchProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ElasticSearchSearch</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ElasticSearchSearch;