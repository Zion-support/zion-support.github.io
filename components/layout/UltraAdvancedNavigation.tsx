import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Brain,
  Rocket,
  Dna,
  Globe,
  Shield,
  Wifi,
  Package,
  Bot,
  Car,
  Building2,
  DollarSign,
  Monitor,
  Users,
  Cpu,
  Zap,
  Atom,
  Database,
  Cloud,
  Lock,
  Code,;
} from 'lucide-react';
import Link from 'next/link';

=======
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin;
  Brain, Rocket, Dna, Globe, Shield, Wifi, Package;
  Bot, Car, Building2, DollarSign, Monitor, Users;
  Cpu, Zap, Atom, Database, Cloud, Lock, Code
} from 'lucide-react';
import Link from 'next/link';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin;
  Brain, Rocket, Dna, Globe, Shield, Wifi, Package;
  Bot, Car, Building2, DollarSign, Monitor, Users;
  Cpu, Zap, Atom, Database, Cloud, Lock, Code
} from 'lucide-react';
import Link from 'next/link';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const UltraAdvancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
<<<<<<< HEAD
<<<<<<< HEAD
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
=======
      setIsScrolled(window.scrollY > 50)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setIsScrolled(window.scrollY > 50)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: null,
    },
=======
      icon: null
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      icon: null
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$2,999/month',
        },
=======
          price: '$2,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$2,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'AI Cybersecurity',
          href: '/security',
          icon: Shield,
          description: 'AI-powered threat detection',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$4,999/month',
        },
=======
          price: '$4,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$4,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'AI Healthcare Analytics',
          href: '/ai-data-analytics',
          icon: Dna,
          description: 'Patient outcome prediction',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$3,999/month',
        },
=======
          price: '$3,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$3,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'AI Supply Chain',
          href: '/quantum-logistics',
          icon: Package,
          description: 'End-to-end optimization',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$2,499/month',
        },
=======
          price: '$2,499/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$2,499/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'AI Financial Risk',
          href: '/ai-financial-risk',
          icon: DollarSign,
          description: 'Advanced risk management',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$5,999/month',
        },
      ],
    },
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          price: '$5,999/month'
        }
      ]
    };
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$15,999/month',
        },
=======
          price: '$15,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$15,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'Quantum Internet Security',
          href: '/quantum-internet-security-platform',
          icon: Lock,
          description: 'Future-proof encryption',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$8,999/month',
        },
=======
          price: '$8,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$8,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'Quantum Drug Discovery',
          href: '/biotech-ai',
          icon: Dna,
          description: 'Accelerated drug development',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$12,999/month',
        },
=======
          price: '$12,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$12,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'Quantum Financial Trading',
          href: '/quantum-financial-trading',
          icon: DollarSign,
          description: 'Nanosecond precision trading',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$19,999/month',
        },
=======
          price: '$19,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$19,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'Quantum IoT Platform',
          href: '/quantum-iot',
          icon: Wifi,
          description: 'Quantum-secured IoT',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$4,999/month',
        },
      ],
    },
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          price: '$4,999/month'
        }
      ]
    };
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$25,999/month',
        },
=======
          price: '$25,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$25,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'Space Debris Cleanup',
          href: '/space-technology',
          icon: Package,
          description: 'AI-powered debris removal',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$35,999/month',
        },
      ],
    },
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          price: '$35,999/month'
        }
      ]
    };
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$8,999/month',
        },
=======
          price: '$8,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$8,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'DevOps Automation',
          href: '/automation',
          icon: Code,
          description: 'AI-powered automation',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$5,999/month',
        },
=======
          price: '$5,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$5,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'Data Analytics',
          href: '/ai-data-analytics',
          icon: Database,
          description: 'AI-powered insights',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$6,999/month',
        },
=======
          price: '$6,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$6,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'Security Operations',
          href: '/security',
          icon: Shield,
          description: '24/7 security monitoring',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$12,999/month',
        },
=======
          price: '$12,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$12,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'API Management',
          href: '/api-observability',
          icon: Code,
          description: 'Complete lifecycle management',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$4,999/month',
        },
=======
          price: '$4,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$4,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'Digital Transformation',
          href: '/solutions',
          icon: Zap,
          description: 'AI-powered transformation',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$15,999/month',
        },
=======
          price: '$15,999/month'
        };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          price: '$15,999/month'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          name: 'IoT Management',
          href: '/it-asset-discovery-agent',
          icon: Wifi,
          description: 'AI-powered device management',
