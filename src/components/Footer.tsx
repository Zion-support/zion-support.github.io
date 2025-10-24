'use client';
import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Footer</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default Footer;
