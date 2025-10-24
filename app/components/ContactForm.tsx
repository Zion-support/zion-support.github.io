'use client'
import React from 'react';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
      <p className="text-gray-600">This is a placeholder component for Contact Form.</p>
    </div>
  );
};

export default ContactForm;
