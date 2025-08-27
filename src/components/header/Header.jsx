import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { Menu, X, Search as SearchIcon, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Logo } from './Logo';
import { MainNavigation } from './MainNavigation';
import { MobileMenu } from './MobileMenu';
import { LanguageSelector } from './LanguageSelector';
import { UserMenu } from './UserMenu';
import { EnhancedSearchInput } from './EnhancedSearchInput';

const Header = ({ 
  customLogo, 
  customColor, 
  hideLogin = false, 
  searchSuggestions = [],
  onSearch 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

=======
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import { MainNavigation } from './MainNavigation';
import { MobileMenu } from './MobileMenu';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';
import { SearchIcon, Sparkles, Menu, X } from 'lucide-react';

export function Header({ 
  customLogo, 
  customTheme, 
  hideLogin = false,
  className = '' 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const navigate = useNavigate();

  // Mock user state - replace with actual auth context
  const user = null;

>>>>>>> 9173be5b34b2cc8dd2ed0cd34804fc967a792df3
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
<<<<<<< HEAD
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  const headerStyle = {
    '--zion-cyan': customColor?.cyan || '#22DDD2',
    '--zion-purple': customColor?.purple || '#8B5CF6',
    '--zion-blue': customColor?.blue || '#1E40AF',
    '--zion-blue-dark': customColor?.blueDark || '#1E3A8A',
    '--zion-slate-light': customColor?.slateLight || '#94A3B8'
  };

=======
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const effectiveTheme = customTheme || {
    primaryColor: 'zion-cyan',
    secondaryColor: 'zion-purple'
  };

  const headerStyle = {
    '--zion-primary': `var(--${effectiveTheme.primaryColor})`,
    '--zion-secondary': `var(--${effectiveTheme.secondaryColor})`
  };

>>>>>>> 9173be5b34b2cc8dd2ed0cd34804fc967a792df3
  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20'
            : 'bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20'
        }`} 
        style={headerStyle}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo customLogo={customLogo} customColor={customColor} />

          {/* Desktop Navigation */}
          <div className="ml-6 flex-1 hidden lg:block">
            <MainNavigation />
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <EnhancedSearchInput 
                value={query} 
                onChange={setQuery} 
                onSelectSuggestion={(text) => {
                  navigate(`/search?q=${encodeURIComponent(text)}`);
                  setQuery("");
                }} 
                searchSuggestions={searchSuggestions}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="h-4 w-4 text-zion-slate-light"/>
              </div>
            </div>
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* AI Assistant Button */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 text-zion-cyan hover:from-zion-purple/30 hover:to-zion-cyan/30 transition-all duration-300 group">
              <Sparkles className="h-4 w-4 group-hover:animate-pulse"/>
              <span className="text-sm font-medium">AI Assistant</span>
            </button>

            <LanguageSelector />
            {!hideLogin && <UserMenu />}

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu} 
              className="lg:hidden p-2 rounded-lg border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden px-4 pb-4">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <EnhancedSearchInput 
                value={query} 
                onChange={setQuery} 
                onSelectSuggestion={(text) => {
                  navigate(`/search?q=${encodeURIComponent(text)}`);
                  setQuery("");
                }} 
                searchSuggestions={searchSuggestions} 
                placeholder="Search services, talent, equipment..."
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="h-4 w-4 text-zion-slate-light"/>
              </div>
            </div>
          </form>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-zion-blue-dark/95 backdrop-blur-xl">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-zion-purple/30">
<<<<<<< HEAD
              <Logo customLogo={customLogo} customColor={customColor} />
=======
              <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor}/>
>>>>>>> 9173be5b34b2cc8dd2ed0cd34804fc967a792df3
              <button 
                onClick={toggleMobileMenu} 
                className="p-2 rounded-lg border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10"
              >
                <X className="h-5 w-5"/>
              </button>
            </div>
            
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/" 
                    onClick={toggleMobileMenu} 
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    onClick={toggleMobileMenu} 
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/talent" 
                    onClick={toggleMobileMenu} 
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Talent
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/equipment" 
                    onClick={toggleMobileMenu} 
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Equipment
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/community" 
                    onClick={toggleMobileMenu} 
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Community
                  </Link>
                </li>
<<<<<<< HEAD
=======
                <li>
                  <Link 
                    to="/ai-content-generator" 
                    onClick={toggleMobileMenu} 
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    AI Content Generator
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cybersecurity-suite" 
                    onClick={toggleMobileMenu} 
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Cybersecurity Suite
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cloud-optimizer" 
                    onClick={toggleMobileMenu} 
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Cloud Cost Optimizer
                  </Link>
                </li>
                {user && (
                  <li>
                    <Link 
                      to="/dashboard" 
                      onClick={toggleMobileMenu} 
                      className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
>>>>>>> 9173be5b34b2cc8dd2ed0cd34804fc967a792df3
              </ul>
            </nav>

            <div className="p-4 border-t border-zion-purple/30">
              <div className="flex flex-col gap-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-medium hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300">
                  <Sparkles className="h-4 w-4"/>
                  AI Assistant
                </button>
<<<<<<< HEAD
                {!hideLogin && (
                  <div className="flex gap-2">
                    <Link to="/login" onClick={toggleMobileMenu} className="flex-1 px-4 py-2 text-center rounded-lg border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 transition-colors">
=======
                {!user && (
                  <div className="flex gap-2">
                    <Link 
                      to="/login" 
                      onClick={toggleMobileMenu} 
                      className="flex-1 px-4 py-2 text-center rounded-lg border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 transition-colors"
                    >
>>>>>>> 9173be5b34b2cc8dd2ed0cd34804fc967a792df3
                      Login
                    </Link>
                    <Link 
                      to="/signup" 
                      onClick={toggleMobileMenu} 
                      className="flex-1 px-4 py-2 text-center rounded-lg bg-zion-purple text-white hover:bg-zion-purple-dark transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Neon glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"/>
    </>
  );
<<<<<<< HEAD
};

export { Header };
export default Header;
=======
}
>>>>>>> 9173be5b34b2cc8dd2ed0cd34804fc967a792df3
