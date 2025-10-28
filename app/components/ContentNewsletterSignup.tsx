<<<<<<< HEAD

import React from 'react';
interface ContentNewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '', children }) => {
  return (
    <div className={`content-newsletter-signup ${className}`}>
      {children}
    </div>
  );
};

ContentNewsletterSignup.displayName = 'ContentNewsletterSignup';

export default ContentNewsletterSignup;