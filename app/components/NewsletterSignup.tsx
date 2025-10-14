'use client';
import React from 'react';

interface NewsletterSignupProps {
  children?: React.ReactNode;
  className?: string;
}

export default function NewsletterSignup({ children, className = '' }: NewsletterSignupProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}