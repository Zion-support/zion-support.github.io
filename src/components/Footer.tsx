import React from 'react';

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ className = '', children }) => {
  return (
    <div className={`footer-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Footer</h3>
          <p className="text-gray-600">This is the Footer component.</p>
        </div>
      )}
    </div>
  );
};

export default Footer;