import React from 'react';

interface ContactFormProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '', children }) => {
  return (
    <div className={`contactform-component ${className}`}>
      {children}
    </div>
  );
};

ContactForm.displayName = 'ContactForm';

export default ContactForm;
