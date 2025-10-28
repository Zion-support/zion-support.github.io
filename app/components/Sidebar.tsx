import React from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '', children }) => {
  return (
<div className={`sidebar-component ${className}`}>
      {children || <h2>Sidebar</h2>}
334a97c43c32bf9e815481016c5bf31caa46a580
    </div>
  );
};

Sidebar.displayName = 'Sidebar';export default Sidebar;