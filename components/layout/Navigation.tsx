
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD

import {
  Menu
  X
  Home
  Brain
  Cpu
  Rocket
  Phone
  Mail
  MapPin
  Globe
  ChevronDown;
} from 'lucide-react';
import Link from 'next/link';import {
  Menu, X, Home, Brain, Cpu, Rocket

  Phone, Mail, MapPin, Globe, ChevronDown
 } from 'lucide-react';
=======
import {;
  Menu,;
  X,;
  Home,;
  Brain,;
  Cpu,;
  Rocket,;
  Phone,;
  Mail,;
  MapPin,;
  Globe,;
  ChevronDown,;
} from 'lucide-react';
import Link from 'next/link';import { ;
  Menu, X, Home, Brain, Cpu, Rocket, ;
  Phone, Mail, MapPin, Globe, ChevronDown;
} from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import Link from 'next/link';

=======
import { 
  Menu, X, Home, Brain, Cpu, Rocket, 
  Phone, Mail, MapPin, Globe, ChevronDown
} from 'lucide-react';
import Link from 'next/link';
const Navigation: React.FC = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
<<<<<<< HEAD
  useEffect(() => {
    const handleScroll = () => {
<<<<<<< HEAD
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  const navigationItems = [
    {
      name: 'Home'
      href: '/'
      icon: Home
    },    {      icon: Home
    }
=======
      setIsScrolled(window.scrollY > 50)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    {
      name: 'Services'
      href: '/services'
      icon: Rocket
      dropdown: [
<<<<<<< HEAD
        {
          name: 'AI Services'
          href: '/ai-services'
          icon: Brain
          description: 'Revolutionary AI solutions'
        }
        {
          name: 'IT Services'
          href: '/it-services'
          icon: Cpu
          description: 'Enterprise IT solutions'
        }
        {
          name: 'Micro SaaS'
          href: '/micro-saas'
          icon: Rocket
          description: 'Specialized software solutions'
        }
        {
          name: 'Innovative Showcase'
          href: '/innovative-services-showcase'
          icon: Globe
          description: 'Cutting-edge technology'
        }
=======
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Revolutionary AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: Cpu, description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket, description: 'Specialized software solutions' },
        { name: 'Innovative Showcase', href: '/innovative-services-showcase', icon: Globe, description: 'Cutting-edge technology' }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      ]
    }
    {
      name: 'Solutions'
      href: '/solutions'
      icon: Cpu,    {
      name: 'Solutions'
      href: '/solutions'
      icon: Cpu
    }
    {
      name: 'About'
      href: '/about'
      icon: Globe
    }
    {
      name: 'Contact'
      href: '/contact'
      icon: Phone
    }
<<<<<<< HEAD
    {
      name: 'About'
      href: '/about'
      icon: Globe
    }
    {
      name: 'Contact'
      href: '/contact'
      icon: Phone
    },  ];      icon: Phone
    }
  ];
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  }
=======

  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 50);
    };

    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window && window.scrollY > 50);
    };

    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);

  const navigationItems = [;
    {;
      name: 'Home',;
      href: '/',;
      icon: Home,;
    },    {      icon: Home;
    };
    {;
      name: 'Services',;
      href: '/services',;
      icon: Rocket,;
      dropdown: [;
        {;
          name: 'AI Services',;
          href: '/ai-services',;
          icon: Brain,;
          description: 'Revolutionary AI solutions',;
        },;
        {;
          name: 'IT Services',;
          href: '/it-services',;
          icon: Cpu,;
          description: 'Enterprise IT solutions',;
        },;
        {;
          name: 'Micro SaaS',;
          href: '/micro-saas',;
          icon: Rocket,;
          description: 'Specialized software solutions',;
        },;
        {;
          name: 'Innovative Showcase',;
          href: '/innovative-services-showcase',;
          icon: Globe,;
          description: 'Cutting-edge technology',;
        },;
      ],;
    },;
    {;
      name: 'Solutions',;
      href: '/solutions',;
      icon: Cpu,    {;
      name: 'Solutions',;
      href: '/solutions',;
      icon: Cpu;
    };
    {;
      name: 'About',;
      href: '/about',;
      icon: Globe;
    };
    {;
      name: 'Contact',;
      href: '/contact',;
      icon: Phone,;
    },;
    {;
      name: 'About',;
      href: '/about',;
      icon: Globe,;
    },;
    {;
      name: 'Contact',;
      href: '/contact',;
      icon: Phone,;
    },  ];      icon: Phone;
    }
  ];

  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',  };    website: 'https://ziontechgroup && ziontechgroup.com';
