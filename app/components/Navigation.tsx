import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'
=======
import { Menu, X, ChevronDown, Cloud, Code, Smartphone, Brain, Cpu, Wifi, Zap, Database, Shield, Users, BarChart3, Settings } from 'lucide-react'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
=======
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Smartphone, Brain, Cpu, Wifi } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
=======
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Server, Wifi } from 'lucide-react'
>>>>>>> cursor/analyze-improve-and-deploy-application-edcb

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
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

<<<<<<< HEAD
  const services = [
    {
<<<<<<< HEAD
      title: 'AI Services',
      href: '/ai-services',
<<<<<<< HEAD
      icon: Brain,
      description: 'Artificial Intelligence Solutions'
=======
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions',
<<<<<<< HEAD
      submenu: [
        { title: 'AI Content Generator', href: '/ai-content-generator' },
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { title: 'AI Email Assistant', href: '/ai-email-assistant' },
        { title: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { title: 'AI Automation', href: '/ai-automation' }
      ]
>>>>>>> cursor/website-audit-and-update-with-deployment-c78e
=======
      color: 'text-blue-400'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
    },
    {
      title: 'IT Services',
      href: '/it-services',
<<<<<<< HEAD
      icon: Server,
      description: 'Information Technology Solutions'
=======
      icon: <Code className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
<<<<<<< HEAD
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'DevOps & CI/CD', href: '/devops-cicd' },
        { title: 'Data Analytics', href: '/data-analytics' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Web Development', href: '/web-development' }
      ]
=======
      color: 'text-green-400'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
    },
    {
      name: 'Micro SAAS',
      icon: <Smartphone className="w-4 h-4" />,
<<<<<<< HEAD
      description: 'Specialized software solutions',
      color: 'text-purple-400'
=======
      path: '/micro-saas-services',
      description: 'Affordable micro applications'
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
      path: '/5g-implementation',
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
      description: 'Next-generation connectivity'
>>>>>>> cursor/website-audit-and-update-with-deployment-c78e
=======
      description: 'Next-generation connectivity',
      color: 'text-yellow-400'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
    },
    {
<<<<<<< HEAD
      title: 'Cloud Services',
      href: '/cloud-services',
<<<<<<< HEAD
      icon: Cloud,
      description: 'Cloud Computing Solutions'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: Code,
      description: 'Micro Software as a Service'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: Wifi,
      description: '5G Network Implementation'
=======
      icon: <Cloud className="w-4 h-4" />,
      description: 'Professional cloud solutions',
      color: 'text-orange-400'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
<<<<<<< HEAD
      icon: Globe,
      description: 'Transform your digital presence'
=======
      icon: <Zap className="w-4 h-4" />,
      description: 'Transform your business',
      color: 'text-pink-400'
=======
      name: 'Digital Transformation',
      icon: <Zap className="w-4 h-4" />,
      path: '/digital-transformation',
      description: 'Transform your business digitally'
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
    }
  ]

  const additionalServices = [
    {
      title: 'Data Analytics',
      href: '/data-analytics',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'Business intelligence',
      color: 'text-cyan-400'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'Security solutions',
      color: 'text-red-400'
    },
    {
      title: 'Consulting',
      href: '/consulting',
      icon: <Users className="w-4 h-4" />,
      description: 'Expert guidance',
      color: 'text-indigo-400'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
    }
  ]

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Automated Reporting', path: '/ai-automated-reporting', icon: <Globe className="w-4 h-4" /> }
=======
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Automation Suite', path: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI 3D Generation', path: '/ai-3d-generation', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', icon: <Brain className="w-4 h-4" /> }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', icon: <Server className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Blockchain Solutions', path: '/blockchain', icon: <Globe className="w-4 h-4" /> },
    { name: 'Quantum Computing', path: '/quantum-computing-solutions', icon: <Cpu className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Health Tracker', path: '/ai-health-tracker', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro', icon: <Globe className="w-4 h-4" /> }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
  ]

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
=======
    <nav className={`${scrolled ? 'bg-futuristic-dark/95 backdrop-blur-xl border-b border-neon-cyan/30' : 'bg-futuristic-dark/80 backdrop-blur-lg border-b border-white/20'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg flex items-center justify-center shadow-neon-cyan animate-neon-pulse group-hover:scale-110 transition-transform duration-300">
              <span className="text-futuristic-dark font-bold text-lg">Z</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl group-hover:text-neon-cyan transition-colors duration-300">Zion Tech Group</span>
              <span className="text-xs text-neon-cyan/70 font-mono">AI & IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-neon-cyan/50 relative group"
            >
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
              Home
              <div className="absolute inset-0 bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
            <Link to="/about" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
=======
            <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
=======
            <Link
              to="/about"
              className="text-white hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-neon-cyan/50 relative group"
            >
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
              About
              <div className="absolute inset-0 bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
<<<<<<< HEAD
                onClick={() => toggleDropdown('ai')}
<<<<<<< HEAD
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
=======
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
=======
                onClick={toggleServices}
                className="text-white hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:shadow-neon-cyan/50 relative group"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <div className="absolute inset-0 bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
              </button>
<<<<<<< HEAD
              
<<<<<<< HEAD
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {aiServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
<<<<<<< HEAD
=======
              {isServicesOpen && (
<<<<<<< HEAD
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg z-50">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <div key={index}>
                        <Link
                          to={service.href}
                          className="flex items-center px-4 py-3 text-white hover:bg-white/10 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="mr-3">{service.icon}</div>
                          <div className="flex-1">
                            <div className="font-medium">{service.title}</div>
                            <div className="text-sm text-gray-300">{service.description}</div>
                          </div>
                        </Link>
                        {service.submenu && (
                          <div className="ml-8 pl-4 border-l border-white/20">
                            {service.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
=======
                <div className="absolute top-full left-0 mt-2 w-80 bg-futuristic-dark/95 backdrop-blur-xl rounded-xl border border-neon-cyan/30 shadow-hologram z-50 animate-fade-in">
                  <div className="py-3">
                    <div className="px-4 py-2 border-b border-neon-cyan/20">
                      <h3 className="text-sm font-semibold text-neon-cyan uppercase tracking-wider">Core Services</h3>
                    </div>
                    <div className="py-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center px-4 py-3 text-white hover:bg-neon-cyan/10 transition-all duration-300 group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className={`mr-3 ${service.color} group-hover:scale-110 transition-transform duration-300`}>{service.icon}</div>
                          <div>
                            <div className="font-medium group-hover:text-neon-cyan transition-colors duration-300">{service.title}</div>
                            <div className="text-sm text-gray-300 group-hover:text-neon-cyan/70 transition-colors duration-300">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-neon-cyan/20">
                      <h3 className="text-sm font-semibold text-neon-pink uppercase tracking-wider mb-2">Additional Services</h3>
                      <div className="grid grid-cols-1 gap-1">
                        {additionalServices.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="flex items-center px-2 py-1 text-sm text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 rounded transition-all duration-300"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className={`mr-2 ${service.color}`}>{service.icon}</div>
                            {service.title}
=======
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-96 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg z-50 border border-white/20">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 mr-3 text-cyan-600 group-hover:text-purple-600 transition-colors">
                              {service.icon}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">{service.name}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
                          </Link>
                        ))}
                      </div>
                    </div>
<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
                  </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-c78e
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {services.slice(1).map((service, index) => (
                    <Link key={index} to={service.href} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      <service.icon className="w-4 h-4" />
                      <span className="ml-3">{service.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

<<<<<<< HEAD
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Contact
=======
            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('saas')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 font-semibold">All Micro SAAS</Link>
                  {microSaasServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/5g-implementation" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              5G Solutions
            </Link>
            
<<<<<<< HEAD
            <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
=======
            <Link
              to="/contact"
              className="text-white hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-neon-cyan/50 relative group"
            >
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
              Contact
              <div className="absolute inset-0 bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
<<<<<<< HEAD
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
=======
            <Link
              to="/contact"
              className="bg-gradient-to-r from-neon-cyan to-neon-pink text-futuristic-dark px-6 py-2 rounded-lg text-sm font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300 shadow-neon-cyan/50 hover:shadow-neon-pink/50 hover:scale-105 transform"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
=======
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
            >
              Get Started
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              className="text-gray-900 hover:text-purple-600 p-2 rounded-md transition-colors"
=======
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
=======
              className="text-white hover:text-neon-cyan p-2 rounded-md transition-all duration-300 hover:bg-neon-cyan/10"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
=======
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="md:hidden">
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link to="/" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
=======
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
=======
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-futuristic-dark/95 backdrop-blur-xl rounded-lg mt-2 border border-neon-cyan/30 shadow-hologram">
              <Link 
                to="/" 
                className="text-white hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-neon-cyan/10"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-neon-cyan/10"
                onClick={() => setIsOpen(false)}
=======
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={toggleMenu}
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
              >
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
                About
              </Link>
              
              {/* AI Services Mobile */}
              <div className="px-3 py-2">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">AI Services</p>
                {aiServices.map((service, index) => (
                  <Link key={index} to={service.path} className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                    {service.name}
                  </Link>
                ))}
=======
                <div className="text-white font-medium mb-2">Services</div>
=======
                <div className="text-gray-900 font-medium mb-2">Services</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <div key={index}>
                      <Link
                        to={service.href}
                        className="flex items-center text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="mr-2">{service.icon}</div>
                        {service.title}
                      </Link>
                      {service.submenu && (
                        <div className="ml-6 space-y-1">
                          {service.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block text-gray-400 hover:text-white px-3 py-1 rounded-md text-xs"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
=======
                <div className="text-gray-300 font-medium mb-2">AI Services</div>
                <div className="ml-4 space-y-1">
                  <Link to="/ai-services" className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>All AI Services</Link>
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
                  ))}
                </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-c78e
              </div>

              {/* IT Services Mobile */}
              <div className="px-3 py-2">
<<<<<<< HEAD
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">IT Services</p>
                {services.slice(1).map((service, index) => (
                  <Link key={index} to={service.href} className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                    {service.title}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
=======
                <div className="text-gray-300 font-medium mb-2">IT Services</div>
                <div className="ml-4 space-y-1">
                  <Link to="/it-services" className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>All IT Services</Link>
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
=======
                <div className="text-neon-cyan font-semibold mb-2 text-sm uppercase tracking-wider">Core Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
<<<<<<< HEAD
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-neon-cyan hover:bg-neon-cyan/10 block px-3 py-2 rounded-md text-sm transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`mr-2 ${service.color}`}>{service.icon}</div>
                      {service.title}
=======
                      to={service.path}
                      className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-sm transition-colors flex items-center"
                      onClick={toggleMenu}
                    >
                      <span className="mr-2">{service.icon}</span>
                      {service.name}
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
                    </Link>
                  ))}
                </div>
                <div className="text-neon-pink font-semibold mb-2 text-sm uppercase tracking-wider mt-4">Additional Services</div>
                <div className="space-y-1 ml-4">
                  {additionalServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 block px-3 py-1 rounded-md text-sm transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`mr-2 ${service.color}`}>{service.icon}</div>
                      {service.title}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
                    </Link>
                  ))}
                </div>
              </div>

<<<<<<< HEAD
              {/* Micro SAAS Mobile */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Micro SAAS</div>
                <div className="ml-4 space-y-1">
                  <Link to="/micro-saas-services" className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>All Micro SAAS</Link>
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/5g-implementation" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                5G Solutions
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </Link>
              
              <Link 
                to="/contact" 
<<<<<<< HEAD
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
=======
                className="text-white hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-neon-cyan/10"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-futuristic-dark block px-3 py-2 rounded-md text-base font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300 text-center mt-4 shadow-neon-cyan/50"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
                onClick={() => setIsOpen(false)}
=======
              <Link
                to="/contact"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4 transition-all duration-300"
                onClick={toggleMenu}
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
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