import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Code, 
  Database, 
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Clock,
  Target,
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
  Brain,
  Cpu,
  Wifi,
  Battery,
  Camera,
  Headphones,
  Mic,
  Play,
  Pause,
  Volume2,
  Download,
  Upload,
  Share2,
  Heart,
  Bookmark,
  Flag,
  AlertCircle,
  Info,
  HelpCircle,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Copy,
  Save,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Menu,
  MoreHorizontal,
  MoreVertical,
  ExternalLink,
  Link as LinkIcon,
  Eye,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  Key,
  User,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Users as UsersIcon,
  UserCircle,
  UserSquare,
  UserCheck as UserCheckIcon,
  UserX as UserXIcon,
  UserPlus as UserPlusIcon,
  UserMinus as UserMinusIcon,
  UserCircle as UserCircleIcon,
  UserSquare as UserSquareIcon,
  Building,
  Building2,
  Home,
  Map,
  Navigation,
  Compass,
  MapPin as MapPinIcon,
  Map as MapIcon,
  Navigation as NavigationIcon,
  Compass as CompassIcon,
  Home as HomeIcon,
  Building as BuildingIcon,
  Building2 as Building2Icon,
  Store,
  StoreIcon,
  ShoppingBag,
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  DollarSign as DollarSignIcon,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Wallet,
  Banknote,
  Coins,
  Receipt,
  FileText as FileTextIcon,
  File,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileMinus,
  FilePlus,
  FileX,
  FileCheck,
  FileEdit,
  FileSearch,
  FileSliders,
  FileBarChart,
  FilePieChart,
  FileLineChart,
  FileAreaChart,
  FileScatterChart,
  FileRadarChart,
  FileGaugeChart,
  FileFunnelChart,
  FileSankeyChart,
  FileTreemapChart,
  FileSunburstChart,
  FileHeatmapChart,
  FileBoxplotChart,
  FileViolinChart,
  FileCandlestickChart,
  FileOhlcChart,
  FileWaterfallChart,
  FilePolarChart,
  FileRadialChart,
  FileCircularChart,
  FileSpiralChart,
  FileWaveChart,
  FilePulseChart,
  FileHeartChart,
  FileActivityChart,
  FileTrendingChart,
  FileGrowthChart,
  FileDeclineChart,
  FileStableChart,
  FileVolatileChart,
  FileSmoothChart,
  FileRoughChart,
  FileSharpChart,
  FileRoundedChart,
  FileAngularChart,
  FileCurvedChart,
  FileStraightChart,
  FileDiagonalChart,
  FileHorizontalChart,
  FileVerticalChart,
  FileObliqueChart,
  FileSlantedChart,
  FileTiltedChart,
  FileRotatedChart,
  FileFlippedChart,
  FileMirroredChart,
  FileInvertedChart,
  FileReversedChart,
  FileUpsideDownChart,
  FileSidewaysChart,
  FileBackwardsChart,
  FileForwardsChart,
  FileUpwardsChart,
  FileDownwardsChart,
  FileLeftwardsChart,
  FileRightwardsChart,
  FileNorthChart,
  FileSouthChart,
  FileEastChart,
  FileWestChart,
  FileNortheastChart,
  FileNorthwestChart,
  FileSoutheastChart,
  FileSouthwestChart,
  FileCenterChart,
  FileMiddleChart,
  FileTopChart,
  FileBottomChart,
  FileLeftChart,
  FileRightChart,
  FileCornerChart,
  FileEdgeChart,
  FileBorderChart,
  FileOutlineChart,
  FileFrameChart,
  FileMarginChart,
  FilePaddingChart,
  FileSpacingChart,
  FileGapChart,
  FileSpaceChart,
  FileRoomChart,
  FileAreaChart as FileAreaChartIcon,
  FileBarChart as FileBarChartIcon,
  FilePieChart as FilePieChartIcon,
  FileLineChart as FileLineChartIcon,
  FileScatterChart as FileScatterChartIcon,
  FileRadarChart as FileRadarChartIcon,
  FileGaugeChart as FileGaugeChartIcon,
  FileFunnelChart as FileFunnelChartIcon,
  FileSankeyChart as FileSankeyChartIcon,
  FileTreemapChart as FileTreemapChartIcon,
  FileSunburstChart as FileSunburstChartIcon,
  FileHeatmapChart as FileHeatmapChartIcon,
  FileBoxplotChart as FileBoxplotChartIcon,
  FileViolinChart as FileViolinChartIcon,
  FileCandlestickChart as FileCandlestickChartIcon,
  FileOhlcChart as FileOhlcChartIcon,
  FileWaterfallChart as FileWaterfallChartIcon,
  FilePolarChart as FilePolarChartIcon,
  FileRadialChart as FileRadialChartIcon,
  FileCircularChart as FileCircularChartIcon,
  FileSpiralChart as FileSpiralChartIcon,
  FileWaveChart as FileWaveChartIcon,
  FilePulseChart as FilePulseChartIcon,
  FileHeartChart as FileHeartChartIcon,
  FileActivityChart as FileActivityChartIcon,
  FileTrendingChart as FileTrendingChartIcon,
  FileGrowthChart as FileGrowthChartIcon,
  FileDeclineChart as FileDeclineChartIcon,
  FileStableChart as FileStableChartIcon,
  FileVolatileChart as FileVolatileChartIcon,
  FileSmoothChart as FileSmoothChartIcon,
  FileRoughChart as FileRoughChartIcon,
  FileSharpChart as FileSharpChartIcon,
  FileRoundedChart as FileRoundedChartIcon,
  FileAngularChart as FileAngularChartIcon,
  FileCurvedChart as FileCurvedChartIcon,
  FileStraightChart as FileStraightChartIcon,
  FileDiagonalChart as FileDiagonalChartIcon,
  FileHorizontalChart as FileHorizontalChartIcon,
  FileVerticalChart as FileVerticalChartIcon,
  FileObliqueChart as FileObliqueChartIcon,
  FileSlantedChart as FileSlantedChartIcon,
  FileTiltedChart as FileTiltedChartIcon,
  FileRotatedChart as FileRotatedChartIcon,
  FileFlippedChart as FileFlippedChartIcon,
  FileMirroredChart as FileMirroredChartIcon,
  FileInvertedChart as FileInvertedChartIcon,
  FileReversedChart as FileReversedChartIcon,
  FileUpsideDownChart as FileUpsideDownChartIcon,
  FileSidewaysChart as FileSidewaysChartIcon,
  FileBackwardsChart as FileBackwardsChartIcon,
  FileForwardsChart as FileForwardsChartIcon,
  FileUpwardsChart as FileUpwardsChartIcon,
  FileDownwardsChart as FileDownwardsChartIcon,
  FileLeftwardsChart as FileLeftwardsChartIcon,
  FileRightwardsChart as FileRightwardsChartIcon,
  FileNorthChart as FileNorthChartIcon,
  FileSouthChart as FileSouthChartIcon,
  FileEastChart as FileEastChartIcon,
  FileWestChart as FileWestChartIcon,
  FileNortheastChart as FileNortheastChartIcon,
  FileNorthwestChart as FileNorthwestChartIcon,
  FileSoutheastChart as FileSoutheastChartIcon,
  FileSouthwestChart as FileSouthwestChartIcon,
  FileCenterChart as FileCenterChartIcon,
  FileMiddleChart as FileMiddleChartIcon,
  FileTopChart as FileTopChartIcon,
  FileBottomChart as FileBottomChartIcon,
  FileLeftChart as FileLeftChartIcon,
  FileRightChart as FileRightChartIcon,
  FileCornerChart as FileCornerChartIcon,
  FileEdgeChart as FileEdgeChartIcon,
  FileBorderChart as FileBorderChartIcon,
  FileOutlineChart as FileOutlineChartIcon,
  FileFrameChart as FileFrameChartIcon,
  FileMarginChart as FileMarginChartIcon,
  FilePaddingChart as FilePaddingChartIcon,
  FileSpacingChart as FileSpacingChartIcon,
  FileGapChart as FileGapChartIcon,
  FileSpaceChart as FileSpaceChartIcon,
  FileRoomChart as FileRoomChartIcon
} from 'lucide-react';

