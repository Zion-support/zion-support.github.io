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
    <div className={'newslettersignup ' + className}>
      {children || <p>NewsletterSignup component</p>}
    </div>
  );
};

export default NewsletterSignup;
