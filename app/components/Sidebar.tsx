import React from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '', children }) => {
  return (
<div className={`sidebar-component ${className}`}>
      {children}
cursor/fix-errors-and-merge-to-main-7271
    </div>
  );
};

Sidebar.displayName = 'Sidebar';export default Sidebar;
cursor/fix-errors-and-merge-to-main-7271