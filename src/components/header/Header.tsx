import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, Search, User, ShoppingCart, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
=======
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

=======
  // Handle scroll effect
=======
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
}

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
<<<<<<< HEAD
=======
<<<<<<< HEAD
      setIsSearchExpanded(false);
    }
  };
<<<<<<< HEAD

=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    setIsMobileMenuOpen(false);
  };

  const toggleSidebar = () => {
    if (onMenuToggle) {
      onMenuToggle();
    }
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-zinc-900/98 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20' 
        : 'bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75 border-b border-zinc-800/50'
    }`}>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-zinc-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-zinc-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/help" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                Support
              </Link>
              <span className="text-zinc-600">|</span>
              <Link to="/request-quote" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Logo />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div>
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </span>
                <div className="text-xs text-cyan-400 font-medium">
                  AI • Cloud • Innovation
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleSearch}
              className="p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleSidebar}
              className="p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
              aria-label="Toggle sidebar menu"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  const isActive = (path: string) => location.pathname === path;

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <button
              type="button"
              className="hidden md:inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <Link
              to="/marketplace"
              className="hidden md:inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors relative"
              aria-label="Marketplace"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full text-xs flex items-center justify-center text-white font-bold">
                0
              </span>
            </Link>

            {/* User Account */}
            <Link
              to="/signup"
              className="hidden md:inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* CTA Button */}
            <Link
              to="/request-quote"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-zinc-800/50 bg-zinc-900/98">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services, solutions, or resources..."
                className="w-full px-4 py-3 pl-12 pr-4 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="lg:hidden bg-zion-blue-dark/95 backdrop-blur-xl border-t border-zion-purple/20">
          <div className="container px-4 py-6">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services, products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-4 mb-6">
              {enhancedNavigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
                >
                  <div className="text-zion-cyan group-hover:text-zion-purple transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{item.label}</span>
                      {item.badge && (
                        <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-zion-slate-light text-sm">{item.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-zion-blue-light">
              <LanguageSelector />
              {!hideLogin && <UserMenu />}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Navigation Bar for Larger Screens */}
      <div className="hidden xl:block border-t border-zion-purple/10 bg-zion-blue-dark/50">
        <div className="container px-4">
          <div className="flex items-center justify-center py-3 space-x-8">
            {enhancedNavigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
              >
                <div className="text-zion-cyan group-hover:text-zion-purple transition-colors">
                  {item.icon}
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                      {item.label}
                    </span>
                    {item.badge && (
                      <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-zion-slate-light text-xs group-hover:text-zion-slate-light/80 transition-colors">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Mobile Navigation */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Services
            </Link>
            <Link 
              to="/ai-solutions" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Solutions
            </Link>
            <Link 
              to="/it-services" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              IT Services
            </Link>
            <Link 
              to="/enterprise" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enterprise Solutions
            </Link>
            <Link 
              to="/developers" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Developer Portal
            </Link>
            <Link 
              to="/help-center" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Help Center
            </Link>
            <Link 
              to="/sitemap" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sitemap
            </Link>
          </div>
        </div>
      )}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      {isMenuOpen && (
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
                    onClick={() => setIsMenuOpen(false)}
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
                          onClick={() => setIsMenuOpen(false)}
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
                          onClick={() => setIsMenuOpen(false)}
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
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button className="w-full">
                Get Started
              </Button>
=======
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zion-blue-dark/98 border-t border-zion-purple/20 backdrop-blur-md">
          <div className="container px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="w-full">
=======
            />
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            {!hideLogin && <UserMenu />}
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/50">
          <div className="container px-4 py-3">
            <form onSubmit={handleSubmit}>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
        <div className="lg:hidden bg-zion-blue-dark border-t border-zion-purple/20">
          <div className="container px-4 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="mb-6">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(text) => {
                  navigate(`/search?q=${encodeURIComponent(text)}`);
                  setQuery("");
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  setIsMobileMenuOpen(false);
                }}
                searchSuggestions={searchSuggestions}
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zion-blue-dark/98 border-t border-zion-purple/20 backdrop-blur-xl">
          <div className="container px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, talent, equipment..."
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-purple focus:ring-2 focus:ring-zion-purple/20 transition-all duration-300"
              />
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/marketplace" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Marketplace
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/talent" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Talent
              </Link>
              <Link 
                to="/equipment" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Equipment
              </Link>
              <Link 
                to="/zion-hire-ai" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                AI Assistant
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-zion-purple/20">
              <Link 
                to="/request-quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/30"
              >
                Request Quote
              </Link>
=======
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
                  closeMobileMenu();
                }}
                searchSuggestions={searchSuggestions}
              />
            </form>
<<<<<<< HEAD
=======
<<<<<<< HEAD
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-80 bg-zion-blue-dark/95 backdrop-blur-xl border-l border-zion-purple/30 shadow-2xl shadow-zion-purple/20">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
                <h2 className="text-xl font-semibold text-white">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMobileMenu}
                  className="text-zion-slate-light hover:text-zion-cyan"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <nav className="flex-1 p-4 space-y-6">
                <div>
                  <h3 className="text-zion-cyan font-semibold mb-3">Services</h3>
                  <div className="space-y-2 ml-4">
                    <Link to="/services" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      IT & AI Services
                    </Link>
                    <Link to="/micro-saas-services" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Micro SAAS Services
                    </Link>
                    <Link to="/it-onsite-services" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Onsite Services
                    </Link>
                    <Link to="/equipment" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Equipment
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-zion-purple font-semibold mb-3">Solutions</h3>
                  <div className="space-y-2 ml-4">
                    <Link to="/zion-hire-ai" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Zion Hire AI
                    </Link>
                    <Link to="/match" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      AI Matcher
                    </Link>
                    <Link to="/talent" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Talent Directory
                    </Link>
                    <Link to="/enterprise" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Enterprise
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-zion-cyan font-semibold mb-3">Company</h3>
                  <div className="space-y-2 ml-4">
                    <Link to="/community" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Community
                    </Link>
                    <Link to="/blog" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Blog
                    </Link>
                    <Link to="/partners" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Partners
                    </Link>
                    <Link to="/contact" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Contact
                    </Link>
                  </div>
                </div>
              </nav>

              <div className="p-4 border-t border-zion-purple/20">
                <Button className="w-full bg-zion-cyan text-zion-slate hover:bg-zion-cyan/90">
                  Get Started
                </Button>
              </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
            </div>
          </div>
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    </header>
=======
    </>
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
      
      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-60"></div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
    </header>
=======
    </>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======

            {/* Mobile Navigation */}
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      {item.isNew && (
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                          New
                        </Badge>
                      )}
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item.label && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.dropdown?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="text-lg">{dropdownItem.icon}</div>
                            <span className="text-zion-slate-light">
                              {dropdownItem.label}
                            </span>
                          </div>
                          {dropdownItem.price && (
                            <span className="text-zion-cyan font-medium text-sm">
                              {dropdownItem.price}
                            </span>
                          )}
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  );
}
