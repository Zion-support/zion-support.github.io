import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Zap, Brain, Shield, Cloud, Database, Cpu, Globe, Lock, BarChart3, Smartphone, Wifi, Code, Settings, Users, FileText, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const microSaasServices = [
    { name: 'AI Content Generator', icon: '📝', link: '/micro-saas/ai-content-generator', price: '$79/mo' },
    { name: 'Social Media Scheduler', icon: '📱', link: '/micro-saas/social-scheduler', price: '$99/mo' },
    { name: 'Email Marketing AI', icon: '📧', link: '/micro-saas/email-ai', price: '$149/mo' },
    { name: 'Analytics Dashboard', icon: '📊', link: '/micro-saas/analytics', price: '$199/mo' },
    { name: 'CRM Automation', icon: '👥', link: '/micro-saas/crm-ai', price: '$299/mo' },
    { name: 'Invoice Generator', icon: '💰', link: '/micro-saas/invoice-ai', price: '$79/mo' },
    { name: 'SEO Optimizer', icon: '🔍', link: '/micro-saas/seo-ai', price: '$199/mo' },
    { name: 'Lead Scoring AI', icon: '🎯', link: '/micro-saas/lead-scoring', price: '$249/mo' }
  ];

  const aiServices = [
    { name: 'AI Data Analytics', icon: '📊', link: '/ai-data-analytics', price: '$1,299/mo' },
    { name: 'AI Cybersecurity', icon: '🔒', link: '/ai-cybersecurity', price: '$2,499/mo' },
    { name: 'AI Workflow Automation', icon: '🤖', link: '/ai-workflow-automation', price: '$399/mo' },
    { name: 'AI Cloud Infrastructure', icon: '☁️', link: '/ai-cloud-infrastructure', price: '$2,999/mo' },
    { name: 'AI E-commerce Solutions', icon: '🛒', link: '/ai-ecommerce-solutions', price: '$1,999/mo' },
    { name: 'AI Mobile App Development', icon: '📱', link: '/ai-mobile-app-development', price: '$4,999/project' },
    { name: 'AI Healthcare', icon: '🏥', link: '/ai-healthcare', price: '$1,999/mo' },
    { name: 'AI Fintech', icon: '💰', link: '/ai-fintech', price: '$1,499/mo' }
  ];

  const itServices = [
    { name: 'Cloud Migration', icon: '☁️', link: '/it-services/cloud-migration', price: '$2,500/project' },
    { name: 'DevOps & CI/CD', icon: '🔄', link: '/it-services/devops', price: '$1,800/mo' },
    { name: 'Database Administration', icon: '🗄️', link: '/it-services/database', price: '$1,200/mo' },
    { name: 'API Development', icon: '🔌', link: '/it-services/api-dev', price: '$1,500/project' },
    { name: 'System Integration', icon: '🔗', link: '/it-services/integration', price: '$2,200/project' },
    { name: 'IT Consulting', icon: '💡', link: '/it-services/consulting', price: '$200/hr' },
    { name: 'Network Security', icon: '🛡️', link: '/it-services/network-security', price: '$1,800/mo' },
    { name: 'Backup & Recovery', icon: '💾', link: '/it-services/backup', price: '$800/mo' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', icon: '⚛️', link: '/quantum-computing', price: 'Custom' },
    { name: 'Autonomous Systems', icon: '🔄', link: '/autonomous-systems', price: '$2,500/mo' },
    { name: 'Blockchain & Web3', icon: '🔗', link: '/blockchain-web3', price: '$8,000/project' },
    { name: 'IoT & Edge Computing', icon: '📱', link: '/iot-edge-computing', price: '$2,500/mo' },
    { name: 'Business Intelligence', icon: '📊', link: '/business-intelligence', price: '$1,800/mo' },
    { name: 'Cybersecurity', icon: '🛡️', link: '/cybersecurity', price: '$2,500/mo' },
    { name: 'Robotics', icon: '🤖', link: '/robotics', price: '$2,500/mo' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl border-b border-cyan-500/30' 
        : 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-cyan-500/20'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center group">
            <span className="text-3xl mr-2 group-hover:animate-pulse">⚡</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center font-medium relative group"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[1200px] bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-cyan-500/30 py-6 z-50 animate-fade-in">
                  <div className="grid grid-cols-4 gap-8 px-6">
                    {/* Micro SAAS Services */}
                    <div>
                      <div className="flex items-center mb-4">
                        <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                        <h3 className="font-bold text-cyan-400 text-lg">Micro SAAS Solutions</h3>
                      </div>
                      <div className="space-y-3">
                        {microSaasServices.map((service, index) => (
                          <Link 
                            key={index}
                            to={service.link}
                            className="block p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <span className="text-2xl mr-3">{service.icon}</span>
                                <div>
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-cyan-400 text-sm font-semibold">
                                    {service.price}
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* AI Services */}
                    <div>
                      <div className="flex items-center mb-4">
                        <Brain className="w-5 h-5 text-purple-400 mr-2" />
                        <h3 className="font-bold text-cyan-400 text-lg">AI Services</h3>
                      </div>
                      <div className="space-y-3">
                        {aiServices.map((service, index) => (
                          <Link 
                            key={index}
                            to={service.link}
                            className="block p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <span className="text-2xl mr-3">{service.icon}</span>
                                <div>
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-cyan-400 text-sm font-semibold">
                                    {service.price}
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* IT Services */}
                    <div>
                      <div className="flex items-center mb-4">
                        <Settings className="w-5 h-5 text-green-400 mr-2" />
                        <h3 className="font-bold text-cyan-400 text-lg">IT Services</h3>
                      </div>
                      <div className="space-y-3">
                        {itServices.map((service, index) => (
                          <Link 
                            key={index}
                            to={service.link}
                            className="block p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <span className="text-2xl mr-3">{service.icon}</span>
                                <div>
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-cyan-400 text-sm font-semibold">
                                    {service.price}
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Specialized Services */}
                    <div>
                      <div className="flex items-center mb-4">
                        <Cpu className="w-5 h-5 text-orange-400 mr-2" />
                        <h3 className="font-bold text-cyan-400 text-lg">Specialized</h3>
                      </div>
                      <div className="space-y-3">
                        {specializedServices.map((service, index) => (
                          <Link 
                            key={index}
                            to={service.link}
                            className="block p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <span className="text-2xl mr-3">{service.icon}</span>
                                <div>
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-cyan-400 text-sm font-semibold">
                                    {service.price}
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Links */}
                  <div className="border-t border-slate-700 mt-6 pt-6 px-6">
                    <div className="flex justify-center space-x-8">
                      <Link to="/services" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                        View All Services
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link to="/case-studies" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                        Case Studies
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link to="/enterprise" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                        Enterprise Solutions
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
              Enterprise
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="cyber-button">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-700 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-lg flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Services
                </div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    IT Services
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                Team
              </Link>
              <Link to="/contact" className="cyber-button text-center mt-4">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
