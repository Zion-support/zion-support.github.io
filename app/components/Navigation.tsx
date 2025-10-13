import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, BarChart3, Users, Settings } from 'lucide-react'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false)
  const [isMicroSAASOpen, setIsMicroSAASOpen] = useState(false)
  
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

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Settings className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Globe className="w-4 h-4" /> }
  ], [])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Cybersecurity Monitor', path: '/ai-cybersecurity-monitor', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <BarChart3 className="w-4 h-4" /> }
  ], [])

  const microSAAS = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Settings className="w-4 h-4" /> },
    { name: 'Zion AI Code Assistant Pro', path: '/zion-ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion AI Marketing Automation Pro', path: '/zion-ai-marketing-automation-pro', icon: <Zap className="w-4 h-4" /> }
  ], [])

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Settings className="w-4 h-4" /> }
  ], [])

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Zion Tech Group
          </Link>

          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            
            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
              >
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAIServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
              >
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isAIServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAIServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsAIServicesOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSAAS}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
              >
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMicroSAASOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMicroSAASOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                  {microSAAS.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsMicroSAASOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/5g-solutions" className="hover:text-cyan-400 transition-colors">
              5G Solutions
            </Link>
            <Link to="/pricing" className="hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
            <Link to="/case-studies" className="hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link to="/blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-2 rounded-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              
              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
                >
                  <span>IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                        onClick={() => {
                          setIsServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAIServices}
                  className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
                >
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAIServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAIServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                        onClick={() => {
                          setIsAIServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={toggleMicroSAAS}
                  className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
                >
                  <span>Micro SAAS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMicroSAASOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMicroSAASOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {microSAAS.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                        onClick={() => {
                          setIsMicroSAASOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/5g-solutions"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                5G Solutions
              </Link>
              <Link
                to="/pricing"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/case-studies"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-2 rounded-lg transition-all duration-300 text-center"
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