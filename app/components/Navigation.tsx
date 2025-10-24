'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Mail, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  ArrowRight, 
  Target, 
  Smartphone, 
  TrendingUp, 
  Settings, 
  FileText, 
  MessageCircle, 
  DollarSign, 
  Box, 
  Link as LinkIcon, 
  Mic, 
  Workflow, 
  Eye, 
  Wifi
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, []);

  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', icon: BarChart, description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', icon: Workflow, description: 'Process automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield, description: 'AI security' },
    { name: 'Computer Vision', url: '/computer-vision', icon: Eye, description: 'Image recognition' },
    { name: 'Predictive Analytics', url: '/predictive-analytics', icon: TrendingUp, description: 'Forecasting' },
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant', icon: Mic, description: 'Voice technology' }
  ];

  const itServices = [
    { name: 'Web Development', url: '/web-development', icon: Code, description: 'Custom websites' },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'Cloud Migration', url: '/cloud-migration', icon: Cloud, description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Security services' },
    { name: 'DevOps', url: '/devops', icon: Settings, description: 'Development operations' },
    { name: 'Data Analytics', url: '/data-analytics', icon: BarChart, description: 'Data insights' },
    { name: 'IoT Solutions', url: '/iot-solutions', icon: Wifi, description: 'Internet of Things' },
    { name: 'Blockchain', url: '/blockchain', icon: LinkIcon, description: 'Blockchain technology' }
  ];

  const microSaasServices = [
    { name: 'AI Project Management Pro', url: '/ai-project-management-pro', icon: Target, description: 'AI-powered project management' },
    { name: 'AI Financial Analytics Pro', url: '/ai-financial-analytics-pro', icon: DollarSign, description: 'Advanced financial analytics' },
    { name: 'AI Email Automation', url: '/ai-email-automation', icon: Mail, description: 'Automated email marketing' },
    { name: 'AI 3D Model Generator', url: '/ai-3d-model-generator', icon: Box, description: '3D model generation' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {aiServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.url}
                        className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-blue-600" />
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
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {itServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.url}
                        className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-blue-600" />
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

            <Link href="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
              Team
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="space-y-4">
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              {/* Mobile AI Services */}
              <div className="px-4">
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.url}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div className="px-4">
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                >
                  <span className="flex items-center space-x-2">
                    <Code className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.url}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/team"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              <div className="px-4 pt-4">
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={closeAllMenus}
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
