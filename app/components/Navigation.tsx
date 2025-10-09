'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail,
  Brain,
  Cloud,
  Shield,
  Zap,
  BarChart,
  Code,
  Users,
  Globe,
  ArrowRight
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Advanced AI solutions' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: BarChart, description: 'AI-powered marketing' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Process automation' },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, description: 'Cloud infrastructure' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Code, description: 'IT support' }
  ];

  const solutions = [
    { name: 'Enterprise', href: '/enterprise', icon: Users, description: 'Enterprise solutions' },
    { name: 'Healthcare', href: '/ai-healthcare', icon: Globe, description: 'Healthcare AI' },
    { name: 'Fintech', href: '/ai-fintech', icon: BarChart, description: 'Financial technology' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Brain, description: 'Quantum solutions' }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeDropdowns}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
              onClick={closeDropdowns}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 font-medium transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {services.map((service, index) => {
                          const IconComponent = service.icon;
                          return (
                            <Link
                              key={index}
                              href={service.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                              onClick={closeDropdowns}
                            >
                              <IconComponent className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                              <div>
                                <div className="font-medium text-white group-hover:text-cyan-300">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {service.description}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 ml-auto" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 font-medium transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'solutions' ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Industry Solutions</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {solutions.map((solution, index) => {
                          const IconComponent = solution.icon;
                          return (
                            <Link
                              key={index}
                              href={solution.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                              onClick={closeDropdowns}
                            >
                              <IconComponent className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                              <div>
                                <div className="font-medium text-white group-hover:text-cyan-300">
                                  {solution.name}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {solution.description}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 ml-auto" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/about" 
              className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
              onClick={closeDropdowns}
            >
              About
            </Link>

            <Link 
              href="/blog" 
              className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
              onClick={closeDropdowns}
            >
              Blog
            </Link>

            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
              onClick={closeDropdowns}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle menu"
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
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                onClick={closeDropdowns}
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block text-gray-400 hover:text-cyan-400 transition-colors"
                        onClick={closeDropdowns}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('mobile-solutions')}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    activeDropdown === 'mobile-solutions' ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === 'mobile-solutions' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {solutions.map((solution, index) => (
                      <Link
                        key={index}
                        href={solution.href}
                        className="block text-gray-400 hover:text-cyan-400 transition-colors"
                        onClick={closeDropdowns}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className="block text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                onClick={closeDropdowns}
              >
                About
              </Link>

              <Link 
                href="/blog" 
                className="block text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                onClick={closeDropdowns}
              >
                Blog
              </Link>

              <Link 
                href="/contact" 
                className="block text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                onClick={closeDropdowns}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  onClick={closeDropdowns}
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;