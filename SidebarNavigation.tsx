import React from 'react';
import Link from 'next/link';

const SidebarNavigation: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <Link href="/" className="text-xl font-bold">
          Zion Tech Group
        </Link>
      </div>
      <nav className="mt-8">
        <ul className="space-y-2">
          <li>
            <Link href="/services" className="block px-4 py-2 hover:bg-gray-700 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/products" className="block px-4 py-2 hover:bg-gray-700 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-700 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-700 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNavigation;