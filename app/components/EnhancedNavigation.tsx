import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, 
  BarChart3, Star, ArrowRight, Wifi, Smartphone, Globe, Cpu, 
  Users, Settings, FileText, HelpCircle, Phone, Mail, MapPin,
  TrendingUp, Target, Layers, Workflow, Monitor, Smartphone as Mobile,
  Server, Lock, Eye, MessageSquare, Search, Filter, Download
} from 'lucide-react'

const EnhancedNavigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])

  const toggleSolutions = useCallback(() => {
    setIsSolutionsOpen(!isSolutionsOpen)
  }, [isSolutionsOpen])

  const toggleResources = useCallback(() => {
    setIsResourcesOpen(!isResourcesOpen)
  }, [isResourcesOpen])

  // AI Services organized by category
  const aiServices = useMemo(() => [
    {
      category: 'Analytics & Intelligence',
      services: [
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence-pro', icon: <TrendingUp className="w-4 h-4" /> },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <Target className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Content & Communication',
      services: [
        { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Content Studio', path: '/ai-content-studio', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Customer Support', path: '/ai-customer-support-chatbot', icon: <MessageSquare className="w-4 h-4" /> },
        { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Mail className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Security & Development',
      services: [
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Code Assistant', path: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Automated Testing', path: '/ai-automated-testing', icon: <Settings className="w-4 h-4" /> },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Workflow className="w-4 h-4" /> }
      ]
    }
  ], [])

  // IT Services organized by category
  const itServices = useMemo(() => [
    {
      category: 'Cloud & Infrastructure',
      services: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Cloud Migration', path: '/cloud-migration-advanced', icon: <ArrowRight className="w-4 h-4" /> },
        { name: 'Cloud Native Development', path: '/cloud-native-development', icon: <Server className="w-4 h-4" /> },
        { name: 'Cloud Cost Optimization', path: '/cloud-cost-optimization', icon: <TrendingUp className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Security & Compliance',
      services: [
        { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
        { name: 'Advanced Security Suite', path: '/advanced-security-suite', icon: <Lock className="w-4 h-4" /> },
        { name: 'Security Automation', path: '/security-automation', icon: <Settings className="w-4 h-4" /> },
        { name: 'Compliance Automation', path: '/compliance-automation', icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Development & Integration',
      services: [
        { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> },
        { name: 'Mobile Development', path: '/mobile-development', icon: <Mobile className="w-4 h-4" /> },
        { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> },
        { name: 'Enterprise Integration', path: '/enterprise-integration', icon: <Layers className="w-4 h-4" /> }
      ]
    }
  ], [])

  // 5G Solutions
  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Settings className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Wifi className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> }
  ], [])

  // Micro SAAS Solutions
  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion Data Sync', path: '/zion-data-sync', icon: <Database className="w-4 h-4" /> },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: <Mail className="w-4 h-4" /> }
  ], [])

  // Resources
  const resources = useMemo(() => [
    { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4" /> },
    { name: 'Case Studies', path: '/case-studies', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Tutorials', path: '/tutorials', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Demo', path: '/demo', icon: <Eye className="w-4 h-4" /> },
    { name: 'Support', path: '/support', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'Documentation', path: '/documentation', icon: <FileText className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ], [])

  return (
    <nav 
      className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl border-b border-cyan-500/20 backdrop-blur-md sticky top-0 z-50"
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
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-cyan-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">AI Services</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {aiServices.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 py-2">
                          {category.category}
                        </h4>
                        {category.services.map((service) => (
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
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={toggleSolutions}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <span>IT Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-blue-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">IT Solutions</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {itServices.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 py-2">
                          {category.category}
                        </h4>
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 group"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                              {service.icon}
                            </div>
                            <span className="font-medium">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5G Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <span>5G Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMicroSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-green-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider">5G Solutions</h3>
                  </div>
                  {fiveGServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
                      onClick={() => setIsMicroSaasOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                        {service.icon}
                      </div>
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={toggleResources}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-purple-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Resources</h3>
                  </div>
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      to={resource.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 group"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                        {resource.icon}
                      </div>
                      <span className="font-medium">{resource.name}</span>
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
                    {aiServices.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="mb-2">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 py-1">
                          {category.category}
                        </h4>
                        {category.services.map((service) => (
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
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Solutions */}
              <div>
                <button
                  onClick={toggleSolutions}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 font-medium"
                >
                  <span>IT Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSolutionsOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {itServices.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="mb-2">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 py-1">
                          {category.category}
                        </h4>
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-500/10"
                            onClick={() => {
                              setIsSolutionsOpen(false)
                              toggleMenu()
                            }}
                          >
                            {service.icon}
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile 5G Solutions */}
              <div>
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 font-medium"
                >
                  <span>5G Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMicroSaasOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {fiveGServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-green-400 transition-colors rounded-lg hover:bg-green-500/10"
                        onClick={() => {
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

              {/* Mobile Resources */}
              <div>
                <button
                  onClick={toggleResources}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 font-medium"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {resources.map((resource) => (
                      <Link
                        key={resource.name}
                        to={resource.path}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"
                        onClick={() => {
                          setIsResourcesOpen(false)
                          toggleMenu()
                        }}
                      >
                        {resource.icon}
                        <span>{resource.name}</span>
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

EnhancedNavigation.displayName = 'EnhancedNavigation'

export default EnhancedNavigation