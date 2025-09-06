import React from 'react';

interface InvestorRelationsProps {
  className?: string;
}

const InvestorRelations: React.FC<InvestorRelationsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InvestorRelations</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InvestorRelations;