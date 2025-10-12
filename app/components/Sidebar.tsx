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
<<<<<<< HEAD
        setIsOpen(false)}
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)}, [])
  const toggleSection = (section: string) => {const Sidebar: React.FC = () => {const [isOpen, setIsOpen] = useState(false)
  return (
    $3
  )}
        setIsOpen(false)}
=======
        setIsOpen(false)
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
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

<<<<<<< HEAD
    {title: 'Main',
      items: [}
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Services', path: '/services', icon: Settings },
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Blog', path: '/blog', icon: BarChart },
        { name: 'Case Studies', path: '/case-studies', icon: BarChart },
      ]},
    {title: 'AI Services',
      key: 'ai-services',
      items: [}
        { name: 'AI Services Overview', path: '/ai-services', icon: Brain },
        { name: 'Business Intelligence', path: '/ai-services/business-intelligence', icon: BarChart },
        { name: 'Document Processing', path: '/ai-services/document-processing', icon: Settings },
        { name: 'Customer Experience', path: '/ai-services/customer-experience', icon: Users },
        { name: 'Marketing Automation', path: '/ai-services/marketing-automation', icon: Settings },
        { name: 'Predictive Maintenance', path: '/ai-services/predictive-maintenance', icon: Settings },
        { name: 'Supply Chain', path: '/ai-services/supply-chain', icon: Settings },
        { name: 'Fraud Detection', path: '/ai-services/fraud-detection', icon: Shield },
        { name: 'Content Generation', path: '/ai-services/content-generation', icon: Settings },
        { name: 'HR Analytics', path: '/ai-services/hr-analytics', icon: BarChart },
        { name: 'Process Automation', path: '/ai-services/process-automation', icon: Settings },
        { name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield },
        { name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings },
      ]},
    {title: 'Micro SaaS',
      key: 'micro-saas',
      items: [}
        { name: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings },
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart },
        { name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users },
        { name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings },
        { name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail },
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings },
        { name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart },
        { name: 'Document Processor', path: '/micro-saas/document-processor', icon: Settings },
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart },
        { name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings },
      ]},
    {title: 'IT Services',
      key: 'it-services',
      items: [}
        { name: 'IT Services Overview', path: '/it-services', icon: Code },
        { name: 'IT Consulting', path: '/it-consulting', icon: Users },
        { name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings },
        { name: 'IT Support', path: '/it-support', icon: Users },
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud },
        { name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
        { name: 'Database Management', path: '/database-management', icon: Settings },
        { name: 'Managed IT', path: '/managed-it', icon: Settings },
      ]},
    {title: 'Company',
      items: [}
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'Consultation', path: '/consultation', icon: Phone },
        { name: 'Pricing', path: '/pricing', icon: BarChart },
      ]},
    {title: 'Resources',
      items: [}
        { name: 'Documentation', path: '/docs', icon: Settings },
        { name: 'API Docs', path: '/api-docs', icon: Code },
        { name: 'Support', path: '/support', icon: Users },
        { name: 'Status', path: '/status', icon: Settings },
      ]}
  ];const contactInfo = {phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'}
  };return (<></>
      {/* Mobile Menu Button */}
=======
  const isActive = (href: string) => {
    return location.pathname === href
  }

  return (
    <>
      {/* Mobile menu button */}
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
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
<<<<<<< HEAD
          {/* Contact Info */}
          <div className="border-t border-slate-700/50 p-6">
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
      </aside>
    </React.Fragment>
  )}
Sidebar.displayName = 'Sidebar'
export default Sidebar
  </div>
  </string>
            </nav>
          </div>
          {/* Contact Info */}
          <div className="border-t border-slate-700/50 p-6"></div>
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300"></div>
              <div className="flex items-center space-x-3"></div>
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3"></div>
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3"></div>
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3"></div>
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.hours}</span>
              </div>
          </div>
      </aside>
    </>)};Sidebar.displayName = 'Sidebar';export default Sidebar
}
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
