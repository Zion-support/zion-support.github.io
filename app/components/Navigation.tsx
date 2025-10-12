import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

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
        { name: 'AI Email Assistant', path: '/ai-email-assistant' }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      dropdown: [
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'DevOps', path: '/devops' },
        { name: 'Cloud Migration', path: '/cloud-migration' }
      ]
    },
    {
      name: 'Micro SaaS',
      path: '/micro-saas-services',
      dropdown: [
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard' },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler' },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics' },
        { name: 'Content Generator', path: '/micro-saas/content-generator' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
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
                
                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        {subItem.name}
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block px-3 py-2 text-gray-400 hover:text-white transition-colors text-sm"
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