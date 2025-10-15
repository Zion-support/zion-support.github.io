import React from 'react';

interface NewslettersignupProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Newslettersignup({ className = '', children }: NewslettersignupProps) {
  return (
    <div className={`NewsletterSignup-component ${className}`}>
      {children}
    </div>
  );
}