import React from 'react';

interface _HeaderProps {
  className?: string;
  children?: React.ReactNode;
}


const Header: React.FC<_HeaderProps> = ({ className = '', children }) => {
  return (
    <div className={`eader ${className}`}>
      {children}
    </div>
  );
};

Header.displayName = 'Header';

export default Header;