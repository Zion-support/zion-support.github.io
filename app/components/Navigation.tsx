import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDownIcon, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleSolutionsMenu = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const isActive = (path: string) => {
    return window.location.pathname === path;
  };

  const navigation = [
    {
      name: 'Home',
      href: '/',
      icon: Globe,
    },
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Web Development', href: '/web-development' },
      ],
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Code,
      submenu: [
        { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { name: 'Mobile Apps', href: '/mobile-apps' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'IoT Solutions', href: '/iot-solutions' },
      ],
    },
    {
      name: 'About',
      href: '/about',
      icon: Shield,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Smartphone,
    },
  ];

  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="ml-2 text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={item.name === 'Services' ? toggleServicesMenu : toggleSolutionsMenu}
                      className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      <item.icon className="w-5 h-5 mr-2" />
                      {item.name}
                      <ChevronDownIcon className="w-4 h-4 ml-1" />
                    </button>
                    {/* Desktop Dropdown */}
                    <div className={`absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50 ${
                      (item.name === 'Services' ? isServicesOpen : isSolutionsOpen) ? 'block' : 'hidden'
                    }`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                          onClick={() => {
                            setIsServicesOpen(false);
                            setIsSolutionsOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-white bg-slate-700'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
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
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                    <ChevronDownIcon className="w-4 h-4 ml-auto" />
                  </button>
                  {/* Mobile Submenu */}
                  <div className={`pl-6 ${(item.name === 'Services' ? isServicesOpen : isSolutionsOpen) ? 'block' : 'hidden'}`}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="flex items-center px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                          setIsSolutionsOpen(false);
                        }}
                      >
                        <div className="w-4 h-4 mr-3" />
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
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;