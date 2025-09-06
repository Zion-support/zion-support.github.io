import React from 'react';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContactForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContactForm;