import React from 'react';
import Link from 'next/link';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const EnhancedNavigation: React.FC = () => {
  return (
    <nav className="bg-white/90 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {mainNavLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-4 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Get a Quote
            </Link>
          </div>
          <details className="md:hidden">
            <summary className="list-none cursor-pointer p-2 -mr-2 rounded-md hover:bg-gray-100">
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </summary>
            <div className="absolute left-0 right-0 mt-2 bg-white shadow-md border-t border-gray-200">
              <div className="flex flex-col px-4 py-3 space-y-2">
                {mainNavLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="py-2 text-gray-700 hover:text-gray-900">
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Get a Quote
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
