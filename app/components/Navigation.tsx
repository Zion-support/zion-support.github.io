'use client';

import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';
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
  Code, 
  BarChart, 
  Users, 
  Globe,
  ArrowRight,
  Star,
  Award,
  Clock
} from 'lucide-react';

const Navigation: React.FC = memo(() => {
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

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions', icon: '🤖' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation', icon: '📢' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation', icon: '⚙️' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions', icon: '🏥' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications', icon: '💰' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation', icon: '✍️' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights', icon: '📊' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions', icon: '🛡️' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization', icon: '🔄' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered support', icon: '💬' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Interactive data visualization', icon: '📈' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms', icon: '🛒' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'AI mobile applications', icon: '📱' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Sales process automation', icon: '💼' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support', icon: '💻' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure', icon: '🏗️' },
    { name: 'Micro SAAS', url: '/micro-saas', description: '50+ ready-to-use apps', icon: '🔧' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions', icon: '🔒' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'Cloud migration & setup', icon: '☁️' },
    { name: 'Database Services', url: '/database', description: 'Database management', icon: '🗄️' },
    { name: 'DevOps', url: '/devops', description: 'Development operations', icon: '⚡' },
    { name: 'Networking', url: '/networking', description: 'Network solutions', icon: '🌐' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Development tools', icon: '🛠️' },
    { name: 'Business Apps', url: '/business-apps', description: 'Business applications', icon: '📋' },
    { name: 'Productivity Tools', url: '/productivity', description: 'Productivity solutions', icon: '⚡' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing solutions', icon: '📢' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing', icon: '⚛️' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices', icon: '🌐' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights', icon: '📊' },
    { name: 'Robotics', url: '/robotics', description: 'Robotic solutions', icon: '🤖' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
    { name: 'Careers', url: '/careers' }
  ];

  const resources = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Support', url: '/support' },
    { name: 'System Status', url: '/system-status' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Middletown, DE</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gray-900/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                >
                  <Brain className="w-5 h-5" />
                  <span>AI Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                    <div className="grid grid-cols-2 gap-4 px-6">
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.url}
                          onClick={closeDropdown}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-2xl">{service.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-purple-600">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('it')}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                >
                  <Cloud className="w-5 h-5" />
                  <span>IT Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                    <div className="grid grid-cols-2 gap-4 px-6">
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.url}
                          onClick={closeDropdown}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-2xl">{service.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('specialized')}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Specialized</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'specialized' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                    <div className="px-6 space-y-2">
                      {specializedServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.url}
                          onClick={closeDropdown}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-xl">{service.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-orange-600">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('company')}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                >
                  <Users className="w-5 h-5" />
                  <span>Company</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                    <div className="px-6 space-y-2">
                      {companyLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.url}
                          onClick={closeDropdown}
                          className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('resources')}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                >
                  <Globe className="w-5 h-5" />
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                    <div className="px-6 space-y-2">
                      {resources.map((link, index) => (
                        <Link
                          key={index}
                          href={link.url}
                          onClick={closeDropdown}
                          className="block px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-6 space-y-6">
              {/* AI Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  AI Services
                </h3>
                <div className="grid grid-cols-1 gap-2 ml-7">
                  {aiServices.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      href={service.url}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                    >
                      <span>{service.icon}</span>
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* IT Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Cloud className="w-5 h-5 mr-2" />
                  IT Services
                </h3>
                <div className="grid grid-cols-1 gap-2 ml-7">
                  {itServices.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      href={service.url}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                    >
                      <span>{service.icon}</span>
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Specialized Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Specialized
                </h3>
                <div className="grid grid-cols-1 gap-2 ml-7">
                  {specializedServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.url}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                    >
                      <span>{service.icon}</span>
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company & Resources */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
                  <div className="space-y-2 ml-4">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
                  <div className="space-y-2 ml-4">
                    {resources.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-800">
                <a
                  href="tel:+13024640950"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (302) 464-0950</span>
                </a>
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