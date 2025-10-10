'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Share2, Mic, Wrench, Truck } from 'lucide-react';

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  // Service data
  const aiServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: Calendar, description: 'Smart project management' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Share2, description: 'Social media automation' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing-automation', icon: Mail, description: 'Email automation' },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Intelligent cloud management' },
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign, description: 'Financial technology' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant-platform', icon: Mic, description: 'Voice AI platform' },
    { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: Wrench, description: 'Equipment monitoring' },
    { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', icon: Truck, description: 'Supply chain optimization' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Management', href: '/ai-api-management', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity', href: '/ai-cybersecurity-suite', icon: Shield, description: 'Comprehensive security' },
    { name: 'Data Management', href: '/ai-data-analytics', icon: Database, description: 'Data processing & storage' },
    { name: 'Network Solutions', href: '/ai-network-solutions', icon: Globe, description: 'Advanced networking' },
    { name: 'Mobile Development', href: '/ai-mobile-development', icon: Smartphone, description: 'Mobile app solutions' },
    { name: 'System Integration', href: '/ai-system-integration', icon: Settings, description: 'Seamless integration' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing' }
  ];

  const microSaasServices = [
    { name: 'Project Management', href: '/micro-saas-project-management', icon: CheckSquare, description: 'Streamlined project tracking' },
    { name: 'Customer Support', href: '/micro-saas-customer-support', icon: MessageCircle, description: 'Efficient support systems' },
    { name: 'Analytics Dashboard', href: '/micro-saas-analytics', icon: BarChart, description: 'Business intelligence' },
    { name: 'Content Management', href: '/micro-saas-cms', icon: FileText, description: 'Content organization' },
    { name: 'Team Collaboration', href: '/micro-saas-collaboration', icon: Users, description: 'Team productivity tools' },
    { name: 'Financial Tracking', href: '/micro-saas-finance', icon: DollarSign, description: 'Financial management' },
    { name: 'Inventory Management', href: '/micro-saas-inventory', icon: Box, description: 'Stock and asset tracking' },
    { name: 'Performance Monitoring', href: '/micro-saas-monitoring', icon: Monitor, description: 'System performance tracking' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl py-2 z-50 border border-white/10">
                  <Link to="/ai-services" className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors">
                    <div className="flex items-center">
                      <Brain className="w-4 h-4 mr-3 text-cyan-400" />
                      AI Services
                    </div>
                  </Link>
                  <Link to="/it-services" className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors">
                    <div className="flex items-center">
                      <Cloud className="w-4 h-4 mr-3 text-blue-400" />
                      IT Services
                    </div>
                  </Link>
                  <Link to="/micro-saas" className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors">
                    <div className="flex items-center">
                      <Box className="w-4 h-4 mr-3 text-green-400" />
                      Micro SaaS
                    </div>
                  </Link>
                  <div className="border-t border-gray-600 my-2"></div>
                  <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Pricing
                  </Link>
                  <Link to="/case-studies" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 flex items-center">
                    <BarChart className="w-4 h-4 mr-3 text-orange-400" />
                    Case Studies
                  </Link>
                </div>
              )}
            </div>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAiServices}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {aiServicesOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl py-2 z-50 border border-white/10">
                  <div className="grid grid-cols-1 gap-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors group"
                      >
                        <div className="flex items-center">
                          <service.icon className="w-4 h-4 mr-3 text-cyan-400 group-hover:text-cyan-300" />
                          <div>
                            <div className="font-medium">{service.name}</div>
                            <div className="text-xs text-gray-400">{service.description}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleItServices}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {itServicesOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl py-2 z-50 border border-white/10">
                  <div className="grid grid-cols-1 gap-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors group"
                      >
                        <div className="flex items-center">
                          <service.icon className="w-4 h-4 mr-3 text-blue-400 group-hover:text-blue-300" />
                          <div>
                            <div className="font-medium">{service.name}</div>
                            <div className="text-xs text-gray-400">{service.description}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 ml-auto" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Micro SaaS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {microSaasOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl py-2 z-50 border border-white/10">
                  <div className="grid grid-cols-1 gap-1">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors group"
                      >
                        <div className="flex items-center">
                          <service.icon className="w-4 h-4 mr-3 text-green-400 group-hover:text-green-300" />
                          <div>
                            <div className="font-medium">{service.name}</div>
                            <div className="text-xs text-gray-400">{service.description}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 ml-auto" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300" onClick={closeAllMenus}>
                      AI Services
                    </Link>
                    <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300" onClick={closeAllMenus}>
                      IT Services
                    </Link>
                    <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300" onClick={closeAllMenus}>
                      Micro SaaS
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
              <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Case Studies
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>

              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-gray-400 mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
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