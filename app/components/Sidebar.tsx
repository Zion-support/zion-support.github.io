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

  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'AI Services',
      section: 'ai-services',
      icon: Brain,
      children: [
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI Data Visualizer', href: '/ai-data-visualizer' },
        { name: 'AI Document Intelligence', href: '/ai-document-intelligence' },
        { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting' },
        { name: 'AI Fraud Detection', href: '/ai-fraud-detection' },
        { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
        { name: 'AI Image Recognition', href: '/ai-image-recognition' },
        { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling' },
        { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis' },
        { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis' },
        { name: 'AI Video Analysis', href: '/ai-video-analysis' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant' }
      ]
    },
    {
      name: 'Micro SaaS',
      section: 'micro-saas',
      icon: Code,
      children: [
        { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
        { name: 'Expense Tracker Pro', href: '/expense-tracker-pro' },
        { name: 'Inventory Manager', href: '/inventory-manager' },
        { name: 'Task Manager Pro', href: '/task-manager-pro' },
        { name: 'Social Media Scheduler', href: '/social-media-scheduler' }
      ]
    },
    {
      name: 'IT Services',
      section: 'it-services',
      icon: Settings,
      children: [
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'API Development', href: '/api-development' },
        { name: 'Cloud Solutions', href: '/cloud-solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'DevOps Automation', href: '/devops-automation' },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
        { name: 'IoT Solutions', href: '/iot-solutions' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ]

  const isActive = (href: string) => {
    return location.pathname === href
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white hover:bg-slate-700/50 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900/95 backdrop-blur-sm border-r border-slate-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-slate-700">
            <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span>Zion Tech</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleSection(item.section!)}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>
                      {expandedSections.has(item.section!) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {expandedSections.has(item.section!) && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                              isActive(child.href)
                                ? 'bg-purple-600 text-white'
                                : 'text-gray-400 hover:bg-slate-800 hover:text-white'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="p-4 border-t border-slate-700">
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1-555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default memo(Sidebar)