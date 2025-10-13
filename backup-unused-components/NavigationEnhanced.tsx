import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight, Globe, Link, Sidebar, Video, Users, Search } from 'lucide-react'
import FuturisticButton from './FuturisticButton'

interface NavigationEnhancedProps {
  onSidebarToggle?: () => void
}

const NavigationEnhanced = React.memo<NavigationEnhancedProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [isItServicesOpen, setIsItServicesOpen] = useState(false)
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen)
  }, [isItServicesOpen])

  const toggleAiServices = useCallback(() => {
    setIsAiServicesOpen(!isAiServicesOpen)
  }, [isAiServicesOpen])

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(!isSearchOpen)
  }, [isSearchOpen])

  // Close all dropdowns when route changes
  useEffect(() => {
    setIsServicesOpen(false)
    setIsMicroSaasOpen(false)
    setIsItServicesOpen(false)
    setIsAiServicesOpen(false)
    setIsOpen(false)
  }, [location.pathname])

  const aiServices = useMemo(() => [
    { name: 'AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" />, featured: true },
    { name: 'AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Brain className="w-4 h-4" />, featured: true },
    { name: 'AI Cybersecurity Suite Pro', path: '/zion-ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'AI Business Intelligence Pro', path: '/zion-ai-business-intelligence-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" />, featured: false },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" />, featured: false },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" />, featured: false },
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" />, featured: false }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" />, featured: true },
    { name: 'Zion AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Brain className="w-4 h-4" />, featured: true },
    { name: 'Zion AI Cybersecurity Suite Pro', path: '/zion-ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'Zion AI Business Intelligence Pro', path: '/zion-ai-business-intelligence-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: false },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: false },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: false },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" />, featured: false }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SAAS', path: '/micro-saas' },
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
        { name: 'AI Video Generator', path: '/zion-ai-video-generator' },
        { name: 'AI Customer Insights', path: '/zion-ai-customer-insights' },
        { name: 'AI Cybersecurity Suite Pro', path: '/zion-ai-cybersecurity-suite-pro' },
        { name: 'AI Business Intelligence Pro', path: '/zion-ai-business-intelligence-pro' }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: <Shield className="w-4 h-4" />,
      services: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Development', path: '/mobile-development' }
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
        { name: '5G Smart Cities', path: '/5g-smart-city-solutions' }
      ]
    }
  ], [])

  return (
    <nav 
      className="bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 text-white shadow-2xl border-b border-cyan-500/20 backdrop-blur-md sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center text-cyan-400">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span>Live Support Available</span>
              </div>
              <div className="flex items-center text-cyan-400">
                <span className="mr-2">📞</span>
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-cyan-400">
                <span className="mr-2">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FuturisticButton
                href="/contact"
                variant="ghost"
                size="sm"
                className="text-cyan-400 hover:text-white"
              >
                Get Quote
              </FuturisticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
            aria-label="Zion Tech Group - Go to homepage"
          >
            Zion Tech Group
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Sidebar Toggle Button */}
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-5 h-5" />
            </button>
            
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group hover:text-cyan-400 transition-all duration-300 font-medium ${
                  location.pathname === item.path ? 'text-cyan-400' : 'text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-purple-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">AI Services</h3>
                  </div>
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 group ${
                        service.featured ? 'bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border-l-2 border-purple-400' : ''
                      }`}
                      onClick={() => setIsAiServicesOpen(false)}
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

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isItServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-green-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider">IT Services</h3>
                  </div>
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
                      onClick={() => setIsItServicesOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
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

            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started
            </FuturisticButton>
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

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-cyan-500/20">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, solutions, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    location.pathname === item.path 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'hover:bg-cyan-500/10 hover:text-cyan-400'
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 font-medium"
                >
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAiServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"
                        onClick={() => {
                          setIsAiServicesOpen(false)
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

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={toggleItServices}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 font-medium"
                >
                  <span>IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isItServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-green-400 transition-colors rounded-lg hover:bg-green-500/10"
                        onClick={() => {
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

              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                className="mt-4 flex items-center justify-center space-x-2"
                onClick={toggleMenu}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </FuturisticButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

NavigationEnhanced.displayName = 'NavigationEnhanced'

export default NavigationEnhanced