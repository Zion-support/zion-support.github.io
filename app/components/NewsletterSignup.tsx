import React from 'react';

interface NewsletterSignupProps {
  className?: string;
}

export default function NewsletterSignup({ className = '' }: NewsletterSignupProps) {
  return (
    <div className={`${className}`}>
      <h2>NewsletterSignup</h2>
      <p>Component content goes here.</p>
    </div>
  );
}