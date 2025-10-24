import React from 'react';
<<<<<<< HEAD
const ContactPage = () => {
  return (
    <div>h1>Contact Page</h1>p>Contact information coming soon.</p>/div>
  );
};
export default ContactPage;
=======

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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
