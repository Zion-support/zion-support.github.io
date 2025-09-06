import React from 'react';

interface FundraisingProps {
  className?: string;
}

const Fundraising: React.FC<FundraisingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Fundraising</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Fundraising;