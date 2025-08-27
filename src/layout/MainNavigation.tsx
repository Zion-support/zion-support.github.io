
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Home, 
  Settings, 
  Users, 
  Building, 
  Globe,
  Zap,
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
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
        setIsCompanyOpen(false);
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
        },
        {
          key: 'healthcare',
          href: '/services/healthcare',
          name: 'Healthcare',
          matches: (path: string) => path.startsWith('/services/healthcare')
        },
        {
          key: 'finance',
          href: '/services/finance',
          name: 'Finance',
          matches: (path: string) => path.startsWith('/services/finance')
        },
        {
          key: 'manufacturing',
          href: '/services/manufacturing',
          name: 'Manufacturing',
          matches: (path: string) => path.startsWith('/services/manufacturing')
        },
        {
          key: 'sustainability',
          href: '/services/sustainability',
          name: 'Sustainability',
          matches: (path: string) => path.startsWith('/services/sustainability')
        }
      ]
    },
    {
      key: 'ai-services',
      href: '/ai-services',
      name: 'AI Services',
      matches: (path: string) => path.startsWith('/ai-services')
    },
    {
      key: 'it-services',
      href: '/it-services',
      name: 'IT Services',
      matches: (path: string) => path.startsWith('/it-services')
    },
    {
      key: 'micro-saas',
      href: '/micro-saas',
      name: 'Micro SAAS',
      matches: (path: string) => path.startsWith('/micro-saas')
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
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

  const renderDropdown = (link: NavigationLink, isOpen: boolean, setIsOpen: (open: boolean) => void) => {
    if (!link.children) return null;

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            isActive(link)
              ? 'bg-zion-cyan text-white'
              : 'text-zion-slate-light hover:text-white hover:bg-white/10'
          }`}
        >
          {link.name}
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-1 w-64 bg-zion-slate-dark border border-white/10 rounded-lg shadow-xl z-50"
            >
              <div className="py-2">
                {link.children.map((child) => (
                  <Link
                    key={child.key}
                    to={child.href}
                    className={`block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 transition-colors ${
                      isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav className={`${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-1">
        {baseLinks.map((link) => (
          <div key={link.key}>
            {link.children ? (
              renderDropdown(
                link,
                link.key === 'services' ? isServicesOpen : isCompanyOpen,
                link.key === 'services' ? setIsServicesOpen : setIsCompanyOpen
              )
            ) : (
              <Link
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link)
                    ? 'bg-zion-cyan text-white'
                    : 'text-zion-slate-light hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

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
