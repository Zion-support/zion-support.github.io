import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  Zap,
  Target,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Briefcase, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', icon: Target },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const serviceCategories = [
    { name: 'Micro SaaS', href: '/services/micro-saas' },
    { name: 'IT Services', href: '/services/it-services' },
    { name: 'AI Services', href: '/services/ai-services' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                  onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-slate-700 py-2"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {serviceCategories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>{category.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span className="text-sm">kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Mobile Services Submenu */}
                  {item.hasDropdown && (
                    <div className="ml-8 mt-2 space-y-2">
                      {serviceCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{category.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-slate-700 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;