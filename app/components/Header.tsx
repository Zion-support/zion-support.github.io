import React from 'react';


334a97c43c32bf9e815481016c5bf31caa46a580
interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}
334a97c43c32bf9e815481016c5bf31caa46a580
const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
  return (
    <div className={`header-component ${className}`}>
      {children}
    </div>
  );
};

Header.displayName = 'Header';

export default Header;