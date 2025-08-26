import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, 
  Settings, LogOut, Bell, Globe, Zap
} from 'lucide-react';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, 
  Brain, Zap, Shield, Network, Globe, 
  Cloud, Rocket, Star, Phone, Mail, MapPin
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
    name: 'AI & Machine Learning',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Advanced AI solutions for every industry',
    children: [
      { name: 'AI Agent Orchestrator', href: '/ai-agent-orchestrator' },
      { name: 'AI Phone Agent', href: '/ai-phone-agent' },
      { name: 'AI Market Research', href: '/ai-market-research' },
      { name: 'Sales Copilot', href: '/sales-copilot' }
    ]
  },
  {
    name: 'Quantum Computing',
    href: '/quantum-services',
    icon: <Zap className="w-5 h-5" />,
    description: 'Quantum-powered solutions for complex problems',
    children: [
      { name: 'Quantum AI Brain-Computer Interface', href: '/quantum-ai-brain-computer-interface' },
      { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive' },
      { name: 'Quantum Blockchain', href: '/quantum-blockchain' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Energy', href: '/quantum-energy' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Quantum IoT', href: '/quantum-iot' },
      { name: 'Quantum Logistics', href: '/quantum-logistics' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/security',
    icon: <Shield className="w-5 h-5" />,
    description: 'Next-generation security solutions',
    children: [
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: '5G Private Networks', href: '/5g-private-network-solutions' },
      { name: 'Metaverse AI Platform', href: '/metaverse-ai-development-platform' }
    ]
  },
  {
    name: 'Blockchain & Web3',
    href: '/blockchain-services',
    icon: <Network className="w-5 h-5" />,
    description: 'Decentralized and blockchain solutions',
    children: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
      { name: 'AI Cybersecurity Platform', href: '/ai-cybersecurity' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' }
    ]
  },
  {
    name: 'IoT & Edge Computing',
    href: '/iot-services',
    icon: <Globe className="w-5 h-5" />,
    description: 'Connected and intelligent systems',
    children: [
      { name: 'AI IoT Edge Intelligence Platform', href: '/ai-iot-edge-intelligence' },
      { name: 'AI Smart City Platform', href: '/ai-smart-city-platform' },
      { name: 'AI Industrial IoT Platform', href: '/ai-industrial-iot-platform' },
      { name: 'AI Healthcare IoT Platform', href: '/ai-healthcare-iot-platform' },
      { name: 'AI IoT Platform', href: '/ai-iot-platform' }
    ]
  },
  {
    name: 'Cloud & Data',
    href: '/cloud-services',
    icon: <Cloud className="w-5 h-5" />,
    description: 'Cloud computing and data analytics',
    children: [
      { name: 'Managed Postgres HA', href: '/managed-postgres-ha' },
      { name: 'Status Pages & SLO', href: '/status-pages-slo' },
      { name: 'API Observability', href: '/api-observability' }
    ]
  }
];

<<<<<<< HEAD
const EnhancedNavigation: React.FC = () => {
<<<<<<< HEAD
	return (
		<nav className="bg-white shadow-lg">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<Link href="/" className="text-xl font-bold text-gray-800">Zion Tech</Link>
					<div className="hidden md:flex space-x-8">
						<Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
						<Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
						<Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
						<Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
						<Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
						<Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
					</div>
				</div>
			</div>
		</nav>
	);
=======
=======
interface EnhancedNavigationProps {
  className?: string;
}

const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({ className = '' }) => {
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
=======
  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml' },
        { name: 'Quantum Computing', href: '/services?category=quantum' },
        { name: 'Space Technology', href: '/services?category=space' },
        { name: 'Biotech & Healthcare', href: '/services?category=biotech' },
        { name: 'Financial Services', href: '/services?category=finance' },
        { name: 'Cybersecurity', href: '/services?category=security' },
        { name: 'Edge Computing', href: '/services?category=edge' },
        { name: 'Blockchain', href: '/services?category=blockchain' },
        { name: 'View All Services', href: '/services' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Solutions', href: '/solutions?type=enterprise' },
        { name: 'Startup Solutions', href: '/solutions?type=startup' },
        { name: 'Government Solutions', href: '/solutions?type=government' },
        { name: 'Healthcare Solutions', href: '/solutions?type=healthcare' },
        { name: 'Financial Solutions', href: '/solutions?type=financial' }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
<<<<<<< HEAD
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Revolutionary Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700/50 shadow-2xl"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                          <p className="text-xs text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.slice(0, 8).map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeMenu}
                              className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                          {item.children && item.children.length > 8 && (
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="block px-3 py-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                            >
                              View all {item.children.length} services →
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

          {/* Right side - Contact & Search */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.email}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
=======
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-400">Revolutionary Technology</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <div className="relative">
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
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
                          className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                        >
                          <div className="p-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Notifications */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 relative"
            >
              <Bell className="w-5 h-5" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </motion.button>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:text-white hover:border-gray-500 transition-colors duration-200"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
=======
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
<<<<<<< HEAD
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30"
=======
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
<<<<<<< HEAD
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Contact Info */}
              <div className="bg-gray-800/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-white">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span className="text-white">{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile Navigation Items */}
=======
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Navigation Items */}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
<<<<<<< HEAD
                    onClick={closeMenu}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                  {item.children && (
                    <div className="ml-8 space-y-1">
                      {item.children.slice(0, 4).map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={closeMenu}
                          className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1"
                        >
                          {child.name}
                        </Link>
                      ))}
                      {item.children.length > 4 && (
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 py-1"
                        >
                          View all {item.children.length} services →
                        </Link>
                      )}
=======
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </Link>
                  
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1 text-sm"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
                    </div>
                  )}
                </div>
              ))}

<<<<<<< HEAD
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
=======
              {/* Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>{contactInfo.website}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
                >
                  Get Started Today
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-purple-500/30">
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">📱</span>
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">✉️</span>
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-pink-400">📍</span>
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD
    </motion.nav>
=======
    </nav>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
  );
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
};

export default EnhancedNavigation;