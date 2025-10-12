import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'

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
        { title: 'AI 3D Generation', href: '/ai-3d-generation' },
        { title: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Server className="w-4 h-4" />,
      description: 'Complete IT solutions',
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'DevOps & CI/CD', href: '/devops-cicd' },
        { title: 'Data Analytics', href: '/data-analytics' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Web Development', href: '/web-development' },
        { title: 'Quantum Computing', href: '/quantum-computing-solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: <Code className="w-4 h-4" />,
      description: 'AI-powered micro applications',
      submenu: [
        { title: 'AI Task Manager', href: '/micro-saas/task-manager-pro' },
        { title: 'AI Expense Tracker', href: '/micro-saas/expense-tracker' },
        { title: 'AI Password Manager', href: '/micro-saas/password-manager' },
        { title: 'AI Invoice Generator', href: '/micro-saas/invoice-generator' },
        { title: 'AI Health Tracker', href: '/micro-saas/health-tracker' },
        { title: 'AI Smart Calendar', href: '/micro-saas/smart-calendar' },
        { title: 'AI Climate Solutions', href: '/ai-climate-solutions-pro' }
      ]
    }
  ]

  const mainNavItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.title}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              {services.map((service) => (
                <div key={service.title} className="relative group">
                  <button
                    onClick={() => toggleDropdown(service.title)}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  >
                    {service.title}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  
                  {activeDropdown === service.title && (
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="p-4">
                        <div className="flex items-center mb-3">
                          {service.icon}
                          <h3 className="ml-2 text-lg font-semibold text-gray-900">{service.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        <div className="grid grid-cols-1 gap-2">
                          {service.submenu.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Link
                            to={service.href}
                            className="block text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All {service.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              
              {services.map((service) => (
                <div key={service.title} className="space-y-1">
                  <div className="flex items-center px-3 py-2 text-gray-300">
                    {service.icon}
                    <span className="ml-2 font-medium">{service.title}</span>
                  </div>
                  <div className="pl-8 space-y-1">
                    {service.submenu.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                    <Link
                      to={service.href}
                      className="text-blue-400 hover:text-blue-300 block px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      View All {service.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
