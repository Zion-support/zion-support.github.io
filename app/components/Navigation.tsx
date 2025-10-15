import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'AI Solutions', 
      href: '/ai-solutions',
      dropdown: [
        { name: 'Machine Learning', href: '/ai-machine-learning' },
        { name: 'Natural Language Processing', href: '/ai-nlp' },
        { name: 'Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Automation', href: '/ai-automation' }
      ]
    },
    { 
      name: 'IT Solutions', 
      href: '/it-solutions',
      dropdown: [
        { name: 'Cloud Computing', href: '/cloud-solutions' },
        { name: 'Database Solutions', href: '/database-solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps', href: '/devops' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block text-gray-400 hover:text-white py-1"
                              onClick={closeMenu}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block py-2 transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-white font-semibold'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300"
                  onClick={closeMenu}
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
