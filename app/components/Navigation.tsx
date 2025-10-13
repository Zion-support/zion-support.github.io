import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight } from 'lucide-react'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  
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
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence-pro', icon: <Database className="w-4 h-4" /> }
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
    { name: 'Zion AI Video Editor', path: '/zion-ai-video-editor', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion AI Social Media Manager', path: '/zion-ai-social-media-manager', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion AI Customer Insights Pro', path: '/zion-ai-customer-insights-pro', icon: <BarChart3 className="w-4 h-4" /> }
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
    <nav 
      className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl border-b border-cyan-500/20 backdrop-blur-md relative overflow-hidden"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform -skew-y-1"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded relative group"
            aria-label="Zion Tech Group - Go to homepage"
          >
            <span className="relative z-10">Zion Tech Group</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
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
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleServices();
                  }
                }}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 rounded-md px-2 py-1"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="AI Services menu"
              >
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-cyan-500/20 py-2 z-50">
                  <div className="px-4 py-2 border-b border-cyan-500/20">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">AI Services</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          {service.icon}
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSaas}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleMicroSaas();
                  }
                }}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 rounded-md px-2 py-1"
                aria-expanded={isMicroSaasOpen}
                aria-haspopup="true"
                aria-label="Micro SAAS menu"
              >
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMicroSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-cyan-500/20 py-2 z-50">
                  <div className="px-4 py-2 border-b border-cyan-500/20">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Micro SAAS Solutions</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                        onClick={() => setIsMicroSaasOpen(false)}
                      >
                        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {service.name}
                          </span>
                          {service.featured && (
                            <div className="flex items-center space-x-1 mt-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-xs text-yellow-400">Featured</span>
                            </div>
                          )}
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            <div className="space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 text-lg font-medium hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile AI Services */}
              <div className="px-4">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">AI Services</h3>
                <div className="space-y-2 ml-4">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Micro SAAS */}
              <div className="px-4">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">Micro SAAS</h3>
                <div className="space-y-2 ml-4">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                      {service.featured && (
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      )}
                    </Link>
                  ))}
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