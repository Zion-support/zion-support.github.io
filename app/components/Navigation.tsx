'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Cloud, Code, Zap, ArrowRight, Phone, Mail, MapPin, Clock, Globe, Users, Shield, Database, Smartphone, Settings, BarChart3, MessageSquare, Video, FileText, Target, TrendingUp, Sparkles, Rocket, Star, Award, Cpu, Lock, Code2, Layers, PieChart, Activity, Mail as MailIcon, Video as VideoIcon, FileText as FileTextIcon, Smartphone as SmartphoneIcon, Cpu as CpuIcon, Database as DatabaseIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, MessageSquare as MessageSquareIcon, Target as TargetIcon, TrendingUp as TrendingUpIcon, Sparkles as SparklesIcon, Rocket as RocketIcon, Star as StarIcon, Award as AwardIcon, Lock as LockIcon, Code2 as Code2Icon, Layers as LayersIcon, PieChart as PieChartIcon, Activity as ActivityIcon } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.navigation-container')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeMenu]);

  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', icon: MessageSquare, description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart3, description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Target, description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', icon: Smartphone, description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', icon: Zap, description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', icon: Shield, description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', icon: TrendingUp, description: 'Fintech AI' },
    { name: 'AI Document Processing', url: '/ai-document-processing', icon: FileText, description: 'Document analysis' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', icon: PieChart, description: 'Business forecasting' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', icon: Users, description: 'Human resources AI' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', icon: Cpu, description: 'Distributed AI processing' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud, description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings, description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Shield, description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', icon: Code, description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone, description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', icon: Code2, description: 'API solutions' },
    { name: 'IT Support', url: '/it-support', icon: Users, description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', icon: BarChart3, description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', icon: Code, description: 'Tailored solutions' },
    { name: 'Database Management', url: '/database-management', icon: Database, description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', icon: Globe, description: 'Network setup' },
    { name: 'IT Asset Management', url: '/it-asset-management', icon: Layers, description: 'Asset lifecycle' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', icon: BarChart3, description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', icon: MessageSquare, description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' }
  ];

  const emergingTechServices = [
    { name: '5G Implementation', url: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', icon: Target, description: '3D content creation' },
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Cpu, description: 'Quantum solutions' },
    { name: 'Blockchain Solutions', url: '/blockchain-solutions', icon: Lock, description: 'Distributed systems' },
    { name: 'IoT Integration', url: '/iot-integration', icon: Smartphone, description: 'Internet of Things' },
    { name: 'AR/VR Development', url: '/ar-vr-development', icon: Video, description: 'Immersive experiences' },
    { name: 'Edge AI Computing', url: '/edge-ai-computing', icon: Cpu, description: 'Distributed AI' },
    { name: 'Robotic Process Automation', url: '/robotic-process-automation', icon: Settings, description: 'RPA solutions' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
  ];

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Demo', url: '/demo' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <nav className="relative bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors neon-text-enhanced">Zion Tech Group</span>
              <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('ai')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-xl z-50">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                      <Brain className="w-5 h-5 mr-2" />
                      AI Services
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {aiServices.slice(0, 6).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="text-white font-medium">{service.name}</div>
                            <div className="text-gray-400 text-sm">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to="/ai-services"
                        className="flex items-center justify-center p-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors text-cyan-400 font-medium"
                      >
                        View All AI Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('it')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-xl z-50">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center">
                      <Cloud className="w-5 h-5 mr-2" />
                      IT Services
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {itServices.slice(0, 6).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                        >
                          <service.icon className="w-5 h-5 text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="text-white font-medium">{service.name}</div>
                            <div className="text-gray-400 text-sm">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to="/it-services"
                        className="flex items-center justify-center p-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors text-purple-400 font-medium"
                      >
                        View All IT Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('saas')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-xl z-50">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      Micro SAAS
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {microSaasServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                        >
                          <service.icon className="w-5 h-5 text-green-400 mr-3 group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="text-white font-medium">{service.name}</div>
                            <div className="text-gray-400 text-sm">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Tech Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('emerging')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Emerging Tech
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'emerging' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-xl z-50">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-orange-400 mb-4 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Emerging Technologies
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {emergingTechServices.slice(0, 6).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                        >
                          <service.icon className="w-5 h-5 text-orange-400 mr-3 group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="text-white font-medium">{service.name}</div>
                            <div className="text-gray-400 text-sm">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to="/emerging-tech"
                        className="flex items-center justify-center p-3 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 transition-colors text-orange-400 font-medium"
                      >
                        View All Emerging Tech
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm border-t border-cyan-500/20">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Home
              </Link>
              
              {/* Mobile AI Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-semibold mb-2 flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Services
                </div>
                <div className="ml-4 space-y-1">
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block px-3 py-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/ai-services"
                    className="block px-3 py-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    View All AI Services →
                  </Link>
                </div>
              </div>

              {/* Mobile IT Services */}
              <div className="px-3 py-2">
                <div className="text-purple-400 font-semibold mb-2 flex items-center">
                  <Cloud className="w-4 h-4 mr-2" />
                  IT Services
                </div>
                <div className="ml-4 space-y-1">
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block px-3 py-1 text-sm text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/it-services"
                    className="block px-3 py-1 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    View All IT Services →
                  </Link>
                </div>
              </div>

              {/* Mobile Micro SAAS */}
              <div className="px-3 py-2">
                <div className="text-green-400 font-semibold mb-2 flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  Micro SAAS
                </div>
                <div className="ml-4 space-y-1">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block px-3 py-1 text-sm text-gray-300 hover:text-green-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Emerging Tech */}
              <div className="px-3 py-2">
                <div className="text-orange-400 font-semibold mb-2 flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Emerging Tech
                </div>
                <div className="ml-4 space-y-1">
                  {emergingTechServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block px-3 py-1 text-sm text-gray-300 hover:text-orange-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/emerging-tech"
                    className="block px-3 py-1 text-sm text-orange-400 hover:text-orange-300 transition-colors font-medium"
                  >
                    View All Emerging Tech →
                  </Link>
                </div>
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="px-3 py-2">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
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
