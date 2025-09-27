import React from 'react';

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  className = ''
}) => {
  return (
    <div className={`contactform ${className}`}>
      <h2>ContactForm</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default ContactForm;
