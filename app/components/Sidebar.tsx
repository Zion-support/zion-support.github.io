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
  MapPin,
  Globe,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  FileText
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
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Phone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Settings className="w-4 h-4" /> },
  ], [])

  const microSaas = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <FileText className="w-4 h-4" /> },
    { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Package className="w-4 h-4" /> },
    { name: 'Zion AI Invoice Generator', path: '/zion-ai-invoice-generator', icon: <Receipt className="w-4 h-4" /> },
  ], [])

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Network className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Phone className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
  ], [])

  const mainPages = useMemo(() => [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4" /> },
  ], [])

  const isActive = useCallback((path: string) => {
    return location.pathname === path
  }, [location.pathname])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-cyan-500/20 shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="space-y-2 px-4">
              {/* Main Pages */}
              <div className="space-y-1">
                {mainPages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.path}
                    onClick={onClose}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive(page.path) 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {page.icon}
                    <span className="font-medium">{page.name}</span>
                  </Link>
                ))}
              </div>

              {/* AI Services */}
              <div className="pt-4">
                <button
                  onClick={() => toggleSection('ai')}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Brain className="w-4 h-4" />
                    <span className="font-medium">AI Services</span>
                  </div>
                  {expandedSections.has('ai') ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {expandedSections.has('ai') && (
                  <div className="ml-4 mt-2 space-y-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={onClose}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive(service.path) 
                            ? 'bg-cyan-500/20 text-cyan-400' 
                            : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        {service.icon}
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services */}
              <div>
                <button
                  onClick={() => toggleSection('it')}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Shield className="w-4 h-4" />
                    <span className="font-medium">IT Services</span>
                  </div>
                  {expandedSections.has('it') ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {expandedSections.has('it') && (
                  <div className="ml-4 mt-2 space-y-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={onClose}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive(service.path) 
                            ? 'bg-cyan-500/20 text-cyan-400' 
                            : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        {service.icon}
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Micro SAAS */}
              <div>
                <button
                  onClick={() => toggleSection('micro')}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Zap className="w-4 h-4" />
                    <span className="font-medium">Micro SAAS</span>
                  </div>
                  {expandedSections.has('micro') ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {expandedSections.has('micro') && (
                  <div className="ml-4 mt-2 space-y-1">
                    {microSaas.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={onClose}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive(service.path) 
                            ? 'bg-cyan-500/20 text-cyan-400' 
                            : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        {service.icon}
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 5G Solutions */}
              <div>
                <button
                  onClick={() => toggleSection('5g')}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4" />
                    <span className="font-medium">5G Solutions</span>
                  </div>
                  {expandedSections.has('5g') ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {expandedSections.has('5g') && (
                  <div className="ml-4 mt-2 space-y-1">
                    {fiveGServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={onClose}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive(service.path) 
                            ? 'bg-cyan-500/20 text-cyan-400' 
                            : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        {service.icon}
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-cyan-500/20">
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar