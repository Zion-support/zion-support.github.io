import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Wifi } from 'lucide-react'
import SearchBar from './SearchBar'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const services = [
    {
      name: 'AI Services',
      icon: <Brain className="w-4 h-4" />,
      href: '/ai-services',
      description: 'Advanced AI solutions for your business'
    },
    {
      name: 'IT Services',
      icon: <Cpu className="w-4 h-4" />,
      href: '/it-services',
      description: 'Comprehensive IT infrastructure solutions'
    },
    {
      name: 'Cloud Services',
      icon: <Cloud className="w-4 h-4" />,
      href: '/cloud-services',
      description: 'Scalable cloud computing solutions'
    },
    {
      name: 'Mobile Development',
      icon: <Smartphone className="w-4 h-4" />,
      href: '/mobile-development',
      description: 'Native and cross-platform mobile apps'
    },
    {
      name: 'Cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      href: '/cybersecurity',
      description: 'Protect your business from cyber threats'
    },
    {
      name: 'Data Analytics',
      icon: <Database className="w-4 h-4" />,
      href: '/data-analytics',
      description: 'Transform data into actionable insights'
    }
  ]

  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('services')}
                className="flex items-center text-white hover:text-purple-300 transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/20 p-4">
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-purple-600 mt-0.5">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-white hover:text-purple-300 transition-colors">
              Contact
            </Link>
            
            {/* Search Bar */}
            <SearchBar />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-900 hover:text-purple-600 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-900 hover:text-purple-600 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-900 hover:text-purple-600 transition-colors"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-900 hover:text-purple-600 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}