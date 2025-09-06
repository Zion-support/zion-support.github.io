<<<<<<< HEAD
import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
    </div>
  )
}

export default Sidebar
=======
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
>>>>>>> origin/main
