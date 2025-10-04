import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='bg-slate-900 border-b border-slate-800'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
            onClick={closeMobileMenu}
          >
            Zion Tech Group
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <Link
              to='/'
              className='text-gray-300 hover:text-white transition-colors'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='text-gray-300 hover:text-white transition-colors'
            >
              About
            </Link>
            <Link
              to='/services'
              className='text-gray-300 hover:text-white transition-colors'
            >
              Services
            </Link>
            <Link
              to='/blog'
              className='text-gray-300 hover:text-white transition-colors'
            >
              Blog
            </Link>
            <Link
              to='/contact'
              className='text-gray-300 hover:text-white transition-colors'
            >
              Contact
            </Link>
          </nav>

          <div className='flex items-center space-x-4'>
            {/* Desktop CTA Button */}
            <a
              href='/contact'
              className='hidden md:block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300'
            >
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className='md:hidden text-gray-300 hover:text-white transition-colors p-2'
              aria-label='Toggle mobile menu'
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden mt-4 pb-4 border-t border-slate-800 pt-4'>
            <nav className='flex flex-col space-y-4'>
              <Link
                to='/'
                className='text-gray-300 hover:text-white transition-colors py-2'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to='/about'
                className='text-gray-300 hover:text-white transition-colors py-2'
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                to='/services'
                className='text-gray-300 hover:text-white transition-colors py-2'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                to='/blog'
                className='text-gray-300 hover:text-white transition-colors py-2'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <Link
                to='/contact'
                className='text-gray-300 hover:text-white transition-colors py-2'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <a
                href='/contact'
                className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center mt-4'
                onClick={closeMobileMenu}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
