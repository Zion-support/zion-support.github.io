import React from 'react';

interface ContactPageProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactPage: React.FC<ContactPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'contactpage ' + className}>
      {children || <p>ContactPage component</p>}
    </div>
  );
};

export default ContactPage;
