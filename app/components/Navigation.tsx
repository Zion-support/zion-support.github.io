import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setIsOpen(false);
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
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
        { name: 'AI Video Generation', path: '/ai-video-generation', description: 'AI video creation' },
        { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'AI voice synthesis' },
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI writing tools' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'Smart scheduling' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'Real-time business intelligence' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation', description: 'AI 3D content creation' },
        { name: 'AI Code Generation', path: '/ai-code-generation', description: 'AI-powered coding' },
        { name: 'AI Fashion Design', path: '/ai-fashion-design', description: 'AI fashion solutions' },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI music creation' },
        { name: 'AI CRM', path: '/ai-crm', description: 'AI customer management' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant', description: 'Smart email tools' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud solutions' },
        { name: 'DevOps', path: '/devops', description: 'Development operations' },
        { name: 'Database', path: '/database', description: 'Database management' },
        { name: 'Networking', path: '/networking', description: 'Network infrastructure' },
        { name: 'Compliance', path: '/compliance', description: 'Regulatory compliance' },
        { name: 'Security', path: '/security', description: 'Security solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-green-600',
      services: [
        { name: 'Micro SAAS', path: '/micro-saas', description: '50+ AI-powered tools' },
        { name: 'Business Apps', path: '/business-apps', description: 'Business applications' },
        { name: 'Productivity', path: '/productivity', description: 'Productivity suite' },
        { name: 'Marketing Tools', path: '/marketing-tools', description: 'Marketing suite' },
        { name: 'Developer Tools', path: '/developer-tools', description: 'Development tools' },
        { name: 'Analytics Tools', path: '/analytics-tools', description: 'Analytics suite' },
        { name: 'Task Manager Pro', path: '/task-manager-pro', description: 'Task management' },
        { name: 'Expense Tracker', path: '/expense-tracker', description: 'Expense management' },
        { name: 'Smart Analytics', path: '/smart-analytics', description: 'Business analytics' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Sparkles,
      color: 'text-orange-600',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum solutions' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robotics' },
        { name: 'IoT Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Blockchain Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data insights' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 cyber-scan ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cyber-glow" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center quantum-float">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/30 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                          <h3 className="font-semibold text-white">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 4).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                          {category.services.length > 4 && (
                            <Link
                              href={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                              onClick={closeAllMenus}
                            >
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="btn-cyber"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/30">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-gray-300 font-medium">Services</div>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="ml-4 space-y-1">
                    <div className="text-cyan-400 font-medium text-sm">{category.title}</div>
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        href={service.path}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 ml-2"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              
              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
              </Link>
              
              <Link
                href="/contact"
                className="block btn-cyber text-center mt-4"
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
