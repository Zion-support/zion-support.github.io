'use client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
  Zap, 
  Target, 
  BarChart, 
  Settings, 
  HelpCircle, 
  Star, 
  Award, 
  TrendingUp, 
  Lightbulb, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Monitor, 
  Server, 
  Lock, 
  Key, 
  Wifi, 
  MessageSquare, 
  CheckCircle, 
  ShoppingCart} from 'lucide-react'

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </Link>
                
                {/* AI Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('ai-services')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  >
                    AI Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'ai-services' && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        All AI Services
                      </Link>
                      <Link to="/ai-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        AI Analytics
                      </Link>
                      <Link to="/ai-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        AI Automation
                      </Link>
                      <Link to="/ai-content-generation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Content Generation
                      </Link>
                    </div>
                  )}
                </div>

                {/* IT Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('it-services')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  >
                    IT Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'it-services' && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        All IT Services
                      </Link>
                      <Link to="/cloud-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Cloud Services
                      </Link>
                      <Link to="/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Cybersecurity
                      </Link>
                      <Link to="/devops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        DevOps
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white p-2 rounded-md"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                IT Services
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navigation