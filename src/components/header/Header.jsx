import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { MainNavigation } from '@/layout/MainNavigation';
import { MobileMenu } from './MobileMenu';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Search as SearchIcon, Phone, Mail } from "lucide-react";

export function Header({ hideLogin = false, customLogo, customTheme }) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchSuggestions = generateSearchSuggestions();

  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#000000', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);

  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor,
    color: effectiveTheme.textColor,
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Talent', path: '/talent', hasDropdown: true },
    { name: 'Equipment', path: '/equipment' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-gradient-to-r from-zion-blue-dark/95 via-zion-purple-dark/95 to-zion-slate-dark/95 backdrop-blur-md shadow-lg shadow-zion-purple/10"
      style={headerStyle}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"/>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-purple/10 to-transparent opacity-50"/>

      <div className="relative z-10">
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

        {/* Main header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Logo customLogo={customLogo} />
              
              <nav className="hidden lg:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.hasDropdown ? (
                      <div className="relative">
                        <button className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                          isActive(item.path)
                            ? 'text-zion-blue bg-zion-blue/10'
                            : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'
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
                          isActive(item.path)
                            ? 'text-zion-blue bg-zion-blue/10'
                            : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="hidden lg:flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button size="sm">Get Started</Button>
              </div>

              <button
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-zion-blue hover:bg-gray-50"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`block py-3 px-4 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'text-zion-blue bg-zion-blue/10'
                          : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && item.name === 'Services' && (
                      <div className="ml-4 mt-2 space-y-1">
                        {serviceDropdownItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 px-4 text-gray-600 hover:text-zion-blue transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            • {subItem.name}
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
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            • {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <Button variant="outline" className="w-full">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
