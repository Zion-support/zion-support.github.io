import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  Code,
  Database,
  ChevronDown,
  Menu,
  X,
  SidebarIcon,
  Cpu,
  Link as LinkIcon,
  Workflow,
  Target,
  TrendingUp,
  Heart,
  Settings
} from 'lucide-react'
import FuturisticButton from './FuturisticButton'

interface NavigationProps {
  onSidebarToggle?: () => void
}

const Navigation = React.memo<NavigationProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [isItServicesOpen, setIsItServicesOpen] = useState(false)
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false)
  const [is5gServicesOpen, setIs5gServicesOpen] = useState(false)
  
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

  const toggle5gServices = useCallback(() => {
    setIs5gServicesOpen(!is5gServicesOpen)
  }, [is5gServicesOpen])

  const aiServices = useMemo(() => [
    { name: 'AI Quantum Computing', path: '/ai-quantum-computing', icon: <Cpu className="w-4 h-4" />, featured: true },
    { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions', icon: <LinkIcon className="w-4 h-4" />, featured: true },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Cybersecurity Suite Pro', path: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support-chatbot', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Code Assistant Pro', path: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Marketing Automation', path: '/ai-marketing', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Workflow Optimizer', path: '/ai-workflow-automation', icon: <Workflow className="w-4 h-4" /> },
    { name: 'AI Sales Predictor', path: '/ai-predictive-analytics', icon: <TrendingUp className="w-4 h-4" /> }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'IoT Solutions', path: '/iot-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: 'DevOps Solutions', path: '/devops-solutions', icon: <Settings className="w-4 h-4" /> }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Zion AI Sales Predictor', path: '/zion-ai-sales-predictor', icon: <TrendingUp className="w-4 h-4" />, featured: true },
    { name: 'Zion AI Workflow Optimizer', path: '/zion-ai-workflow-optimizer', icon: <Workflow className="w-4 h-4" />, featured: true },
    { name: 'Zion AI Customer Insights Pro', path: '/zion-ai-customer-insights-pro', icon: <Heart className="w-4 h-4" />, featured: true },
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion Data Sync', path: '/zion-data-sync', icon: <Database className="w-4 h-4" /> },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: <Mail className="w-4 h-4" /> },
    { name: 'Zion Social Scheduler', path: '/zion-social-scheduler', icon: <Users className="w-4 h-4" /> }
  ], [])

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Settings className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Target className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'Micro SAAS', path: '/micro-saas' },
    { name: 'IT Services', path: '/it-services' },
    { name: '5G Solutions', path: '/5g-solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ], [])

  return (
    <nav className="relative z-50 bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {mainNavItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    {(item.name === 'AI Services' || item.name === 'Micro SAAS' || item.name === 'IT Services' || item.name === '5G Solutions') && (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </Link>

                  {/* Dropdown Menus */}
                  {item.name === 'AI Services' && (
                    <div className="absolute left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Brain className="w-5 h-5 mr-2 text-purple-400" />
                          AI Services
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {aiServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group"
                            >
                              <div className="text-purple-400 mr-3">{service.icon}</div>
                              <div className="flex-1">
                                <div className="text-white text-sm font-medium group-hover:text-purple-300">
                                  {service.name}
                                  {service.featured && <Star className="w-3 h-3 inline ml-1 text-yellow-400" />}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {item.name === 'Micro SAAS' && (
                    <div className="absolute left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                          Micro SAAS Services
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {microSaasServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group"
                            >
                              <div className="text-purple-400 mr-3">{service.icon}</div>
                              <div className="flex-1">
                                <div className="text-white text-sm font-medium group-hover:text-purple-300">
                                  {service.name}
                                  {service.featured && <Star className="w-3 h-3 inline ml-1 text-yellow-400" />}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {item.name === 'IT Services' && (
                    <div className="absolute left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Settings className="w-5 h-5 mr-2 text-purple-400" />
                          IT Services
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {itServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group"
                            >
                              <div className="text-purple-400 mr-3">{service.icon}</div>
                              <div className="flex-1">
                                <div className="text-white text-sm font-medium group-hover:text-purple-300">
                                  {service.name}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {item.name === '5G Solutions' && (
                    <div className="absolute left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Globe className="w-5 h-5 mr-2 text-purple-400" />
                          5G Solutions
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {fiveGServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group"
                            >
                              <div className="text-purple-400 mr-3">{service.icon}</div>
                              <div className="flex-1">
                                <div className="text-white text-sm font-medium group-hover:text-purple-300">
                                  {service.name}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <FuturisticButton
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <FuturisticButton
                href="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block"
              >
                Get Started
              </FuturisticButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation