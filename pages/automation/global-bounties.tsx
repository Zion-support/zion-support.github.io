import React from 'react';

interface GlobalBountiesProps {
  className?: string;
}

const GlobalBounties: React.FC<GlobalBountiesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GlobalBounties</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GlobalBounties;