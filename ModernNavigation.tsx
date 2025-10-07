import React, { useState } from 'react';
import Link from 'next/link';

interface ModernNavigationProps {
  className?: string;
}

const ModernNavigation: React.FC<ModernNavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`bg-white shadow-lg ${className}`}>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <Link href='/'>
            <span className='text-2xl font-bold text-blue-600'>
              Zion Tech Group
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {navigationItems.map(item => (
              <Link key={item.name} href={item.href}>
                <span className='text-gray-700 hover:text-blue-600 transition-colors font-medium'>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-700 p-2'
          >
            {isOpen ? <span className='w-6 h-6'>✕</span> : <span className='w-6 h-6'>☰</span>}
          </button>
        </div>
        {isOpen && (
          <div className='md:hidden py-4 border-t'>
            {navigationItems.map(item => (
              <div key={item.name} onClick={() => setIsOpen(false)}>
                <Link href={item.href}>
                  <span className='block py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium'>
                    {item.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default ModernNavigation;