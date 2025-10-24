import React from 'react';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
  return (
    <div className={`header ${className}`}>
      {children}
    </div>
  );
};

export default Header;