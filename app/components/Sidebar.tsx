import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h3 className="text-lg font-semibold mb-4">Services</h3>
      <ul className="space-y-2">
        <li><a href="/ai-services" className="hover:text-gray-300">AI Services</a></li>
        <li><a href="/it-services" className="hover:text-gray-300">IT Services</a></li>
        <li><a href="/5g-solutions" className="hover:text-gray-300">5G Solutions</a></li>
        <li><a href="/micro-saas-solutions" className="hover:text-gray-300">Micro SaaS</a></li>
      </ul>
    </aside>
  );
}