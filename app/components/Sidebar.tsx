'use client'
import React from 'react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
      <p className="text-gray-600">This is a placeholder component for Sidebar.</p>
    </div>
  );
};

export default Sidebar;
