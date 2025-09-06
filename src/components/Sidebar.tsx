import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">


          </button>
        </div>
        
        <nav className="p-4">

          <div className="space-y-2">
            <a href="/" className="block text-gray-300 hover:text-white py-2">Home</a>
            <a href="/about" className="block text-gray-300 hover:text-white py-2">About</a>
            <a href="/services" className="block text-gray-300 hover:text-white py-2">Services</a>
            <a href="/pricing" className="block text-gray-300 hover:text-white py-2">Pricing</a>
            <a href="/contact" className="block text-gray-300 hover:text-white py-2">Contact</a>
          </div>

        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
