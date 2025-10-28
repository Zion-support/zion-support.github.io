import React from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '', children }) => {
  return (
    <div className={`sidebar ${className}`}>
      {children || (
        <div className="p-4">
          <h2>Sidebar</h2>
          <p>Component implementation coming soon...</p>
        </div>
      )}
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;