import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Shield, Brain, Zap, AlertTriangle, Lock, Eye, BarChart3, Clock, Users, Globe, Smartphone, Monitor, Target, Calendar, Mail, Phone, MapPin, Award, TrendingUp, Cloud, Settings, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Sparkles, MessageSquare, FileText, Search, Filter, Download, Upload, Share, Bell, Heart, ThumbsUp, Rocket, Cpu, Wifi, Battery, Camera, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone as PhoneIcon, Voicemail, Headset, Speaker, Volume2, VolumeX, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Shuffle as ShuffleIcon, Repeat as RepeatIcon, Repeat1 as Repeat1Icon, Shuffle2 as Shuffle2Icon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, Square as SquareIcon, Circle as CircleIcon, Triangle as TriangleIcon, Hexagon as HexagonIcon, Octagon as OctagonIcon, Diamond as DiamondIcon, Star as StarIconAlias, Moon as MoonIcon, Sun as SunIcon, Sunrise as SunriseIcon, Sunset as SunsetIcon, CloudRain as CloudRainIcon, CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon, Wind as WindIcon, Droplets as DropletsIcon, Thermometer as ThermometerIcon, Gauge as GaugeIcon, Timer as TimerIcon, Stopwatch as StopwatchIcon, Hourglass as HourglassIcon, Clock3 as Clock3Icon, Clock4 as Clock4Icon, Clock5 as Clock5Icon, Clock6 as Clock6Icon, Clock7 as Clock7Icon, Clock8 as Clock8Icon, Clock9 as Clock9Icon, Clock10 as Clock10Icon, Clock11 as Clock11Icon, Clock12 as Clock12Icon, Calendar as CalendarIconAlias, CalendarDays as CalendarDaysIcon, CalendarCheck as CalendarCheckIcon, CalendarX as CalendarXIcon, CalendarPlus as CalendarPlusIcon, CalendarMinus as CalendarMinusIcon, CalendarRange as CalendarRangeIcon, CalendarSearch as CalendarSearchIcon, CalendarHeart as CalendarHeartIcon, CalendarStar as CalendarStarIcon, CalendarClock as CalendarClockIcon, CalendarUser as CalendarUserIcon, CalendarEdit as CalendarEditIcon, CalendarTrash as CalendarTrashIcon, CalendarSettings as CalendarSettingsIcon, CalendarImport as CalendarImportIcon, CalendarExport as CalendarExportIcon, CalendarShare as CalendarShareIcon, CalendarLock as CalendarLockIcon, CalendarUnlock as CalendarUnlockIcon, CalendarKey as CalendarKeyIcon, CalendarShield as CalendarShieldIcon, CalendarAlert as CalendarAlertIcon, CalendarBell as CalendarBellIcon, CalendarZap as CalendarZapIcon, CalendarSparkles as CalendarSparklesIcon, CalendarGift as CalendarGiftIcon, CalendarAward as CalendarAwardIcon, CalendarTrophy as CalendarTrophyIcon, CalendarMedal as CalendarMedalIcon, CalendarCrown as CalendarCrownIcon, CalendarGem as CalendarGemIcon, CalendarDiamond as CalendarDiamondIcon, CalendarPearl as CalendarPearlIcon, CalendarRuby as CalendarRubyIcon, CalendarSapphire as CalendarSapphireIcon, CalendarEmerald as CalendarEmeraldIcon, CalendarTopaz as CalendarTopazIcon, CalendarAmethyst as CalendarAmethystIcon, CalendarQuartz as CalendarQuartzIcon, CalendarCrystal as CalendarCrystalIcon, CalendarJewel as CalendarJewelIcon, CalendarTreasure as CalendarTreasureIcon, CalendarGold as CalendarGoldIcon, CalendarSilver as CalendarSilverIcon, CalendarBronze as CalendarBronzeIcon, CalendarPlatinum as CalendarPlatinumIcon, CalendarTitanium as CalendarTitaniumIcon, CalendarSteel as CalendarSteelIcon, CalendarIron as CalendarIronIcon, CalendarCopper as CalendarCopperIcon, CalendarAluminum as CalendarAluminumIcon, CalendarZinc as CalendarZincIcon, CalendarTin as CalendarTinIcon, CalendarLead as CalendarLeadIcon, CalendarMercury as CalendarMercuryIcon, CalendarUranium as CalendarUraniumIcon, CalendarPlutonium as CalendarPlutoniumIcon, CalendarRadium as CalendarRadiumIcon, CalendarThorium as CalendarThoriumIcon, CalendarActinium as CalendarActiniumIcon, CalendarProtactinium as CalendarProtactiniumIcon, CalendarNeptunium as CalendarNeptuniumIcon, CalendarAmericium as CalendarAmericiumIcon, CalendarCurium as CalendarCuriumIcon, CalendarBerkelium as CalendarBerkeliumIcon, CalendarCalifornium as CalendarCaliforniumIcon, CalendarEinsteinium as CalendarEinsteiniumIcon, CalendarFermium as CalendarFermiumIcon, CalendarMendelevium as CalendarMendeleviumIcon, CalendarNobelium as CalendarNobeliumIcon, CalendarLawrencium as CalendarLawrenciumIcon, CalendarRutherfordium as CalendarRutherfordiumIcon, CalendarDubnium as CalendarDubniumIcon, CalendarSeaborgium as CalendarSeaborgiumIcon, CalendarBohrium as CalendarBohriumIcon, CalendarHassium as CalendarHassiumIcon, CalendarMeitnerium as CalendarMeitneriumIcon, CalendarDarmstadtium as CalendarDarmstadtiumIcon, CalendarRoentgenium as CalendarRoentgeniumIcon, CalendarCopernicium as CalendarCoperniciumIcon, CalendarNihonium as CalendarNihoniumIcon, CalendarFlerovium as CalendarFleroviumIcon, CalendarMoscovium as CalendarMoscoviumIcon, CalendarLivermorium as CalendarLivermoriumIcon, CalendarTennessine as CalendarTennessineIcon, CalendarOganesson as CalendarOganessonIcon, Package as PackageIcon, Sparkles as SparklesIcon } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionAIFraudDetectionPro = () => {
  const features = [
    {
      title: "Real-time Detection",
      description: "Advanced AI algorithms analyze transactions in real-time to detect fraudulent activities instantly",
      icon: <Zap className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Machine Learning Models",
      description: "Self-learning models that continuously improve detection accuracy based on new fraud patterns",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Behavioral Analysis",
      description: "Analyzes user behavior patterns to identify anomalies and suspicious activities",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Risk Scoring",
      description: "Comprehensive risk scoring system that evaluates transaction likelihood of being fraudulent",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Multi-Channel Monitoring",
      description: "Monitors fraud across all channels including online, mobile, and in-person transactions",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance features for PCI DSS, GDPR, and other regulatory requirements",
      icon: <Shield className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const detectionTypes = [
    {
      title: "Payment Fraud",
      description: "Detect unauthorized credit card transactions, chargebacks, and payment fraud",
      icon: <CreditCard className="w-6 h-6" />,
      accuracy: "99.7%"
    },
    {
      title: "Identity Theft",
      description: "Identify stolen identities and synthetic identity fraud attempts",
      icon: <Users className="w-6 h-6" />,
      accuracy: "98.9%"
    },
    {
      title: "Account Takeover",
      description: "Detect unauthorized access to user accounts and credential stuffing attacks",
      icon: <Lock className="w-6 h-6" />,
      accuracy: "99.2%"
    },
    {
      title: "Money Laundering",
      description: "Identify suspicious money movement patterns and laundering activities",
      icon: <Coins className="w-6 h-6" />,
      accuracy: "97.8%"
    },
    {
      title: "Synthetic Fraud",
      description: "Detect synthetic identities and fabricated customer information",
      icon: <AlertTriangle className="w-6 h-6" />,
      accuracy: "96.5%"
    },
    {
      title: "Friendly Fraud",
      description: "Identify legitimate-looking transactions that are actually fraudulent",
      icon: <Heart className="w-6 h-6" />,
      accuracy: "95.3%"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 transactions/month",
        "Basic fraud detection",
        "Email alerts",
        "Standard support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100,000 transactions/month",
        "Advanced ML models",
        "Real-time alerts",
        "Priority support",
        "Advanced analytics",
        "Custom rules engine",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "All detection types",
        "24/7 monitoring",
        "Dedicated support",
        "Custom ML models",
        "White-label options",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "FinTech Solutions",
      role: "CISO",
      content: "Zion AI Fraud Detection Pro reduced our fraud losses by 85% in just 3 months. The real-time detection is incredibly accurate and fast.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "E-commerce Giant",
      role: "Risk Manager",
      content: "The machine learning models are constantly improving. We've seen a 90% reduction in false positives while catching more fraud than ever.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "Robert Johnson",
      company: "Banking Corp",
      role: "Head of Security",
      content: "Implementation was seamless and the results exceeded our expectations. Our fraud detection accuracy improved dramatically.",
      rating: 5,
      avatar: "RJ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Fraud Detection Pro - Advanced Fraud Prevention | Zion Tech Group"
        description="Cutting-edge AI fraud detection with real-time monitoring, machine learning models, and 99.7% accuracy. Protect your business from financial fraud and cyber threats."
        keywords="AI fraud detection, fraud prevention, machine learning fraud, real-time fraud monitoring, payment fraud, identity theft protection, risk management"
        canonical="/zion-ai-fraud-detection-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">#1 Fraud Detection 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">
              Zion AI Fraud Detection Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced AI-powered fraud detection with real-time monitoring, machine learning models, 
            and 99.7% accuracy. Protect your business from financial fraud, identity theft, 
            and cyber threats with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.7%</div>
              <div className="text-gray-300 text-xs md:text-sm">Detection Accuracy</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">50ms</div>
              <div className="text-gray-300 text-xs md:text-sm">Response Time</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-gray-300 text-xs md:text-sm">Fraud Reduction</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-xs md:text-sm">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Fraud Detection Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge AI and machine learning algorithms that continuously learn and adapt 
              to detect the most sophisticated fraud attempts in real-time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Fraud Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business from all types of fraud with our advanced detection capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detectionTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {type.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                      {type.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-400">{type.accuracy}</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Protection Level
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to protect your business at any scale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-red-500/50 shadow-red-500/25'
                    : 'border-white/20 hover:border-white/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-400 hover:to-pink-400'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what security professionals say about Zion AI Fraud Detection Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Protect Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't wait for fraud to happen. Join thousands of businesses already using 
            Zion AI Fraud Detection Pro to protect their revenue and reputation.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-red-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-red-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-red-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Calendar className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIFraudDetectionPro;