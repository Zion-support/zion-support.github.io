import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, ArrowRight, Home, Settings, Brain, Cpu, BarChart, MessageSquare, PieChart, Bot, Code, Video, Mic, Zap, TrendingUp, FileText, DollarSign, Eye, Box, Shield, Cloud, Database, Smartphone, Lock, Users, Palette, Music, Heart, Globe, Building } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'AI Solutions', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Cpu },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics', icon: PieChart },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code },
    { name: 'AI Video Generator', href: '/ai-video-generation', icon: Video },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Mic },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingUp },
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText },
    { name: 'AI Financial Advisor', href: '/ai-financial-analyzer', icon: DollarSign },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Shield },
    { name: 'AI Fashion Design', href: '/ai-fashion-design', icon: Palette },
    { name: 'AI Music Composition', href: '/ai-music-composition', icon: Music },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart },
  ];

  const aiServices = [
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Mic },
    { name: 'AI Fraud Detection', href: '/ai-cybersecurity', icon: Shield },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'IT Consulting', href: '/it-consulting', icon: Settings },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings },
    { name: 'Database Services', href: '/database', icon: Database },
    { name: 'Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Blockchain Solutions', href: '/blockchain', icon: Lock },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe },
    { name: 'IT Support', href: '/it-support', icon: Users },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'tel:+13024640950';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
          </Link>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center text-gray-300">
              <Phone className="w-4 h-4 mr-2 text-cyan-400" />
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-4 h-4 mr-2 text-cyan-400" />
              <a href="mailto:info@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                info@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Wilmington, DE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Contact Info */}
              <div className="space-y-3 pb-4 border-b border-gray-700">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href="mailto:info@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    info@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>Wilmington, DE</span>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Service Dropdowns */}
              <div className="pt-4 border-t border-gray-700">
                <div className="space-y-4">
                  {/* AI Services Dropdown */}
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2 flex items-center">
                      <Brain className="w-4 h-4 mr-2" />
                      AI Services
                    </h4>
                    <div className="grid grid-cols-1 gap-1 ml-6">
                      {aiServices.slice(0, 4).map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1 flex items-center"
                          onClick={() => setIsOpen(false)}
                        >
                          <ArrowRight className="w-3 h-3 mr-2" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* IT Services Dropdown */}
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2 flex items-center">
                      <Cpu className="w-4 h-4 mr-2" />
                      IT Services
                    </h4>
                    <div className="grid grid-cols-1 gap-1 ml-6">
                      {itServices.slice(0, 4).map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1 flex items-center"
                          onClick={() => setIsOpen(false)}
                        >
                          <ArrowRight className="w-3 h-3 mr-2" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Micro SaaS Services */}
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Micro SaaS
                    </h4>
                    <div className="grid grid-cols-1 gap-1 ml-6">
                      {microSAASServices.slice(0, 4).map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1 flex items-center"
                          onClick={() => setIsOpen(false)}
                        >
                          <ArrowRight className="w-3 h-3 mr-2" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;