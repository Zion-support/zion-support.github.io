import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket,
  Users,
  Briefcase,
  BarChart3,
  Globe,
  Sparkles,
  Cpu,
  Database,
  Lock,
  TrendingUp,
  Star,
  ArrowRight
} from 'lucide-react';
import { MainNavigation } from './MainNavigation.tsx';

export function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Services', href: '/services', icon: null, hasDropdown: true },
    { name: 'Innovative Solutions', href: '/innovative-services', icon: Sparkles },
    { name: 'Talent', href: '/talent', icon: Users },
    { name: 'Equipment', href: '/equipment', icon: Briefcase },
    { name: 'About', href: '/about', icon: null },
    { name: 'Contact', href: '/contact', icon: null },
  ];

  const serviceCategories = [
    { name: 'AI & Machine Learning', href: '/services/ai', icon: Brain, description: 'Advanced AI solutions for business transformation' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Next-gen security and threat protection' },
    { name: 'Cloud & DevOps', href: '/services/cloud', icon: Cloud, description: 'Scalable cloud infrastructure and automation' },
    { name: 'Quantum Computing', href: '/services/quantum', icon: Cpu, description: 'Cutting-edge quantum solutions' },
    { name: 'Blockchain & Web3', href: '/services/blockchain', icon: Database, description: 'Decentralized technology solutions' },
    { name: 'IoT & Edge Computing', href: '/services/iot', icon: Globe, description: 'Connected device ecosystems' },
    { name: 'Space Technology', href: '/services/space', icon: Rocket, description: 'Space-based innovations' },
    { name: 'Green Technology', href: '/services/green', icon: Sparkles, description: 'Sustainable tech solutions' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-transparent'
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.05),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple p-0.5">
                  <div className="w-full h-full rounded-xl bg-zion-slate-dark flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                      Z
                    </span>
                  </div>
                </div>
                {/* Neon glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-zion-cyan/80 font-medium">Innovation • Technology • Future</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {item.hasDropdown ? (
                  <div className="relative">
                    <button className="flex items-center space-x-2 px-4 py-2 text-white hover:text-zion-cyan transition-colors duration-300 rounded-lg hover:bg-zion-slate-dark/50">
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    
                    {/* Services Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 p-4">
                        <div className="grid grid-cols-1 gap-3">
                          {serviceCategories.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
                            >
                              <div className="p-2 rounded-lg bg-zion-cyan/20 border border-zion-cyan/30 group-hover:border-zion-cyan/50 transition-colors duration-300">
                                <service.icon className="w-5 h-5 text-zion-cyan" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-300">
                                  {service.name}
                                </h4>
                                <p className="text-zion-slate-light text-sm mt-1">
                                  {service.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-zion-cyan/50 group-hover:text-zion-cyan transition-colors duration-300" />
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                          <Link
                            to="/innovative-services"
                            className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
                          >
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/30'
                        : 'text-white hover:text-zion-cyan hover:bg-zion-slate-dark/50'
                    }`}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/30"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zion-slate-dark/50 border border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-zion-cyan" />
            ) : (
              <Menu className="w-6 h-6 text-zion-cyan" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-xl border-t border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <h3 className="text-zion-cyan font-semibold text-lg mb-3">{item.name}</h3>
                      <div className="grid grid-cols-1 gap-2 pl-4">
                        {serviceCategories.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
                          >
                            <service.icon className="w-5 h-5 text-zion-cyan" />
                            <div>
                              <h4 className="text-white font-medium">{service.name}</h4>
                              <p className="text-zion-slate-light text-sm">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.href)
                          ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/30'
                          : 'text-white hover:text-zion-cyan hover:bg-zion-slate-dark/50'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4 inline mr-2" />}
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-zion-cyan/20">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
