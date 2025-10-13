import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight, Monitor, Users, Settings, Globe, Smartphone, Mail, Phone, MapPin } from 'lucide-react'
import FuturisticButton from './FuturisticButton'

interface NavigationProps {
  onSidebarToggle?: () => void
}

const Navigation = React.memo<NavigationProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [isItServicesOpen, setIsItServicesOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleSolutions = useCallback(() => {
    setIsSolutionsOpen(!isSolutionsOpen)
  }, [isSolutionsOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])


  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion Data Sync', path: '/zion-data-sync', icon: <Database className="w-4 h-4" /> },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: <Zap className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Solutions', path: '/solutions', hasDropdown: true },
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

  const solutionCategories = useMemo(() => [
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      services: [
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
        { name: 'Zion Security Shield', path: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
        { name: 'Zion Content Studio', path: '/zion-content-studio' },
        { name: 'Zion Project Master', path: '/zion-project-master' },
        { name: 'Zion Email Automation', path: '/zion-email-automation' }
      ]
    },
    {
      name: 'Enterprise Solutions',
      path: '/enterprise-solutions',
      icon: <Database className="w-4 h-4" />,
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'Enterprise Integration', path: '/enterprise-integration' },
        { name: 'Performance Optimization', path: '/performance-optimization' },
        { name: 'Disaster Recovery', path: '/disaster-recovery-advanced' },
        { name: 'Compliance Automation', path: '/compliance-automation' }
      ]
    },
    {
      name: 'Industry Solutions',
      path: '/industry-solutions',
      icon: <Code className="w-4 h-4" />,
      services: [
        { name: 'Healthcare IT', path: '/healthcare-it' },
        { name: 'Financial IT', path: '/financial-it' },
        { name: 'E-commerce Solutions', path: '/e-commerce-development' },
        { name: 'Blockchain Solutions', path: '/blockchain-development' },
        { name: 'IoT Solutions', path: '/iot-solutions' },
        { name: 'Smart Cities', path: '/smart-cities' }
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
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-cyan-400">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-cyan-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
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
            {/* Sidebar Toggle Button */}
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-5 h-5" />
            </button>
            
            {mainNavItems.map((item) => {
              if (item.hasDropdown) {
                if (item.name === 'Services') {
                  return (
                    <div key={item.name} className="relative">
                      <button
                        onClick={toggleServices}
                        className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
                      >
                        <span>{item.name}</span>
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
                  )
                } else if (item.name === 'Solutions') {
                  return (
                    <div key={item.name} className="relative">
                      <button
                        onClick={toggleSolutions}
                        className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 font-medium group"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isSolutionsOpen && (
                        <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-purple-500/20">
                          <div className="px-4 py-2 border-b border-gray-700 mb-2">
                            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Our Solutions</h3>
                          </div>
                          <div className="grid grid-cols-1 gap-4 px-4">
                            {solutionCategories.map((category) => (
                              <div key={category.name} className="space-y-2">
                                <div className="flex items-center space-x-2 text-purple-300 font-semibold text-sm">
                                  {category.icon}
                                  <span>{category.name}</span>
                                </div>
                                <div className="ml-6 space-y-1">
                                  {category.services.slice(0, 3).map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.path}
                                      className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                                      onClick={() => setIsSolutionsOpen(false)}
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                  {category.services.length > 3 && (
                                    <Link
                                      to={category.path}
                                      className="block text-purple-400 hover:text-purple-300 transition-colors text-xs font-medium py-1"
                                      onClick={() => setIsSolutionsOpen(false)}
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
                  )
                }
              }
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative group hover:text-cyan-400 transition-all duration-300 font-medium"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            })}

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
                  <div className="ml-4 mt-2 space-y-4">
                    {solutionCategories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <div className="flex items-center space-x-2 text-purple-300 font-semibold text-sm">
                          {category.icon}
                          <span>{category.name}</span>
                        </div>
                        <div className="ml-4 space-y-1">
                          {category.services.slice(0, 3).map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                              onClick={() => {
                                setIsSolutionsOpen(false)
                                toggleMenu()
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                          {category.services.length > 3 && (
                            <Link
                              to={category.path}
                              className="block text-purple-400 hover:text-purple-300 transition-colors text-xs font-medium py-1"
                              onClick={() => {
                                setIsSolutionsOpen(false)
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