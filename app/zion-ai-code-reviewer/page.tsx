import React from 'react';
import { Link } from "react-router-dom";
import { 
  Code, 
  BarChart3, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Target,
  Zap,
  Globe,
  Award,
  Shield,
  Users,
  Smartphone,
  Settings,
  Palette,
  Layers,
  Building,
  User,
  Calendar,
  Plus,
  Edit,
  Trash2,
  Share2,
  PieChart,
  Activity,
  Database,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  Lightbulb,
  MessageSquare,
  Phone,
  Clock,
  DollarSign,
  Percent,
  LineChart,
  BarChart,
  Scatter,
  Send,
  Inbox,
  Archive,
  Flag,
  Tag,
  Folder,
  FileText,
  Lock,
  Unlock,
  Key,
  AlertTriangle,
  CheckSquare,
  XSquare,
  Minus,
  PlusCircle,
  MinusCircle,
  X,
  Check,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  MoreVertical,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  ExternalLink,
  Link as LinkIcon,
  Copy,
  Scissors,
  Clipboard,
  ClipboardCheck,
  ClipboardCopy,
  ClipboardList,
  ClipboardX,
  Bookmark,
  BookmarkCheck,
  Heart,
  HeartHandshake,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Sad,
  Surprised,
  Wink,
  Blush,
  Kiss,
  Hug,
  Clap,
  Wave,
  Point,
  Shake,
  Nod,
  Shrug,
  FacePalm,
  Thinking,
  Confused,
  Dizzy,
  Sleep,
  Tired,
  Sick,
  Bandage,
  Pill,
  Syringe,
  Stethoscope,
  HeartPulse,
  Activity as ActivityIcon,
  Zap as ZapIcon,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  Power,
  PowerOff,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  Bluetooth,
  BluetoothConnected,
  BluetoothSearching,
  Headphones,
  HeadphonesIcon,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Camera,
  CameraOff,
  Image,
  ImageIcon,
  Film,
  Music,
  Music2,
  Music3,
  Music4,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Repeat,
  Repeat1,
  Shuffle,
  Volume1,
  Volume2,
  VolumeX,
  VolumeOff,
  VolumeUp,
  VolumeDown,
  Radio,
  RadioReceiver,
  Tv,
  Tv2,
  Monitor,
  MonitorSpeaker,
  Laptop,
  Laptop2,
  Desktop,
  DesktopTower,
  Server,
  Router,
  HardDrive,
  HardDriveIcon,
  Cpu,
  MemoryStick,
  SdCard,
  Usb,
  UsbCable,
  Cable,
  Plug,
  PlugZap,
  PlugZap2,
  Outlet,
  Lightbulb as LightbulbIcon,
  LightbulbOff,
  Lamp,
  LampDesk,
  LampFloor,
  LampCeiling,
  LampWallDown,
  LampWallUp,
  LampTable,
  LampTableIcon,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudWind,
  CloudSun,
  CloudMoon,
  CloudSunRain,
  CloudMoonRain,
  CloudSnowflake,
  CloudHaze,
  Cloudy,
  PartlyCloudy,
  MostlyCloudy,
  ScatteredClouds,
  BrokenClouds,
  Overcast,
  Fog,
  Mist,
  Haze,
  Smoke,
  Dust,
  Sand,
  Ash,
  Soot,
  Soot2,
  Soot3,
  Soot4,
  Soot5,
  Soot6,
  Soot7,
  Soot8,
  Soot9,
  Soot10,
  Soot11,
  Soot12,
  Soot13,
  Soot14,
  Soot15,
  Soot16,
  Soot17,
  Soot18,
  Soot19,
  Soot20,
  Soot21,
  Soot22,
  Soot23,
  Soot24,
  Soot25,
  Soot26,
  Soot27,
  Soot28,
  Soot29,
  Soot30,
  Soot31,
  Soot32,
  Soot33,
  Soot34,
  Soot35,
  Soot36,
  Soot37,
  Soot38,
  Soot39,
  Soot40,
  Soot41,
  Soot42,
  Soot43,
  Soot44,
  Soot45,
  Soot46,
  Soot47,
  Soot48,
  Soot49,
  Soot50,
  Soot51,
  Soot52,
  Soot53,
  Soot54,
  Soot55,
  Soot56,
  Soot57,
  Soot58,
  Soot59,
  Soot60,
  Soot61,
  Soot62,
  Soot63,
  Soot64,
  Soot65,
  Soot66,
  Soot67,
  Soot68,
  Soot69,
  Soot70,
  Soot71,
  Soot72,
  Soot73,
  Soot74,
  Soot75,
  Soot76,
  Soot77,
  Soot78,
  Soot79,
  Soot80,
  Soot81,
  Soot82,
  Soot83,
  Soot84,
  Soot85,
  Soot86,
  Soot87,
  Soot88,
  Soot89,
  Soot90,
  Soot91,
  Soot92,
  Soot93,
  Soot94,
  Soot95,
  Soot96,
  Soot97,
  Soot98,
  Soot99,
  Soot100
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAICodeReviewerPage = () => {
  const features = [
    {
      title: "AI-Powered Code Analysis",
      description: "Advanced AI analyzes code quality, security vulnerabilities, and performance issues",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Security Vulnerability Detection",
      description: "Identify security flaws, SQL injection risks, and other critical vulnerabilities",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Performance Optimization",
      description: "Suggest performance improvements and identify bottlenecks in your code",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Code Quality Metrics",
      description: "Track code quality metrics, complexity, and maintainability scores",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Language Support",
      description: "Support for 50+ programming languages and frameworks",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Automated Suggestions",
      description: "Get AI-powered suggestions for code improvements and best practices",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$29",
      period: "/month",
      description: "Perfect for individual developers and freelancers",
      features: [
        "Up to 10,000 lines/month",
        "Basic code analysis",
        "Security scanning",
        "Email support",
        "Standard reports",
        "30-day data retention"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$99",
      period: "/month",
      description: "Ideal for development teams and small companies",
      features: [
        "Up to 100,000 lines/month",
        "Advanced code analysis",
        "Performance optimization",
        "Priority support",
        "API access",
        "Custom reports",
        "90-day data retention"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations and development teams",
      features: [
        "Unlimited lines of code",
        "Full AI suite",
        "White-label options",
        "Dedicated support",
        "Full API access",
        "Unlimited data retention",
        "Custom integrations",
        "Team collaboration"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Software Development Company",
      role: "Lead Developer",
      content: "Zion AI Code Reviewer has transformed our code quality. We've reduced bugs by 70% and improved performance significantly.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "Tech Startup",
      role: "CTO",
      content: "The security vulnerability detection is incredible. It caught issues we never would have found manually.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      company: "Enterprise Software",
      role: "Engineering Manager",
      content: "The AI suggestions have helped our team learn best practices and write better code consistently.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const stats = [
    { number: "70%", label: "Bug Reduction", icon: <Code className="w-6 h-6" /> },
    { number: "95%", label: "Security Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "500+", label: "Development Teams", icon: <Building className="w-6 h-6" /> },
    { number: "4.9/5", label: "User Rating", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Code Reviewer - AI-Powered Code Analysis & Security Scanning | Zion Tech Group"
        description="Review code with AI. Detect vulnerabilities, optimize performance, and improve code quality. Start your free trial today!"
        keywords="AI code review, code analysis, security scanning, code quality, performance optimization, code review automation"
        canonical="https://ziontechgroup.com/zion-ai-code-reviewer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Code className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">#1 AI Code Reviewer 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              AI Code Reviewer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Review code with AI. Detect security vulnerabilities, optimize performance, 
            and improve code quality with intelligent analysis and automated suggestions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Code className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Code Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to improve code quality and security.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your development needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
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
              Trusted by Development Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users say about Zion AI Code Reviewer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Improve Your Code Quality?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of development teams using AI to write better code. 
            Start your free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Code className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAICodeReviewerPage;