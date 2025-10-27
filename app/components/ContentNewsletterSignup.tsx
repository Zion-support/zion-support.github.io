import React from 'react';

interface ContentNewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '', children }) => {
  return (
    <div className={`content-newsletter-signup ${className}`}>
      {children}
    </div>
  );
};

export default ContentNewsletterSignup;
