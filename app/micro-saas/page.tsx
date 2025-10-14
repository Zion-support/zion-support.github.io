import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Package, 
  Shield, 
  BarChart3, 
  Cloud, 
  Users, 
  Zap, 
  Mail,
  Brain,
  Code,
  Database,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Lock,
  TrendingUp,
  Target,
  Settings,
  Monitor,
  FileText,
  MessageSquare,
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
  Award,
  Rocket,
  Cpu,
  Wifi,
  Battery,
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
  Navigation,
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
  Phone,
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
  Receipt,
  ClipboardList,
  Workflow
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "Advanced analytics platform with AI-powered insights and real-time reporting",
      features: [
        "Real-time Data Visualization",
        "AI-Powered Insights",
        "Custom Dashboards",
        "Automated Reporting",
        "Data Integration",
        "Performance Monitoring"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "From $299/month",
      popular: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity solution with advanced threat detection and protection",
      features: [
        "Threat Detection",
        "Real-time Monitoring",
        "Automated Response",
        "Compliance Management",
        "Security Analytics",
        "Incident Response"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      price: "From $499/month",
      popular: false
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and data management with enterprise-grade security",
      features: [
        "Secure Cloud Storage",
        "Data Encryption",
        "Access Control",
        "Backup & Recovery",
        "File Sharing",
        "Version Control"
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      price: "From $199/month",
      popular: false
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform for digital marketing",
      features: [
        "AI Content Generation",
        "Multi-format Support",
        "Brand Consistency",
        "Collaboration Tools",
        "Content Scheduling",
        "Performance Analytics"
      ],
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      price: "From $399/month",
      popular: true
    },
    {
      id: "zion-ai-video-generator",
      name: "Zion AI Video Generator",
      description: "Create professional videos with AI-powered automation and editing tools",
      features: [
        "AI Video Creation",
        "Auto-editing",
        "Template Library",
        "Multi-platform Export",
        "Voice Synthesis",
        "Visual Effects"
      ],
      icon: <Video className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "From $599/month",
      popular: false
    },
    {
      id: "zion-ai-voice-assistant-pro",
      name: "Zion AI Voice Assistant Pro",
      description: "Advanced voice assistant with natural language processing and automation",
      features: [
        "Natural Language Processing",
        "Voice Commands",
        "Task Automation",
        "Multi-language Support",
        "Integration APIs",
        "Custom Responses"
      ],
      icon: <Mic className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "From $799/month",
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Innovative Software as a Service | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of Micro SAAS solutions including analytics, security, cloud storage, content creation, and AI-powered tools for modern businesses." />
        <meta name="keywords" content="micro SAAS, software as a service, analytics, security, cloud storage, content creation, AI tools, business software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Package className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our innovative suite of Micro SAAS solutions designed to streamline your business operations and drive growth with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  View Pricing
                </button>
              </div>
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of Micro SAAS solutions designed to meet your specific business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div key={product.id} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group relative ${
                  product.popular ? 'border-cyan-500/40 ring-2 ring-cyan-500/20' : 'border-cyan-500/20'
                }`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{product.price}</span>
                    <Link
                      to={`/${product.id}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey with our Micro SAAS solutions and experience the power of modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;