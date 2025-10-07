// import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';

const EnhancedHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className='bg-white shadow-lg'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <Link href='/'>
            <span className='text-2xl font-bold text-blue-600'>
              Zion Tech Group
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {navigationItems.map(item => (
              <Link key={item.name} href={item.href}>
                <span className='text-gray-700 hover:text-blue-600 transition-colors'>
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-700'
          >
            {isOpen ? <span className='text-xl'>✕</span> : <span className='text-xl'>☰</span>}
          </button>
        </div>
        {isOpen && (
          <div className='md:hidden py-4 border-t'>
            {navigationItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className='block py-2 text-gray-700 hover:text-blue-600 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default EnhancedHeader;