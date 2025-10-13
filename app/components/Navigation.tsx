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
  FileText,
  Settings,
  ArrowRight
} from 'lucide-react'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false)
  const [isItServicesOpen, setIsItServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleAiServices = useCallback(() => {
    setIsAiServicesOpen(!isAiServicesOpen)
  }, [isAiServicesOpen])

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen)
  }, [isItServicesOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])

  const aiServices = useMemo(() => [
    { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise', icon: <Brain className="w-4 h-4" /> },
    { name: 'Computer Vision', path: '/ai-computer-vision', icon: <Globe className="w-4 h-4" /> },
    { name: 'Content Generation Pro', path: '/ai-content-generation-pro', icon: <FileText className="w-4 h-4" /> },
    { name: 'Data Analytics Suite', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Cybersecurity Suite', path: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },
    { name: 'Process Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Settings className="w-4 h-4" /> }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Content Studio', path: '/zion-content-studio', icon: <FileText className="w-4 h-4" /> },
    { name: 'Data Sync', path: '/zion-data-sync', icon: <Database className="w-4 h-4" /> },
    { name: 'Lead Magnet', path: '/zion-lead-magnet', icon: <Users className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ], [])

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm text-white shadow-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold neon-cyan hover:neon-glow transition-all duration-300">
            Zion Tech Group
          </Link>

          <div className="hidden lg:flex space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl py-2 z-50 border border-cyan-500/20">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-cyan-400">AI & Machine Learning</h3>
                  </div>
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-300"
                      onClick={() => setIsAiServicesOpen(false)}
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-700">
                    <Link
                      to="/ai-services"
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                      onClick={() => setIsAiServicesOpen(false)}
                    >
                      <span>View All AI Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300"
              >
                <Settings className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isItServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl py-2 z-50 border border-cyan-500/20">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-cyan-400">IT Solutions</h3>
                  </div>
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-300"
                      onClick={() => setIsItServicesOpen(false)}
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-700">
                    <Link
                      to="/it-services"
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                      onClick={() => setIsItServicesOpen(false)}
                    >
                      <span>View All IT Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300"
              >
                <Zap className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMicroSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl py-2 z-50 border border-cyan-500/20">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-cyan-400">Ready-to-Use Solutions</h3>
                  </div>
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-300"
                      onClick={() => setIsMicroSaasOpen(false)}
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-700">
                    <Link
                      to="/micro-saas"
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                      onClick={() => setIsMicroSaasOpen(false)}
                    >
                      <span>View All Micro SAAS</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 neon-glow"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-cyan-400 transition-colors duration-300 py-2"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAiServices}
                  className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <Brain className="w-4 h-4" />
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAiServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                        onClick={() => {
                          setIsAiServicesOpen(false)
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
                  onClick={toggleItServices}
                  className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <Settings className="w-4 h-4" />
                  <span>IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isItServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                        onClick={() => {
                          setIsItServicesOpen(false)
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
                  className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Micro SAAS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMicroSaasOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
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
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 text-center flex items-center justify-center space-x-2 neon-glow"
                onClick={toggleMenu}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
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