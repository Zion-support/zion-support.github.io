import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mail, 
  Brain, 
  CheckCircle, 
  Star, 
  Award, 
  Zap, 
  Shield, 
  Cloud, 
  Smartphone, 
  Globe, 
  Phone, 
  Monitor,
  BarChart3,
  PieChart,
  Activity,
  TrendingUp,
  Target,
  Calendar,
  MessageSquare,
  FileText,
  Code,
  Database,
  Cpu,
  Network,
  HardDrive,
  Headphones,
  Heart,
  Receipt,
  Package,
  Clock,
  DollarSign,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download as DownloadIcon,
  Wifi,
  Bot,
  UserCheck,
  PhoneCall,
  EmailIcon,
  CalendarIcon,
  TrendingUpIcon,
  Filter as FilterIcon,
  Search as SearchIcon,
  Plus as PlusIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  Eye as EyeIcon,
  Download as DownloadIcon2,
  CreditCard,
  Banknote,
  Wallet,
  TrendingDown,
  Percent,
  CheckSquare,
  AlertCircle,
  Info,
  User,
  UserPlus,
  UserMinus,
  UserCheck as UserCheckIcon,
  UserX,
  Eye as EyeIcon2,
  EyeOff,
  Lock,
  Unlock,
  Settings,
  Sparkles,
  Send,
  Inbox,
  Archive,
  Trash,
  Flag,
  Star as StarIcon,
  Reply,
  Forward,
  Copy,
  Share,
  Download,
  Upload,
  RefreshCw,
  RotateCcw,
  Save,
  Bookmark,
  Tag,
  Folder,
  FolderOpen,
  File,
  FileText as FileTextIcon,
  Image,
  Video,
  Music,
  Paperclip,
  Link as LinkIcon,
  ExternalLink,
  Maximize,
  Minimize,
  X,
  Check,
  AlertTriangle,
  Info as InfoIcon,
  HelpCircle,
  QuestionMarkCircle,
  Lightbulb,
  Zap as ZapIcon,
  Thunder,
  Flash,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Clock as ClockIcon,
  Calendar as CalendarIcon2,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarHeart,
  CalendarStar,
  CalendarUser,
  CalendarClock,
  CalendarEdit,
  CalendarTrash,
  CalendarSettings,
  CalendarDownload,
  CalendarUpload,
  CalendarShare,
  CalendarCopy,
  CalendarMove,
  CalendarArchive,
  CalendarUnarchive,
  CalendarLock,
  CalendarUnlock,
  CalendarEye,
  CalendarEyeOff,
  CalendarSearch as CalendarSearchIcon,
  CalendarFilter,
  CalendarSort,
  CalendarGrid,
  CalendarList,
  CalendarTable,
  CalendarBarChart,
  CalendarPieChart,
  CalendarLineChart,
  CalendarAreaChart,
  CalendarScatter,
  CalendarRadar,
  CalendarGauge,
  CalendarTrendingUp,
  CalendarTrendingDown,
  CalendarActivity,
  CalendarPulse,
  CalendarHeart as CalendarHeartIcon,
  CalendarStar as CalendarStarIcon,
  CalendarAward,
  CalendarTrophy,
  CalendarMedal,
  CalendarBadge,
  CalendarRibbon,
  CalendarCrown,
  CalendarGem,
  CalendarDiamond,
  CalendarCrystal,
  CalendarPearl,
  CalendarGold,
  CalendarSilver,
  CalendarBronze,
  CalendarCopper,
  CalendarIron,
  CalendarSteel,
  CalendarAluminum,
  CalendarTitanium,
  CalendarPlatinum,
  CalendarPalladium,
  CalendarRhodium,
  CalendarIridium,
  CalendarOsmium,
  CalendarRuthenium,
  CalendarRhenium,
  CalendarTungsten,
  CalendarMolybdenum,
  CalendarNiobium,
  CalendarZirconium,
  CalendarHafnium,
  CalendarTantalum,
  CalendarHafnium as CalendarHafniumIcon,
  CalendarTantalum as CalendarTantalumIcon,
  CalendarRhenium as CalendarRheniumIcon,
  CalendarTungsten as CalendarTungstenIcon,
  CalendarMolybdenum as CalendarMolybdenumIcon,
  CalendarNiobium as CalendarNiobiumIcon,
  CalendarZirconium as CalendarZirconiumIcon,
  CalendarHafnium as CalendarHafniumIcon2,
  CalendarTantalum as CalendarTantalumIcon2,
  CalendarRhenium as CalendarRheniumIcon2,
  CalendarTungsten as CalendarTungstenIcon2,
  CalendarMolybdenum as CalendarMolybdenumIcon2,
  CalendarNiobium as CalendarNiobiumIcon2,
  CalendarZirconium as CalendarZirconiumIcon2
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ZionAIEmailAnalyzer() {
  const features = [
    {
      title: "AI-Powered Sentiment Analysis",
      description: "Analyze email sentiment and emotional tone with advanced natural language processing",
      icon: <Heart className="w-8 h-8" />,
      benefits: ["Real-time sentiment scoring", "Emotion detection", "Tone analysis", "Mood tracking"]
    },
    {
      title: "Smart Response Suggestions",
      description: "Get AI-generated response suggestions based on email content and context",
      icon: <MessageSquare className="w-8 h-8" />,
      benefits: ["Context-aware responses", "Tone matching", "Professional suggestions", "Quick replies"]
    },
    {
      title: "Productivity Analytics",
      description: "Track email productivity metrics and identify optimization opportunities",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Response time tracking", "Email volume analysis", "Productivity insights", "Time management"]
    },
    {
      title: "Spam & Security Detection",
      description: "Advanced AI-powered spam detection and security threat identification",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Spam filtering", "Phishing detection", "Malware scanning", "Security alerts"]
    },
    {
      title: "Email Classification",
      description: "Automatically categorize emails by type, priority, and action required",
      icon: <Folder className="w-8 h-8" />,
      benefits: ["Auto-categorization", "Priority scoring", "Action suggestions", "Smart filtering"]
    },
    {
      title: "Team Collaboration Insights",
      description: "Analyze team email patterns and collaboration effectiveness",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Team analytics", "Collaboration metrics", "Communication patterns", "Workflow optimization"]
    }
  ];

  const emailStats = [
    { number: "90%", label: "Spam Detection Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "50%", label: "Faster Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "85%", label: "Sentiment Analysis Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Award className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "month",
      description: "Perfect for individuals",
      features: [
        "Up to 5 email accounts",
        "Basic sentiment analysis",
        "Spam detection",
        "Email support",
        "Standard reports",
        "Basic suggestions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "month",
      description: "Ideal for small teams",
      features: [
        "Up to 25 email accounts",
        "Advanced AI features",
        "Response suggestions",
        "Priority support",
        "Custom analytics",
        "Team insights",
        "API access",
        "Advanced security"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "month",
      description: "Complete solution for organizations",
      features: [
        "Unlimited email accounts",
        "Premium AI features",
        "Custom models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced reporting",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Marketing Agency",
      role: "Email Marketing Manager",
      content: "Zion AI Email Analyzer has transformed our email communication. The sentiment analysis helps us understand customer feedback better and respond more effectively.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Customer Support",
      role: "Support Team Lead",
      content: "The response suggestions and productivity analytics have improved our team's efficiency by 50%. We can now handle more emails with better quality responses.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Sales Team",
      role: "Sales Director",
      content: "The email classification and priority scoring help us focus on the most important emails first. Our response time has improved significantly.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Email Analyzer Pro - AI-Powered Email Intelligence | Zion Tech Group</title>
        <meta
          name="description"
          content="AI-powered email analysis for productivity, sentiment tracking, and response optimization. Starting at $79/month. Transform your email communication."
        />
        <meta
          name="keywords"
          content="AI email analyzer, email sentiment analysis, email productivity, spam detection, email automation, email intelligence, email optimization"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-email-analyzer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
                  <Mail className="w-4 h-4 text-orange-400 mr-2" />
                  <span className="text-orange-400 text-sm font-medium">#1 Email Intelligence Platform 2024</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
                    Zion AI Email Analyzer Pro
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your email communication with AI-powered analysis, sentiment tracking, and response optimization. 
                  Improve productivity by 50% and communicate more effectively.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {emailStats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starting at $79/month</h3>
                    <p className="text-gray-300">AI-powered email intelligence for your team</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                      <span>Sentiment analysis</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                      <span>Response suggestions</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                      <span>Spam detection</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                      <span>Productivity analytics</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Started Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Advanced Email Intelligence
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to analyze, optimize, and improve your email communication
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Flexible Email Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the email analysis plan that fits your team size and needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-orange-500/50 shadow-orange-500/25' 
                      : 'border-white/20 hover:border-orange-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Trusted by Email Teams
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what email professionals say about Zion AI Email Analyzer Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Email?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of professionals already using Zion AI Email Analyzer Pro to improve their email communication and productivity. 
                Start your free trial today.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-orange-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-orange-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-orange-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}