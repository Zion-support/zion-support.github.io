'use client';

import React from 'react';

interface ContentNewsletterSignupProps {
  children?: React.ReactNode;
  className?: string;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ContentNewsletterSignup;