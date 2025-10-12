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
  BarChart,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin
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

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    {
      icon: Brain,
      label: 'AI Services',
      href: '/ai-services',
      children: [
        { label: 'Machine Learning', href: '/ai-services/machine-learning' },
        { label: 'Natural Language Processing', href: '/ai-services/nlp' },
        { label: 'Computer Vision', href: '/ai-services/computer-vision' },
        { label: 'Predictive Analytics', href: '/ai-services/predictive-analytics' }
      ]
    },
    {
      icon: Cloud,
      label: 'Micro SaaS',
      href: '/micro-saas',
      children: [
        { label: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard' },
        { label: 'Task Manager Pro', href: '/micro-saas/task-manager-pro' },
        { label: 'Email Marketing', href: '/micro-saas/email-marketing' },
        { label: 'Social Media Manager', href: '/micro-saas/social-manager' }
      ]
    },
    {
      icon: Shield,
      label: 'IT Services',
      href: '/it-services',
      children: [
        { label: 'Cloud Computing', href: '/it-services/cloud-computing' },
        { label: 'Cybersecurity', href: '/it-services/cybersecurity' },
        { label: 'DevOps', href: '/it-services/devops' },
        { label: 'Database Services', href: '/it-services/database-services' }
      ]
    },
    { icon: BarChart, label: 'Analytics', href: '/analytics' },
    { icon: Users, label: 'About', href: '/about' },
    { icon: Settings, label: 'Settings', href: '/settings' }
  ]

  const contactInfo = [
    { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, label: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, label: '123 Tech Street, Silicon Valley, CA', href: '#' }
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-lg"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:shadow-none`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">Zion Tech Group</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1 rounded-md hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.label.toLowerCase().replace(' ', '-'))}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        <div className="flex items-center">
                          <item.icon className="h-5 w-5 mr-3" />
                          {item.label}
                        </div>
                        {expandedSections.has(item.label.toLowerCase().replace(' ', '-')) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      {expandedSections.has(item.label.toLowerCase().replace(' ', '-')) && (
                        <ul className="ml-8 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                to={child.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors ${
                        location.pathname === item.href ? 'bg-gray-100 font-medium' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="border-t p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <contact.icon className="h-4 w-4 mr-3" />
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Sidebar)