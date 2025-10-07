<<<<<<< HEAD
import React from 'react';
=======
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
import { Link } from 'react-router-dom';

interface ModernNavigationProps {
  className?: string;
}

const ModernNavigation: React.FC<ModernNavigationProps> = ({ className = '' }) => {
<<<<<<< HEAD
=======
  const [isOpen, setIsOpen] = useState(false);
  
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`bg-white shadow-lg ${className}`}>
<<<<<<< HEAD
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex space-x-8">
=======
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <Link to='/' className='text-2xl font-bold text-blue-600'>
            Zion Tech Group
          </Link>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
            {navigationItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
<<<<<<< HEAD
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
=======
                className='text-gray-700 hover:text-blue-600 transition-colors font-medium'
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
              >
                {item.name}
              </Link>
            ))}
          </div>
<<<<<<< HEAD
        </div>
=======
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-700 hover:text-blue-600 transition-colors'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden py-4 border-t border-gray-200'>
            {navigationItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className='block py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
      </div>
    </nav>
  );
};

export default ModernNavigation;
