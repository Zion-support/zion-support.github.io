'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aiServicesOpen, setAiServicesOpen] = useState(false)
  const [itServicesOpen, setItServicesOpen] = useState(false)
  const [microSaasOpen, setMicroSaasOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleServices = () => setServicesOpen(!servicesOpen)
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen)
  const toggleItServices = () => setItServicesOpen(!itServicesOpen)
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen)

  const closeAllMenus = () => {
    setServicesOpen(false)
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
    setIsOpen(false)
  }

  // Service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign, description: 'Financial technology' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Management', href: '/ai-api-management', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity', href: '/ai-cybersecurity-suite', icon: Shield, description: 'Comprehensive security' },
    { name: 'Data Management', href: '/ai-data-analytics', icon: Database, description: 'Data processing & storage' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' }
  ]

  const microSaasServices = [
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText, description: 'Automated content creation' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, description: 'Smart email management' },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker', icon: TrendingUp, description: 'Financial tracking' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: FileText, description: 'Automated invoicing' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Prospect identification' },
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: Calendar, description: 'Project coordination' }
  ]

  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-white hover:text-blue-400 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                  <div className="grid grid-cols-3 gap-4 px-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2 text-blue-500" />
                        AI Services
                      </h3>
                      <ul className="space-y-2">
                        {aiServices.slice(0, 4).map((service, index) => (
                          <li key={index}>
                            <Link
                              to={service.href}
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2 text-green-500" />
                        IT Services
                      </h3>
                      <ul className="space-y-2">
                        {itServices.slice(0, 4).map((service, index) => (
                          <li key={index}>
                            <Link
                              to={service.href}
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Micro-SaaS */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Cloud className="w-4 h-4 mr-2 text-purple-500" />
                        Micro-SaaS
                      </h3>
                      <ul className="space-y-2">
                        {microSaasServices.slice(0, 4).map((service, index) => (
                          <li key={index}>
                            <Link
                              to={service.href}
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 mt-4 pt-4 px-6">
                    <Link
                      to="/services"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                      onClick={closeAllMenus}
                    >
                      View All Services
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link to="/case-studies" className="text-white hover:text-blue-400 transition-colors">
              Case Studies
            </Link>
            <Link to="/blog" className="text-white hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/case-studies"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                to="/consultation"
                className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                onClick={closeAllMenus}
              >
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
