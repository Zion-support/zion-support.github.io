import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">Navigation</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="block px-3 py-2 rounded hover:bg-gray-700">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="block px-3 py-2 rounded hover:bg-gray-700">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block px-3 py-2 rounded hover:bg-gray-700">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="block px-3 py-2 rounded hover:bg-gray-700">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;