import React from 'react';

interface Contact.pageProps {
  className?: string;
}

const Contact.page: React.FC<Contact.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Contact.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Contact.page;