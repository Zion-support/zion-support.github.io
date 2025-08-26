<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

export default function EnhancedNavigation() {
	return (
		<nav className="w-full border-b bg-white">
			<div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
				<Link href="/" className="font-semibold">Zion Tech Group</Link>
				<Link href="/services" className="text-gray-600 hover:text-black">Services</Link>
				<Link href="/solutions" className="text-gray-600 hover:text-black">Solutions</Link>
				<Link href="/blog" className="text-gray-600 hover:text-black">Blog</Link>
				<Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link>
			</div>
		</nav>
	);
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
<<<<<<< HEAD
  Menu, X, ChevronDown, Search, User, 
  Brain, Rocket, Dna, Zap, Globe, 
  Phone, Mail, MapPin
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Quantum AI',
    href: '/quantum-ai',
    icon: <Brain className="w-4 h-4" />,
    description: 'Revolutionary quantum computing and AI services',
    children: [
      { name: 'Brain-Computer Interface', href: '/quantum-ai-brain-computer-interface' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Trading', href: '/quantum-financial-trading' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum IoT', href: '/quantum-iot' },
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-4 h-4" />,
    description: 'Advanced space technology and satellite services',
    children: [
      { name: 'Mission Management', href: '/space-mission-management-platform' },
      { name: 'Constellation Management', href: '/satellite-constellation-management' },
      { name: 'Space Debris Monitoring', href: '/space-debris-monitoring-system' },
      { name: 'Launch Coordination', href: '/orbital-launch-coordination' },
      { name: 'Ground Station Management', href: '/ground-station-network-management' },
    ]
  },
  {
    name: 'Biotech AI',
    href: '/biotech-ai',
    icon: <Dna className="w-4 h-4" />,
    description: 'AI-powered biotechnology and healthcare solutions',
    children: [
      { name: 'Drug Discovery', href: '/ai-drug-discovery-platform' },
      { name: 'Genetic Engineering', href: '/ai-genetic-engineering-suite' },
      { name: 'Protein Design', href: '/ai-protein-design-platform' },
      { name: 'Clinical Trials', href: '/ai-clinical-trial-optimization' },
      { name: 'Personalized Medicine', href: '/ai-personalized-medicine' },
    ]
  },
  {
    name: 'Innovative AI',
    href: '/innovative-ai',
    icon: <Zap className="w-4 h-4" />,
    description: 'Cutting-edge AI and automation services',
    children: [
      { name: 'Legal Contract Analysis', href: '/ai-legal-contract-analyzer-pro' },
      { name: 'HR Recruitment', href: '/ai-hr-recruitment-suite' },
      { name: 'Market Research', href: '/ai-market-research-intelligence' },
      { name: 'Phone Agent Platform', href: '/ai-phone-agent-platform' },
      { name: 'Sales Automation', href: '/ai-sales-automation-suite' },
    ]
  },
  {
    name: 'All Services',
    href: '/services',
    icon: <Globe className="w-4 h-4" />,
    description: 'Explore our complete portfolio of 1000+ services'
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

=======
  Menu, X, ChevronDown, 
  Brain, Rocket, Shield, Cloud, 
  Zap, Atom, Globe, Building2,
  Phone, Mail, MapPin
} from 'lucide-react';

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cef6
export default function EnhancedNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, 
  Rocket, Brain, Zap, Globe, Shield
} from 'lucide-react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a83f
=======
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cef6

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (name: string) => {
=======
  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: <Rocket className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/services?category=quantum', icon: <Zap className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/services?category=space', icon: <Globe className="w-4 h-4" /> },
        { name: 'Enterprise AI', href: '/services?category=enterprise', icon: <Shield className="w-4 h-4" /> },
        { name: 'All Services', href: '/services', icon: <Rocket className="w-4 h-4" /> }
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: <Zap className="w-4 h-4" /> },
    { name: 'About', href: '/about', icon: <User className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <User className="w-4 h-4" /> }
  ];

  const toggleDropdown = (name: string) => {
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a83f
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
<<<<<<< HEAD
    <>
      {/* Enhanced Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                  <p className="text-xs text-gray-400">Revolutionary Technology Solutions</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => item.children && handleDropdownToggle(item.name)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                        >
                          <div className="p-4">
                            <div className="mb-3">
                              <h3 className="text-lg font-semibold text-cyan-400">{item.name}</h3>
                              <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                            <div className="space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={closeMenu}
                                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                                >
                                  {child.name}
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
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{contactInfo.mobile}</span>
              </div>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl z-50 border-l border-cyan-500/30"
          >
            <div className="p-6 h-full overflow-y-auto">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-cyan-400">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
=======
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
=======
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: '🏠'
    },
    {
      name: 'Revolutionary Services',
      href: '/revolutionary-services-showcase',
      icon: '🚀',
      highlight: true
    },
    {
      name: 'All Services',
      href: '/services',
      icon: '⚡'
    },
    {
      name: 'Market Pricing',
      href: '/comprehensive-market-pricing',
      icon: '💰'
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: '💡'
    },
    {
      name: 'About',
      href: '/about',
      icon: 'ℹ️'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: '📞'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      href: '/services?category=ai',
      icon: Brain,
      description: 'Advanced AI services and solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Quantum Computing',
      href: '/services?category=quantum',
      icon: Atom,
      description: 'Quantum-powered solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cybersecurity',
      href: '/services?category=security',
      icon: Shield,
      description: 'Next-gen security solutions',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Cloud & Infrastructure',
      href: '/services?category=cloud',
      icon: Cloud,
      description: 'Scalable cloud solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Emerging Tech',
      href: '/services?category=emerging',
      icon: Rocket,
      description: 'Cutting-edge innovations',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Enterprise IT',
      href: '/services?category=enterprise',
      icon: Building2,
      description: 'Enterprise-grade solutions',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cef6
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<<<<<<< HEAD
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">
                Zion Tech Group
              </span>
            </Link>
          </motion.div>
=======
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                Z
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology Solutions</div>
            </div>
          </Link>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cef6

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
<<<<<<< HEAD
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 group"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.icon}
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
=======
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg transition-all duration-200 ${
                  item.highlight
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-purple-400" />
              <span className="text-sm">{contactInfo.email}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cef6
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
<<<<<<< HEAD
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
=======
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cef6
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
<<<<<<< HEAD
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2"
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a83f
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
<<<<<<< HEAD
                            className="ml-8 mt-2 space-y-2"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={closeMenu}
                                className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                              >
                                {child.name}
=======
                            className="ml-6 mt-2 space-y-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 py-1"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setIsOpen(false);
                                }}
                              >
                                {dropdownItem.icon}
                                <span>{dropdownItem.name}</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a83f
                              </Link>
                            ))}
                          </motion.div>
                        )}
<<<<<<< HEAD
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
                
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold text-center block transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
=======
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <motion.a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </motion.a>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a83f
=======
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                    item.highlight
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Categories Dropdown */}
      <AnimatePresence>
        {activeDropdown === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="group p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:scale-105"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cef6
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8dd4
}
=======
    </motion.nav>
  );
};

export default EnhancedNavigation;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a83f
