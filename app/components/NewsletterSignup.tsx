import React from 'react';

interface NewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NewsletterSignup({ className, children }: NewsletterSignupProps) {
  return (
    <div className={}>
      {children || 'NewsletterSignup Component'}
    </div>
  );
}
