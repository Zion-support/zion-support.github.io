import React from 'react';

interface ProposalCardProps {
  className?: string;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProposalCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProposalCard;