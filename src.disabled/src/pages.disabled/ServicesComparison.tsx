import React from 'react';

interface ServicesComparisonProps {
  className?: string;
}

const ServicesComparison: React.FC<ServicesComparisonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesComparison</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesComparison;