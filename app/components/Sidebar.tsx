'use client'
import React, { memo, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  X,
  Menu,
  Home,
  Users,
  Settings,
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
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
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(section)) {
      newExpanded.delete(section)
    } else {
      newExpanded.add(section)
    }
    setExpandedSections(newExpanded)
  }

  const navigationItems = [
    {
      title: 'AI Services',
      icon: Brain,
      section: 'ai-services',
      items: [
        { name: 'AI Content Generator', path: '/ai-content-generator' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation' },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' }
      ]
    },
    {
      title: 'IT Services',
      icon: Code,
      section: 'it-services',
      items: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd' },
        { name: 'Data Analytics', path: '/data-analytics' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'Quantum Computing', path: '/quantum-computing-solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Cloud,
      section: 'micro-saas',
      items: [
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro' }
      ]
    }
  ]

  const mainNavItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Contact', path: '/contact', icon: Phone }
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900/95 backdrop-blur-lg border-r border-white/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            {/* Main Navigation */}
            <div className="px-6 mb-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main
              </h3>
              <ul className="space-y-1">
                {mainNavItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Navigation */}
            <div className="px-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Services
              </h3>
              <ul className="space-y-1">
                {navigationItems.map((section) => (
                  <li key={section.title}>
                    <button
                      onClick={() => toggleSection(section.section)}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <div className="flex items-center">
                        <section.icon className="w-5 h-5 mr-3" />
                        {section.title}
                      </div>
                      {expandedSections.has(section.section) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {expandedSections.has(section.section) && (
                      <ul className="ml-8 mt-1 space-y-1">
                        {section.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                              className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                                location.pathname === item.path
                                  ? 'bg-purple-600 text-white'
                                  : 'text-gray-400 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-white/20">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
              <Mail className="w-4 h-4" />
              <span>contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default memo(Sidebar)