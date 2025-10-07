<<<<<<< HEAD
// import { Menu, X } from 'lucide-react';
=======
import { Menu, X } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-dbc2
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to='/' className='text-2xl font-bold text-blue-600'>
            Zion Tech Group
          </Link>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {navigationItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className='text-gray-700 hover:text-blue-600 transition-colors font-medium'
              >
                {item.name}
              </Link>
            ))}
          </div>
          
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
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default ModernNavigation;
=======
export default ModernNavigation;
>>>>>>> cursor/fix-errors-and-merge-to-main-dbc2
