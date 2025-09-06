import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <nav className="space-y-2">
          <a
            href="/"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="/services"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Contact
          </a>
        </nav>
      </div>
    </aside>
  );
};