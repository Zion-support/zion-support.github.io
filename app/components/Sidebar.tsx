import React from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ className, children }) => {
  return (
    <div className={`sidebar-component ${className || ''}`}>
      {children}
    </div>
  );
};

export default Sidebar;
