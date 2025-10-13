import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  BarChart3, 
  Database, 
  Users, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Mail,
  Smartphone,
  Globe,
  CheckCircle,
  Star,
  Award,
  Rocket,
  FileText,
  Bot,
  Settings,
  Monitor,
  Lock,
  Server,
  Cpu,
  Network,
  HardDrive,
  Phone,
  Laptop,
  Headphones,
  Calendar,
  DollarSign,
  PieChart,
  Activity,
  Layers,
  Workflow,
  MessageSquare,
  Video,
  Image,
  Music,
  Camera,
  Mic,
  Palette,
  Wrench,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Eye,
  Heart,
  ThumbsUp,
  Clock,
  MapPin,
  PhoneCall,
  Building,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
  Home,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Coffee,
  Utensils,
  Gamepad2,
  Book,
  Newspaper,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FileSpreadsheet,
  FilePdf,
  FileZip,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Cut,
  Paste,
  Save,
  Undo,
  Redo,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Move,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  Divide,
  Equal,
  Percent,
  Hash,
  AtSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  CreditCard as Credit,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  TrendingDown,
  BarChart,
  LineChart,
  Scatter,
  AreaChart,
  Candlestick,
  Gauge,
  Thermometer,
  Droplet,
  Wind,
  Sun,
  Moon,
  Cloud as CloudIcon,
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
  Compass,
  Map,
  Navigation,
  Flag,
  Anchor,
  Sailboat,
  Zap,
  Code,
  Database as DatabaseIcon,
  Cloud,
  Smartphone as SmartphoneIcon,
  Laptop as LaptopIcon,
  Monitor as MonitorIcon,
  Server as ServerIcon,
  Network as NetworkIcon,
  HardDrive as HardDriveIcon,
  Settings as SettingsIcon,
  Wrench as WrenchIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Share as ShareIcon,
  Eye as EyeIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  Clock as ClockIcon,
  MapPin as MapPinIcon,
  PhoneCall as PhoneCallIcon,
  Building as BuildingIcon,
  Briefcase as BriefcaseIcon,
  GraduationCap as GraduationCapIcon,
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  Truck as TruckIcon,
  Package as PackageIcon,
  Home as HomeIcon,
  Car as CarIcon,
  Plane as PlaneIcon,
  Train as TrainIcon,
  Ship as ShipIcon,
  Bike as BikeIcon,
  Coffee as CoffeeIcon,
  Utensils as UtensilsIcon,
  Gamepad2 as Gamepad2Icon,
  Book as BookIcon,
  Newspaper as NewspaperIcon,
  FileImage as FileImageIcon,
  FileVideo as FileVideoIcon,
  FileAudio as FileAudioIcon,
  FileCode as FileCodeIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  FilePdf as FilePdfIcon,
  FileZip as FileZipIcon,
  Folder as FolderIcon,
  Archive as ArchiveIcon,
  Trash2 as Trash2Icon,
  Edit as EditIcon,
  Copy as CopyIcon,
  Cut as CutIcon,
  Paste as PasteIcon,
  Save as SaveIcon,
  Undo as UndoIcon,
  Redo as RedoIcon,
  RefreshCw as RefreshCwIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
  Move as MoveIcon,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  X as XIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  Divide as DivideIcon,
  Equal as EqualIcon,
  Percent as PercentIcon,
  Hash as HashIcon,
  AtSign as AtSignIcon,
  Euro as EuroIcon,
  Pound as PoundIcon,
  Yen as YenIcon,
  Bitcoin as BitcoinIcon,
  CreditCard as CreditCardIcon2,
  Wallet as WalletIcon,
  Banknote as BanknoteIcon,
  Coins as CoinsIcon,
  PiggyBank as PiggyBankIcon,
  TrendingDown as TrendingDownIcon,
  BarChart as BarChartIcon,
  LineChart as LineChartIcon,
  Scatter as ScatterIcon,
  AreaChart as AreaChartIcon,
  Candlestick as CandlestickIcon,
  Gauge as GaugeIcon,
  Thermometer as ThermometerIcon,
  Droplet as DropletIcon,
  Wind as WindIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  Cloud as CloudIcon2,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  CloudDrizzle as CloudDrizzleIcon,
  CloudHail as CloudHailIcon,
  CloudFog as CloudFogIcon,
  CloudSun as CloudSunIcon,
  CloudMoon as CloudMoonIcon,
  Sunrise as SunriseIcon,
  Sunset as SunsetIcon,
  Compass as CompassIcon,
  Map as MapIcon,
  Navigation as NavigationIcon,
  Flag as FlagIcon,
  Anchor as AnchorIcon,
  Sailboat as SailboatIcon
} from 'lucide-react';

