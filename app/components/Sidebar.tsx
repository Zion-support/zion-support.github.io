'use client'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react'

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']))
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(section)) {
        newSet.delete(section)
      } else {
        newSet.add(section)
      }
      return newSet
    })
  }

  const navigationItems = [
    {
      title: 'AI Services',
      section: 'ai-services',
      items: [
        { name: 'AI Solutions', path: '/ai-solutions' },
        { name: 'Machine Learning', path: '/machine-learning' },
        { name: 'Natural Language Processing', path: '/nlp' },
        { name: 'Computer Vision', path: '/computer-vision' }
      ]
    },
    {
      title: 'Micro SaaS',
      section: 'micro-saas',
      items: [
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard' },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler' },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics' },
        { name: 'Content Generator', path: '/micro-saas/content-generator' }
      ]
    },
    {
      title: 'IT Services',
      section: 'it-services',
      items: [
        { name: 'IT Consulting', path: '/it-consulting' },
        { name: 'Database Services', path: '/database-services' },
        { name: 'DevOps', path: '/devops' },
        { name: 'Cybersecurity', path: '/cybersecurity' }
      ]
    }
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-slate-700">
            <Link to="/" className="text-2xl font-bold text-white">
              Zion Tech
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigationItems.map((section) => (
              <div key={section.section}>
                <button
                  onClick={() => toggleSection(section.section)}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:bg-slate-700/50 rounded-md transition-colors"
                >
                  <span className="font-medium">{section.title}</span>
                  {expandedSections.has(section.section) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                
                {expandedSections.has(section.section) && (
                  <div className="ml-4 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors ${
                          location.pathname === item.path ? 'bg-slate-700/50 text-white' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="p-4 border-t border-slate-700">
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@ziontech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar