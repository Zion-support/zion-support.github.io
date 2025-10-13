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
  DollarSign,
  Package,
  Globe,
  Leaf,
  Heart,
  Truck,
  Mic,
  TrendingUp,
  Target,
  Lock,
  CheckCircle,
  Award,
  Clock
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

  const mainNavigation = useMemo(() => [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Settings className="w-4 h-4" /> },
    { name: 'Pricing', path: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <Award className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4" /> },
  ], [])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Climate Optimizer', path: '/zion-ai-climate-optimizer', icon: <Leaf className="w-4 h-4" /> },
    { name: 'AI Mental Health Assistant', path: '/zion-ai-mental-health-assistant', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Supply Chain Predictor', path: '/zion-ai-supply-chain-predictor', icon: <Truck className="w-4 h-4" /> },
    { name: 'AI Voice Analytics', path: '/zion-ai-voice-analytics', icon: <Mic className="w-4 h-4" /> },
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Globe className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: <Mail className="w-4 h-4" /> },
    { name: 'Zion Workflow Automation', path: '/zion-workflow-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion Invoice Genius', path: '/zion-invoice-genius', icon: <DollarSign className="w-4 h-4" /> },
  ], [])

  const fiveGServices = useMemo(() => [
    { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Award className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
  ], [])

  const supportLinks = useMemo(() => [
    { name: 'Help Center', path: '/help', icon: <Users className="w-4 h-4" /> },
    { name: 'Documentation', path: '/docs', icon: <Code className="w-4 h-4" /> },
    { name: 'Tutorials', path: '/tutorials', icon: <Award className="w-4 h-4" /> },
    { name: 'Demo', path: '/demo', icon: <Star className="w-4 h-4" /> },
    { name: 'Support', path: '/support', icon: <Phone className="w-4 h-4" /> },
  ], [])

  const isActive = useCallback((path: string) => {
    return location.pathname === path
  }, [location.pathname])

  const renderSection = useCallback((
    title: string,
    items: Array<{ name: string; path: string; icon: React.ReactNode }>,
    sectionKey: string
  ) => {
    const isExpanded = expandedSections.has(sectionKey)
    
    return (
      <div className="mb-4">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white transition-colors"
        >
          <span className="font-medium">{title}</span>
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        
        {isExpanded && (
          <div className="ml-4 space-y-1">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }, [expandedSections, toggleSection, isActive, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900 border-r border-slate-700 z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Navigation */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Main Navigation
            </h3>
            <div className="space-y-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services Sections */}
          <div className="space-y-4">
            {renderSection('AI Services', aiServices, 'ai-services')}
            {renderSection('IT Services', itServices, 'it-services')}
            {renderSection('Micro SAAS', microSaasServices, 'micro-saas')}
            {renderSection('5G Solutions', fiveGServices, '5g-services')}
            {renderSection('Support', supportLinks, 'support')}
          </div>

          {/* Contact Information */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <div className="text-sm">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar