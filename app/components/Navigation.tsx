import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Brain, Cloud, Shield, Database, Code, Smartphone } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: 'IT Services', href: '/it-services', icon: <Code className="w-4 h-4" /> },
    { name: 'Cloud Services', href: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Micro SaaS', href: '/micro-saas-services', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Implementation', href: '/5g-implementation', icon: <Database className="w-4 h-4" /> },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: <Shield className="w-4 h-4" /> }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
              About
            </Link>
            
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
              Contact
            </Link>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-md font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
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
