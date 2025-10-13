import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight, FileText, Users, Target, TrendingUp, Globe, Mail } from 'lucide-react'

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
    { name: 'Zion AI Accounting Assistant', path: '/zion-ai-accounting-assistant', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion AI Code Reviewer', path: '/zion-ai-code-reviewer', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion AI Content Moderation', path: '/zion-ai-content-moderation', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion AI Contract Analyzer', path: '/zion-ai-contract-analyzer', icon: <FileText className="w-4 h-4" /> },
    { name: 'Zion AI Customer Service Pro', path: '/zion-ai-customer-service-pro', icon: <Users className="w-4 h-4" /> },
    { name: 'Zion AI Data Cleaner', path: '/zion-ai-data-cleaner', icon: <Database className="w-4 h-4" /> },
    { name: 'Zion AI Document AI', path: '/zion-ai-document-ai', icon: <FileText className="w-4 h-4" /> },
    { name: 'Zion AI Email Assistant', path: '/zion-ai-email-assistant', icon: <Mail className="w-4 h-4" /> },
    { name: 'Zion AI Energy Manager', path: '/zion-ai-energy-manager', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion AI Fraud Detector', path: '/zion-ai-fraud-detector', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion AI Marketing Automation', path: '/zion-ai-marketing-automation', icon: <Target className="w-4 h-4" /> },
    { name: 'Zion AI Meeting Assistant', path: '/zion-ai-meeting-assistant', icon: <Users className="w-4 h-4" /> },
    { name: 'Zion AI Predictive Maintenance', path: '/zion-ai-predictive-maintenance', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion AI Recruitment Pro', path: '/zion-ai-recruitment-pro', icon: <Users className="w-4 h-4" /> },
    { name: 'Zion AI SEO Optimizer', path: '/zion-ai-seo-optimizer', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Zion AI Supply Chain Optimizer', path: '/zion-ai-supply-chain-optimizer', icon: <Globe className="w-4 h-4" /> },
    { name: 'Zion AI Survey Builder', path: '/zion-ai-survey-builder', icon: <FileText className="w-4 h-4" /> },
    { name: 'Zion AI Translator Pro', path: '/zion-ai-translator-pro', icon: <Globe className="w-4 h-4" /> },
    { name: 'Zion AI Video Editor', path: '/zion-ai-video-editor', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion Chat AI', path: '/zion-chat-ai', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion CRM Intelligence', path: '/zion-crm-intelligence', icon: <Users className="w-4 h-4" /> },
    { name: 'Zion Customer Insights', path: '/zion-customer-insights', icon: <BarChart3 className="w-4 h-4" /> }
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

  const serviceCategories = useMemo(() => [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      services: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Marketing Automation', path: '/ai-marketing-automation' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: <Shield className="w-4 h-4" />,
      services: [
        { name: 'Cloud Services', path: '/cloud-services' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Custom Development', path: '/custom-development' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'Database Management', path: '/database-management' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      services: [
        { name: '5G Implementation', path: '/5g-implementation' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Smart Cities', path: '/5g-smart-city-solutions' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Data Analytics', path: '/5g-data-analytics' }
      ]
    }
  ], [])

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
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-cyan-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Our Services</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4 px-4">
                    {serviceCategories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <div className="flex items-center space-x-2 text-cyan-300 font-semibold text-sm">
                          {category.icon}
                          <span>{category.name}</span>
                        </div>
                        <div className="ml-6 space-y-1">
                          {category.services.slice(0, 3).map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                          {category.services.length > 3 && (
                            <Link
                              to={category.path}
                              className="block text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-medium py-1"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
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
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-purple-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Micro SAAS Solutions</h3>
                    <p className="text-xs text-gray-400 mt-1">36+ AI-powered business solutions</p>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <div className="px-4 py-2">
                      <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">Featured Solutions</h4>
                      {microSaasServices.filter(service => service.featured).map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 group rounded-lg mb-1"
                          onClick={() => setIsMicroSaasOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-sm">{service.name}</span>
                            <div className="flex items-center mt-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                              <span className="text-xs text-yellow-400">Featured</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-700">
                      <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">All Solutions</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {microSaasServices.slice(0, 8).map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 group rounded-lg"
                            onClick={() => setIsMicroSaasOpen(false)}
                          >
                            <div className="w-6 h-6 rounded bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                              {service.icon}
                            </div>
                            <span className="font-medium text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        to="/micro-saas"
                        className="block w-full text-center px-3 py-2 mt-2 text-purple-400 hover:text-purple-300 text-sm font-medium border border-purple-500/30 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                        onClick={() => setIsMicroSaasOpen(false)}
                      >
                        View All 36+ Solutions →
                      </Link>
                    </div>
                  </div>
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
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-4">
                    {serviceCategories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <div className="flex items-center space-x-2 text-cyan-300 font-semibold text-sm">
                          {category.icon}
                          <span>{category.name}</span>
                        </div>
                        <div className="ml-4 space-y-1">
                          {category.services.slice(0, 3).map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                              onClick={() => {
                                setIsServicesOpen(false)
                                toggleMenu()
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                          {category.services.length > 3 && (
                            <Link
                              to={category.path}
                              className="block text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-medium py-1"
                              onClick={() => {
                                setIsServicesOpen(false)
                                toggleMenu()
                              }}
                            >
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>
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
                  <div className="ml-4 mt-2 space-y-2">
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">Featured Solutions</h4>
                      {microSaasServices.filter(service => service.featured).map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10 mb-1"
                          onClick={() => {
                            setIsMicroSaasOpen(false)
                            toggleMenu()
                          }}
                        >
                          {service.icon}
                          <span className="text-sm">{service.name}</span>
                          <Star className="w-3 h-3 text-yellow-400 fill-current ml-auto" />
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 pt-3">
                      <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">All Solutions</h4>
                      {microSaasServices.slice(0, 6).map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"
                          onClick={() => {
                            setIsMicroSaasOpen(false)
                            toggleMenu()
                          }}
                        >
                          {service.icon}
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      ))}
                      <Link
                        to="/micro-saas"
                        className="block w-full text-center px-3 py-2 mt-2 text-purple-400 hover:text-purple-300 text-sm font-medium border border-purple-500/30 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                        onClick={() => {
                          setIsMicroSaasOpen(false)
                          toggleMenu()
                        }}
                      >
                        View All 36+ Solutions →
                      </Link>
                    </div>
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