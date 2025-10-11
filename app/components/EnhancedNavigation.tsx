'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Brain, ChevronDown, Menu, X, ArrowRight, Zap, Server, Users, BookOpen, Phone } from 'lucide-react'

const EnhancedNavigation: React.FC = () => {
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
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' },
    { name: 'AI Customer Support', href: '/ai-customer-support' },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile Development', href: '/mobile-development' },
    { name: 'Data Analytics', href: '/data-analytics' },
    { name: 'Database Services', href: '/database-services' },
    { name: 'IT Training', href: '/it-training' },
    { name: 'IT Support', href: '/support' }
  ]

  const companyPages = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  const resources = [
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support Center', href: '/support' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Demo', href: '/demo' },
    { name: 'Consultation', href: '/consultation' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
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
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setActiveDropdown('ai')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Zap className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-2">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setActiveDropdown('it')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Server className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-2">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Users className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-2">
                  {companyPages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.href}
                      className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <BookOpen className="w-4 h-4" />
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-2">
                  {resources.map((resource, index) => (
                    <Link
                      key={index}
                      to={resource.href}
                      className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            
            <Link 
              to="/consultation" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Get Started</span>
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
              
              {/* Mobile AI Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium text-sm mb-2">AI Services</div>
                <div className="pl-4 space-y-1">
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block px-2 py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                      onClick={toggleMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile IT Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium text-sm mb-2">IT Services</div>
                <div className="pl-4 space-y-1">
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block px-2 py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                      onClick={toggleMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Company */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium text-sm mb-2">Company</div>
                <div className="pl-4 space-y-1">
                  {companyPages.slice(0, 3).map((page, index) => (
                    <Link
                      key={index}
                      to={page.href}
                      className="block px-2 py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                      onClick={toggleMenu}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>

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

export default EnhancedNavigation