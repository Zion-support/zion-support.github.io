'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, Brain, Cloud, Shield, Users, BarChart, Globe, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: BarChart, description: 'AI-powered marketing automation' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Intelligent process automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Shield, description: 'Medical AI solutions' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart, description: 'Financial AI applications' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Globe, description: 'AI content creation' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'AI security solutions' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, description: 'Workflow optimization' }
  ];

  const solutions = [
    { name: 'IT Services', href: '/it-services', icon: Cloud, description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud, description: 'Enterprise infrastructure' },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Globe, description: '50+ ready-to-use apps' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud migration & setup' },
    { name: 'E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce platforms' },
    { name: 'Mobile App Development', href: '/ai-mobile-app-development', icon: Globe, description: 'Mobile applications' },
    { name: 'Database Services', href: '/ai-data-analytics', icon: BarChart, description: 'Database management' }
  ];

  const specialized = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap, description: 'Next-gen computing' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Brain, description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Globe, description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Cloud, description: 'Connected devices' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data-driven insights' },
    { name: 'Robotics', href: '/robotics', icon: Zap, description: 'Robotic solutions' }
  ];

  const company = [
    { name: 'About Us', href: '/about', description: 'Learn about our mission' },
    { name: 'Our Team', href: '/team', description: 'Meet our experts' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
    { name: 'Blog', href: '/blog', description: 'Latest insights' },
    { name: 'News', href: '/news', description: 'Industry news and updates' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
    { name: 'API Reference', href: '/api', description: 'API documentation' },
    { name: 'Guides', href: '/guides', description: 'How-to guides' },
    { name: 'Tutorials', href: '/tutorials', description: 'Learning resources' },
    { name: 'Support', href: '/support', description: 'Get help' },
    { name: 'Community', href: '/community', description: 'Join our community' }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const DropdownMenu = ({ items, title }: { items: any[], title: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50"
    >
      <div className="px-4 py-2 border-b border-gray-100">
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="grid grid-cols-1 gap-1">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              {IconComponent && <IconComponent className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />}
              <div>
                <div className="font-medium text-gray-900 group-hover:text-blue-600">{item.name}</div>
                <div className="text-sm text-gray-500 group-hover:text-gray-600">{item.description}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-auto" />
            </Link>
          );
        })}
      </div>
    </motion.div>
  );

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('ai-services')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'ai-services' && (
                  <DropdownMenu items={services} title="AI Services" />
                )}
              </AnimatePresence>
            </div>

            {/* IT Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('it-solutions')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span>IT Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'it-solutions' && (
                  <DropdownMenu items={solutions} title="IT Solutions" />
                )}
              </AnimatePresence>
            </div>

            {/* Specialized Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('specialized')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span>Specialized</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'specialized' && (
                  <DropdownMenu items={specialized} title="Specialized Solutions" />
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('company')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <DropdownMenu items={company} title="Company" />
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('resources')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <DropdownMenu items={resources} title="Resources" />
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
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
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">AI Services</div>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block pl-4 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">IT Solutions</div>
                  {solutions.map((solution, index) => (
                    <Link
                      key={index}
                      href={solution.href}
                      className="block pl-4 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Specialized</div>
                  {specialized.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block pl-4 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Company</div>
                  {company.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block pl-4 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Resources</div>
                  {resources.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block pl-4 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Link href="/contact" className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;