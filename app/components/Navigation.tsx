'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Brain, ChevronDown, Menu, X, ArrowRight, Zap, Cloud, Shield, Code, BarChart, Users, Phone, Mail, MapPin, Clock, Star, Award, Rocket, Target, Settings, Globe, Heart, Server } from 'lucide-react'

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

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Server },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Zap },
    { name: 'Cloud Solutions', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Data Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'Consultation', href: '/consultation', icon: Users }
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  const resources = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Support', href: '/support' },
    { name: 'Demo', href: '/demo' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
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
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
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
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700">
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-3">Our Services</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <service.icon className="w-4 h-4 text-cyan-400 mr-2" />
                          <span className="text-sm text-gray-300">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Company
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700">
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-3">Company</h3>
                    <div className="space-y-1">
                      {company.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Resources
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700">
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-3">Resources</h3>
                    <div className="space-y-1">
                      {resources.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/consultation" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Rocket className="w-4 h-4 mr-2" />
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
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <h3 className="text-sm font-semibold text-cyan-400 mb-2">Services</h3>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      <service.icon className="w-4 h-4 text-cyan-400 mr-2" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Company */}
              <div className="px-3 py-2">
                <h3 className="text-sm font-semibold text-cyan-400 mb-2">Company</h3>
                <div className="space-y-1 ml-4">
                  {company.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Resources */}
              <div className="px-3 py-2">
                <h3 className="text-sm font-semibold text-cyan-400 mb-2">Resources</h3>
                <div className="space-y-1 ml-4">
                  {resources.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/consultation" 
                className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 text-center mt-4"
                onClick={toggleMenu}
              >
                <Rocket className="w-4 h-4 mr-2 inline" />
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
