import React from 'react';

interface PartnerReferralLinksProps {
  className?: string;
}

const PartnerReferralLinks: React.FC<PartnerReferralLinksProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PartnerReferralLinks</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PartnerReferralLinks;