'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Rocket, Microscope, Layers, Wrench, Monitor, Server, Network, ShieldCheck, Database2, Smartphone2, Globe2, Cpu2, BarChart3, Users2, Zap2, Target2, Code2, Sparkles2 } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
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
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions', icon: Brain },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation', icon: Target },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation', icon: Zap },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions', icon: Shield },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications', icon: TrendingUp },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation', icon: Code },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights', icon: BarChart },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions', icon: Lock },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization', icon: Settings },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications', icon: Smartphone },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms', icon: Globe },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service', icon: Users },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes', icon: Target },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization', icon: BarChart },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation', icon: Target },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing', icon: Database }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support', icon: Cloud },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure', icon: Server },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions', icon: ShieldCheck },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration & setup', icon: Cloud },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'DevOps automation', icon: Settings },
        { name: 'Database Services', path: '/database', description: 'Database management', icon: Database2 },
        { name: 'Network Services', path: '/networking', description: 'Network infrastructure', icon: Network },
        { name: 'Mobile Development', path: '/ai-mobile-app-development', description: 'Mobile applications', icon: Smartphone2 },
        { name: 'System Administration', path: '/system-admin', description: 'System management', icon: Monitor },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning', icon: Users2 },
        { name: 'Managed IT Services', path: '/managed-it', description: '24/7 IT management', icon: Globe2 },
        { name: 'IT Training', path: '/it-training', description: 'Staff development', icon: Users2 }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Cpu,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      hoverColor: 'hover:bg-green-500/20',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '100+ ready-to-use apps', icon: Cpu2 },
        { name: 'Developer Tools', path: '/developer-tools', description: 'AI-powered dev tools', icon: Code2 },
        { name: 'Business Apps', path: '/business-apps', description: 'Productivity applications', icon: Users2 },
        { name: 'Marketing Tools', path: '/marketing-tools', description: 'Marketing automation', icon: Target2 },
        { name: 'Analytics Tools', path: '/analytics-tools', description: 'Business intelligence', icon: BarChart3 },
        { name: 'Communication Tools', path: '/communication-tools', description: 'Team collaboration', icon: Globe2 },
        { name: 'Productivity Tools', path: '/productivity', description: 'Time management & efficiency', icon: Zap2 },
        { name: 'HR & Recruitment', path: '/hr-recruitment-tools', description: 'Human resources solutions', icon: Users2 },
        { name: 'Customer Support', path: '/customer-support-tools', description: 'Support & service tools', icon: Users2 },
        { name: 'Sales & CRM', path: '/sales-crm-tools', description: 'Sales management tools', icon: Target2 },
        { name: 'Project Management', path: '/project-management-tools', description: 'Project planning & tracking', icon: Settings },
        { name: 'Content Creation', path: '/content-creation-tools', description: 'Content & media tools', icon: Code2 }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Rocket,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      hoverColor: 'hover:bg-orange-500/20',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing', icon: Cpu2 },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: Settings },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: Shield },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', icon: Globe2 },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights', icon: BarChart3 },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots', icon: Brain },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: Monitor },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', icon: Globe2 },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization', icon: Zap2 },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping', icon: Microscope },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions', icon: Globe2 },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions', icon: Sparkles2 }
      ]
    }
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
            <span className="text-white font-bold text-xl neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Sparkles className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 py-6 z-50">
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
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <service.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                              <div>
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                          {category.services.length > 6 && (
                            <Link
                              href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                              className="block px-3 py-2 text-sm text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors font-medium"
                              onClick={closeAllMenus}
                            >
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 mt-6 pt-4 px-6">
                    <Link
                      href="/services"
                      className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/case-studies" className="text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
              Case Studies
            </Link>
            <Link href="/blog" className="text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium" onClick={closeAllMenus}>
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              <Rocket className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-sm rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md"
                >
                  <span className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-cyan-400">
                          <category.icon className="w-4 h-4" />
                          <span>{category.title}</span>
                        </div>
                        <div className="ml-6 space-y-1">
                          {category.services.slice(0, 4).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block px-3 py-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/case-studies"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 px-3 py-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
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
