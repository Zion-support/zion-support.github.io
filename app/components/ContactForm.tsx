import React from 'react';

interface ContactFormProps {
  className?: string;
  children?: React.ReactNode;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className = '', children }) => {
  return (
    <div className={`contactform ${className}`}>
      {children}
    </div>
  );
};

export default ContactForm;