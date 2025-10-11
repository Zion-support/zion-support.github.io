'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight, 
  Cpu, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText, 
  MessageCircle, 
  Heart, 
  DollarSign, 
  Box, 
  Monitor, 
  Link as LinkIcon, 
  Server, 
  Package, 
  Mic, 
  Workflow, 
  Eye, 
  Wifi, 
  MessageSquare, 
  CheckCircle, 
  ShoppingCart 
} from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const services = [
    {
      title: 'AI Solutions',
      icon: Brain,
      href: '/ai-services',
      description: 'Advanced AI and machine learning solutions'
    },
    {
      title: 'Cloud Infrastructure',
      icon: Cloud,
      href: '/cloud-infrastructure',
      description: 'Scalable cloud solutions and migration'
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      href: '/cybersecurity',
      description: 'Comprehensive security solutions'
    },
    {
      title: 'Data Analytics',
      icon: BarChart,
      href: '/data-analytics',
      description: 'Transform data into insights'
    },
    {
      title: 'Web Development',
      icon: Code,
      href: '/web-development',
      description: 'Modern web applications'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      href: '/mobile-development',
      description: 'Native and cross-platform apps'
    }
  ]

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, text: '123 Tech Street, Innovation City', href: '#' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
            <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <span>Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors duration-300">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <service.icon className="w-5 h-5 text-cyan-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">{service.title}</div>
                          <div className="text-sm text-gray-600">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Contact
            </Link>
            
            <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">Services</div>
                <div className="space-y-2 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <div className="px-3 py-2">
                <button className="w-full bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300">
                  Get Started
                </button>
              </div>

              {/* Contact Info */}
              <div className="px-3 py-2 border-t border-gray-700">
                <div className="space-y-2">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <info.icon className="w-4 h-4" />
                      <span className="text-sm">{info.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation