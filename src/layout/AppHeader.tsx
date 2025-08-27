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
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4 p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
            aria-label="Toggle sidebar"
          >
            <PanelLeft className="h-5 w-5" />
          </button>
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex ml-8 space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {item.name === 'Services' && (
                      <div className="absolute left-0 mt-2 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">Our Services</h3>
                          <div className="grid grid-cols-1 gap-2">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="flex items-center p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                              >
                                <div>
                                  <div className="text-cyan-400 font-medium">{service.name}</div>
                                  <div className="text-slate-400 text-sm">{service.description}</div>
                                </div>
                                <ChevronRight className="ml-auto h-4 w-4 text-slate-500" />
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-slate-700">
                            <Link
                              to="/services"
                              className="block text-center text-cyan-400 hover:text-cyan-300 font-medium"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Company Dropdown */}
                    {item.name === 'Company' && (
                      <div className="absolute left-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
                          <div className="space-y-2">
                            {companyLinks.map((link) => (
                              <Link
                                key={link.name}
                                to={link.href}
                                className="block p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-slate-300 hover:text-cyan-400"
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Support Dropdown */}
                    {item.name === 'Support' && (
                      <div className="absolute left-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
                          <div className="space-y-2">
                            {supportLinks.map((link) => (
                              <Link
                                key={link.name}
                                to={link.href}
                                className="block p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-slate-300 hover:text-cyan-400"
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml-6 flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search services, talent, equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
              >
                <Search className="h-4 h-4" />
              </button>
            </form>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-8">
            <Link to="/services" className="text-white/80 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="text-white/80 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/case-studies" className="text-white/80 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link to="/news" className="text-white/80 hover:text-white transition-colors">
              News
            </Link>
            <Link to="/careers" className="text-white/80 hover:text-white transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4 ml-6">
            {/* Notifications */}
            <button className="p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            
            {/* User Menu */}
            <Link to="/login" className="p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors">
              <User className="h-5 w-5" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zion-blue-dark border-t border-zion-purple/20">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
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
