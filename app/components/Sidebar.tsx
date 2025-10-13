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
    { name: 'AI Analytics', path: '/ai-analytics' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence' },
    { name: 'AI Content Generation', path: '/ai-content-generation' },
    { name: 'AI Customer Service', path: '/ai-customer-service' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics' },
    { name: 'AI Fraud Detection', path: '/ai-fraud-detection' },
    { name: 'AI Healthcare', path: '/ai-healthcare' },
    { name: 'AI Marketing', path: '/ai-marketing' },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics' },
    { name: 'AI Project Management', path: '/ai-project-management' },
    { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine' },
    { name: 'AI Sales Automation', path: '/ai-sales-automation' },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Database Management', path: '/database-management' },
    { name: 'Custom Software', path: '/custom-software' },
    { name: 'Network Infrastructure', path: '/network-infrastructure' },
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
    { name: 'Zion Security Shield', path: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', path: '/zion-content-studio' },
    { name: 'Zion AI Voice Assistant Pro', path: '/zion-ai-voice-assistant-pro' },
    { name: 'Zion AI Workflow Automation Pro', path: '/zion-ai-workflow-automation-pro' },
    { name: 'Zion AI Data Warehouse Pro', path: '/zion-ai-data-warehouse-pro' },
    { name: 'Zion AI Mobile App Builder Pro', path: '/zion-ai-mobile-app-builder-pro' },
  ], [])

  const fiveGServices = useMemo(() => [
    { name: '5G Solutions', path: '/5g-solutions' },
    { name: '5G Data Analytics', path: '/5g-data-analytics' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
    { name: '5G Private Networks', path: '/5g-private-networks' },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Contact', path: '/contact', icon: Phone },
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
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 z-50 lg:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="p-4 space-y-6 overflow-y-auto h-full pb-20">
          {/* Main Navigation */}
          <div className="space-y-2 mb-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* AI Services */}
          <div className="space-y-2">
            <button
              onClick={() => toggleSection('ai')}
              className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5" />
                <span>AI Services</span>
              </div>
              {expandedSections.has('ai') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.has('ai') && (
              <div className="ml-8 space-y-1">
                {aiServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={onClose}
                    className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive(service.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* IT Services */}
          <div className="space-y-2">
            <button
              onClick={() => toggleSection('it')}
              className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5" />
                <span>IT Services</span>
              </div>
              {expandedSections.has('it') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.has('it') && (
              <div className="ml-8 space-y-1">
                {itServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={onClose}
                    className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive(service.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Micro SAAS */}
          <div className="space-y-2">
            <button
              onClick={() => toggleSection('micro')}
              className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5" />
                <span>Micro SAAS</span>
              </div>
              {expandedSections.has('micro') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.has('micro') && (
              <div className="ml-8 space-y-1">
                {microSaasServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={onClose}
                    className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive(service.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 5G Solutions */}
          <div className="space-y-2">
            <button
              onClick={() => toggleSection('5g')}
              className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Database className="w-5 h-5" />
                <span>5G Solutions</span>
              </div>
              {expandedSections.has('5g') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.has('5g') && (
              <div className="ml-8 space-y-1">
                {fiveGServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={onClose}
                    className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive(service.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar