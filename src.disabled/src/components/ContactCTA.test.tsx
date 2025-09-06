import React from 'react';

interface ContactCTA.testProps {
  className?: string;
}

const ContactCTA.test: React.FC<ContactCTA.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContactCTA.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContactCTA.test;