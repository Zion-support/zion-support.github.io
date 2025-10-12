import React from 'react';

interface ContactFormProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContactForm({ className, children }: ContactFormProps) {
  return (
    <div className={}>
      {children || 'ContactForm Component'}
    </div>
  );
}
