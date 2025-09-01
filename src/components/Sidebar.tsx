import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <div className={`fixed left-0 top-16 h-full w-64 bg-slate-800 border-r border-slate-700 transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0`}>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
        <nav className="space-y-2">
          <a href="/" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            Home
          </a>
          <a href="/services" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            Services
          </a>
          <a href="/solutions" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            Solutions
          </a>
          <a href="/about" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            About
          </a>
          <a href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;