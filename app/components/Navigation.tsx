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
  TrendingUp
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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const aiServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain, desc: 'Machine Learning & NLP' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, desc: 'Marketing Automation' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, desc: 'Process Automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Shield, desc: 'Medical AI Solutions' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: TrendingUp, desc: 'Financial AI' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, desc: 'Data Intelligence' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Lock, desc: 'AI Security' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Code, desc: 'Workflow AI' },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, desc: 'Cloud AI' },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: Globe, desc: 'E-commerce AI' },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone, desc: 'Mobile AI' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Sparkles, desc: 'Content AI' }
  ];

  const itServices = [
    { name: 'IT Services', href: '/it-services', icon: Code, desc: 'IT Solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, desc: 'Security Solutions' },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Database, desc: 'Infrastructure' }
  ];

  const specializedTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, desc: 'Quantum Solutions' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Brain, desc: 'Autonomous AI' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, desc: 'BI Solutions' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Globe, desc: 'Blockchain Tech' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Database, desc: 'IoT Solutions' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', href: '/micro-saas', icon: Zap, desc: '50+ Ready-to-use Apps' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {aiServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        onClick={closeMenu}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium group-hover:text-cyan-300">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.desc}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-300 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {itServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        onClick={closeMenu}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium group-hover:text-cyan-300">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.desc}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-300 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setMicroSaasOpen(true)}
                onMouseLeave={() => setMicroSaasOpen(false)}
              >
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {microSaasOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4"
                  onMouseEnter={() => setMicroSaasOpen(true)}
                  onMouseLeave={() => setMicroSaasOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        onClick={closeMenu}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium group-hover:text-cyan-300">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.desc}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-300 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Case Studies
            </Link>

            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>

            {/* CTA Button */}
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="block text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={closeMenu}
              >
                About
              </Link>

              {/* Mobile AI Services */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-medium py-2">AI Services</div>
                <div className="pl-4 space-y-2">
                  {aiServices.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile IT Services */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-medium py-2">IT Services</div>
                <div className="pl-4 space-y-2">
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/case-studies" 
                className="block text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={closeMenu}
              >
                Case Studies
              </Link>

              <Link 
                to="/contact" 
                className="block text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <a
                href="tel:+13024640950"
                className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium text-center mt-4"
                onClick={closeMenu}
              >
                📞 Call (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;