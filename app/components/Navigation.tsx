'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const microSaasServices = [
    { name: 'AI Content Generator', href: '/ai-content-generator' },
    { name: 'Smart Analytics', href: '/smart-analytics' },
    { name: 'Workflow Automation', href: '/automation-workflow' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'Data Visualization', href: '/data-visualization' },
    { name: 'API Management', href: '/api-management' }
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'Cybersecurity Audit', href: '/cybersecurity-audit' },
    { name: 'DevOps Automation', href: '/devops-automation' },
    { name: 'Database Optimization', href: '/database-optimization' }
  ];

  const aiServices = [
    { name: 'Custom AI Models', href: '/custom-ai-models' },
    { name: 'NLP Processing', href: '/nlp-processing' },
    { name: 'Computer Vision', href: '/computer-vision' },
    { name: 'Predictive Analytics', href: '/predictive-analytics' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white quantum-gradient">
              Zion Tech Group
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Home
            </Link>
            
            {/* Micro SAAS Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('micro-saas')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                Micro SAAS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'micro-saas' && (
                <div className="absolute top-full left-0 mt-2 w-64 cyber-card p-4 space-y-2">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it-services')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                IT Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'it-services' && (
                <div className="absolute top-full left-0 mt-2 w-64 cyber-card p-4 space-y-2">
                  {itServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai-services')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                AI Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'ai-services' && (
                <div className="absolute top-full left-0 mt-2 w-64 cyber-card p-4 space-y-2">
                  {aiServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className="text-white hover:text-cyan-400 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 cyber-card">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              {/* Mobile Micro SAAS Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-semibold mb-2">Micro SAAS Services</div>
                <div className="pl-4 space-y-1">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors text-sm"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile IT Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-semibold mb-2">IT Services</div>
                <div className="pl-4 space-y-1">
                  {itServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors text-sm"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile AI Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-semibold mb-2">AI Services</div>
                <div className="pl-4 space-y-1">
                  {aiServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors text-sm"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

