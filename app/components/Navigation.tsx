<<<<<<< HEAD
'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
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
  Cpu, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
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
  CheckCircle, 
  ShoppingCart 
} from 'lucide-react'
=======
'use client';;
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-328b

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [aiServicesOpen, setAiServicesOpen] = useState(false)
  const [itServicesOpen, setItServicesOpen] = useState(false)
  const [microSaasOpen, setMicroSaasOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
<<<<<<< HEAD
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
=======
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
>>>>>>> cursor/fix-errors-and-merge-to-main-328b

  const closeAllMenus = useCallback(() => {
    setIsOpen(false)
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
  }, [])

  // Service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
<<<<<<< HEAD
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Process automation' },
    { name: 'AI Chatbots', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
    { name: 'Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image recognition' },
    { name: 'Predictive Analytics', href: '/ai-predictive-analytics', icon: TrendingUp, description: 'Forecasting' },
    { name: 'Voice AI', href: '/ai-voice-assistant', icon: Mic, description: 'Voice technology' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-architecture', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Lock, description: 'Security solutions' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'DevOps', href: '/devops', icon: Settings, description: 'Development operations' },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart, description: 'Data insights' }
  ]
=======
    { name: 'AI Content Generator', href: '/ai-content-generator', icon: FileText, description: 'AI-powered content creation' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Automate business processes' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: MessageCircle, description: 'Intelligent customer service' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Lock, description: 'Security solutions' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-328b

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' }
<<<<<<< HEAD
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
=======
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`py-2 px-3 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
<<<<<<< HEAD
            
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-328b
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {aiServicesOpen && (
<<<<<<< HEAD
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <service.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
=======
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-xl border border-cyan-500/20 shadow-2xl z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {microSaasServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                          onClick={closeAllMenus}
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <service.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-cyan-500/20">
                      <Link
                        to="/ai-services"
                        className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm"
                        onClick={closeAllMenus}
                      >
                        <span>View All AI Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
<<<<<<< HEAD
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {itServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <service.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
=======
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-xl border border-cyan-500/20 shadow-2xl z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                          onClick={closeAllMenus}
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <service.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
                  </div>
                </div>
              )}
            </div>

<<<<<<< HEAD
            {/* Micro SaaS Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                onMouseEnter={() => setMicroSaasOpen(true)}
                onMouseLeave={() => setMicroSaasOpen(false)}
              >
                <Package className="w-4 h-4" />
                <span>Micro SaaS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {microSaasOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                  onMouseEnter={() => setMicroSaasOpen(true)}
                  onMouseLeave={() => setMicroSaasOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <service.icon className="w-5 h-5 text-blue-600 mt-0.5" />
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

            <Link
              href="/about"
              className={`py-2 px-3 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`py-2 px-3 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block py-2 text-gray-900 hover:text-blue-600"
=======
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
                onClick={closeAllMenus}
              >
                Home
              </Link>
<<<<<<< HEAD
              
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                >
                  <span className="font-medium text-gray-900">AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block py-2 text-gray-600 hover:text-blue-600"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                >
                  <span className="font-medium text-gray-900">IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block py-2 text-gray-600 hover:text-blue-600"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block py-2 text-gray-900 hover:text-blue-600"
=======
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                IT Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
<<<<<<< HEAD
                href="/contact"
                className="block py-2 text-gray-900 hover:text-blue-600"
=======
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
                onClick={closeAllMenus}
              >
                Contact
              </Link>
<<<<<<< HEAD
              <Link
                href="/contact"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
            </div>
          </div>
        )}
      </div>
    </nav>
<<<<<<< HEAD
  )
}

export default Navigation
=======
  );
};

export default Navigation;
>>>>>>> cursor/fix-errors-and-merge-to-main-328b
