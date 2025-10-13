import React, { useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  Cpu,
  Network,
  FileText,
  Clock,
  Rocket,
  Mic,
  Atom,
  Target,
  TrendingUp,
  Settings,
  Wifi,
  Headphones
} from 'lucide-react'

interface NavigationProps {
  onSidebarToggle?: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [isItServicesOpen, setIsItServicesOpen] = useState(false)
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(!isAIServicesOpen)
  }, [isAIServicesOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen)
  }, [isItServicesOpen])

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen)
  }, [is5GServicesOpen])

  const isActive = useCallback((path: string) => {
    return location.pathname === path
  }, [location.pathname])

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Voice Cloning Studio', path: '/ai-voice-cloning-studio', icon: <Mic className="w-4 h-4" /> },
    { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI Space Mission Optimizer', path: '/ai-space-mission-optimizer', icon: <Rocket className="w-4 h-4" /> },
    { name: 'AI Healthcare Diagnostics', path: '/ai-healthcare-diagnostics', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Supply Chain Optimizer', path: '/ai-supply-chain-optimizer', icon: <Network className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'Zion AI Neural Interface', path: '/zion-ai-neural-interface', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <FileText className="w-4 h-4" /> }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Quantum Computing Solutions', path: '/quantum-computing-solutions', icon: <Atom className="w-4 h-4" /> }
  ]

  const fiveGServices = [
    { name: '5G Implementation', path: '/5g-implementation', icon: <Wifi className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Network className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ]

  return (
    <nav className="relative z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-purple-400 bg-purple-900/20' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-purple-400 bg-purple-900/20' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                About
              </Link>

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAIServices}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                >
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isAIServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700/50 py-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                        onClick={() => setIsAIServicesOpen(false)}
                      >
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                >
                  Micro SAAS
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isMicroSaasOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700/50 py-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                        onClick={() => setIsMicroSaasOpen(false)}
                      >
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleItServices}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                >
                  IT Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isItServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700/50 py-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                        onClick={() => setIsItServicesOpen(false)}
                      >
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 5G Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={toggle5GServices}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                >
                  5G Solutions
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {is5GServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700/50 py-2">
                    {fiveGServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                        onClick={() => setIs5GServicesOpen(false)}
                      >
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/pricing') 
                    ? 'text-purple-400 bg-purple-900/20' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Pricing
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-purple-400 bg-purple-900/20' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Contact
              </Link>

              <Link
                to="/demo"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-slate-800/50 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/ai-services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50"
              onClick={() => setIsOpen(false)}
            >
              AI Services
            </Link>
            <Link
              to="/micro-saas"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50"
              onClick={() => setIsOpen(false)}
            >
              Micro SAAS
            </Link>
            <Link
              to="/it-services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50"
              onClick={() => setIsOpen(false)}
            >
              IT Services
            </Link>
            <Link
              to="/5g-solutions"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50"
              onClick={() => setIsOpen(false)}
            >
              5G Solutions
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/demo"
              className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700"
              onClick={() => setIsOpen(false)}
            >
              Get Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
