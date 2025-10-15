import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDownIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onSidebarToggle) onSidebarToggle();
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleSolutionsMenu = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigation = [
    { name: 'Home', href: '/', icon: Menu },
    { name: 'Services', href: '/services', icon: Menu, submenu: [
      { name: 'AI Solutions', href: '/ai-solutions' },
      { name: '5G Services', href: '/5g-solutions' },
      { name: 'Cloud Services', href: '/cloud-services' }
    ]},
    { name: 'About', href: '/about', icon: Menu },
    { name: 'Careers', href: '/careers', icon: Menu },
    { name: 'Contact', href: '/contact', icon: Menu }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              Zion Tech
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/careers" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Careers
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={item.name === 'Services' ? toggleServicesMenu : toggleSolutionsMenu}
                      className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href) || (item.submenu && item.submenu.some(sub => isActive(sub.href)))
                          ? 'text-white bg-slate-700'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
                      }`}>
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                      <ChevronDownIcon className={`w-4 h-4 ml-auto transition-transform ${
                        (item.name === 'Services' && isServicesOpen) || (item.name === 'Solutions' && isSolutionsOpen)
                          ? 'rotate-180'
                          : ''
                      }`} />
                    </button>
                    <div className={`${(item.name === 'Services' && isServicesOpen) || (item.name === 'Solutions' && isSolutionsOpen) ? 'block' : 'hidden'} pl-6 space-y-1`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive(subItem.href)
                              ? 'text-white bg-slate-600'
                              : 'text-gray-300 hover:text-white hover:bg-slate-700'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-white bg-slate-700'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;