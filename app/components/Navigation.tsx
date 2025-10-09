import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Briefcase } from 'lucide-react';

const Navigation: React.FC = memo(() => {
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
        setServicesOpen(false);
        setAiServicesOpen(false);
        setItServicesOpen(false);
        setMicroSaasOpen(false);
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

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', icon: Brain, description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', icon: Target, description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', icon: Settings, description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Users, description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', icon: BarChart, description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText, description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield, description: 'AI security solutions' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', icon: Code, description: 'Comprehensive IT solutions' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Database, description: 'Enterprise infrastructure' },
    { name: 'IT Support', url: '/it-support', icon: Settings, description: 'Comprehensive IT support' },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud, description: 'Cloud migration & setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Database Management', url: '/database-management', icon: Database, description: 'Database management' },
    { name: 'IT Consulting', url: '/it-consulting', icon: Briefcase, description: 'Strategic IT consulting' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Cpu, description: 'Next-gen computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Settings, description: 'Self-managing systems' },
    { name: 'Blockchain Web3', url: '/blockchain-web3', icon: Globe, description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: BarChart, description: 'Data-driven insights' },
    { name: 'IoT Edge Computing', url: '/iot-edge-computing', icon: Smartphone, description: 'Connected devices' },
    { name: 'Robotics', url: '/robotics', icon: Settings, description: 'Intelligent robots' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', icon: Globe, description: 'Immersive experiences' }
  ];

  const companyPages = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone_number',
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {aiServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
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
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {itServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Tech Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setMicroSaasOpen(true)}
                onMouseLeave={() => setMicroSaasOpen(false)}
              >
                Emerging Tech
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {microSaasOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setMicroSaasOpen(true)}
                  onMouseLeave={() => setMicroSaasOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {emergingTech.map((tech, index) => (
                      <Link
                        key={index}
                        to={tech.url}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <tech.icon className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">{tech.name}</div>
                          <div className="text-sm text-gray-500">{tech.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/micro-saas" className="text-white hover:text-cyan-400 transition-colors">
              Micro SaaS
            </Link>

            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              Pricing
            </Link>

            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(302) 464-0950</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <div className="text-cyan-400 font-medium text-sm mb-2">AI Services</div>
                    {aiServices.slice(0, 4).map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors py-1 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="text-cyan-400 font-medium text-sm mb-2 mt-4">IT Services</div>
                    {itServices.slice(0, 4).map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors py-1 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/micro-saas"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Micro SaaS
              </Link>

              <Link
                to="/pricing"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>

              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(302) 464-0950</span>
                </a>
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 mt-4"
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

Navigation.displayName = 'Navigation';

export default Navigation;