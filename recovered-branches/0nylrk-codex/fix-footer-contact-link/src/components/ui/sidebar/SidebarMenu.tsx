import React from 'react';

interface SidebarMenuProps {
  className?: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SidebarMenu</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SidebarMenu;