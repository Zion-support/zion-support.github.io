import React from 'react';

interface ReferralGuideProps {
  className?: string;
}

const ReferralGuide: React.FC<ReferralGuideProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReferralGuide</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReferralGuide;