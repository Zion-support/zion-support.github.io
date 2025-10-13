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
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

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

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', href: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Automation', href: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: <Settings className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: <Phone className="w-4 h-4" /> }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', href: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', href: '/mobile-development', icon: <Settings className="w-4 h-4" /> },
    { name: 'Database Management', href: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', href: '/custom-software', icon: <Code className="w-4 h-4" /> }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'AI Email Analyzer', href: '/ai-powered-email-analyzer', icon: <Mail className="w-4 h-4" />, featured: true },
    { name: 'Smart Inventory Optimizer', href: '/smart-inventory-optimizer', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'Customer Sentiment Tracker', href: '/ai-customer-sentiment-tracker', icon: <Users className="w-4 h-4" />, featured: true },
    { name: 'Smart Expense Categorizer', href: '/smart-expense-categorizer', icon: <Settings className="w-4 h-4" />, featured: true },
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: <Code className="w-4 h-4" /> }
  ], [])

  const fiveGServices = useMemo(() => [
    { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: <Settings className="w-4 h-4" /> },
    { name: '5G Edge Computing', href: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: <Database className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: <Settings className="w-4 h-4" /> },
    { name: '5G Private Networks', href: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Mobile Applications', href: '/5g-mobile-applications', icon: <Phone className="w-4 h-4" /> }
  ], [])

  const mainPages = useMemo(() => [
    { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Services', href: '/services', icon: <Settings className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
    { name: 'Blog', href: '/blog', icon: <Code className="w-4 h-4" /> }
  ], [])

  const sections = useMemo(() => [
    { 
      id: 'main', 
      title: 'Main Pages', 
      icon: <Home className="w-5 h-5" />, 
      items: mainPages 
    },
    { 
      id: 'ai', 
      title: 'AI Services', 
      icon: <Brain className="w-5 h-5" />, 
      items: aiServices 
    },
    { 
      id: 'it', 
      title: 'IT Services', 
      icon: <Shield className="w-5 h-5" />, 
      items: itServices 
    },
    { 
      id: 'microsaas', 
      title: 'Micro SAAS', 
      icon: <Zap className="w-5 h-5" />, 
      items: microSaasServices 
    },
    { 
      id: '5g', 
      title: '5G Solutions', 
      icon: <Cloud className="w-5 h-5" />, 
      items: fiveGServices 
    }
  ], [mainPages, aiServices, itServices, microSaasServices, fiveGServices])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
          <h2 className="text-xl font-bold text-white">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          <div className="p-6 space-y-6">
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full p-3 text-left text-white hover:bg-cyan-500/10 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    {section.icon}
                    <span className="font-medium">{section.title}</span>
                    {section.id === 'microsaas' && (
                      <Star className="w-4 h-4 text-yellow-400" />
                    )}
                  </div>
                  {expandedSections.has(section.id) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {expandedSections.has(section.id) && (
                  <div className="ml-6 mt-2 space-y-1">
                    {section.items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        onClick={onClose}
                        className={`flex items-center justify-between p-2 rounded-lg transition-colors group ${
                          location.pathname === item.href
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="text-sm">{item.name}</span>
                          {item.featured && (
                            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-1.5 py-0.5 rounded text-xs font-semibold">
                              NEW
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="p-6 border-t border-cyan-500/20 mt-6">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <p>364 E Main St STE 1008</p>
                  <p>Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar