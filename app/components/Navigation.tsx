'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    setSidebarOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
        { name: 'AI Legal Assistant', path: '/ai-legal-assistant', description: 'AI-powered legal solutions' },
        { name: 'AI Real Estate', path: '/ai-real-estate', description: 'Real estate AI solutions' },
        { name: 'AI Supply Chain', path: '/ai-supply-chain', description: 'Supply chain optimization' },
        { name: 'AI DevOps', path: '/ai-devops', description: 'AI-powered DevOps automation' },
        { name: 'AI Personal Assistant', path: '/ai-personal-assistant', description: 'Personal productivity AI' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT solutions' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration and management' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'DevOps', path: '/devops', description: 'Development operations' },
        { name: 'Database Services', path: '/database', description: 'Database management' },
        { name: 'Networking', path: '/networking', description: 'Network solutions' },
        { name: 'Managed IT', path: '/managed-it', description: 'Managed IT services' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'Micro SAAS', path: '/micro-saas', description: 'Small business solutions' },
        { name: 'AI Code Review Assistant', path: '/ai-code-review', description: 'Automated code analysis' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'SEO optimization tools' },
        { name: 'Smart Analytics Dashboard', path: '/smart-analytics', description: 'Business intelligence' },
        { name: 'AI Legal Assistant', path: '/ai-legal-assistant', description: 'Legal AI solutions' },
        { name: 'AI Real Estate Tools', path: '/ai-real-estate', description: 'Real estate AI' },
        { name: 'AI Supply Chain Tools', path: '/ai-supply-chain', description: 'Supply chain AI' },
        { name: 'AI DevOps Tools', path: '/ai-devops', description: 'DevOps AI automation' },
        { name: 'AI Personal Assistant', path: '/ai-personal-assistant', description: 'Personal productivity' }
      ]
    }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center text-white hover:text-cyan-400 transition-colors"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                    <div className="grid grid-cols-1 gap-4 px-4">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center space-x-2 px-3 py-2">
                            <category.icon className={`w-5 h-5 ${category.color}`} />
                            <span className="font-semibold text-gray-900">{category.title}</span>
                          </div>
                          <div className="grid grid-cols-1 gap-1 ml-7">
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.path}
                                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                                onClick={closeAllMenus}
                              >
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500">{service.description}</div>
                              </Link>
                            ))}
                            {category.services.length > 6 && (
                              <Link
                                href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                                className="block px-3 py-2 text-sm text-cyan-600 hover:text-cyan-700 font-medium"
                                onClick={closeAllMenus}
                              >
                                View All {category.title} →
                              </Link>
                            )}
                          </div>
                        </div>
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
              <Link href="/pricing" className="text-white hover:text-cyan-400 transition-colors">
                Pricing
              </Link>
              
              {/* CTA Button */}
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                📞 (302) 464-0950
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-white font-semibold">AI Services</div>
                <div className="ml-4 space-y-2">
                  <Link href="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI Services
                  </Link>
                  <Link href="/ai-marketing" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI Marketing
                  </Link>
                  <Link href="/ai-legal-assistant" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI Legal Assistant
                  </Link>
                  <Link href="/ai-real-estate" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI Real Estate
                  </Link>
                  <Link href="/ai-supply-chain" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI Supply Chain
                  </Link>
                  <Link href="/ai-devops" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI DevOps
                  </Link>
                  <Link href="/ai-personal-assistant" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI Personal Assistant
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-white font-semibold">IT Services</div>
                <div className="ml-4 space-y-2">
                  <Link href="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    IT Services
                  </Link>
                  <Link href="/cloud-services" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    Cloud Services
                  </Link>
                  <Link href="/cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    Cybersecurity
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-white font-semibold">Micro SAAS</div>
                <div className="ml-4 space-y-2">
                  <Link href="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    Micro SAAS
                  </Link>
                </div>
              </div>

              <Link
                href="/about"
                className="block text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                href="/pricing"
                className="block text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              
              <a
                href="tel:+13024640950"
                className="block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                onClick={closeAllMenus}
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navigation;