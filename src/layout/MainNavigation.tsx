<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
=======

import React, { useState, useRef, useEffect } from 'react.ts';
import { Link, useLocation              } from 'react-router-dom.ts';
import { motion, AnimatePresence              } from 'framer-motion.ts';
import { ChevronDown,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
<<<<<<< HEAD
 } from 'lucide-react';
interface NavigationLink {
  key: string;
  href: string;
  name: string;
  matches: (path: string)  => boolean;
  children?: NavigationLink[]}
=======
<<<<<<< HEAD
=======
              } from 'lucide-react.ts';

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
interface NavigationLink {














  key: anyanyanyanyanyanyanyanyanyanyanyanyanystring;
  href: string;
  name: string;
<<<<<<< HEAD
  matches: (path: string)              => boolean;
  children?: NavigationLink[];
=======
  matches: anyanyanyanyanyanyanyanyanyanyanyanyany(path: string)               => boolean;
children?: NavigationLink[];












}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
export function MainNavigation(...args: any[]): any {
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompOpen, setIsCompOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<any>(null);
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
<<<<<<< HEAD
    const handleClickOutside = (event: anyanyanyanyanyanyanyanyanyanyanyanyanyMouseEvent)              => {;
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
        setIsServicesOpen(false);
<<<<<<< HEAD
        setIsCompanyOpen(false);
        setActiveDropdown(null);

=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
<<<<<<< HEAD
      matches: (path: string) => path = == '/'
=======
<<<<<<< HEAD
      matches: (path: string)               => path = == '/'
=======
      matches: anyanyanyanyanyanyanyanyanyanyanyanyany(path: string)              => path = == '/'
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    },
    {
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'services',
      href: '/services',
      name: 'Services',
      matches: (path: string)               => path.startsWith('/services'),
      children[
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'ai-services',
          href: '/services/ai',
          name: 'AI & Analytics',
          matches: (path: string)               => path.startsWith('/services/ai')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'quantum',
          href: '/services/quantum',
          name: 'Quantum Computing',
          matches: (path: string)               => path.startsWith('/services/quantum')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'blockchain',
          href: '/services/blockchain',
          name: 'Blockchain',
          matches: (path: string)               => path.startsWith('/services/blockchain')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'iot',
          href: '/services/iot',
          name: 'IoT & Edge',
          matches: (path: string)               => path.startsWith('/services/iot')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'cybersecurity',
          href: '/services/cybersecurity',
          name: 'Cybersecurity',
          matches: (path: string)               => path.startsWith('/services/cybersecurity')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'healthcare',
          href: '/services/healthcare',
          name: 'Healthcare',
          matches: (path: string)               => path.startsWith('/services/healthcare')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'finance',
          href: '/services/finance',
          name: 'Finance',
          matches: (path: string)               => path.startsWith('/services/finance')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'manufacturing',
          href: '/services/manufacturing',
          name: 'Manufacturing',
          matches: (path: string)               => path.startsWith('/services/manufacturing')
        },
        {
          key: anyanyanyanyanyanyanyanyanyanyanyanyany'sustainability',
          href: '/services/sustainability',
          name: 'Sustainability',
          matches: (path: string)               => path.startsWith('/services/sustainability')
        }
      ]
    },
    {
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'ai-services',
      href: '/ai-services',
      name: 'AI Services',
      matches: (path: string)               => path.startsWith('/ai-services')
    },
    {
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'it-services',
      href: '/it-services',
      name: 'IT Services',
      matches: (path: string)               => path.startsWith('/it-services')
    },
    {
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'micro-saas',
      href: '/micro-saas',
      name: 'Micro SAAS',
      matches: (path: string)               => path.startsWith('/micro-saas')
    },
    {
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      matches: (path: string)               => path.startsWith('/marketplace')
    },
    {
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'about',
      href: '/about',
      name: 'About',
      matches: (path: string)               => path.startsWith('/about')
    },
    {
<<<<<<< HEAD
      matches: (path: string)  => path.startsWith('/contact')
    };
      key: 'contact',;
=======
<<<<<<< HEAD
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'contact',
      href: '/contact',
      name: 'Contact',
<<<<<<< HEAD
      matches: (path: string)              => path.startsWith('/contact')

=======
      matches: anyanyanyanyanyanyanyanyanyanyanyanyany(path: string)               => path.startsWith('/contact')
    };
=======;
      key: anyanyanyanyanyanyanyanyanyanyanyanyany'contact',;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      href: '/contact',;
      name: 'Contact',;
      matches: (path: string)              => path.startsWith('/contact');
    };
  ];
<<<<<<< HEAD
  const isActive = (link: NavigationLink)  => link.matches(location.pathname);
=======

  const isActive = (link: anyanyanyanyanyanyanyanyanyanyanyanyanyNavigationLink)               => link.matches(location.pathname);

<<<<<<< HEAD
  const renderDropdown = (link: anyanyanyanyanyanyanyanyanyanyanyanyanyNavigationLink, isOpen: boolean, setIsOpen: (open: boolean)              => void) => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    if (!link.children) return null;

    return (
      <div className = "relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            isActive(link)
              ? 'bg-zion-cyan text-white'
              : 'text-zion-slate-light hover:text-white hover:bg-white/10'
          }`}

          {link.name}
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial = {
  { opacity: 0,
  y: -10 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              exit = {
  { opacity: 0,
  y: -10 






}}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-1 w-64 bg-zion-slate-dark border border-white/10 rounded-lg shadow-xl z-50"

              <div className="py-2">
                {link.children.map((child) => (
                  <Link
                    key={child.key}
                    to={child.href}
                    className={`block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 transition-colors ${
                      isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''
                    }`}
                    onClick={() => setIsOpen(false)}

                    {child.name}
                  </Link>
                ))}
<<<<<<< HEAD
              </div>
            </motion.div>
          )}
        </AnimatePresence>;
      </div>;
    )};
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
        ))}
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
