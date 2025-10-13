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
  Lock,
  TrendingUp,
  Settings,
  MessageSquare,
  Calendar,
  FileText,
  Search,
  Bell,
  User,
  LogOut,
  Home,
  Briefcase,
  Target,
  Rocket,
  Wifi,
  Camera,
  Headphones,
  Mic,
  Video,
  Image,
  Music,
  BookOpen,
  Lightbulb,
  Puzzle,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Gift,
  Tag,
  Percent,
  Calculator,
  PieChart,
  LineChart,
  Activity,
  Layers,
  Grid,
  List,
  Map,
  Compass,
  Navigation as NavIcon,
  Globe2,
  WifiOff,
  Signal,
  Bluetooth,
  Usb,
  HardDrive,
  MemoryStick,
  Printer,
  Scanner,
  Fax,
  Voicemail,
  Headset,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Hourglass,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  Calendar as CalendarIcon,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarHeart,
  CalendarStar,
  CalendarClock,
  CalendarUser,
  CalendarEdit,
  CalendarTrash,
  CalendarSettings,
  CalendarImport,
  CalendarExport,
  CalendarShare,
  CalendarLock,
  CalendarUnlock,
  CalendarKey,
  CalendarShield,
  CalendarAlert,
  CalendarBell,
  CalendarZap,
  CalendarSparkles,
  CalendarGift,
  CalendarAward,
  CalendarTrophy,
  CalendarMedal,
  CalendarCrown,
  CalendarGem,
  CalendarDiamond,
  CalendarPearl,
  CalendarRuby,
  CalendarSapphire,
  CalendarEmerald,
  CalendarTopaz,
  CalendarAmethyst,
  CalendarQuartz,
  CalendarCrystal,
  CalendarJewel,
  CalendarTreasure,
  CalendarGold,
  CalendarSilver,
  CalendarBronze,
  CalendarPlatinum,
  CalendarTitanium,
  CalendarSteel,
  CalendarIron,
  CalendarCopper,
  CalendarAluminum,
  CalendarZinc,
  CalendarTin,
  CalendarLead,
  CalendarMercury,
  CalendarUranium,
  CalendarPlutonium,
  CalendarRadium,
  CalendarThorium,
  CalendarActinium,
  CalendarProtactinium,
  CalendarNeptunium,
  CalendarAmericium,
  CalendarCurium,
  CalendarBerkelium,
  CalendarCalifornium,
  CalendarEinsteinium,
  CalendarFermium,
  CalendarMendelevium,
  CalendarNobelium,
  CalendarLawrencium,
  CalendarRutherfordium,
  CalendarDubnium,
  CalendarSeaborgium,
  CalendarBohrium,
  CalendarHassium,
  CalendarMeitnerium,
  CalendarDarmstadtium,
  CalendarRoentgenium,
  CalendarCopernicium,
  CalendarNihonium,
  CalendarFlerovium,
  CalendarMoscovium,
  CalendarLivermorium,
  CalendarTennessine,
  CalendarOganesson,
  Package,
  Receipt,
  ClipboardList,
  Workflow
} from 'lucide-react'

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
      icon: <Home className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Briefcase className="w-4 h-4" />,
      hasDropdown: true,
      isOpen: isServicesOpen,
      onToggle: toggleServices,
      children: [
        {
          name: 'AI Services',
          href: '/ai-services',
          icon: <Brain className="w-4 h-4" />,
          hasDropdown: true,
          isOpen: isAiServicesOpen,
          onToggle: toggleAiServices,
          children: [
            { name: 'AI Analytics', href: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Automation', href: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
            { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', icon: <TrendingUp className="w-4 h-4" /> },
            { name: 'AI Content Generation', href: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
            { name: 'AI Customer Service', href: '/ai-customer-service', icon: <MessageSquare className="w-4 h-4" /> },
            { name: 'AI Customer Churn Predictor', href: '/ai-customer-churn-predictor', icon: <Target className="w-4 h-4" /> },
            { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: <Globe className="w-4 h-4" /> },
            { name: 'AI Cybersecurity Monitor Pro', href: '/ai-cybersecurity-monitor-pro', icon: <Shield className="w-4 h-4" /> },
            { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
            { name: 'AI Email Automation', href: '/ai-email-automation', icon: <Mail className="w-4 h-4" /> },
            { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: <Lock className="w-4 h-4" /> },
            { name: 'AI Healthcare', href: '/ai-healthcare', icon: <Activity className="w-4 h-4" /> },
            { name: 'AI Marketing', href: '/ai-marketing', icon: <Target className="w-4 h-4" /> },
            { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: <TrendingUp className="w-4 h-4" /> },
            { name: 'AI Project Management', href: '/ai-project-management', icon: <Calendar className="w-4 h-4" /> },
            { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: <Star className="w-4 h-4" /> },
            { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: <TrendingUp className="w-4 h-4" /> },
            { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: <Workflow className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Micro SAAS',
          href: '/micro-saas',
          icon: <Cloud className="w-4 h-4" />,
          hasDropdown: true,
          isOpen: isMicroSaasOpen,
          onToggle: toggleMicroSaas,
          children: [
            { name: 'Analytics Dashboard', href: '/analytics-dashboard', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'CRM System', href: '/crm-system', icon: <Users className="w-4 h-4" /> },
            { name: 'Project Management', href: '/project-management', icon: <Calendar className="w-4 h-4" /> },
            { name: 'Email Marketing', href: '/email-marketing', icon: <Mail className="w-4 h-4" /> },
            { name: 'Social Media Manager', href: '/social-media-manager', icon: <Globe className="w-4 h-4" /> },
            { name: 'Inventory Management', href: '/inventory-management', icon: <Package className="w-4 h-4" /> }
          ]
        },
        {
          name: '5G Solutions',
          href: '/5g-solutions',
          icon: <Wifi className="w-4 h-4" />,
          hasDropdown: true,
          isOpen: is5gServicesOpen,
          onToggle: toggle5gServices,
          children: [
            { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: <Wifi className="w-4 h-4" /> },
            { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: <Cpu className="w-4 h-4" /> },
            { name: '5G Edge Computing', href: '/5g-edge-computing', icon: <Database className="w-4 h-4" /> },
            { name: '5G Mobile Applications', href: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
            { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
            { name: '5G Private Networks', href: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> }
          ]
        },
        {
          name: 'IT Services',
          href: '/it-services',
          icon: <Settings className="w-4 h-4" />,
          hasDropdown: true,
          isOpen: isItServicesOpen,
          onToggle: toggleItServices,
          children: [
            { name: 'Cloud Solutions', href: '/cloud-solutions', icon: <Cloud className="w-4 h-4" /> },
            { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
            { name: 'Software Development', href: '/software-development', icon: <Code className="w-4 h-4" /> },
            { name: 'Database Management', href: '/database-management', icon: <Database className="w-4 h-4" /> },
            { name: 'Network Solutions', href: '/network-solutions', icon: <Wifi className="w-4 h-4" /> },
            { name: 'IT Consulting', href: '/it-consulting', icon: <Users className="w-4 h-4" /> }
          ]
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
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ], [isServicesOpen, isMicroSaasOpen, isItServicesOpen, isAiServicesOpen, is5gServicesOpen, toggleServices, toggleMicroSaas, toggleItServices, toggleAiServices, toggle5gServices])

  return (
    <nav className="relative bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-2xl">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
                <span className="text-xs text-purple-300 font-medium">AI & IT Solutions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-300 group-hover:glow-purple"
                    onClick={item.hasDropdown ? item.onToggle : undefined}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${item.isOpen ? 'rotate-180' : ''}`} />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && item.children && (
                    <div className={`absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-purple-500/20 rounded-lg shadow-2xl z-50 transition-all duration-300 ${item.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.children.map((child) => (
                            <div key={child.name} className="relative group/sub">
                              <Link
                                to={child.href}
                                className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-300 group-hover/sub:glow-purple"
                                onClick={child.hasDropdown ? child.onToggle : undefined}
                              >
                                {child.icon}
                                <span className="flex-1">{child.name}</span>
                                {child.hasDropdown && (
                                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${child.isOpen ? 'rotate-180' : ''}`} />
                                )}
                              </Link>
                              
                              {/* Sub-dropdown Menu */}
                              {child.hasDropdown && child.children && (
                                <div className={`absolute left-full top-0 ml-2 w-72 bg-gray-900/95 backdrop-blur-md border border-purple-500/20 rounded-lg shadow-2xl z-50 transition-all duration-300 ${child.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                  <div className="p-4">
                                    <div className="grid grid-cols-1 gap-2">
                                      {child.children.map((subChild) => (
                                        <Link
                                          key={subChild.name}
                                          to={subChild.href}
                                          className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-300 group-hover/sub:glow-purple"
                                        >
                                          {subChild.icon}
                                          <span>{subChild.name}</span>
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
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/demo"
              className="px-4 py-2 text-sm font-medium text-purple-300 hover:text-white border border-purple-500/50 hover:border-purple-400 rounded-lg transition-all duration-300 hover:glow-purple"
            >
              Demo
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 futuristic-btn"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-300"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-purple-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-300"
                  onClick={item.hasDropdown ? item.onToggle : undefined}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${item.isOpen ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && item.children && item.isOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <div key={child.name}>
                        <Link
                          to={child.href}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-300"
                          onClick={child.hasDropdown ? child.onToggle : undefined}
                        >
                          {child.icon}
                          <span>{child.name}</span>
                          {child.hasDropdown && (
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${child.isOpen ? 'rotate-180' : ''}`} />
                          )}
                        </Link>
                        
                        {/* Mobile Sub-dropdown */}
                        {child.hasDropdown && child.children && child.isOpen && (
                          <div className="ml-4 mt-2 space-y-1">
                            {child.children.map((subChild) => (
                              <Link
                                key={subChild.name}
                                to={subChild.href}
                                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-500 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-300"
                              >
                                {subChild.icon}
                                <span>{subChild.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation