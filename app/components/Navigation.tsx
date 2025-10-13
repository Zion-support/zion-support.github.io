import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Brain, Cloud, Shield, Code, Smartphone } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Code },
        { name: 'Cloud Solutions', href: '/cloud-infrastructure', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Micro SAAS', href: '/micro-saas', icon: Zap },
        { name: '5G Solutions', href: '/5g-solutions', icon: Smartphone }
      ]
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link to={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-500/10"
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    <span className="flex items-center">
                      {item.name}
                      {item.submenu && <ChevronDown className="inline w-4 h-4 ml-1" />}
                    </span>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl py-2 z-50 border border-purple-500/20">
                      {item.submenu.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link key={subItem.name}
                            to={subItem.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-purple-500/10 transition-all duration-300"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <Icon className="w-4 h-4 mr-3 text-cyan-400" />
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-purple-500/20">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link to={item.href}
                    className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link key={subItem.name}
                            to={subItem.href}
                            className="flex items-center text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="w-4 h-4 mr-3 text-cyan-400" />
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-purple-500/20">
                <Link to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white block px-3 py-3 rounded-md text-base font-semibold text-center transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;