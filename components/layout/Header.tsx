import React from 'react';
import Link from 'next/link';


const Header: React.FC = () => {


  const navigationItems = [{ name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="text-white font-bold">Zion Tech Group</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navigationItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-300 hover:text-white">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );

}

export default Header;
