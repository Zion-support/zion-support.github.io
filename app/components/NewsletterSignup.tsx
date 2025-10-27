import React from 'react';

interface NewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`newsletter-signup ${className}`}>
      {children || <p>Newsletter Signup component</p>}
    </div>
  );
};

export default NewsletterSignup;
