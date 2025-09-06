import React from 'react';

interface ProposalsProps {
  className?: string;
}

const Proposals: React.FC<ProposalsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Proposals</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Proposals;