import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
          </button>
        </div>
        
        <nav className="p-4">
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;