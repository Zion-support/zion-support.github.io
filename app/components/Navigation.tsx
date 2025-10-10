'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronUp, Brain, Cpu, Cloud, Database, Shield, Zap, Target, Globe, TrendingUp, Users, BarChart, Settings, Smartphone, Lock, Code, FileText, Calendar, CheckSquare, Phone, Mail, MapPin } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aiServicesOpen, setAiServicesOpen] = useState(false)
  const [itServicesOpen, setItServicesOpen] = useState(false)
  const [microSaasOpen, setMicroSaasOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
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

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Process automation' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Customer support' },
    { name: 'AI Content', href: '/ai-content-generation', icon: FileText, description: 'Content creation' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer management' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'Marketing automation' }
  ]

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, description: 'Cloud solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security services' },
    { name: 'Database', href: '/database', icon: Database, description: 'Data management' },
    { name: 'DevOps', href: '/devops', icon: Settings, description: 'Development ops' },
    { name: 'Mobile Apps', href: '/mobile-development', icon: Smartphone, description: 'App development' },
    { name: 'Web Development', href: '/custom-development', icon: Code, description: 'Custom solutions' }
  ]

  const microSaasServices = [
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', icon: BarChart, description: 'Business analytics' },
    { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler', icon: Calendar, description: 'Scheduling tool' },
    { name: 'Content Generator', href: '/micro-saas/content-generator', icon: FileText, description: 'Content creation' },
    { name: 'Email Marketing', href: '/micro-saas/email-marketing', icon: Mail, description: 'Email campaigns' },
    { name: 'Expense Tracker', href: '/micro-saas/expense-tracker', icon: CheckSquare, description: 'Financial tracking' },
    { name: 'Lead Scoring', href: '/micro-saas/lead-scoring', icon: Target, description: 'Lead qualification' },
    { name: 'SEO Optimizer', href: '/micro-saas/seo-optimizer', icon: TrendingUp, description: 'SEO tools' },
    { name: 'Social Manager', href: '/micro-saas/social-manager', icon: Globe, description: 'Social media' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 text-white font-bold text-xl">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span>Zion Tech Group</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  {servicesOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-white font-semibold mb-3 flex items-center">
                          <Brain className="w-4 h-4 mr-2 text-cyan-400" />
                          AI Services
                        </h3>
                        <div className="space-y-2">
                          {aiServices.slice(0, 3).map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block text-gray-300 hover:text-white text-sm transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-3 flex items-center">
                          <Cpu className="w-4 h-4 mr-2 text-purple-400" />
                          IT Services
                        </h3>
                        <div className="space-y-2">
                          {itServices.slice(0, 3).map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block text-gray-300 hover:text-white text-sm transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <a
                        href="/services"
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                        onClick={closeAllMenus}
                      >
                        View All Services →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
              <a href="/pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2 border border-slate-700">
              <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeAllMenus}>
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeAllMenus}>
                About
              </a>
              <a href="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeAllMenus}>
                Services
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeAllMenus}>
                Contact
              </a>
              <a href="/pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeAllMenus}>
                Pricing
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4"
                onClick={closeAllMenus}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation