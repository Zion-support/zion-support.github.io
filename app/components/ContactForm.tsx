import React from 'react';

interface ContactFormProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactForm: React.FC<ContactFormProps> = ({ className, children }) => {
  return (
    <div className={`contactform-component ${className || ''}`}>
      {children || <p>ContactForm Component</p>}
    </div>
  );
};

export default ContactForm;
