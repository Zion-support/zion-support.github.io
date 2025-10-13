import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  Code,
  Database,
  ChevronDown,
  Menu,
  X,
  SidebarIcon,
  Cpu
} from 'lucide-react'
import FuturisticButton from './FuturisticButton'

interface NavigationProps {
  onSidebarToggle?: () => void
}

const Navigation = React.memo<NavigationProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [isItServicesOpen, setIsItServicesOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen)
  }, [isItServicesOpen])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: Brain },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
    { name: 'AI Customer Service', href: '/ai-customer-service', icon: Users },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart3 },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Star },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Shield },
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart3 },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro', icon: Users },
    { name: 'Zion AI Marketing Automation Pro', href: '/zion-ai-marketing-automation-pro', icon: Star },
    { name: 'Zion AI Project Manager Pro', href: '/zion-ai-project-manager-pro', icon: Monitor },
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Custom Software', href: '/custom-software', icon: Code },
  ], [])

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', href: '/5g-data-analytics', icon: BarChart3 },
    { name: '5G Edge Computing', href: '/5g-edge-computing', icon: Cpu },
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: Globe },
    { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: MapPin },
    { name: '5G Private Networks', href: '/5g-private-networks', icon: Shield },
  ], [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 py-2">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                <Zap className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMicroSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 py-2">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                <Shield className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isItServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isItServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 py-2">
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/5g-solutions"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              5G Solutions
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Contact
            </Link>

            <FuturisticButton
              href="/demo"
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-4 h-4" />}
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            <div className="space-y-4">
              <Link
                to="/about"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div className="space-y-2">
                <button
                  onClick={toggleServices}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium w-full text-left"
                >
                  <Brain className="w-4 h-4" />
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 space-y-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        <service.icon className="w-3 h-3" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium w-full text-left"
                >
                  <Zap className="w-4 h-4" />
                  <span>Micro SAAS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMicroSaasOpen && (
                  <div className="ml-4 space-y-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        <service.icon className="w-3 h-3" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={toggleItServices}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium w-full text-left"
                >
                  <Shield className="w-4 h-4" />
                  <span>IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isItServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isItServicesOpen && (
                  <div className="ml-4 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        <service.icon className="w-3 h-3" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/5g-solutions"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                5G Solutions
              </Link>

              <Link
                to="/contact"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4">
                <FuturisticButton
                  href="/demo"
                  variant="primary"
                  size="sm"
                  icon={<Sparkles className="w-4 h-4" />}
                >
                  Get Started
                </FuturisticButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation