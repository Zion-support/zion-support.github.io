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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div>
          <div>
          {/* Logo */}

          <div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </Link>
          </div>
          {/* Desktop Navigation */}

          <div>
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            
            <div>
              <button
                onClick={() => toggleDropdown('services')}

                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <ChevronDown />
              </button>
              {activeDropdown === 'services' && (
                <div>
                  <Link to="/services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">
                    All Services
                  </Link>
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">
                    AI Services
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Link>
                  {activeDropdown === 'ai-services' && (
                    <div>
                      <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">
                        All AI Services
                      </Link>
                      <Link to="/ai-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">
                        AI Analytics
                      </Link>
                      <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">AI Automation
                      </Link>
                      <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">Content Generation
                      </Link>
                    </div>
                  )}

                </div>
              )}

            </div>

            {/* IT Services Dropdown */}

            <div>
              <button
                onClick={() => toggleDropdown('it-services')}

                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                IT Services
              </button>
            </div>
            <div>
              <button
                onClick={toggleMenu}

                className="text-gray-300 hover:text-white p-2 rounded-md"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}

              </button>
              {activeDropdown === 'solutions' && (
                <div>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">AI Solutions
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">Cloud Solutions
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">Enterprise Solutions
                  </Link>
                </div>)}

            </div><Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">About
            </Link>
            <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">Contact
            </Link>
            <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">Demo
            </Link>
          </div>{/* Mobile menu button */}

          <div>
            <button
              onClick={toggleMenu}

              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}

            </button>
          </div></div>{/* Mobile Navigation */}

        {isMenuOpen && (
          <div>
          <div>
              <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">Home
              </Link>
              <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">AI Services
              </Link>
              <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">IT Services
              </Link>
              <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">About
              </Link>
              <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">Contact
              </Link>
              <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">Demo
              </Link>
            </div></div>)}

      </div></nav>
  );
};

export default Navigation