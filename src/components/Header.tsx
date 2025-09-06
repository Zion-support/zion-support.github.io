import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
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
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Services Dropdown */}
                {item.children && isServicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-md shadow-lg border border-slate-700 py-2 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
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
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-700 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <div className="text-gray-300 px-3 py-2 text-sm font-medium">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
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
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Contact Info */}
            <div className="mt-4 pt-4 border-t border-slate-700 space-y-2">
              <div className="flex items-center px-3 py-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center px-3 py-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start px-3 py-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;