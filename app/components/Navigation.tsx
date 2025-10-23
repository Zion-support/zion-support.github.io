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
    {name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights'},
    {name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows'},
    {name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations'},
    {name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management'},
    {name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection'},
    {name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights'},
    {name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI'},
    {name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing'}
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Management', href: '/ai-api-management', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'DevOps', href: '/devops', icon: Settings, description: 'Development operations' }
  ]

  const microSaasServices = [
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText, description: 'Automated content creation' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, description: 'Smart email management' },
    { name: 'AI Scheduler', href: '/ai-scheduler', icon: Calendar, description: 'Intelligent scheduling' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart, description: 'Business insights' }
  ]

  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum solutions' },
    { name: 'IoT Solutions', href: '/iot-solutions', icon: Smartphone, description: 'Internet of Things' }
  ]

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "AI Services", href: "/ai-services" },
    { name: "IT Services", href: "/it-services" },
    { name: "Micro SaaS", href: "/micro-saas-solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                  onClick={closeAllMenus}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
