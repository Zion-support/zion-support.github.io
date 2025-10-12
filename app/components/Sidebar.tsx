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
      name: 'Home',
      href: '/',
      icon: Home,
      current: location.pathname === '/'
    },
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      current: location.pathname.startsWith('/ai-services'),
      children: [
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Code,
      current: location.pathname.startsWith('/it-services'),
      children: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'DevOps & CI/CD', href: '/devops' },
        { name: 'Database Services', href: '/database-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: BarChart,
      current: location.pathname.startsWith('/micro-saas'),
      children: [
        { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard' },
        { name: 'Task Manager Pro', href: '/micro-saas/task-manager-pro' },
        { name: 'Email Marketing', href: '/micro-saas/email-marketing' },
        { name: 'Content Generator', href: '/micro-saas/content-generator' }
      ]
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-colors"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <div className="flex items-center">
                  <Link
                    to={item.href}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      item.current
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleSection(item.name.toLowerCase().replace(' ', '-'))}
                      className="ml-auto p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {expandedSections.has(item.name.toLowerCase().replace(' ', '-')) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
                {item.children && expandedSections.has(item.name.toLowerCase().replace(' ', '-')) && (
                  <ul className="mt-2 ml-8 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <Link
                          to={child.href}
                          className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
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