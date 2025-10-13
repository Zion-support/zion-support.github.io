import React from 'react';
import { Link } from "react-router-dom";
import { 
  Users, 
  Brain, 
  FileText, 
  Calendar, 
  Target, 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle,
  UserPlus,
  Briefcase,
  GraduationCap,
  Clock,
  Shield,
  BarChart3,
  TrendingUp,
  Award,
  MessageSquare,
  Mail,
  Phone,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Search,
  Filter,
  Download,
  Share2,
  Database,
  Cpu,
  Layers,
  Activity,
  PieChart,
  LineChart,
  DollarSign,
  Settings,
  UserCheck,
  ClipboardList,
  BookOpen,
  Video,
  Mic,
  Camera,
  HeadphonesIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Upload,
  Download as DownloadIcon,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  User,
  UserX,
  UserCog,
  Building,
  Home,
  MapPin,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Globe as GlobeIcon,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Menu,
  X,
  MoreHorizontal,
  MoreVertical,
  Search as SearchIcon,
  Filter as FilterIcon,
  SortAsc,
  SortDesc,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  Move,
  Copy,
  Scissors,
  Clipboard,
  File,
  Folder,
  FolderOpen,
  Archive,
  Trash,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Bookmark,
  Tag,
  Tags,
  Hash,
  AtSign,
  Percent,
  DollarSign as DollarSignIcon,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  TrendingUp as TrendingUpIcon,
  TrendingDown,
  Activity as ActivityIcon,
  Zap as ZapIcon,
  Flash,
  Bolt,
  Fire,
  Snowflake,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Sun as SunIcon,
  Moon as MoonIcon,
  Sunrise,
  Sunset,
  Compass,
  Map,
  Navigation,
  Route,
  Car,
  Bus,
  Train,
  Plane,
  Ship,
  Bike,
  Walking,
  Running,
  Swimming,
  Gamepad2,
  Controller,
  Joystick,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Crown,
  Gem,
  Diamond,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Star as StarIcon2,
  Heart as HeartIcon,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Sad,
  Surprised,
  Confused,
  Wink,
  Kiss,
  Tongue,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Ear,
  Nose,
  Mouth,
  Hand,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  Camera as CameraIcon,
  Video as VideoIcon,
  Mic as MicIcon,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Music,
  Headphones as HeadphonesIcon2,
  Speaker,
  Radio,
  Tv,
  Monitor as MonitorIcon,
  Laptop,
  Smartphone as SmartphoneIcon,
  Tablet,
  Watch,
  Clock as ClockIcon2,
  Timer,
  Stopwatch,
  AlarmClock,
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
  CalendarKey,
  CalendarEye,
  CalendarEyeOff,
  CalendarSearch as CalendarSearchIcon,
  CalendarFilter,
  CalendarSort,
  CalendarRefresh,
  CalendarRotate,
  CalendarMaximize,
  CalendarMinimize,
  CalendarMove as CalendarMoveIcon,
  CalendarCopy as CalendarCopyIcon,
  CalendarScissors,
  CalendarClipboard,
  CalendarFile,
  CalendarFolder,
  CalendarFolderOpen,
  CalendarArchive as CalendarArchiveIcon,
  CalendarTrash as CalendarTrashIcon,
  CalendarStar as CalendarStarIcon,
  CalendarHeart as CalendarHeartIcon,
  CalendarBookmark,
  CalendarTag,
  CalendarTags,
  CalendarHash,
  CalendarAtSign,
  CalendarPercent,
  CalendarDollarSign,
  CalendarCreditCard,
  CalendarWallet,
  CalendarBanknote,
  CalendarCoins,
  CalendarTrendingUp,
  CalendarTrendingDown,
  CalendarActivity,
  CalendarZap,
  CalendarFlash,
  CalendarBolt,
  CalendarFire,
  CalendarSnowflake,
  CalendarSun,
  CalendarMoon,
  CalendarCloud,
  CalendarCloudRain,
  CalendarCloudSnow,
  CalendarCloudLightning,
  CalendarWind,
  CalendarThermometer,
  CalendarDroplets,
  CalendarUmbrella,
  CalendarSun as CalendarSunIcon,
  CalendarMoon as CalendarMoonIcon,
  CalendarSunrise,
  CalendarSunset,
  CalendarCompass,
  CalendarMap,
  CalendarNavigation,
  CalendarRoute,
  CalendarCar,
  CalendarBus,
  CalendarTrain,
  CalendarPlane,
  CalendarShip,
  CalendarBike,
  CalendarWalking,
  CalendarRunning,
  CalendarSwimming,
  CalendarGamepad2,
  CalendarController,
  CalendarJoystick,
  CalendarDice1,
  CalendarDice2,
  CalendarDice3,
  CalendarDice4,
  CalendarDice5,
  CalendarDice6,
  CalendarCrown,
  CalendarGem,
  CalendarDiamond,
  CalendarCircle,
  CalendarSquare,
  CalendarTriangle,
  CalendarHexagon,
  CalendarOctagon,
  CalendarPentagon,
  CalendarStar as CalendarStarIcon2,
  CalendarHeart as CalendarHeartIcon2,
  CalendarSmile,
  CalendarFrown,
  CalendarMeh,
  CalendarLaugh,
  CalendarAngry,
  CalendarSad,
  CalendarSurprised,
  CalendarConfused,
  CalendarWink,
  CalendarKiss,
  CalendarTongue,
  CalendarEye as CalendarEyeIcon,
  CalendarEyeOff as CalendarEyeOffIcon,
  CalendarEar,
  CalendarNose,
  CalendarMouth,
  CalendarHand,
  CalendarFingerprint,
  CalendarScan,
  CalendarQrCode,
  CalendarBarcode,
  CalendarCamera,
  CalendarVideo,
  CalendarMic,
  CalendarVolume2,
  CalendarVolumeX,
  CalendarPlay,
  CalendarPause,
  CalendarStop,
  CalendarSkipBack,
  CalendarSkipForward,
  CalendarRepeat,
  CalendarShuffle,
  CalendarMusic,
  CalendarHeadphones,
  CalendarSpeaker,
  CalendarRadio,
  CalendarTv,
  CalendarMonitor,
  CalendarLaptop,
  CalendarSmartphone,
  CalendarTablet,
  CalendarWatch,
  CalendarClock as CalendarClockIcon2,
  CalendarTimer,
  CalendarStopwatch,
  CalendarAlarmClock
} from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

const ZionAIHRAssistantPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI HR Assistant Pro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": "Comprehensive AI-powered HR management platform with recruitment, employee management, performance tracking, and automated workflows.",
    "url": "https://ziontechgroup.com/zion-ai-hr-assistant",
    "offers": {
      "@type": "Offer",
      "price": "149.99",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "156"
    }
  };

  const features = [
    {
      icon: <UserPlus className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Recruitment",
      description: "Automated candidate screening, resume parsing, and interview scheduling with intelligent matching algorithms"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Employee Management",
      description: "Complete employee lifecycle management from onboarding to offboarding with automated workflows"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "Performance Analytics",
      description: "Advanced analytics and reporting for performance tracking, goal setting, and employee development"
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      title: "AI Insights",
      description: "Predictive analytics for employee retention, performance trends, and workforce planning"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-yellow-400" />,
      title: "Learning Management",
      description: "Integrated learning platform with course recommendations and skill development tracking"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: "Compliance Management",
      description: "Automated compliance tracking, policy management, and regulatory reporting"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149.99",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 employees",
        "Basic recruitment tools",
        "Employee database",
        "Standard reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299.99",
      period: "per month",
      description: "Most popular for growing companies",
      features: [
        "Up to 200 employees",
        "Advanced AI recruitment",
        "Performance management",
        "Learning management system",
        "Priority support",
        "API access",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599.99",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Custom AI models",
        "Advanced analytics",
        "White-label solution",
        "Dedicated account manager",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      role: "HR Director, TechStart Inc",
      content: "Zion AI HR Assistant has streamlined our entire recruitment process. We've reduced time-to-hire by 50% and improved candidate quality significantly.",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "VP of People, GrowthCorp",
      content: "The performance analytics feature gives us incredible insights into our workforce. We can now make data-driven decisions about employee development.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "CEO, StartupXYZ",
      content: "The AI-powered insights help us predict and prevent employee turnover. We've improved retention rates by 35% in just 6 months.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-green-400" />,
      title: "Save Time",
      description: "Automate 80% of HR tasks and reduce administrative overhead by 60%"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Improve Retention",
      description: "AI insights help identify at-risk employees and improve retention by 35%"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Better Hires",
      description: "AI-powered recruitment improves candidate quality and reduces time-to-hire by 50%"
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      title: "Compliance Ready",
      description: "Stay compliant with automated tracking and reporting for all regulations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI HR Assistant Pro - Complete HR Management Platform"
        description="AI-powered HR management platform with recruitment, employee management, performance tracking, and automated workflows. Streamline your HR processes with intelligent automation."
        keywords="AI HR management, recruitment automation, employee management, performance tracking, HR analytics, workforce planning, compliance management"
        structuredData={structuredData}
      />
      
      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="relative py-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">AI-Powered HR Management</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion AI HR
              </span>
              <br />
              <span className="text-white">Assistant Pro</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete HR management platform with AI-powered recruitment, employee management, 
              performance tracking, and automated workflows. Transform your HR processes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <FuturisticButton
                href="#pricing"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <Users className="mr-2 w-5 h-5" />
                View Demo
              </FuturisticButton>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">50% Faster Hiring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">35% Better Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">80% Task Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Compliance Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> HR Operations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join industry leaders who have revolutionized their HR processes with AI-powered automation.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive HR
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your workforce efficiently and effectively.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Pricing Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your organization. All plans include our core HR features.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="#contact"
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-white'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> HR Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our customers have transformed their HR operations.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-400">{testimonial.role}</div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <FuturisticCard className="p-12 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-2 border-purple-400/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations already using Zion AI HR Assistant Pro to streamline their HR processes and improve employee experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FuturisticButton
                href="#contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us: +1 302 464 0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default ZionAIHRAssistantPage;