import React from 'react';

interface SidebarGroupProps {
  className?: string;
}

const SidebarGroup: React.FC<SidebarGroupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SidebarGroup</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SidebarGroup;