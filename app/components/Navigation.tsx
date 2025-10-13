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
  Sun,
  Bolt,
  Cube,
  UserGroup,
  Beaker,
  LightBulb,
  Clock,
  FileText,
  Package,
  DollarSign,
  Megaphone,
  TrendingUp,
  CheckSquare,
  Wifi,
  Headphones,
  Building,
  MessageCircle,
  CheckCircle
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
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false)
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false)
  
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

  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(!isAIServicesOpen)
  }, [isAIServicesOpen])

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen)
  }, [is5GServicesOpen])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: BarChart3 },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: Sparkles },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: Users },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: Database },
    { name: 'AI Document Processing', path: '/ai-document-processing', icon: Code },
    { name: 'AI Machine Learning', path: '/ai-machine-learning', icon: Brain },
    { name: 'AI Smart Recruitment', path: '/ai-smart-recruitment', icon: UserGroup },
    { name: 'AI Smart Inventory', path: '/ai-smart-inventory', icon: Cube },
    { name: 'AI Smart Customer Insights', path: '/ai-smart-customer-insights', icon: BarChart3 },
    { name: 'AI Smart Farming', path: '/ai-smart-farming', icon: Sun },
    { name: 'AI Smart Energy', path: '/ai-smart-energy', icon: Bolt },
    { name: 'AI Chatbot', path: '/ai-chatbot', icon: MessageCircle },
    { name: 'AI Virtual Assistant', path: '/ai-virtual-assistant', icon: Users },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: Zap }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'Project Management', path: '/project-management', icon: BarChart3 },
    { name: 'Time Tracking', path: '/time-tracking', icon: Clock },
    { name: 'Invoice Management', path: '/invoice-management', icon: FileText },
    { name: 'Customer Relationship', path: '/customer-relationship', icon: Users },
    { name: 'Inventory Management', path: '/inventory-management', icon: Package },
    { name: 'Human Resources', path: '/human-resources', icon: Users },
    { name: 'Financial Management', path: '/financial-management', icon: DollarSign },
    { name: 'Marketing Automation', path: '/marketing-automation', icon: Megaphone },
    { name: 'Sales Management', path: '/sales-management', icon: TrendingUp },
    { name: 'Document Management', path: '/document-management', icon: FileText },
    { name: 'Task Management', path: '/task-management', icon: CheckSquare },
    { name: 'Team Collaboration', path: '/team-collaboration', icon: Users },
    { name: 'Workflow Automation', path: '/workflow-automation', icon: Zap },
    { name: 'Data Visualization', path: '/data-visualization', icon: BarChart3 },
    { name: 'Email Marketing', path: '/email-marketing', icon: Mail }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Web Development', path: '/web-development', icon: Globe },
    { name: 'Mobile Development', path: '/mobile-development', icon: Smartphone },
    { name: 'Cloud Computing', path: '/cloud-computing', icon: Cloud },
    { name: 'Database Services', path: '/database-services', icon: Database },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: Wifi },
    { name: 'IT Consulting', path: '/it-consulting', icon: Users },
    { name: 'System Integration', path: '/system-integration', icon: LinkIcon },
    { name: 'Data Analytics', path: '/data-analytics', icon: BarChart3 },
    { name: 'Software Testing', path: '/software-testing', icon: CheckCircle },
    { name: 'Blockchain Development', path: '/blockchain-development', icon: LinkIcon },
    { name: 'IoT Development', path: '/iot-development', icon: Cpu },
    { name: 'DevOps', path: '/devops', icon: Code },
    { name: 'Quality Assurance', path: '/quality-assurance', icon: Award },
    { name: 'Technical Support', path: '/technical-support', icon: Headphones }
  ], [])

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: BarChart3 },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: Cpu },
    { name: '5G Implementation', path: '/5g-implementation', icon: Zap },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: Cpu },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: Smartphone },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: Wifi },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: Shield },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: Building }
  ], [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAIServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  AI Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isAIServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {aiServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                          onClick={() => setIsAIServicesOpen(false)}
                        >
                          <service.icon className="w-4 h-4" />
                          <span>{service.name}</span>
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
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Micro SAAS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isMicroSaasOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {microSaasServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                          onClick={() => setIsMicroSaasOpen(false)}
                        >
                          <service.icon className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleItServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  IT Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isItServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {itServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                          onClick={() => setIsItServicesOpen(false)}
                        >
                          <service.icon className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 5G Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={toggle5GServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  5G Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {is5GServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {fiveGServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                          onClick={() => setIs5GServicesOpen(false)}
                        >
                          <service.icon className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Pricing
              </Link>
              
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <FuturisticButton
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white p-2"
            >
              <SidebarIcon className="h-6 w-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/ai-services"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              AI Services
            </Link>
            <Link
              to="/micro-saas"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Micro SAAS
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              IT Services
            </Link>
            <Link
              to="/5g-solutions"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              5G Solutions
            </Link>
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <FuturisticButton
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block"
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