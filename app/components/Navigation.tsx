import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Wifi, BarChart3, Users, Settings } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const services = [
    {
      name: 'AI Services',
      icon: <Brain className="w-4 h-4" />,
      path: '/ai-services',
      description: 'AI-powered solutions for your business'
    },
    {
      name: 'IT Services',
      icon: <Cpu className="w-4 h-4" />,
      path: '/it-services',
      description: 'Complete IT infrastructure solutions'
    },
    {
      name: 'Micro SAAS',
      icon: <Smartphone className="w-4 h-4" />,
      path: '/micro-saas-services',
      description: 'Affordable micro applications'
    },
    {
      name: 'Cloud Services',
      icon: <Cloud className="w-4 h-4" />,
      path: '/cloud-services',
      description: 'Professional cloud solutions'
    },
    {
      name: '5G Implementation',
      icon: <Wifi className="w-4 h-4" />,
      path: '/5g-implementation',
      description: 'Next-generation connectivity'
    },
    {
      name: 'Digital Transformation',
      icon: <Zap className="w-4 h-4" />,
      path: '/digital-transformation',
      description: 'Transform your business digitally'
    }
  ];

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Automation Suite', path: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI 3D Generation', path: '/ai-3d-generation', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', icon: <Brain className="w-4 h-4" /> }
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', icon: <Code className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Blockchain Solutions', path: '/blockchain', icon: <Globe className="w-4 h-4" /> },
    { name: 'Quantum Computing', path: '/quantum-computing-solutions', icon: <Cpu className="w-4 h-4" /> }
  ];

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Health Tracker', path: '/ai-health-tracker', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro', icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <nav className={`${scrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/30' : 'bg-slate-900/80 backdrop-blur-lg border-b border-white/20'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl group-hover:text-cyan-300 transition-colors duration-300">Zion Tech Group</span>
              <span className="text-xs text-cyan-400/70 font-mono">AI & IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-cyan-400/50 relative group"
            >
              Home
              <div className="absolute inset-0 bg-cyan-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-cyan-400/50 relative group"
            >
              About
              <div className="absolute inset-0 bg-cyan-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:shadow-cyan-400/50 relative group"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                <div className="absolute inset-0 bg-cyan-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-cyan-400/30 shadow-2xl z-50 animate-fade-in">
                  <div className="py-3">
                    <div className="px-4 py-2 border-b border-cyan-400/20">
                      <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Core Services</h3>
                    </div>
                    <div className="py-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="flex items-center px-4 py-3 text-white hover:bg-cyan-400/10 transition-all duration-300 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="mr-3 text-cyan-400 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                          <div>
                            <div className="font-medium group-hover:text-cyan-300 transition-colors duration-300">{service.name}</div>
                            <div className="text-sm text-gray-300 group-hover:text-cyan-400/70 transition-colors duration-300">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-cyan-400/50 relative group"
            >
              Contact
              <div className="absolute inset-0 bg-cyan-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 p-2 rounded-md transition-all duration-300 hover:bg-cyan-400/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-xl rounded-lg mt-2 border border-cyan-400/30 shadow-2xl">
              <Link 
                to="/" 
                className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-400/10"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-400/10"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">Core Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 block px-3 py-2 rounded-md text-sm transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-2">{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/contact" 
                className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-400/10"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center mt-4 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}