import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from './Icons'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      name: 'AI Services',
      path: '/ai-services',
      dropdown: [
        { name: 'AI Content Generator', path: '/ai-content-generator' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
        { name: 'AI Customer Insights', path: '/ai-customer-insights' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Blockchain Analytics', path: '/ai-blockchain-analytics' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant' },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI Document Processing', path: '/ai-document-processing' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation' },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' },
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite' }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      dropdown: [
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'DevOps Solutions', path: '/devops-solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'API Development', path: '/api-development' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'Network Infrastructure', path: '/network-infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'System Integration', path: '/system-integration' },
        { name: 'Data Analytics', path: '/data-analytics' },
        { name: 'IoT Solutions', path: '/iot-solutions' },
        { name: 'Blockchain Development', path: '/blockchain-development' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-implementation',
      dropdown: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { name: '5G Data Analytics', path: '/5g-data-analytics' }
      ]
    },
    {
      name: 'Micro SaaS',
      path: '/micro-saas-services',
      dropdown: [
        { name: 'AI CRM', path: '/ai-crm' },
        { name: 'Smart Analytics', path: '/smart-analytics' },
        { name: 'AI Automated Testing', path: '/ai-automated-testing' },
        { name: 'AI Project Management', path: '/ai-project-management' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler' },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics' },
        { name: 'Content Generator', path: '/micro-saas/content-generator' },
        { name: 'Document Processor', path: '/micro-saas/document-processor' },
        { name: 'Email Marketing', path: '/micro-saas/email-marketing' },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker' }
      ]
    },
    {
      name: 'Company',
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Careers', path: '/careers' },
        { name: 'News', path: '/news' },
        { name: 'Press', path: '/press' },
        { name: 'Partners', path: '/partners' },
        { name: 'Investors', path: '/investors' },
        { name: 'Community', path: '/community' }
      ]
    },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/20' : 'bg-transparent'
    }`}>
      {/* Neon border effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo with Neon Effect */}
          <Link to="/" className="group flex items-center space-x-2">
            <div className="relative w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Enhanced Dropdown with Neon Effects */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl shadow-cyan-500/20 py-3 z-50 border border-cyan-400/20">
                    <div className="absolute -top-1 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="group/link block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 relative"
                      >
                        <span className="relative z-10">{subItem.name}</span>
                        <div className="absolute left-0 top-0 w-1 h-full bg-cyan-400 scale-y-0 group-hover/link:scale-y-100 transition-transform duration-300 origin-top" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-lg rounded-xl mt-2 border border-cyan-400/20 shadow-2xl shadow-cyan-500/20">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-1 mt-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 text-sm rounded-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}