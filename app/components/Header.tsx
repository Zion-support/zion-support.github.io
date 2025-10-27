import React from 'react';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <header className={className} role="banner">
      {children || <p>Header</p>}
    </header>
  );
};

export default Header;