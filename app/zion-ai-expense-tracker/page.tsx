import React from 'react';
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  Receipt, 
  BarChart3, 
  Brain, 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle,
  CreditCard,
  Wallet,
  PieChart,
  TrendingUp,
  Target,
  Shield,
  Cloud,
  Smartphone,
  Monitor,
  Headphones,
  MessageSquare,
  Globe,
  Mail,
  Phone,
  Search,
  Filter,
  Download,
  Share2,
  Clock,
  FileText,
  Database,
  Cpu,
  Layers,
  Activity,
  LineChart,
  Users,
  Calendar,
  Award,
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
  CreditCard as CreditCardIcon,
  Wallet as WalletIcon,
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
  Cloud as CloudIcon,
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

const ZionAIExpenseTrackerPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Expense Tracker Pro",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": "AI-powered expense tracking and financial management platform with receipt scanning, automated categorization, and intelligent budgeting insights.",
    "url": "https://ziontechgroup.com/zion-ai-expense-tracker",
    "offers": {
      "@type": "Offer",
      "price": "19.99",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "ratingCount": "203"
    }
  };

  const features = [
    {
      icon: <Receipt className="w-6 h-6 text-cyan-400" />,
      title: "Smart Receipt Scanning",
      description: "AI-powered receipt scanning with 98% accuracy. Just snap a photo and let AI extract all the details automatically"
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: "AI Categorization",
      description: "Automatically categorize expenses using machine learning. Learn from your patterns and improve over time"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards with spending insights, trends analysis, and budget performance tracking"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Smart Budgeting",
      description: "AI-powered budget recommendations based on your spending patterns and financial goals"
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      title: "Fraud Detection",
      description: "Advanced fraud detection algorithms identify suspicious transactions and unusual spending patterns"
    },
    {
      icon: <PieChart className="w-6 h-6 text-red-400" />,
      title: "Visual Reports",
      description: "Beautiful charts and graphs to visualize your spending patterns and financial health"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$19.99",
      period: "per month",
      description: "Perfect for individuals",
      features: [
        "Unlimited expense tracking",
        "Receipt scanning (100/month)",
        "Basic categorization",
        "Standard reports",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$39.99",
      period: "per month",
      description: "Most popular for professionals",
      features: [
        "Everything in Personal",
        "Unlimited receipt scanning",
        "Advanced AI categorization",
        "Custom budget categories",
        "Priority support",
        "API access",
        "Bank integration"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$79.99",
      period: "per month",
      description: "For small businesses",
      features: [
        "Everything in Professional",
        "Multi-user accounts",
        "Team expense management",
        "Advanced reporting",
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      content: "Zion AI Expense Tracker has completely transformed how I manage my finances. The receipt scanning is incredibly accurate and saves me hours every week.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      content: "The AI categorization feature is a game-changer. It automatically organizes all our business expenses and helps us stay compliant with tax requirements.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Financial Advisor",
      content: "The analytics and reporting features give my clients incredible insights into their spending patterns. It's become an essential tool for financial planning.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-green-400" />,
      title: "Save Time",
      description: "Automate 90% of expense tracking tasks and reduce manual data entry by 95%"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-400" />,
      title: "Save Money",
      description: "Identify spending patterns and save an average of $2,400 per year through better budgeting"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Stay Organized",
      description: "Never lose a receipt again with cloud storage and automatic categorization"
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Stay Secure",
      description: "Bank-level security with encryption and fraud detection to protect your financial data"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Expense Tracker Pro - Smart Expense Management & Receipt Scanning"
        description="AI-powered expense tracking platform with receipt scanning, automated categorization, and intelligent budgeting. Manage your finances with 98% accuracy and save time."
        keywords="AI expense tracking, receipt scanning, financial management, budget tracking, expense categorization, personal finance, business expenses"
        structuredData={structuredData}
      />
      
      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="relative py-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 blur-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-medium">AI-Powered Finance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion AI Expense
              </span>
              <br />
              <span className="text-white">Tracker Pro</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Smart expense tracking with AI-powered receipt scanning, automated categorization, 
              and intelligent budgeting insights. Take control of your finances.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <FuturisticButton
                href="#pricing"
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <Receipt className="mr-2 w-5 h-5" />
                View Demo
              </FuturisticButton>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">98% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">AI Categorization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Real-Time Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Bank Integration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> Financial Management</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of users who have revolutionized their expense tracking with AI-powered automation.
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
              Powerful Features for
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> Smart Finance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to take control of your finances with AI-powered insights.
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
              Simple
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> Pricing Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your financial management needs. All plans include our core features.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white'
                      : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
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
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> Smart Users</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our customers have transformed their financial management.
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
                  <div className="text-green-400">{testimonial.role}</div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <FuturisticCard className="p-12 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border-2 border-green-400/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of users already using Zion AI Expense Tracker Pro to simplify their financial management and save money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FuturisticButton
                href="#contact"
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
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

export default ZionAIExpenseTrackerPage;