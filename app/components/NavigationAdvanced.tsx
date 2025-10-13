import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Cloud, 
  Shield, 
  Globe, 
  Database, 
  Code, 
  Smartphone,
  Brain,
  Settings,
  BarChart3,
  Users,
  FileText,
  Target,
  Lock,
  Cpu,
  HardDrive,
  Network,
  Monitor,
  Star,
  ArrowRight
} from 'lucide-react';

const NavigationAdvanced = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMicroSAASOpen, setIsMicroSAASOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const toggleSolutions = useCallback(() => {
    setIsSolutionsOpen(!isSolutionsOpen);
  }, [isSolutionsOpen]);

  const toggleMicroSAAS = useCallback(() => {
    setIsMicroSAASOpen(!isMicroSAASOpen);
  }, [isMicroSAASOpen]);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics Pro', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" />, popular: true },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" />, popular: true },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" />, popular: false },
    { name: 'AI Marketing Automation', path: '/ai-marketing', icon: <Target className="w-4 h-4" />, popular: false },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" />, popular: true },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" />, popular: false },
    { name: 'AI Data Processing', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" />, popular: false },
    { name: 'AI Computer Vision', path: '/ai-computer-vision', icon: <Monitor className="w-4 h-4" />, popular: false },
    { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', icon: <Star className="w-4 h-4" />, popular: false },
    { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise', icon: <Smartphone className="w-4 h-4" />, popular: false }
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" />, popular: true },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" />, popular: true },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" />, popular: false },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" />, popular: false },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" />, popular: false },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Network className="w-4 h-4" />, popular: false },
    { name: 'DevOps Solutions', path: '/devops-solutions', icon: <Settings className="w-4 h-4" />, popular: true },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" />, popular: false },
    { name: 'IoT Solutions', path: '/iot-solutions', icon: <Globe className="w-4 h-4" />, popular: false },
    { name: 'Blockchain Development', path: '/blockchain-development', icon: <Lock className="w-4 h-4" />, popular: false },
    { name: 'Machine Learning', path: '/machine-learning', icon: <Brain className="w-4 h-4" />, popular: false },
    { name: 'Quantum Computing', path: '/quantum-computing', icon: <Cpu className="w-4 h-4" />, popular: false }
  ], []);

  const microSAASServices = useMemo(() => [
    { name: 'Zion AI Analytics Pro', path: '/zion-ai-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, popular: true },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, popular: false },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, popular: false },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <FileText className="w-4 h-4" />, popular: true },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: <Users className="w-4 h-4" />, popular: false },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Target className="w-4 h-4" />, popular: false },
    { name: 'Zion Social Scheduler', path: '/zion-social-scheduler', icon: <Globe className="w-4 h-4" />, popular: false },
    { name: 'Zion Workflow Automation', path: '/zion-workflow-automation', icon: <Zap className="w-4 h-4" />, popular: true },
    { name: 'Zion Invoice Genius', path: '/zion-invoice-genius', icon: <FileText className="w-4 h-4" />, popular: false },
    { name: 'Zion CRM Assistant', path: '/zion-crm-assistant', icon: <Users className="w-4 h-4" />, popular: false }
  ], []);

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ], []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md text-white shadow-2xl border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold cyber-text flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg mr-2 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            Zion Tech Group
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-cyan-400 transition-colors duration-300 relative ${
                  isActive(item.path) ? 'text-cyan-400' : 'text-white'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                )}
              </Link>
            ))}
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleSolutions}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300"
              >
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl py-4 z-50 border border-cyan-500/20">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-cyan-400">AI Services</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group"
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        <div className="text-cyan-400 group-hover:text-cyan-300">
                          {service.icon}
                        </div>
                        <span className="flex-1">{service.name}</span>
                        {service.popular && (
                          <Star className="w-3 h-3 text-yellow-400" />
                        )}
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-700">
                    <Link
                      to="/ai-services-comprehensive"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      View All AI Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300"
              >
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl py-4 z-50 border border-cyan-500/20">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-cyan-400">IT Services</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="text-cyan-400 group-hover:text-cyan-300">
                          {service.icon}
                        </div>
                        <span className="flex-1">{service.name}</span>
                        {service.popular && (
                          <Star className="w-3 h-3 text-yellow-400" />
                        )}
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-700">
                    <Link
                      to="/it-services-comprehensive"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      View All IT Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSAAS}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300"
              >
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSAASOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMicroSAASOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl py-4 z-50 border border-cyan-500/20">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-cyan-400">Micro SAAS Services</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {microSAASServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group"
                        onClick={() => setIsMicroSAASOpen(false)}
                      >
                        <div className="text-cyan-400 group-hover:text-cyan-300">
                          {service.icon}
                        </div>
                        <span className="flex-1">{service.name}</span>
                        {service.popular && (
                          <Star className="w-3 h-3 text-yellow-400" />
                        )}
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-700">
                    <Link
                      to="/micro-saas-services"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      onClick={() => setIsMicroSAASOpen(false)}
                    >
                      View All Micro SAAS
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-2 rounded-lg transition-colors duration-300 ${
                    isActive(item.path) 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile AI Services */}
              <div className="px-4 py-2">
                <h3 className="text-sm font-semibold text-cyan-400 mb-2">AI Services</h3>
                <div className="space-y-1">
                  {aiServices.slice(0, 5).map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                      {service.popular && <Star className="w-3 h-3 text-yellow-400" />}
                    </Link>
                  ))}
                  <Link
                    to="/ai-services-comprehensive"
                    className="block px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    View All AI Services →
                  </Link>
                </div>
              </div>

              {/* Mobile IT Services */}
              <div className="px-4 py-2">
                <h3 className="text-sm font-semibold text-cyan-400 mb-2">IT Services</h3>
                <div className="space-y-1">
                  {itServices.slice(0, 5).map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                      {service.popular && <Star className="w-3 h-3 text-yellow-400" />}
                    </Link>
                  ))}
                  <Link
                    to="/it-services-comprehensive"
                    className="block px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    View All IT Services →
                  </Link>
                </div>
              </div>

              {/* Mobile Micro SAAS */}
              <div className="px-4 py-2">
                <h3 className="text-sm font-semibold text-cyan-400 mb-2">Micro SAAS</h3>
                <div className="space-y-1">
                  {microSAASServices.slice(0, 5).map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                      {service.popular && <Star className="w-3 h-3 text-yellow-400" />}
                    </Link>
                  ))}
                  <Link
                    to="/micro-saas-services"
                    className="block px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Micro SAAS →
                  </Link>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-4 pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
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
});

NavigationAdvanced.displayName = 'NavigationAdvanced';

export default NavigationAdvanced;