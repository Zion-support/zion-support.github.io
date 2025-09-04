import React from 'react';
import { NavLink } from 'react-router-dom';

const linkBase = 'block px-3 py-2 rounded-md text-sm font-medium';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-60 shrink-0 border-r border-gray-200 bg-white">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Explore</h3>
        <nav className="space-y-1">
          <NavLink to="/services" className={({isActive}) => `${linkBase} ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}>All Services</NavLink>
          <NavLink to="/solutions" className={({isActive}) => `${linkBase} ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}>Solutions</NavLink>
          <NavLink to="/pricing" className={({isActive}) => `${linkBase} ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}>Pricing</NavLink>
          <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}>Contact</NavLink>
        </nav>
      </div>
    </aside>
  );
}

