import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Brain, Database, Smartphone, Cloud, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 font-semibold">All AI Services</Link>
                  <Link to="/ai-content-generator" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">
                    <Brain className="w-4 h-4" />
                    <span className="ml-3">AI Content Generator</span>
                  </Link>
                  <Link to="/ai-chatbot-builder" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">
                    <Brain className="w-4 h-4" />
                    <span className="ml-3">AI Chatbot Builder</span>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              IT Services
            </Link>
            <Link to="/micro-saas-services" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Micro SAAS
            </Link>
            <Link to="/5g-implementation" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              5G Solutions
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 ml-4"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                IT Services
              </Link>
              <Link to="/micro-saas-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Micro SAAS
              </Link>
              <Link to="/5g-implementation" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                5G Solutions
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
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
