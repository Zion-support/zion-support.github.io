'use client'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  Home, 
  Users, 
  Settings, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Zap, 
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  }

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/',
      icon: Home,
      current: location.pathname === '/'
    },
    {
      name: 'AI Services',
      icon: Brain,
      children: [
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Marketing Automation', href: '/ai-marketing' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' }
      ]
    },
    {
      name: 'IT Services',
      icon: Code,
      children: [
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Cloud Solutions', href: '/cloud-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps & CI/CD', href: '/devops' },
        { name: 'Database Management', href: '/database' }
      ]
    },
    {
      name: 'Micro SaaS',
      icon: Zap,
      children: [
        { name: 'Lead Generation', href: '/micro-saas/lead-scoring' },
        { name: 'Email Marketing', href: '/micro-saas/email-marketing' },
        { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard' },
        { name: 'Content Generator', href: '/micro-saas/content-generator' },
        { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler' },
        { name: 'Support Bot', href: '/micro-saas/support-bot' }
      ]
    },
    {
      name: 'Analytics',
      href: '/analytics',
      icon: BarChart,
      current: location.pathname === '/analytics'
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: Settings,
      current: location.pathname === '/settings'
    }
  ]

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-white shadow-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      item.current
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleSection(item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                      </div>
                      {expandedSections.includes(item.name) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.includes(item.name) && item.children && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
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

          {/* User section */}
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">admin@ziontech.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;