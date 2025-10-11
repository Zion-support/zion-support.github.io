'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Brain, ChevronDown, Menu, X, ArrowRight, Code, Shield, Cloud, BarChart3, Users, BookOpen, Briefcase } from 'lucide-react'

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
  
  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

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
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('services')}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Briefcase className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20">
                  <div className="p-4 space-y-3">
                    <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      All Services
                    </Link>
                    <Link href="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      AI Services
                    </Link>
                    <Link href="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      IT Services
                    </Link>
                    <Link href="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      Micro SaaS
                    </Link>
                    <Link href="/consultation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      Consultation
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('ai')}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20">
                  <div className="p-4 space-y-3">
                    <Link href="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      All AI Services
                    </Link>
                    <div className="border-t border-gray-600 pt-3">
                      <h4 className="text-cyan-400 text-sm font-semibold mb-2">Core AI Services</h4>
                      <Link href="/ai-analytics" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                        AI Analytics
                      </Link>
                      <Link href="/ai-automation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                        AI Automation
                      </Link>
                      <Link href="/ai-chatbot-builder" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                        Chatbot Builder
                      </Link>
                      <Link href="/ai-cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                        AI Cybersecurity
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('it')}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20">
                  <div className="p-4 space-y-3">
                    <Link href="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      All IT Services
                    </Link>
                    <div className="border-t border-gray-600 pt-3">
                      <h4 className="text-cyan-400 text-sm font-semibold mb-2">Core IT Services</h4>
                      <Link href="/cloud-infrastructure" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                        Cloud Infrastructure
                      </Link>
                      <Link href="/cybersecurity-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                        Cybersecurity
                      </Link>
                      <Link href="/web-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                        Web Development
                      </Link>
                      <Link href="/mobile-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                        Mobile Development
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('company')}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Users className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20">
                  <div className="p-4 space-y-3">
                    <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      About Us
                    </Link>
                    <Link href="/team" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      Our Team
                    </Link>
                    <Link href="/careers" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      Careers
                    </Link>
                    <Link href="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      Case Studies
                    </Link>
                    <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      Blog
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link 
              href="/consultation" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
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
              
              {/* Services Section */}
              <div className="px-3 py-2">
                <h3 className="text-cyan-400 text-sm font-semibold mb-2">Services</h3>
                <div className="pl-4 space-y-1">
                  <Link 
                    href="/services" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    All Services
                  </Link>
                  <Link 
                    href="/ai-services" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    AI Services
                  </Link>
                  <Link 
                    href="/it-services" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    IT Services
                  </Link>
                  <Link 
                    href="/micro-saas" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    Micro SaaS
                  </Link>
                </div>
              </div>

              {/* AI Services Section */}
              <div className="px-3 py-2">
                <h3 className="text-cyan-400 text-sm font-semibold mb-2">AI Services</h3>
                <div className="pl-4 space-y-1">
                  <Link 
                    href="/ai-analytics" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    AI Analytics
                  </Link>
                  <Link 
                    href="/ai-automation" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    AI Automation
                  </Link>
                  <Link 
                    href="/ai-chatbot-builder" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    Chatbot Builder
                  </Link>
                  <Link 
                    href="/ai-cybersecurity" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    AI Cybersecurity
                  </Link>
                </div>
              </div>

              {/* IT Services Section */}
              <div className="px-3 py-2">
                <h3 className="text-cyan-400 text-sm font-semibold mb-2">IT Services</h3>
                <div className="pl-4 space-y-1">
                  <Link 
                    href="/cloud-infrastructure" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    Cloud Infrastructure
                  </Link>
                  <Link 
                    href="/cybersecurity-solutions" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    Cybersecurity
                  </Link>
                  <Link 
                    href="/web-development" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    Web Development
                  </Link>
                  <Link 
                    href="/mobile-development" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    Mobile Development
                  </Link>
                </div>
              </div>

              {/* Company Section */}
              <div className="px-3 py-2">
                <h3 className="text-cyan-400 text-sm font-semibold mb-2">Company</h3>
                <div className="pl-4 space-y-1">
                  <Link 
                    href="/team" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    Our Team
                  </Link>
                  <Link 
                    href="/careers" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    Careers
                  </Link>
                  <Link 
                    href="/case-studies" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    Case Studies
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
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
