import React from 'react';

interface SidebarProps {
  // Add props here as needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sidebar;