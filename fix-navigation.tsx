'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const aiServices = [
    { name: 'AI Solutions', href: '/ai-services', icon: Brain, description: 'Core AI Solutions' },
    { name: 'AI Marketing Automation', href: '/ai-marketing', icon: Target, description: 'AI-Powered Marketing' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users, description: 'AI Support Systems' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Data Intelligence' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code, description: 'Content Creation' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Shield, description: 'Medical AI Solutions' }
  ];

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, description: 'Cloud Solutions' },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, description: 'Seamless Migration' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Development Operations' },
    { name: 'Database Services', href: '/database', icon: Database, description: 'Data Management' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security Solutions' },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud, description: 'Infrastructure Setup' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', href: '/micro-saas', icon: Cpu, description: '50+ AI Tools' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart, description: 'Business Intelligence' },
    { name: 'AI-Powered CRM', href: '/ai-crm', icon: Users, description: 'Customer Management' },
    { name: 'Security Monitoring Suite', href: '/security-monitoring-suite', icon: Shield, description: 'Cybersecurity' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors duration-200" onClick={closeAllMenus}>
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-white hover:text-cyan-400 transition-colors duration-200"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-6"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <ul className="space-y-2">
                        {aiServices.slice(0, 4).map((service, index) => (
                          <li key={index}>
                            <Link
                              href={service.href}
                              className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                              onClick={closeAllMenus}
                            >
                              <service.icon className="w-3 h-3 mr-2" />
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Cloud className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <ul className="space-y-2">
                        {itServices.slice(0, 4).map((service, index) => (
                          <li key={index}>
                            <Link
                              href={service.href}
                              className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                              onClick={closeAllMenus}
                            >
                              <service.icon className="w-3 h-3 mr-2" />
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors duration-200" onClick={closeAllMenus}>
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors duration-200" onClick={closeAllMenus}>
              Contact
            </Link>
            
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-center"
                onClick={closeAllMenus}
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