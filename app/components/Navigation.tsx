import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Star, Globe, Database, Smartphone, Cpu, Lock, Settings, Target, TrendingUp, Lightbulb, Rocket, Award, CheckCircle, ExternalLink, Eye, Mic, Heart, DollarSign, FileText, Headphones, Network, Package, MessageCircle, PenTool, RefreshCw, Folder } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI solutions', icon: Brain },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content creation', icon: Lightbulb },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence', icon: BarChart },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis', icon: Eye },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition', icon: Mic },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation', icon: Settings },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI', icon: Heart },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI', icon: DollarSign },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis', icon: FileText },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting', icon: TrendingUp },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI', icon: Users },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed AI processing', icon: Cpu }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, GCP', icon: Cloud },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines', icon: Settings },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions', icon: Shield },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps', icon: Globe },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android', icon: Smartphone },
    { name: 'API Development', url: '/api-development', description: 'API solutions', icon: Code },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support', icon: Headphones },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence', icon: BarChart },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions', icon: Code },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization', icon: Database },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network setup', icon: Network },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle', icon: Package }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence platform', icon: BarChart },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support', icon: MessageCircle },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring', icon: Shield },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery', icon: Cloud },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation', icon: PenTool },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'Smart CRM solutions', icon: Users },
    { name: 'Zion Data Sync', url: '/zion-data-sync', description: 'Data synchronization', icon: RefreshCw },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation tools', icon: Target },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management', icon: Folder },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing', icon: Mail },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', description: 'Inventory management', icon: Package },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Automated invoicing', icon: FileText }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeDropdowns}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                onMouseEnter={() => setActiveDropdown('ai')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Brain className="w-5 h-5" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl p-6 z-50">
                  <div className="grid grid-cols-2 gap-4">
                    {aiServices.slice(0, 6).map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 group"
                        onClick={closeDropdowns}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-400 text-xs">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <Link
                      to="/ai-services"
                      className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                      onClick={closeDropdowns}
                    >
                      <span>View All AI Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors duration-300 py-2"
                onMouseEnter={() => setActiveDropdown('it')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Cloud className="w-5 h-5" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl p-6 z-50">
                  <div className="grid grid-cols-2 gap-4">
                    {itServices.slice(0, 6).map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 group"
                        onClick={closeDropdowns}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-400 text-xs">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <Link
                      to="/it-services"
                      className="flex items-center justify-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                      onClick={closeDropdowns}
                    >
                      <span>View All IT Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-pink-400 transition-colors duration-300 py-2"
                onMouseEnter={() => setActiveDropdown('saas')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Code className="w-5 h-5" />
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl p-6 z-50">
                  <div className="grid grid-cols-2 gap-4">
                    {microSaasServices.slice(0, 6).map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 group"
                        onClick={closeDropdowns}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-4 h-4 text-pink-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm group-hover:text-pink-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-400 text-xs">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <Link
                      to="/micro-saas-services"
                      className="flex items-center justify-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 text-sm font-medium"
                      onClick={closeDropdowns}
                    >
                      <span>View All Micro SAAS</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-white hover:text-cyan-400 transition-colors duration-300 py-2"
              onClick={closeDropdowns}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-300 py-2"
              onClick={closeDropdowns}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              onClick={closeDropdowns}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-2xl">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">AI Services</h3>
                {aiServices.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.url}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                    onClick={closeDropdowns}
                  >
                    <service.icon className="w-5 h-5 text-cyan-400" />
                    <div>
                      <h4 className="text-white font-medium text-sm">{service.name}</h4>
                      <p className="text-gray-400 text-xs">{service.description}</p>
                    </div>
                  </Link>
                ))}
                <Link
                  to="/ai-services"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium mt-2"
                  onClick={closeDropdowns}
                >
                  <span>View All AI Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-3">IT Services</h3>
                {itServices.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.url}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                    onClick={closeDropdowns}
                  >
                    <service.icon className="w-5 h-5 text-purple-400" />
                    <div>
                      <h4 className="text-white font-medium text-sm">{service.name}</h4>
                      <p className="text-gray-400 text-xs">{service.description}</p>
                    </div>
                  </Link>
                ))}
                <Link
                  to="/it-services"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium mt-2"
                  onClick={closeDropdowns}
                >
                  <span>View All IT Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="text-pink-400 font-semibold text-sm uppercase tracking-wider mb-3">Micro SAAS</h3>
                {microSaasServices.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.url}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                    onClick={closeDropdowns}
                  >
                    <service.icon className="w-5 h-5 text-pink-400" />
                    <div>
                      <h4 className="text-white font-medium text-sm">{service.name}</h4>
                      <p className="text-gray-400 text-xs">{service.description}</p>
                    </div>
                  </Link>
                ))}
                <Link
                  to="/micro-saas-services"
                  className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 text-sm font-medium mt-2"
                  onClick={closeDropdowns}
                >
                  <span>View All Micro SAAS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-4 border-t border-gray-700/50 space-y-3">
                <Link
                  to="/about"
                  className="block text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                  onClick={closeDropdowns}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                  onClick={closeDropdowns}
                >
                  Contact
                </Link>
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  onClick={closeDropdowns}
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
