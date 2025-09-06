import React from 'react';

interface TalentResultsProps {
  className?: string;
}

const TalentResults: React.FC<TalentResultsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentResults</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentResults;