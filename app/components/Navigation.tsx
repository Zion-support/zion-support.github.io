import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Brain, Cloud, Shield, Code, Wifi, BarChart3, Bot, Settings, Rocket, Lock, Database, Globe, Cpu, Network } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const navigationItems = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: Brain,
      color: 'text-blue-400',
      dropdown: [
        { name: 'AI Content Generator', path: '/ai-content-generator' },
        { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation' },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' },
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite' },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Document Processing', path: '/ai-document-processing' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant' }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: Cloud,
      color: 'text-green-400',
      dropdown: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'DevOps Solutions', path: '/devops' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Database Services', path: '/database-services' },
        { name: 'Enterprise Security', path: '/enterprise-security' },
        { name: 'Data Center Solutions', path: '/data-center' },
        { name: 'IoT Edge Computing', path: '/iot-edge-computing' },
        { name: 'Smart City Infrastructure', path: '/smart-city-infrastructure' },
        { name: 'Robotics Solutions', path: '/robotics' }
      ]
    },
    {
      name: 'Micro SaaS',
      path: '/micro-saas',
      icon: Code,
      color: 'text-purple-400',
      dropdown: [
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard' },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler' },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics' },
        { name: 'Content Generator', path: '/micro-saas/content-generator' },
        { name: 'Document Processor', path: '/micro-saas/document-processor' },
        { name: 'Email Marketing', path: '/micro-saas/email-marketing' },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker' },
        { name: 'Inventory Management', path: '/micro-saas/inventory-management' },
        { name: 'Lead Scoring', path: '/micro-saas/lead-scoring' },
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer' },
        { name: 'Social Manager', path: '/micro-saas/social-manager' },
        { name: 'Support Bot', path: '/micro-saas/support-bot' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-implementation',
      icon: Wifi,
      color: 'text-cyan-400',
      dropdown: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Data Analytics', path: '/5g-data-analytics' }
      ]
    }
  ]

  const simpleLinks = [
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-cyan-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-2 text-gray-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl z-50 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <item.icon className={`w-6 h-6 ${item.color} mr-3`} />
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.path}
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 rounded-lg transition-all duration-300 group/item"
                          >
                            <span className="group-hover/item:translate-x-2 transition-transform duration-300">
                              {dropdownItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-cyan-500/20">
                        <Link
                          to={item.path}
                          className="block w-full text-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                        >
                          View All {item.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {simpleLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-white/10"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-gray-400 hover:text-white rounded-lg transition-colors duration-300 hover:bg-white/5"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {simpleLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
