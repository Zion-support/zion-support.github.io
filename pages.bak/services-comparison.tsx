import React from 'react';

interface Services-comparisonProps {
  className?: string;
}

const Services-comparison: React.FC<Services-comparisonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Services-comparison</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Services-comparison;