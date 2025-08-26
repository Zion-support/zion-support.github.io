import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  Bell,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

// Enhanced navigation structure
const navigation = [
  {
    name: 'Services',
    href: '/services',
    icon: Zap,
    children: [
      { name: 'AI Solutions', href: '/services/ai', description: 'Cutting-edge AI services' },
      { name: 'Cloud & DevOps', href: '/services/cloud', description: 'Scalable infrastructure' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced security' },
      { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business modernization' },
      { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computing' },
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Shield,
    children: [
      { name: 'Enterprise Solutions', href: '/enterprise', description: 'Large-scale implementations' },
      { name: 'SMB Solutions', href: '/smb', description: 'Small business focused' },
      { name: 'Startup Solutions', href: '/startup', description: 'Growth acceleration' },
      { name: 'Government Solutions', href: '/government', description: 'Public sector expertise' },
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: Globe,
    children: [
      { name: 'About Us', href: '/about', description: 'Our story and mission' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'News', href: '/news', description: 'Latest updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
    ]
  },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-slate-light/10 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-xl lg:text-2xl font-bold">Z</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 py-2"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl shadow-xl backdrop-blur-sm"
                        >
                          <div className="p-4 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                className="block p-3 rounded-lg hover:bg-zion-slate-light/10 transition-colors duration-200 group"
                              >
                                <div className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-200">
                                  {child.name}
                                </div>
                                {child.description && (
                                  <div className="text-sm text-zion-slate-light mt-1">
                                    {child.description}
                                  </div>
                                )}
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
                    className="flex items-center space-x-1 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 py-2"
                  >
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-zion-cyan rounded-full"></span>
            </motion.button>

            {/* User menu */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
            >
              <User className="w-5 h-5" />
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark border-t border-zion-slate-light/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 py-2"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 py-2"
                    >
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
