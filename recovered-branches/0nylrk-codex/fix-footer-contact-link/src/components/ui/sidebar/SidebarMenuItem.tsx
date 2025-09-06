import React from 'react';

interface SidebarMenuItemProps {
  className?: string;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SidebarMenuItem</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SidebarMenuItem;