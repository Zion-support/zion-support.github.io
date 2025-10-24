'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { 
  ChevronDown, 
  Menu, 
  X, 
  Cloud, 
  BarChart, 
  Zap, 
  Globe, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  MessageCircle, 
  Mic, 
  Eye,
  Shield,
  FileText,
  Users,
  Brain,
  Code,
  Package
} from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [aiServicesOpen, setAiServicesOpen] = useState(false)
  const [itServicesOpen, setItServicesOpen] = useState(false)
  const [microSaasOpen, setMicroSaasOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeAllMenus = useCallback(() => {
    setIsOpen(false)
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
  }, [])

<<<<<<< HEAD
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        closeAllMenus()
      }
    }
=======
  // Service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Process automation' },
    { name: 'AI Chatbots', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
    { name: 'Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image recognition' },
    { name: 'Predictive Analytics', href: '/ai-predictive-analytics', icon: TrendingUp, description: 'Forecasting' },
    { name: 'Voice AI', href: '/ai-voice-assistant', icon: Mic, description: 'Voice technology' }
  ]
>>>>>>> 6ff1a4f2fe1a5fd41dbeb6ed8148ca267e5cb8f1

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, closeAllMenus])

  const services = [
    {
      name: 'AI Services',
      icon: BarChart,
      items: [
        { name: 'AI Analytics & BI', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Chatbots', href: '/ai-chatbot-builder' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'Computer Vision', href: '/computer-vision' }
      ]
    },
    {
      name: 'IT Services',
      icon: Cloud,
      items: [
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps', href: '/devops' },
        { name: 'Data Analytics', href: '/data-analytics' }
      ]
    },
    {
      name: 'Solutions',
      icon: Zap,
      items: [
        { name: 'IoT Solutions', href: '/iot-solutions' },
        { name: 'Blockchain', href: '/blockchain' },
        { name: 'API Development', href: '/api-development' },
        { name: 'Digital Transformation', href: '/digital-transformation' }
      ]
    }
  ]

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
<<<<<<< HEAD
            {services.map((service) => (
              <div key={service.name} className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                  <service.icon className="w-4 h-4" />
                  <span>{service.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {service.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
=======
            <Link 
              href="/" 
              className={`py-2 px-3 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            
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
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
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
>>>>>>> 6ff1a4f2fe1a5fd41dbeb6ed8148ca267e5cb8f1
                      </Link>
                    ))}
                  </div>
                </div>
<<<<<<< HEAD
              </div>
            ))}
            
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
=======
              )}
            </div>

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
>>>>>>> 6ff1a4f2fe1a5fd41dbeb6ed8148ca267e5cb8f1
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
<<<<<<< HEAD
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
>>>>>>> 6ff1a4f2fe1a5fd41dbeb6ed8148ca267e5cb8f1
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
<<<<<<< HEAD
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {services.map((service) => (
                <div key={service.name} className="space-y-1">
                  <div className="flex items-center space-x-2 px-3 py-2 text-gray-700 font-medium">
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    {service.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        onClick={closeAllMenus}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
=======
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block py-2 text-gray-900 hover:text-blue-600"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
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
>>>>>>> 6ff1a4f2fe1a5fd41dbeb6ed8148ca267e5cb8f1
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                href="/contact"
<<<<<<< HEAD
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
=======
                className="block py-2 text-gray-900 hover:text-blue-600"
>>>>>>> 6ff1a4f2fe1a5fd41dbeb6ed8148ca267e5cb8f1
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                href="/contact"
<<<<<<< HEAD
                className="block mx-3 mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
=======
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700"
>>>>>>> 6ff1a4f2fe1a5fd41dbeb6ed8148ca267e5cb8f1
                onClick={closeAllMenus}
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

<<<<<<< HEAD
export default Navigation
=======
export default Navigation
>>>>>>> 6ff1a4f2fe1a5fd41dbeb6ed8148ca267e5cb8f1
