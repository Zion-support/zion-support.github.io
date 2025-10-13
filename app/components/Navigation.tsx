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
  Leaf,
  Heart,
  Truck,
  Mic,
  DollarSign,
  TrendingUp,
  Package,
  Settings,
  Target,
  Lock,
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

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      href: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Settings className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'AI Services',
          href: '/ai-services',
          icon: <Brain className="w-4 h-4" />,
          description: 'AI-powered solutions for business automation'
        },
        {
          name: 'IT Services',
          href: '/it-services',
          icon: <Code className="w-4 h-4" />,
          description: 'Comprehensive IT solutions and support'
        },
        {
          name: 'Cloud Services',
          href: '/cloud-services',
          icon: <Cloud className="w-4 h-4" />,
          description: 'Scalable cloud infrastructure and management'
        },
        {
          name: '5G Solutions',
          href: '/5g-solutions',
          icon: <Zap className="w-4 h-4" />,
          description: 'Next-generation 5G technology solutions'
        },
        {
          name: 'Micro SAAS',
          href: '/micro-saas',
          icon: <Package className="w-4 h-4" />,
          description: 'Specialized software-as-a-service solutions'
        }
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: <DollarSign className="w-4 h-4" />
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: <Award className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ], [])

  const microSaasServices = useMemo(() => [
    {
      name: 'Zion Analytics Pro',
      href: '/zion-analytics-pro',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'AI-powered business intelligence platform',
      price: 'From $29/month'
    },
    {
      name: 'Zion Security Shield',
      href: '/zion-security-shield',
      icon: <Shield className="w-4 h-4" />,
      description: 'Advanced cybersecurity protection',
      price: 'From $49/month'
    },
    {
      name: 'Zion AI Climate Optimizer',
      href: '/zion-ai-climate-optimizer',
      icon: <Leaf className="w-4 h-4" />,
      description: 'AI-powered sustainability and carbon management',
      price: 'From $199/month'
    },
    {
      name: 'Zion AI Mental Health Assistant',
      href: '/zion-ai-mental-health-assistant',
      icon: <Heart className="w-4 h-4" />,
      description: 'AI-powered mental wellness and therapy',
      price: 'From $29/month'
    },
    {
      name: 'Zion AI Supply Chain Predictor',
      href: '/zion-ai-supply-chain-predictor',
      icon: <Truck className="w-4 h-4" />,
      description: 'AI-powered supply chain optimization',
      price: 'From $399/month'
    },
    {
      name: 'Zion AI Voice Analytics',
      href: '/zion-ai-voice-analytics',
      icon: <Mic className="w-4 h-4" />,
      description: 'AI-powered voice emotion and sentiment analysis',
      price: 'From $149/month'
    }
  ], [])

  const aiServices = useMemo(() => [
    {
      name: 'AI Analytics',
      href: '/ai-analytics',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'Advanced AI-powered data analytics'
    },
    {
      name: 'AI Automation',
      href: '/ai-automation',
      icon: <Zap className="w-4 h-4" />,
      description: 'Intelligent business process automation'
    },
    {
      name: 'AI Content Generation',
      href: '/ai-content-generation',
      icon: <Code className="w-4 h-4" />,
      description: 'AI-powered content creation and generation'
    },
    {
      name: 'AI Customer Service',
      href: '/ai-customer-service',
      icon: <Users className="w-4 h-4" />,
      description: 'Intelligent customer support solutions'
    },
    {
      name: 'AI Cybersecurity',
      href: '/ai-cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'AI-enhanced security and threat detection'
    }
  ], [])

  const itServices = useMemo(() => [
    {
      name: 'Cloud Infrastructure',
      href: '/cloud-infrastructure',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Scalable cloud solutions and management'
    },
    {
      name: 'Web Development',
      href: '/web-development',
      icon: <Code className="w-4 h-4" />,
      description: 'Custom web applications and solutions'
    },
    {
      name: 'Mobile Development',
      href: '/mobile-development',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Native and cross-platform mobile apps'
    },
    {
      name: 'Database Management',
      href: '/database-management',
      icon: <Database className="w-4 h-4" />,
      description: 'Database design, optimization, and maintenance'
    },
    {
      name: 'Cybersecurity Solutions',
      href: '/cybersecurity-solutions',
      icon: <Shield className="w-4 h-4" />,
      description: 'Comprehensive security solutions'
    }
  ], [])

  const fiveGServices = useMemo(() => [
    {
      name: '5G Implementation',
      href: '/5g-implementation',
      icon: <Zap className="w-4 h-4" />,
      description: 'Complete 5G network implementation'
    },
    {
      name: '5G Edge Computing',
      href: '/5g-edge-computing',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Edge computing solutions for 5G networks'
    },
    {
      name: '5G IoT Solutions',
      href: '/5g-iot-solutions',
      icon: <Globe className="w-4 h-4" />,
      description: 'IoT connectivity and management'
    },
    {
      name: '5G Smart City Solutions',
      href: '/5g-smart-city-solutions',
      icon: <Award className="w-4 h-4" />,
      description: 'Smart city infrastructure and solutions'
    }
  ], [])

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-96 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50"
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors"
                          >
                            <div className="text-blue-400 mt-0.5">
                              {dropdownItem.icon}
                            </div>
                            <div>
                              <div className="text-white font-medium">{dropdownItem.name}</div>
                              <div className="text-gray-400 text-sm">{dropdownItem.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to="/demo"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Demo
            </Link>
            <FuturisticButton
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/demo"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Star className="w-4 h-4" />
                  <span>Demo</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center space-x-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 block px-3 py-2 rounded-md text-base font-medium mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
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