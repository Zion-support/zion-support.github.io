import React from 'react';
import Link from 'next/link';

export default function SidebarNavigation(): React.JSX.Element {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav>
        <ul className="space-y-2">
          <li><Link href="/" className="block text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><Link href="/services" className="block text-gray-700 hover:text-blue-600">Services</Link></li>
          <li><Link href="/about" className="block text-gray-700 hover:text-blue-600">About</Link></li>
          <li><Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </aside>
  );
}