<<<<<<< HEAD
<<<<<<< HEAD
          price: '$7,999/month',
        },
      ],
    },
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          price: '$7,999/month'
        }
      ]
    };
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      name: 'Micro SaaS',
      href: '/services',
      icon: Monitor,
<<<<<<< HEAD
<<<<<<< HEAD
      description: '300+ micro SaaS services',
    },
=======
      description: '300+ micro SaaS services'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      description: '300+ micro SaaS services'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      name: 'Market Pricing',
      href: '/market-pricing',
      icon: DollarSign,
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Benchmarks & vendor references',
    },
=======
      description: 'Benchmarks & vendor references'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      name: 'About',
      href: '/about',
      icon: null
    };
    {
      name: 'Contact',
      href: '/contact',
<<<<<<< HEAD
      icon: null,
    },
=======
      description: 'Benchmarks & vendor references'
    };
    {
      name: 'About',
      href: '/about',
      icon: null
    };
    {
      name: 'Contact',
      href: '/contact',
      icon: null
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      icon: null
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
<<<<<<< HEAD
<<<<<<< HEAD
    address: '364 E Main St STE 1008 Middletown DE 19709',
  };

  
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
=======
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

=======
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='flex items-center'
=======
            className="flex items-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
<<<<<<< HEAD
                <div className='text-xs text-gray-400'>
                  Revolutionary Technology
                </div>
=======
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='hidden lg:flex items-center space-x-8'>
=======
          <div className="hidden lg:flex items-center space-x-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.name}</span>
<<<<<<< HEAD
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
=======
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </button>
                ) : (
                  <Link
                    href={item.href}
<<<<<<< HEAD
<<<<<<< HEAD
                    className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2'
                  >
                    {item.icon && <item.icon className='w-4 h-4' />}
=======
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <span>{item.name}</span>
                  </Link>
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
<<<<<<< HEAD
<<<<<<< HEAD
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'
=======
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      >
                        <div className="p-4">
                          <div className="text-sm text-gray-400 mb-3">{item.description}</div>
                          <div className="space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-sm text-gray-400">{dropdownItem.description}</div>
                                </div>
<<<<<<< HEAD
                                <div className='text-sm font-semibold text-cyan-400'>
=======
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="text-sm text-gray-400 mb-3">{item.description}</div>
                          <div className="space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-sm text-gray-400">{dropdownItem.description}</div>
                                </div>
                                <div className="text-sm font-semibold text-cyan-400">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                                <div className="text-sm font-semibold text-cyan-400">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                                  {dropdownItem.price}
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

          {/* Contact Info & CTA */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='hidden lg:flex items-center space-x-6'>
            <div className='flex items-center space-x-4 text-sm text-gray-300'>
              <a
                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200'
              >
                <Phone className='w-4 h-4' />
                <span className='hidden xl:inline'>{contactInfo.mobile}</span>
=======
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.mobile}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.email}</span>
              </a>
            </div>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
              className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300'
=======
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.email}</span>
              </a>
            </div>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='lg:hidden'>
=======
          <div className="lg:hidden">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
<<<<<<< HEAD
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
=======
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
            className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden'
          >
            <div className='px-4 py-6 space-y-4'>
              {navigationItems.map(item => (
=======
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
<<<<<<< HEAD
<<<<<<< HEAD
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3'
=======
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon && <item.icon className="w-5 h-5" />}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
<<<<<<< HEAD
                        <div className='ml-8 mt-2 space-y-2'>
                          {item.dropdown.map(dropdownItem => (
=======
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon && <item.icon className="w-5 h-5" />}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-8 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <div className="ml-8 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}
<<<<<<< HEAD
<<<<<<< HEAD
                              className='block py-2 text-gray-400 hover:text-white transition-colors duration-200'
=======
                              className="block py-2 text-gray-400 hover:text-white transition-colors duration-200"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                              className="block py-2 text-gray-400 hover:text-white transition-colors duration-200"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
<<<<<<< HEAD
<<<<<<< HEAD
                      className='flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3'
                    >
                      {item.icon && <item.icon className='w-5 h-5' />}
=======
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3"
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3"
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
<<<<<<< HEAD
<<<<<<< HEAD

=======
              
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-800/50">
                <div className="space-y-3 text-sm text-gray-400">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
                  className='block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300'
=======
              
              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-800/50">
                <div className="space-y-3 text-sm text-gray-400">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default UltraAdvancedNavigation;
=======
  )
};

export default UltraAdvancedNavigation;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default UltraAdvancedNavigation;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
