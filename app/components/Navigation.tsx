import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/enterprise', label: 'Enterprise' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
  ];

  const serviceItems = [
    { to: '/services', label: 'All Services' },
    { to: '/micro-saas', label: 'Micro SAAS Solutions' },
    { to: '/ai-services', label: 'AI Services' },
    { to: '/it-services', label: 'IT Services' },
    { to: '/services-advertising', label: 'Advertising Services' },
    { to: '/case-studies', label: 'Case Studies' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
            aria-label="Zion Tech Group - Home"
          >
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium flex items-center relative group"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors duration-300 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden py-4 border-t bg-white"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300 font-medium py-2 px-4 rounded-md"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-700 font-semibold px-4 py-2">Services</div>
                <div className="ml-4 space-y-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={closeMenu}
                      className="block text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300 py-2 px-4 rounded-md"
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
