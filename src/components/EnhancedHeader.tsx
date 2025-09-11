import React, { useState, memo, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail,
  MapPin,
  Brain,
  Shield,
  Cloud,
  Code,
  Smartphone,
  Zap,
  Rocket
} from 'lucide-react';
import { OptimizedButton } from './PerformanceOptimizer';

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const handleDropdownToggle = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  const navigation = [
    { 
      name: 'Home', 
      href: '/',
      icon: null
    },
    { 
      name: 'Services', 
      href: '/services',
      icon: ChevronDown,
      dropdown: [
        { 
          name: 'AI Services', 
          href: '/services/ai-services',
          icon: Brain,
          description: 'AI-powered solutions for business transformation'
        },
        { 
          name: 'Micro SaaS', 
          href: '/services/micro-saas',
          icon: Rocket,
          description: 'Complete micro-SaaS development platform'
        },
        { 
          name: 'Cloud Solutions', 
          href: '/services/cloud-solutions',
          icon: Cloud,
          description: 'Scalable cloud infrastructure and migration'
        },
        { 
          name: 'Cybersecurity', 
          href: '/services/cybersecurity',
          icon: Shield,
          description: 'Advanced security and compliance solutions'
        },
        { 
          name: 'Mobile Development', 
          href: '/services/mobile-development',
          icon: Smartphone,
          description: 'Native and cross-platform mobile apps'
        },
        { 
          name: 'DevOps & Automation', 
          href: '/services/devops',
          icon: Code,
          description: 'CI/CD pipelines and infrastructure automation'
        }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      icon: ChevronDown,
      dropdown: [
        { 
          name: 'Enterprise', 
          href: '/solutions/enterprise',
          description: 'Large-scale enterprise solutions'
        },
        { 
          name: 'Startup', 
          href: '/solutions/startup',
          description: 'Rapid development for startups'
        },
        { 
          name: 'SMB', 
          href: '/solutions/smb',
          description: 'Cost-effective solutions for small businesses'
        }
      ]
    },
    { 
      name: 'Pricing', 
      href: '/pricing',
      icon: null
    },
    { 
      name: 'About', 
      href: '/about',
      icon: null
    },
    { 
      name: 'Contact', 
      href: '/contact',
      icon: null
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'hello@ziontechgroup.com', href: 'mailto:hello@ziontechgroup.com' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-slate-800/90 text-slate-300 text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cyan-400 font-semibold">24/7 Support Available</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => item.dropdown && handleDropdownToggle(item.name)}
                    className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2"
                  >
                    <span>{item.name}</span>
                    {item.icon && <item.icon className="w-4 h-4" />}
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                        >
                          <div className="p-4">
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                              {item.name}
                            </h3>
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                                >
                                  {subItem.icon && (
                                    <subItem.icon className="w-5 h-5 text-cyan-500 mt-0.5 group-hover:text-cyan-600 transition-colors" />
                                  )}
                                  <div>
                                    <div className="font-medium text-slate-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                                      {subItem.name}
                                    </div>
                                    {subItem.description && (
                                      <div className="text-sm text-slate-600 dark:text-slate-400">
                                        {subItem.description}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-slate-300 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <OptimizedButton
                variant="outline"
                size="sm"
                onClick={() => window.location.href = '/contact'}
              >
                Get Quote
              </OptimizedButton>
              <OptimizedButton
                variant="primary"
                size="sm"
                onClick={() => window.location.href = '/contact'}
              >
                Start Project
              </OptimizedButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-800 border-t border-slate-700"
            >
              <div className="container mx-auto px-4 py-4">
                {navigation.map((item) => (
                  <div key={item.name} className="mb-4">
                    <button
                      onClick={() => item.dropdown && handleDropdownToggle(item.name)}
                      className="flex items-center justify-between w-full text-left text-slate-300 hover:text-white transition-colors py-2"
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.icon && (
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <item.icon className="w-4 h-4" />
                        </motion.div>
                      )}
                    </button>

                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block text-slate-400 hover:text-cyan-400 transition-colors py-1"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-slate-700 space-y-3">
                  <OptimizedButton
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Quote
                  </OptimizedButton>
                  <OptimizedButton
                    variant="primary"
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Start Project
                  </OptimizedButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
});

Header.displayName = 'Header';

export default Header;