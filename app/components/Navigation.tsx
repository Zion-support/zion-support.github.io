import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Network, Bot, BarChart3, Settings, Rocket, Lock, Wifi, BarChart, Users, Mail, Phone, MapPin } from 'lucide-react'

const Navigation: React.FC = () => {
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

  const navigationItems = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: Brain,
      dropdown: [
        { name: 'AI Content Generator', path: '/ai-content-generation' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation' },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' },
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite' },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI Document Processing', path: '/ai-document-processing' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant' }
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
        { name: 'Database Management', path: '/database-management' },
        { name: 'System Integration', path: '/system-integration' },
        { name: 'IT Consulting', path: '/it-consulting' },
        { name: 'Network Infrastructure', path: '/network-infrastructure' }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas-services',
      icon: Code,
      dropdown: [
        { name: 'AI-Powered CRM', path: '/ai-crm' },
        { name: 'Smart Analytics', path: '/smart-analytics' },
        { name: 'Automated Testing', path: '/ai-automated-testing' },
        { name: 'Content Management', path: '/ai-content-management' },
        { name: 'Email Marketing', path: '/ai-email-marketing' },
        { name: 'Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'Project Management', path: '/ai-project-management' },
        { name: 'Customer Support', path: '/ai-customer-support' },
        { name: 'Invoice Generator', path: '/ai-invoice-generator' },
        { name: 'Task Manager', path: '/ai-task-manager' }
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
  ];

  const simpleLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pricing', path: '/pricing' }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
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
                            onClick={closeDropdown}
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
                          onClick={closeDropdown}
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

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
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
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    className="flex items-center w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-auto" />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={dropdownItem.path}
                          className="block px-3 py-2 text-gray-400 hover:text-white rounded-md text-sm"
                          onClick={() => {
                            setIsOpen(false)
                            setActiveDropdown(null)
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                      <Link
                        to={item.path}
                        className="block px-3 py-2 text-purple-400 hover:text-purple-300 rounded-md text-sm font-medium"
                        onClick={() => {
                          setIsOpen(false)
                          setActiveDropdown(null)
                        }}
                      >
                        View All {item.name}
                      </Link>
                    </div>
                  )}
                </div>
              ))}
              
              {simpleLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-gray-300 hover:text-white rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 mt-4"
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

export default Navigation
