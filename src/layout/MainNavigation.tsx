
import React, { useState, useRef, useEffect } from 'react.ts';
import { Link, useLocation              } from 'react-router-dom.ts';
import { motion, AnimatePresence              } from 'framer-motion.ts';
import { ChevronDown,
=======
  Menu,
  X,
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Code,
  BarChart3
              } from 'lucide-react.ts';

interface NavigationLink {














  key: anyanyanyanyanyanyanyanyanyanyanyanyanystring;
  href: string;
  name: string;
  matches: anyanyanyanyanyanyanyanyanyanyanyanyany(path: string)               => boolean;
children?: NavigationLink[];












}

        setIsCompOpen(false);
        setActiveDropdown(null)}
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)}, []);
  const baseLinks: NavigationLink[] = [
    {
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'home',
      href: '/',
      name: 'Home',
      matches: anyanyanyanyanyanyanyanyanyanyanyanyany(path: string)              => path = == '/'
    },
    {
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'services',
      href: '/services',
      name: 'Services',
      matches: (path: string) => path.startsWith('/services'),
      children: [
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'ai-services',
          href: '/services/ai',
          name: 'AI & Analytics',
          matches: (path: string) => path.startsWith('/services/ai')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'quantum',
          href: '/services/quantum',
          name: 'Quantum Computing',
          matches: (path: string) => path.startsWith('/services/quantum')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'blockchain',
          href: '/services/blockchain',
          name: 'Blockchain',
          matches: (path: string) => path.startsWith('/services/blockchain')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'iot',
          href: '/services/iot',
          name: 'IoT & Edge',
          matches: (path: string) => path.startsWith('/services/iot')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'cybersecurity',
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
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'about',
      href: '/about',
      name: 'About',
      matches: (path: string) => path.startsWith('/about')
    },
    {
      matches: anyanyanyanyanyanyanyanyanyanyanyanyany(path: string)               => path.startsWith('/contact')
    };
=======;
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'contact',;
      href: '/contact',;
      name: 'Contact',;
      matches: (path: string)              => path.startsWith('/contact');
    };
  ];

  const isActive = (link: anyanyanyanyanyanyanyanyanyanyanyanyanyNavigationLink)               => link.matches(location.pathname);

              </div>;
            </motion.div>;
          )};
        </AnimatePresence>;
      </div>;
    );
  };
  return (
    <nav className = {`${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden lg: anyanyanyanyanyanyanyanyanyanyanyanyanyflex items-center space-x-1">
        {baseLinks.map((link)               => (
          <div key={link.key}>
            {link.children ? (
              renderDropdown(
                link,
                link.key === 'services' ? isServicesOpen : isCompOpen,
                link.key === 'services' ? setIsServicesOpen : setIsCompOpen
              )
            ) : (
              <Link
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link)
                    ? 'bg-zion-cyan text-white'
                    : 'text-zion-slate-light hover:text-white hover:bg-white/10'
                }`}
                {link.name}
              </Link>
            )}
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
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors"
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial = {
  { opacity: 0,
  x: '100%' 
}}
            animate = {
  { opacity: 1,
  x: 0 
}}
            exit = {
  { opacity: 0,
  x: '100%' 
}}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-y-0 right-0 w-80 bg-zion-slate-dark border-l border-white/10 shadow-xl z-50"
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors"
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
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>;
          </motion.div>;
        )};
      </AnimatePresence>;
    </nav>;
  );
}
