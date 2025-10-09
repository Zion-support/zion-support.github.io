'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Cloud,
  Zap,
  Shield,
  BarChart,
  Code,
  Users,
  Globe,
  ArrowRight,
  Sparkles,
  Cpu,
  Database,
  Lock,
  TrendingUp,
  Smartphone,
  ShoppingCart,
  FileText,
  Settings,
  Rocket,
  Target,
  Lightbulb,
  Network,
  Layers,
  Activity
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone',
      });
    }
  }, []);

  const aiServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'AI-powered marketing automation' },
    { name: 'AI Automation', href: '/ai-automation', icon: Settings, description: 'Intelligent process automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Activity, description: 'Medical AI solutions' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: TrendingUp, description: 'Financial AI applications' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'AI content creation' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Lock, description: 'AI security solutions' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Layers, description: 'Workflow optimization' }
  ];

  const itServices = [
    { name: 'IT Services', href: '/it-services', icon: Cloud, description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Database, description: 'Enterprise infrastructure' },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Rocket, description: '50+ ready-to-use apps' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud migration & setup' },
    { name: 'E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: ShoppingCart, description: 'E-commerce platforms' },
    { name: 'Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile applications' },
    { name: 'Database Services', href: '/database', icon: Database, description: 'Database management' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Next-gen computing' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Network, description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Globe, description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Layers, description: 'Connected devices' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data-driven insights' },
    { name: 'Robotics', href: '/robotics', icon: Settings, description: 'Robotic solutions' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/careers' }
  ];

  const DropdownMenu: React.FC<{ 
    items: Array<{ name: string; href: string; icon?: any; description?: string }>; 
    title: string;
    icon: any;
    color: string;
  }> = ({ items, title, icon: Icon, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl z-50"
    >
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon className={`w-5 h-5 ${color}`} />
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              {item.icon && <item.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 mt-1" />}
              <div className="flex-1">
                <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {item.name}
                </div>
                {item.description && (
                  <div className="text-xs text-gray-400 group-hover:text-gray-300">
                    {item.description}
                  </div>
                )}
              </div>
              <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown('ai')}
                onMouseLeave={() => setActiveDropdown(null)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'ai' && (
                  <div
                    onMouseEnter={() => setActiveDropdown('ai')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <DropdownMenu 
                      items={aiServices} 
                      title="AI Services" 
                      icon={Brain} 
                      color="text-purple-400" 
                    />
                  </div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown('it')}
                onMouseLeave={() => setActiveDropdown(null)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'it' && (
                  <div
                    onMouseEnter={() => setActiveDropdown('it')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <DropdownMenu 
                      items={itServices} 
                      title="IT Services" 
                      icon={Cloud} 
                      color="text-blue-400" 
                    />
                  </div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown('specialized')}
                onMouseLeave={() => setActiveDropdown(null)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
              >
                <Zap className="w-4 h-4" />
                <span>Specialized</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'specialized' && (
                  <div
                    onMouseEnter={() => setActiveDropdown('specialized')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <DropdownMenu 
                      items={specializedServices} 
                      title="Specialized Services" 
                      icon={Zap} 
                      color="text-orange-400" 
                    />
                  </div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
              >
                <Users className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <div
                    onMouseEnter={() => setActiveDropdown('company')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <DropdownMenu 
                      items={companyLinks} 
                      title="Company" 
                      icon={Users} 
                      color="text-green-400" 
                    />
                  </div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/contact" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
            <Link
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200 font-medium"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 mobile-menu"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile AI Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Brain className="w-5 h-5 text-purple-400 mr-2" />
                  AI Services
                </h3>
                <div className="grid grid-cols-1 gap-2 ml-7">
                  {aiServices.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile IT Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Cloud className="w-5 h-5 text-blue-400 mr-2" />
                  IT Services
                </h3>
                <div className="grid grid-cols-1 gap-2 ml-7">
                  {itServices.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Specialized Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Zap className="w-5 h-5 text-orange-400 mr-2" />
                  Specialized
                </h3>
                <div className="grid grid-cols-1 gap-2 ml-7">
                  {specializedServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Company Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Users className="w-5 h-5 text-green-400 mr-2" />
                  Company
                </h3>
                <div className="grid grid-cols-1 gap-2 ml-7">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium mb-3"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;