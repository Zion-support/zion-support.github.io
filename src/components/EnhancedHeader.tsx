import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Brain, 
  Cloud, 
  Rocket, 
  Users, 
  Building, 
  Phone, 
  Mail,
  MapPin,
  Globe,
  Star
} from 'lucide-react';

export const EnhancedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: <Star className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        {
          name: 'Comprehensive Services',
          href: '/comprehensive-services',
          description: 'Complete portfolio of innovative solutions',
          icon: <Building className="w-4 h-4" />
        },
        {
          name: 'Revolutionary Services 2037',
          href: '/revolutionary-services-2037',
          description: 'AI consciousness, quantum computing & more',
          icon: <Brain className="w-4 h-4" />
        },
        {
          name: 'AI Solutions',
          href: '/services/ai-solutions',
          description: 'Advanced AI and machine learning',
          icon: <Brain className="w-4 h-4" />
        },
        {
          name: 'Quantum Technology',
          href: '/services/quantum-tech',
          description: 'Quantum computing and breakthrough solutions',
          icon: <Rocket className="w-4 h-4" />
        },
        {
          name: 'Space Technology',
          href: '/services/space-tech',
          description: 'Space exploration and metaverse reality',
          icon: <Rocket className="w-4 h-4" />
        },
        {
          name: 'Enterprise IT',
          href: '/services/enterprise-it',
          description: 'Enterprise infrastructure and solutions',
          icon: <Building className="w-4 h-4" />
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: <Cloud className="w-4 h-4" />,
      dropdown: [
        {
          name: 'Micro SAAS',
          href: '/solutions/micro-saas',
          description: 'Scalable software-as-a-service solutions',
          icon: <Zap className="w-4 h-4" />
        },
        {
          name: 'IT Services',
          href: '/solutions/it-services',
          description: 'Comprehensive IT infrastructure and support',
          icon: <Building className="w-4 h-4" />
        },
        {
          name: 'AI Services',
          href: '/solutions/ai-services',
          description: 'Artificial intelligence and automation',
          icon: <Brain className="w-4 h-4" />
        },
        {
          name: 'Cloud Solutions',
          href: '/solutions/cloud',
          description: 'Cloud infrastructure and optimization',
          icon: <Cloud className="w-4 h-4" />
        }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-zion-slate-light">Revolutionary Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan cursor-pointer transition-colors duration-300"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center gap-2 transition-colors duration-300 ${
                      location.pathname === item.href
                        ? 'text-zion-cyan'
                        : 'text-zion-slate-light hover:text-zion-cyan'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/25"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-4">
                      <div className="grid gap-3">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-zion-slate/40 transition-all duration-300 group"
                          >
                            <div className="text-zion-cyan group-hover:text-zion-purple transition-colors duration-300">
                              {dropdownItem.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {dropdownItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{contactInfo.mobile}</span>
            </div>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25 hover:shadow-zion-purple/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <div className="flex items-center gap-2 text-zion-slate-light font-semibold mb-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <div className="ml-6 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-zion-slate-light/20 space-y-3">
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.website}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};