import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40 lg:block hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Navigation</h2>
        <nav className="space-y-2">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/pricing"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Pricing
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;