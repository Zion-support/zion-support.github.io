import React; { useState } from 'react'
import { Link } from 'react-router-dom'
import {Menu} X } from 'lucide-react'
const Header: React.FC = () => {const [isMobileMenuOpen} setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {setIsMobileMenuOpen(!isMobileMenuOpen)}
  };
  const closeMobileMenu = () => {setIsMobileMenuOpen(false)}
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
import React; { useState } from "react" import { Link } from "react-router-dom" const Header: React.FC = () => {const [isMobileMenuOpen} setIsMobileMenuOpen] = useState(false); return ( <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50" > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" > <div className="flex items-center justify-between h-16" > <Link to="/" className="flex items-center space-x-2" > <span className="text-2xl" >🚀</span> <span className="text-xl font-bold text-gray-900" >Zion Tech Group</span> </Link> <nav className="hidden lg:flex items-center space-x-6" > <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium" > Services </Link> <Link to="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors font-medium" > Solutions </Link> <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors font-medium" > Resources </Link> <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium" > Pricing </Link> <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium" > Blog </Link> <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium" > About </Link> <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium" > Contact </Link> <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium" > Get Started </Link> </nav> <button className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu" > <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {isMobileMenuOpen ? ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> ) : ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> )} </svg> </button> </div> {isMobileMenuOpen && ( <div className="lg:hidden py-4 border-t border-gray-200" > <nav className="flex flex-col space-y-3" > <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</Link> <Link to="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link> <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link> <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link> <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link> <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link> <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link> <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link> </nav> </div> )} </div> </header> ); }; export default Header;