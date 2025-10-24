import React from 'react';

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ className = '', children }) => {
  return (
    <div className={`layout ${className}`}>
      {children}
    </div>
  );
};

export default Layout;