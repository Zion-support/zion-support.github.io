'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Brain, ChevronDown, Menu, X, ArrowRight, Code, Cloud, Shield, BarChart, Users, FileText, DollarSign } from 'lucide-react'

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

  const servicesDropdown = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Brain },
    { name: 'AI Video Editor', href: '/ai-video-editor', icon: Brain },
    { name: 'AI Email Marketing', href: '/ai-email-marketing-automation', icon: Brain },
    { name: 'AI Project Management', href: '/ai-project-management', icon: Brain },
    { name: 'AI Customer Insights', href: '/ai-customer-insights', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Code },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Mobile Development', href: '/mobile-development', icon: Code }
  ]

  const companyDropdown = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'Blog', href: '/blog', icon: FileText }
  ]

  const resourcesDropdown = [
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Consultation', href: '/consultation', icon: Users },
    { name: 'Demo', href: '/demo', icon: Code },
    { name: 'Support', href: '/support', icon: Users },
    { name: 'Tutorials', href: '/tutorials', icon: FileText }
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
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
<<<<<<< HEAD
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link href="/services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200">
                    All Services
                  </Link>
                  <div className="border-t border-gray-600 my-2"></div>
                  <div className="px-4 py-2">
                    <div className="text-cyan-400 text-sm font-semibold mb-2">AI Services</div>
                    <Link href="/ai-services" className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                      AI Solutions
                    </Link>
                    <Link href="/ai-analytics" className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                      AI Analytics
                    </Link>
                    <Link href="/ai-automation" className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                      AI Automation
                    </Link>
                    <Link href="/ai-chatbot-builder" className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                      Chatbot Builder
                    </Link>
                  </div>
                  <div className="px-4 py-2">
                    <div className="text-cyan-400 text-sm font-semibold mb-2">IT Services</div>
                    <Link href="/it-services" className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                      IT Solutions
                    </Link>
                    <Link href="/cloud-infrastructure" className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                      Cloud Infrastructure
                    </Link>
                    <Link href="/cybersecurity-solutions" className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                      Cybersecurity
                    </Link>
                    <Link href="/web-development" className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                      Web Development
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
=======
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'services' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 py-2"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {servicesDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Company
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'company' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 py-2"
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {companyDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Resources
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'resources' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 py-2"
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {resourcesDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

>>>>>>> cursor/website-audit-and-update-with-deployment-3bf1
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
<<<<<<< HEAD
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
                All Services
              </Link>
              <div className="px-3 py-2">
                <div className="text-cyan-400 text-sm font-semibold mb-2">AI Services</div>
                <Link 
                  href="/ai-services" 
                  className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm ml-2"
                  onClick={toggleMenu}
                >
                  AI Solutions
                </Link>
                <Link 
                  href="/ai-analytics" 
                  className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm ml-2"
                  onClick={toggleMenu}
                >
                  AI Analytics
                </Link>
                <Link 
                  href="/ai-automation" 
                  className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm ml-2"
                  onClick={toggleMenu}
                >
                  AI Automation
                </Link>
              </div>
              <div className="px-3 py-2">
                <div className="text-cyan-400 text-sm font-semibold mb-2">IT Services</div>
                <Link 
                  href="/it-services" 
                  className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm ml-2"
                  onClick={toggleMenu}
                >
                  IT Solutions
                </Link>
                <Link 
                  href="/cloud-infrastructure" 
                  className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm ml-2"
                  onClick={toggleMenu}
                >
                  Cloud Infrastructure
                </Link>
                <Link 
                  href="/cybersecurity-solutions" 
                  className="block py-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm ml-2"
                  onClick={toggleMenu}
                >
                  Cybersecurity
                </Link>
              </div>
              <Link 
                href="/pricing" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Blog
              </Link>
=======
              
              {/* Services Section */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">Services</div>
                {servicesDropdown.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                    onClick={toggleMenu}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Company Section */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">Company</div>
                {companyDropdown.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                    onClick={toggleMenu}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Resources Section */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">Resources</div>
                {resourcesDropdown.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                    onClick={toggleMenu}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>

>>>>>>> cursor/website-audit-and-update-with-deployment-3bf1
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
