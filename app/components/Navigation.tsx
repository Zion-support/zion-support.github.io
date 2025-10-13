import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, Sidebar as SidebarIcon } from 'lucide-react'

interface NavigationProps {
  onSidebarToggle?: () => void
}

const Navigation = React.memo<NavigationProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [isItServicesOpen, setIsItServicesOpen] = useState(false)
  
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

  const closeAllMenus = useCallback(() => {
    setIsOpen(false)
    setIsServicesOpen(false)
    setIsMicroSaasOpen(false)
    setIsItServicesOpen(false)
  }, [])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: Brain },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
    { name: 'AI Customer Service', href: '/ai-customer-service', icon: Star },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Email Automation', href: '/ai-email-automation', icon: Zap },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Shield },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Star },
    { name: 'AI Marketing', href: '/ai-marketing', icon: BarChart3 },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: Brain },
    { name: 'AI Project Management', href: '/ai-project-management', icon: Code },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Star },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Zap },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Code }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Mobile Development', href: '/mobile-development', icon: Code },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Custom Software', href: '/custom-software', icon: Code },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Cloud },
    { name: 'Cloud Native Development', href: '/cloud-native-development', icon: Cloud },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: Code },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: Code },
    { name: 'Data Engineering', href: '/data-engineering', icon: Database },
    { name: 'Cybersecurity Advanced', href: '/cybersecurity-advanced', icon: Shield },
    { name: 'Cloud Migration Advanced', href: '/cloud-migration-advanced', icon: Cloud },
    { name: 'Machine Learning Ops', href: '/machine-learning-ops', icon: Brain },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: Code },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap },
    { name: 'Disaster Recovery Advanced', href: '/disaster-recovery-advanced', icon: Shield },
    { name: 'Compliance Automation', href: '/compliance-automation', icon: Shield },
    { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: Cloud },
    { name: 'Security Automation', href: '/security-automation', icon: Shield },
    { name: 'Data Visualization', href: '/data-visualization', icon: BarChart3 },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Zap },
    { name: 'Cloud Native Security', href: '/cloud-native-security', icon: Shield }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart3 },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: Code },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Star },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Code },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Zap },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Star },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Zap },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: Code },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Database },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: Shield },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: BarChart3 }
  ], [])

  return (
    <nav className="relative bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-white/10 z-50">
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-3">AI Services</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {aiServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={closeAllMenus}
                          className="flex items-center p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                        >
                          <service.icon className="w-4 h-4 mr-3" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleItServices}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isItServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-white/10 z-50">
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-3">IT Services</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {itServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={closeAllMenus}
                          className="flex items-center p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                        >
                          <service.icon className="w-4 h-4 mr-3" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSaas}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isMicroSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-white/10 z-50">
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-3">Micro SAAS Solutions</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {microSaasServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={closeAllMenus}
                          className="flex items-center p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                        >
                          <service.icon className="w-4 h-4 mr-3" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/case-studies"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Case Studies
            </Link>

            <Link
              to="/careers"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Careers
            </Link>

            <Link
              to="/blog"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            {onSidebarToggle && (
              <button
                onClick={onSidebarToggle}
                className="text-gray-300 hover:text-white p-2"
              >
                <SidebarIcon className="w-6 h-6" />
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm border-t border-white/10">
              <Link
                to="/"
                onClick={closeAllMenus}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeAllMenus}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                to="/ai-services"
                onClick={closeAllMenus}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                AI Services
              </Link>
              <Link
                to="/services"
                onClick={closeAllMenus}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                IT Services
              </Link>
              <Link
                to="/case-studies"
                onClick={closeAllMenus}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Case Studies
              </Link>
              <Link
                to="/careers"
                onClick={closeAllMenus}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Careers
              </Link>
              <Link
                to="/blog"
                onClick={closeAllMenus}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={closeAllMenus}
                className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
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