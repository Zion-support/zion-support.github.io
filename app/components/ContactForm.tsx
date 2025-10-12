import React from 'react';

interface ContactFormProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ContactForm({ children, className = '' }: ContactFormProps) {
  return (
    <div className={`contactform ${className}`}>
      {children || <div>Contact Form Component</div>}
    </div>
  );
}