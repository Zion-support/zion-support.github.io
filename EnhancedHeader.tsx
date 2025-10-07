<<<<<<< HEAD
// import { Menu, X } from 'lucide-react';
=======
>>>>>>> cb79024a938ec4cdfb9bf2295cb3ecd71e1ace22
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to='/' className='text-2xl font-bold text-blue-600'>
            Zion Tech Group
          </Link>
          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {navigationItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className='text-gray-700 hover:text-blue-600 transition-colors'
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-700'
          >
<<<<<<< HEAD
            {isOpen ? <span className='w-6 h-6'>✕</span> : <span className='w-6 h-6'>☰</span>}
          </button>
=======
            {isOpen ? <span className='text-xl'>✕</span> : <span className='text-xl'>☰</span>}
          </button>
        </div>
>>>>>>> cb79024a938ec4cdfb9bf2295cb3ecd71e1ace22
        {isOpen && (
          <div className='md:hidden py-4 border-t'>
            {navigationItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className='block py-2 text-gray-700 hover:text-blue-600 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
        </div>
      </div>
    </header>
  );
};

export default EnhancedHeader;
