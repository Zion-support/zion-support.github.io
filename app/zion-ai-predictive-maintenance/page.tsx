import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Wrench, Brain, Zap, AlertTriangle, BarChart3, Clock, Users, Globe, Smartphone, Monitor, Target, Calendar, Mail, Phone, MapPin, Award, TrendingUp, Cloud, Settings, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Sparkles, MessageSquare, FileText, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Cpu, Wifi, Battery, Camera, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone as PhoneIcon, Voicemail, Headset, Speaker, Volume2, VolumeX, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Shuffle as ShuffleIcon, Repeat as RepeatIcon, Repeat1 as Repeat1Icon, Shuffle2 as Shuffle2Icon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, Square as SquareIcon, Circle as CircleIcon, Triangle as TriangleIcon, Hexagon as HexagonIcon, Octagon as OctagonIcon, Diamond as DiamondIcon, Star as StarIconAlias, Moon as MoonIcon, Sun as SunIcon, Sunrise as SunriseIcon, Sunset as SunsetIcon, CloudRain as CloudRainIcon, CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon, Wind as WindIcon, Droplets as DropletsIcon, Thermometer as ThermometerIcon, Gauge as GaugeIcon, Timer as TimerIcon, Stopwatch as StopwatchIcon, Hourglass as HourglassIcon, Clock3 as Clock3Icon, Clock4 as Clock4Icon, Clock5 as Clock5Icon, Clock6 as Clock6Icon, Clock7 as Clock7Icon, Clock8 as Clock8Icon, Clock9 as Clock9Icon, Clock10 as Clock10Icon, Clock11 as Clock11Icon, Clock12 as Clock12Icon, Calendar as CalendarIconAlias, CalendarDays as CalendarDaysIcon, CalendarCheck as CalendarCheckIcon, CalendarX as CalendarXIcon, CalendarPlus as CalendarPlusIcon, CalendarMinus as CalendarMinusIcon, CalendarRange as CalendarRangeIcon, CalendarSearch as CalendarSearchIcon, CalendarHeart as CalendarHeartIcon, CalendarStar as CalendarStarIcon, CalendarClock as CalendarClockIcon, CalendarUser as CalendarUserIcon, CalendarEdit as CalendarEditIcon, CalendarTrash as CalendarTrashIcon, CalendarSettings as CalendarSettingsIcon, CalendarImport as CalendarImportIcon, CalendarExport as CalendarExportIcon, CalendarShare as CalendarShareIcon, CalendarLock as CalendarLockIcon, CalendarUnlock as CalendarUnlockIcon, CalendarKey as CalendarKeyIcon, CalendarShield as CalendarShieldIcon, CalendarAlert as CalendarAlertIcon, CalendarBell as CalendarBellIcon, CalendarZap as CalendarZapIcon, CalendarSparkles as CalendarSparklesIcon, CalendarGift as CalendarGiftIcon, CalendarAward as CalendarAwardIcon, CalendarTrophy as CalendarTrophyIcon, CalendarMedal as CalendarMedalIcon, CalendarCrown as CalendarCrownIcon, CalendarGem as CalendarGemIcon, CalendarDiamond as CalendarDiamondIcon, CalendarPearl as CalendarPearlIcon, CalendarRuby as CalendarRubyIcon, CalendarSapphire as CalendarSapphireIcon, CalendarEmerald as CalendarEmeraldIcon, CalendarTopaz as CalendarTopazIcon, CalendarAmethyst as CalendarAmethystIcon, CalendarQuartz as CalendarQuartzIcon, CalendarCrystal as CalendarCrystalIcon, CalendarJewel as CalendarJewelIcon, CalendarTreasure as CalendarTreasureIcon, CalendarGold as CalendarGoldIcon, CalendarSilver as CalendarSilverIcon, CalendarBronze as CalendarBronzeIcon, CalendarPlatinum as CalendarPlatinumIcon, CalendarTitanium as CalendarTitaniumIcon, CalendarSteel as CalendarSteelIcon, CalendarIron as CalendarIronIcon, CalendarCopper as CalendarCopperIcon, CalendarAluminum as CalendarAluminumIcon, CalendarZinc as CalendarZincIcon, CalendarTin as CalendarTinIcon, CalendarLead as CalendarLeadIcon, CalendarMercury as CalendarMercuryIcon, CalendarUranium as CalendarUraniumIcon, CalendarPlutonium as CalendarPlutoniumIcon, CalendarRadium as CalendarRadiumIcon, CalendarThorium as CalendarThoriumIcon, CalendarActinium as CalendarActiniumIcon, CalendarProtactinium as CalendarProtactiniumIcon, CalendarNeptunium as CalendarNeptuniumIcon, CalendarAmericium as CalendarAmericiumIcon, CalendarCurium as CalendarCuriumIcon, CalendarBerkelium as CalendarBerkeliumIcon, CalendarCalifornium as CalendarCaliforniumIcon, CalendarEinsteinium as CalendarEinsteiniumIcon, CalendarFermium as CalendarFermiumIcon, CalendarMendelevium as CalendarMendeleviumIcon, CalendarNobelium as CalendarNobeliumIcon, CalendarLawrencium as CalendarLawrenciumIcon, CalendarRutherfordium as CalendarRutherfordiumIcon, CalendarDubnium as CalendarDubniumIcon, CalendarSeaborgium as CalendarSeaborgiumIcon, CalendarBohrium as CalendarBohriumIcon, CalendarHassium as CalendarHassiumIcon, CalendarMeitnerium as CalendarMeitneriumIcon, CalendarDarmstadtium as CalendarDarmstadtiumIcon, CalendarRoentgenium as CalendarRoentgeniumIcon, CalendarCopernicium as CalendarCoperniciumIcon, CalendarNihonium as CalendarNihoniumIcon, CalendarFlerovium as CalendarFleroviumIcon, CalendarMoscovium as CalendarMoscoviumIcon, CalendarLivermorium as CalendarLivermoriumIcon, CalendarTennessine as CalendarTennessineIcon, CalendarOganesson as CalendarOganessonIcon, Package as PackageIcon, Sparkles as SparklesIcon } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionAIPredictiveMaintenance = () => {
  const features = [
    {
      title: "AI-Powered Predictions",
      description: "Advanced machine learning algorithms predict equipment failures with 95% accuracy up to 30 days in advance",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of equipment health with instant alerts and automated maintenance scheduling",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "IoT Integration",
      description: "Seamless integration with existing IoT sensors and industrial equipment for comprehensive data collection",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cost Optimization",
      description: "Reduce maintenance costs by 40% and extend equipment lifespan through optimized maintenance schedules",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Predictive Analytics",
      description: "Comprehensive analytics dashboard with trend analysis, failure patterns, and maintenance recommendations",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Mobile Access",
      description: "Mobile app for technicians with work orders, maintenance history, and real-time equipment status",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const industries = [
    {
      title: "Manufacturing",
      description: "Predictive maintenance for production lines, machinery, and industrial equipment",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["Reduce unplanned downtime by 60%", "Increase production efficiency", "Lower maintenance costs"]
    },
    {
      title: "Energy & Utilities",
      description: "Monitor power plants, turbines, and electrical infrastructure for optimal performance",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Prevent power outages", "Optimize energy production", "Ensure grid stability"]
    },
    {
      title: "Transportation",
      description: "Fleet maintenance for vehicles, aircraft, and railway systems",
      icon: <Car className="w-6 h-6" />,
      benefits: ["Improve safety", "Reduce breakdowns", "Extend vehicle lifespan"]
    },
    {
      title: "Healthcare",
      description: "Medical equipment maintenance for hospitals and healthcare facilities",
      icon: <Heart className="w-6 h-6" />,
      benefits: ["Ensure patient safety", "Reduce equipment failures", "Comply with regulations"]
    },
    {
      title: "Data Centers",
      description: "Server and infrastructure monitoring for optimal uptime and performance",
      icon: <Server className="w-6 h-6" />,
      benefits: ["Prevent data loss", "Maintain uptime", "Optimize cooling systems"]
    },
    {
      title: "Oil & Gas",
      description: "Pipeline and refinery equipment monitoring for safety and efficiency",
      icon: <Droplets className="w-6 h-6" />,
      benefits: ["Prevent leaks", "Ensure safety", "Optimize production"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small facilities",
      features: [
        "Up to 50 equipment units",
        "Basic predictive analytics",
        "Email alerts",
        "Standard support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing operations",
      features: [
        "Up to 500 equipment units",
        "Advanced AI predictions",
        "Real-time monitoring",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited equipment units",
        "All AI features included",
        "Custom model training",
        "24/7 dedicated support",
        "White-label options",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "James Wilson",
      company: "Manufacturing Corp",
      role: "Maintenance Director",
      content: "Zion AI Predictive Maintenance reduced our unplanned downtime by 65% and saved us over $2M in the first year alone.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Maria Garcia",
      company: "Energy Solutions",
      role: "Operations Manager",
      content: "The predictive accuracy is incredible. We've prevented 3 major equipment failures that would have cost millions in repairs.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "David Chen",
      company: "Transportation Inc",
      role: "Fleet Manager",
      content: "Our fleet reliability improved dramatically. The mobile app makes it easy for technicians to stay on top of maintenance.",
      rating: 5,
      avatar: "DC"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Predictive Maintenance - Smart Equipment Monitoring | Zion Tech Group"
        description="AI-powered predictive maintenance solution with 95% accuracy. Prevent equipment failures, reduce downtime, and optimize maintenance costs with advanced IoT and machine learning."
        keywords="predictive maintenance, AI maintenance, equipment monitoring, IoT maintenance, machine learning, preventive maintenance, industrial AI"
        canonical="/zion-ai-predictive-maintenance"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Wrench className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">#1 Predictive Maintenance 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Zion AI Predictive Maintenance
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            AI-powered predictive maintenance solution with 95% accuracy. Prevent equipment failures, 
            reduce downtime by 60%, and optimize maintenance costs with advanced IoT and machine learning technology.
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
                <Brain className="w-6 h-6 text-blue-400" />
import React from "react";
import { Helmet } from "react-helmet-async"; const ZionAiPredictiveMaintenancePage: React.FC = () => { return ( <> <Helmet> <title>Zion Ai Predictive Maintenance</title> <meta name="description" content="Professional zion ai predictive maintenance solutions and services" /> <meta name="keywords" content="zion, ai, predictive, maintenance" /> </Helmet> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              Zion Ai Predictive Maintenance
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional zion ai predictive maintenance solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300 text-xs md:text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">60%</div>
              <div className="text-gray-300 text-xs md:text-sm">Downtime Reduction</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-gray-300 text-xs md:text-sm">Cost Savings</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">30</div>
              <div className="text-gray-300 text-xs md:text-sm">Days Advance Warning</div>
            </div>
          </div>
        </div>
