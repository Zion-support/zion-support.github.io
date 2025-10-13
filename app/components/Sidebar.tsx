import React, { useState, useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Users,
  Settings,
  BarChart3,
  Shield,
  Cloud,
  Code,
  Brain,
  Zap,
  Database,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const location = useLocation()

  const toggleSection = useCallback((section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(section)) {
        newSet.delete(section)
      } else {
        newSet.add(section)
      }
      return newSet
    })
  }, [])

  const isActive = useCallback((path: string) => {
    return location.pathname === path
  }, [location.pathname])

  const navigationSections = useMemo(() => [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
        { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
        { name: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4" /> },
      ]
    },
    {
      title: 'AI Services',
      items: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
        { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
        { name: 'AI Marketing', path: '/ai-marketing', icon: <BarChart3 className="w-4 h-4" /> },
      ]
    },
    {
      title: 'IT Services',
      items: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Cybersecurity', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
        { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
        { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
      ]
    },
    {
      title: 'Micro SAAS',
      items: [
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
        { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" /> },
        { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Star className="w-4 h-4" /> },
        { name: 'Zion AI Invoice Generator', path: '/zion-ai-invoice-generator', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Zion AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Users className="w-4 h-4" /> },
        { name: 'Zion AI Email Analyzer', path: '/zion-ai-email-analyzer', icon: <Mail className="w-4 h-4" /> },
        { name: 'Zion Smart Inventory Optimizer', path: '/zion-smart-inventory-optimizer', icon: <Database className="w-4 h-4" /> },
        { name: 'Zion AI Customer Sentiment Tracker', path: '/zion-ai-customer-sentiment-tracker', icon: <Users className="w-4 h-4" /> },
        { name: 'Zion AI Voice Assistant Pro', path: '/zion-ai-voice-assistant-pro', icon: <Phone className="w-4 h-4" /> },
      ]
    },
    {
      title: '5G Solutions',
      items: [
        { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Zap className="w-4 h-4" /> },
        { name: '5G Implementation', path: '/5g-implementation', icon: <Code className="w-4 h-4" /> },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Phone className="w-4 h-4" /> },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Star className="w-4 h-4" /> },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Database className="w-4 h-4" /> },
      ]
    }
  ], [])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900/95 backdrop-blur-sm border-r border-white/10 z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            {navigationSections.map((section) => (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full text-left text-lg font-semibold text-white mb-3 hover:text-cyan-400 transition-colors"
                >
                  <span>{section.title}</span>
                  {expandedSections.has(section.title) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                
                {expandedSections.has(section.title) && (
                  <div className="space-y-1 ml-4">
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          isActive(item.path)
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                        {isActive(item.path) && (
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-sm font-semibold text-white mb-3">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar