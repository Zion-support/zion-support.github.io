import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight, Globe, Users, Settings, BookOpen, Phone } from 'lucide-react'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleSolutions = useCallback(() => {
    setIsSolutionsOpen(!isSolutionsOpen)
  }, [isSolutionsOpen])

  const toggleResources = useCallback(() => {
    setIsResourcesOpen(!isResourcesOpen)
  }, [isResourcesOpen])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" />, description: 'Advanced analytics with AI insights' },
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" />, description: 'Automated content creation' },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" />, description: 'AI-powered security solutions' },
    { name: 'AI Customer Support', path: '/ai-customer-support-chatbot', icon: <Zap className="w-4 h-4" />, description: 'Intelligent customer service' },
    { name: 'AI Code Assistant', path: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" />, description: 'AI-powered development tools' },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence-pro', icon: <Database className="w-4 h-4" />, description: 'Smart business insights' }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" />, description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" />, description: 'Comprehensive security services' },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" />, description: 'Modern web applications' },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Zap className="w-4 h-4" />, description: 'iOS and Android apps' },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" />, description: 'Data management solutions' },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Globe className="w-4 h-4" />, description: 'Network design and implementation' }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true, description: 'Business intelligence platform' },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: true, description: 'Advanced security monitoring' },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: true, description: 'Secure cloud storage' },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" />, description: 'Content creation tools' },
    { name: 'Zion Data Sync', path: '/zion-data-sync', icon: <Database className="w-4 h-4" />, description: 'Data synchronization' },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet', icon: <Zap className="w-4 h-4" />, description: 'Lead generation tools' },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Code className="w-4 h-4" />, description: 'Project management suite' },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: <Zap className="w-4 h-4" />, description: 'Email marketing automation' }
  ], [])

  const solutions = useMemo(() => [
    { name: 'AI Solutions', path: '/ai-services', icon: <Brain className="w-4 h-4" />, description: 'Artificial Intelligence services' },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" />, description: 'Next-generation connectivity' },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" />, description: 'Business intelligence and analytics' },
    { name: 'IoT Solutions', path: '/iot-solutions', icon: <Settings className="w-4 h-4" />, description: 'Internet of Things implementation' },
    { name: 'DevOps Solutions', path: '/devops-solutions', icon: <Code className="w-4 h-4" />, description: 'Development and operations' },
    { name: 'Machine Learning', path: '/machine-learning', icon: <Brain className="w-4 h-4" />, description: 'ML model development' }
  ], [])

  const resources = useMemo(() => [
    { name: 'Blog', path: '/blog', icon: <BookOpen className="w-4 h-4" />, description: 'Latest insights and trends' },
    { name: 'Case Studies', path: '/case-studies', icon: <BarChart3 className="w-4 h-4" />, description: 'Success stories and results' },
    { name: 'Tutorials', path: '/tutorials', icon: <BookOpen className="w-4 h-4" />, description: 'Learning resources' },
    { name: 'Demo', path: '/demo', icon: <Zap className="w-4 h-4" />, description: 'Product demonstrations' },
    { name: 'Support', path: '/support', icon: <Phone className="w-4 h-4" />, description: 'Help and support center' }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
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
                  
                  {/* AI Services */}
                  <div className="px-4 py-2">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">AI Services</h4>
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group rounded-lg"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <span className="font-medium text-sm">{service.name}</span>
                          <p className="text-xs text-gray-500">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* IT Services */}
                  <div className="px-4 py-2 border-t border-gray-700">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">IT Services</h4>
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group rounded-lg"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <span className="font-medium text-sm">{service.name}</span>
                          <p className="text-xs text-gray-500">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={toggleSolutions}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-purple-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Solutions</h3>
                  </div>
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      to={solution.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 group"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <span className="font-medium">{solution.name}</span>
                        <p className="text-xs text-gray-500">{solution.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Link */}
            <Link
              to="/micro-saas"
              className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
            >
              <span>Micro SAAS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

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
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-green-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider">Resources</h3>
                  </div>
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      to={resource.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                        {resource.icon}
                      </div>
                      <div className="flex-1">
                        <span className="font-medium">{resource.name}</span>
                        <p className="text-xs text-gray-500">{resource.description}</p>
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
                  <div className="ml-4 mt-2 space-y-1">
                    <div className="px-2 py-1">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">AI Services</h4>
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
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="px-2 py-1 border-t border-gray-700">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">IT Services</h4>
                      {itServices.map((service) => (
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
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Solutions */}
              <div>
                <button
                  onClick={toggleSolutions}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 font-medium"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSolutionsOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        to={solution.path}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"
                        onClick={() => {
                          setIsSolutionsOpen(false)
                          toggleMenu()
                        }}
                      >
                        {solution.icon}
                        <span className="text-sm">{solution.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <Link
                to="/micro-saas"
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 font-medium"
                onClick={toggleMenu}
              >
                <span>Micro SAAS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Mobile Resources */}
              <div>
                <button
                  onClick={toggleResources}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 font-medium"
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
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-green-400 transition-colors rounded-lg hover:bg-green-500/10"
                        onClick={() => {
                          setIsResourcesOpen(false)
                          toggleMenu()
                        }}
                      >
                        {resource.icon}
                        <span className="text-sm">{resource.name}</span>
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