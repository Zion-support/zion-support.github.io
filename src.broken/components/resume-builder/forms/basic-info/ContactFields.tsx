import React from 'react';

interface ContactFieldsProps {
  className?: string;
}

const ContactFields: React.FC<ContactFieldsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContactFields</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContactFields;