'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aiServicesOpen, setAiServicesOpen] = useState(false)
  const [itServicesOpen, setItServicesOpen] = useState(false)
  const [microSaasOpen, setMicroSaasOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
  }, [servicesOpen]);

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false)
    setAiServicesOpen(false)
    setMicroSaasOpen(false)
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false)
    setAiServicesOpen(false)
    setItServicesOpen(false)
  }, [microSaasOpen]);

  const aiServices = [
    { name: 'AI Chatbots', href: '/ai-chatbots', icon: MessageSquare, description: 'Intelligent customer support' },
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Predictive data insights' },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye, description: 'Image and video analysis' },
    { name: 'Natural Language Processing', href: '/nlp', icon: Brain, description: 'Text and speech processing' },
    { name: 'Machine Learning', href: '/machine-learning', icon: Cpu, description: 'Custom ML models' },
    { name: 'AI Automation', href: '/ai-automation', icon: Workflow, description: 'Intelligent process automation' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'AWS, Azure, GCP solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Development operations' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Database optimization' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' }
  ]

  const microSaasServices = [
    { name: 'Analytics Dashboard', href: '/analytics-dashboard', icon: BarChart, description: 'Business intelligence' },
    { name: 'CRM System', href: '/crm-system', icon: Users, description: 'Customer relationship management' },
    { name: 'Project Management', href: '/project-management', icon: CheckSquare, description: 'Team collaboration' },
    { name: 'Email Marketing', href: '/email-marketing', icon: Mail, description: 'Automated campaigns' },
    { name: 'Invoice Generator', href: '/invoice-generator', icon: FileText, description: 'Automated billing' },
    { name: 'Social Media Manager', href: '/social-media-manager', icon: MessageCircle, description: 'Content scheduling' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="hidden sm:block">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-gray-700 py-2">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Our Services</h3>
                  </div>
                  <div className="py-2">
                    <Link to="/ai-services" className="flex items-center px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                      <Brain className="w-4 h-4 mr-3 text-cyan-400" />
                      <div>
                        <div className="font-medium">AI Services</div>
                        <div className="text-xs text-gray-400">Intelligent automation</div>
                      </div>
                    </Link>
                    <Link to="/it-services" className="flex items-center px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                      <Cloud className="w-4 h-4 mr-3 text-purple-400" />
                      <div>
                        <div className="font-medium">IT Services</div>
                        <div className="text-xs text-gray-400">Technology solutions</div>
                      </div>
                    </Link>
                    <Link to="/micro-saas" className="flex items-center px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                      <Zap className="w-4 h-4 mr-3 text-yellow-400" />
                      <div>
                        <div className="font-medium">Micro SaaS</div>
                        <div className="text-xs text-gray-400">Ready-to-use tools</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Services</div>
                <div className="space-y-1">
                  <Link
                    to="/ai-services"
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Brain className="w-4 h-4 mr-3 text-cyan-400" />
                    AI Services
                  </Link>
                  <Link
                    to="/it-services"
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Cloud className="w-4 h-4 mr-3 text-purple-400" />
                    IT Services
                  </Link>
                  <Link
                    to="/micro-saas"
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Zap className="w-4 h-4 mr-3 text-yellow-400" />
                    Micro SaaS
                  </Link>
                </div>
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-3 py-2 rounded-md font-semibold transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
