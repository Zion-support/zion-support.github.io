import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Camera, Eye, Brain, Zap, Image, Target, BarChart3, Clock, Users, Globe, Smartphone, Monitor, Calendar, Mail, Phone, MapPin, Award, TrendingUp, Cloud, Settings, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Sparkles, MessageSquare, FileText, Search, Filter, Download, Upload, Share, Bell, Heart, ThumbsUp, Rocket, Cpu, Wifi, Battery, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone as PhoneIcon, Voicemail, Headset, Speaker, Volume2, VolumeX, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Shuffle as ShuffleIcon, Repeat as RepeatIcon, Repeat1 as Repeat1Icon, Shuffle2 as Shuffle2Icon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, Square as SquareIcon, Circle as CircleIcon, Triangle as TriangleIcon, Hexagon as HexagonIcon, Octagon as OctagonIcon, Diamond as DiamondIcon, Star as StarIconAlias, Moon as MoonIcon, Sun as SunIcon, Sunrise as SunriseIcon, Sunset as SunsetIcon, CloudRain as CloudRainIcon, CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon, Wind as WindIcon, Droplets as DropletsIcon, Thermometer as ThermometerIcon, Gauge as GaugeIcon, Timer as TimerIcon, Stopwatch as StopwatchIcon, Hourglass as HourglassIcon, Clock3 as Clock3Icon, Clock4 as Clock4Icon, Clock5 as Clock5Icon, Clock6 as Clock6Icon, Clock7 as Clock7Icon, Clock8 as Clock8Icon, Clock9 as Clock9Icon, Clock10 as Clock10Icon, Clock11 as Clock11Icon, Clock12 as Clock12Icon, Calendar as CalendarIconAlias, CalendarDays as CalendarDaysIcon, CalendarCheck as CalendarCheckIcon, CalendarX as CalendarXIcon, CalendarPlus as CalendarPlusIcon, CalendarMinus as CalendarMinusIcon, CalendarRange as CalendarRangeIcon, CalendarSearch as CalendarSearchIcon, CalendarHeart as CalendarHeartIcon, CalendarStar as CalendarStarIcon, CalendarClock as CalendarClockIcon, CalendarUser as CalendarUserIcon, CalendarEdit as CalendarEditIcon, CalendarTrash as CalendarTrashIcon, CalendarSettings as CalendarSettingsIcon, CalendarImport as CalendarImportIcon, CalendarExport as CalendarExportIcon, CalendarShare as CalendarShareIcon, CalendarLock as CalendarLockIcon, CalendarUnlock as CalendarUnlockIcon, CalendarKey as CalendarKeyIcon, CalendarShield as CalendarShieldIcon, CalendarAlert as CalendarAlertIcon, CalendarBell as CalendarBellIcon, CalendarZap as CalendarZapIcon, CalendarSparkles as CalendarSparklesIcon, CalendarGift as CalendarGiftIcon, CalendarAward as CalendarAwardIcon, CalendarTrophy as CalendarTrophyIcon, CalendarMedal as CalendarMedalIcon, CalendarCrown as CalendarCrownIcon, CalendarGem as CalendarGemIcon, CalendarDiamond as CalendarDiamondIcon, CalendarPearl as CalendarPearlIcon, CalendarRuby as CalendarRubyIcon, CalendarSapphire as CalendarSapphireIcon, CalendarEmerald as CalendarEmeraldIcon, CalendarTopaz as CalendarTopazIcon, CalendarAmethyst as CalendarAmethystIcon, CalendarQuartz as CalendarQuartzIcon, CalendarCrystal as CalendarCrystalIcon, CalendarJewel as CalendarJewelIcon, CalendarTreasure as CalendarTreasureIcon, CalendarGold as CalendarGoldIcon, CalendarSilver as CalendarSilverIcon, CalendarBronze as CalendarBronzeIcon, CalendarPlatinum as CalendarPlatinumIcon, CalendarTitanium as CalendarTitaniumIcon, CalendarSteel as CalendarSteelIcon, CalendarIron as CalendarIronIcon, CalendarCopper as CalendarCopperIcon, CalendarAluminum as CalendarAluminumIcon, CalendarZinc as CalendarZincIcon, CalendarTin as CalendarTinIcon, CalendarLead as CalendarLeadIcon, CalendarMercury as CalendarMercuryIcon, CalendarUranium as CalendarUraniumIcon, CalendarPlutonium as CalendarPlutoniumIcon, CalendarRadium as CalendarRadiumIcon, CalendarThorium as CalendarThoriumIcon, CalendarActinium as CalendarActiniumIcon, CalendarProtactinium as CalendarProtactiniumIcon, CalendarNeptunium as CalendarNeptuniumIcon, CalendarAmericium as CalendarAmericiumIcon, CalendarCurium as CalendarCuriumIcon, CalendarBerkelium as CalendarBerkeliumIcon, CalendarCalifornium as CalendarCaliforniumIcon, CalendarEinsteinium as CalendarEinsteiniumIcon, CalendarFermium as CalendarFermiumIcon, CalendarMendelevium as CalendarMendeleviumIcon, CalendarNobelium as CalendarNobeliumIcon, CalendarLawrencium as CalendarLawrenciumIcon, CalendarRutherfordium as CalendarRutherfordiumIcon, CalendarDubnium as CalendarDubniumIcon, CalendarSeaborgium as CalendarSeaborgiumIcon, CalendarBohrium as CalendarBohriumIcon, CalendarHassium as CalendarHassiumIcon, CalendarMeitnerium as CalendarMeitneriumIcon, CalendarDarmstadtium as CalendarDarmstadtiumIcon, CalendarRoentgenium as CalendarRoentgeniumIcon, CalendarCopernicium as CalendarCoperniciumIcon, CalendarNihonium as CalendarNihoniumIcon, CalendarFlerovium as CalendarFleroviumIcon, CalendarMoscovium as CalendarMoscoviumIcon, CalendarLivermorium as CalendarLivermoriumIcon, CalendarTennessine as CalendarTennessineIcon, CalendarOganesson as CalendarOganessonIcon, Package as PackageIcon, Sparkles as SparklesIcon } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionAIImageRecognitionPro = () => {
  const features = [
    {
      title: "Object Detection",
      description: "Identify and locate multiple objects within images with 99.2% accuracy using advanced deep learning models",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Facial Recognition",
      description: "Advanced facial recognition with emotion detection, age estimation, and identity verification",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Text Recognition (OCR)",
      description: "Extract text from images with 99.8% accuracy, supporting 100+ languages and handwritten text",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Scene Understanding",
      description: "Analyze image content to understand scenes, activities, and contextual information",
      icon: <Eye className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Quality Assessment",
      description: "Automatically assess image quality, detect blur, noise, and other quality issues",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Real-time Processing",
      description: "Process images in real-time with ultra-low latency for live applications",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Product recognition, visual search, and automated cataloging",
      icon: <ShoppingCart className="w-6 h-6" />,
      benefits: ["Increase product discovery", "Automate cataloging", "Improve search accuracy"]
    },
    {
      title: "Security & Surveillance",
      description: "Facial recognition, object detection, and suspicious activity monitoring",
      icon: <Camera className="w-6 h-6" />,
      benefits: ["Enhance security", "Automate monitoring", "Reduce false alarms"]
    },
    {
      title: "Healthcare",
      description: "Medical image analysis, diagnostic assistance, and patient identification",
      icon: <Heart className="w-6 h-6" />,
      benefits: ["Improve diagnostics", "Speed up analysis", "Reduce errors"]
    },
    {
      title: "Automotive",
      description: "Autonomous driving, traffic monitoring, and vehicle recognition",
      icon: <Car className="w-6 h-6" />,
      benefits: ["Enable autonomous driving", "Improve safety", "Optimize traffic flow"]
    },
    {
      title: "Retail",
      description: "Inventory management, customer analytics, and loss prevention",
      icon: <Store className="w-6 h-6" />,
      benefits: ["Optimize inventory", "Analyze customer behavior", "Prevent theft"]
    },
    {
      title: "Manufacturing",
      description: "Quality control, defect detection, and automated inspection",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["Improve quality", "Reduce defects", "Automate inspection"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small projects",
      features: [
        "Up to 10,000 images/month",
        "Basic object detection",
        "Standard OCR",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100,000 images/month",
        "All recognition types",
        "Advanced analytics",
        "Priority support",
        "Custom models",
        "API access",
        "Real-time processing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited images",
        "All features included",
        "Custom model training",
        "24/7 support",
        "White-label options",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "RetailTech Solutions",
      role: "CTO",
      content: "Zion AI Image Recognition Pro revolutionized our visual search. Customer engagement increased by 60% and our cataloging process is now fully automated.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Dr. Michael Brown",
      company: "MedTech Innovations",
      role: "Chief Medical Officer",
      content: "The medical image analysis capabilities are outstanding. We've reduced diagnostic time by 40% while improving accuracy significantly.",
      rating: 5,
      avatar: "MB"
    },
    {
      name: "Sarah Wilson",
      company: "SecurityFirst Corp",
      role: "Security Director",
      content: "Implementation was seamless and the facial recognition accuracy is incredible. Our security operations are now much more efficient.",
      rating: 5,
      avatar: "SW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Image Recognition Pro - Advanced Computer Vision | Zion Tech Group"
        description="Cutting-edge AI image recognition with object detection, facial recognition, OCR, and scene understanding. 99.2% accuracy for business applications."
        keywords="AI image recognition, computer vision, object detection, facial recognition, OCR, image analysis, visual AI, deep learning"
        canonical="/zion-ai-image-recognition-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Camera className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">#1 Image Recognition 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Zion AI Image Recognition Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced AI image recognition with object detection, facial recognition, OCR, 
            and scene understanding. 99.2% accuracy for business applications across 
            industries with real-time processing capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.2%</div>
              <div className="text-gray-300 text-xs md:text-sm">Object Detection</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.8%</div>
              <div className="text-gray-300 text-xs md:text-sm">OCR Accuracy</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">50ms</div>
              <div className="text-gray-300 text-xs md:text-sm">Processing Time</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300 text-xs md:text-sm">Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Computer Vision Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              State-of-the-art deep learning models that can understand, analyze, and extract 
              meaningful information from images with unprecedented accuracy and speed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Zion AI Image Recognition Pro can revolutionize different industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your image recognition needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-blue-500/50 shadow-blue-500/25'
                    : 'border-white/20 hover:border-white/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400'
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about Zion AI Image Recognition Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
            Start Your Visual AI Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using Zion AI Image Recognition Pro to 
            unlock the power of visual intelligence. Start your free trial today.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-blue-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-blue-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
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

export default ZionAIImageRecognitionPro;