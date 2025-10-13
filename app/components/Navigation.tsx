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
  Brain,
  BarChart3,
  Users,
  Settings,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false)
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

  const toggleAiServices = useCallback(() => {
    setIsAiServicesOpen(!isAiServicesOpen)
  }, [isAiServicesOpen])

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen)
  }, [isItServicesOpen])

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, price: '$99/mo' },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, price: '$149/mo' },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, price: '$79/mo' },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Code className="w-4 h-4" />, price: '$129/mo' },
    { name: 'Zion Data Sync', path: '/zion-data-sync', icon: <Database className="w-4 h-4" />, price: '$89/mo' },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet', icon: <Users className="w-4 h-4" />, price: '$119/mo' }
  ], [])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <Brain className="w-4 h-4" />, price: 'From $299/mo' },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" />, price: 'From $199/mo' },
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" />, price: 'From $249/mo' },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" />, price: 'From $399/mo' }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" />, price: 'From $2,500/mo' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" />, price: 'From $1,800/mo' },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" />, price: 'From $3,000' },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" />, price: 'From $4,000' },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" />, price: 'From $1,200/mo' },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" />, price: 'From $5,000/mo' }
  ], [])

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md text-white shadow-2xl border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
            Zion Tech Group
          </Link>

          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="nav-link hover:text-cyan-400 transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="nav-link hover:text-cyan-400 transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSaas}
                className="nav-link flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 relative group"
              >
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {isMicroSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 py-4 z-50">
                  <div className="px-4 py-2 border-b border-cyan-500/20">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Micro SAAS Solutions</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group"
                        onClick={() => setIsMicroSaasOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            {service.icon}
                          </div>
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <span className="text-xs text-cyan-400 font-semibold">{service.price}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAiServices}
                className="nav-link flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 relative group"
              >
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {isAiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-purple-500/20 py-4 z-50">
                  <div className="px-4 py-2 border-b border-purple-500/20">
                    <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">AI-Powered Solutions</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 group"
                        onClick={() => setIsAiServicesOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                            {service.icon}
                          </div>
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <span className="text-xs text-purple-400 font-semibold">{service.price}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleItServices}
                className="nav-link flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 relative group"
              >
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {isItServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-green-500/20 py-4 z-50">
                  <div className="px-4 py-2 border-b border-green-500/20">
                    <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider">IT Solutions</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
                        onClick={() => setIsItServicesOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-green-400 group-hover:text-green-300 transition-colors">
                            {service.icon}
                          </div>
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <span className="text-xs text-green-400 font-semibold">{service.price}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies" className="nav-link hover:text-cyan-400 transition-all duration-300 relative group">
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/blog" className="nav-link hover:text-cyan-400 transition-all duration-300 relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="nav-link hover:text-cyan-400 transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center group shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20 bg-slate-800/95 backdrop-blur-md">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg"
                onClick={toggleMenu}
              >
                About
              </Link>
              
              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg"
                >
                  <span>Micro SAAS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMicroSaasOpen && (
                  <div className="ml-4 mt-2 space-y-1 bg-slate-700/50 rounded-lg p-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center justify-between px-3 py-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded"
                        onClick={() => {
                          setIsMicroSaasOpen(false)
                          toggleMenu()
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          {service.icon}
                          <span className="text-sm">{service.name}</span>
                        </div>
                        <span className="text-xs text-cyan-400">{service.price}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 rounded-lg"
                >
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAiServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1 bg-slate-700/50 rounded-lg p-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center justify-between px-3 py-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 rounded"
                        onClick={() => {
                          setIsAiServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          {service.icon}
                          <span className="text-sm">{service.name}</span>
                        </div>
                        <span className="text-xs text-purple-400">{service.price}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={toggleItServices}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 rounded-lg"
                >
                  <span>IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isItServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1 bg-slate-700/50 rounded-lg p-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center justify-between px-3 py-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 rounded"
                        onClick={() => {
                          setIsItServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          {service.icon}
                          <span className="text-sm">{service.name}</span>
                        </div>
                        <span className="text-xs text-green-400">{service.price}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                className="px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg"
                onClick={toggleMenu}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-center flex items-center justify-center group mt-4"
                onClick={toggleMenu}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-6 border-t border-cyan-500/20">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
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