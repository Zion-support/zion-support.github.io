import React from 'react';

interface ContactformProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Contactform({ className = '', children }: ContactformProps) {
  return (
    <div className={`ContactForm-component ${className}`}>
      {children}
    </div>
  );
}