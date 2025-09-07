<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          </button>
        </div>

        {isMenuOpen && (

            </nav>
          </div>
        )}
      </div>;
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </header>;
  )}export default Header;
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Zion Tech Group
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link></li>
            <li><Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
=======
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchModal from './SearchModal';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
  const location = useLocation();
=======
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut for search (Ctrl+K)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-foreground">Zion Tech Group</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-foreground/80 hover:text-primary transition-colors ${
                  location.pathname === item.href ? 'text-primary font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
<<<<<<< HEAD
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors hidden sm:block">
              Get Started
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
=======
          </ul>
        </nav>

          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hidden lg:flex items-center justify-center w-10 h-10 mr-4 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group relative"
            title="Search (Ctrl+K)"
          >
            <Search className="w-5 h-5" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Ctrl+K
            </div>
          </button>

          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center mr-4">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden ml-auto p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-muted transition-colors ${
                    location.pathname === item.href ? 'text-primary font-semibold bg-muted' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors mt-4">
                Get Started
              </button>
            </nav>
          </div>
        )}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

        {/* Search Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
      </div>
    </header>
  );
};

export default Header;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
