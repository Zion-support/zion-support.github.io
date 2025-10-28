import React from 'react';

interface ContactPageProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactPage: React.FC<ContactPageProps> = (_{ className = '', _children }) => {
  return <div className={`contact-page ${className}`}>{children}</div>;
};

export default ContactPage;