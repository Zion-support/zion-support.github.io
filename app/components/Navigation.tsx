import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';


const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onSidebarToggle();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              Zion Tech
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/services" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </a>
              <a href="/about" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="/careers" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Careers
              </a>
              <a href="/contact" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@ziontech.com</span>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
