import React from 'react';

interface ImprovedContactFormProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedContactForm({ className = '', children }: ImprovedContactFormProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}