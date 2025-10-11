'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Brain, ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

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
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-400 mb-2 px-4">AI Services</h3>
                      <Link to="/ai-services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                        AI Solutions
                      </Link>
                      <Link to="/ai-analytics" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                        AI Analytics
                      </Link>
                      <Link to="/ai-automation" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                        AI Automation
                      </Link>
                      <Link to="/ai-chatbot-builder" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                        Chatbot Builder
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-400 mb-2 px-4">IT Services</h3>
                      <Link to="/it-services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                        IT Solutions
                      </Link>
                      <Link to="/cloud-infrastructure" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                        Cloud Infrastructure
                      </Link>
                      <Link to="/web-development" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                        Web Development
                      </Link>
                      <Link to="/mobile-development" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                        Mobile Development
                      </Link>
                    </div>
                  </div>
                  <div className="border-t border-gray-600 mt-4 pt-4">
                    <Link to="/services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200 font-medium">
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center">
                Resources
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/blog" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    Blog
                  </Link>
                  <Link to="/case-studies" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    Case Studies
                  </Link>
                  <Link to="/tutorials" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    Tutorials
                  </Link>
                  <Link to="/support" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    Support
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link 
              to="/consultation" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-1" />
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
                to="/" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-cyan-400 mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/services" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    AI Services
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/cloud-infrastructure" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Cloud Infrastructure
                  </Link>
                  <Link 
                    to="/cybersecurity" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Cybersecurity
                  </Link>
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-cyan-400 mb-2">Resources</div>
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/blog" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/case-studies" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Case Studies
                  </Link>
                  <Link 
                    to="/tutorials" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Tutorials
                  </Link>
                  <Link 
                    to="/support" 
                    className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Support
                  </Link>
                </div>
              </div>
              <Link 
                to="/pricing" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                to="/consultation" 
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
