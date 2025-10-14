import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const NavigationPage: React.FC<Navigationprops> = ({ onSidebarToggle: _onSidebarToggle }) => {
  const [isopen,Setisopen] = useState(false);
  const [isservicesopen,Setisservicesopen] = useState(false);
  // const [issolutionsopen,Setissolutionsopen] = useState(false);

  const toggleMenu= () => {
    setIsOpen(!isOpen);
  };

  // const_toggleservices = () => {
  //   setIsServicesOpen(!isServicesOpen);
  // };

  // const_togglesolutions = () => {
  //   setIsSolutionsOpen(!isSolutionsOpen);
  // };

  const navigation= [
    { name: 'Home', href: '/', icon: null },
    { name: 'About', href: '/about', icon: null },
    { 
      name: 'Services', 
      href: '/services', 
      icon: null,
      submenu: [
        { name: 'AI Solutions', href: '/ai-services', icon: Zap },
        { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Data Analytics', href: '/data-analytics', icon: Database },
        { name: 'Web Development', href: '/web-development', icon: Code },
        { name: 'Mobile Apps', href: '/mobile-apps', icon: Smartphone }
      ]
    },
    { name: 'Contact', href: '/contact', icon: null }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Zion Tech
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md: block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="text-gray-300 hover: text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-slate-700 py-2 z-50">
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.name}
                          to={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover: text-white hover:bg-slate-700 transition-colors"
                        >
                          {subItem.icon && <subItem.icon className="mr-3 h-4 w-4" />}
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover: text-white p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1Sm: px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.name}
                          to={subItem.href}
                          className="flex items-center text-gray-400 hover: text-white block px-3 py-2 rounded-md text-sm transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.icon && <subItem.icon className="mr-3 h-4 w-4" />}
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';
const,
  Navigation: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Zion Tech Group;
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/services" className="hover:text-blue-400">Services</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>      </div>
    </nav>
  );
};

export default Navigation;