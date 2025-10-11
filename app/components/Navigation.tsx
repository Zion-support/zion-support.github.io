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
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Code,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Calendar,
  FileText,
  MessageCircle,
  Heart,
  DollarSign,
  Box,
  Monitor,
  Link as LinkIcon,
  Server,
  Package,
  Mic,
  Workflow,
  Eye,
  Wifi,
  MessageSquare,
  ShoppingCart,
  Rocket,
  Award,
  Lightbulb,
  Gauge
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);

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
  };

  const toggleItServices = () => {
    setItServicesOpen(!itServicesOpen);
    setAiServicesOpen(false);
  };

  const aiServices = [
    { name: 'AI Development', href: '/ai-services', icon: Brain, description: 'Custom AI solutions' },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain, description: 'Advanced ML algorithms' },
    { name: 'Natural Language Processing', href: '/nlp', icon: Code, description: 'Text analysis and generation' },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye, description: 'Image recognition and analysis' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Intelligent process automation' },
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Data-driven insights' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: MessageCircle, description: 'Automated customer service' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: TrendingUp, description: 'AI-powered marketing' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign, description: 'Financial AI services' }
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, description: 'AWS, Azure, GCP migration' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Automated deployment' },
    { name: 'Database Management', href: '/database', icon: Database, description: 'Database optimization' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'RESTful and GraphQL APIs' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'Native and cross-platform apps' },
    { name: 'Network Solutions', href: '/network-solutions', icon: Wifi, description: 'Enterprise networking' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users, description: 'Strategic IT planning' },
    { name: 'System Integration', href: '/system-integration', icon: Globe, description: 'Connect and optimize systems' },
    { name: 'IT Support', href: '/it-support', icon: Monitor, description: '24/7 technical support' }
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
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
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
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
                        onClick={() => setAiServicesOpen(false)}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
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
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Settings className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">IT Services</h3>
                    <p className="text-sm text-gray-400">Complete IT infrastructure solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
                        onClick={() => setItServicesOpen(false)}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
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
            
            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Get Quote</span>
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
          <div className="lg:hidden py-4 border-t border-gray-700/50">
            <div className="space-y-4">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">AI Services</div>
                {aiServices.slice(0, 5).map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1 pl-4 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">IT Services</div>
                {itServices.slice(0, 5).map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1 pl-4 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <Link 
                to="/contact" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;