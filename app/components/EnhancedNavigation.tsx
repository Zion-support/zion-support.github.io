import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Cloud, 
  Shield, 
  Globe, 
  Database, 
  Code, 
  Smartphone,
  Home,
  Users,
  Briefcase,
  FileText,
  MessageCircle,
  Rocket,
  Brain,
  Heart,
  Building,
  Settings
} from 'lucide-react'

const EnhancedNavigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false)
  const [isMicroSAASOpen, setIsMicroSAASOpen] = useState(false)
  const [isITServicesOpen, setIsITServicesOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(!isAIServicesOpen)
  }, [isAIServicesOpen])

  const toggleMicroSAAS = useCallback(() => {
    setIsMicroSAASOpen(!isMicroSAASOpen)
  }, [isMicroSAASOpen])

  const toggleITServices = useCallback(() => {
    setIsITServicesOpen(!isITServicesOpen)
  }, [isITServicesOpen])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <MessageCircle className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Financial Services', path: '/ai-financial-services', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'AI Smart City Solutions', path: '/ai-smart-city-solutions', icon: <Building className="w-4 h-4" /> }
  ], [])

  const microSAASServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <Database className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <FileText className="w-4 h-4" /> },
    { name: 'Zion AI Crypto Trader', path: '/zion-ai-crypto-trader', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion AI Health Monitor', path: '/zion-ai-health-monitor', icon: <Heart className="w-4 h-4" /> },
    { name: 'Zion AI Smart Home', path: '/zion-ai-smart-home', icon: <Home className="w-4 h-4" /> },
    { name: 'Zion AI Space Optimizer', path: '/zion-ai-space-optimizer', icon: <Rocket className="w-4 h-4" /> }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Settings className="w-4 h-4" /> },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: 'Blockchain Development', path: '/blockchain-development', icon: <Zap className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Case Studies', path: '/case-studies', icon: <FileText className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <MessageCircle className="w-4 h-4" /> }
  ], [])

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl border-b border-purple-500/20 quantum-field-advanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold neon-text-purple">Zion Tech Group</span>
          </Link>

          <div className="hidden lg:flex space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-2 hover:text-purple-300 transition-all duration-300 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAIServices}
                className="flex items-center space-x-2 hover:text-purple-300 transition-all duration-300 group"
              >
                <Brain className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAIServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAIServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 py-4 z-50 backdrop-blur-lg">
                  <div className="px-4 py-2 border-b border-purple-500/20 mb-2">
                    <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">AI Services</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-purple-500/20 hover:text-white transition-all duration-300 group"
                        onClick={() => setIsAIServicesOpen(false)}
                      >
                        <span className="text-purple-400 group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                        <span className="font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSAAS}
                className="flex items-center space-x-2 hover:text-purple-300 transition-all duration-300 group"
              >
                <Zap className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSAASOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMicroSAASOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 py-4 z-50 backdrop-blur-lg">
                  <div className="px-4 py-2 border-b border-purple-500/20 mb-2">
                    <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Micro SAAS Solutions</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {microSAASServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-purple-500/20 hover:text-white transition-all duration-300 group"
                        onClick={() => setIsMicroSAASOpen(false)}
                      >
                        <span className="text-purple-400 group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                        <span className="font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleITServices}
                className="flex items-center space-x-2 hover:text-purple-300 transition-all duration-300 group"
              >
                <Settings className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isITServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isITServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 py-4 z-50 backdrop-blur-lg">
                  <div className="px-4 py-2 border-b border-purple-500/20 mb-2">
                    <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">IT Services</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-purple-500/20 hover:text-white transition-all duration-300 group"
                        onClick={() => setIsITServicesOpen(false)}
                      >
                        <span className="text-purple-400 group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                        <span className="font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/consultation"
              className="btn-quantum inline-flex items-center space-x-2"
            >
              <Rocket className="w-4 h-4" />
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-3 hover:text-purple-300 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAIServices}
                  className="flex items-center space-x-3 hover:text-purple-300 transition-colors py-2"
                >
                  <Brain className="w-4 h-4" />
                  <span className="font-medium">AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAIServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAIServicesOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-1"
                        onClick={() => {
                          setIsAIServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        <span className="text-purple-400">{service.icon}</span>
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={toggleMicroSAAS}
                  className="flex items-center space-x-3 hover:text-purple-300 transition-colors py-2"
                >
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">Micro SAAS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSAASOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMicroSAASOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {microSAASServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-1"
                        onClick={() => {
                          setIsMicroSAASOpen(false)
                          toggleMenu()
                        }}
                      >
                        <span className="text-purple-400">{service.icon}</span>
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={toggleITServices}
                  className="flex items-center space-x-3 hover:text-purple-300 transition-colors py-2"
                >
                  <Settings className="w-4 h-4" />
                  <span className="font-medium">IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isITServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isITServicesOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-1"
                        onClick={() => {
                          setIsITServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        <span className="text-purple-400">{service.icon}</span>
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/consultation"
                className="btn-quantum inline-flex items-center justify-center space-x-2 mt-4"
                onClick={toggleMenu}
              >
                <Rocket className="w-4 h-4" />
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

EnhancedNavigation.displayName = 'EnhancedNavigation'

export default EnhancedNavigation