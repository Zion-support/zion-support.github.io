import React from 'react';

interface InvestorsProps {
  className?: string;
}

const Investors: React.FC<InvestorsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Investors</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Investors;