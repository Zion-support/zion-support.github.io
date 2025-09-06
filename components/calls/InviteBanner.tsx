import React from 'react';

interface InviteBannerProps {
  className?: string;
}

const InviteBanner: React.FC<InviteBannerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InviteBanner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InviteBanner;