import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>Footer</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default Footer;