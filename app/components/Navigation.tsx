'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Cpu },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const microSAASServices = [
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, category: 'Productivity' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics', icon: PieChart, category: 'Analytics' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, category: 'Marketing' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot, category: 'Customer Service' },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code, category: 'Development' },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, category: 'Content Creation' },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', icon: Mic, category: 'Content Creation' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, category: 'Automation' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: CreditCard, category: 'Sales' },
    { name: 'AI Data Visualization Pro', href: '/ai-data-visualization', icon: BarChart, category: 'Analytics' },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', icon: Target, category: '3D & Graphics' },
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/ai-ml', icon: Brain, category: 'AI Development' },
    { name: 'Natural Language Processing', href: '/ai-nlp', icon: MessageSquare, category: 'AI Development' },
    { name: 'Computer Vision', href: '/ai-vision', icon: Eye, category: 'AI Development' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, category: 'Automation' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, category: 'Data Science' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Target, category: '3D & Graphics' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, category: 'Security' },
    { name: 'AI Quantum Computing', href: '/ai-quantum', icon: Cpu, category: 'Quantum Computing' },
  ];

  const itServices = [
    { name: 'Cloud Migration & Services', href: '/cloud-migration', icon: Cloud, category: 'Cloud Computing' },
    { name: 'Advanced Cybersecurity', href: '/cybersecurity', icon: Shield, category: 'Security' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, category: 'Development' },
    { name: 'Database Services', href: '/database', icon: Database, category: 'Data Management' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Briefcase, category: 'Consulting' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe, category: 'Infrastructure' },
    { name: 'Managed IT Services', href: '/managed-it', icon: Settings, category: 'Managed Services' },
    { name: 'AI-Powered IT Operations', href: '/ai-it-operations', icon: Brain, category: 'AI Operations' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>{item.name}</span>
              </a>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1">
                <Settings className="w-4 h-4" />
                <span>Services</span>
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-400/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Micro SAAS Services */}
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 text-sm flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS Solutions
                      </h3>
                      <div className="space-y-2">
                        {microSAASServices.slice(0, 6).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 px-3 rounded hover:bg-slate-700/50 group"
                          >
                            <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            <div className="flex-1">
                              <div className="text-xs font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500">{service.category}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* AI Services */}
                    <div>
                      <h3 className="text-purple-400 font-semibold mb-3 text-sm flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-2">
                        {aiServices.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 py-2 px-3 rounded hover:bg-slate-700/50 group"
                          >
                            <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            <div className="flex-1">
                              <div className="text-xs font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500">{service.category}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* IT Services */}
                    <div>
                      <h3 className="text-green-400 font-semibold mb-3 text-sm flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <div className="space-y-2">
                        {itServices.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200 py-2 px-3 rounded hover:bg-slate-700/50 group"
                          >
                            <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            <div className="flex-1">
                              <div className="text-xs font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500">{service.category}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-600">
                    <div className="flex justify-between items-center">
                      <a
                        href="/services"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center"
                      >
                        View All Services →
                      </a>
                      <div className="text-xs text-gray-500">
                        <span className="text-green-400 font-semibold">Up to 40% savings</span> on all services
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              
              {/* Mobile Services Section */}
              <div className="pt-4 border-t border-gray-600">
                <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Micro SAAS Solutions
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {microSAASServices.slice(0, 6).map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 px-3 rounded hover:bg-slate-700/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{service.name}</div>
                        <div className="text-xs text-gray-500">{service.category}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <h3 className="text-purple-400 font-semibold mb-3 flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Services
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {aiServices.slice(0, 4).map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 py-2 px-3 rounded hover:bg-slate-700/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{service.name}</div>
                        <div className="text-xs text-gray-500">{service.category}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <h3 className="text-green-400 font-semibold mb-3 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  IT Services
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {itServices.slice(0, 4).map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200 py-2 px-3 rounded hover:bg-slate-700/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{service.name}</div>
                        <div className="text-xs text-gray-500">{service.category}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call +1 302 464 0950</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
