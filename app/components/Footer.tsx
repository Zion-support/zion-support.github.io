import React from 'react';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Footer;
