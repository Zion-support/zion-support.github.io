'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Menu, 
  X, 
  ChevronDown, 
  BarChart, 
  Zap, 
  MessageCircle, 
  Users, 
  Shield, 
  Database, 
  Heart, 
  DollarSign, 
  Eye, 
  Mic, 
  Globe, 
  FileText, 
  Workflow,
  Cloud,
  Server,
  Code,
  Settings,
  Phone,
  Mail
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  };

  const toggleAiServices = () => {
    setAiServicesOpen(!aiServicesOpen);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  };

  const toggleItServices = () => {
    setItServicesOpen(!itServicesOpen);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
  };

  const toggleMicroSaas = () => {
    setMicroSaasOpen(!microSaasOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  };

  const closeAllMenus = () => {
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign, description: 'Financial technology' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis' },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition' },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce optimization' },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users, description: 'Human resources AI' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Process optimization' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'DevOps Services', href: '/devops', icon: Settings, description: 'Development operations' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'RESTful API services' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Database optimization' },
    { name: 'Security Solutions', href: '/security-solutions', icon: Shield, description: 'IT security services' },
    { name: 'System Administration', href: '/system-admin', icon: Server, description: 'System management' }
  ];

  const microSaasServices = [
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart, description: 'Business analytics' },
    { name: 'Project Management', href: '/project-management', icon: Workflow, description: 'Project tracking' },
    { name: 'Customer Support', href: '/customer-support', icon: MessageCircle, description: 'Support solutions' },
    { name: 'Inventory Management', href: '/inventory-management', icon: Database, description: 'Stock management' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group" onClick={closeAllMenus}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            
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
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">AI Services</h3>
                    <p className="text-sm text-gray-400">Advanced artificial intelligence solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-400">{service.description}</p>
                        </div>
                      </Link>
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
                <Server className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[400px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">IT Services</h3>
                    <p className="text-sm text-gray-400">Comprehensive technology solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-400">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Settings className="w-4 h-4" />
                <span>Micro SaaS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-3 w-[350px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">Micro SaaS</h3>
                    <p className="text-sm text-gray-400">Specialized software solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-400">{service.description}</p>
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
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/20">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  Get Started
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