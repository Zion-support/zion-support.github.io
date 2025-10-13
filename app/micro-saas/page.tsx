import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Code, 
  Database, 
  Users, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Mail,
  Phone,
  MapPin,
  Award,
  Lock,
  Settings,
  PieChart,
  FileText,
  Video,
  Image,
  MessageSquare,
  Calendar,
  ShoppingCart,
  CreditCard,
  Truck,
  Wifi,
  Camera,
  Headphones,
  Mic,
  Palette,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Heart,
  ThumbsUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Copy,
  Scissors,
  Save,
  Folder,
  File,
  Archive,
  Tag,
  Flag,
  Bookmark,
  Bell,
  AlertCircle,
  Info,
  HelpCircle,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Sidebar,
  Navigation,
  Compass,
  Map,
  Home,
  Building,
  Store,
  Factory,
  Warehouse,
  Office,
  School,
  Hospital,
  Bank,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Bus,
  Taxi,
  Truck as TruckIcon,
  Package,
  Box,
  Gift,
  ShoppingBag,
  CreditCard as CreditCardIcon,
  Wallet,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  Percent,
  TrendingDown,
  Activity,
  Pulse,
  Thermometer,
  Gauge,
  Battery,
  Wifi as WifiIcon,
  Bluetooth,
  Radio,
  Tv,
  Laptop,
  Tablet,
  Smartphone as SmartphoneIcon,
  Watch,
  Headphones as HeadphonesIcon,
  Speaker,
  Mic as MicIcon,
  Camera as CameraIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  Music,
  Film,
  Book,
  Newspaper,
  FileText as FileTextIcon,
  File,
  Folder as FolderIcon,
  Archive as ArchiveIcon,
  HardDrive,
  Server,
  Cpu,
  MemoryStick,
  HardDrive as HardDriveIcon,
  Disc,
  Cd,
  Dvd,
  FloppyDisk,
  Usb,
  Hdmi,
  Ethernet,
  Wifi as WifiIcon2,
  Bluetooth as BluetoothIcon,
  Radio as RadioIcon,
  Tv as TvIcon,
  Laptop as LaptopIcon,
  Tablet as TabletIcon,
  Smartphone as SmartphoneIcon2,
  Watch as WatchIcon,
  Headphones as HeadphonesIcon2,
  Speaker as SpeakerIcon,
  Mic as MicIcon2,
  Camera as CameraIcon2,
  Video as VideoIcon2,
  Image as ImageIcon2,
  Music as MusicIcon,
  Film as FilmIcon,
  Book as BookIcon,
  Newspaper as NewspaperIcon,
  FileText as FileTextIcon2,
  File as FileIcon,
  Folder as FolderIcon2,
  Archive as ArchiveIcon2,
  HardDrive as HardDriveIcon2,
  Server as ServerIcon,
  Cpu as CpuIcon,
  MemoryStick as MemoryStickIcon,
  HardDrive as HardDriveIcon3,
  Disc as DiscIcon,
  Cd as CdIcon,
  Dvd as DvdIcon,
  FloppyDisk as FloppyDiskIcon,
  Usb as UsbIcon,
  Hdmi as HdmiIcon,
  Ethernet as EthernetIcon,
  WifiOff,
  BatteryLow,
  Signal,
  SignalLow,
  SignalZero,
  SignalHigh,
  SignalMedium,
  SignalLow as SignalLowIcon,
  SignalZero as SignalZeroIcon,
  SignalHigh as SignalHighIcon,
  SignalMedium as SignalMediumIcon,
  Wifi as WifiIcon3,
  WifiOff as WifiOffIcon,
  Battery as BatteryIcon,
  BatteryLow as BatteryLowIcon,
  Signal as SignalIcon,
  SignalLow as SignalLowIcon2,
  SignalZero as SignalZeroIcon2,
  SignalHigh as SignalHighIcon2,
  SignalMedium as SignalMediumIcon2
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasServices = [
    // AI-Powered Business Solutions
    {
      id: 'zion-ai-analytics-pro',
      name: 'Zion AI Analytics Pro',
      description: 'Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated insights generation.',
      price: '$299/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics engine',
        'Custom dashboard creation',
        'Automated report generation',
        'Multi-source data integration',
        'Advanced machine learning models'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Analytics',
      popular: true
    },
    {
      id: 'zion-ai-security-shield',
      name: 'Zion AI Security Shield',
      description: 'Comprehensive cybersecurity solution with AI-powered threat detection, automated response, and 24/7 monitoring.',
      price: '$499/month',
      features: [
        'AI threat detection',
        'Automated incident response',
        'Real-time monitoring',
        'Compliance management',
        'Security analytics',
        '24/7 expert support'
      ],
      icon: <Shield className="w-8 h-8" />,
      category: 'Security',
      popular: true
    },
    {
      id: 'zion-ai-cloud-vault',
      name: 'Zion AI Cloud Vault',
      description: 'Secure cloud storage solution with AI-powered organization, automatic backup, and intelligent file management.',
      price: '$99/month',
      features: [
        'Unlimited cloud storage',
        'AI file organization',
        'Automatic backup',
        'Advanced encryption',
        'Collaboration tools',
        'Version control'
      ],
      icon: <Cloud className="w-8 h-8" />,
      category: 'Storage',
      popular: true
    },
    {
      id: 'zion-ai-crm-pro',
      name: 'Zion AI CRM Pro',
      description: 'AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive insights.',
      price: '$199/month',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Predictive analytics',
        'Multi-channel communication',
        'Sales forecasting',
        'Customer insights'
      ],
      icon: <Users className="w-8 h-8" />,
      category: 'CRM',
      popular: true
    },
    {
      id: 'zion-ai-marketing-automation',
      name: 'Zion AI Marketing Automation Pro',
      description: 'Complete marketing automation platform with AI content generation, multi-channel campaigns, and performance optimization.',
      price: '$149/month',
      features: [
        'AI content generation',
        'Multi-channel campaigns',
        'Automated workflows',
        'Performance analytics',
        'A/B testing',
        'Lead nurturing'
      ],
      icon: <Target className="w-8 h-8" />,
      category: 'Marketing',
      popular: true
    },
    {
      id: 'zion-ai-project-manager',
      name: 'Zion AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered task prioritization, resource allocation, and deadline prediction.',
      price: '$99/month',
      features: [
        'AI task prioritization',
        'Resource optimization',
        'Deadline prediction',
        'Team collaboration',
        'Progress tracking',
        'Risk assessment'
      ],
      icon: <Calendar className="w-8 h-8" />,
      category: 'Project Management',
      popular: true
    }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion AI Analytics Pro transformed our data insights. We can now make decisions 10x faster with real-time analytics.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      role: 'CTO',
      content: 'The AI Security Shield has been a game-changer. We feel completely protected with their advanced threat detection.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Marketing Agency',
      role: 'Operations Director',
      content: 'Zion AI Content Generator saves us 20 hours per week. The quality is outstanding and our clients love it.',
      rating: 5,
      avatar: 'ER'
    },
    {
      title: "24/7 Support",
      description: "Expert support whenever you need it, around the clock.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Regular Updates",
      description: "Always stay current with the latest features and improvements.",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions powered by AI. From analytics to automation, we have the tools to transform your business operations." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, automation, analytics, CRM, project management, e-commerce" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Micro SAAS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
            From analytics to automation, we have the tools you need to succeed in the digital age.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {microSaasServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
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
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                  {service.category}
                </span>
                <Link
                  to={`/${service.id}`}
                  className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 inline" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="text-center py-20 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group hover:scale-105"
              >
                Get Started Today
                <Sparkles className="w-5 h-5 ml-2 inline group-hover:rotate-12 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;