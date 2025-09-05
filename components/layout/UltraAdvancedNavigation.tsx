import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin,
  Brain, Rocket, Dna, Globe, Shield, Wifi, Package,
  Bot, Car, Building2, DollarSign, Monitor, Users,
  Cpu, Zap, Atom, Database, Cloud, Lock, Code
} from 'lucide-react';
import Link from 'next/link';

const UltraAdvancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: null
    },
    {
      name: 'AI Services',
      href: '#',
      icon: Brain,
      description: 'Cutting-edge AI solutions',
      dropdown: [
        {
          name: 'AI Agent Orchestrator',
          href: '/ai-agents',
          icon: Bot,
          description: 'Multi-agent workflow automation',
          price: '$2,999/month'
        },
        {
          name: 'AI Cybersecurity',
          href: '/security',
          icon: Shield,
          description: 'AI-powered threat detection',
          price: '$4,999/month'
        },
        {
          name: 'AI Healthcare Analytics',
          href: '/ai-data-analytics',
          icon: Dna,
          description: 'Patient outcome prediction',
          price: '$3,999/month'
        },
        {
          name: 'AI Supply Chain',
          href: '/quantum-logistics',
          icon: Package,
          description: 'End-to-end optimization',
          price: '$2,499/month'
        },
        {
          name: 'AI Financial Risk',
          href: '/ai-financial-risk',
          icon: DollarSign,
          description: 'Advanced risk management',
          price: '$5,999/month'
        }
      ]
    },
    {
      name: 'Quantum Computing',
      href: '#',
      icon: Atom,
      description: 'Quantum-powered solutions',
      dropdown: [
        {
          name: 'Quantum AI Supercomputer',
          href: '/quantum-ai-cognitive',
          icon: Cpu,
          description: 'Enterprise quantum computing',
          price: '$15,999/month'
        },
        {
          name: 'Quantum Internet Security',
          href: '/quantum-internet-security-platform',
          icon: Lock,
          description: 'Future-proof encryption',
          price: '$8,999/month'
        },
        {
          name: 'Quantum Drug Discovery',
          href: '/biotech-ai',
          icon: Dna,
          description: 'Accelerated drug development',
          price: '$12,999/month'
        },
        {
          name: 'Quantum Financial Trading',
          href: '/quantum-financial-trading',
          icon: DollarSign,
          description: 'Nanosecond precision trading',
          price: '$19,999/month'
        },
        {
          name: 'Quantum IoT Platform',
          href: '/quantum-iot',
          icon: Wifi,
          description: 'Quantum-secured IoT',
          price: '$4,999/month'
        }
      ]
    },
    {
      name: 'Space Technology',
      href: '#',
      icon: Rocket,
      description: 'Space mission management',
      dropdown: [
        {
          name: 'Space Mission Control',
          href: '/space-technology',
          icon: Rocket,
          description: 'Complete mission management',
          price: '$25,999/month'
        },
        {
          name: 'Space Debris Cleanup',
          href: '/space-technology',
          icon: Package,
          description: 'AI-powered debris removal',
          price: '$35,999/month'
        }
      ]
    },
    {
      name: 'Enterprise IT',
      href: '#',
      icon: Building2,
      description: 'Enterprise solutions',
      dropdown: [
        {
          name: 'Cloud Migration',
          href: '/cloud-platform',
          icon: Cloud,
          description: 'Zero-downtime migration',
          price: '$8,999/month'
        },
        {
          name: 'DevOps Automation',
          href: '/automation',
          icon: Code,
          description: 'AI-powered automation',
          price: '$5,999/month'
        },
        {
          name: 'Data Analytics',
          href: '/ai-data-analytics',
          icon: Database,
          description: 'AI-powered insights',
          price: '$6,999/month'
        },
        {
          name: 'Security Operations',
          href: '/security',
          icon: Shield,
          description: '24/7 security monitoring',
          price: '$12,999/month'
        },
        {
          name: 'API Management',
          href: '/api-observability',
          icon: Code,
          description: 'Complete lifecycle management',
          price: '$4,999/month'
        },
        {
          name: 'Digital Transformation',
          href: '/solutions',
          icon: Zap,
          description: 'AI-powered transformation',
          price: '$15,999/month'
        },
        {
          name: 'IoT Management',
          href: '/it-asset-discovery-agent',
          icon: Wifi,
          description: 'AI-powered device management',
          price: '$7,999/month'
        }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/services',
      icon: Monitor,
      description: '300+ micro SaaS services'
    },
    {
      name: 'Market Pricing',
      href: '/market-pricing',
      icon: DollarSign,
      description: 'Benchmarks & vendor references'
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

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;flex justify-between items-center h-20&quot;>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=&quot;flex items-center&quot;
          >
            <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group&quot;>
              <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                <Zap className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <div className=&quot;hidden sm:block&quot;>
                <div className=&quot;text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </div>
                <div className=&quot;text-xs text-gray-400&quot;>Revolutionary Technology</div>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
            {navigationItems.map((item, index) => (
              <div key={item.name} className=&quot;relative group&quot;>
                {item.dropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;
                  >
                    {item.icon && <item.icon className=&quot;w-4 h-4&quot; />}
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;
                  >
                    {item.icon && <item.icon className=&quot;w-4 h-4&quot; />}
                    <span>{item.name}</span>
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className=&quot;absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden&quot;
                      >
                        <div className=&quot;p-4&quot;>
                          <div className=&quot;text-sm text-gray-400 mb-3&quot;>{item.description}</div>
                          <div className=&quot;space-y-2&quot;>
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group&quot;
                              >
                                <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200&quot;>
                                  <dropdownItem.icon className=&quot;w-5 h-5 text-cyan-400&quot; />
                                </div>
                                <div className=&quot;flex-1&quot;>
                                  <div className=&quot;text-white font-medium group-hover:text-cyan-400 transition-colors duration-200&quot;>
                                    {dropdownItem.name}
                                  </div>
                                  <div className=&quot;text-sm text-gray-400&quot;>{dropdownItem.description}</div>
                                </div>
                                <div className=&quot;text-sm font-semibold text-cyan-400&quot;>
                                  {dropdownItem.price}
                                </div>
                              </a>
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

          {/* Contact Info & CTA */}
          <div className=&quot;hidden lg:flex items-center space-x-6&quot;>
            <div className=&quot;flex items-center space-x-4 text-sm text-gray-300&quot;>
              <a href={`tel:${contactInfo.mobile}`} className=&quot;flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200&quot;>
                <Phone className=&quot;w-4 h-4&quot; />
                <span className=&quot;hidden xl:inline&quot;>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className=&quot;flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200&quot;>
                <Mail className=&quot;w-4 h-4&quot; />
                <span className=&quot;hidden xl:inline&quot;>{contactInfo.email}</span>
              </a>
            </div>
            
            <motion.a
              href=&quot;/contact&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300&quot;
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className=&quot;lg:hidden&quot;>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=&quot;text-gray-300 hover:text-white transition-colors duration-200&quot;
            >
              {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className=&quot;lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden&quot;
          >
            <div className=&quot;px-4 py-6 space-y-4&quot;>
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className=&quot;flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3&quot;
                      >
                        <div className=&quot;flex items-center space-x-3&quot;>
                          {item.icon && <item.icon className=&quot;w-5 h-5&quot; />}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className=&quot;ml-8 mt-2 space-y-2&quot;>
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}
                              className=&quot;block py-2 text-gray-400 hover:text-white transition-colors duration-200&quot;
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className=&quot;flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3&quot;
                    >
                      {item.icon && <item.icon className=&quot;w-5 h-5&quot; />}
                      <span>{item.name}</span>
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className=&quot;pt-6 border-t border-gray-800/50&quot;>
                <div className=&quot;space-y-3 text-sm text-gray-400&quot;>
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200&quot;>
                    <Phone className=&quot;w-4 h-4&quot; />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className=&quot;flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200&quot;>
                    <Mail className=&quot;w-4 h-4&quot; />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className=&quot;flex items-start space-x-3&quot;>
                    <MapPin className=&quot;w-4 h-4 mt-0.5&quot; />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                
                <motion.a
                  href=&quot;/contact&quot;
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300&quot;
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraAdvancedNavigation;