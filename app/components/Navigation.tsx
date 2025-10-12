import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, Users, BarChart3, Settings, DollarSign, Target, Rocket, ShieldCheck, Layers, Palette, FileText, Headphones, Camera, Microscope, Leaf, Building2, Car, GraduationCap, Heart, ShoppingCart, TrendingUp, Lock, Mail, Phone, MapPin, Calendar } from 'lucide-react'

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

  const mainServices = [
    {
      name: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      path: '/ai-services',
      description: 'Advanced AI solutions',
      color: 'text-blue-400'
    },
    {
      name: 'IT Services',
      icon: <Cpu className="w-5 h-5" />,
      path: '/it-services',
      description: 'Complete IT infrastructure',
      color: 'text-green-400'
    },
    {
      name: 'Micro SAAS',
      icon: <Smartphone className="w-5 h-5" />,
      path: '/micro-saas-services',
      description: 'Affordable micro applications',
      color: 'text-purple-400'
    },
    {
      name: 'Cloud Services',
      icon: <Cloud className="w-5 h-5" />,
      path: '/cloud-services',
      description: 'Professional cloud solutions',
      color: 'text-orange-400'
    },
    {
      name: '5G Implementation',
      icon: <Wifi className="w-5 h-5" />,
      path: '/5g-implementation',
      description: 'Next-generation connectivity',
      color: 'text-yellow-400'
    },
    {
      name: 'Digital Transformation',
      icon: <Zap className="w-5 h-5" />,
      path: '/digital-transformation',
      description: 'Transform your business',
      color: 'text-pink-400'
    }
  ]

  // AI Services Categories
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Headphones className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', icon: <Mail className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Headphones className="w-4 h-4" /> },
    { name: 'AI Automation Suite', path: '/ai-automation', icon: <Settings className="w-4 h-4" /> },
    { name: 'AI 3D Generation', path: '/ai-3d-generation', icon: <Camera className="w-4 h-4" /> },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', icon: <Microscope className="w-4 h-4" /> },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro', icon: <Leaf className="w-4 h-4" /> },
    { name: 'AI Meeting Assistant', path: '/ai-meeting-assistant', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Project Manager', path: '/ai-project-manager', icon: <Target className="w-4 h-4" /> },
    { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', icon: <Headphones className="w-4 h-4" /> }
  ]

  // IT Services Categories
  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', icon: <Server className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Blockchain Solutions', path: '/blockchain-solutions', icon: <Layers className="w-4 h-4" /> },
    { name: 'Quantum Computing', path: '/quantum-computing-solutions', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Wifi className="w-4 h-4" /> },
    { name: 'System Administration', path: '/system-administration', icon: <Settings className="w-4 h-4" /> }
  ]

  // Micro SAAS Categories
  const microSaasServices = [
    { name: 'AI Task Manager Pro', path: '/ai-task-manager-pro', icon: <Target className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <DollarSign className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Lock className="w-4 h-4" /> },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Health Tracker', path: '/ai-health-tracker', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', icon: <Calendar className="w-4 h-4" /> },
    { name: 'AI Website Builder', path: '/ai-website-builder', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Lead Generator', path: '/ai-lead-generator', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', icon: <ShoppingCart className="w-4 h-4" /> },
    { name: 'AI Design Studio', path: '/ai-design-studio', icon: <Palette className="w-4 h-4" /> }
  ]

  // Industry-Specific Solutions
  const industrySolutions = [
    { name: 'Healthcare AI', path: '/healthcare-ai-solutions', icon: <Heart className="w-4 h-4" /> },
    { name: 'Financial Services', path: '/financial-ai-solutions', icon: <DollarSign className="w-4 h-4" /> },
    { name: 'Education Technology', path: '/education-ai-solutions', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'Manufacturing AI', path: '/manufacturing-ai-solutions', icon: <Building2 className="w-4 h-4" /> },
    { name: 'Automotive AI', path: '/automotive-ai-solutions', icon: <Car className="w-4 h-4" /> },
    { name: 'Retail AI', path: '/retail-ai-solutions', icon: <ShoppingCart className="w-4 h-4" /> }
  ]

  // Contact Information
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }

  return (
    <nav className={`${scrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/30' : 'bg-slate-900/80 backdrop-blur-lg border-b border-white/20'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl group-hover:text-cyan-300 transition-colors duration-300">Zion Tech Group</span>
              <span className="text-xs text-cyan-400/70 font-mono">AI & IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-cyan-400/50 relative group"
            >
              Home
              <div className="absolute inset-0 bg-cyan-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-cyan-400/50 relative group"
            >
              About
              <div className="absolute inset-0 bg-cyan-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:shadow-cyan-400/50 relative group"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                <div className="absolute inset-0 bg-cyan-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl z-50 border border-cyan-400/30">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4">Our Services</h3>
                    <div className="grid grid-cols-3 gap-6">
                      {/* Main Services */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Core Services</h4>
                        {mainServices.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="flex items-start p-3 rounded-lg hover:bg-cyan-400/10 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className={`flex-shrink-0 mr-3 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                              {service.icon}
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">{service.name}</div>
                              <div className="text-sm text-gray-400 group-hover:text-cyan-400/70 transition-colors">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* AI Services */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">AI Services</h4>
                        {aiServices.slice(0, 6).map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10 rounded transition-all duration-300"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="mr-2 text-cyan-400">{service.icon}</div>
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          to="/ai-services"
                          className="block text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2 px-3 py-1"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View All AI Services →
                        </Link>
                      </div>

                      {/* IT Services */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">IT Services</h4>
                        {itServices.slice(0, 6).map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10 rounded transition-all duration-300"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="mr-2 text-green-400">{service.icon}</div>
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          to="/it-services"
                          className="block text-green-400 hover:text-green-300 text-sm font-medium mt-2 px-3 py-1"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View All IT Services →
                        </Link>
                      </div>
                    </div>

                    {/* Industry Solutions */}
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Industry Solutions</h4>
                      <div className="grid grid-cols-6 gap-4">
                        {industrySolutions.map((solution, index) => (
                          <Link
                            key={index}
                            to={solution.path}
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-purple-400/10 transition-all duration-300 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300 mb-2">
                              {solution.icon}
                            </div>
                            <span className="text-xs text-gray-300 group-hover:text-purple-300 transition-colors text-center">
                              {solution.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-cyan-400/50 relative group"
            >
              Contact
              <div className="absolute inset-0 bg-cyan-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-300 p-2 rounded-md transition-all duration-300 hover:bg-cyan-400/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-xl rounded-lg mt-2 border border-cyan-400/30 shadow-2xl">
              <Link 
                to="/" 
                className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-400/10"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-400/10"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">Core Services</div>
                <div className="space-y-1 ml-4">
                  {mainServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10 block px-3 py-2 rounded-md text-sm transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`mr-2 ${service.color}`}>{service.icon}</div>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/contact" 
                className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-400/10"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4 transition-all duration-300"
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
