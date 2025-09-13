import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  Settings,
  Zap,
  ChevronDown
} from 'lucide-react';
import { MainNavigation } from '../header/MainNavigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-purple/30 shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs lg:text-sm text-zion-slate-light group-hover:text-zion-cyan/80 transition-colors">
                Innovation • Technology • Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <MainNavigation />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-lg hover:bg-zion-purple/10"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-lg hover:bg-zion-purple/10 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-lg hover:bg-zion-purple/10">
                <User className="w-5 h-5" />
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* User Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link 
                    to="/profile" 
                    className="block px-3 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    Profile
                  </Link>
                  <Link 
                    to="/dashboard" 
                    className="block px-3 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/settings" 
                    className="block px-3 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    Settings
                  </Link>
                  <div className="border-t border-zion-purple/20 my-1"></div>
                  <Link 
                    to="/logout" 
                    className="block px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors"
                  >
                    Sign Out
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-lg hover:bg-zion-purple/10"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="pb-4"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services, solutions, or resources..."
                  className="w-full px-4 py-3 pl-12 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zion-blue-dark border-t border-zion-purple/30"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <Link 
                  to="/" 
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                >
                  Home
                </Link>
                
                {/* Services Section */}
                <div className="space-y-2">
                  <div className="px-3 py-2 text-zion-cyan font-semibold">Services</div>
                  <Link 
                    to="/ai-services" 
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    AI Services
                  </Link>
                  <Link 
                    to="/it-services" 
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/micro-saas" 
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    Micro SAAS
                  </Link>
                </div>

                {/* Solutions Section */}
                <div className="space-y-2">
                  <div className="px-3 py-2 text-zion-cyan font-semibold">Solutions</div>
                  <Link 
                    to="/solutions/healthcare" 
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    Healthcare
                  </Link>
                  <Link 
                    to="/solutions/financial" 
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    Financial
                  </Link>
                  <Link 
                    to="/solutions/education" 
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    Education
                  </Link>
                </div>

                {/* Company Section */}
                <div className="space-y-2">
                  <div className="px-3 py-2 text-zion-cyan font-semibold">Company</div>
                  <Link 
                    to="/about" 
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    Contact
                  </Link>
                </div>

                {/* Support & Resources */}
                <div className="space-y-2">
                  <div className="px-3 py-2 text-zion-cyan font-semibold">Support</div>
                  <Link 
                    to="/help" 
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    Help Center
                  </Link>
                  <Link 
                    to="/docs" 
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded transition-colors"
                  >
                    Documentation
                  </Link>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-zion-purple/20">
                <Link 
                  to="/contact" 
                  onClick={closeMobileMenu}
                  className="block w-full text-center bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white py-3 px-6 rounded-lg font-medium hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}