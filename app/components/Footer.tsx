import React from 'react';

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'footer ' + className}>
      {children || <p>Footer component</p>}
    </div>
  );
};

export default Footer;
