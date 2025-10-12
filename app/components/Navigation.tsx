'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Star, Eye, Heart, Smartphone, Settings, Database } from 'lucide-react';

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

  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', icon: Brain },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: Sparkles },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Heart }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud },
    { name: 'Web Development', url: '/web-development', icon: Code },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', icon: Shield },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings },
    { name: 'API Development', url: '/api-development', icon: Database }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                    AI Solutions
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium">
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Cloud className="w-5 h-5 text-purple-400 mr-2" />
                    IT Solutions
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                      >
                        <service.icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/case-studies" 
              className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
            >
              Case Studies
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-orange-400 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div className="space-y-2">
                <div className="text-gray-300 font-medium py-2 flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Services
                </div>
                <div className="pl-6 space-y-2">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-gray-300 font-medium py-2 flex items-center">
                  <Cloud className="w-4 h-4 mr-2" />
                  IT Services
                </div>
                <div className="pl-6 space-y-2">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-400 hover:text-purple-400 transition-colors duration-200 py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/case-studies" 
                className="block text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
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
};

export default Navigation;
