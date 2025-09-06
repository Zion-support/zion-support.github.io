import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
          </button>
        </div>
        
        <nav className="p-4">
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;