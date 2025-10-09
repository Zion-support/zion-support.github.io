'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Home, Settings, Brain, Cpu, BarChart, MessageSquare, PieChart, Mail as MailIcon, Bot, Code, Video, Mic, Zap, TrendingUp, FileText, DollarSign, Eye, Cube, Shield, Search, Target, Briefcase, Cloud, Database, Globe, Smartphone, Wrench, Lock, ArrowRight, Menu, X, ChevronDown, Star, CheckCircle, Users, Award, Sparkles } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Cpu },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart, popular: true, price: '$99/mo' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare, popular: true, price: '$79/mo' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics', icon: PieChart, popular: true, price: '$149/mo' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: MailIcon, popular: true, price: '$99/mo' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot, popular: true, price: '$149/mo' },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code, popular: false, price: '$89/mo' },
    { name: 'AI Video Generator', href: '/ai-video-generation', icon: Video, popular: true, price: '$199/mo' },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Mic, popular: false, price: '$129/mo' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, popular: true, price: '$179/mo' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingUp, popular: true, price: '$199/mo' },
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText, popular: true, price: '$79/mo' },
    { name: 'AI Financial Advisor', href: '/ai-financial-advisor', icon: DollarSign, popular: false, price: '$299/mo' },
  ];

  const aiServices = [
    { name: 'Machine Learning', href: '/ai-ml', icon: Brain, price: '$1,500/mo' },
    { name: 'Natural Language Processing', href: '/ai-nlp', icon: MessageSquare, price: '$1,200/mo' },
    { name: 'Computer Vision', href: '/ai-vision', icon: Eye, price: '$1,800/mo' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, price: '$1,400/mo' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, price: '$1,100/mo' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Cube, price: '$1,600/mo' },
    { name: 'AI Voice Synthesis', href: '/ai-voice-synthesis', icon: Mic, price: '$1,300/mo' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Shield, price: '$1,900/mo' },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, price: '$1,299/mo' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Briefcase, price: '$1,000/mo' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, price: '$1,599/mo' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, price: '$1,199/mo' },
    { name: 'Database Services', href: '/database', icon: Database, price: '$899/mo' },
    { name: 'Mobile App Development', href: '/mobile-development', icon: Smartphone, price: '$1,500/mo' },
    { name: 'Web Development', href: '/web-development', icon: Code, price: '$1,200/mo' },
    { name: 'Blockchain Solutions', href: '/blockchain', icon: Lock, price: '$2,000/mo' },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone_number'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-300 group-hover:scale-105"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </a>
                </div>
              ))}

              {/* Micro SAAS Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => handleDropdownToggle('microsaas')}
                  className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Micro SAAS
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    activeDropdown === 'microsaas' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'microsaas' && (
                  <div className="absolute left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/20 overflow-hidden">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Micro SAAS Services
                      </h3>
                      <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                        {microSAASServices.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                          >
                            <div className="flex items-center">
                              <service.icon className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                              <div>
                                <div className="text-white font-medium text-sm">{service.name}</div>
                                {service.popular && (
                                  <div className="text-xs text-cyan-400 flex items-center">
                                    <Star className="w-3 h-3 mr-1" />
                                    Popular
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* AI Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => handleDropdownToggle('ai')}
                  className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-purple-400 transition-colors duration-300"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  AI Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    activeDropdown === 'ai' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'ai' && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-purple-500/20 overflow-hidden">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center">
                        <Brain className="w-5 h-5 mr-2" />
                        AI Services
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {aiServices.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-300 group"
                          >
                            <div className="flex items-center">
                              <service.icon className="w-5 h-5 text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
                              <span className="text-white font-medium text-sm">{service.name}</span>
                            </div>
                            <div className="text-purple-400 font-semibold text-sm">{service.price}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => handleDropdownToggle('it')}
                  className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <Cpu className="w-4 h-4 mr-2" />
                  IT Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    activeDropdown === 'it' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'it' && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-500/20 overflow-hidden">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center">
                        <Cpu className="w-5 h-5 mr-2" />
                        IT Services
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {itServices.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 group"
                          >
                            <div className="flex items-center">
                              <service.icon className="w-5 h-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                              <span className="text-white font-medium text-sm">{service.name}</span>
                            </div>
                            <div className="text-blue-400 font-semibold text-sm">{service.price}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">+1 (302) 464-0950</span>
            </a>
            <a
              href="/contact"
              className="flex items-center px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              <span className="font-semibold">Get Started</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-400 hover:bg-white/10 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg rounded-2xl mt-2 border border-cyan-500/20">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Micro SAAS Services */}
              <div className="pt-4 border-t border-cyan-500/20">
                <h3 className="px-3 text-sm font-semibold text-cyan-400 mb-2">Micro SAAS Services</h3>
                <div className="space-y-1">
                  {microSAASServices.slice(0, 6).map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center justify-between px-3 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors duration-300"
                    >
                      <div className="flex items-center">
                        <service.icon className="w-4 h-4 text-cyan-400 mr-2" />
                        {service.name}
                      </div>
                      <span className="text-cyan-400 text-xs">{service.price}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="px-3 py-2">
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="flex items-center text-cyan-400 font-semibold mb-2"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center text-purple-400 font-semibold mb-2"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    kleber@ziontechgroup.com
                  </a>
                  <div className="flex items-start text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
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