import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
=======
import { Menu, X } from 'lucide-react';
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'AI Services', href: '/services/ai' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Migration', href: '/services/cloud-migration' },
        { name: 'DevOps & SRE', href: '/services/devops' },
        { name: 'Mobile Development', href: '/services/mobile-development' },
        { name: 'IT Support', href: '/services/it-support' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'Blockchain', href: '/services/blockchain' }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

  return (
<<<<<<< HEAD
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Services Dropdown */}
                {item.children && isServicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-600 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600 transition-colors">
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
=======
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
<<<<<<< HEAD
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <div className="text-gray-700 px-3 py-2 text-sm font-medium">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Contact Info */}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-600 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start px-3 py-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
=======
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900 py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          </div>
        )}
      </div>
    </header>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
