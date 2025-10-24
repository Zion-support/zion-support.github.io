import React from 'react';

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ className = '', children }) => {
  return (
    <div className={`footer ${className}`}>
      {children}
    </div>
  );
};

export default Footer;