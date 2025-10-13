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
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support-chatbot', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Code Assistant', path: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence-pro', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Marketing Automation', path: '/ai-marketing', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Predictive Maintenance', path: '/ai-predictive-maintenance', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'AI Supply Chain Optimization', path: '/ai-supply-chain-optimization', icon: <Database className="w-4 h-4" />, featured: true }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI-Powered DevOps', path: '/ai-powered-devops', icon: <Zap className="w-4 h-4" />, featured: true },
    { name: 'Enterprise AI Platform', path: '/enterprise-ai-platform', icon: <Brain className="w-4 h-4" />, featured: true }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: 'Zion AI Chatbot Builder', path: '/zion-ai-chatbot-builder', icon: <Brain className="w-4 h-4" />, featured: true },
    { name: 'Zion AI Voice Assistant', path: '/zion-ai-voice-assistant', icon: <Zap className="w-4 h-4" />, featured: true },
    { name: 'Zion AI Document Analyzer', path: '/zion-ai-document-analyzer', icon: <Code className="w-4 h-4" />, featured: true },
    { name: 'Zion AI Social Media Manager', path: '/zion-ai-social-media-manager', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion AI Email Marketing Pro', path: '/zion-ai-email-marketing-pro', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion AI Customer Insights', path: '/zion-ai-customer-insights', icon: <BarChart3 className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Settings className="w-4 h-4" /> },
    { name: 'Pricing', path: '/pricing', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Case Studies', path: '/case-studies', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <Brain className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4" /> }
  ], [])

  const contactInfo = useMemo(() => [
    { icon: <Mail className="w-4 h-4" />, text: 'kleber@ziontechgroup.com' },
    { icon: <Phone className="w-4 h-4" />, text: '+1 302 464 0950' },
    { icon: <MapPin className="w-4 h-4" />, text: '364 E Main St STE 1008, Middletown DE 19709' }
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
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
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
              <div className="ml-6 mt-2 space-y-1">
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(service.path)
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5'
                    }`}
                    onClick={onClose}
                  >
                    {service.icon}
                    <span className="text-sm">{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* IT Services Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('it-services')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 font-medium text-left"
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-4 h-4" />
                <span>IT Services</span>
              </div>
              {expandedSections.has('it-services') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            
            {expandedSections.has('it-services') && (
              <div className="ml-6 mt-2 space-y-1">
                {itServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(service.path)
                        ? 'bg-green-500/10 text-green-400'
                        : 'text-gray-400 hover:text-green-400 hover:bg-green-500/5'
                    }`}
                    onClick={onClose}
                  >
                    {service.icon}
                    <span className="text-sm">{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Micro SAAS Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('micro-saas')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 font-medium text-left"
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
              <div className="ml-6 mt-2 space-y-1">
                {microSaasServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(service.path)
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'text-gray-400 hover:text-purple-400 hover:bg-purple-500/5'
                    }`}
                    onClick={onClose}
                  >
                    {service.icon}
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-sm">{service.name}</span>
                      {service.featured && (
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 5G Solutions Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('5g-solutions')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300 font-medium text-left"
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
              <div className="ml-6 mt-2 space-y-1">
                <Link
                  to="/5g-solutions"
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/5g-solutions')
                      ? 'bg-orange-500/10 text-orange-400'
                      : 'text-gray-400 hover:text-orange-400 hover:bg-orange-500/5'
                  }`}
                  onClick={onClose}
                >
                  <Cloud className="w-4 h-4" />
                  <span className="text-sm">5G Solutions Overview</span>
                </Link>
                <Link
                  to="/5g-data-analytics"
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/5g-data-analytics')
                      ? 'bg-orange-500/10 text-orange-400'
                      : 'text-gray-400 hover:text-orange-400 hover:bg-orange-500/5'
                  }`}
                  onClick={onClose}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-sm">5G Data Analytics</span>
                </Link>
                <Link
                  to="/5g-edge-computing"
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/5g-edge-computing')
                      ? 'bg-orange-500/10 text-orange-400'
                      : 'text-gray-400 hover:text-orange-400 hover:bg-orange-500/5'
                  }`}
                  onClick={onClose}
                >
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">5G Edge Computing</span>
                </Link>
                <Link
                  to="/5g-smart-city-solutions"
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/5g-smart-city-solutions')
                      ? 'bg-orange-500/10 text-orange-400'
                      : 'text-gray-400 hover:text-orange-400 hover:bg-orange-500/5'
                  }`}
                  onClick={onClose}
                >
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">5G Smart City Solutions</span>
                </Link>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact Info</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-5 h-5 text-cyan-400">{info.icon}</div>
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Link
              to="/consultation"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-cyan-500/25 group"
              onClick={onClose}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar