import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Wifi, Server, Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const navigation = [
    {
      name: 'AI Solutions',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { name: 'AI Voice Assistant Enterprise', href: '/ai-voice-assistant-enterprise' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Automation Suite', href: '/ai-automation-suite' },
        { name: 'AI Cybersecurity Platform', href: '/ai-cybersecurity-platform' },
        { name: 'AI E-commerce Platform', href: '/ai-ecommerce-platform' },
        { name: 'AI Healthcare Platform', href: '/ai-healthcare-platform' },
        { name: 'AI Financial Platform', href: '/ai-financial-platform' },
        { name: 'AI Education Platform', href: '/ai-education-platform' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: <Wifi className="w-4 h-4" />
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: <Server className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                AI & IT Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  onMouseEnter={() => item.dropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => item.dropdown && setIsServicesOpen(false)}
                >
                  {item.icon && <span className="text-cyan-400">{item.icon}</span>}
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-slate-700/50 py-2 z-50">
                    <div className="py-2 relative z-10">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 group relative"
                        >
                          <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                          <span className="text-sm group-hover:text-cyan-300 transition-colors duration-200">{dropdownItem.name}</span>
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+1-302-464-0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 relative group overflow-hidden">
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-700/50">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-slate-700/50 px-4 py-3 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon && <span className="text-cyan-400">{item.icon}</span>}
                    <span>{item.name}</span>
                  </Link>
                  {item.dropdown && (
                    <div className="ml-6 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block text-sm text-gray-400 hover:text-cyan-400 px-4 py-2 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;