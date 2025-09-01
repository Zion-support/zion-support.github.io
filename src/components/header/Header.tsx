import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Globe,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Solutions', href: '/solutions', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  const serviceDropdown = [
    { name: 'AI & Machine Learning', href: '/services/ai' },
    { name: 'Cloud Solutions', href: '/services/cloud' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Software Development', href: '/services/development' },
    { name: 'Digital Transformation', href: '/services/transformation' },
    { name: 'Consulting', href: '/services/consulting' }
  ];

  const solutionDropdown = [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Government Solutions', href: '/solutions/government' },
    { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
    { name: 'Financial Solutions', href: '/solutions/financial' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-zion-cyan/30 shadow-2xl shadow-zion-cyan/20'
          : 'bg-slate-900/90 backdrop-blur-md border-b border-zion-cyan/20'
      }`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-cyan/10 to-transparent opacity-50" />

      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 relative z-10">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          <span className="text-white font-bold text-xl">Zion Tech Group</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-8 flex-1 hidden lg:block">
          <ul className="flex space-x-8">
            {navigation.map((item) => (
              <li key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button className="flex items-center space-x-1 text-zion-slate-light hover:text-white transition-colors py-2">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {item.name === 'Services' && serviceDropdown.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-2 text-zion-slate-light hover:text-white hover:bg-slate-700 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                        {item.name === 'Solutions' && solutionDropdown.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            className="block px-4 py-2 text-zion-slate-light hover:text-white hover:bg-slate-700 transition-colors"
                          >
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-zion-slate-light hover:text-white transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:block w-80 mx-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, solutions..."
              className="relative w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-4 w-4 text-zion-slate-light" />
            </div>
          </div>
        </form>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* AI Assistant Button */}
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 text-zion-cyan hover:from-zion-cyan/30 hover:to-zion-blue/30 transition-all duration-300 group">
            <Sparkles className="h-4 w-4 group-hover:animate-pulse" />
            <span className="text-sm font-medium">AI Assistant</span>
          </button>

          {/* Language Selector */}
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-zion-slate-light hover:text-white hover:bg-slate-800 transition-colors">
            <Globe className="h-4 w-4" />
            <span className="text-sm">EN</span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-zion-slate-light hover:text-white hover:bg-slate-800 transition-colors"
            >
              <User className="h-4 w-4" />
              <span className="text-sm">Account</span>
            </button>
            
            <AnimatePresence>
              {isUserMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl"
                >
                  <div className="py-2">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-zion-slate-light hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2 text-zion-slate-light hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      Sign Up
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-zion-slate-light hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      Dashboard
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg border border-slate-700 text-zion-slate-light hover:text-white hover:bg-slate-800 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-800 border-t border-slate-700"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, solutions..."
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                        <div className="text-zion-cyan font-medium">{item.name}</div>
                        <div className="ml-4 space-y-1">
                          {item.name === 'Services' && serviceDropdown.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block py-2 text-zion-slate-light hover:text-white transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                          {item.name === 'Solutions' && solutionDropdown.map((solution) => (
                            <Link
                              key={solution.name}
                              to={solution.href}
                              className="block py-2 text-zion-slate-light hover:text-white transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {solution.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block py-2 text-zion-slate-light hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-slate-700 space-y-2">
                <Link
                  to="/login"
                  className="block w-full text-center py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block w-full text-center py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}