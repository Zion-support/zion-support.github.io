import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  const aiServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Core AI Solutions' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'AI-Powered Marketing' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Process Automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Shield, description: 'Medical AI Solutions' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: TrendingUp, description: 'Financial AI' },
    { name: 'AI Content Studio', href: '/ai-content-studio', icon: Code, description: 'Content Creation Suite' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Data Intelligence' },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce AI' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Lock, description: 'Security AI' },
    { name: 'AI Mobile Apps', href: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile AI' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'AI-Powered CRM' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Settings, description: 'Voice AI' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud, description: 'Cloud & Infrastructure' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Development Operations' },
    { name: 'Database Services', href: '/database', icon: Database, description: 'Data Management' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security Solutions' },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, description: 'Cloud Migration' },
    { name: 'Network Infrastructure', href: '/networking', icon: Globe, description: 'Network Solutions' },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap, description: 'Performance Tuning' },
    { name: 'System Integration', href: '/system-integration', icon: Code, description: 'System Integration' },
    { name: 'IT Monitoring', href: '/it-monitoring', icon: BarChart, description: '24/7 Monitoring' },
    { name: 'Backup & Recovery', href: '/backup-recovery', icon: Shield, description: 'Data Protection' },
    { name: 'IT Support', href: '/it-support', icon: Users, description: 'Technical Support' },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: TrendingUp, description: 'Digital Transformation' }
  ];

  const microSaasServices = [
    { name: 'AI-Powered CRM', href: '/ai-crm', icon: Users, description: 'Intelligent CRM' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics', icon: BarChart, description: 'Business Intelligence' },
    { name: 'AI Content Studio', href: '/ai-content-studio', icon: Code, description: 'Content Creation' },
    { name: 'AI Invoice Manager', href: '/ai-invoice-manager', icon: TrendingUp, description: 'Financial Management' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, description: 'Email Automation' },
    { name: 'AI Social Media Manager', href: '/ai-social-media', icon: Globe, description: 'Social Media AI' },
    { name: 'AI Lead Scoring', href: '/ai-lead-scoring', icon: Target, description: 'Lead Qualification' },
    { name: 'AI Document AI', href: '/ai-document-ai', icon: Settings, description: 'Document Processing' },
    { name: 'AI Design Assistant', href: '/ai-design-assistant', icon: Code, description: 'Design Tools' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Brain, description: 'No-Code Chatbots' },
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: Zap, description: 'Project Management' },
    { name: 'AI Inventory Manager', href: '/ai-inventory-manager', icon: BarChart, description: 'Inventory Optimization' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum Solutions' },
    { name: 'Robotics', href: '/robotics', icon: Brain, description: 'Intelligent Robotics' },
    { name: 'IoT & Edge', href: '/iot-edge-computing', icon: Globe, description: 'Connected Devices' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Shield, description: 'Decentralized Solutions' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data Insights' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 cyber-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </a>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
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
                      <a
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Cpu className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {microSaasServices.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </a>
            <a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </a>
            <a href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </a>
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
              <a href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                Home
              </a>
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAiServices}
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
                    {aiServices.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={toggleItServices}
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
                      <a
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={toggleMicroSaas}
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
                    {microSaasServices.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                About
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                Contact
              </a>
              <a href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                Blog
              </a>

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