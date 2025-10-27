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

export default Header;
