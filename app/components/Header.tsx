
import React from 'react';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
  return (
    <header className={`header ${className}`}>
      {children}
    </header>
  );
};

Header.displayName = 'Header';

export default Header;