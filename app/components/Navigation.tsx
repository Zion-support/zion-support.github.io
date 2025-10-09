'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Zap, Brain, Cloud, Code, BarChart, Users, Globe, Shield, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'AI Marketing', href: '/ai-marketing', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Code },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Shield },
    { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Mobile Apps', href: '/ai-mobile-app-development', icon: Code },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe },
  ];

  const itServices = [
    { name: 'IT Services', href: '/it-services', icon: Cloud },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Code },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud },
    { name: 'Database Services', href: '/database', icon: BarChart },
    { name: 'Networking', href: '/networking', icon: Globe },
    { name: 'DevOps', href: '/devops', icon: Code },
  ];

  const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Brain },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Globe },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Code },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Robotics', href: '/robotics', icon: Code },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/careers' },
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Guides', href: '/guides' },
    { name: 'Support', href: '/support' },
    { name: 'Status', href: '/status' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg border-b border-cyan-400/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* AI Services Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-80 bg-black/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-400/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">AI Services</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {aiServices.slice(0, 6).map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors"
                        >
                          <service.icon className="w-4 h-4 text-cyan-400" />
                          <span className="text-white text-sm">{service.name}</span>
                        </Link>
                      ))}
                      <Link
                        href="/ai-services"
                        className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors mt-2"
                      >
                        View All AI Services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* IT Services Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  IT Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-80 bg-black/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-400/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">IT Services</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {itServices.slice(0, 6).map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors"
                        >
                          <service.icon className="w-4 h-4 text-cyan-400" />
                          <span className="text-white text-sm">{service.name}</span>
                        </Link>
                      ))}
                      <Link
                        href="/it-services"
                        className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors mt-2"
                      >
                        View All IT Services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialized Services Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  Specialized
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-80 bg-black/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-400/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Specialized Services</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {specializedServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors"
                        >
                          <service.icon className="w-4 h-4 text-cyan-400" />
                          <span className="text-white text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  Company
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-black/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-400/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Company</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {companyLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="text-white hover:text-cyan-400 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  Resources
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-black/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-400/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Resources</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {resources.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="text-white hover:text-cyan-400 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="text-white hover:text-cyan-400 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(302) 464-0950</span>
            </a>
            <Link
              href="/contact"
              className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-cyan-400/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile AI Services */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold px-3 py-2">AI Services</div>
                {aiServices.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex items-center space-x-3 px-6 py-2 text-white hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
                <Link
                  href="/ai-services"
                  className="text-cyan-400 px-6 py-2 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  View All AI Services →
                </Link>
              </div>

              {/* Mobile IT Services */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold px-3 py-2">IT Services</div>
                {itServices.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex items-center space-x-3 px-6 py-2 text-white hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
                <Link
                  href="/it-services"
                  className="text-cyan-400 px-6 py-2 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  View All IT Services →
                </Link>
              </div>

              {/* Mobile Specialized Services */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold px-3 py-2">Specialized</div>
                {specializedServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex items-center space-x-3 px-6 py-2 text-white hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Company Links */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold px-3 py-2">Company</div>
                {companyLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block px-6 py-2 text-white hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Resources */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold px-3 py-2">Resources</div>
                {resources.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block px-6 py-2 text-white hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <div className="px-6 py-4 space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                  <Link
                    href="/contact"
                    className="block w-full bg-cyan-400 text-black px-4 py-3 rounded-lg font-semibold text-center hover:bg-cyan-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;