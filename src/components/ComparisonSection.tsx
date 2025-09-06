import React from 'react';

interface ComparisonSectionProps {
  className?: string;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ComparisonSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ComparisonSection;