=======
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <>;
      {/* Navigation Bar */}
      <motion&& motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0 && 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
<<<<<<< HEAD
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10'
            : 'bg-transparent'
        }`}>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='flex items-center justify-between h-16 lg:h-20'>;
            {/* Logo */}
            <motion&& motion.div
              whileHover={{ scale: 1 && 1.05 }}
              className='flex items-center space-x-2'>;
              <Link href='/' className='flex items-center space-x-2 group'>;
                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300'>;
                  <span className='text-white font-bold text-lg lg:text-xl'>;
                    Z;
                  </span>;
                </div>;
                <div className='hidden sm:block'>;
                  <div className='text-white font-bold text-lg lg:text-xl'>;
                    Zion Tech Group;
                  </div>;
                  <div className='text-cyan-400 text-xs'>;
                    Revolutionary Technology;
                  </div>                </div>            : 'bg-transparent';
=======
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
            : 'bg-transparent'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        }`}
      >;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between h-16 lg:h-20">;
            {/* Logo */}
<<<<<<< HEAD
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">
                  <span className="text-white font-bold text-lg lg:text-xl">Z</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-white font-bold text-lg lg:text-xl">Zion Tech Group</div>
                  <div className="text-cyan-400 text-xs">Revolutionary Technology</div>
                </div>
              </Link>
            </motion.div>
