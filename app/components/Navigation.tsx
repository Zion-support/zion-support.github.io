import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, BarChart3, Lock, Smartphone as Phone, Layers, Bot, FileText, Users, Settings, TrendingUp, Target, Lightbulb, Rocket, Briefcase, Headphones, Mail, Calendar, CreditCard, Key, Search, Monitor, Wrench, Globe2, ShieldCheck, Zap as Lightning, Database as DataIcon, Cpu as Chip, Smartphone as Mobile, Wifi as Network, BarChart3 as Analytics, Lock as Security, Users as Team, Settings as Config, TrendingUp as Growth, Target as Goal, Lightbulb as Innovation, Rocket as Launch, Briefcase as Business, Headphones as Support, Mail as Email, Calendar as Schedule, CreditCard as Payment, Key as Access, Search as Find, Monitor as Screen, Wrench as Tools } from 'lucide-react'

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
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions',
      submenu: [
        { title: 'AI Content Generator', href: '/ai-content-generator' },
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { title: 'AI Email Assistant', href: '/ai-email-assistant' },
        { title: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { title: 'AI Automation', href: '/ai-automation' },
        { title: 'AI Code Assistant', href: '/ai-code-assistant' },
        { title: 'AI Document Processor', href: '/ai-document-processor' },
        { title: 'AI Customer Support', href: '/ai-customer-support' },
        { title: 'AI Business Intelligence', href: '/ai-business-intelligence' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'DevOps & CI/CD', href: '/devops-cicd' },
        { title: 'Data Analytics', href: '/data-analytics' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Web Development', href: '/web-development' },
        { title: 'API Development', href: '/api-development' },
        { title: 'System Integration', href: '/system-integration' },
        { title: 'Database Management', href: '/database-management' },
        { title: 'Network Security', href: '/network-security' }
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Specialized software solutions',
      submenu: [
        { title: 'AI Task Manager', href: '/ai-task-manager' },
        { title: 'AI Expense Tracker', href: '/ai-expense-tracker' },
        { title: 'AI Password Manager', href: '/ai-password-manager' },
        { title: 'AI CRM Assistant', href: '/ai-crm-assistant' },
        { title: 'AI Email Marketing', href: '/ai-email-marketing' },
        { title: 'AI Document Scanner', href: '/ai-document-scanner' },
        { title: 'AI Analytics Suite', href: '/ai-analytics-suite' },
        { title: 'AI Content Studio', href: '/ai-content-studio' },
        { title: 'AI Design Studio', href: '/ai-design-studio' },
        { title: 'AI E-commerce Assistant', href: '/ai-ecommerce-assistant' }
      ]
    },
    {
      title: '5G Solutions',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-generation connectivity',
      submenu: [
        { title: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { title: '5G Edge Computing', href: '/5g-edge-computing' },
        { title: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { title: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { title: '5G Private Networks', href: '/5g-private-networks' },
        { title: '5G Data Analytics', href: '/5g-data-analytics' }
      ]
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud Computing Solutions',
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cloud Security', href: '/cloud-security' },
        { title: 'Cloud Monitoring', href: '/cloud-monitoring' },
        { title: 'Cloud Backup', href: '/cloud-backup' },
        { title: 'Cloud Optimization', href: '/cloud-optimization' }
      ]
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Globe className="w-4 h-4" />,
      description: 'Transform your digital presence',
      submenu: [
        { title: 'Digital Strategy', href: '/digital-strategy' },
        { title: 'Process Automation', href: '/process-automation' },
        { title: 'Data Migration', href: '/data-migration' },
        { title: 'Legacy Modernization', href: '/legacy-modernization' }
      ]
    }
  ]


  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="px-4">
                        <Link
                          to={service.href}
                          className="flex items-center text-gray-900 hover:text-purple-600 transition-colors mb-2"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="mr-3">{service.icon}</div>
                          <div>
                            <div className="font-medium text-sm">{service.title}</div>
                            <div className="text-xs text-gray-500">{service.description}</div>
                          </div>
                        </Link>
                        {service.submenu && (
                          <div className="ml-6 space-y-1">
                            {service.submenu.slice(0, 5).map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                className="block text-xs text-gray-600 hover:text-purple-600 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                            {service.submenu.length > 5 && (
                              <Link
                                to={service.href}
                                className="block text-xs text-purple-600 hover:text-purple-700 transition-colors font-medium"
                                onClick={() => setActiveDropdown(null)}
                              >
                                View all {service.title} →
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-purple-600 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link to="/" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </Link>
              
              {/* Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <div key={index}>
                      <Link
                        to={service.href}
                        className="flex items-center text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="mr-2">{service.icon}</div>
                        {service.title}
                      </Link>
                      {service.submenu && (
                        <div className="ml-6 space-y-1">
                          {service.submenu.slice(0, 3).map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block text-gray-500 hover:text-purple-600 px-3 py-1 rounded-md text-xs"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                          {service.submenu.length > 3 && (
                            <Link
                              to={service.href}
                              className="block text-purple-600 hover:text-purple-700 px-3 py-1 rounded-md text-xs font-medium"
                              onClick={() => setIsOpen(false)}
                            >
                              View all →
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
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