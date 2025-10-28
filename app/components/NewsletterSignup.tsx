import React from 'react';

interface NewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className = '', children }) => {
  return (
    <div className={`newslettersignup-component ${className}`}>
      {children}
    </div>
  );
};

NewsletterSignup.displayName = 'NewsletterSignup';

export default NewsletterSignup;
