import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4">
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
        <h1 className="text-xl font-bold mt-4">Navigation</h1>
        
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <a 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={onClose}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={onClose}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/services" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={onClose}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={onClose}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;