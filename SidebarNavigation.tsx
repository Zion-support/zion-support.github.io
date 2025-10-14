import React from 'react';

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between h-16 px-4">
          <h2 className="text-white text-xl font-bold">Navigation</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            ×
          </button>
        </div>
        <nav className="px-4 py-6">
          <ul className="space-y-4">
            <li>
              <a href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SidebarNavigation;