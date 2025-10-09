'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      description: 'Advanced AI solutions for enterprise'
    },
    {
      title: 'AI Marketing',
      href: '/ai-marketing',
      description: 'AI-powered marketing automation'
    },
    {
      title: 'AI Automation',
      href: '/ai-automation',
      description: 'Intelligent business process automation'
    },
    {
      title: 'AI Healthcare',
      href: '/ai-healthcare',
      description: 'AI solutions for healthcare industry'
    },
    {
      title: 'AI Fintech',
      href: '/ai-fintech',
      description: 'AI-powered financial services'
    },
    {
      title: 'AI Content Generation',
      href: '/ai-content-generation',
      description: 'AI-powered content creation'
    }
  ];

  const microSaasServices = [
    {
      title: 'Developer Tools',
      href: '/micro-saas#developer-tools',
      description: 'AI Code Review, Test Generation, API Docs'
    },
    {
      title: 'Marketing Tools',
      href: '/micro-saas#marketing-tools',
      description: 'SEO Optimizer, Social Media Manager, Email Marketing'
    },
    {
      title: 'Business Intelligence',
      href: '/micro-saas#business-intelligence',
      description: 'Analytics Dashboard, Lead Scoring, Customer Insights'
    },
    {
      title: 'Finance Tools',
      href: '/micro-saas#finance-tools',
      description: 'Invoice Generator, Financial Planning, Expense Management'
    },
    {
      title: 'Healthcare Solutions',
      href: '/micro-saas#healthcare-solutions',
      description: 'Health Monitoring, Fitness Coach, Mental Health Assistant'
    },
    {
      title: 'Education Platforms',
      href: '/micro-saas#education-platforms',
      description: 'Language Learning, Study Assistant, Skill Assessment'
    }
  ];

  const itServices = [
    {
      title: 'IT Infrastructure',
      href: '/it-infrastructure',
      description: 'Enterprise-grade IT infrastructure'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      description: 'Scalable cloud solutions'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      description: 'Advanced security solutions'
    },
    {
      title: 'DevOps',
      href: '/devops',
      description: 'DevOps automation and CI/CD'
    },
    {
      title: 'Database Services',
      href: '/database',
      description: 'Database design and optimization'
    },
    {
      title: 'Networking',
      href: '/networking',
      description: 'Network design and management'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Middletown, DE 19709</span>
            </div>
          </div>
          <div className="text-cyan-400 font-semibold">
            Zion Tech Group - Advanced AI & IT Solutions
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-slate-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="text-2xl font-bold text-white">
                <span className="text-cyan-400">Zion</span> Tech Group
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
                Home
              </Link>
              
              {/* AI Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
                  onMouseEnter={() => setActiveDropdown('ai-services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>AI Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'ai-services' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-4">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="px-4 py-3 hover:bg-slate-700 transition-colors group"
                          onClick={closeMenu}
                        >
                          <div className="font-medium text-white group-hover:text-cyan-400">
                            {service.title}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
                  onMouseEnter={() => setActiveDropdown('micro-saas')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>Micro SAAS</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'micro-saas' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-4">
                    <div className="grid grid-cols-1 gap-2">
                      {microSaasServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="px-4 py-3 hover:bg-slate-700 transition-colors group"
                          onClick={closeMenu}
                        >
                          <div className="font-medium text-white group-hover:text-cyan-400">
                            {service.title}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
                  onMouseEnter={() => setActiveDropdown('it-services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>IT Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'it-services' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-4">
                    <div className="grid grid-cols-1 gap-2">
                      {itServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="px-4 py-3 hover:bg-slate-700 transition-colors group"
                          onClick={closeMenu}
                        >
                          <div className="font-medium text-white group-hover:text-cyan-400">
                            {service.title}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
                Contact
              </Link>
              <Link href="/blog" className="text-white hover:text-cyan-400 transition-colors">
                Blog
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-700">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={closeMenu}
              >
                Home
              </Link>

              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={() => handleDropdownToggle('mobile-ai-services')}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors py-2"
                >
                  AI Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${
                    activeDropdown === 'mobile-ai-services' ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === 'mobile-ai-services' && (
                  <div className="ml-4 space-y-2 mt-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors py-1"
                        onClick={closeMenu}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={() => handleDropdownToggle('mobile-micro-saas')}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors py-2"
                >
                  Micro SAAS
                  <ChevronDown className={`h-4 w-4 transition-transform ${
                    activeDropdown === 'mobile-micro-saas' ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === 'mobile-micro-saas' && (
                  <div className="ml-4 space-y-2 mt-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors py-1"
                        onClick={closeMenu}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={() => handleDropdownToggle('mobile-it-services')}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors py-2"
                >
                  IT Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${
                    activeDropdown === 'mobile-it-services' ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === 'mobile-it-services' && (
                  <div className="ml-4 space-y-2 mt-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors py-1"
                        onClick={closeMenu}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={closeMenu}
              >
                Blog
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-700">
                <a
                  href="tel:+13024640950"
                  className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                  onClick={closeMenu}
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;