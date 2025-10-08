import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link to='/' className='text-xl font-bold text-blue-600'>
            Zion Tech Group
          </Link>
          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {navigationItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className='text-gray-700 hover:text-blue-600 transition-colors'
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-700'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden py-4 border-t'>
            {navigationItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className='block text-gray-700 hover:text-blue-600 py-2'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;

export default EnhancedNavigation;