<<<<<<< HEAD
=======
            <motion&& motion.div
              whileHover={{ scale: 1 && 1.05 }}
              className="flex items-center space-x-2">;
              <Link href="/" className="flex items-center space-x-2 group">;
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">;
                  <span className="text-white font-bold text-lg lg:text-xl">Z</span>;
                </div>;
                <div className="hidden sm:block">;
                  <div className="text-white font-bold text-lg lg:text-xl">Zion Tech Group</div>;
                  <div className="text-cyan-400 text-xs">Revolutionary Technology</div>;
                </div>;
              </Link>;
            </motion && motion.div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>;
              {navigationItems && navigationItems.map(item => (;
                <div key={item && item.name} className='relative group'>                  {item && item.dropdown ? (;
=======

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                    <div
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}            <div className="hidden lg:flex items-center space-x-8">;
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.name} className="relative group">;
                  {item && item.dropdown ? (;
                    <div
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
<<<<<<< HEAD
<<<<<<< HEAD
                      className='flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300'
                    >
                      <span className='font-medium'>{item.name}</span>
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180' />
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      className="flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
<<<<<<< HEAD
=======
                      
                      {/* Dropdown Menu */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
<<<<<<< HEAD
                            className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/25 p-4'
                          >
                            <div className='grid grid-cols-1 gap-3'>
                              {item.dropdown.map(dropdownItem => {
                                const Icon = dropdownItem.icon;
                                  >
                                    <div className='w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300'>
                                      <Icon className='w-5 h-5 text-cyan-400' />
                                    </div>
                                    <div>
                                      <div className='text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300'>
                                        {dropdownItem.name}
                                      </div>
                                      <div className='text-gray-400 text-sm'>                                        {dropdownItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                );                              })}                          >
                            <div className="grid grid-cols-1 gap-3">
                              {item.dropdown.map((dropdownItem) => {
                                const Icon = dropdownItem.icon;
=======
                      className='flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300';
                    >;
                      <span className='font-medium'>{item && item.name}</span>;
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180' />;
                      className="flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300";
                    >;
                      <span className="font-medium">{item && item.name}</span>;
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />;

                      <AnimatePresence>;
                        {activeDropdown === item && item.name && (;
                          <motion&& motion.div
                            initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                            transition={{ duration: 0 && 0.2 }}
                            className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/25 p-4'>;
                            <div className='grid grid-cols-1 gap-3'>;
                              {item && item.dropdown.map(dropdownItem => {;
                                const Icon = dropdownItem && dropdownItem.icon;

                                  >;
                                    <div className='w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300'>;
                                      <Icon className='w-5 h-5 text-cyan-400' />;
                                    </div>;
                                    <div>;
                                      <div className='text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300'>;
                                        {dropdownItem && dropdownItem.name}
                                      </div>;
                                      <div className='text-gray-400 text-sm'>                                        {dropdownItem && dropdownItem.description}
                                      </div>;
                                    </div>;
                                  </Link>;
                                );                              })}                          >;
                            <div className="grid grid-cols-1 gap-3">;
                              {item && item.dropdown.map((dropdownItem) => {;
                                const Icon = dropdownItem && dropdownItem.icon;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                                return (
                                  <Link
                                    key={dropdownItem && dropdownItem.name}
                                    href={dropdownItem && dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 hover:border border-cyan-500/30 transition-all duration-300 group/item">;
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300">;
                                      <Icon className="w-5 h-5 text-cyan-400" />;
                                    </div>;
                                    <div>;
                                      <div className="text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300">;
                                        {dropdownItem && dropdownItem.name}
                                      </div>;
                                      <div className="text-gray-400 text-sm">;
                                        {dropdownItem && dropdownItem.description}
                                      </div>;
                                    </div>;
                                  </Link>;
                                );                                );
                              })}
                            </div>;
                          </motion && motion.div>;
                        )}
                      </AnimatePresence>;
                    </div>;
                  ) : (;
                    <Link
                      href={item && item.href}
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group'>;
                      <item && item.icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />;
                      <span className='font-medium'>{item && item.name}</span>                    </Link>                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group";
                    >;
                      <item && item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />;
                      <span className="font-medium">{item && item.name}</span>;
                  )}
                </div>;
              ))}
<<<<<<< HEAD
            </div>
=======
            </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            {/* CTA Button */}
            <div className='hidden lg:block'>;
              <motion&& motion.a
                href='/contact'
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
                className='bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'>              <motion&& motion.a
=======
                            className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/25 p-4"
                          >
                            <div className="grid grid-cols-1 gap-3">
                              {item.dropdown.map((dropdownItem) => {
                                const Icon = dropdownItem.icon;
                                return (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 hover:border border-cyan-500/30 transition-all duration-300 group/item"
                                  >
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300">
                                      <Icon className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                      <div className="text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300">
                                        {dropdownItem.name}
                                      </div>
                                      <div className="text-gray-400 text-sm">
                                        {dropdownItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                href="/contact"
<<<<<<< HEAD
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Get Started
              </motion.a>
            </div>
<<<<<<< HEAD
=======
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40">;
                Get Started;
              </motion && motion.a>;
            </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            {/* Mobile Menu Button */}
            <div className='lg:hidden'>;
              <motion&& motion.button
                whileTap={{ scale: 0 && 0.95 }}
=======

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                onClick={() => setIsOpen(!isOpen)}
                className='text-gray-300 hover:text-white transition-colors duration-300';
              >;
                {isOpen ? (;
                  <X className='w-6 h-6' />;
                ) : (;
                  <Menu className='w-6 h-6' />;
                )}              </motion && motion.button>              <motion&& motion.button
                whileTap={{ scale: 0 && 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-300";
              >;
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
=======
              </motion && motion.button>;
            </div>;
          </div>;
        </div>;
      </motion && motion.nav>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
<<<<<<< HEAD
            transition={{ duration: 0 && 0.3 }}
            className='fixed inset-0 z-40 lg:hidden'>;
            {/* Backdrop */}
            <div
              className='absolute inset-0 bg-black/50 backdrop-blur-sm'
              onClick={() => setIsOpen(false)}
            />          >;
=======
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
<<<<<<< HEAD
            />
<<<<<<< HEAD
=======
            />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
            
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            {/* Mobile Menu */}
            <motion&& motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
<<<<<<< HEAD
              transition={{ duration: 0 && 0.3 }}
              className='absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl'>;
              <div className='p-6'>;
                {/* Close Button */}
                <div className='flex justify-end mb-6'>;
                  <motion&& motion.button
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}
<<<<<<< HEAD
                    className='text-gray-300 hover:text-white transition-colors duration-300'
                  >
                    <X className='w-6 h-6' />                  </motion.button>
                </div>
=======
                    className='text-gray-300 hover:text-white transition-colors duration-300';
                  >;
                    <X className='w-6 h-6' />                  </motion && motion.button>;
                </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                {/* Mobile Menu Items */}
                <div className='space-y-4'>;
                  {navigationItems && navigationItems.map(item => (            >;
              <div className="p-6">;
=======
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl"
            >
              <div className="p-6">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                {/* Close Button */}
                <div className="flex justify-end mb-6">;
                  <motion&& motion.button
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}
<<<<<<< HEAD
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
                {/* Mobile Menu Items */}
<<<<<<< HEAD
                <div className='space-y-4'>
                  {navigationItems.map(item => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className='space-y-2'>
                          <div className='text-gray-400 font-medium text-sm uppercase tracking-wider'>
                            {item.name}
                          </div>
                          <div className='pl-4 space-y-2'>
                            {item.dropdown.map(dropdownItem => {
                              const Icon = dropdownItem.icon;
=======
                    className="text-gray-300 hover:text-white transition-colors duration-300";
                  >;
                    <X className="w-6 h-6" />;
                  </motion && motion.button>;
                </div>;

                {/* Mobile Menu Items */}
                <div className='space-y-4'>;
                  {navigationItems && navigationItems.map(item => (;
                    <div key={item && item.name}>;
                      {item && item.dropdown ? (;
                        <div className='space-y-2'>;
                          <div className='text-gray-400 font-medium text-sm uppercase tracking-wider'>;
                            {item && item.name}
                          </div>;
                          <div className='pl-4 space-y-2'>;
                            {item && item.dropdown.map(dropdownItem => {;
                              const Icon = dropdownItem && dropdownItem.icon;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                                  onClick={() => setIsOpen(false)}
                                  className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300';
                                >;
                                  <Icon className='w-5 h-5 text-cyan-400' />;
                                  <div>;
                                    <div className='text-white font-medium'>;
                                      {dropdownItem && dropdownItem.name}
                                    </div>;
                                    <div className='text-gray-400 text-sm'>;
                                      {dropdownItem && dropdownItem.description}
                                    </div>;
                                  </div>;
                                </Link>;
                              );                            })}                    <div key={item && item.name}>;
                      {item && item.dropdown ? (;
                        <div className="space-y-2">;
                          <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">;
                            {item && item.name}
                          </div>;
                          <div className="pl-4 space-y-2">;
                            {item && item.dropdown.map((dropdownItem) => {;
                              const Icon = dropdownItem && dropdownItem.icon;
=======
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className="space-y-2">
                          <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                            {item.name}
                          </div>
                          <div className="pl-4 space-y-2">
                            {item.dropdown.map((dropdownItem) => {
                              const Icon = dropdownItem.icon;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                              return (
                                <Link
                                  key={dropdownItem && dropdownItem.name}
                                  href={dropdownItem && dropdownItem.href}
                                  onClick={() => setIsOpen(false)}
<<<<<<< HEAD
                                  className="flex items-center space-x-3 p-3 rounded-lg hover: bg-cyan-500/10 transition-all duration-300";
                                >;
                                  <Icon className="w-5 h-5 text-cyan-400" />;
                                  <div>;
                                    <div className="text-white font-medium">{dropdownItem && dropdownItem.name}</div>;
                                    <div className="text-gray-400 text-sm">{dropdownItem && dropdownItem.description}</div>;
                                  </div>;
                                </Link>;
                              );
=======
                                  className="flex items-center space-x-3 p-3 rounded-lg hover: bg-cyan-500/10 transition-all duration-300"
                                >
                                  <Icon className="w-5 h-5 text-cyan-400" />
                                  <div>
                                    <div className="text-white font-medium">{dropdownItem.name}</div>
                                    <div className="text-gray-400 text-sm">{dropdownItem.description}</div>
                                  </div>
                                </Link>
                              )
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                            })}
                          </div>;
                        </div>;
                      ) : (;
                        <Link
                          href={item && item.href}
                          onClick={() => setIsOpen(false)}
<<<<<<< HEAD
                          className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300';
                        >;
                          <item && item.icon className='w-5 h-5 text-cyan-400' />;
                          <span className='text-white font-medium'>;
                            {item && item.name}
                          </span>                        </Link>                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300";
                        >;
                          <item && item.icon className="w-5 h-5 text-cyan-400" />;
                          <span className="text-white font-medium">{item && item.name}</span>;
=======
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                        >
                          <item.icon className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-medium">{item.name}</span>
                        </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      )}
                    </div>;
                  ))}
<<<<<<< HEAD
<<<<<<< HEAD
                </div>
                {/* Contact Information */}
                <div className='mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20'>
                  <h3 className='text-cyan-400 font-semibold mb-3'>
                    Contact Information
                  </h3>
                  <div className='space-y-2 text-sm'>
                    <div className='flex items-center space-x-2 text-gray-300'>
                      <Phone className='w-4 h-4 text-cyan-400' />
                      <span>{contactInfo.mobile}</span>
                    </div>
                    <div className='flex items-center space-x-2 text-gray-300'>
                      <Mail className='w-4 h-4 text-purple-400' />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className='flex items-center space-x-2 text-gray-300'>
                      <MapPin className='w-4 h-4 text-pink-400' />
                      <span className='text-xs'>{contactInfo.address}</span>                    </div>                      <span>{contactInfo.mobile}</span>
=======
                </div>

                {/* Contact Information */}
                <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
                  <h3 className="text-cyan-400 font-semibold mb-3">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>{contactInfo.mobile}</span>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-pink-400" />
                      <span className="text-xs">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
=======
                </div>;

                {/* Contact Information */}
                <div className='mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20'>;
                  <h3 className='text-cyan-400 font-semibold mb-3'>;
                    Contact Information;
                  </h3>;
                  <div className='space-y-2 text-sm'>;
                    <div className='flex items-center space-x-2 text-gray-300'>;
                      <Phone className='w-4 h-4 text-cyan-400' />;
                      <span>{contactInfo && contactInfo.mobile}</span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-gray-300'>;
                      <Mail className='w-4 h-4 text-purple-400' />;
                      <span>{contactInfo && contactInfo.email}</span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-gray-300'>;
                      <MapPin className='w-4 h-4 text-pink-400' />;
                      <span className='text-xs'>{contactInfo && contactInfo.address}</span>                    </div>                      <span>{contactInfo && contactInfo.mobile}</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-gray-300">;
                      <Mail className="w-4 h-4 text-purple-400" />;
                      <span>{contactInfo && contactInfo.email}</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-gray-300">;
                      <MapPin className="w-4 h-4 text-pink-400" />;
                      <span className="text-xs">{contactInfo && contactInfo.address}</span>;
                    </div>;
                  </div>;
                </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                {/* Mobile CTA */}
<<<<<<< HEAD
                <div className='mt-6'>;
                  <motion&& motion.a
                    href='/contact'
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className='block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25'                  >                  <motion&& motion.a
=======
                <div className="mt-6">
                  <motion.a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                    href="/contact"
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}
<<<<<<< HEAD
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25";
                  >;
                    Get Started Today;
                  </motion && motion.a>;
                </div>;
              </div>;
            </motion && motion.div>;
          </motion && motion.div>;
        )}
      </AnimatePresence>;
    </>;
  );
<<<<<<< HEAD
}
export default Navigation;  )
}
=======
=======
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25"
                  >
                    Get Started Today
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
};

export default Navigation;  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default Navigation;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
