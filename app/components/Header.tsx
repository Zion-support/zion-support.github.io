import React from 'react';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

cursor/fix-errors-and-merge-to-main-7271

const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
  return (
    <div className={`header-component ${className}`}>
      {children}
    </div>
  );
};

Header.displayName = 'Header';

export default Header;