const AIPoweredITConsultingPage = () => {
  const consultingServices = [
    {
      title: "AI-Powered Digital Transformation",
      description: "Complete digital transformation strategy with AI-driven assessment, roadmap development, and implementation guidance.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,999/month",
      originalPrice: "$5,999/month",
      features: ["AI Assessment", "Transformation Roadmap", "Implementation Guidance", "Change Management", "ROI Analysis", "Continuous Optimization"],
      category: "Digital Transformation",
      popular: true
    },
    {
      title: "AI Cloud Architecture Design",
      description: "Intelligent cloud architecture with AI-powered optimization, cost analysis, and performance monitoring.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "Starting at $1,999/month",
      originalPrice: "$3,999/month",
      features: ["Cloud Strategy", "Architecture Design", "Cost Optimization", "Security Planning", "Migration Planning", "Performance Monitoring"],
      category: "Cloud Architecture",
      popular: true
    },
    {
      title: "AI Cybersecurity Assessment",
      description: "Comprehensive security assessment with AI-powered vulnerability analysis, threat modeling, and risk mitigation.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "Starting at $1,499/month",
      originalPrice: "$2,999/month",
      features: ["Security Assessment", "Vulnerability Analysis", "Threat Modeling", "Risk Mitigation", "Compliance Audit", "Security Training"],
      category: "Cybersecurity",
      popular: true
    },
    {
      title: "AI Data Strategy Consulting",
      description: "Intelligent data strategy with AI-powered analytics, governance, and monetization strategies.",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,799/month",
      originalPrice: "$3,599/month",
      features: ["Data Strategy", "Analytics Planning", "Data Governance", "Monetization", "Quality Management", "Privacy Compliance"],
      category: "Data Strategy"
    },
    {
      title: "AI DevOps Transformation",
      description: "Modern DevOps implementation with AI-powered automation, monitoring, and continuous improvement.",
      icon: <Settings className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,299/month",
      originalPrice: "$2,599/month",
      features: ["DevOps Strategy", "CI/CD Implementation", "Automation", "Monitoring", "Culture Change", "Tool Selection"],
      category: "DevOps"
    },
    {
      title: "AI IT Infrastructure Optimization",
      description: "Intelligent infrastructure optimization with AI-powered performance analysis and cost reduction strategies.",
      icon: <Server className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $1,599/month",
      originalPrice: "$3,199/month",
      features: ["Infrastructure Assessment", "Performance Optimization", "Cost Reduction", "Scalability Planning", "Modernization", "Monitoring"],
      category: "Infrastructure"
    },
    {
      title: "AI Application Modernization",
      description: "Legacy application modernization with AI-powered analysis, migration planning, and optimization strategies.",
      icon: <Code className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $1,899/month",
      originalPrice: "$3,799/month",
      features: ["Application Assessment", "Modernization Planning", "Migration Strategy", "Performance Optimization", "Security Enhancement", "User Experience"],
      category: "Application Modernization"
    },
    {
      title: "AI Network Architecture Design",
      description: "Intelligent network design with AI-powered optimization, security, and performance monitoring.",
      icon: <Network className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $1,399/month",
      originalPrice: "$2,799/month",
      features: ["Network Design", "Security Planning", "Performance Optimization", "Monitoring", "Scalability", "Cost Analysis"],
      category: "Network Architecture"
    },
    {
      title: "AI IT Governance Framework",
      description: "Comprehensive IT governance with AI-powered policy development, compliance monitoring, and risk management.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      price: "Starting at $1,199/month",
      originalPrice: "$2,399/month",
      features: ["Governance Framework", "Policy Development", "Compliance Monitoring", "Risk Management", "Audit Preparation", "Training Programs"],
      category: "IT Governance"
    },
    {
      title: "AI Business Process Optimization",
      description: "Intelligent process optimization with AI-powered analysis, automation opportunities, and efficiency improvements.",
      icon: <Workflow className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "Starting at $1,699/month",
      originalPrice: "$3,399/month",
      features: ["Process Analysis", "Automation Opportunities", "Efficiency Improvements", "Workflow Design", "Change Management", "Performance Metrics"],
      category: "Process Optimization"
    },
    {
      title: "AI Technology Roadmap Planning",
      description: "Strategic technology planning with AI-powered market analysis, trend prediction, and investment recommendations.",
      icon: <Target className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "Starting at $2,199/month",
      originalPrice: "$4,399/month",
      features: ["Technology Assessment", "Market Analysis", "Trend Prediction", "Investment Planning", "Risk Analysis", "Implementation Roadmap"],
      category: "Technology Planning"
    },
    {
      title: "AI IT Cost Optimization",
      description: "Intelligent cost optimization with AI-powered analysis, budget planning, and resource allocation strategies.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      price: "Starting at $999/month",
      originalPrice: "$1,999/month",
      features: ["Cost Analysis", "Budget Planning", "Resource Optimization", "Vendor Management", "ROI Analysis", "Cost Monitoring"],
      category: "Cost Optimization"
    }
  ];

  const benefits = [
    {
      title: "AI-Driven Insights",
      description: "Get data-driven recommendations based on AI analysis of your current IT infrastructure and business needs",
      icon: <Brain className="w-6 h-6" />,
      stat: "90% accuracy"
    },
    {
      title: "Cost Savings",
      description: "Optimize your IT investments and reduce operational costs through intelligent resource allocation",
      icon: <DollarSign className="w-6 h-6" />,
      stat: "40% cost reduction"
    },
    {
      title: "Faster Implementation",
      description: "Accelerate your digital transformation with AI-optimized implementation strategies and automation",
      icon: <Rocket className="w-6 h-6" />,
      stat: "3x faster delivery"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Building className="w-6 h-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI-Powered IT Consulting - Zion Tech Group | Intelligent Technology Consulting</title>
        <meta name="description" content="Transform your IT infrastructure with our AI-powered consulting services including digital transformation, cloud architecture, cybersecurity, and data strategy." />
        <meta name="keywords" content="AI IT consulting, digital transformation, cloud architecture, cybersecurity consulting, data strategy, DevOps transformation, IT optimization" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered IT Consulting</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI-Powered IT Consulting
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your IT infrastructure with our AI-powered consulting services. From digital transformation to cloud architecture, 
            we provide intelligent solutions that drive business growth and operational efficiency.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
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
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 mb-3">{benefit.description}</p>
              <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {consultingServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {service.icon}
                </div>
                
                <div className="text-center mb-4">
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-xs text-cyan-400 text-center">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
                
                <div className="mt-4 text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI-powered consulting experts help you create a technology strategy that drives business growth, 
              reduces costs, and improves operational efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Consultation
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPoweredITConsultingPage;