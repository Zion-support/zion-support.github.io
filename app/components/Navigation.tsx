import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to="/ai-services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    AI Services
                  </Link>
                  <Link
                    to="/it-services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    IT Services
                  </Link>
                  <Link
                    to="/micro-saas"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Micro SAAS
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/pricing"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/demo"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/ai-services"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Micro SAAS
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                to="/pricing"
                className="text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              <Link
                to="/demo"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;