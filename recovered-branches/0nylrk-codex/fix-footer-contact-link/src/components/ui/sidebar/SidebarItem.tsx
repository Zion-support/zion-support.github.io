import React from 'react';

interface SidebarItemProps {
  className?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SidebarItem</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SidebarItem;