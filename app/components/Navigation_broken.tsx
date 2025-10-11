'use client';
import React from 'react';
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
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Shield, description: 'Medical AI Solutions' },
    { name: 'AI Financial Services', href: '/ai-fintech', icon: TrendingUp, description: 'Financial AI' },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce AI' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Lock, description: 'Security AI' },
    { name: 'AI Mobile Apps', href: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile AI' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target, description: 'Sales AI' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, description: 'Workflow AI' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, description: 'Data Viz AI' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Lead Gen AI' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: Code, description: 'Document AI' },
    { name: 'AI Process Automation', href: '/ai-automation', icon: Zap, description: 'Process Automation' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Brain, description: 'Voice AI Platform' },
    { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: Settings, description: 'Maintenance AI' },
    { name: 'AI Supply Chain', href: '/ai-supply-chain', icon: BarChart, description: 'Supply Chain AI' },
    { name: 'AI Quality Control', href: '/ai-quality-control', icon: Shield, description: 'Quality AI' },
    { name: 'AI Energy Management', href: '/ai-energy-management', icon: Zap, description: 'Energy AI' },
    { name: 'AI Legal Analysis', href: '/ai-legal-analysis', icon: FileText, description: 'Legal AI' },
    { name: 'AI Real Estate', href: '/ai-real-estate', icon: Globe, description: 'Real Estate AI' },
    { name: 'AI HR Assistant', href: '/ai-hr-assistant', icon: Users, description: 'HR AI' },
    { name: 'AI Insurance', href: '/ai-insurance', icon: Shield, description: 'Insurance AI' },
    { name: 'AI Education', href: '/ai-education', icon: Users, description: 'Educational AI' },
    { name: 'AI Transportation', href: '/ai-transportation', icon: Globe, description: 'Transportation AI' },
    { name: 'AI Environmental', href: '/ai-environmental', icon: Globe, description: 'Environmental AI' },
    { name: 'AI Retail', href: '/ai-retail', icon: Globe, description: 'Retail AI' },
    { name: 'AI Sports', href: '/ai-sports', icon: BarChart, description: 'Sports AI' },
    { name: 'AI Mental Health', href: '/ai-mental-health', icon: Users, description: 'Mental Health AI' }
  ];
  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, description: 'Cloud Solutions' },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, description: 'Seamless Migration' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Development Operations' },
    { name: 'Database Services', href: '/database', icon: Database, description: 'Data Management' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security Solutions' },
    { name: 'Security Monitoring', href: '/security-monitoring', icon: Shield, description: '24/7 Security' },
    { name: 'Penetration Testing', href: '/penetration-testing', icon: Shield, description: 'Security Testing' },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud, description: 'Infrastructure Setup' },
    { name: 'Managed IT Services', href: '/managed-it', icon: Settings, description: '24/7 IT Support' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users, description: 'IT Strategy' },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart, description: 'Business Intelligence' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'Mobile Apps' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Web Applications' },
    { name: 'Process Automation', href: '/process-automation', icon: Zap, description: 'Workflow Automation' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Infrastructure Management' },
    { name: 'Network Security', href: '/network-security', icon: Shield, description: 'Network Protection' },
    { name: 'Data Backup', href: '/data-backup', icon: Database, description: 'Backup Solutions' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Settings, description: 'Asset Management' },
    { name: 'Website Hosting', href: '/website-hosting', icon: Globe, description: 'Hosting Services' },
    { name: 'Mobile Device Management', href: '/mobile-device-management', icon: Smartphone, description: 'Device Management' },
    { name: 'Compliance Services', href: '/compliance-services', icon: Shield, description: 'Compliance Solutions' },
    { name: 'IT Performance Monitoring', href: '/it-performance-monitoring', icon: BarChart, description: 'Performance Monitoring' },
    { name: 'IT Training', href: '/it-training', icon: Users, description: 'Training Services' },
    { name: 'IT Project Management', href: '/it-project-management', icon: Settings, description: 'Project Management' },
    { name: 'Vulnerability Assessment', href: '/vulnerability-assessment', icon: Shield, description: 'Security Assessment' },
    { name: 'Hybrid Cloud', href: '/hybrid-cloud', icon: Cloud, description: 'Hybrid Solutions' },
    { name: 'Data Migration', href: '/data-migration', icon: Database, description: 'Migration Services' },
    { name: 'API Development', href: '/api-development', icon: Globe, description: 'API Services' },
    { name: 'IT Governance', href: '/it-governance', icon: Settings, description: 'Governance Solutions' }
  ];
  const microSaasServices = [
    { name: 'Micro SAAS Solutions', href: '/micro-saas', icon: Cpu, description: '50+ AI Tools' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart, description: 'Business Intelligence' },
    { name: 'AI-Powered CRM', href: '/ai-crm', icon: Users, description: 'Customer Management' },
    { name: 'AI Content Studio', href: '/ai-content-studio', icon: Code, description: 'Content Creation' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Users, description: 'Chatbot Platform' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, description: 'Email Marketing' },
    { name: 'AI Mobile App Builder', href: '/ai-mobile-app-builder', icon: Smartphone, description: 'Mobile Development' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search, description: 'SEO Tools' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: BarChart, description: 'Invoice Management' },
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: Code, description: 'Writing Tools' },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: BarChart, description: 'Analytics Platform' },
    { name: 'AI Scheduler', href: '/ai-scheduler', icon: Calendar, description: 'Scheduling Tools' },
    { name: 'Expense Tracker', href: '/expense-tracker', icon: BarChart, description: 'Expense Management' },
    { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckSquare, description: 'Task Management' },
    { name: 'CRM Lite', href: '/crm-lite', icon: Users, description: 'Lightweight CRM' },
    { name: 'Email Optimizer', href: '/email-optimizer', icon: Mail, description: 'Email Optimization' },
    { name: 'Social Media Manager', href: '/social-media-manager', icon: Globe, description: 'Social Media Tools' },
    { name: 'AI Design Studio', href: '/ai-design-studio', icon: Sparkles, description: 'Design Tools' },
    { name: 'Landing Page Builder', href: '/landing-page-builder', icon: Globe, description: 'Page Builder' },
    { name: 'SEO Optimizer', href: '/seo-optimizer', icon: Search, description: 'SEO Tools' },
    { name: 'Ad Campaign Manager', href: '/ad-campaign-manager', icon: BarChart, description: 'Ad Management' },
    { name: 'Code Assistant', href: '/code-assistant', icon: Code, description: 'Development Tools' },
    { name: 'API Builder', href: '/api-builder', icon: Settings, description: 'API Development' },
    { name: 'Bug Tracker Pro', href: '/bug-tracker-pro', icon: Shield, description: 'Bug Tracking' },
    { name: 'Doc Generator', href: '/doc-generator', icon: FileText, description: 'Documentation' },
    { name: 'AI Recruitment Assistant', href: '/ai-recruitment-assistant', icon: Users, description: 'HR & Recruitment' },
    { name: 'Medical Records Manager', href: '/medical-records-manager', icon: Shield, description: 'Healthcare' },
    { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant', icon: BarChart, description: 'Finance & Accounting' },
    { name: 'Property Management AI', href: '/property-management-ai', icon: BarChart, description: 'Real Estate' },
    { name: 'Legal Document Manager', href: '/legal-document-manager', icon: Shield, description: 'Legal & Compliance' },
    { name: 'Online Learning Platform', href: '/online-learning-platform', icon: Users, description: 'Education' },
    { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer', icon: BarChart, description: 'Manufacturing' }
  ];
  const emergingTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum Solutions' },
    { name: 'Robotics & Automation', href: '/robotics', icon: Brain, description: 'Intelligent Robotics' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Globe, description: 'Connected Devices' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Shield, description: 'Decentralized Solutions' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data Insights' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Zap, description: 'Self-Managing Systems' },
    { name: '5G Implementation', href: '/5g-implementation', icon: Globe, description: '5G Solutions' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Brain, description: '3D AI Solutions' },
    { name: 'Holographic Workspace', href: '/ai-holographic-workspace', icon: Brain, description: 'Holographic AI' }
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
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setAiServicesOpen(!aiServicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setItServicesOpen(!itServicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setMicroSaasOpen(!microSaasOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Cpu className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Emerging Technologies Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Zap className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {emergingTech.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
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
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              {/* Mobile AI Services */}
              <div>
                <button
                    onClick={() => setAiServicesOpen(!aiServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aiServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/ai-services"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All AI Services →
                    </Link>
                  </div>
                </div>
              </div>
              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={() => setMicroSaasOpen(!microSaasOpen</div>
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {microSaasServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/micro-saas"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS →
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Services
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
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