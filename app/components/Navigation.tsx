'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Home, Info, Contact, Briefcase, Rocket, DollarSign } from 'lucide-react';

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

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
      hoverColor: 'hover:bg-purple-900/30',
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
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      hoverColor: 'hover:bg-blue-900/30',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration & setup' },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'DevOps automation' },
        { name: 'Database Management', path: '/database', description: 'Database management' },
        { name: 'Networking', path: '/networking', description: 'Network infrastructure' },
        { name: 'IT Consulting', path: '/consultation', description: 'Strategic IT planning' },
        { name: 'Managed IT Services', path: '/enterprise', description: '24/7 IT management' },
        { name: 'IT Training', path: '/team', description: 'Staff development' },
        { name: 'IT Project Management', path: '/services', description: 'IT project delivery' },
        { name: 'Performance Optimization', path: '/analytics-tools', description: 'System performance tuning' },
        { name: 'Backup & Recovery', path: '/security', description: 'Data protection services' },
        { name: 'Enterprise Solutions', path: '/enterprise', description: 'Large-scale IT solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
      hoverColor: 'hover:bg-green-900/30',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '100+ ready-to-use apps' },
        { name: 'AI Code Review Pro', path: '/micro-saas', description: 'Automated code analysis' },
        { name: 'AI SEO Optimizer', path: '/micro-saas', description: 'SEO analysis & optimization' },
        { name: 'Smart Analytics Dashboard', path: '/micro-saas', description: 'Business intelligence' },
        { name: 'AI Content Generator', path: '/micro-saas', description: 'Content creation suite' },
        { name: 'AI Email Marketing', path: '/micro-saas', description: 'Automated email campaigns' },
        { name: 'AI Customer Support Bot', path: '/micro-saas', description: '24/7 AI support' },
        { name: 'AI Property Valuation', path: '/micro-saas', description: 'Real estate analysis' },
        { name: 'AI Crop Monitoring', path: '/micro-saas', description: 'Smart agriculture' },
        { name: 'AI Route Optimization', path: '/micro-saas', description: 'Logistics optimization' },
        { name: 'AI Energy Management', path: '/micro-saas', description: 'Energy optimization' },
        { name: 'AI Content Moderation', path: '/micro-saas', description: 'Automated moderation' },
        { name: 'AI Security Camera', path: '/micro-saas', description: 'Intelligent surveillance' },
        { name: 'AI Fraud Detection', path: '/micro-saas', description: 'Advanced fraud prevention' },
        { name: 'AI Research Assistant', path: '/micro-saas', description: 'Research automation' },
        { name: 'AI Compliance Monitor', path: '/micro-saas', description: 'Regulatory compliance' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-900/20',
      hoverColor: 'hover:bg-orange-900/30',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Robotics & Automation', path: '/robotics', description: 'Intelligent robotics' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-driving & drones' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Digital Transformation', path: '/services', description: 'Business modernization' },
        { name: 'Innovation Labs', path: '/services', description: 'R&D and prototyping' }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Pricing', path: '/pricing', icon: DollarSign },
    { name: 'Contact', path: '/contact', icon: Contact }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            <div className="flex items-center space-x-6">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Briefcase className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-400/20 p-6"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-4">
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                          <h3 className="font-semibold text-white">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 6).map((service) => (
                            <Link
                              key={service.name}
                              href={service.path}
                              className="block p-2 rounded-lg hover:bg-slate-800/50 transition-colors group"
                            >
                              <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                          {category.services.length > 6 && (
                            <Link
                              href={category.services[0].path}
                              className="block p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-sm text-cyan-400 hover:text-cyan-300"
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

            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">Email</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="cyber-button text-sm px-4 py-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <category.icon className={`w-4 h-4 ${category.color}`} />
                      <h4 className="font-medium text-white">{category.title}</h4>
                    </div>
                    <div className="ml-6 space-y-1">
                      {category.services.slice(0, 4).map((service) => (
                        <Link
                          key={service.name}
                          href={service.path}
                          className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                          onClick={closeAllMenus}
                        >
                          {service.name}
                        </Link>
                      ))}
                      {category.services.length > 4 && (
                        <Link
                          href={category.services[0].path}
                          className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                          onClick={closeAllMenus}
                        >
                          View All →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <div className="text-sm">
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown, DE 19709</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="cyber-button w-full text-center block"
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