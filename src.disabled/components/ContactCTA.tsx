import React from 'react';

interface ContactCTAProps {
  className?: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContactCTA</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContactCTA;