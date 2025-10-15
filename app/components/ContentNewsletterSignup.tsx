import React from 'react';

interface ContentnewslettersignupProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Contentnewslettersignup({ className = '', children }: ContentnewslettersignupProps) {
  return (
    <div className={`ContentNewsletterSignup-component ${className}`}>
      {children}
    </div>
  );
}