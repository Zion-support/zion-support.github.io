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
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Core AI Services</div>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">All AI Services</Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Content Generator - $29/mo</Link>
                    <Link to="/ai-chatbot-builder" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Chatbot Builder - $49/mo</Link>
                    <Link to="/ai-analytics-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Analytics Dashboard - $79/mo</Link>
                    <Link to="/ai-email-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Email Assistant - $39/mo</Link>
                    <Link to="/ai-voice-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Voice Assistant - $59/mo</Link>
                    <Link to="/ai-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Automation Suite - $99/mo</Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Advanced AI Solutions</div>
                    <Link to="/ai-cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Cybersecurity - $199/mo</Link>
                    <Link to="/ai-blockchain-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Blockchain Solutions - $299/mo</Link>
                    <Link to="/ai-3d-generation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI 3D Generation - $149/mo</Link>
                    <Link to="/ai-computer-vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Computer Vision - $179/mo</Link>
                    <Link to="/ai-drug-discovery-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Drug Discovery Pro - $999/mo</Link>
                    <Link to="/ai-climate-solutions-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Climate Solutions Pro - $399/mo</Link>
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
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Core IT Services</div>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">All IT Services</Link>
                    <Link to="/cloud-migration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Cloud Migration - From $2,500</Link>
                    <Link to="/cybersecurity-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Cybersecurity - From $1,500/mo</Link>
                    <Link to="/devops-cicd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">DevOps & CI/CD - From $3,000</Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Data Analytics - From $2,000/mo</Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Mobile Development - From $5,000</Link>
                    <Link to="/blockchain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Blockchain Solutions - From $8,000</Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Specialized Solutions</div>
                    <Link to="/iot-edge-computing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">IoT & Edge Computing - From $4,500</Link>
                    <Link to="/ar-vr-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AR/VR Solutions - From $6,000</Link>
                    <Link to="/machine-learning-ops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">MLOps - From $3,500/mo</Link>
                    <Link to="/digital-twin-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Digital Twin Platform - From $7,500</Link>
                    <Link to="/smart-city-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Smart City Infrastructure - From $15,000</Link>
                    <Link to="/healthcare-it" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Healthcare IT Solutions - From $5,500</Link>
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
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Productivity Tools</div>
                    <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">All Micro SAAS</Link>
                    <Link to="/ai-task-manager" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Task Manager - $19/mo</Link>
                    <Link to="/ai-expense-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Expense Tracker - $15/mo</Link>
                    <Link to="/ai-password-manager" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Password Manager - $12/mo</Link>
                    <Link to="/ai-invoice-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Invoice Generator - $25/mo</Link>
                    <Link to="/ai-smart-calendar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Smart Calendar - $22/mo</Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Business Solutions</div>
                    <Link to="/ai-accounting-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Accounting Assistant - $35/mo</Link>
                    <Link to="/ai-crm-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI CRM Assistant - $29/mo</Link>
                    <Link to="/ai-email-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Email Marketing - $39/mo</Link>
                    <Link to="/ai-social-media-manager" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Social Media Manager - $32/mo</Link>
                    <Link to="/ai-lead-scoring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Lead Scoring - $28/mo</Link>
                    <Link to="/ai-inventory-manager" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Inventory Manager - $45/mo</Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Specialized Apps</div>
                    <Link to="/ai-health-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Health Tracker - $18/mo</Link>
                    <Link to="/ai-fitness-coach" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Fitness Coach - $24/mo</Link>
                    <Link to="/ai-language-tutor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Language Tutor - $21/mo</Link>
                    <Link to="/ai-music-composer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Music Composer - $49/mo</Link>
                    <Link to="/ai-design-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Design Assistant - $37/mo</Link>
                  </div>
                )}
              </div>

              {/* Enterprise Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('enterprise')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Enterprise
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'enterprise' && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Enterprise Solutions</div>
                    <Link to="/enterprise-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">All Enterprise Solutions</Link>
                    <Link to="/5g-implementation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">5G Implementation - From $25,000</Link>
                    <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Digital Transformation - From $50,000</Link>
                    <Link to="/smart-city-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Smart City Infrastructure - From $100,000</Link>
                    <Link to="/ai-enterprise-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Enterprise Solutions - From $75,000</Link>
                    <Link to="/blockchain-enterprise" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Blockchain Enterprise - From $60,000</Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Industry Solutions</div>
                    <Link to="/healthcare-it" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Healthcare IT - From $40,000</Link>
                    <Link to="/financial-it" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Financial IT - From $45,000</Link>
                    <Link to="/manufacturing-ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Manufacturing AI - From $55,000</Link>
                    <Link to="/retail-technology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Retail Technology - From $35,000</Link>
                    <Link to="/education-technology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Education Technology - From $30,000</Link>
                  </div>
                )}
              </div>

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
            
            {/* AI Services Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">AI Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/ai-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">All AI Services</Link>
                <Link to="/ai-content-generator" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Content Generator - $29/mo</Link>
                <Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Chatbot Builder - $49/mo</Link>
                <Link to="/ai-analytics-dashboard" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Analytics Dashboard - $79/mo</Link>
                <Link to="/ai-email-assistant" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Email Assistant - $39/mo</Link>
                <Link to="/ai-cybersecurity" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Cybersecurity - $199/mo</Link>
                <Link to="/ai-3d-generation" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI 3D Generation - $149/mo</Link>
              </div>
            </div>

            {/* IT Services Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">IT Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/it-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">All IT Services</Link>
                <Link to="/cloud-migration" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Cloud Migration - From $2,500</Link>
                <Link to="/cybersecurity-solutions" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Cybersecurity - From $1,500/mo</Link>
                <Link to="/devops-cicd" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">DevOps & CI/CD - From $3,000</Link>
                <Link to="/data-analytics" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Data Analytics - From $2,000/mo</Link>
                <Link to="/mobile-development" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Mobile Development - From $5,000</Link>
                <Link to="/iot-edge-computing" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">IoT & Edge Computing - From $4,500</Link>
              </div>
            </div>

            {/* Micro SAAS Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">Micro SAAS</div>
              <div className="ml-4 space-y-1">
                <Link to="/micro-saas-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">All Micro SAAS</Link>
                <Link to="/ai-task-manager" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Task Manager - $19/mo</Link>
                <Link to="/ai-expense-tracker" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Expense Tracker - $15/mo</Link>
                <Link to="/ai-password-manager" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Password Manager - $12/mo</Link>
                <Link to="/ai-invoice-generator" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Invoice Generator - $25/mo</Link>
                <Link to="/ai-accounting-assistant" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Accounting Assistant - $35/mo</Link>
                <Link to="/ai-crm-assistant" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI CRM Assistant - $29/mo</Link>
              </div>
            </div>

            {/* Enterprise Solutions Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">Enterprise Solutions</div>
              <div className="ml-4 space-y-1">
                <Link to="/enterprise-solutions" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">All Enterprise Solutions</Link>
                <Link to="/5g-implementation" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">5G Implementation - From $25,000</Link>
                <Link to="/digital-transformation" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Digital Transformation - From $50,000</Link>
                <Link to="/smart-city-infrastructure" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Smart City Infrastructure - From $100,000</Link>
                <Link to="/ai-enterprise-solutions" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Enterprise Solutions - From $75,000</Link>
                <Link to="/healthcare-it" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Healthcare IT - From $40,000</Link>
              </div>
            </div>
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}