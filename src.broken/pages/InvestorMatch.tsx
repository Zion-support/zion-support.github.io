import React from 'react';

interface InvestorMatchProps {
  className?: string;
}

const InvestorMatch: React.FC<InvestorMatchProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InvestorMatch</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InvestorMatch;