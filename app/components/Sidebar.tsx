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
  Clock,
  Zap,
  Wifi,
  Cpu,
  Database,
  Smartphone,
  BarChart3
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

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const menuSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone },
      ]
    },
    {
      title: 'AI Services',
      key: 'ai-services',
      items: [
        { name: 'AI Services Overview', path: '/ai-services', icon: Brain },
        { name: 'AI Content Generator', path: '/ai-content-generator', icon: Brain },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: Brain },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: BarChart3 },
        { name: 'AI Email Assistant', path: '/ai-email-assistant', icon: Mail },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: Phone },
        { name: 'AI Automation', path: '/ai-automation', icon: Settings },
        { name: 'AI 3D Generation', path: '/ai-3d-generation', icon: Brain },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', icon: Brain },
        { name: 'AI Meeting Assistant', path: '/ai-meeting-assistant', icon: Users },
        { name: 'AI Project Manager', path: '/ai-project-manager', icon: Settings },
        { name: 'AI Code Reviewer', path: '/ai-code-reviewer', icon: Code },
        { name: 'AI Video Editor', path: '/ai-video-editor', icon: Settings },
        { name: 'AI Data Scientist', path: '/ai-data-scientist', icon: BarChart3 },
        { name: 'AI Personal Trainer', path: '/ai-personal-trainer', icon: Users },
      ]
    },
    {
      title: 'IT Services',
      key: 'it-services',
      items: [
        { name: 'IT Services Overview', path: '/it-services', icon: Code },
        { name: 'Web Development', path: '/web-development', icon: Code },
        { name: 'Mobile Development', path: '/mobile-development', icon: Smartphone },
        { name: 'DevOps', path: '/devops', icon: Settings },
        { name: 'Data Analytics', path: '/data-analytics', icon: BarChart3 },
        { name: 'Cloud Services', path: '/cloud-services', icon: Cloud },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
        { name: 'Blockchain Solutions', path: '/blockchain', icon: Database },
        { name: 'Quantum Computing', path: '/quantum-computing-solutions', icon: Cpu },
        { name: 'Quantum Cloud Computing', path: '/quantum-cloud-computing', icon: Cpu },
      ]
    },
    {
      title: '5G Solutions',
      key: '5g-solutions',
      items: [
        { name: '5G Implementation', path: '/5g-implementation', icon: Wifi },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: Settings },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: Smartphone },
        { name: '5G Edge Computing', path: '/5g-edge-computing', icon: Cpu },
        { name: '5G Private Networks', path: '/5g-private-networks', icon: Shield },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: Smartphone },
        { name: '5G Data Analytics', path: '/5g-data-analytics', icon: BarChart3 },
      ]
    },
    {
      title: 'Micro SAAS',
      key: 'micro-saas',
      items: [
        { name: 'AI Task Manager', path: '/ai-task-manager', icon: Settings },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: BarChart3 },
        { name: 'AI Password Manager', path: '/ai-password-manager', icon: Shield },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', icon: Settings },
        { name: 'AI Health Tracker', path: '/ai-health-tracker', icon: Users },
        { name: 'AI Personal Trainer', path: '/ai-personal-trainer', icon: Users },
        { name: 'AI Code Reviewer', path: '/ai-code-reviewer', icon: Code },
        { name: 'AI Video Editor', path: '/ai-video-editor', icon: Settings },
        { name: 'AI Data Scientist', path: '/ai-data-scientist', icon: BarChart3 },
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', icon: Clock },
        { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro', icon: Cloud },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: Settings },
        { name: 'Help Center', path: '/help', icon: Users },
        { name: 'Documentation', path: '/docs', icon: Settings },
        { name: 'Support', path: '/support', icon: Users },
        { name: 'Status', path: '/status', icon: Settings },
        { name: 'SLA', path: '/sla', icon: Settings },
      ]
    }
  ]

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors duration-200"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-80 bg-black/90 backdrop-blur-sm border-r border-white/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
          {menuSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                      isActive(item.path) 
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="border-t border-white/20 p-6">
          <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span className="truncate">{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span className="text-xs">{contactInfo.address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span className="text-xs">{contactInfo.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}

Sidebar.displayName = 'Sidebar'
export default Sidebar