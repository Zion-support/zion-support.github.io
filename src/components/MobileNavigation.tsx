import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Briefcase, Phone, HelpCircle, FileText, Globe, Settings } from 'lucide-react';
import { Button } from './ui/button';

<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Home, Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function BottomNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', href: '/' },
    { icon: <Search className="w-5 h-5" />, label: 'Search', href: '/search' },
    { icon: <User className="w-5 h-5" />, label: 'Profile', href: '/profile' },
=======
const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/careers', label: 'Careers', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Phone },
    { path: '/help', label: 'Help', icon: HelpCircle },
    { path: '/sitemap', label: 'Sitemap', icon: FileText },
    { path: '/micro-saas-services', label: 'Services', icon: Globe },
    { path: '/green-it', label: 'Green IT', icon: Settings },
>>>>>>> origin/cursor/build-and-fix-errors-e276
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="p-2 text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10"
      >
        <Menu className="w-6 h-6" />
      </Button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          >
<<<<<<< HEAD
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <a href="/services" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Services</span>
                </a>
                
                <a href="/talent" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-purple to-zion-purple-dark flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Talent</span>
                </a>
                
                <a href="/about" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">About</span>
                </a>
                
                <a href="/contact" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <Menu className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Contact</span>
                </a>
              </div>
              
              <div className="pt-4 border-t border-zion-blue-light/30">
                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
=======
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-zion-blue-dark/95 backdrop-blur-lg border-l border-zion-blue-light/30"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-blue-light/20">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Navigation Items */}
              <nav className="p-6 space-y-4">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        active
                          ? 'text-zion-cyan bg-zion-cyan/20 border border-zion-cyan/30'
                          : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Contact Section */}
              <div className="p-6 border-t border-zion-blue-light/20">
                <div className="text-center space-y-3">
                  <div className="text-sm text-zion-slate-light">
                    <p>📞 +1 (302) 464-0950</p>
                    <p>📧 kleber@ziontechgroup.com</p>
                  </div>
                  <Button
                    onClick={() => {
                      closeMenu();
                      window.location.href = 'tel:+13024640950';
                    }}
                    className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white"
                  >
                    Call Now
                  </Button>
                </div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;