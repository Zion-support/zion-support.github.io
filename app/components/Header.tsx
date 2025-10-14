import React from 'react';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
  return (
    <div className={`header-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Header</h3>
          <p className="text-gray-600">This is the Header component.</p>
        </div>
      )}
    </div>
  );
};

export default Header;