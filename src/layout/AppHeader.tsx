import React from 'react';

import { Link, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function AppHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const nav = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Solutions', to: '/solutions' },
    { name: 'Resources', to: '/resources' },
    { name: 'Contact', to: '/contact' }
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-gray-900">Zion Tech Group</Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <Link key={item.to} to={item.to} className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-gray-900'}>
              {item.name}
            </Link>
          ))}
        </nav>
        <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-2">
            {nav.map(item => (
              <Link key={item.to} to={item.to} className="block text-gray-700" onClick={() => setMobileOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}


import { Link } from 'react-router-dom';

export function AppHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">Zion Tech Group</Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-cyan-600">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-cyan-600">Services</Link>
          <Link to="/about" className="text-gray-700 hover:text-cyan-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-cyan-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

