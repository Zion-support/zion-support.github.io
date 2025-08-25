import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, ShoppingCart } from 'lucide-react';
import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';
import { UserMenu } from './UserMenu';
import { useAuth } from '../../hooks/useAuth';

interface NavigationItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; path: string; description?: string }[];
}

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const navigation: NavigationItem[] = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'IT Solutions', path: '/services/it-solutions', description: 'Comprehensive IT infrastructure and support' },
        { name: 'AI Services', path: '/services/ai-services', description: 'Artificial intelligence and machine learning solutions' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Advanced security and threat protection' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
        { name: 'On-Site Support', path: '/it-onsite-services', description: 'Professional on-site technical support' }
      ]
    },
    { 
      name: 'Talent', 
      path: '/talent', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Browse Talents', path: '/talents', description: 'Find skilled professionals' },
        { name: 'Talent Directory', path: '/talent-directory', description: 'Comprehensive talent database' },
        { name: 'AI Matcher', path: '/ai-matcher', description: 'AI-powered talent matching' },
        { name: 'Hire Now', path: '/hire-now', description: 'Quick hiring solutions' }
      ]
    },
    { name: 'Equipment', path: '/equipment' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-zion-cyan'
                      : 'text-white hover:text-zion-cyan'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-800">
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-3 text-sm text-white hover:bg-gray-800/50 transition-colors"
                        >
                          <div className="font-medium">{dropdownItem.name}</div>
                          {dropdownItem.description && (
                            <div className="text-xs text-gray-400 mt-1">
                              {dropdownItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-white hover:text-zion-cyan transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Language Selector */}
            <LanguageSelector />

            {/* User Menu */}
            {user ? (
              <UserMenu />
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-white hover:text-zion-cyan transition-colors text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-zion-cyan text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zion-cyan/90 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-zion-cyan'
                        : 'text-white hover:text-zion-cyan'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-zion-cyan transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
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
    </header>
  );
};
