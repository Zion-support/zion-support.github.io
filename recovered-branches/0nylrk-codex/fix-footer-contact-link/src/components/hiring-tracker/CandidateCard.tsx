import React from 'react';

interface CandidateCardProps {
  className?: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CandidateCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CandidateCard;