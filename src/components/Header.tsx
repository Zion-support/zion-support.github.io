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
  Users,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Target,
  Handshake,
  Lightbulb,
  Building2,
  Factory,
  Car,
  ShoppingCart,
  GraduationCap,
  Briefcase
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
          name: 'AI & Machine Learning',
          href: '/ai-services',
          icon: Brain,
          description: 'Cutting-edge AI platforms & solutions',
          subItems: [
            { name: 'AI Development', href: '/services/ai-development' },
            { name: 'Machine Learning', href: '/services/machine-learning' },
            { name: 'Natural Language Processing', href: '/services/nlp' },
            { name: 'Computer Vision', href: '/services/computer-vision' }
          ]
        },
        {
          name: 'IT & Digital Transformation',
          href: '/it-services',
          icon: Cpu,
          description: 'Digital transformation & IT consulting',
          subItems: [
            { name: 'Digital Strategy', href: '/services/digital-transformation' },
            { name: 'IT Consulting', href: '/services/it-consulting' },
            { name: 'System Integration', href: '/services/system-integration' },
            { name: 'Legacy Modernization', href: '/services/legacy-modernization' }
          ]
        },
        {
          name: 'Cloud & DevOps',
          href: '/services',
          icon: Cloud,
          description: 'Scalable cloud infrastructure',
          subItems: [
            { name: 'Cloud Migration', href: '/services/cloud-migration' },
            { name: 'DevOps Automation', href: '/services/devops-automation' },
            { name: 'Container Orchestration', href: '/services/container-orchestration' },
            { name: 'Serverless Architecture', href: '/services/serverless' }
          ]
        },
        {
          name: 'Cybersecurity',
          href: '/services',
          icon: Shield,
          description: 'Advanced security solutions',
          subItems: [
            { name: 'Threat Detection', href: '/services/threat-detection' },
            { name: 'Zero Trust Security', href: '/services/zero-trust' },
            { name: 'Compliance & Governance', href: '/services/compliance' },
            { name: 'Incident Response', href: '/services/incident-response' }
          ]
        },
        {
          name: 'Micro SAAS Solutions',
          href: '/micro-saas',
          icon: Zap,
          description: 'Custom software solutions',
          subItems: [
            { name: 'Custom Development', href: '/services/custom-development' },
            { name: 'API Development', href: '/services/api-development' },
            { name: 'Mobile Apps', href: '/services/mobile-development' },
            { name: 'Web Applications', href: '/services/web-development' }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        {
          name: 'Industry Solutions',
          href: '/industry-solutions',
          icon: Building2,
          description: 'Tailored industry solutions',
          subItems: [
            { name: 'Healthcare', href: '/solutions/healthcare' },
            { name: 'Financial Services', href: '/solutions/financial' },
            { name: 'Manufacturing', href: '/solutions/manufacturing' },
            { name: 'Retail & E-commerce', href: '/solutions/retail' },
            { name: 'Government', href: '/solutions/government' },
            { name: 'Education', href: '/solutions/education' }
          ]
        },
        {
          name: 'Technology Solutions',
          href: '/emerging-tech',
          icon: Rocket,
          description: 'Emerging technology solutions',
          subItems: [
            { name: 'Quantum Computing', href: '/services/quantum-computing' },
            { name: 'Blockchain & DeFi', href: '/services/blockchain' },
            { name: 'IoT & Edge Computing', href: '/services/iot-edge' },
            { name: 'Metaverse & AR/VR', href: '/services/metaverse' }
          ]
        }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
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
          <div className="hidden md:flex items-center space-x-4">
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
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeMobileMenu}>
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
                              <div key={dropdownItem.name} className="mb-4 last:mb-0">
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
                                {dropdownItem.subItems && (
                                  <div className="ml-13 mt-2 space-y-1">
                                    {dropdownItem.subItems.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        to={subItem.href}
                                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors px-3 py-1 rounded"
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
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
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
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <div key={dropdownItem.name}>
                                <Link
                                  to={dropdownItem.href}
                                  className="block px-3 py-2 text-gray-400 hover:text-cyan-400 transition-colors"
                                  onClick={closeMobileMenu}
                                >
                                  {dropdownItem.name}
                                </Link>
                                {dropdownItem.subItems && (
                                  <div className="ml-4 mt-1 space-y-1">
                                    {dropdownItem.subItems.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        to={subItem.href}
                                        className="block px-3 py-1 text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                                        onClick={closeMobileMenu}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  Get Quote
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  Start Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
