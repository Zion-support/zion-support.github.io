import React from 'react';

interface ContactPageProps {
  className?: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContactPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContactPage;