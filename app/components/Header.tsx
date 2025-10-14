import React from 'react';
import { useState } from 'react;
import { Link } from 'react-router-dom;
import { Menu, X, ChevronDown } from 'lucide-react;
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [{ name: 'Home', href: '/' },'
    { name: 'About', href: '/about' },'
    { 
      name: 'Services','
      href: '/services','
      submenu: [{ name: 'AI Services', href: '/ai-services' },'
        { name: 'IT Services', href: '/it-services' },'
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },'
        { name: 'Digital Transformation', href: '/digital-transformation' }'
      ];
    },
    { name: 'Solutions', href: '/solutions' },'
    { name: 'Case Studies', href: '/case-studies' },'
    { name: 'Blog', href: '/blog' },'
    { name: 'Contact', href: '/contact' }'
  ];

export default function Header() {
  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <CpuChipIcon className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (}
                <div key={item.name} className="relative group">
                  <Link;
                    to={item.href}
                    className="$1"
onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="inline w-4 h-4 ml-1" />}
                  </Link>
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                      {item.submenu.map((subItem) => (
                        <Link;}
                          key={subItem.name}
                          to={subItem.href}
                          className="$1"
                        >
                          {subItem.name}                        </Link>
                      ))}
                    </div>
)}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md: block">
            <Link;
              to="$1"
              className="$1"
            >
              Get Started,
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md: hidden">
            <button,
onClick={() => setIsOpen(!isOpen)}
              className="$1"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-md mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 rounded-lg mt-2">
              {navigationItems.map((item) => (}
                <div key={item.name}>
                  <Link;
                    to={item.href}
                    className="$1"
onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link;}
                          key={subItem.name}
                          to={subItem.href}
                          className="$1"
onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}                        </Link>
                      ))}
                    </div>
)}
                </div>
))}
              <div className="pt-4">
                <Link;
                  to="$1"
                  className="$1"
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
  )
}
export default Header;