const MicroSaasPage = () => {
  const benefits = [
    {
      title: "Cost-Effective",
      description: "No upfront costs, pay only for what you use",
      icon: <DollarSign className="w-6 h-6" />,
      stat: "Up to 70% savings"
    },
    {
      title: "Quick Setup",
      description: "Get started in minutes, not months",
      icon: <Zap className="w-6 h-6" />,
      stat: "5-minute setup"
    },
    {
      title: "Scalable",
      description: "Grow with your business needs",
      icon: <Cloud className="w-6 h-6" />,
      stat: "Unlimited scaling"
    }
  ];

  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration"],
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/zion-security-shield",
      features: ["AI Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports"],
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-cloud-vault",
      features: ["End-to-End Encryption", "Unlimited Storage", "Global CDN", "Backup & Recovery"],
      popular: false
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      link: "/zion-ai-crm-pro",
      features: ["AI Lead Scoring", "Automated Workflows", "Sales Forecasting", "Customer Insights"],
      popular: true
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      link: "/zion-ai-marketing-automation-pro",
      features: ["AI Content Generation", "Multi-channel Campaigns", "Behavioral Targeting", "ROI Analytics"],
      popular: false
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      price: "From $99/month",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      link: "/zion-ai-project-manager-pro",
      features: ["AI Task Prioritization", "Resource Optimization", "Risk Assessment", "Progress Tracking"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We can now make informed decisions in real-time.",
      rating: 5,
      avatar: <Users className="w-8 h-8" />
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours.",
      rating: 5,
      avatar: <Code className="w-8 h-8" />
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner.",
      rating: 5,
      avatar: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Ready-to-use micro SAAS solutions for immediate deployment. AI-powered tools for analytics, security, CRM, and more."
        />
        <meta name="keywords" content="micro saas, software as a service, AI tools, business automation, analytics, CRM, security" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Micro SAAS Solutions
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              No development time, no technical complexity - just powerful tools that work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get enterprise-grade solutions without the complexity and cost of traditional software development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <div className="text-cyan-400 font-semibold text-lg">{benefit.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of ready-to-use business solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {product.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">{product.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={product.link}
                    className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our micro SAAS solutions have transformed businesses across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
