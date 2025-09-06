import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block fixed left-0 top-16 w-80 h-full bg-white border-r border-gray-200 overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;