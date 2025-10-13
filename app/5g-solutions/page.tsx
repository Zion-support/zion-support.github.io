import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Users, 
  Settings, 
  Brain, 
  Monitor, 
  Smartphone, 
  Database, 
  Lock, 
  RefreshCw, 
  Award, 
  Clock, 
  DollarSign,
  ExternalLink,
  Sparkles,
  FileText,
  MessageSquare,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  ChevronRight,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Save,
  Share2,
  Copy,
  Scissors,
  Paperclip,
  Image,
  Video,
  Music,
  File,
  Folder,
  Archive,
  Tag,
  Flag,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Phone,
  MapPin,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Server,
  Network,
  HardDrive,
  Cpu,
  MemoryStick,
  Router,
  Wifi,
  Bluetooth,
  Usb,
  Hdmi,
  Camera,
  Mic,
  Headphones,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Fax,
  Laptop,
  Desktop,
  Tablet,
  Watch,
  Gamepad2,
  Joystick,
  Tv,
  Radio,
  Speaker,
  Volume1,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  List,
  Grid,
  Layout,
  Sidebar,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  MoreHorizontal,
  MoreVertical,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Check,
  AlertTriangle,
  Info as InfoIcon,
  HelpCircle,
  QuestionMarkCircle,
  ExclamationTriangle,
  XCircle as XCircleIcon,
  CheckCircle as CheckCircleIcon,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon2,
  HelpCircle as HelpCircleIcon,
  QuestionMarkCircle as QuestionMarkCircleIcon,
  ExclamationTriangle as ExclamationTriangleIcon,
  Target,
  TrendingUp,
  Calendar,
  Mail,
  Phone as PhoneIcon2,
  MapPin as MapPinIcon2,
  Mail as MailIcon2,
  Phone as PhoneIcon3,
  MapPin as MapPinIcon3,
  Mail as MailIcon4,
  Phone as PhoneIcon4,
  MapPin as MapPinIcon4,
  Mail as MailIcon5,
  Phone as PhoneIcon5,
  MapPin as MapPinIcon5,
  Mail as MailIcon6,
  Phone as PhoneIcon6,
  MapPin as MapPinIcon6,
  Mail as MailIcon7,
  Phone as PhoneIcon7,
  MapPin as MapPinIcon7,
  Mail as MailIcon8,
  Phone as PhoneIcon8,
  MapPin as MapPinIcon8,
  Mail as MailIcon9,
  Phone as PhoneIcon9,
  MapPin as MapPinIcon9,
  Mail as MailIcon10,
  Phone as PhoneIcon10,
  MapPin as MapPinIcon10,
  Wifi as WifiIcon,
  Signal,
  Radio,
  Router as RouterIcon,
  Network as NetworkIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  BarChart3 as BarChart3Icon,
  Cloud as CloudIcon,
  Users as UsersIcon,
  Settings as SettingsIcon,
  Brain as BrainIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Database as DatabaseIcon,
  Lock as LockIcon,
  RefreshCw as RefreshCwIcon,
  Award as AwardIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  ExternalLink as ExternalLinkIcon,
  Sparkles as SparklesIcon,
  FileText as FileTextIcon,
  MessageSquare as MessageSquareIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Eye as EyeIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  Plus as PlusIcon2,
  Minus as MinusIcon2,
  ChevronRight as ChevronRightIcon2,
  Info as InfoIcon3,
  AlertCircle as AlertCircleIcon2,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon2,
  Play as PlayIcon2,
  Pause as PauseIcon2,
  Stop as StopIcon2,
  Volume2 as Volume2Icon2,
  VolumeX as VolumeXIcon2,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  RotateCcw as RotateCcwIcon,
  Save as SaveIcon,
  Share2 as Share2Icon,
  Copy as CopyIcon,
  Scissors as ScissorsIcon,
  Paperclip as PaperclipIcon,
  Image as ImageIcon,
  Video as VideoIcon,
  Music as MusicIcon,
  File as FileIcon,
  Folder as FolderIcon,
  Archive as ArchiveIcon,
  Tag as TagIcon,
  Flag as FlagIcon,
  Bookmark as BookmarkIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  MessageCircle as MessageCircleIcon,
  Send as SendIcon,
  Phone as PhoneIcon11,
  MapPin as MapPinIcon11,
  Mail as MailIcon11,
  Phone as PhoneIcon12,
  MapPin as MapPinIcon12,
  Mail as MailIcon12,
  Phone as PhoneIcon13,
  MapPin as MapPinIcon13,
  Mail as MailIcon13,
  Phone as PhoneIcon14,
  MapPin as MapPinIcon14,
  Mail as MailIcon14,
  Phone as PhoneIcon15,
  MapPin as MapPinIcon15,
  Mail as MailIcon15,
  Phone as PhoneIcon16,
  MapPin as MapPinIcon16,
  Mail as MailIcon16,
  Phone as PhoneIcon17,
  MapPin as MapPinIcon17,
  Mail as MailIcon17,
  Phone as PhoneIcon18,
  MapPin as MapPinIcon18,
  Mail as MailIcon18,
  Phone as PhoneIcon19,
  MapPin as MapPinIcon19,
  Mail as MailIcon19,
  Phone as PhoneIcon20,
  MapPin as MapPinIcon20,
  Mail as MailIcon20
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import ResponsiveText from '../components/ResponsiveText';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const FiveGSolutionsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "5G Solutions - Zion Tech Group",
    "description": "Advanced 5G solutions including network infrastructure, edge computing, IoT applications, and smart city implementations for next-generation connectivity.",
    "url": "https://ziontechgroup.com/5g-solutions",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "5G Network Infrastructure",
          "description": "Complete 5G network design, deployment, and management solutions",
          "offers": {
            "@type": "Offer",
            "price": "10000",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "RecurringPaymentsPriceSpecification",
              "billingDuration": "P1M"
            }
          }
        }
      ]
    }
  };

  const fiveGServices = [
    {
      id: '5g-network-infrastructure',
      name: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and management solutions. From small cell deployment to macro network optimization, we provide end-to-end 5G infrastructure services.',
      shortDescription: 'Complete 5G network infrastructure',
      price: 'From $10,000/month',
      priceRange: { min: 10000, max: 100000 },
      category: 'Infrastructure',
      icon: <Radio className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        '5G network design and planning',
        'Small cell deployment',
        'Macro network optimization',
        'Antenna installation and configuration',
        'Backhaul connectivity',
        'Network performance monitoring',
        'Coverage optimization',
        'Capacity planning',
        'Interference management',
        '24/7 network operations'
      ],
      benefits: [
        'Achieve 10x faster data speeds',
        'Reduce latency to under 1ms',
        'Support 1 million devices per km²',
        'Improve network reliability by 99.9%'
      ],
      useCases: [
        'Urban 5G deployment',
        'Rural connectivity expansion',
        'Enterprise private networks',
        'Smart city infrastructure',
        'Industrial IoT connectivity'
      ],
      technologies: ['5G NR', 'Massive MIMO', 'Beamforming', 'Network Slicing', 'Edge Computing', 'SDN/NFV'],
      timeline: '6-12 months',
      support: '24/7',
      link: '/5g-network-infrastructure',
      featured: true,
      popular: true
    },
    {
      id: '5g-edge-computing',
      name: '5G Edge Computing',
      description: 'Advanced 5G edge computing solutions with ultra-low latency processing, real-time analytics, and distributed computing capabilities. Bring computing power closer to your data.',
      shortDescription: '5G edge computing solutions',
      price: 'From $5,000/month',
      priceRange: { min: 5000, max: 50000 },
      category: 'Edge Computing',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Ultra-low latency processing',
        'Distributed edge nodes',
        'Real-time data analytics',
        'Edge AI and ML processing',
        'Content delivery optimization',
        'Edge storage solutions',
        'Network function virtualization',
        'Edge security implementation',
        'Automated scaling',
        'Performance monitoring'
      ],
      benefits: [
        'Reduce latency to under 1ms',
        'Improve application performance by 80%',
        'Reduce bandwidth costs by 60%',
        'Enable real-time applications'
      ],
      useCases: [
        'Autonomous vehicles',
        'Industrial automation',
        'AR/VR applications',
        'Smart manufacturing',
        'Real-time gaming'
      ],
      technologies: ['Edge Computing', 'Kubernetes', 'Docker', 'AI/ML', 'Edge Storage', 'Network Slicing'],
      timeline: '3-6 months',
      support: '24/7',
      link: '/5g-edge-computing',
      featured: true,
      popular: true
    },
    {
      id: '5g-iot-solutions',
      name: '5G IoT Solutions',
      description: 'Comprehensive 5G IoT solutions with massive device connectivity, real-time monitoring, and intelligent automation. Connect and manage millions of IoT devices with 5G.',
      shortDescription: '5G IoT connectivity and management',
      price: 'From $3,000/month',
      priceRange: { min: 3000, max: 25000 },
      category: 'IoT',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Massive IoT device connectivity',
        'Real-time device monitoring',
        'Intelligent device management',
        'Data collection and processing',
        'Predictive maintenance',
        'Remote device control',
        'Security and encryption',
        'Scalable device onboarding',
        'Analytics and insights',
        'Integration capabilities'
      ],
      benefits: [
        'Connect 1 million devices per km²',
        'Reduce power consumption by 90%',
        'Improve device battery life by 10x',
        'Enable real-time monitoring'
      ],
      useCases: [
        'Smart city sensors',
        'Industrial monitoring',
        'Fleet management',
        'Environmental monitoring',
        'Healthcare devices'
      ],
      technologies: ['5G IoT', 'NB-IoT', 'LTE-M', 'Edge Computing', 'MQTT', 'CoAP'],
      timeline: '4-8 months',
      support: '24/7',
      link: '/5g-iot-solutions',
      featured: true,
      popular: true
    },
    {
      id: '5g-smart-city-solutions',
      name: '5G Smart City Solutions',
      description: 'Comprehensive 5G smart city solutions including traffic management, environmental monitoring, public safety, and citizen services. Build the cities of tomorrow.',
      shortDescription: '5G smart city infrastructure',
      price: 'From $15,000/month',
      priceRange: { min: 15000, max: 150000 },
      category: 'Smart City',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: [
        'Smart traffic management',
        'Environmental monitoring',
        'Public safety systems',
        'Citizen service platforms',
        'Energy management',
        'Waste management',
        'Water quality monitoring',
        'Air quality tracking',
        'Emergency response systems',
        'Data analytics and insights'
      ],
      benefits: [
        'Improve traffic flow by 30%',
        'Reduce energy consumption by 25%',
        'Enhance public safety by 40%',
        'Improve citizen satisfaction by 50%'
      ],
      useCases: [
        'Traffic optimization',
        'Environmental monitoring',
        'Public safety',
        'Citizen services',
        'Urban planning'
      ],
      technologies: ['5G Networks', 'IoT Sensors', 'AI/ML', 'Edge Computing', 'Data Analytics', 'Cloud Platforms'],
      timeline: '8-18 months',
      support: '24/7',
      link: '/5g-smart-city-solutions',
      featured: true,
      popular: true
    },
    {
      id: '5g-mobile-applications',
      name: '5G Mobile Applications',
      description: 'High-performance 5G mobile applications with ultra-low latency, high bandwidth, and real-time capabilities. Leverage 5G for next-generation mobile experiences.',
      shortDescription: '5G-enabled mobile applications',
      price: 'From $8,000/project',
      priceRange: { min: 8000, max: 75000 },
      category: 'Mobile Apps',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Ultra-low latency applications',
        'High-bandwidth content delivery',
        'Real-time video streaming',
        'AR/VR integration',
        'Cloud gaming capabilities',
        'Edge computing integration',
        'Network-aware optimization',
        'Quality of service management',
        'Multi-device synchronization',
        'Performance monitoring'
      ],
      benefits: [
        'Enable real-time applications',
        'Improve user experience by 80%',
        'Reduce loading times by 90%',
        'Support high-quality video streaming'
      ],
      useCases: [
        'Real-time gaming',
        'AR/VR applications',
        'Video conferencing',
        'Live streaming',
        'Cloud computing'
      ],
      technologies: ['5G APIs', 'Edge Computing', 'WebRTC', 'AR/VR SDKs', 'Cloud Platforms', 'Mobile Development'],
      timeline: '6-12 weeks',
      support: '6 months included',
      link: '/5g-mobile-applications',
      featured: true,
      popular: true
    },
    {
      id: '5g-data-analytics',
      name: '5G Data Analytics',
      description: 'Advanced 5G data analytics solutions with real-time processing, network optimization, and intelligent insights. Harness the power of 5G data for better decisions.',
      shortDescription: '5G data analytics and insights',
      price: 'From $4,000/month',
      priceRange: { min: 4000, max: 30000 },
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Real-time data processing',
        'Network performance analytics',
        'User behavior analysis',
        'Traffic pattern recognition',
        'Predictive analytics',
        'Anomaly detection',
        'Custom dashboards',
        'Automated reporting',
        'Machine learning models',
        'API integration'
      ],
      benefits: [
        'Process data 100x faster',
        'Improve network efficiency by 50%',
        'Reduce operational costs by 30%',
        'Enable predictive maintenance'
      ],
      useCases: [
        'Network optimization',
        'User experience analysis',
        'Traffic management',
        'Performance monitoring',
        'Predictive maintenance'
      ],
      technologies: ['Big Data', 'Machine Learning', 'Real-time Processing', '5G APIs', 'Data Visualization', 'Cloud Analytics'],
      timeline: '3-6 months',
      support: '24/7',
      link: '/5g-data-analytics',
      featured: true,
      popular: true
    },
    {
      id: '5g-private-networks',
      name: '5G Private Networks',
      description: 'Dedicated 5G private networks for enterprises with enhanced security, customized performance, and complete control. Build your own 5G network infrastructure.',
      shortDescription: 'Enterprise 5G private networks',
      price: 'From $20,000/month',
      priceRange: { min: 20000, max: 200000 },
      category: 'Private Networks',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      features: [
        'Dedicated 5G infrastructure',
        'Enhanced security and privacy',
        'Customized network slicing',
        'Edge computing integration',
        'Complete network control',
        'Customized performance SLAs',
        'On-premises deployment',
        'Hybrid cloud connectivity',
        'Advanced monitoring',
        '24/7 dedicated support'
      ],
      benefits: [
        'Ensure complete data privacy',
        'Achieve customized performance',
        'Reduce latency to under 1ms',
        'Maintain complete control'
      ],
      useCases: [
        'Manufacturing automation',
        'Healthcare facilities',
        'Financial services',
        'Government agencies',
        'Critical infrastructure'
      ],
      technologies: ['5G Core', 'Network Slicing', 'Edge Computing', 'Private Cloud', 'Security Tools', 'Monitoring Systems'],
      timeline: '6-12 months',
      support: '24/7',
      link: '/5g-private-networks',
      featured: true,
      popular: true
    },
    {
      id: '5g-implementation',
      name: '5G Implementation Services',
      description: 'Complete 5G implementation services including planning, deployment, testing, and optimization. End-to-end 5G transformation for your organization.',
      shortDescription: 'Complete 5G implementation',
      price: 'From $25,000/project',
      priceRange: { min: 25000, max: 500000 },
      category: 'Implementation',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      features: [
        '5G strategy and planning',
        'Network design and architecture',
        'Equipment procurement',
        'Installation and deployment',
        'Testing and validation',
        'Performance optimization',
        'Staff training',
        'Documentation and handover',
        'Ongoing support',
        'Project management'
      ],
      benefits: [
        'Ensure successful 5G deployment',
        'Minimize implementation risks',
        'Optimize network performance',
        'Reduce time to market'
      ],
      useCases: [
        'Enterprise 5G transformation',
        'Service provider deployment',
        'Smart city implementation',
        'Industrial 5G adoption',
        'Government 5G projects'
      ],
      technologies: ['5G Equipment', 'Network Planning Tools', 'Testing Equipment', 'Project Management', 'Training Programs', 'Documentation'],
      timeline: '6-18 months',
      support: '24/7',
      link: '/5g-implementation',
      featured: true,
      popular: true
    }
  ];

  const categories = [
    { name: 'All', count: fiveGServices.length, color: 'from-gray-500 to-gray-600' },
    { name: 'Infrastructure', count: fiveGServices.filter(s => s.category === 'Infrastructure').length, color: 'from-blue-500 to-cyan-500' },
    { name: 'Edge Computing', count: fiveGServices.filter(s => s.category === 'Edge Computing').length, color: 'from-purple-500 to-pink-500' },
    { name: 'IoT', count: fiveGServices.filter(s => s.category === 'IoT').length, color: 'from-green-500 to-emerald-500' },
    { name: 'Smart City', count: fiveGServices.filter(s => s.category === 'Smart City').length, color: 'from-orange-500 to-red-500' },
    { name: 'Mobile Apps', count: fiveGServices.filter(s => s.category === 'Mobile Apps').length, color: 'from-indigo-500 to-purple-500' },
    { name: 'Analytics', count: fiveGServices.filter(s => s.category === 'Analytics').length, color: 'from-yellow-500 to-orange-500' },
    { name: 'Private Networks', count: fiveGServices.filter(s => s.category === 'Private Networks').length, color: 'from-red-500 to-orange-500' },
    { name: 'Implementation', count: fiveGServices.filter(s => s.category === 'Implementation').length, color: 'from-teal-500 to-cyan-500' }
  ];

  const stats = [
    { number: '8+', label: '5G Service Categories', icon: <Globe className="w-6 h-6" /> },
    { number: '50+', label: '5G Projects Deployed', icon: <Award className="w-6 h-6" /> },
    { number: '10x', label: 'Faster Speeds', icon: <Zap className="w-6 h-6" /> },
    { number: '1ms', label: 'Ultra-Low Latency', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="5G Solutions - Zion Tech Group | Network Infrastructure, Edge Computing & IoT"
        description="Advanced 5G solutions including network infrastructure, edge computing, IoT applications, smart city implementations, and mobile applications for next-generation connectivity."
        keywords="5G solutions, 5G network infrastructure, edge computing, IoT, smart city, 5G mobile applications, private networks, 5G implementation"
        canonical="https://ziontechgroup.com/5g-solutions"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">50+ 5G Projects Deployed</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              5G Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Next-generation 5G solutions for ultra-fast connectivity, edge computing, IoT, and smart city implementations. 
            Transform your business with the power of 5G technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start 5G Journey
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View 5G Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.name === 'All'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured 5G Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured 5G Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our most advanced and comprehensive 5G solutions, designed to transform your connectivity and enable next-generation applications.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {fiveGServices.filter(service => service.featured).map((service, index) => (
              <FuturisticCard
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <Link to={service.link} className="block">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Category</span>
                      <span className="px-2 py-1 bg-white/10 rounded-full">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Timeline</span>
                      <span className="text-green-400">{service.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Support</span>
                      <span>{service.support}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* All 5G Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All 5G Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of 5G solutions organized by category.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-6">
            {fiveGServices.map((service, index) => (
              <FuturisticCard
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <Link to={service.link} className="block">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Category</span>
                      <span className="px-2 py-1 bg-white/10 rounded-full">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Timeline</span>
                      <span className="text-green-400">{service.timeline}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Embrace 5G Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your business with our advanced 5G solutions. From network infrastructure to edge computing, 
            we help you unlock the full potential of next-generation connectivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start 5G Transformation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              View 5G Pricing
              <DollarSign className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGSolutionsPage;