import React from 'react';

interface ContactForm.testProps {
  className?: string;
}

const ContactForm.test: React.FC<ContactForm.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContactForm.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContactForm.test;