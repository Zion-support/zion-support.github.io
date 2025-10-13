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
  Settings,
  Users,
  Target,
  FileText,
  Cpu,
  Lock,
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
    setIsAiServicesOpen(false)
    setIsItServicesOpen(false)
    setIsMicroSaasOpen(false)
  }, [isServicesOpen])

  const toggleAiServices = useCallback(() => {
    setIsAiServicesOpen(!isAiServicesOpen)
    setIsItServicesOpen(false)
    setIsMicroSaasOpen(false)
  }, [isAiServicesOpen])

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen)
    setIsAiServicesOpen(false)
    setIsMicroSaasOpen(false)
  }, [isItServicesOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
    setIsAiServicesOpen(false)
    setIsItServicesOpen(false)
  }, [isMicroSaasOpen])

  const aiServices = useMemo(() => [
    { name: 'AI Chatbots', path: '/ai-chatbot-enterprise', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'Machine Learning', path: '/ai-analytics', icon: <Brain className="w-4 h-4" /> },
    { name: 'Computer Vision', path: '/ai-computer-vision', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Content Generation', path: '/ai-content-generation-pro', icon: <FileText className="w-4 h-4" /> },
    { name: 'Business Intelligence', path: '/ai-business-intelligence-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Cybersecurity AI', path: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" /> }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <FileText className="w-4 h-4" /> },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet', icon: <Target className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Settings className="w-4 h-4" /> }
  ], [])

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md text-white shadow-2xl border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl py-4 z-50 border border-cyan-500/20">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">AI Services</h3>
                    <div className="space-y-1">
                      {aiServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 rounded-lg"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.icon}
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-4 py-2 border-t border-gray-700">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">IT Services</h3>
                    <div className="space-y-1">
                      {itServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 rounded-lg"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.icon}
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="px-4 py-2 border-t border-gray-700">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Micro SAAS</h3>
                    <div className="space-y-1">
                      {microSaasServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 rounded-lg"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.icon}
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/pricing" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 font-semibold group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors duration-300 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700 bg-gray-800/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">AI Services</h4>
                      <div className="space-y-2">
                        {aiServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                            onClick={() => {
                              setIsServicesOpen(false)
                              toggleMenu()
                            }}
                          >
                            {service.icon}
                            <span className="text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">IT Services</h4>
                      <div className="space-y-2">
                        {itServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                            onClick={() => {
                              setIsServicesOpen(false)
                              toggleMenu()
                            }}
                          >
                            {service.icon}
                            <span className="text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">Micro SAAS</h4>
                      <div className="space-y-2">
                        {microSaasServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                            onClick={() => {
                              setIsServicesOpen(false)
                              toggleMenu()
                            }}
                          >
                            {service.icon}
                            <span className="text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                to="/pricing"
                className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-3 rounded-lg transition-all duration-300 text-center font-semibold flex items-center justify-center space-x-2"
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