import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-50 p-4 min-h-screen">
      <nav className="space-y-2">
        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
          Home
        </Link>
        <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
          Services
        </Link>
        <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
          About
        </Link>
        <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
          Contact
        </Link>
        <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
          Blog
        </Link>
        <Link to="/case-studies" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
          Case Studies
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;