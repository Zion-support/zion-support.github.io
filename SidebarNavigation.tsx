import React from "react";

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold text-white">Navigation</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            ×
          </button>
        </div>
        <nav className="mt-8">
          <ul className="space-y-2 px-4">
            <li>
              <a href="/" className="block text-white hover:text-gray-300 py-2">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block text-white hover:text-gray-300 py-2">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="block text-white hover:text-gray-300 py-2">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="block text-white hover:text-gray-300 py-2">
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