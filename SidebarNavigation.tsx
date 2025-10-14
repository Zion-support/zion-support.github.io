import React from 'react';

export default function SidebarNavigation() {
  return (
    <nav className="bg-slate-800 text-white p-4">
      <h2 className="text-lg font-semibold mb-4">Navigation</h2>
      <ul className="space-y-2">
        <li><a href="/" className="hover:text-blue-300">Home</a></li>
        <li><a href="/about" className="hover:text-blue-300">About</a></li>
        <li><a href="/services" className="hover:text-blue-300">Services</a></li>
        <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
      </ul>
    </nav>
  );
}