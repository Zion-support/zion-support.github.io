import React from 'react';

interface ContentNewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContentNewsletterSignup({ className, children }: ContentNewsletterSignupProps) {
  return (
    <div className={`contentnewslettersignup-component ${className || ''}`}>
      {children}
    </div>
  );
}
