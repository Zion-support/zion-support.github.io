'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown, Brain, Cloud, Code, Zap, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
        setAiServicesOpen(false);
        setItServicesOpen(false);
        setMicroSaasOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeAllMenus = () => {
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
    { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Core AI Solutions', price: '$1,500/mo' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'AI-Powered Marketing', price: '$199/mo' },
    { name: 'AI Automation', href: '/ai-workflow-automation', icon: Zap, description: 'Process Automation', price: '$399/mo' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Shield, description: 'Medical AI Solutions', price: '$1,999/mo' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: TrendingUp, description: 'Financial AI', price: '$1,499/mo' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code, description: 'Content Creation', price: '$199/mo' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Data Intelligence', price: '$799/mo' },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce AI', price: '$1,299/mo' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Lock, description: 'Security AI', price: '$2,499/mo' },
    { name: 'AI Mobile Apps', href: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile AI', price: '$1,799/mo' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud, description: 'Cloud & Infrastructure', price: '$2,500' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Development Operations', price: '$1,999/mo' },
    { name: 'Database Services', href: '/database', icon: Database, description: 'Data Management', price: '$1,299/mo' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security Solutions', price: '$2,999' },
    { name: 'Cloud Migration', href: '/it-services/cloud-migration', icon: Cloud, description: 'Cloud Migration', price: '$2,500' },
    { name: 'Security Audit', href: '/it-services/cybersecurity-audit', icon: Lock, description: 'Security Audit', price: '$2,999' },
    { name: 'Networking', href: '/networking', icon: Globe, description: 'Network Solutions', price: '$1,499/mo' }
  ];

  const microSaasServices = [
    { name: 'AI Content Generator', href: '/micro-saas-services/ai-content-generator', icon: Code, description: 'AI Content Creation', price: '$29/mo' },
    { name: 'AI Chatbot Builder', href: '/micro-saas-services/ai-chatbot-builder', icon: Brain, description: 'Build AI Chatbots', price: '$49/mo' },
    { name: 'AI Analytics Dashboard', href: '/micro-saas-services/ai-analytics-dashboard', icon: BarChart, description: 'AI Analytics', price: '$99/mo' },
    { name: 'AI Email Assistant', href: '/micro-saas-services/ai-email-assistant', icon: Mail, description: 'AI Email Writing', price: '$19/mo' },
    { name: 'AI Lead Generation', href: '/micro-saas-services/ai-lead-generation', icon: Target, description: 'AI Lead Gen', price: '$199/mo' },
    { name: 'Business Apps', href: '/business-apps', icon: Users, description: 'Business Applications', price: '$99/mo' },
    { name: 'Productivity Tools', href: '/productivity', icon: Zap, description: 'Productivity Suite', price: '$49/mo' },
    { name: 'Marketing Tools', href: '/marketing-tools', icon: Target, description: 'Marketing Suite', price: '$79/mo' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum Solutions', price: 'Custom' },
    { name: 'Robotics', href: '/robotics', icon: Brain, description: 'Intelligent Robotics', price: '$2,999/mo' },
    { name: 'IoT & Edge', href: '/iot-edge-computing', icon: Globe, description: 'Connected Devices', price: '$1,299/mo' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Shield, description: 'Decentralized Solutions', price: '$999/mo' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data Insights', price: '$1,499/mo' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, description: 'Self-Managing Systems', price: '$2,999/mo' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg neon-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center cyber-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Brain className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-sm rounded-xl shadow-2xl border border-cyan-400/30 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded-lg transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-600 mt-6 pt-4 px-6">
                    <Link
                      href="/micro-saas"
                      className="block w-full text-center cyber-button py-2 px-4 rounded-lg font-medium transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/blog" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <Link 
              href="/contact" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 neon-border">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link 
                href="/micro-saas" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Micro SAAS
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <div className="border-t border-gray-600 pt-2 mt-2">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>kleber@ziontechgroup.com</span>
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
