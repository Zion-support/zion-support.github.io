'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  Brain,
  Cloud,
  Shield,
  Globe,
  Database,
  Smartphone,
  Zap,
  Sparkles,
  Star
} from '@heroicons/react/24/outline';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiServices = [
    { name: 'AI Analytics & BI', href: '/ai-analytics', icon: Database },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Chatbots & NLP', href: '/ai-chatbot-builder', icon: Brain },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Sparkles },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Development', href: '/ai-development', icon: Brain },
    { name: 'AI Integration', href: '/ai-integration', icon: Globe },
    { name: 'AI Machine Learning', href: '/ai-machine-learning', icon: Brain },
    { name: 'AI Optimization', href: '/ai-optimization', icon: Star },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: Database },
    { name: 'AI Process Automation', href: '/ai-process-automation', icon: Zap },
    { name: 'AI Quality Assurance', href: '/ai-quality-assurance', icon: Shield },
    { name: 'AI Research & Development', href: '/ai-research-development', icon: Brain },
    { name: 'AI Software Development', href: '/ai-software-development', icon: Cloud },
    { name: 'AI Strategy Consulting', href: '/ai-strategy-consulting', icon: Globe },
    { name: 'AI Testing', href: '/ai-testing', icon: Shield },
    { name: 'AI Training', href: '/ai-training', icon: Brain },
    { name: 'AI Transformation', href: '/ai-transformation', icon: Sparkles },
    { name: 'AI Virtual Assistants', href: '/ai-virtual-assistants', icon: Brain }
  ];

  const itServices = [
    { name: 'Web Development', href: '/web-development', icon: Globe },
    { name: 'Mobile App Development', href: '/mobile-app-development', icon: Smartphone },
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'IT Consulting', href: '/it-consulting', icon: Globe },
    { name: 'System Integration', href: '/system-integration', icon: Globe },
    { name: 'DevOps', href: '/devops', icon: Cloud },
    { name: 'Quality Assurance', href: '/quality-assurance', icon: Shield },
    { name: 'Maintenance & Support', href: '/maintenance-support', icon: Cloud }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const isActive = (href: string) => pathname === href;

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai-services')}
                className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                AI Services
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'ai-services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-white mb-2">AI Services</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {aiServices.slice(0, 10).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors"
                          onClick={closeDropdowns}
                        >
                          <service.icon className="w-4 h-4 mr-3 text-blue-400" />
                          {service.name}
                        </Link>
                      ))}
                      <Link
                        href="/ai-services"
                        className="flex items-center px-3 py-2 text-sm text-blue-400 hover:text-blue-300 font-medium mt-2 pt-2 border-t border-gray-700"
                        onClick={closeDropdowns}
                      >
                        View All AI Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it-services')}
                className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                IT Services
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'it-services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-white mb-2">IT Services</h3>
                    <div className="space-y-1">
                      {itServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors"
                          onClick={closeDropdowns}
                        >
                          <service.icon className="w-4 h-4 mr-3 text-blue-400" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Company
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-white mb-2">Company</h3>
                    <div className="space-y-1">
                      {companyLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors"
                          onClick={closeDropdowns}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-white mb-2">AI Services</div>
                <div className="space-y-1 ml-4">
                  {aiServices.slice(0, 5).map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/ai-services"
                    className="block px-3 py-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    View All AI Services →
                  </Link>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-sm font-medium text-white mb-2">IT Services</div>
                <div className="space-y-1 ml-4">
                  {itServices.slice(0, 5).map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-sm font-medium text-white mb-2">Company</div>
                <div className="space-y-1 ml-4">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="block px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
