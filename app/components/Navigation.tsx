import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Brain, Cloud, Cpu, Wifi, Lock, BarChart3 } from 'lucide-react'
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' : 'bg-white/10 backdrop-blur-lg border-b border-white/20'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Zion Tech Group</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link to="/" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10">
                About
              </Link>
              
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center hover:bg-white/10"
                >
                  <Brain className="w-4 h-4 mr-1" />
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-slate-900/95 backdrop-blur-xl rounded-lg shadow-xl border border-cyan-500/20 py-2 z-50">
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">All AI Services</Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Content Generator</Link>
                    <Link to="/ai-chatbot-builder" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Chatbot Builder</Link>
                    <Link to="/ai-analytics-dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Analytics Dashboard</Link>
                    <Link to="/ai-email-assistant" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Email Assistant</Link>
                    <Link to="/ai-voice-assistant" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Voice Assistant</Link>
                    <Link to="/ai-automation" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Automation</Link>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('it')}
                  className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center hover:bg-white/10"
                >
                  <Cloud className="w-4 h-4 mr-1" />
                  IT Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-slate-900/95 backdrop-blur-xl rounded-lg shadow-xl border border-cyan-500/20 py-2 z-50">
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">All IT Services</Link>
                    <Link to="/cloud-migration" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">Cloud Migration</Link>
                    <Link to="/cybersecurity-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">Cybersecurity</Link>
                    <Link to="/devops-cicd" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">DevOps & CI/CD</Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">Data Analytics</Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">Mobile Development</Link>
                    <Link to="/blockchain" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">Blockchain Solutions</Link>
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('saas')}
                  className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center hover:bg-white/10"
                >
                  <Cpu className="w-4 h-4 mr-1" />
                  Micro SAAS
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'saas' && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-slate-900/95 backdrop-blur-xl rounded-lg shadow-xl border border-cyan-500/20 py-2 z-50">
                    <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">All Micro SAAS</Link>
                    <Link to="/ai-task-manager" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Task Manager</Link>
                    <Link to="/ai-expense-tracker" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Expense Tracker</Link>
                    <Link to="/ai-password-manager" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Password Manager</Link>
                    <Link to="/ai-invoice-generator" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Invoice Generator</Link>
                    <Link to="/ai-health-tracker" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Health Tracker</Link>
                    <Link to="/ai-smart-calendar" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">AI Smart Calendar</Link>
                  </div>
                )}
              </div>

              <Link to="/5g-implementation" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center hover:bg-white/10">
                <Wifi className="w-4 h-4 mr-1" />
                5G Solutions
              </Link>
              <Link to="/cybersecurity-solutions" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center hover:bg-white/10">
                <Lock className="w-4 h-4 mr-1" />
                Security
              </Link>
              <Link to="/data-analytics" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center hover:bg-white/10">
                <BarChart3 className="w-4 h-4 mr-1" />
                Analytics
              </Link>
              <Link to="/contact" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10">
                Contact
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-300 focus:outline-none focus:text-cyan-300 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20">
            <Link to="/" className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              About
            </Link>
            
            {/* AI Services Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2 flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                AI Services
              </div>
              <div className="ml-4 space-y-1">
                <Link to="/ai-services" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">All AI Services</Link>
                <Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">AI Content Generator</Link>
                <Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">AI Chatbot Builder</Link>
                <Link to="/ai-analytics-dashboard" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">AI Analytics Dashboard</Link>
                <Link to="/ai-email-assistant" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">AI Email Assistant</Link>
              </div>
            </div>

            {/* IT Services Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2 flex items-center">
                <Cloud className="w-4 h-4 mr-2" />
                IT Services
              </div>
              <div className="ml-4 space-y-1">
                <Link to="/it-services" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">All IT Services</Link>
                <Link to="/cloud-migration" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">Cloud Migration</Link>
                <Link to="/cybersecurity-solutions" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">Cybersecurity</Link>
                <Link to="/devops-cicd" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">DevOps & CI/CD</Link>
                <Link to="/data-analytics" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">Data Analytics</Link>
              </div>
            </div>

            {/* Micro SAAS Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2 flex items-center">
                <Cpu className="w-4 h-4 mr-2" />
                Micro SAAS
              </div>
              <div className="ml-4 space-y-1">
                <Link to="/micro-saas-services" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">All Micro SAAS</Link>
                <Link to="/ai-task-manager" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">AI Task Manager</Link>
                <Link to="/ai-expense-tracker" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">AI Expense Tracker</Link>
                <Link to="/ai-password-manager" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm transition-colors">AI Password Manager</Link>
              </div>
            </div>

            <Link to="/5g-implementation" className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center">
              <Wifi className="w-4 h-4 mr-2" />
              5G Solutions
            </Link>
            <Link to="/cybersecurity-solutions" className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              Security
            </Link>
            <Link to="/data-analytics" className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}