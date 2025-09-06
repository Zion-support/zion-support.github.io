import React from 'react';

interface AIMatchingResultsProps {
  className?: string;
}

const AIMatchingResults: React.FC<AIMatchingResultsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIMatchingResults</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIMatchingResults;