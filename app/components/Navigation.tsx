import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Brain, Cloud, Code, Wifi, Zap } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigationItems = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: Brain,
      dropdown: [
        { name: 'AI Content Generator', path: '/ai-content-generator' },
        { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation' },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' },
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite' }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: Cloud,
      dropdown: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'DevOps Solutions', path: '/devops-solutions' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'API Development', path: '/api-development' },
        { name: 'Data Analytics', path: '/data-analytics' }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: Code,
      dropdown: [
        { name: 'AI Content Generator Pro', path: '/micro-saas/ai-content-generator-pro' },
        { name: 'AI CRM Assistant', path: '/micro-saas/ai-crm-assistant' },
        { name: 'AI Expense Tracker', path: '/micro-saas/ai-expense-tracker' },
        { name: 'AI Social Media Manager', path: '/micro-saas/ai-social-media-manager' },
        { name: 'AI Email Marketing', path: '/micro-saas/ai-email-marketing-automation' },
        { name: 'AI Project Manager', path: '/micro-saas/ai-project-manager' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-implementation',
      icon: Wifi,
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
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className="flex items-center text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl z-50">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <item.icon className="w-5 h-5 mr-2" />
                          {item.name}
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.path}
                              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
                            >
                              <span className="group-hover:translate-x-2 transition-transform duration-300">
                                {dropdownItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <Link
                            to={item.path}
                            className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
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
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-6 space-y-1 bg-gray-900/95 backdrop-blur-lg border-t border-white/10">
            {navigationItems.map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="flex items-center text-gray-300 px-3 py-2 text-base font-medium">
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </div>
                <div className="ml-8 space-y-1">
                  {item.dropdown.map((dropdownItem, index) => (
                    <Link
                      key={index}
                      to={dropdownItem.path}
                      className="block text-gray-400 hover:text-white px-3 py-2 rounded-lg text-sm transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                  <Link
                    to={item.path}
                    className="block text-purple-400 hover:text-purple-300 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    View All {item.name} →
                  </Link>
                </div>
              </div>
            ))}
            
            {simpleLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation