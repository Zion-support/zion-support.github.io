import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud Solutions', href: '/cloud-infrastructure' },
        { name: 'Digital Transformation', href: '/digital-transformation' ;
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' ;
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Zion Tech Group
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div className="relative group">
                      <button
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                        onMouseEnter={() => setIsServicesOpen(true);
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {isServicesOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.name}>
                              <Link
                                to={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {subItem.name;
                              </Link>
                            </div>))}
                        </div>)}
                    </div>) : (
                    <Link
                      to={item.href;
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name;
                    </Link>)}
                </div>))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen);
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />;
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                        {item.name;
                      </button>
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm"
                          >
                            {subItem.name;
                          </Link>))}
                      </div>
                    </div>) : (
                    <Link
                      to={item.href;
                      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name;
                    </Link>)}
                </div>))}
            </div>
          </div>)}
      </div>
    </nav>);
};

export default Navigation;