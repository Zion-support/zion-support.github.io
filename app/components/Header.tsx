interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

import React, { ReactNode } from 'react';





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
}


export default Header;