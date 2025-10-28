import React from 'react';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
  return (
    <div className={`header-component ${className}`}>
      {children}
    </div>
  );
};

Header.displayName = 'Header';

export default Header;