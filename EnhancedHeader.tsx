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
            {isOpen ? <span className='w-6 h-6'>✕</span> : <span className='w-6 h-6'>☰</span>}
          </button>
        </div>
        {isOpen && (
          <div className='md:hidden py-4 border-t'>
            {navigationItems.map(item => (
              <div key={item.name} onClick={() => setIsOpen(false)}>
                <Link href={item.href}>
                  <span className='block py-2 text-gray-700 hover:text-blue-600 transition-colors'>
                    {item.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default EnhancedHeader;