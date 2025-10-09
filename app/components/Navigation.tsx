import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  ArrowRight,
  Sparkles,
  Cpu,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Star,
  Settings,
  Layers,
  Bot,
  Microscope,
  Rocket,
  CircuitBoard
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { name: 'AI Solutions', href: '/ai-services', icon: Brain, description: 'Core AI services', price: '$1,500/mo' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'AI-powered marketing', price: '$199/mo' },
    { name: 'AI Automation', href: '/ai-automation', icon: Settings, description: 'Business automation', price: '$399/mo' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Users, description: 'Healthcare AI', price: '$1,999/mo' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: TrendingUp, description: 'Financial AI', price: '$1,499/mo' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Data intelligence', price: '$799/mo' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'AI security', price: '$999/mo' },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud AI', price: '$1,299/mo' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Sparkles, description: 'Content creation', price: '$199/mo' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users, description: 'Support automation', price: '$299/mo' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingUp, description: 'Sales optimization', price: '$499/mo' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, description: 'Process automation', price: '$599/mo' }
  ];

  const itServices = [
    { name: 'IT Solutions', href: '/it-services', icon: Code, description: 'Core IT services', price: '$999/mo' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security solutions', price: '$799/mo' },
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud infrastructure', price: '$1,299/mo' },
    { name: 'Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile apps', price: '$2,499/mo' },
    { name: 'Web Development', href: '/services', icon: Globe, description: 'Web solutions', price: '$1,799/mo' },
    { name: 'DevOps', href: '/services', icon: Settings, description: 'DevOps services', price: '$1,499/mo' },
    { name: 'Database Services', href: '/ai-data-analytics', icon: Database, description: 'Database management', price: '$899/mo' },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Layers, description: 'Infrastructure setup', price: '$1,599/mo' }
  ];

  const microSaasServices = [
    { name: 'AI Code Review', href: '/micro-saas', icon: Code, description: 'Automated code analysis', price: '$79/mo' },
    { name: 'AI SEO Optimizer', href: '/micro-saas', icon: Target, description: 'SEO automation', price: '$99/mo' },
    { name: 'AI Analytics Dashboard', href: '/micro-saas', icon: BarChart, description: 'Business intelligence', price: '$149/mo' },
    { name: 'AI Marketing Tools', href: '/micro-saas', icon: TrendingUp, description: 'Marketing automation', price: '$129/mo' },
    { name: 'AI Document Processing', href: '/micro-saas', icon: Code, description: 'Document intelligence', price: '$89/mo' },
    { name: 'AI Customer Support', href: '/micro-saas', icon: Users, description: 'Support automation', price: '$119/mo' },
    { name: 'AI Project Manager', href: '/micro-saas', icon: Settings, description: 'Project automation', price: '$139/mo' },
    { name: 'AI Social Media Manager', href: '/micro-saas', icon: Globe, description: 'Social media automation', price: '$109/mo' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap, description: 'Quantum solutions', price: 'Custom' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Shield, description: 'Decentralized solutions', price: '$1,999/mo' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Cloud, description: 'Connected devices', price: '$1,399/mo' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Bot, description: 'Self-managing systems', price: '$2,999/mo' },
    { name: 'Robotics', href: '/robotics', icon: CircuitBoard, description: 'Intelligent robots', price: '$3,499/mo' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data insights', price: '$899/mo' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg cyber-glow' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center energy-pulse">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-white' : 'text-white'
            } cyber-text`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 font-medium transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 py-6 z-50 hologram-card">
                  <div className="grid grid-cols-3 gap-8 px-6">
                    {/* AI Services */}
                    <div>
                      <button
                        onClick={() => setAiServicesOpen(!aiServicesOpen)}
                        className="flex items-center space-x-2 w-full text-left text-white hover:text-cyan-400 font-medium mb-4"
                      >
                        <Brain className="w-5 h-5 text-cyan-400" />
                        <span>AI Services</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {aiServicesOpen && (
                        <div className="space-y-2 ml-6">
                          {aiServices.slice(0, 6).map((service, index) => (
                            <Link
                              key={index}
                              to={service.href}
                              className="block p-2 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <service.icon className="w-4 h-4 text-cyan-400" />
                                  <span className="text-sm font-medium text-white">{service.name}</span>
                                </div>
                                <span className="text-xs text-cyan-400">{service.price}</span>
                              </div>
                              <div className="text-xs text-gray-400 mt-1">{service.description}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* IT Services */}
                    <div>
                      <button
                        onClick={() => setItServicesOpen(!itServicesOpen)}
                        className="flex items-center space-x-2 w-full text-left text-white hover:text-cyan-400 font-medium mb-4"
                      >
                        <Code className="w-5 h-5 text-blue-400" />
                        <span>IT Services</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {itServicesOpen && (
                        <div className="space-y-2 ml-6">
                          {itServices.slice(0, 6).map((service, index) => (
                            <Link
                              key={index}
                              to={service.href}
                              className="block p-2 rounded-lg hover:bg-blue-500/10 transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <service.icon className="w-4 h-4 text-blue-400" />
                                  <span className="text-sm font-medium text-white">{service.name}</span>
                                </div>
                                <span className="text-xs text-blue-400">{service.price}</span>
                              </div>
                              <div className="text-xs text-gray-400 mt-1">{service.description}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Micro SAAS & Emerging Tech */}
                    <div>
                      <button
                        onClick={() => setMicroSaasOpen(!microSaasOpen)}
                        className="flex items-center space-x-2 w-full text-left text-white hover:text-cyan-400 font-medium mb-4"
                      >
                        <Star className="w-5 h-5 text-purple-400" />
                        <span>Micro SAAS & More</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {microSaasOpen && (
                        <div className="space-y-2 ml-6">
                          <div className="text-xs text-purple-400 font-semibold mb-2">Micro SAAS Tools</div>
                          {microSaasServices.slice(0, 4).map((service, index) => (
                            <Link
                              key={index}
                              to={service.href}
                              className="block p-2 rounded-lg hover:bg-purple-500/10 transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <service.icon className="w-4 h-4 text-purple-400" />
                                  <span className="text-sm font-medium text-white">{service.name}</span>
                                </div>
                                <span className="text-xs text-purple-400">{service.price}</span>
                              </div>
                              <div className="text-xs text-gray-400 mt-1">{service.description}</div>
                            </Link>
                          ))}
                          <div className="text-xs text-orange-400 font-semibold mb-2 mt-4">Emerging Tech</div>
                          {emergingTech.slice(0, 2).map((tech, index) => (
                            <Link
                              key={index}
                              to={tech.href}
                              className="block p-2 rounded-lg hover:bg-orange-500/10 transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <tech.icon className="w-4 h-4 text-orange-400" />
                                  <span className="text-sm font-medium text-white">{tech.name}</span>
                                </div>
                                <span className="text-xs text-orange-400">{tech.price}</span>
                              </div>
                              <div className="text-xs text-gray-400 mt-1">{tech.description}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="border-t border-cyan-500/20 mt-6 pt-4 px-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/micro-saas"
                        className="flex items-center space-x-2 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Star className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="font-medium text-white">All Micro SAAS</div>
                          <div className="text-sm text-gray-400">50+ AI-powered tools</div>
                        </div>
                      </Link>
                      <Link
                        to="/services"
                        className="flex items-center space-x-2 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Globe className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="font-medium text-white">All Services</div>
                          <div className="text-sm text-gray-400">Complete portfolio</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              About
            </Link>
            <Link
              to="/case-studies"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-cyan-300">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl cyber-button"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4 hologram-card">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-cyan-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                About
              </Link>
              <Link to="/blog" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                Blog
              </Link>
              <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-cyan-300 py-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-cyan-300 py-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-cyan-300 py-2">
                  <MapPin className="w-4 h-4" />
                  <span>Middletown, DE</span>
                </div>
              </div>
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 mt-4 cyber-button"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;