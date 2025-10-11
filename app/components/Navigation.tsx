'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Cpu, 
  Zap, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAllMenus = () => {
    setIsOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setServicesOpen(false);
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', description: 'Advanced AI analytics solutions' },
    { name: 'AI Automation', href: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Customer Support', href: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', description: 'Data insights and analytics' },
    { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI content creation tools' },
    { name: 'AI Healthcare', href: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'AI security solutions' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'DevOps & CI/CD', href: '/devops', description: 'Automated deployment pipelines' },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Comprehensive security solutions' },
    { name: 'Data Analytics', href: '/data-analytics', description: 'Business intelligence and analytics' },
    { name: 'Mobile Development', href: '/mobile-development', description: 'Native and cross-platform apps' },
    { name: 'Web Development', href: '/web-development', description: 'Modern web applications' },
    { name: 'Database Management', href: '/database-management', description: 'Database design and optimization' },
    { name: 'API Development', href: '/api-development', description: 'RESTful and GraphQL APIs' }
  ];

  const microSaasServices = [
    { name: 'Project Management', href: '/project-management', description: 'Streamlined project tracking' },
    { name: 'Team Collaboration', href: '/team-collaboration', description: 'Enhanced team productivity' },
    { name: 'Customer Support', href: '/customer-support', description: 'Efficient support systems' },
    { name: 'Analytics Dashboard', href: '/analytics-dashboard', description: 'Business insights and metrics' },
    { name: 'Document Management', href: '/document-management', description: 'Organized document storage' },
    { name: 'Task Automation', href: '/task-automation', description: 'Automated workflow processes' }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeAllMenus();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
                >
                  AI Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {aiServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-white/10 py-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
                >
                  IT Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {itServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-white/10 py-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Micro SaaS Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setMicroSaasOpen(!microSaasOpen)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
                >
                  Micro SaaS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {microSaasOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-white/10 py-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              <Link
                href="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                  className="text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                >
                  AI Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                {aiServicesOpen && (
                  <div className="pl-4 space-y-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                  className="text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                >
                  IT Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                {itServicesOpen && (
                  <div className="pl-4 space-y-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SaaS */}
              <div>
                <button
                  onClick={() => setMicroSaasOpen(!microSaasOpen)}
                  className="text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                >
                  Micro SaaS
                  <ChevronDown className="h-4 w-4" />
                </button>
                {microSaasOpen && (
                  <div className="pl-4 space-y-1">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center w-full"
                  onClick={closeAllMenus}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;