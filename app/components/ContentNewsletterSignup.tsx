import React from 'react';

interface _ContentNewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}


const ContentNewsletterSignup: React.FC<_ContentNewsletterSignupProps> = ({ className = '', children }) => {
  return (
    <div className={`ontentnewslettersignup ${className}`}>
      {children}
    </div>
  );
};

ContentNewsletterSignup.displayName = 'ContentNewsletterSignup';

export default ContentNewsletterSignup;