'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Zap,
  Brain,
  Cloud,
  Code,
  BarChart,
  Users,
  Globe,
  Shield,
  ArrowRight
} from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  }, [isOpen]);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone_number',
      });
    }
  }, []);

  const isActive = (path: string) => pathname === path;

  const aiServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: BarChart, description: 'AI-powered marketing' },
    { name: 'AI Automation', href: '/ai-automation', icon: Code, description: 'Process automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Shield, description: 'Medical AI solutions' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart, description: 'Financial AI' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code, description: 'Content creation' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Data insights' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Code, description: 'Workflow optimization' }
  ];

  const itServices = [
    { name: 'IT Services', href: '/it-services', icon: Cloud, description: 'IT support & solutions' },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud, description: 'Infrastructure services' },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Code, description: '50+ ready-to-use apps' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud migration' },
    { name: 'E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce platforms' },
    { name: 'Mobile App Development', href: '/ai-mobile-app-development', icon: Code, description: 'Mobile apps' },
    { name: 'Database Services', href: '/database', icon: BarChart, description: 'Database management' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap, description: 'Next-gen computing' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Brain, description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Globe, description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Cloud, description: 'Connected devices' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data insights' },
    { name: 'Robotics', href: '/robotics', icon: Code, description: 'Robotic solutions' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/careers' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* AI Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('ai-services')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'ai-services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'ai-services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-800 py-4 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('it-services')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'it-services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'it-services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-800 py-4 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Specialized Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('specialized')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
              >
                <Zap className="w-4 h-4" />
                <span>Specialized</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'specialized' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'specialized' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-800 py-4 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    {specializedServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-orange-400 group-hover:text-orange-300" />
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
              >
                <Users className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-800 py-2 z-50">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
              >
                <Globe className="w-4 h-4" />
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-800 py-2 z-50">
                  {resources.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(302) 464-0950</span>
            </a>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Get Quote</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors p-2"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
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
                      className="flex items-center space-x-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <service.icon className="w-4 h-4 text-purple-400" />
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
                      className="flex items-center space-x-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <service.icon className="w-4 h-4 text-blue-400" />
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
                      className="flex items-center space-x-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <service.icon className="w-4 h-4 text-orange-400" />
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
                      className="py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Resources */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                  Resources
                </h3>
                <div className="grid grid-cols-1 gap-2 ml-7">
                  {resources.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-800">
                <div className="space-y-4">
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">(302) 464-0950</span>
                  </a>
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;