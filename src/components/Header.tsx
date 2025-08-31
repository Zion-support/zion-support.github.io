import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Zap, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Globe,
  Search,
  Bell,
  Brain,
  Shield,
  Cloud,
  Atom,
  Rocket,
  Code,
  Target,
  Users,
  MessageCircle,
  BookOpen,
  HelpCircle,
  DollarSign,
  Settings
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      dropdown: true,
      icon: Zap,
      items: [
        {
          category: 'AI & Machine Learning',
          icon: Brain,
          services: [
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
            { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
            { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
            { name: 'AI Content Marketing', href: '/services/ai-content-marketing-suite' },
            { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' },
            { name: 'AI Project Management', href: '/services/ai-project-management' },
            { name: 'AI Research Assistant', href: '/services/ai-autonomous-research-assistant' },
            { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform' },
            { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform' },
            { name: 'AI Quantum Hybrid', href: '/services/ai-quantum-hybrid-platform' }
          ]
        },
        {
          category: 'Cybersecurity',
          icon: Shield,
          services: [
            { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },
            { name: 'Security Headers & CSP', href: '/services/security-headers-csp' },
            { name: 'DSR Privacy Portal', href: '/services/dsr-portal' },
            { name: 'Zero Trust Network', href: '/services/zero-trust-network-access' },
            { name: 'SOC2 Compliance', href: '/services/soc2-compliance-automation' }
          ]
        },
        {
          category: 'Cloud & DevOps',
          icon: Cloud,
          services: [
            { name: 'Cloud DevOps', href: '/services/cloud-devops' },
            { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
            { name: 'FinOps Advisor', href: '/services/finops-advisor' },
            { name: 'Cloud Migration', href: '/services/cloud-migration-services' },
            { name: 'Edge Computing', href: '/services/iot-edge-computing' }
          ]
        },
        {
          category: 'Quantum Computing',
          icon: Atom,
          services: [
            { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing' },
            { name: 'Quantum Neural Networks', href: '/services/quantum-neural-networks' },
            { name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading' },
            { name: 'AI Quantum Hybrid', href: '/services/ai-quantum-hybrid-platform' }
          ]
        },
        {
          category: 'Digital Transformation',
          icon: Rocket,
          services: [
            { name: 'Digital Twin Solutions', href: '/services/digital-twin' },
            { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
            { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
            { name: '5G Enterprise Solutions', href: '/services/5g-enterprise-solutions' }
          ]
        },
        {
          category: 'Micro SaaS',
          icon: Code,
          services: [
            { name: 'Custom SaaS Development', href: '/services/micro-saas-solutions' },
            { name: 'API Development', href: '/services/api-development' },
            { name: 'Mobile App Development', href: '/services/mobile-development' },
            { name: 'Web Application Development', href: '/services/web-development' }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: true,
      icon: Target,
      items: [
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/solutions/financial' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
        { name: 'Government Solutions', href: '/solutions/government' },
        { name: 'Retail Solutions', href: '/solutions/retail' },
        { name: 'Education Solutions', href: '/solutions/education' },
        { name: 'Startup Solutions', href: '/solutions/startup' },
        { name: 'Enterprise Solutions', href: '/enterprise' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      dropdown: true,
      icon: Users,
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News', href: '/news' },
        { name: 'Events', href: '/events' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: true,
      icon: BookOpen,
      items: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'API Reference', href: '/api' },
        { name: 'Research & Development', href: '/research-development' }
      ]
    },
    {
      name: 'Support',
      href: '/help',
      dropdown: true,
      icon: HelpCircle,
      items: [
        { name: 'Help Center', href: '/help' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Training', href: '/training' },
        { name: 'Tutorials', href: '/tutorials' }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg' 
          : 'bg-transparent'
      } ${className || ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400 font-rajdhani tracking-wider">
                Innovation Group
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    
                    {/* Mega Menu for Services */}
                    {item.name === 'Services' && (
                      <div className="absolute top-full left-0 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-6">
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                            {item.items.map((category) => (
                              <div key={category.category} className="space-y-4">
                                <div className="flex items-center space-x-2 text-cyan-400">
                                  <category.icon className="w-5 h-5" />
                                  <h3 className="font-semibold text-white">{category.category}</h3>
                                </div>
                                <div className="space-y-2">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="block text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded px-2 py-1 transition-colors duration-200"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Regular Dropdown for other items */}
                    {item.name !== 'Services' && (
                      <div className="absolute top-full left-0 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-4 space-y-2">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle size="sm" />

            {/* CTA Buttons */}
            <Link
              to="/contact"
              className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Get Quote
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for services, solutions, or resources..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  autoFocus
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 max-h-screen overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation Items */}
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
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
                            {item.name === 'Services' ? (
                              // Special handling for Services mega menu
                              <div className="space-y-4">
                                {item.items.map((category) => (
                                  <div key={category.category} className="space-y-2">
                                    <div className="flex items-center space-x-2 text-cyan-400">
                                      <category.icon className="w-4 h-4" />
                                      <span className="text-sm font-medium">{category.category}</span>
                                    </div>
                                    <div className="ml-6 space-y-1">
                                      {category.services.slice(0, 3).map((service) => (
                                        <Link
                                          key={service.name}
                                          to={service.href}
                                          className="block px-3 py-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {service.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              // Regular dropdown items
                              item.items?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block px-3 py-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Theme Toggle */}
              <div className="pt-4 border-t border-slate-700/50">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-gray-300 text-sm">Theme</span>
                  <ThemeToggle size="sm" />
                </div>
              </div>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-slate-700/50 space-y-3">
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 text-center border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
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
}
