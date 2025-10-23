'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
        <div className=&quot;flex items-center justify-between h-16&quot;></div>
          {/* Logo */}
          <div className=&quot;flex-shrink-0&quot;></div>
            <Link to=&quot;/&quot; className=&quot;flex items-center space-x-2&quot;>
              <div className=&quot;w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center&quot;></div>
                <Brain className=&quot;w-5 h-5 text-white&quot; />
              </div>
              <span className=&quot;text-xl font-bold text-white&quot;>Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className=&quot;hidden lg:flex items-center space-x-8&quot;></div>
            <Link to=&quot;/&quot; className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;>
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className=&quot;relative group&quot;></div>
              <button
                onClick={toggleAiServices}
                className=&quot;flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;
              >
                <Brain className=&quot;w-4 h-4&quot; />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className=&quot;absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card&quot;></div>
                  <div className=&quot;grid grid-cols-1 gap-2&quot;></div>
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className=&quot;flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group&quot;
                        onClick={closeAllMenus}
                      >
                        <service.icon className=&quot;w-5 h-5 text-cyan-400 group-hover:text-cyan-300&quot; />
                        <div></div>
                          <div className=&quot;text-white font-medium&quot;>{service.name}</div>
                          <div className=&quot;text-xs text-gray-400&quot;>{service.description}</div>
                        </div>
                        <ArrowRight className=&quot;w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto&quot; />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className=&quot;relative group&quot;></div>
              <button
                onClick={toggleItServices}
                className=&quot;flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;
              >
                <Cloud className=&quot;w-4 h-4&quot; />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className=&quot;absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card&quot;></div>
                  <div className=&quot;grid grid-cols-1 gap-2&quot;></div>
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className=&quot;flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group&quot;
                        onClick={closeAllMenus}
                      >
                        <service.icon className=&quot;w-5 h-5 text-cyan-400 group-hover:text-cyan-300&quot; />
                        <div></div>
                          <div className=&quot;text-white font-medium&quot;>{service.name}</div>
                          <div className=&quot;text-xs text-gray-400&quot;>{service.description}</div>
                        </div>
                        <ArrowRight className=&quot;w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto&quot; />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className=&quot;relative group&quot;></div>
              <button
                onClick={toggleMicroSaas}
                className=&quot;flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;
              >
                <Cpu className=&quot;w-4 h-4&quot; />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className=&quot;absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card&quot;></div>
                  <div className=&quot;grid grid-cols-1 gap-2&quot;></div>
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className=&quot;flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group&quot;
                        onClick={closeAllMenus}
                      >
                        <service.icon className=&quot;w-5 h-5 text-cyan-400 group-hover:text-cyan-300&quot; />
                        <div></div>
                          <div className=&quot;text-white font-medium&quot;>{service.name}</div>
                          <div className=&quot;text-xs text-gray-400&quot;>{service.description}</div>
                        </div>
                        <ArrowRight className=&quot;w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto&quot; />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Technologies Dropdown */}
            <div className=&quot;relative group&quot;></div>
              <button
                onClick={toggleServices}
                className=&quot;flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;
              >
                <Zap className=&quot;w-4 h-4&quot; />
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className=&quot;absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card&quot;></div>
                  <div className=&quot;grid grid-cols-1 gap-2&quot;></div>
                    {emergingTech.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className=&quot;flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group&quot;
                        onClick={closeAllMenus}
                      >
                        <service.icon className=&quot;w-5 h-5 text-cyan-400 group-hover:text-cyan-300&quot; />
                        <div></div>
                          <div className=&quot;text-white font-medium&quot;>{service.name}</div>
                          <div className=&quot;text-xs text-gray-400&quot;>{service.description}</div>
                        </div>
                        <ArrowRight className=&quot;w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto&quot; />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to=&quot;/about&quot; className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;>
              About
            </Link>
            <Link to=&quot;/services&quot; className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;>
              Services
            </Link>
            <Link to=&quot;/pricing&quot; className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;>
              Pricing
            </Link>
            <Link to=&quot;/blog&quot; className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;>
              Blog
            </Link>
            <Link to=&quot;/contact&quot; className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;>
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className=&quot;hidden lg:flex items-center space-x-4&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium&quot;
            >
              <Phone className=&quot;w-4 h-4&quot; />
              <span className=&quot;text-sm&quot;>(302) 464-0950</span>
            </a>
            <a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              className=&quot;flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium&quot;
            >
              <Mail className=&quot;w-4 h-4&quot; />
              <span className=&quot;text-sm&quot;>Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className=&quot;lg:hidden&quot;></div>
            <button
              onClick={toggleMenu}
              className=&quot;text-gray-300 hover:text-white p-2 rounded-md transition-colors&quot;
            >
              {isOpen ? <X className=&quot;h-6 w-6&quot; /> : <Menu className=&quot;h-6 w-6&quot; />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className=&quot;lg:hidden mt-4 pb-4 border-t border-cyan-500/20&quot;></div>
            <div className=&quot;pt-4 space-y-4&quot;></div>
              <Link to=&quot;/&quot; className=&quot;block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot; onClick={closeAllMenus}>
                Home
              </Link>
              
              {/* Mobile AI Services */}
              <div></div>
                <button
                  onClick={toggleAiServices}
                  className=&quot;flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;
                >
                  <span className=&quot;flex items-center space-x-2&quot;>
                    <Brain className=&quot;w-4 h-4&quot; />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className=&quot;mt-2 ml-4 space-y-2&quot;></div>
                    {aiServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className=&quot;block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300&quot;
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to=&quot;/ai-services&quot;
                      className=&quot;block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium&quot;
                      onClick={closeAllMenus}
                    >
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div></div>
                <button
                  onClick={toggleItServices}
                  className=&quot;flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;
                >
                  <span className=&quot;flex items-center space-x-2&quot;>
                    <Cloud className=&quot;w-4 h-4&quot; />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className=&quot;mt-2 ml-4 space-y-2&quot;></div>
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className=&quot;block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300&quot;
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div></div>
                <button
                  onClick={toggleMicroSaas}
                  className=&quot;flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot;
                >
                  <span className=&quot;flex items-center space-x-2&quot;>
                    <Cpu className=&quot;w-4 h-4&quot; />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className=&quot;mt-2 ml-4 space-y-2&quot;></div>
                    {microSaasServices.slice(0, 6).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className=&quot;block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300&quot;
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to=&quot;/micro-saas&quot;
                      className=&quot;block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium&quot;
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>

              <Link to=&quot;/about&quot; className=&quot;block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot; onClick={closeAllMenus}>
                About
              </Link>
              <Link to=&quot;/services&quot; className=&quot;block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot; onClick={closeAllMenus}>
                Services
              </Link>
              <Link to=&quot;/pricing&quot; className=&quot;block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot; onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link to=&quot;/blog&quot; className=&quot;block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot; onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to=&quot;/contact&quot; className=&quot;block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium&quot; onClick={closeAllMenus}>
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className=&quot;pt-4 border-t border-cyan-500/20 space-y-2&quot;></div>
                <a
                  href=&quot;tel:+13024640950&quot;
                  className=&quot;flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium&quot;
                >
                  <Phone className=&quot;w-4 h-4&quot; />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium&quot;
                >
                  <Mail className=&quot;w-4 h-4&quot; />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className=&quot;flex items-center space-x-2 text-gray-400&quot;></div>
                  <MapPin className=&quot;w-4 h-4&quot; />
                  <span className=&quot;text-sm&quot;>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation