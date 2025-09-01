import React, { useState, useEffect } from 'react';
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
  Globe,
  Shield,
  Brain,
  Cloud,
  Cpu,
  Zap,
  Rocket,
  Database,
  Network,
  Code,
  Server,
  Chip,
  Lock,
  BarChart3,
  Users,
  Target,
  Handshake,
  Lightbulb,
  Atom,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search as SearchIcon,
  BarChart,
  Users2,
  Settings,
  Palette,
  Building2,
  Factory,
  Car,
  ShoppingCart,
  GraduationCap,
  Heart,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { 
          name: 'AI Solutions', 
          href: '/ai-services', 
          icon: Brain, 
          description: 'Cutting-edge AI platforms',
          submenu: [
            { name: 'AI Development', href: '/services', description: 'Custom AI solutions' },
            { name: 'AI Healthcare', href: '/services', description: 'Medical AI platforms' },
            { name: 'AI Finance', href: '/services', description: 'Financial AI tools' },
            { name: 'AI Marketing', href: '/services', description: 'Marketing automation' }
          ]
        },
        { 
          name: 'IT Services', 
          href: '/it-services', 
          icon: Cpu, 
          description: 'Digital transformation',
          submenu: [
            { name: 'Cloud & DevOps', href: '/services', description: 'Infrastructure solutions' },
            { name: 'Cybersecurity', href: '/services', description: 'Security platforms' },
            { name: 'Data Analytics', href: '/services', description: 'Business intelligence' },
            { name: 'Digital Twin', href: '/services', description: 'IoT & simulation' }
          ]
        },
        { 
          name: 'Micro SAAS', 
          href: '/micro-saas', 
          icon: Zap, 
          description: 'Custom software solutions',
          submenu: [
            { name: 'Business Tools', href: '/services', description: 'Operational efficiency' },
            { name: 'Industry Solutions', href: '/industry-solutions', description: 'Sector-specific tools' },
            { name: 'Enterprise Platforms', href: '/enterprise', description: 'Large-scale solutions' },
            { name: 'Startup Solutions', href: '/services', description: 'Growth acceleration' }
          ]
        },
        { 
          name: 'Emerging Tech', 
          href: '/emerging-tech', 
          icon: Rocket, 
          description: 'Next-gen technologies',
          submenu: [
            { name: 'Quantum Computing', href: '/services', description: 'Quantum solutions' },
            { name: 'Blockchain', href: '/services', description: 'Distributed systems' },
            { name: 'Edge Computing', href: '/services', description: 'IoT & edge platforms' },
            { name: 'Space Tech', href: '/services', description: 'Aerospace solutions' }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Enterprise', href: '/enterprise', icon: Building2, description: 'Large-scale solutions' },
        { name: 'Industry Solutions', href: '/industry-solutions', icon: Factory, description: 'Sector-specific platforms' },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Target, description: 'Business modernization' },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, description: 'Scalable infrastructure' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50'
          : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Middletown, DE</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Global Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Innovation Hub</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-cyan-400 bg-cyan-400/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-96 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-4">
                            {item.dropdown.map((dropdownItem) => (
                              <div key={dropdownItem.name} className="mb-3 last:mb-0">
                                <Link
                                  to={dropdownItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                    <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </Link>
                                
                                {/* Submenu */}
                                {dropdownItem.submenu && (
                                  <div className="ml-12 mt-2 space-y-1">
                                    {dropdownItem.submenu.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        to={subItem.href}
                                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Get Quote
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-slate-700"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 flex items-center justify-between"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setIsOpen(false);
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-4 space-y-2">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Start Project
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
