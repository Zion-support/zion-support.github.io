import React from 'react';

interface ContactInfoProps {
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContactInfo</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContactInfo;