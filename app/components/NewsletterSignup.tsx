import React from 'react';

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className, children }) => {
  return (
    <div className={`${className || ''}`}>
      {children || <p>NewsletterSignup component</p>}
    </div>
  );
};

export default NewsletterSignup;
