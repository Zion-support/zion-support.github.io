import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Settings, BarChart3, Lock, Target, ArrowRight } from 'lucide-react'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false)
  const [isITServicesOpen, setIsITServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(!isAIServicesOpen)
  }, [isAIServicesOpen])

  const toggleITServices = useCallback(() => {
    setIsITServicesOpen(!isITServicesOpen)
  }, [isITServicesOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation-pro', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support-chatbot', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity-monitor-pro', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence-pro', icon: <Database className="w-4 h-4" /> }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Lock className="w-4 h-4" /> }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Target className="w-4 h-4" /> }
  ], [])

  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Zion Tech Group
            </span>
          </Link>

          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAIServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isAIServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAIServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-2xl py-4 z-50 border border-white/20">
                  <div className="px-4 py-2 border-b border-white/10 mb-2">
                    <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">AI Solutions</h3>
                  </div>
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-cyan-400 transition-all duration-200 group"
                      onClick={() => setIsAIServicesOpen(false)}
                    >
                      <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <span className="flex-1">{service.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleITServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                <Settings className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isITServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isITServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-2xl py-4 z-50 border border-white/20">
                  <div className="px-4 py-2 border-b border-white/10 mb-2">
                    <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-wider">IT Solutions</h3>
                  </div>
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-purple-400 transition-all duration-200 group"
                      onClick={() => setIsITServicesOpen(false)}
                    >
                      <div className="text-purple-400 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <span className="flex-1">{service.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-2xl py-4 z-50 border border-white/20">
                  <div className="px-4 py-2 border-b border-white/10 mb-2">
                    <h3 className="text-green-400 font-semibold text-sm uppercase tracking-wider">Micro SAAS</h3>
                  </div>
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-green-400 transition-all duration-200 group"
                      onClick={() => setIsMicroSaasOpen(false)}
                    >
                      <div className="text-green-400 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <span className="flex-1">{service.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              5G Solutions
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
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
          <div className="lg:hidden py-4 border-t border-white/10 bg-slate-900/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                About
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAIServices}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 w-full"
                >
                  <Brain className="w-4 h-4" />
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ml-auto ${isAIServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAIServicesOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors py-2"
                        onClick={() => {
                          setIsAIServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon}
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
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 w-full"
                >
                  <Settings className="w-4 h-4" />
                  <span>IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ml-auto ${isITServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isITServicesOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors py-2"
                        onClick={() => {
                          setIsITServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon}
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 w-full"
                >
                  <Zap className="w-4 h-4" />
                  <span>Micro SAAS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ml-auto ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMicroSaasOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors py-2"
                        onClick={() => {
                          setIsMicroSaasOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon}
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/5g-solutions"
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                5G Solutions
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center mt-4"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation