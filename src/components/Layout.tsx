import React from 'react';

interface LayoutProps {
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  className = ''
}) => {
  return (
    <div className={`layout ${className}`}>
      <h2>Layout</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default Layout;
