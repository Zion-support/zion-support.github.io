import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { Logo } from '@/components/header/Logo';
import { ModeToggle } from '@/components/ModeToggle';
import { Menu, X, Search, User, Bell, PanelLeft } from 'lucide-react';
import { MobileMenu } from '@/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { Sidebar } from '@/components/Sidebar';
import { useAuth } from '@/hooks/useAuth';
import { useMessaging } from '@/context/MessagingContext';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
=======
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, PanelLeft } from 'lucide-react';
import { MainNavigation } from './MainNavigation';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20' 
          : 'bg-transparent'
      }`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute top-20 right-20 w-20 h-20 border border-zion-green/20 rounded-full animate-pulse delay-3000"></div>
            <div className="absolute bottom-10 left-1/3 w-12 h-12 border border-zion-pink/20 rounded-full animate-pulse delay-4000"></div>
          </div>
          
          {/* Matrix rain effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="matrix-rain w-full h-full"></div>
          </div>
          
          {/* Cyber grid overlay */}
          <div className="absolute inset-0 opacity-3">
            <div className="cyber-grid w-full h-full"></div>
          </div>
        </div>

        <div className="container-responsive relative z-10">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-zion-cyan/50">
                    <span className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  
                  {/* Holographic ring effect */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">ZION TECH GROUP</h1>
                  <p className="text-xs text-zion-slate-light font-medium group-hover:text-zion-cyan transition-colors duration-300">Innovation • Intelligence • Impact</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`nav-link flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeDropdown === item.name 
                        ? 'text-zion-cyan bg-zion-cyan/10' 
                        : 'hover:text-zion-cyan hover:bg-zion-cyan/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          {item.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-200 group"
                            >
                              {subItem.icon && <subItem.icon className="w-4 h-4 group-hover:text-zion-cyan" />}
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
              
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <Link
                  to="/services"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/pricing"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/case-studies"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  to="/news"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News
                </Link>
                <Link
                  to="/careers"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              
              {/* Mobile User Actions */}
              <div className="pt-4 border-t border-white/20">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 mt-2 bg-zion-cyan text-white rounded-md hover:bg-zion-cyan/90 transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-zion-blue-dark border-r border-zion-purple/20">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Navigation</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <MainNavigation onNavigate={() => setSidebarOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
