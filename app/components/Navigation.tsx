import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'

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

  const services = useMemo(() => [
    { name: 'AI & Machine Learning', path: '/ai-services', icon: <Zap className="w-4 h-4" /> },
    { name: 'Cloud Solutions', path: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Development', path: '/custom-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Solutions', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> }
  ], [])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Database className="w-4 h-4" /> }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Globe className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> }
  ], [])

  const microSaas = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <Database className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Workflow Automation', path: '/zion-workflow-automation', icon: <Zap className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ], [])

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            Zion Tech Group
          </Link>

          <div className="hidden md:flex space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    {/* AI Services */}
                    <div className="px-4 py-2 border-b border-gray-200">
                      <button
                        onClick={toggleAiServices}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <span className="font-semibold">AI Services</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isAiServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isAiServicesOpen && (
                        <div className="mt-2 space-y-1">
                          {aiServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-2 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded"
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsAiServicesOpen(false)
                              }}
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* IT Services */}
                    <div className="px-4 py-2 border-b border-gray-200">
                      <button
                        onClick={toggleItServices}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <span className="font-semibold">IT Services</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isItServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isItServicesOpen && (
                        <div className="mt-2 space-y-1">
                          {itServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-2 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded"
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsItServicesOpen(false)
                              }}
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Micro SAAS */}
                    <div className="px-4 py-2">
                      <button
                        onClick={toggleMicroSaas}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <span className="font-semibold">Micro SAAS</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMicroSaasOpen && (
                        <div className="mt-2 space-y-1">
                          {microSaas.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-2 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded"
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsMicroSaasOpen(false)
                              }}
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/consultation"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-blue-400 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-4">
                    {/* AI Services */}
                    <div>
                      <button
                        onClick={toggleAiServices}
                        className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                      >
                        <span className="font-semibold">AI Services</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isAiServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isAiServicesOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {aiServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsAiServicesOpen(false)
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

                    {/* IT Services */}
                    <div>
                      <button
                        onClick={toggleItServices}
                        className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                      >
                        <span className="font-semibold">IT Services</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isItServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isItServicesOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {itServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsItServicesOpen(false)
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

                    {/* Micro SAAS */}
                    <div>
                      <button
                        onClick={toggleMicroSaas}
                        className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                      >
                        <span className="font-semibold">Micro SAAS</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMicroSaasOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {microSaas.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsMicroSaasOpen(false)
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
                  </div>
                )}
              </div>

              <Link
                to="/consultation"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors text-center"
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