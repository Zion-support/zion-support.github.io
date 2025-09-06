import React from 'react';

interface Tool-comparisonProps {
  className?: string;
}

const Tool-comparison: React.FC<Tool-comparisonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Tool-comparison</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Tool-comparison;