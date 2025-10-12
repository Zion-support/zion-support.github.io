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
      name: 'Home',
      href: '/',
      icon: Home,
      current: location.pathname === '/'
    },
    {
      name: 'AI Services',
      section: 'ai-services',
      icon: Brain,
      children: [
        { name: 'AI Consulting', href: '/ai-consulting' },
        { name: 'Machine Learning', href: '/machine-learning' },
        { name: 'Natural Language Processing', href: '/nlp' },
        { name: 'Computer Vision', href: '/computer-vision' },
        { name: 'Predictive Analytics', href: '/predictive-analytics' }
      ]
    },
    {
      name: 'Micro SaaS',
      section: 'micro-saas',
      icon: Cloud,
      children: [
        { name: 'SaaS Development', href: '/saas-development' },
        { name: 'API Integration', href: '/api-integration' },
        { name: 'Cloud Solutions', href: '/cloud-solutions' },
        { name: 'Scalable Architecture', href: '/scalable-architecture' }
      ]
    },
    {
      name: 'IT Services',
      section: 'it-services',
      icon: Code,
      children: [
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Apps', href: '/mobile-apps' },
        { name: 'Database Design', href: '/database-design' },
        { name: 'DevOps', href: '/devops' },
        { name: 'Cybersecurity', href: '/cybersecurity' }
      ]
    },
    {
      name: 'Analytics',
      href: '/analytics',
      icon: BarChart,
      current: location.pathname === '/analytics'
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      current: location.pathname === '/about'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone,
      current: location.pathname === '/contact'
    }
  ]

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <X className="block h-6 w-6" />
          ) : (
            <Menu className="block h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 bg-gray-800">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">Zion Tech</h1>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-5 px-2 space-y-1">
          {navigationItems.map((item) => (
            <div key={item.name}>
              {item.href ? (
                <Link
                  to={item.href}
                  className={`${
                    item.current
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => toggleSection(item.section!)}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full"
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                    {expandedSections.has(item.section!) ? (
                      <ChevronDown className="ml-auto h-4 w-4" />
                    ) : (
                      <ChevronRight className="ml-auto h-4 w-4" />
                    )}
                  </button>
                  {expandedSections.has(item.section!) && (
                    <div className="ml-4 space-y-1">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
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
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800">
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-300">
              <Phone className="h-4 w-4 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@ziontech.com</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <MapPin className="h-4 w-4 mr-2" />
              <span>New York, NY</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Clock className="h-4 w-4 mr-2" />
              <span>Mon-Fri 9AM-6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default memo(Sidebar)