import React from 'react';

interface ContactformProps {
  children?: React.ReactNode;
}

const Contactform: React.FC<ContactformProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Contactform;
