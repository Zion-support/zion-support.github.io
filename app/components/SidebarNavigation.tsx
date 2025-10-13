import React, { useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  ChevronRight, 
  Home, 
  Users, 
  Settings, 
  DollarSign, 
  FileText, 
  BookOpen, 
  Briefcase, 
  MessageCircle,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  BarChart3,
  Code,
  Database,
  Star
} from 'lucide-react'

const SidebarNavigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const location = useLocation()

  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleSection = useCallback((section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }, [])

  const isActive = useCallback((path: string) => {
    return location.pathname === path
  }, [location.pathname])

  const mainNavItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Settings className="w-5 h-5" /> },
    { name: 'Pricing', path: '/pricing', icon: <DollarSign className="w-5 h-5" /> },
    { name: 'Case Studies', path: '/case-studies', icon: <FileText className="w-5 h-5" /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Careers', path: '/careers', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <MessageCircle className="w-5 h-5" /> }
  ]

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <MessageCircle className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Project Management', path: '/ai-project-management', icon: <Settings className="w-4 h-4" /> }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Settings className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Settings className="w-4 h-4" /> },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: <Zap className="w-4 h-4" /> }
  ]

  const fiveGServices = [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Settings className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Settings className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> }
  ]

  const resources = [
    { name: 'Tutorials', path: '/tutorials', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Demo', path: '/demo', icon: <Settings className="w-4 h-4" /> },
    { name: 'Support', path: '/support', icon: <MessageCircle className="w-4 h-4" /> },
    { name: 'Consultation', path: '/consultation', icon: <MessageCircle className="w-4 h-4" /> }
  ]

  const sections = [
    { id: 'ai-services', title: 'AI Services', items: aiServices, icon: <Brain className="w-5 h-5" /> },
    { id: 'it-services', title: 'IT Services', items: itServices, icon: <Settings className="w-5 h-5" /> },
    { id: 'micro-saas', title: 'Micro SAAS', items: microSaasServices, icon: <Zap className="w-5 h-5" /> },
    { id: '5g-solutions', title: '5G Solutions', items: fiveGServices, icon: <Globe className="w-5 h-5" /> },
    { id: 'resources', title: 'Resources', items: resources, icon: <BookOpen className="w-5 h-5" /> }
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-slate-800/90 backdrop-blur-md text-white p-3 rounded-lg shadow-lg hover:bg-slate-700/90 transition-all duration-300"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-500/20 
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-4 space-y-2">
              {/* Main Navigation */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3 px-2">
                  Main Navigation
                </h3>
                <div className="space-y-1">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`
                        flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 group
                        ${isActive(item.path) 
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-l-2 border-cyan-400' 
                          : 'text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400'
                        }
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service Sections */}
              {sections.map((section) => (
                <div key={section.id} className="mb-6">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center justify-between w-full px-2 py-2 text-left text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      {section.icon}
                      <span className="font-medium">{section.title}</span>
                    </div>
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedSections.includes(section.id) ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  {expandedSections.includes(section.id) && (
                    <div className="ml-6 mt-2 space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`
                            flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 group
                            ${isActive(item.path) 
                              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400' 
                              : 'text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400'
                            }
                          `}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.icon}
                          <span className="text-sm">{item.name}</span>
                          {item.featured && (
                            <Star className="w-3 h-3 text-yellow-400 fill-current ml-auto" />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-cyan-500/20">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">
                © {new Date().getFullYear()} Zion Tech Group
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/privacy"
                  className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Terms
                </Link>
                <Link
                  to="/cookies"
                  className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
})

SidebarNavigation.displayName = 'SidebarNavigation'

export default SidebarNavigation