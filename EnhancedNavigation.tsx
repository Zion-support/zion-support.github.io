import React, { useState } from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
<<<<<<< HEAD
          <Link href='/'>
            <span className='text-xl font-bold text-blue-600'>
              Zion Tech Group
            </span>
=======
          <Link to='/' className='text-xl font-bold text-blue-600'>
            Zion Tech Group
>>>>>>> origin/main
          </Link>
          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {navigationItems.map(item => (
<<<<<<< HEAD
              <Link key={item.name} href={item.href}>
                <span className='text-gray-700 hover:text-blue-600 transition-colors'>
                  {item.name}
                </span>
=======
              <Link
                key={item.name}
                to={item.href}
                className='text-gray-700 hover:text-blue-600 transition-colors'
              >
                {item.name}
>>>>>>> origin/main
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-700'
          >
<<<<<<< HEAD
            {isOpen ? <span className='w-6 h-6'>✕</span> : <span className='w-6 h-6'>☰</span>}
=======
            {isOpen ? <span className='text-xl'>✕</span> : <span className='text-xl'>☰</span>}
>>>>>>> origin/main
          </button>
        </div>
        {isOpen && (
          <div className='md:hidden py-4 border-t'>
            {navigationItems.map(item => (
<<<<<<< HEAD
              <div key={item.name} onClick={() => setIsOpen(false)}>
                <Link href={item.href}>
                  <span className='block py-2 text-gray-700 hover:text-blue-600 transition-colors'>
                    {item.name}
                  </span>
                </Link>
              </div>
=======
              <Link
                key={item.name}
                to={item.href}
                className='block text-gray-700 hover:text-blue-600 py-2'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
>>>>>>> origin/main
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
<<<<<<< HEAD

export default EnhancedNavigation;
=======
<<<<<<< HEAD
=======

export default EnhancedNavigation;
>>>>>>> cursor/fix-errors-and-merge-to-main-ccfd
>>>>>>> origin/main
