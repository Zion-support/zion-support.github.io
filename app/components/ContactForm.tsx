import React from 'react';

interface ContactFormProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContactForm({ className = '', children }: ContactFormProps) {
  return (
    <div className={`contactform ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">ContactForm</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}