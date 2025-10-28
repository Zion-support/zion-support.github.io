interface ContentNewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

import React from 'react';





const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '', children }) => {
  return (
    <div className={`contentnewslettersignup-component ${className}`}>
      {children}
    </div>
  );
}
