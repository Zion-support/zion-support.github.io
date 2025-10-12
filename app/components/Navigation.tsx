<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, Users, BarChart3, Settings, Rocket, Calendar, Mail, CreditCard, Search, Headphones, FileText } from 'lucide-react'
=======
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, Users, BarChart3, Settings } from 'lucide-react'
=======
'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, BarChart3, Users, Mail, FileText, MessageSquare, Target, TrendingUp, Sparkles } from 'lucide-react'
import { NeonText, NeonButton } from './NeonEffects'
import { allServices } from '../data/services'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
>>>>>>> origin/main

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

<<<<<<< HEAD
  const aiServices = [
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Smart Scheduler', path: '/ai-smart-scheduler', icon: <Settings className="w-4 h-4" /> },
    { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Computer Vision', path: '/ai-computer-vision', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Document Processing', path: '/ai-document-processing', icon: <FileText className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'All Micro-SaaS', path: '/micro-saas', icon: <Rocket className="w-4 h-4" /> },
    { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: <Calendar className="w-4 h-4" /> },
    { name: 'Content Generator', path: '/micro-saas/content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: <Mail className="w-4 h-4" /> },
    { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: <CreditCard className="w-4 h-4" /> },
    { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: <Search className="w-4 h-4" /> },
    { name: 'Support Bot', path: '/micro-saas/support-bot', icon: <Headphones className="w-4 h-4" /> }
=======
    { name: 'AI Automation', path: '/ai-automation', icon: <Settings className="w-4 h-4" /> }
>>>>>>> origin/main
=======
    { name: 'Micro SAAS Services', path: '/micro-saas-services', icon: <Zap className="w-4 h-4" /> }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-0389
  ]

  const itServices = [
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Cloud Migration Pro', path: '/cloud-migration-pro', icon: <Cloud className="w-4 h-4" /> },
    { name: 'DevOps', path: '/devops', icon: <Server className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Cloud Services', path: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> }
  ]

  const fiveGServices = [
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Wifi className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Wifi className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Server className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'AI E-commerce Optimizer Pro', path: '/ai-ecommerce-optimizer-pro', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Advanced Security Suite', path: '/advanced-security-suite', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Smart Scheduler', path: '/ai-smart-scheduler', icon: <Settings className="w-4 h-4" /> },
    { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Cloud Migration Pro', path: '/cloud-migration-pro', icon: <Cloud className="w-4 h-4" /> }
  ]
=======
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Get services from our data
  const aiServices = allServices.filter(s => s.category === 'ai').slice(0, 8)
  const microSaasServices = allServices.filter(s => s.category === 'micro-saas').slice(0, 6)
  const itServices = allServices.filter(s => s.category === 'it').slice(0, 6)

  const iconMap: { [key: string]: React.ReactNode } = {
    'Brain': <Brain className="w-4 h-4" />,
    'MessageSquare': <MessageSquare className="w-4 h-4" />,
    'BarChart3': <BarChart3 className="w-4 h-4" />,
    'Shield': <Shield className="w-4 h-4" />,
    'FileText': <FileText className="w-4 h-4" />,
    'Users': <Users className="w-4 h-4" />,
    'Mail': <Mail className="w-4 h-4" />,
    'Cpu': <Cpu className="w-4 h-4" />,
    'Cloud': <Cloud className="w-4 h-4" />,
    'Code': <Code className="w-4 h-4" />,
    'Database': <Database className="w-4 h-4" />,
    'Smartphone': <Smartphone className="w-4 h-4" />,
    'Server': <Server className="w-4 h-4" />,
    'Wifi': <Wifi className="w-4 h-4" />
  }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              <NeonText intensity="low">Zion Tech Group</NeonText>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors font-medium group"
              >
                <Sparkles className="w-4 h-4 mr-1" />
                AI Services
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-cyan-500/20 py-4 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                  <div className="px-4 py-2 border-b border-white/10">
                    <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">AI Solutions</h3>
                  </div>
                  {aiServices.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors group"
                      onClick={closeDropdown}
                    >
<<<<<<< HEAD
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
=======
                      {iconMap[service.icon] || <Brain className="w-4 h-4" />}
                      <div className="ml-3 flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.price}</div>
                      </div>
                      <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity rotate-[-90deg]" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('micro-saas')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors font-medium group"
              >
                <Zap className="w-4 h-4 mr-1" />
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              {activeDropdown === 'micro-saas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-purple-500/20 py-4 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                  <div className="px-4 py-2 border-b border-white/10">
                    <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Micro SAAS Tools</h3>
                  </div>
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors group"
                      onClick={closeDropdown}
                    >
                      {iconMap[service.icon] || <Zap className="w-4 h-4" />}
                      <div className="ml-3 flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.price}</div>
                      </div>
                      <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity rotate-[-90deg]" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors font-medium group"
              >
                <Server className="w-4 h-4 mr-1" />
                IT Services
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-blue-500/20 py-4 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <div className="px-4 py-2 border-b border-white/10">
                    <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">IT Solutions</h3>
                  </div>
                  {itServices.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-500/10 transition-colors group"
                      onClick={closeDropdown}
                    >
                      {iconMap[service.icon] || <Server className="w-4 h-4" />}
                      <div className="ml-3 flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.price}</div>
                      </div>
                      <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity rotate-[-90deg]" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

<<<<<<< HEAD
            {/* Micro-SaaS Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('micro-saas')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                Micro-SaaS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'micro-saas' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    >
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

=======
<<<<<<< HEAD
>>>>>>> origin/main
            {/* 5G Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('5g')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                5G Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === '5g' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {fiveGServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    >
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('saas')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    >
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
=======
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Pricing
            </Link>
            
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
              Contact
            </Link>

            <NeonButton 
              variant="primary" 
              size="sm"
              onClick={() => window.location.href = '/contact'}
              className="shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Get Started
            </NeonButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
<<<<<<< HEAD
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors"
=======
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 transition-colors"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
<<<<<<< HEAD
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/20">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
=======
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
              >
                Home
              </Link>
              <Link
                to="/about"
<<<<<<< HEAD
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile AI Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2">AI Services</div>
                <div className="pl-4 space-y-1">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile IT Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2">IT Services</div>
                <div className="pl-4 space-y-1">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Micro-SaaS Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2">Micro-SaaS</div>
                <div className="pl-4 space-y-1">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile 5G Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2">5G Solutions</div>
                <div className="pl-4 space-y-1">
                  {fiveGServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Micro SAAS Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2">Micro SAAS</div>
                <div className="pl-4 space-y-1">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
=======
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold text-center"
                onClick={closeDropdown}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}