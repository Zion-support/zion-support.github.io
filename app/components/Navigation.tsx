'use client';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Cloud, 
  Shield, 
  Globe, 
  Database, 
  Code, 
  Smartphone, 
  Brain, 
  Cpu, 
  Server, 
  Wifi, 
  Users, 
  BarChart3, 
  Settings,
  Sparkles,
  ArrowRight,
  Target,
  Lock,
  Mail,
  Phone
} from 'lucide-react'

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
    setIsOpen(false)
  }

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions',
      submenu: [
        { title: 'AI Content Generator Pro', href: '/ai-content-generator', price: '$299/mo' },
        { title: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise', price: '$499/mo' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', price: '$399/mo' },
        { title: 'AI 3D Generation Studio', href: '/ai-3d-generation', price: '$799/mo' },
        { title: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro', price: '$2,999/mo' },
        { title: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite', price: '$1,299/mo' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration', price: 'From $5,000' },
        { title: 'DevOps Solutions', href: '/devops-solutions', price: 'From $3,500' },
        { title: 'Cybersecurity', href: '/cybersecurity', price: 'From $2,500' },
        { title: 'Mobile Development', href: '/mobile-development', price: 'From $8,000' },
        { title: 'API Development', href: '/api-development', price: 'From $4,000' },
        { title: 'Database Management', href: '/database-management', price: 'From $1,500' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Specialized micro services',
      submenu: [
        { title: 'AI-Powered CRM', href: '/ai-crm', price: '$99/mo' },
        { title: 'Smart Analytics Platform', href: '/smart-analytics', price: '$149/mo' },
        { title: 'Automated Testing Suite', href: '/ai-automated-testing', price: '$199/mo' },
        { title: 'Content Management System', href: '/ai-content-management', price: '$79/mo' },
        { title: 'Email Marketing Automation', href: '/ai-email-marketing', price: '$129/mo' },
        { title: 'Social Media Manager', href: '/ai-social-media-manager', price: '$89/mo' }
      ]
    },
    {
      title: '5G Solutions',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-gen connectivity',
      submenu: [
        { title: '5G Network Infrastructure', href: '/5g-network-infrastructure', price: 'From $50,000' },
        { title: '5G Edge Computing', href: '/5g-edge-computing', price: 'From $25,000' },
        { title: '5G IoT Solutions', href: '/5g-iot-solutions', price: 'From $15,000' }
      ]
    }
  ]

  const quickLinks = [
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Careers', href: '/careers' },
    { title: 'Contact', href: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                Zion Tech Group
              </span>
              <div className="text-xs text-purple-300 font-medium">AI & IT Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-purple-300 transition-colors font-medium">
              Home
            </Link>
            
            {/* Services Dropdowns */}
            {services.map((service) => (
              <div key={service.title} className="relative">
                <button
                  onClick={() => toggleDropdown(service.title)}
                  className="flex items-center text-white hover:text-purple-300 transition-colors font-medium group"
                >
                  <span className="mr-1">{service.icon}</span>
                  {service.title}
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    activeDropdown === service.title ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === service.title && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-purple-500/20 py-4 z-50">
                    <div className="px-4 py-2 border-b border-purple-500/20 mb-2">
                      <h3 className="text-white font-semibold flex items-center">
                        {service.icon}
                        <span className="ml-2">{service.title}</span>
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                    </div>
                    <div className="space-y-1">
                      {service.submenu.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          onClick={closeDropdown}
                          className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-all duration-200 group"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                            <span className="font-medium">{item.title}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-purple-400 text-sm font-semibold">{item.price}</span>
                            <ArrowRight className="w-4 h-4 ml-2 text-purple-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 pt-3 border-t border-purple-500/20">
                      <Link
                        to={service.href}
                        onClick={closeDropdown}
                        className="flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        View All {service.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Quick Links */}
            {quickLinks.map((link) => (
              <Link 
                key={link.title}
                to={link.href} 
                className="text-white hover:text-purple-300 transition-colors font-medium"
              >
                {link.title}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-300 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-lg rounded-2xl mt-2 border border-purple-500/20">
              {/* Mobile Services */}
              {services.map((service) => (
                <div key={service.title}>
                  <button
                    onClick={() => toggleDropdown(service.title)}
                    className="text-white hover:text-purple-300 block px-3 py-3 rounded-lg text-base font-medium w-full text-left flex items-center justify-between hover:bg-purple-500/10 transition-all duration-200"
                  >
                    <div className="flex items-center">
                      {service.icon}
                      <span className="ml-3">{service.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === service.title ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === service.title && (
                    <div className="pl-6 space-y-1 bg-slate-700/50 rounded-lg p-2">
                      {service.submenu.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          className="text-gray-300 hover:text-white block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-purple-500/10 flex items-center justify-between"
                          onClick={closeDropdown}
                        >
                          <span>{item.title}</span>
                          <span className="text-purple-400 text-xs font-semibold">{item.price}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Quick Links */}
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="text-white hover:text-purple-300 block px-3 py-3 rounded-lg text-base font-medium transition-colors hover:bg-purple-500/10"
                  onClick={closeDropdown}
                >
                  {link.title}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-3 rounded-lg text-base font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center mt-4"
                onClick={closeDropdown}
              >
                Get Started Today
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}