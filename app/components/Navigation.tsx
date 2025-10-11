'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Brain, ChevronDown, Menu, X, ArrowRight, Zap, Code, Shield, Cloud, BarChart, Users, Phone, Mail } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const aiServices = [
    { name: 'AI Machine Learning', href: '/ai-machine-learning' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Code Assistant', href: '/ai-code-assistant' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile Development', href: '/mobile-development' },
    { name: 'Database Management', href: '/database-management' },
    { name: 'IT Support', href: '/it-support' },
    { name: 'Business Intelligence', href: '/business-intelligence' },
    { name: 'IT Automation', href: '/it-automation' }
  ]

  const microSaasServices = [
    { name: 'AI Content Generator', href: '/ai-content-generator' },
    { name: 'AI Image Editor', href: '/ai-image-editor' },
    { name: 'AI Video Creator', href: '/ai-video-generator' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing' },
    { name: 'AI Scheduler', href: '/ai-scheduler' },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker' },
    { name: 'AI Project Manager', href: '/ai-project-manager' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg border border-slate-700">
                  <div className="py-2">
                    <Link href="/services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      All Services
                    </Link>
                    <div className="border-t border-slate-700 my-2"></div>
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-2">AI Services</h3>
                      {aiServices.slice(0, 4).map((service) => (
                        <Link key={service.name} href={service.href} className="block py-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-2">IT Services</h3>
                      {itServices.slice(0, 4).map((service) => (
                        <Link key={service.name} href={service.href} className="block py-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg border border-slate-700">
                  <div className="py-2">
                    <Link href="/ai-services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      All AI Services
                    </Link>
                    <div className="border-t border-slate-700 my-2"></div>
                    {aiServices.map((service) => (
                      <Link key={service.name} href={service.href} className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg border border-slate-700">
                  <div className="py-2">
                    <Link href="/it-services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      All IT Services
                    </Link>
                    <div className="border-t border-slate-700 my-2"></div>
                    {itServices.map((service) => (
                      <Link key={service.name} href={service.href} className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('microsaas')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Micro SaaS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'microsaas' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg border border-slate-700">
                  <div className="py-2">
                    <Link href="/micro-saas" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      All Micro SaaS
                    </Link>
                    <div className="border-t border-slate-700 my-2"></div>
                    {microSaasServices.map((service) => (
                      <Link key={service.name} href={service.href} className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link 
              href="/consultation" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                href="/ai-services" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                AI Services
              </Link>
              <Link 
                href="/it-services" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                IT Services
              </Link>
              <Link 
                href="/micro-saas" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Micro SaaS
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="border-t border-slate-700 my-2"></div>
              <div className="px-3 py-2">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
                </div>
              </div>
              <Link 
                href="/consultation" 
                className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 text-center"
                onClick={toggleMenu}
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

export default Navigation
