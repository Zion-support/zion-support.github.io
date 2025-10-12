import React from 'react';

interface ContactPageBroken2Props {
  className?: string;
  children?: React.ReactNode;
}

const ContactPageBroken2: React.FC<ContactPageBroken2Props> = ({ className = '', children }) => {
  return (
    <div className={`contact-page-broken2 ${className}`}>
      {children}
    </div>
  );
};

export default ContactPageBroken2;
