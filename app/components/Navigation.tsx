import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight, Search } from 'lucide-react'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support-chatbot', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Code Assistant', path: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence-pro', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Video Generator', path: '/ai-video-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Blockchain Analytics', path: '/ai-blockchain-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', icon: <Shield className="w-4 h-4" /> }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion Data Sync', path: '/zion-data-sync', icon: <Database className="w-4 h-4" /> },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion AI Chatbot Builder', path: '/zion-ai-chatbot-builder', icon: <Brain className="w-4 h-4" />, featured: true },
    { name: 'Zion Smart Inventory', path: '/zion-smart-inventory', icon: <Database className="w-4 h-4" />, featured: true }
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

  const allServices = useMemo(() => [
    ...aiServices,
    ...microSaasServices
  ], [aiServices, microSaasServices])

  const filteredServices = useMemo(() => {
    if (!searchQuery) return []
    return allServices.filter(service => 
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [allServices, searchQuery])

  return (
    <nav 
      className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl border-b border-cyan-500/20 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
            aria-label="Zion Tech Group - Go to homepage"
          >
            Zion Tech Group
          </Link>

          <div className="hidden lg:flex space-x-8 items-center">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group hover:text-cyan-400 transition-all duration-300 font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* Search Bar */}
            <div className="relative">
              <div className="flex items-center">
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-64"
                />
              </div>
              
              {/* Search Results Dropdown */}
              {searchQuery && filteredServices.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-cyan-500/20 max-h-96 overflow-y-auto">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Search Results</h3>
                  </div>
                  {filteredServices.slice(0, 8).map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group"
                      onClick={() => setSearchQuery('')}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        {service.icon}
                      </div>
                      <span className="font-medium">{service.name}</span>
                      {service.featured && (
                        <Star className="w-3 h-3 text-yellow-400 fill-current ml-auto" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-cyan-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">AI Services</h3>
                  </div>
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        {service.icon}
                      </div>
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMicroSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-purple-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Micro SAAS Solutions</h3>
                  </div>
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 group ${
                        service.featured ? 'bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border-l-2 border-purple-400' : ''
                      }`}
                      onClick={() => setIsMicroSaasOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <span className="font-medium">{service.name}</span>
                        {service.featured && (
                          <div className="flex items-center mt-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                            <span className="text-xs text-yellow-400">Featured</span>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 font-semibold shadow-lg hover:shadow-cyan-500/25 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            {/* Mobile Search */}
            <div className="px-4 mb-4">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              {/* Mobile Search Results */}
              {searchQuery && filteredServices.length > 0 && (
                <div className="mt-2 bg-slate-800/95 backdrop-blur-xl rounded-lg shadow-2xl border border-cyan-500/20 max-h-64 overflow-y-auto">
                  {filteredServices.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group"
                      onClick={() => {
                        setSearchQuery('')
                        toggleMenu()
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        {service.icon}
                      </div>
                      <span className="font-medium">{service.name}</span>
                      {service.featured && (
                        <Star className="w-3 h-3 text-yellow-400 fill-current ml-auto" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex flex-col space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 font-medium"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 font-medium"
                >
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10"
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

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 font-medium"
                >
                  <span>Micro SAAS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMicroSaasOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"
                        onClick={() => {
                          setIsMicroSaasOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                        {service.featured && <Star className="w-3 h-3 text-yellow-400 fill-current ml-auto" />}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-3 rounded-lg transition-all duration-300 text-center font-semibold mt-4 flex items-center justify-center space-x-2"
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