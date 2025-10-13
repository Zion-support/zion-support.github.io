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
    { name: "AI Analytics", path: "/ai-analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "AI Automation", path: "/ai-automation", icon: <Code className="w-4 h-4" /> },
    { name: "AI Business Intelligence", path: "/ai-business-intelligence", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "AI Content Generation", path: "/ai-content-generation", icon: <Code className="w-4 h-4" /> },
    { name: "AI Customer Service", path: "/ai-customer-service", icon: <Users className="w-4 h-4" /> },
    { name: "AI Data Analytics", path: "/ai-data-analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "AI Email Automation", path: "/ai-email-automation", icon: <Mail className="w-4 h-4" /> },
    { name: "AI Fraud Detection", path: "/ai-fraud-detection", icon: <Shield className="w-4 h-4" /> },
    { name: "AI Healthcare", path: "/ai-healthcare", icon: <Star className="w-4 h-4" /> },
    { name: "AI Marketing", path: "/ai-marketing", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "AI Project Management", path: "/ai-project-management", icon: <Settings className="w-4 h-4" /> },
    { name: "AI Recommendation Engine", path: "/ai-recommendation-engine", icon: <Star className="w-4 h-4" /> },
    { name: "AI Sales Automation", path: "/ai-sales-automation", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation", icon: <Code className="w-4 h-4" /> }
  ], [])

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure", icon: <Cloud className="w-4 h-4" /> },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions", icon: <Shield className="w-4 h-4" /> },
    { name: "Web Development", path: "/web-development", icon: <Code className="w-4 h-4" /> },
    { name: "Mobile Development", path: "/code", icon: <Code className="w-4 h-4" /> },
    { name: "Database Management", path: "/database-management", icon: <Database className="w-4 h-4" /> },
    { name: "Custom Software", path: "/custom-software", icon: <Code className="w-4 h-4" /> },
    { name: "Network Infrastructure", path: "/network-infrastructure", icon: <Cloud className="w-4 h-4" /> }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Zion Security Shield", path: "/zion-security-shield", icon: <Shield className="w-4 h-4" /> },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault", icon: <Cloud className="w-4 h-4" /> },
    { name: "Zion Content Studio", path: "/zion-content-studio", icon: <Code className="w-4 h-4" /> }
  ], [])

  const fiveGServices = useMemo(() => [
    { name: "5G Data Analytics", path: "/5g-data-analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "5G Edge Computing", path: "/5g-edge-computing", icon: <Code className="w-4 h-4" /> },
    { name: "5G Implementation", path: "/5g-implementation", icon: <Cloud className="w-4 h-4" /> },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications", icon: <Code className="w-4 h-4" /> },
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure", icon: <Cloud className="w-4 h-4" /> },
    { name: "5G Private Networks", path: "/5g-private-networks", icon: <Shield className="w-4 h-4" /> },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions", icon: <Cloud className="w-4 h-4" /> },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions", icon: <Code className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <Users className="w-4 h-4" /> },
    { name: "Services", path: "/services", icon: <Shield className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <Phone className="w-4 h-4" /> }
  ], [])

  const isActive = (path: string) => location.pathname === path

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation */}
          <div className="space-y-2 mb-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-l-2 border-cyan-400'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
                onClick={onClose}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* AI Services Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('ai-services')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 font-medium text-left"
            >
              <div className="flex items-center space-x-3">
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
              </div>
              {expandedSections.has('ai-services') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.has('ai-services') && (
              <div className="ml-4 mt-2 space-y-1">
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 text-sm"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* IT Services Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('it-services')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 font-medium text-left"
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-4 h-4" />
                <span>IT Services</span>
              </div>
              {expandedSections.has('it-services') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.has('it-services') && (
              <div className="ml-4 mt-2 space-y-1">
                {itServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 text-sm"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Micro SAAS Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('micro-saas')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 font-medium text-left"
            >
              <div className="flex items-center space-x-3">
                <Zap className="w-4 h-4" />
                <span>Micro SAAS</span>
              </div>
              {expandedSections.has('micro-saas') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.has('micro-saas') && (
              <div className="ml-4 mt-2 space-y-1">
                {microSaasServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 text-sm"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 5G Solutions Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('5g-solutions')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 font-medium text-left"
            >
              <div className="flex items-center space-x-3">
                <Cloud className="w-4 h-4" />
                <span>5G Solutions</span>
              </div>
              {expandedSections.has('5g-solutions') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.has('5g-solutions') && (
              <div className="ml-4 mt-2 space-y-1">
                {fiveGServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 text-sm"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-8 p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
