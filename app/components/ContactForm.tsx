'use client';
import React from 'react';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ContactForm</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default ContactForm;
