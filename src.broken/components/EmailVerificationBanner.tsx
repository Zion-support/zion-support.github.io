import React from 'react';

interface EmailVerificationBannerProps {
  className?: string;
}

const EmailVerificationBanner: React.FC<EmailVerificationBannerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EmailVerificationBanner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EmailVerificationBanner;