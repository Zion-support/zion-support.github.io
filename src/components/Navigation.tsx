import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

type NavItem = { name: string; href: string };

const navItems: NavItem[] = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="text-white font-bold">Zion Tech Group</Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map(item => (
            <Link key={item.name} href={item.href} className="text-gray-300 hover:text-white">
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded">Contact</Link>
        </div>
        <button aria-label="Open menu" onClick={() => setOpen(v => !v)} className="md:hidden text-gray-200">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <div className="px-4 py-3 space-y-2">
            {navItems.map(item => (
              <Link key={item.name} href={item.href} className="block text-gray-300 hover:text-white">
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
