'use client';
import React from 'react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Sidebar</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default Sidebar;
