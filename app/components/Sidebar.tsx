import React, { useState, useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Users,
  Settings,
  BarChart3,
  Shield,
  Cloud,
  Code,
  Brain,
  Zap,
  Database,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Package,
  Network,
  Cpu,
  Smartphone,
  Monitor,
  Target,
  FileText,
  Heart,
  Receipt,
  TrendingUp,
  MessageSquare,
  Calendar,
  CreditCard,
  Lock,
  PieChart,
  Bot,
  Palette,
  Video,
  Music,
  Camera,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  Eye,
  Edit,
  Plus,
  RefreshCw,
  Play,
  Pause,
  Volume2,
  Maximize,
  Minimize,
  Copy,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  List,
  Quote,
  Link as LinkIcon,
  ExternalLink,
  Info,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Crown,
  Gem,
  Diamond,
  Zap as Lightning,
  Flame,
  Sun,
  Moon,
  Droplets,
  Wind,
  Snowflake,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudSun,
  CloudMoon,
  Sunrise,
  Sunset,
  Thermometer,
  Gauge,
  Activity,
  Pulse,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Kiss,
  Wink,
  Tongue,
  Sad,
  Happy,
  Neutral,
  Excited,
  Proud,
  Shy,
  Cool,
  Hot,
  Cold,
  Warm,
  Fresh,
  Stale,
  New,
  Old,
  Young,
  Mature,
  Beginner,
  Expert,
  Pro,
  Amateur,
  Rookie,
  Veteran,
  Master,
  Legend,
  Hero,
  Champion,
  Winner,
  Loser,
  Success,
  Failure,
  Victory,
  Defeat,
  Win,
  Lose,
  Draw,
  Tie,
  Equal,
  Different,
  Same,
  Similar,
  Unique,
  Common,
  Rare,
  Frequent,
  Occasional,
  Regular,
  Irregular,
  Normal,
  Abnormal,
  Standard,
  Custom,
  Default,
  Special,
  General,
  Specific,
  Broad,
  Narrow,
  Wide,
  Thin,
  Thick,
  Large,
  Small,
  Big,
  Tiny,
  Huge,
  Massive,
  Mini,
  Micro,
  Macro,
  Mega,
  Giga,
  Tera,
  Peta,
  Exa,
  Zetta,
  Yotta,
  Kilo,
  Hecto,
  Deca,
  Deci,
  Centi,
  Milli,
  Micro as MicroIcon,
  Nano,
  Pico,
  Femto,
  Atto,
  Zepto,
  Yocto
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = useCallback((section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(section)) {
        newSet.delete(section)
      } else {
        newSet.add(section)
      }
      return newSet
    })
  }, [])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" />, featured: true },
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" />, featured: true },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Document Processing', path: '/ai-document-processing', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Marketing Automation', path: '/ai-marketing-automation', icon: <Target className="w-4 h-4" /> },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Bot className="w-4 h-4" /> },
    { name: 'AI Code Assistant', path: '/ai-code-assistant', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Design Studio', path: '/ai-design-studio', icon: <Palette className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Computer Vision', path: '/ai-computer-vision', icon: <Eye className="w-4 h-4" /> }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: 'DevOps Services', path: '/devops-services', icon: <Settings className="w-4 h-4" />, featured: true },
    { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" />, featured: true },
    { name: 'Network Security', path: '/network-security', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'Software Development', path: '/software-development', icon: <Code className="w-4 h-4" /> },
    { name: 'System Integration', path: '/system-integration', icon: <Database className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'IT Support', path: '/it-support', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Managed Services', path: '/managed-services', icon: <Settings className="w-4 h-4" /> },
    { name: 'Security Audit', path: '/security-audit', icon: <Shield className="w-4 h-4" /> },
    { name: 'Cloud Consulting', path: '/cloud-consulting', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Data Center Solutions', path: '/data-center-solutions', icon: <Database className="w-4 h-4" /> },
    { name: 'Disaster Recovery', path: '/disaster-recovery', icon: <Shield className="w-4 h-4" /> },
    { name: 'Technology Consulting', path: '/technology-consulting', icon: <Users className="w-4 h-4" /> }
  ], [])

  const microSaasServices = useMemo(() => [
    { name: 'AI Email Analyzer Pro', path: '/ai-powered-email-analyzer', icon: <Mail className="w-4 h-4" />, featured: true },
    { name: 'Smart Inventory Optimizer', path: '/smart-inventory-optimizer', icon: <Package className="w-4 h-4" />, featured: true },
    { name: 'AI Customer Sentiment Tracker', path: '/ai-customer-sentiment-tracker', icon: <Heart className="w-4 h-4" />, featured: true },
    { name: 'Smart Expense Categorizer', path: '/smart-expense-categorizer', icon: <Receipt className="w-4 h-4" />, featured: true },
    { name: 'AI Project Manager Pro', path: '/ai-project-manager-pro', icon: <Calendar className="w-4 h-4" /> },
    { name: 'AI CRM Assistant Pro', path: '/ai-crm-assistant', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Time Tracker Pro', path: '/ai-time-tracker', icon: <Clock className="w-4 h-4" /> },
    { name: 'AI Content Generator Pro', path: '/ai-content-generator', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Social Media Scheduler', path: '/ai-social-media-scheduler', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Email Marketing Pro', path: '/ai-email-marketing-pro', icon: <Mail className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Financial Analyzer Pro', path: '/ai-financial-analyzer', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Security Monitor Pro', path: '/ai-security-monitor', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Compliance Manager Pro', path: '/ai-compliance-manager', icon: <Lock className="w-4 h-4" /> },
    { name: 'AI Meeting Assistant Pro', path: '/ai-meeting-assistant', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'AI Design Studio Pro', path: '/ai-design-studio', icon: <Palette className="w-4 h-4" /> }
  ], [])

  const fiveGServices = useMemo(() => [
    { name: '5G Solutions', path: '/5g-solutions', icon: <Network className="w-4 h-4" />, featured: true },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Cpu className="w-4 h-4" />, featured: true },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Settings className="w-4 h-4" /> },
    { name: 'Micro SAAS', path: '/micro-saas-services', icon: <Zap className="w-4 h-4" /> },
    { name: 'Pricing', path: '/pricing', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Case Studies', path: '/case-studies', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4" /> }
  ], [])

  const contactInfo = useMemo(() => [
    { icon: <Mail className="w-4 h-4" />, text: 'kleber@ziontechgroup.com' },
    { icon: <Phone className="w-4 h-4" />, text: '+1 302 464 0950' },
    { icon: <MapPin className="w-4 h-4" />, text: '364 E Main St STE 1008, Middletown DE 19709' }
  ], [])

  const isActive = (path: string) => location.pathname === path

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation */}
          <div className="space-y-2 mb-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-l-2 border-cyan-400'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
                onClick={onClose}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* AI Services Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('ai-services')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 font-medium text-left"
            >
              <div className="flex items-center space-x-3">
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                  {aiServices.length}
                </span>
              </div>
              {expandedSections.has('ai-services') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            
            {expandedSections.has('ai-services') && (
              <div className="ml-6 mt-2 space-y-1 max-h-64 overflow-y-auto">
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(service.path)
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5'
                    }`}
                    onClick={onClose}
                  >
                    {service.icon}
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-sm">{service.name}</span>
                      {service.featured && (
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* IT Services Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('it-services')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 font-medium text-left"
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-4 h-4" />
                <span>IT Services</span>
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                  {itServices.length}
                </span>
              </div>
              {expandedSections.has('it-services') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            
            {expandedSections.has('it-services') && (
              <div className="ml-6 mt-2 space-y-1 max-h-64 overflow-y-auto">
                {itServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(service.path)
                        ? 'bg-green-500/10 text-green-400'
                        : 'text-gray-400 hover:text-green-400 hover:bg-green-500/5'
                    }`}
                    onClick={onClose}
                  >
                    {service.icon}
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-sm">{service.name}</span>
                      {service.featured && (
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Micro SAAS Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('micro-saas')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 font-medium text-left"
            >
              <div className="flex items-center space-x-3">
                <Zap className="w-4 h-4" />
                <span>Micro SAAS</span>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                  {microSaasServices.length}
                </span>
              </div>
              {expandedSections.has('micro-saas') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            
            {expandedSections.has('micro-saas') && (
              <div className="ml-6 mt-2 space-y-1 max-h-64 overflow-y-auto">
                {microSaasServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(service.path)
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'text-gray-400 hover:text-purple-400 hover:bg-purple-500/5'
                    }`}
                    onClick={onClose}
                  >
                    {service.icon}
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-sm">{service.name}</span>
                      {service.featured && (
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 5G Solutions Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('5g-services')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300 font-medium text-left"
            >
              <div className="flex items-center space-x-3">
                <Network className="w-4 h-4" />
                <span>5G Solutions</span>
                <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full">
                  {fiveGServices.length}
                </span>
              </div>
              {expandedSections.has('5g-services') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            
            {expandedSections.has('5g-services') && (
              <div className="ml-6 mt-2 space-y-1 max-h-64 overflow-y-auto">
                {fiveGServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(service.path)
                        ? 'bg-orange-500/10 text-orange-400'
                        : 'text-gray-400 hover:text-orange-400 hover:bg-orange-500/5'
                    }`}
                    onClick={onClose}
                  >
                    {service.icon}
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-sm">{service.name}</span>
                      {service.featured && (
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact Info</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-5 h-5 text-cyan-400">{info.icon}</div>
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Link
              to="/contact"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-cyan-500/25 group"
              onClick={onClose}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar