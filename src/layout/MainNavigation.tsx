
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Code,
  BarChart3
} from 'lucide-react';

interface NavigationLink {
  key: string;
  href: string;
  name: string;
  matches: (path: string) => boolean;
  children?: NavigationLink[];
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className = '' }: {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompOpen, setIsCompOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<any>(null);
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
        setIsCompOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseLinks: NavigationLink[] = [
    {
      key: 'home',
      href: '/',
      name: 'Home',
      matches: (path: string) => path === '/'
    },
    {
      key: 'services',
      href: '/services',
      name: 'Services',
      matches: (path: string) => path.startsWith('/services'),
      children: [
        {
          key: 'ai-services',
          href: '/services/ai',
          name: 'AI & Analytics',
          matches: (path: string) => path.startsWith('/services/ai')
        },
        {
          key: 'quantum',
          href: '/services/quantum',
          name: 'Quantum Computing',
          matches: (path: string) => path.startsWith('/services/quantum')
        },
        {
          key: 'blockchain',
          href: '/services/blockchain',
          name: 'Blockchain',
          matches: (path: string) => path.startsWith('/services/blockchain')
        },
        {
          key: 'iot',
          href: '/services/iot',
          name: 'IoT & Edge',
          matches: (path: string) => path.startsWith('/services/iot')
        },
        {
          key: 'cybersecurity',
          href: '/services/cybersecurity',
          name: 'Cybersecurity',
          matches: (path: string) => path.startsWith('/services/cybersecurity')
        }
      ]
    },
    {
      key: 'solutions',
      href: '/solutions',
      name: 'Solutions',
      matches: (path: string) => path.startsWith('/solutions')
    },
    {
      key: 'pricing',
      href: '/pricing',
      name: 'Pricing',
      matches: (path: string) => path.startsWith('/pricing')
    },
    {
      key: 'about',
      href: '/about',
      name: 'About',
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'contact',
      href: '/contact',
      name: 'Contact',
      matches: (path: string) => path.startsWith('/contact')
    }
  ];

  const isActive = (link: NavigationLink) => link.matches(location.pathname);

  return (
    <nav className={`bg-zion-slate-dark border-b border-white/10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {baseLinks.map((link) => (
              <div key={link.key} className="relative">
                {link.children ? (
                  <div className="relative">
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive(link)
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-zion-slate-light hover:text-white hover:bg-white/10'
                      }`}
                      onMouseEnter={() => setActiveDropdown(link.key)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === link.key && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-white/10 rounded-lg shadow-xl z-50"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setActiveDropdown(link.key)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.key}
                                to={child.href}
                                className={`block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 transition-colors ${
                                  isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(link)
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-y-0 right-0 w-80 bg-zion-slate-dark border-l border-white/10 shadow-xl z-50"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-2">
                {baseLinks.map((link) => (
                  <div key={link.key}>
                    {link.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-md transition-colors ${
                            isActive(link)
                              ? 'bg-zion-cyan text-white'
                              : 'text-zion-slate-light hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.key ? 'rotate-180' : ''}`} />
                        </button>

                        {activeDropdown === link.key && (
                          <div className="ml-4 mt-2 space-y-1">
                            {link.children.map((child) => (
                              <Link
                                key={child.key}
                                to={child.href}
                                className={`block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors ${
                                  isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                          isActive(link)
                            ? 'bg-zion-cyan text-white'
                            : 'text-zion-slate-light hover:text-white hover:bg-white/10'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
