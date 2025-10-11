'use client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Brain, Home, Users, Briefcase, Phone, Mail, MapPin, Clock, Globe, Shield, Zap, Target, BarChart, Settings, HelpCircle, Star, Award, TrendingUp, Lightbulb, Code, Database, Cloud, Smartphone, Monitor, Server, Lock, Key, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  onClick={() => toggleDropdown('ai-services')}
                >
                  AI Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'ai-services' && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link to="/ai-solutions" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Brain className="w-4 h-4 mr-2" />
                      AI Solutions
                    </Link>
                    <Link to="/ai-analytics" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <BarChart className="w-4 h-4 mr-2" />
                      AI Analytics
                    </Link>
                    <Link to="/ai-automation" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Zap className="w-4 h-4 mr-2" />
                      AI Automation
                    </Link>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  onClick={() => toggleDropdown('it-services')}
                >
                  IT Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'it-services' && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link to="/cloud-services" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Cloud className="w-4 h-4 mr-2" />
                      Cloud Services
                    </Link>
                    <Link to="/cybersecurity" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Shield className="w-4 h-4 mr-2" />
                      Cybersecurity
                    </Link>
                    <Link to="/web-development" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Code className="w-4 h-4 mr-2" />
                      Web Development
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-blue-600 p-2 rounded-md"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link to="/ai-solutions" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                AI Solutions
              </Link>
              <Link to="/it-services" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                IT Services
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
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