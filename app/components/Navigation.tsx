'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Brain, ChevronDown, Menu, X, ArrowRight, Home, Users, Briefcase, Phone, BookOpen, BarChart3, Shield, Database } from 'lucide-react'

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

  const servicesDropdown = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Briefcase },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart3 },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Database },
    { name: 'Web Development', href: '/web-development', icon: Briefcase },
    { name: 'Mobile Development', href: '/mobile-development', icon: Briefcase }
  ]

  const companyDropdown = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
    { name: 'Blog', href: '/blog', icon: BookOpen }
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
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            
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
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-white/20 py-2"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {servicesDropdown.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200"
                    >
                      <service.icon className="w-4 h-4 mr-3" />
                      {service.name}
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
                  className="absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-white/20 py-2"
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {companyDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200"
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              Contact
            </Link>
            <Link 
              href="/consultation" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <ArrowRight className="w-4 h-4 mr-1" />
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
                className="flex items-center px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
              
              {/* Services Section */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">Services</div>
                {servicesDropdown.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4"
                    onClick={toggleMenu}
                  >
                    <service.icon className="w-4 h-4 mr-2" />
                    {service.name}
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
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium ml-4"
                    onClick={toggleMenu}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                ))}
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
              <Link 
                href="/contact" 
                className="flex items-center px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Link>
              <Link 
                href="/consultation" 
                className="flex items-center justify-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300"
                onClick={toggleMenu}
              >
                <ArrowRight className="w-4 h-4 mr-1" />
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
