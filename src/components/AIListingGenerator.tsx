import React from 'react';

interface AIListingGeneratorProps {
  className?: string;
}

const AIListingGenerator: React.FC<AIListingGeneratorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIListingGenerator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIListingGenerator;