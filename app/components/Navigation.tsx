import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg backdrop-blur-sm bg-white/95' : 'shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Zion Tech Group Home"
          >
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                location.pathname === '/' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                location.pathname === '/about' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              About
            </Link>
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50 animate-fade-in-down"
                  role="menu"
                  aria-label="Services submenu"
                >
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md mx-2"
                    role="menuitem"
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/micro-saas" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md mx-2"
                    role="menuitem"
                  >
                    Micro SAAS Solutions
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md mx-2"
                    role="menuitem"
                  >
                    AI Services
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md mx-2"
                    role="menuitem"
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/services-advertising" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md mx-2"
                    role="menuitem"
                  >
                    Advertising Services
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/case-studies" 
              className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                location.pathname === '/case-studies' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Case Studies
            </Link>
            <Link 
              to="/enterprise" 
              className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                location.pathname === '/enterprise' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Enterprise
            </Link>
            <Link 
              to="/team" 
              className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                location.pathname === '/team' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                location.pathname === '/contact' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in-down">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                  location.pathname === '/' ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                  location.pathname === '/about' ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                About
              </Link>
              <div className="space-y-2">
                <button
                  onClick={toggleServices}
                  className="text-gray-700 font-semibold hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 flex items-center"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 space-y-2 animate-fade-in-down">
                    <Link 
                      to="/services" 
                      className="block text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                    >
                      All Services
                    </Link>
                    <Link 
                      to="/micro-saas" 
                      className="block text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                    >
                      Micro SAAS Solutions
                    </Link>
                    <Link 
                      to="/ai-services" 
                      className="block text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                    >
                      AI Services
                    </Link>
                    <Link 
                      to="/it-services" 
                      className="block text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                    >
                      IT Services
                    </Link>
                    <Link 
                      to="/services-advertising" 
                      className="block text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                    >
                      Advertising Services
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                to="/case-studies" 
                className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                  location.pathname === '/case-studies' ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                Case Studies
              </Link>
              <Link 
                to="/enterprise" 
                className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                  location.pathname === '/enterprise' ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                Enterprise
              </Link>
              <Link 
                to="/team" 
                className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                  location.pathname === '/team' ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className={`text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                  location.pathname === '/contact' ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
