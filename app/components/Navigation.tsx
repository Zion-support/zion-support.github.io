'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ChevronDown, 
  Menu, 
  X, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart, 
  Users, 
  Settings,
  Code,
  Database,
  Smartphone,
  Globe,
  Lock,
  Target,
  Sparkles,
  Cpu,
  Monitor,
  Server,
  Package,
  Mic,
  Workflow,
  Eye,
  Wifi,
  MessageSquare,
  ShoppingCart,
  Rocket,
  Clock,
  Award,
  Lightbulb,
  Gauge,
  Phone
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAiServices = () => {
    setAiServicesOpen(!aiServicesOpen);
    setItServicesOpen(false);
    setCompanyOpen(false);
  };

  const toggleItServices = () => {
    setItServicesOpen(!itServicesOpen);
    setAiServicesOpen(false);
    setCompanyOpen(false);
  };

  const toggleCompany = () => {
    setCompanyOpen(!companyOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  };

  const closeAllMenus = () => {
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setCompanyOpen(false);
    setIsMobileMenuOpen(false);
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data analytics with AI' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Intelligent process automation' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageSquare, description: 'Build intelligent chatbots' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'AI-powered security solutions' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users, description: 'Automated customer service' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: Eye, description: 'Interactive data dashboards' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'AI-driven marketing campaigns' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Streamline business processes' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Lock, description: 'Comprehensive security' },
    { name: 'Web Development', href: '/web-development', icon: Code, description: 'Modern web applications' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'Native mobile apps' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Database optimization' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Development operations' },
    { name: 'Network Solutions', href: '/network-solutions', icon: Wifi, description: 'Enterprise networking' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Lightbulb, description: 'Strategic IT planning' }
  ];

  const companyPages = [
    { name: 'About Us', href: '/about', icon: Users, description: 'Learn about our team' },
    { name: 'Our Team', href: '/team', icon: Award, description: 'Meet our experts' },
    { name: 'Careers', href: '/careers', icon: Rocket, description: 'Join our team' },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart, description: 'Success stories' },
    { name: 'Blog', href: '/blog', icon: MessageSquare, description: 'Latest insights' },
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
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
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">AI Services</h3>
                    <p className="text-sm text-gray-400">Advanced artificial intelligence solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            {service.description}
                          </p>
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
                <Settings className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">IT Services</h3>
                    <p className="text-sm text-gray-400">Comprehensive IT solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/25">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleCompany}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Users className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${companyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {companyOpen && (
                <div className="absolute top-full left-0 mt-3 w-[400px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">Company</h3>
                    <p className="text-sm text-gray-400">Learn more about us</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {companyPages.map((page) => (
                      <Link
                        key={page.name}
                        to={page.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-600 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25">
                          <page.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                            {page.name}
                          </h4>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            {page.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            
            <Link to="/contact" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2" onClick={closeAllMenus}>
                Home
              </Link>
              
              <div className="space-y-2">
                <button
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {aiServicesOpen && (
                  <div className="ml-6 space-y-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={toggleItServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                >
                  <span className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {itServicesOpen && (
                  <div className="ml-6 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={toggleCompany}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                >
                  <span className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Company</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${companyOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {companyOpen && (
                  <div className="ml-6 space-y-2">
                    {companyPages.map((page) => (
                      <Link
                        key={page.name}
                        to={page.href}
                        className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                        onClick={closeAllMenus}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2" onClick={closeAllMenus}>
                Pricing
              </Link>
              
              <Link to="/contact" className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25" onClick={closeAllMenus}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;