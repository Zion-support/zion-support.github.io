'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown,
  Brain,
  Cloud,
  Code,
  BarChart,
  Zap,
  Shield,
  Users,
  Globe,
  ArrowRight,
  Sparkles,
  Cpu,
  Database,
  Smartphone,
  ShoppingCart,
  Lock,
  Workflow,
  Target,
  TrendingUp,
  Settings,
  Rocket
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const handleDropdownToggle = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  // Service categories with detailed information
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', icon: Brain, description: 'Comprehensive AI solutions', price: 'Starting at $1,500/month' },
    { name: 'AI Marketing', url: '/ai-marketing', icon: Target, description: 'AI-powered marketing automation', price: 'Starting at $199/month' },
    { name: 'AI Automation', url: '/ai-automation', icon: Workflow, description: 'Intelligent process automation', price: 'Starting at $399/month' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Shield, description: 'Medical AI solutions', price: 'Starting at $1,999/month' },
    { name: 'AI Fintech', url: '/ai-fintech', icon: TrendingUp, description: 'Financial AI applications', price: 'Starting at $1,499/month' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: Code, description: 'AI content creation', price: 'Starting at $199/month' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Advanced data insights', price: 'Starting at $799/month' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Lock, description: 'AI security solutions', price: 'Starting at $999/month' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Settings, description: 'Workflow optimization', price: 'Starting at $599/month' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', icon: Settings, description: 'Comprehensive IT support', price: 'Starting at $999/month' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Cloud, description: 'Enterprise infrastructure', price: 'Starting at $1,999/month' },
    { name: 'Micro SAAS', url: '/micro-saas', icon: Rocket, description: '50+ ready-to-use apps', price: 'Starting at $79/month' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Security solutions', price: 'Starting at $1,299/month' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud migration & setup', price: 'Starting at $1,499/month' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: ShoppingCart, description: 'E-commerce platforms', price: 'Starting at $1,799/month' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile applications', price: 'Starting at $2,499/month' },
    { name: 'Database Services', url: '/database', icon: Database, description: 'Database management', price: 'Starting at $899/month' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Cpu, description: 'Next-gen computing', price: 'Custom Pricing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Zap, description: 'Self-managing systems', price: 'Starting at $3,999/month' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', icon: Globe, description: 'Decentralized solutions', price: 'Starting at $2,999/month' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', icon: Cpu, description: 'Connected devices', price: 'Starting at $1,899/month' },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: BarChart, description: 'Data-driven insights', price: 'Starting at $1,199/month' },
    { name: 'Robotics', url: '/robotics', icon: Settings, description: 'Robotic solutions', price: 'Starting at $4,999/month' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
    { name: 'Careers', url: '/careers' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900 to-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>24/7 Support Available</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-xs">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Secure & Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* AI Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                  onMouseEnter={() => setActiveDropdown('ai')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Brain className="w-5 h-5" />
                  <span>AI Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl p-6 z-50">
                    <div className="grid grid-cols-1 gap-4">
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.url}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 mt-0.5 group-hover:text-cyan-300" />
                          <div className="flex-1">
                            <div className="font-semibold text-white group-hover:text-cyan-300">{service.name}</div>
                            <div className="text-sm text-gray-400 group-hover:text-gray-300">{service.description}</div>
                            <div className="text-xs text-cyan-400 font-medium">{service.price}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                  onMouseEnter={() => setActiveDropdown('it')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Cloud className="w-5 h-5" />
                  <span>IT Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl p-6 z-50">
                    <div className="grid grid-cols-1 gap-4">
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.url}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                        >
                          <service.icon className="w-5 h-5 text-blue-400 mt-0.5 group-hover:text-blue-300" />
                          <div className="flex-1">
                            <div className="font-semibold text-white group-hover:text-blue-300">{service.name}</div>
                            <div className="text-sm text-gray-400 group-hover:text-gray-300">{service.description}</div>
                            <div className="text-xs text-blue-400 font-medium">{service.price}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Specialized Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                  onMouseEnter={() => setActiveDropdown('specialized')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Specialized</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'specialized' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl p-6 z-50">
                    <div className="grid grid-cols-1 gap-4">
                      {specializedServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.url}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                        >
                          <service.icon className="w-5 h-5 text-purple-400 mt-0.5 group-hover:text-purple-300" />
                          <div className="flex-1">
                            <div className="font-semibold text-white group-hover:text-purple-300">{service.name}</div>
                            <div className="text-sm text-gray-400 group-hover:text-gray-300">{service.description}</div>
                            <div className="text-xs text-purple-400 font-medium">{service.price}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Users className="w-5 h-5" />
                  <span>Company</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl p-4 z-50">
                    <div className="space-y-2">
                      {companyLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.url}
                          className="block px-3 py-2 text-white hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-gray-900/95 backdrop-blur-md z-40">
            <div className="px-4 py-6 space-y-6 max-h-screen overflow-y-auto">
              {/* AI Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                  AI Services
                </h3>
                <div className="space-y-2 ml-7">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.url}
                      onClick={closeMenu}
                      className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                    >
                      <div className="flex items-start space-x-3">
                        <service.icon className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-medium text-white">{service.name}</div>
                          <div className="text-sm text-gray-400">{service.description}</div>
                          <div className="text-xs text-cyan-400 font-medium">{service.price}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* IT Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Cloud className="w-5 h-5 text-blue-400 mr-2" />
                  IT Services
                </h3>
                <div className="space-y-2 ml-7">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.url}
                      onClick={closeMenu}
                      className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                    >
                      <div className="flex items-start space-x-3">
                        <service.icon className="w-5 h-5 text-blue-400 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-medium text-white">{service.name}</div>
                          <div className="text-sm text-gray-400">{service.description}</div>
                          <div className="text-xs text-blue-400 font-medium">{service.price}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Specialized Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                  Specialized Services
                </h3>
                <div className="space-y-2 ml-7">
                  {specializedServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.url}
                      onClick={closeMenu}
                      className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                    >
                      <div className="flex items-start space-x-3">
                        <service.icon className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-medium text-white">{service.name}</div>
                          <div className="text-sm text-gray-400">{service.description}</div>
                          <div className="text-xs text-purple-400 font-medium">{service.price}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 text-green-400 mr-2" />
                  Company
                </h3>
                <div className="space-y-2 ml-7">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      onClick={closeMenu}
                      className="block p-3 text-white hover:text-green-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;