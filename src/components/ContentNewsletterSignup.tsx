import React from 'react';

interface ContentNewsletterSignupProps {
  className?: string;
}

export default function ContentNewsletterSignup({ className }: ContentNewsletterSignupProps) {
  return (
    <div className={className}>
      <h1>ContentNewsletterSignup</h1>
      <p>Component content</p>
    </div>
  );
}