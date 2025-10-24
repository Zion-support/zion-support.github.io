'use client';
import React from 'react';

interface ContentNewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <h2>Content Newsletter Signup</h2>
      <p>Newsletter signup component for content marketing.</p>
      {children}
    </div>
  );
};

export default ContentNewsletterSignup;