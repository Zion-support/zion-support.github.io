import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, ChevronDown, Search, User, Bell } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onToggle }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when route changes
  useEffect(() => {
    onToggle();
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onToggle]);

  const navigationItems = [
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'AI & Machine Learning', href: '/services/ai' },
        { label: 'Quantum Computing', href: '/services/quantum' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Cloud Services', href: '/services/cloud' },
        { label: 'Digital Transformation', href: '/services/transformation' },
        { label: 'Consulting', href: '/services/consulting' }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      children: [
        { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { label: 'Startup Solutions', href: '/solutions/startup' },
        { label: 'Government Solutions', href: '/solutions/government' },
        { label: 'Healthcare Solutions', href: '/solutions/healthcare' }
      ]
    },
    {
      label: 'Industries',
      href: '/industries',
      children: [
        { label: 'Technology', href: '/industries/technology' },
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Finance', href: '/industries/finance' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Education', href: '/industries/education' }
      ]
    },
    {
      label: 'Company',
      href: '/about',
      children: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
        { label: 'Press', href: '/press' },
        { label: 'Contact', href: '/contact' }
      ]
    }
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search query:', searchQuery);
  };

  const menuVariants: Variants = {
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const dropdownVariants: Variants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onToggle}
          />

          {/* Mobile Menu */}
          <motion.div
            ref={menuRef}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-zion-blue-dark border-l border-zion-cyan/30 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-cyan/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-white font-semibold">Zion Tech</span>
              </div>
              <button
                onClick={onToggle}
                className="p-2 text-zion-slate-light hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-zion-cyan/20">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light" size={20} />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:bg-white/20 transition-all"
                />
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-2 p-4 border-b border-zion-cyan/20">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan/30 transition-colors">
                <User size={20} />
                <span>Sign In</span>
              </button>
              <button className="p-2 text-zion-slate-light hover:text-white transition-colors" aria-label="Notifications">
                <Bell size={20} />
              </button>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 overflow-y-auto py-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label} className="px-4">
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="w-full flex items-center justify-between py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={20}
                            className={`text-zion-slate-light transition-transform ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              className="overflow-hidden"
                            >
                              <div className="ml-4 space-y-1">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    to={child.href}
                                    className="block py-2 px-4 text-zion-slate-light hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="px-4 mt-6 space-y-2">
                <Link
                  to="/contact"
                  className="block w-full py-3 px-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all"
                >
                  Get Started
                </Link>
                <Link
                  to="/request-quote"
                  className="block w-full py-3 px-4 border border-zion-cyan/30 text-zion-cyan text-center rounded-lg hover:bg-zion-cyan/10 transition-colors"
                >
                  Request Quote
                </Link>
              </div>

              {/* Contact Info */}
              <div className="px-4 mt-6 p-4 bg-white/5 rounded-lg border border-zion-cyan/20">
                <h3 className="text-zion-cyan font-semibold mb-3">Contact Us</h3>
                <div className="space-y-2 text-sm text-zion-slate-light">
                  <p>📱 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 Middletown, DE 19709</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zion-cyan/20">
              <div className="flex items-center justify-center gap-4 text-zion-slate-light">
                <a href="#" className="hover:text-zion-cyan transition-colors">Privacy</a>
                <a href="#" className="hover:text-zion-cyan transition-colors">Terms</a>
                <a href="#" className="hover:text-zion-cyan transition-colors">Support</a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;