import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-100">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/services" className="block px-3 py-2 rounded hover:bg-gray-100">
              Services
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="block px-3 py-2 rounded hover:bg-gray-100">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}