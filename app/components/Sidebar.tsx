
import React from 'react';

interface SidebarProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ children, isOpen = false, onClose }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      {onClose && (
        <button className="sidebar-close" onClick={onClose}>
          ×
        </button>
      )}
      {children}
    </aside>
  );
};

export default Sidebar;
