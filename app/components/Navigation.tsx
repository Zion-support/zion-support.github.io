import React, { use State } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'


  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsSolutionsOpen(false);
  };

  const toggleSolutionsMenu = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    setIsServicesOpen(false);
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform cyber-glow">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Zion Tech Group</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hiddenlg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}>
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDownIcon className="w-4h-4 ml-1" />}
                  </Link>
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-lg py-2 z-50 border border-slate-700">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                          onClick={() => setIsServicesOpen(false)}>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
              Get Started
            </Link>
          </div>

          {/* Desktop Navigation */}
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
  )
}
  )
=======
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative group">
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 transition-colors ${
                      isActive(item.href)
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="block h-6 w-6" />
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
                        onClick={() => setIsOpen(false)}
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
