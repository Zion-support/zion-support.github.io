'use client'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { 
  Menu,
  X, 
  ChevronDown, 
  Brain, 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Shield, 
  Code, 
  Cloud, 
  BarChart, 
  Settings, 
  HelpCircle, 
  ArrowRight 
} from 'lucide-react'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Custom Development', href: '/custom-development', icon: Code },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart },
    { name: 'IT Consulting', href: '/it-consulting', icon: Settings }
  ]

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <Users className="h-4 w-4 mr-2" />
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <service.icon className="h-4 w-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
              <Link
                to="/about"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                <Users className="h-4 w-4 mr-2" />
                About
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center text-gray-300 hover:text-white transition-colors w-full"
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Services
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center text-gray-300 hover:text-white transition-colors"
                        onClick={toggleMenu}
                      >
                        <service.icon className="h-4 w-4 mr-2" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation