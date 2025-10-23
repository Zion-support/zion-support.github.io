'use client'
import React, { useState } from 'react'
import Link from 'next/link'
<<<<<<< HEAD
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

  const toggleServices = () => {
    setServicesOpen(!servicesOpen)
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
  }

  const toggleAiServices = () => {
    setAiServicesOpen(!aiServicesOpen)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
  }

  const toggleItServices = () => {
    setItServicesOpen(!itServicesOpen)
    setAiServicesOpen(false)
    setMicroSaasOpen(false)
  }

  const toggleMicroSaas = () => {
    setMicroSaasOpen(!microSaasOpen)
    setAiServicesOpen(false)
    setItServicesOpen(false)
  }

  const closeAll = () => {
    setServicesOpen(false)
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
    setIsOpen(false)
  }

  const aiServices = [
    {name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights'},
    {name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows'},
    {name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations'},
    {name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management'},
    {name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection'},
    {name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights'},
    {name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions'},
    {name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign, description: 'Financial technology'},
    {name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation'},
    {name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments'},
    {name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems'},
    {name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI'},
    {name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing'}
  ]

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "AI Services", href: "/ai-services" },
    { name: "IT Services", href: "/it-services" },
    { name: "Micro SaaS", href: "/micro-saas-solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
=======
import { ArrowRight, Brain, Menu, X } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
<<<<<<< HEAD
              <Brain className="h-8 w-8 text-purple-600" />
=======
              <Brain className="h-8 w-8 text-blue-600" />
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAiServices}
                className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
              >
                AI Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="grid grid-cols-2 gap-2 p-4">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAll}
                      >
                        <service.icon className="h-5 w-5 text-purple-600" />
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

            <Link href="/it-services" className="text-gray-700 hover:text-purple-600 transition-colors">
              IT Services
            </Link>
            <Link href="/micro-saas-solutions" className="text-gray-700 hover:text-purple-600 transition-colors">
              Micro SaaS
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
=======
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
            </Link>
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
=======
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={closeAll}
              >
                Home
              </Link>
              <Link
                href="/ai-services"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={closeAll}
              >
                AI Services
              </Link>
              <Link
                href="/it-services"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={closeAll}
              >
                IT Services
              </Link>
              <Link
                href="/micro-saas-solutions"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={closeAll}
              >
                Micro SaaS
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={closeAll}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={closeAll}
              >
                Contact
=======
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation