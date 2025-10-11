'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Brain, ChevronDown, Menu, X, ArrowRight, Zap, Server, Code, BarChart, Users, Phone, Mail, MapPin } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleServices = () => setIsServicesOpen(!isServicesOpen)

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
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
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
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-white font-semibold mb-3 flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                          AI Services
                        </h3>
                        <ul className="space-y-2">
                          <li><Link href="/ai-services" className="block text-gray-300 hover:text-cyan-400 text-sm">All AI Services</Link></li>
                          <li><Link href="/ai-analytics" className="block text-gray-300 hover:text-cyan-400 text-sm">AI Analytics</Link></li>
                          <li><Link href="/ai-automation" className="block text-gray-300 hover:text-cyan-400 text-sm">AI Automation</Link></li>
                          <li><Link href="/ai-cybersecurity" className="block text-gray-300 hover:text-cyan-400 text-sm">AI Cybersecurity</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-3 flex items-center">
                          <Server className="w-4 h-4 mr-2 text-cyan-400" />
                          IT Services
                        </h3>
                        <ul className="space-y-2">
                          <li><Link href="/it-services" className="block text-gray-300 hover:text-cyan-400 text-sm">All IT Services</Link></li>
                          <li><Link href="/cloud-infrastructure" className="block text-gray-300 hover:text-cyan-400 text-sm">Cloud Infrastructure</Link></li>
                          <li><Link href="/cybersecurity-solutions" className="block text-gray-300 hover:text-cyan-400 text-sm">Cybersecurity</Link></li>
                          <li><Link href="/web-development" className="block text-gray-300 hover:text-cyan-400 text-sm">Web Development</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <Link href="/micro-saas" className="block text-gray-300 hover:text-cyan-400 text-sm font-medium">
                        <Code className="w-4 h-4 inline mr-2" />
                        Micro SaaS Solutions
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link href="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Case Studies
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
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
              
              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-white font-semibold mb-2 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                  AI Services
                </div>
                <div className="ml-4 space-y-1">
                  <Link 
                    href="/ai-services" 
                    className="block text-gray-300 hover:text-cyan-400 text-sm"
                    onClick={toggleMenu}
                  >
                    All AI Services
                  </Link>
                  <Link 
                    href="/ai-analytics" 
                    className="block text-gray-300 hover:text-cyan-400 text-sm"
                    onClick={toggleMenu}
                  >
                    AI Analytics
                  </Link>
                  <Link 
                    href="/ai-automation" 
                    className="block text-gray-300 hover:text-cyan-400 text-sm"
                    onClick={toggleMenu}
                  >
                    AI Automation
                  </Link>
                  <Link 
                    href="/ai-cybersecurity" 
                    className="block text-gray-300 hover:text-cyan-400 text-sm"
                    onClick={toggleMenu}
                  >
                    AI Cybersecurity
                  </Link>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-white font-semibold mb-2 flex items-center">
                  <Server className="w-4 h-4 mr-2 text-cyan-400" />
                  IT Services
                </div>
                <div className="ml-4 space-y-1">
                  <Link 
                    href="/it-services" 
                    className="block text-gray-300 hover:text-cyan-400 text-sm"
                    onClick={toggleMenu}
                  >
                    All IT Services
                  </Link>
                  <Link 
                    href="/cloud-infrastructure" 
                    className="block text-gray-300 hover:text-cyan-400 text-sm"
                    onClick={toggleMenu}
                  >
                    Cloud Infrastructure
                  </Link>
                  <Link 
                    href="/cybersecurity-solutions" 
                    className="block text-gray-300 hover:text-cyan-400 text-sm"
                    onClick={toggleMenu}
                  >
                    Cybersecurity
                  </Link>
                  <Link 
                    href="/web-development" 
                    className="block text-gray-300 hover:text-cyan-400 text-sm"
                    onClick={toggleMenu}
                  >
                    Web Development
                  </Link>
                </div>
              </div>

              <Link 
                href="/micro-saas" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                <Code className="w-4 h-4 inline mr-2" />
                Micro SaaS Solutions
              </Link>
              <Link 
                href="/pricing" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link 
                href="/case-studies" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Case Studies
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Blog
              </Link>
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