import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-purple-500/20 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
