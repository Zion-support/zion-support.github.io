import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
=======
import Button from './Button';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

const Header: React.FC = () => {
=======
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
  const [isMenuOpen, setIsMenuOpen] = useState(false);

<<<<<<< HEAD
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Micro SaaS', href: '/services/micro-saas' },
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'Blockchain', href: '/services/blockchain' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Migration', href: '/services/cloud-migration' },
        { name: 'DevOps & SRE', href: '/services/devops' },
        { name: 'Mobile Development', href: '/services/mobile-development' },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
=======
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuClick();
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
=======
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Button variant="primary" size="small">
              Get Started
            </Button>
          </nav>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </nav>
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="lg:hidden mt-4 border-t border-gray-200 pt-4">
            {navigation.map((item) => (
              <div key={item.name} className="mb-2">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="p-1"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}
                </div>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
=======
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Button variant="primary" size="small" className="w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    </header>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
              <Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
