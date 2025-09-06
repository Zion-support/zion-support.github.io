import React from 'react';

interface ReferralLinkProps {
  className?: string;
}

const ReferralLink: React.FC<ReferralLinkProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReferralLink</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReferralLink;