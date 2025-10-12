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
      title: 'Home',
      href: '/',
      icon: Home
    },
    {
      title: 'About',
      href: '/about',
      icon: Users
    },
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      children: [
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Task Manager', href: '/ai-task-manager' },
        { title: 'AI Expense Tracker', href: '/ai-expense-tracker' },
        { title: 'AI Password Manager', href: '/ai-password-manager' },
        { title: 'AI Automated Reporting', href: '/ai-automated-reporting' }
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas',
      icon: Code,
      children: [
        { title: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard' },
        { title: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler' },
        { title: 'Chat Analytics', href: '/micro-saas/chat-analytics' },
        { title: 'Content Generator', href: '/micro-saas/content-generator' },
        { title: 'Document Processor', href: '/micro-saas/document-processor' },
        { title: 'Email Marketing', href: '/micro-saas/email-marketing' },
        { title: 'Expense Tracker', href: '/micro-saas/expense-tracker' },
        { title: 'Inventory Management', href: '/micro-saas/inventory-management' },
        { title: 'Lead Scoring', href: '/micro-saas/lead-scoring' },
        { title: 'SEO Optimizer', href: '/micro-saas/seo-optimizer' },
        { title: 'Social Manager', href: '/micro-saas/social-manager' },
        { title: 'Support Bot', href: '/micro-saas/support-bot' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Settings,
      children: [
        { title: 'Cloud Solutions', href: '/cloud-solutions' },
        { title: 'Cybersecurity', href: '/cybersecurity' },
        { title: 'Data Analytics', href: '/data-analytics' },
        { title: 'DevOps', href: '/devops' },
        { title: 'Enterprise Security', href: '/enterprise-security' },
        { title: 'IT Consulting', href: '/it-consulting' }
      ]
    },
    {
      title: '5G Solutions',
      href: '/5g-solutions',
      icon: Cloud,
      children: [
        { title: '5G Data Analytics', href: '/5g-data-analytics' },
        { title: '5G Edge Computing', href: '/5g-edge-computing' },
        { title: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { title: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { title: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { title: '5G Private Networks', href: '/5g-private-networks' }
      ]
    },
    {
      title: 'Pricing',
      href: '/pricing',
      icon: BarChart
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ]

  const renderMenuItem = (item: any) => {
    const isActive = location.pathname === item.href
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedSections.has(item.title.toLowerCase().replace(/\s+/g, '-'))

    return (
      <div key={item.title}>
        <div
          className={`flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer ${
            isActive ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500' : ''
          }`}
          onClick={() => hasChildren && toggleSection(item.title.toLowerCase().replace(/\s+/g, '-'))}
        >
          <div className="flex items-center">
            <item.icon className="w-5 h-5 mr-3" />
            <span className="font-medium">{item.title}</span>
          </div>
          {hasChildren && (
            <div className="ml-2">
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </div>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="ml-8 border-l border-gray-200">
            {item.children.map((child: any) => (
              <Link
                key={child.title}
                to={child.href}
                className={`block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 ${
                  location.pathname === child.href ? 'text-blue-600 font-medium' : ''
                }`}
              >
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
      >
        <Menu className="w-6 h-6" />
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
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Zion Tech Group</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-4">
          {menuItems.map(renderMenuItem)}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Contact Info</h3>
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex items-center">
                <Phone className="w-3 h-3 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center">
                <Mail className="w-3 h-3 mr-2" />
                contact@ziontechgroup.com
              </div>
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-2" />
                Innovation City, IC
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Sidebar)