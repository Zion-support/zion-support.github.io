
cursor/fix-errors-and-merge-to-main-7271
import React from 'react';

interface ContentNewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '', children }) => {
  return (
    <div className={`contentnewslettersignup-component ${className}`}>
      {children}
    </div>
  );
};

ContentNewsletterSignup.displayName = 'ContentNewsletterSignup';

export default ContentNewsletterSignup;