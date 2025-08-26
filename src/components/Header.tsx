import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './header/Logo';
import { UserMenu } from './header/UserMenu';
import { LanguageSelector } from './header/LanguageSelector';
import { Button } from '@/components/ui/Button';
import { Menu, X, Search, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', path: '/', hasDropdown: false },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Talent', path: '/talent', hasDropdown: true },
    { name: 'Equipment', path: '/equipment', hasDropdown: false },
    { name: 'About', path: '/about', hasDropdown: false },
    { name: 'Pricing', path: '/pricing', hasDropdown: false },
    { name: 'Contact', path: '/contact', hasDropdown: false },
    { name: 'Blog', path: '/blog', hasDropdown: false },
  ];

  const serviceDropdownItems = [
    { name: 'IT Solutions', path: '/services' },
    { name: 'AI Services', path: '/services/ai' },
    { name: 'Cybersecurity', path: '/services/cybersecurity' },
    { name: 'Green IT', path: '/green-it' },
    { name: 'On-Site Support', path: '/it-onsite-services' },
    { name: 'Revolutionary Services 2025', path: '/revolutionary-services-2025' },
  ];

  const talentDropdownItems = [
    { name: 'Browse Talents', path: '/talents' },
    { name: 'Talent Directory', path: '/talent' },
    { name: 'AI Matcher', path: '/match' },
    { name: 'Hire Now', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'
    }`}>
      {/* Top bar */}
      <div className="bg-zion-blue text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <UserMenu />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                        isActive(item.path) ? 'text-zion-blue bg-zion-blue/10' : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'
                      }`}>
                        <span>{item.name}</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        <div className="py-2">
                          {item.name === 'Services' && serviceDropdownItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-3 text-gray-700 hover:text-zion-blue hover:bg-zion-blue/5 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                          {item.name === 'Talent' && talentDropdownItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-3 text-gray-700 hover:text-zion-blue hover:bg-zion-blue/5 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`py-2 px-3 rounded-lg transition-colors ${
                        isActive(item.path) ? 'text-zion-blue bg-zion-blue/10' : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-zion-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      isActive(item.path) ? 'text-zion-blue bg-zion-blue/10' : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && item.name === 'Services' && (
                    <div className="ml-4 mt-2 space-y-1">
                      {serviceDropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 px-4 text-gray-600 hover:text-zion-blue transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  {item.hasDropdown && item.name === 'Talent' && (
                    <div className="ml-4 mt-2 space-y-1">
                      {talentDropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 px-4 text-gray-600 hover:text-zion-blue transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}