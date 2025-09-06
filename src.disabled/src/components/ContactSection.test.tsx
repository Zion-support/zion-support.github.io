import React from 'react';

interface ContactSection.testProps {
  className?: string;
}

const ContactSection.test: React.FC<ContactSection.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContactSection.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContactSection.test;