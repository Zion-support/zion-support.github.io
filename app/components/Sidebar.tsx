import React from 'react';

interface SidebarProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '', isOpen: _isOpen, onClose: _onClose }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>Sidebar</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default Sidebar;