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

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

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
      href: '/ai-services',
      icon: Brain,
      children: [
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { name: 'AI Task Manager', href: '/ai-task-manager' },
        { name: 'AI Expense Tracker', href: '/ai-expense-tracker' },
        { name: 'AI Password Manager', href: '/ai-password-manager' },
        { name: 'AI Automated Reporting', href: '/ai-automated-reporting' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Code,
      children: [
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: '5G Implementation', href: '/5g-implementation' }
      ]
    },
    {
      name: 'Analytics',
      href: '/analytics',
      icon: BarChart
    },
    {
      name: 'Automation',
      href: '/automation',
      icon: Settings
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
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors duration-200"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-black/90 backdrop-blur-sm border-r border-white/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.href}
                onClick={() => {
                  if (item.children) {
                    toggleSection(item.name.toLowerCase().replace(' ', '-'))
                  } else {
                    setIsOpen(false)
                  }
                }}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 ${
                  isActive(item.href) ? 'bg-white/10 text-white' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </div>
                {item.children && (
                  expandedSections.has(item.name.toLowerCase().replace(' ', '-')) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )
                )}
              </Link>
              
              {item.children && expandedSections.has(item.name.toLowerCase().replace(' ', '-')) && (
                <div className="ml-6 mt-2 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200 ${
                        isActive(child.href) ? 'bg-white/10 text-white' : ''
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="px-4 py-6 border-t border-white/20">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-400">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">New York, NY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}

export default memo(Sidebar)