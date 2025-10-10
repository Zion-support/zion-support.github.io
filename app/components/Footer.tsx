'use client';

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
    <div className={`footer-component ${className}`}>
      {children}
    </div>
  );
};

export default Footer;
