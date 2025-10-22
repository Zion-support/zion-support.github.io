import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>Sidebar</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default Sidebar;
