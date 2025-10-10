import React from 'react';

const SidebarNavigation: React.FC = () => {
  return (
    <nav className="bg-slate-800 w-64 min-h-screen p-4">
      <div className="space-y-2">
        <a href="/" className="block px-4 py-2 text-white hover:bg-slate-700 rounded">
          Home
        </a>
        <a href="/services" className="block px-4 py-2 text-white hover:bg-slate-700 rounded">
          Services
        </a>
        <a href="/about" className="block px-4 py-2 text-white hover:bg-slate-700 rounded">
          About
        </a>
        <a href="/contact" className="block px-4 py-2 text-white hover:bg-slate-700 rounded">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default SidebarNavigation;