import React from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '', children }) => {
  return (
    <div className={`sidebar-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Sidebar</h3>
          <p className="text-gray-600">This is the Sidebar component.</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;