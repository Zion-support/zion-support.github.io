import React from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Sidebar({ className = '', children }: SidebarProps) {
  return (
    <div className={`sidebar ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Sidebar</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}