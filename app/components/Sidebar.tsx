import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-slate-800 text-white w-64 p-4">
      <h3 className="text-lg font-semibold mb-4">Navigation</h3>
      <ul className="space-y-2">
        <li><a href="/" className="block hover:text-blue-400">Home</a></li>
        <li><a href="/about" className="block hover:text-blue-400">About</a></li>
        <li><a href="/services" className="block hover:text-blue-400">Services</a></li>
        <li><a href="/contact" className="block hover:text-blue-400">Contact</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;