import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Clock, 
  Smartphone, 
  Mail,
  FileText,
  BarChart3,
  Database,
  Target,
  Settings,
  Code,
  Lock,
  TrendingUp,
  BarChart,
  PieChart,
  Activity,
  LineChart,
  Layers,
  Grid,
  List,
  Map,
  Compass,
  Navigation,
  Globe2,
  Wifi,
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
  StarIcon,
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
  Calendar,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  Eye,
  Heart,
  ThumbsUp,
  AwardIcon,
  Rocket,
  Cpu,
  Settings as SettingsIcon,
  Sparkles,
  Clock as ClockIcon,
  DollarSign,
  Smartphone as SmartphoneIcon,
  Target as TargetIcon,
  Calendar as CalendarIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Share as ShareIcon,
  Bell as BellIcon,
  Eye as EyeIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  AwardIcon as AwardIconIcon,
  Rocket as RocketIcon,
  Wifi as WifiIcon,
  Battery,
  Camera,
  Headphones,
  Mic,
  Video,
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
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Layers as LayersIcon,
  Grid as GridIcon,
  List as ListIcon,
  Map as MapIcon,
  Compass as CompassIcon,
  Navigation as NavigationIcon,
  Globe2 as Globe2Icon,
  WifiOff,
  Signal as SignalIcon,
  Bluetooth as BluetoothIcon,
  Usb as UsbIcon,
  HardDrive as HardDriveIcon,
  MemoryStick as MemoryStickIcon,
  Printer as PrinterIcon,
  Scanner as ScannerIcon,
  Fax as FaxIcon,
  Voicemail as VoicemailIcon,
  Headset as HeadsetIcon,
  Speaker as SpeakerIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
  Shuffle as ShuffleIcon,
  Repeat as RepeatIcon,
  Repeat1 as Repeat1Icon,
  Shuffle2 as Shuffle2Icon,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  Triangle as TriangleIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Diamond as DiamondIcon,
  StarIcon as StarIconIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
  Sunrise as SunriseIcon,
  Sunset as SunsetIcon,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  Wind as WindIcon,
  Droplets as DropletsIcon,
  Thermometer as ThermometerIcon,
  Gauge as GaugeIcon,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  Hourglass as HourglassIcon
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 1,
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered analytics platform for data-driven insights",
      price: "$99/month",
      features: ["Real-time analytics", "AI predictions", "Custom dashboards", "API integration"],
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      href: "/zion-ai-analytics-pro",
      popular: true
    },
    {
      id: 2,
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI automation",
      price: "$149/month",
      features: ["AI lead scoring", "Automated follow-ups", "Sales forecasting", "Integration hub"],
      icon: <Users className="w-8 h-8 text-purple-400" />,
      href: "/zion-ai-crm-pro",
      popular: false
    },
    {
      id: 3,
      name: "Zion AI Video Generator",
      description: "Create professional videos with AI-powered automation",
      price: "$79/month",
      features: ["AI video creation", "Template library", "Voice synthesis", "Auto-editing"],
      icon: <Video className="w-8 h-8 text-green-400" />,
      href: "/zion-ai-video-generator",
      popular: false
    },
    {
      id: 4,
      name: "Zion AI Invoice Generator",
      description: "Automated invoice generation and management system",
      price: "$49/month",
      features: ["Auto-invoice creation", "Payment tracking", "Tax calculations", "Multi-currency"],
      icon: <FileText className="w-8 h-8 text-orange-400" />,
      href: "/zion-ai-invoice-generator",
      popular: false
    },
    {
      id: 5,
      name: "Zion AI Customer Insights",
      description: "Deep customer behavior analysis and insights platform",
      price: "$129/month",
      features: ["Customer segmentation", "Behavior analysis", "Churn prediction", "Personalization"],
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      href: "/zion-ai-customer-insights",
      popular: true
    },
    {
      id: 6,
      name: "Zion AI Email Analyzer",
      description: "AI-powered email analysis and optimization tool",
      price: "$69/month",
      features: ["Email scoring", "A/B testing", "Sentiment analysis", "Performance metrics"],
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      href: "/zion-ai-email-analyzer",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Get up and running in minutes, not months",
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "AI-Powered",
      description: "Leverage cutting-edge AI for maximum efficiency",
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Secure & Compliant",
      description: "Enterprise-grade security and compliance",
      icon: <Shield className="w-6 h-6 text-green-400" />
    },
    {
      title: "Global Scale",
      description: "Built to scale with your business worldwide",
      icon: <Globe className="w-6 h-6 text-orange-400" />
    }
  ];

  const stats = [
    { number: "500+", label: "Active Users" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support" },
    { number: "30-day", label: "Free Trial" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, AI-driven micro SAAS applications designed to solve specific business challenges. 
              Deploy in minutes, scale infinitely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-200 flex items-center justify-center"
              >
                View Demo
                <Play className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Products
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our suite of specialized AI-powered applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border ${
                  product.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-slate-700 hover:border-cyan-500/50'
                } transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/10`}
              >
                {product.popular && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-400 mb-4">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  {product.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">
                    {product.name}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {product.description}
                </p>
                
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  {product.price}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={product.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for modern businesses that need powerful, focused solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and experience the power of AI-driven micro SAAS solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-200 flex items-center justify-center"
            >
              Schedule Consultation
              <Calendar className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;