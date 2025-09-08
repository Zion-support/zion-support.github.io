import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, Shield, Cpu, Database, Globe, Smartphone, Lock } from 'lucide-react';

const ModernHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    { name: 'AI Services', icon: Cpu, href: '/services/ai' },
    { name: 'IT Solutions', icon: Shield, href: '/services/it' },
    { name: 'SAAS Platforms', icon: Database, href: '/services/saas' },
    { name: 'Development', icon: Globe, href: '/services/development' },
    { name: 'Cloud & Security', icon: Lock, href: '/services/cloud-security' },
    { name: 'Analytics', icon: Database, href: '/services/analytics' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-neon-blue/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Zion Tech
              </span>
              <span className="text-xs text-neon-green font-medium">Innovation Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="nav-link flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-neon-blue/20 rounded-xl p-4 shadow-2xl"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {serviceCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neon-blue/10 transition-colors group"
                        >
                          <category.icon className="w-5 h-5 text-neon-blue group-hover:text-neon-purple transition-colors" />
                          <span className="text-white group-hover:text-neon-blue transition-colors">
                            {category.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-neon-blue/20">
                      <Link
                        href="/services"
                        className="block text-center text-neon-blue hover:text-neon-purple transition-colors font-medium"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="nav-link">
              About
            </Link>
            
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover:from-neon-purple hover:to-neon-blue transition-all duration-300 shadow-lg hover:shadow-neon-blue/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-neon-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-neon-blue/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link href="/" className="mobile-nav-link">
                Home
              </Link>
              <Link href="/services" className="mobile-nav-link">
                Services
              </Link>
              <Link href="/about" className="mobile-nav-link">
                About
              </Link>
              <Link href="/blog" className="mobile-nav-link">
                Blog
              </Link>
              <Link href="/contact" className="mobile-nav-link">
                Contact
              </Link>
              <div className="pt-4">
                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default ModernHeader;