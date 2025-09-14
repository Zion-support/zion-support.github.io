'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
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

  const services = [
    { name: 'All Solutions', href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of innovative solutions' },
    { name: 'AI Business Intelligence', href: 'https://ziontechgroup.com/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights' },
    { name: 'Quantum Cybersecurity', href: 'https://ziontechgroup.com/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions' },
    { name: 'Edge Computing', href: 'https://ziontechgroup.com/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' },
    { name: 'Space Technology', href: 'https://ziontechgroup.com/space-technology', icon: Rocket, description: 'Space exploration and satellite tech' },
    { name: 'Pricing', href: '/pricing-2025', icon: Award, description: 'Transparent pricing for all solutions' }
  ];

  const navigationItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI Solutions', href: '/services/ai' },
        { name: 'Cloud Infrastructure', href: '/services/cloud' },
        { name: 'Cybersecurity', href: '/services/security' },
        { name: 'Quantum Computing', href: '/services/quantum' }
      ]
    },
    { 
      name: 'Content',
      href: '/blog',
      dropdown: [
        { name: 'Latest Blog Posts', href: '/blog' },
        { name: 'AI 2025 Breakthroughs', href: '/blog/ai-2025-next-generation-breakthrough' },
        { name: 'Interactive AI Demo Center', href: '/ai-tools/interactive-ai-demo-center' },
        { name: 'Ultimate AI Resource Library', href: '/resources/ultimate-ai-resource-library' },
        { name: 'AI Implementation Mastery Guide', href: '/guides/ai-implementation-mastery-2025' },
        { name: 'Enterprise Success Story', href: '/case-studies/ai-2025-global-enterprise-transformation-ultimate-success' },
        { name: 'AI Solutions 2025 Ultimate', href: '/ai-solutions-2025-ultimate' },
        { name: 'Tech Trends 2025-2030', href: '/tech-trends-2025-2030' },
        { name: 'Business Transformation Guide', href: '/business-transformation-guide-2025' },
        { name: 'Neural Interface Revolution', href: '/blog/ai-2025-neural-interface-revolution' },
        { name: 'Quantum AI Superintelligence', href: '/blog/quantum-ai-superintelligence-2025' },
        { name: 'AI 2025 Insights', href: '/blog/ai-2025-generative-ai-business-transformation' },
        { name: 'Quantum Computing Guide', href: '/blog/quantum-computing-2025-business-applications' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Global AI Transformation', href: '/case-studies/global-ai-transformation-2025-mega-success' },
        { name: 'Implementation Guides', href: '/resources' },
        { name: 'Autonomous Operations Guide', href: '/resources/ai-2025-autonomous-business-operations-guide' }
      ]
    },
    { 
      name: 'AI Tools',
      href: '/ai-tools',
      dropdown: [
        { name: 'Interactive AI Demo Center', href: '/ai-tools/interactive-ai-demo-center' },
        { name: 'All AI Tools', href: '/ai-tools' },
        { name: 'Quantum Computing Demos', href: '/ai-tools/quantum-computing-demo' },
        { name: 'Neural Networks Demos', href: '/ai-tools/neural-networks-demo' },
        { name: 'Autonomous Systems Demos', href: '/ai-tools/autonomous-systems-demo' },
        { name: 'Computer Vision Demos', href: '/ai-tools/computer-vision-demo' },
        { name: 'NLP & Chatbots', href: '/ai-tools/nlp-demo' },
        { name: 'AI Security & Ethics', href: '/ai-tools/security-ethics-demo' }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-white hover:text-blue-300 transition-colors duration-300 py-2"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-white/20 py-2"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-blue-300 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-white hover:text-blue-300 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-2 mt-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-gray-300 hover:text-blue-300 transition-colors py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;