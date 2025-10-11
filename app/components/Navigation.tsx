import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
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
    <nav className="bg-white/10 backdrop-blur-lg fixed w-full top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link to="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/pricing" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </Link>
              <Link to="/careers" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Careers
              </Link>
              <Link to="/blog" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Blog
              </Link>
              
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">All AI Services</Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Content Generator</Link>
                    <Link to="/ai-chatbot-builder" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Chatbot Builder</Link>
                    <Link to="/ai-analytics-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Analytics Dashboard</Link>
                    <Link to="/ai-email-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Email Assistant</Link>
                    <Link to="/ai-voice-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Voice Assistant</Link>
                    <Link to="/ai-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Automation</Link>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('it')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  IT Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">All IT Services</Link>
                    <Link to="/cloud-migration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Cloud Migration</Link>
                    <Link to="/cybersecurity-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Cybersecurity</Link>
                    <Link to="/devops-cicd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">DevOps & CI/CD</Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Data Analytics</Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Mobile Development</Link>
                    <Link to="/blockchain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Blockchain Solutions</Link>
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('saas')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Micro SAAS
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'saas' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">All Micro SAAS</Link>
                    <Link to="/ai-task-manager" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Task Manager</Link>
                    <Link to="/ai-expense-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Expense Tracker</Link>
                    <Link to="/ai-password-manager" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Password Manager</Link>
                    <Link to="/ai-invoice-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Invoice Generator</Link>
                    <Link to="/ai-health-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Health Tracker</Link>
                    <Link to="/ai-smart-calendar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Smart Calendar</Link>
                  </div>
                )}
              </div>

              <Link to="/5g-implementation" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                5G Solutions
              </Link>
              <Link to="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 focus:outline-none focus:text-purple-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20">
            <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/pricing" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/careers" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Careers
            </Link>
            <Link to="/blog" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
            
            {/* AI Services Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">AI Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/ai-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">All AI Services</Link>
                <Link to="/ai-content-generator" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Content Generator</Link>
                <Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Chatbot Builder</Link>
                <Link to="/ai-analytics-dashboard" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Analytics Dashboard</Link>
                <Link to="/ai-email-assistant" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Email Assistant</Link>
              </div>
            </div>

            {/* IT Services Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">IT Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/it-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">All IT Services</Link>
                <Link to="/cloud-migration" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Cloud Migration</Link>
                <Link to="/cybersecurity-solutions" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Cybersecurity</Link>
                <Link to="/devops-cicd" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">DevOps & CI/CD</Link>
                <Link to="/data-analytics" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Data Analytics</Link>
              </div>
            </div>

            {/* Micro SAAS Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">Micro SAAS</div>
              <div className="ml-4 space-y-1">
                <Link to="/micro-saas-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">All Micro SAAS</Link>
                <Link to="/ai-task-manager" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Task Manager</Link>
                <Link to="/ai-expense-tracker" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Expense Tracker</Link>
                <Link to="/ai-password-manager" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Password Manager</Link>
              </div>
            </div>

            <Link to="/5g-implementation" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              5G Solutions
            </Link>
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}