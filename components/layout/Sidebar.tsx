import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="hidden md:block md:w-64 md:flex-shrink-0">
      <nav className="sticky top-6 space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Offerings</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
            </li>
            <li>
              <Link href="/talent" className="text-gray-600 hover:text-gray-900">Talent</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            </li>
            <li>
              <Link href="/404" className="text-gray-600 hover:text-gray-900">Status</Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

