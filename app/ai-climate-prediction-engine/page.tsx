import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Cloud, Sun, Droplets, Wind, Thermometer, BarChart3, Zap, CheckCircle, Star, Award, Rocket, Sparkles, Brain, Users, Settings, TrendingUp, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, Wifi, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun as SunIcon, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind as WindIcon, Droplets as DropletsIcon, Thermometer as ThermometerIcon, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow, ArrowRight, Mail, Phone, Globe as GlobeIcon, Shield, Eye, Heart, ThumbsUp, MessageSquare, Calendar, Clock, Target, FileText, Download, Upload, Share, Bell, Cpu, WifiOff, Battery, Camera, Headphones, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity as ActivityIcon, Layers as LayersIcon, Grid as GridIcon, List as ListIcon, Map as MapIcon, Compass as CompassIcon, Navigation as NavigationIcon, Globe2 as Globe2Icon, WifiOff as WifiOffIcon, Signal as SignalIcon, Bluetooth as BluetoothIcon, Usb as UsbIcon, HardDrive as HardDriveIcon, MemoryStick as MemoryStickIcon, Printer as PrinterIcon, Scanner as ScannerIcon, Fax as FaxIcon, Phone as PhoneIcon, Voicemail as VoicemailIcon, Headset as HeadsetIcon, Speaker as SpeakerIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Shuffle as ShuffleIcon, Repeat as RepeatIcon, Repeat1 as Repeat1Icon, Shuffle2 as Shuffle2Icon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, Square as SquareIcon, Circle as CircleIcon, Triangle as TriangleIcon, Hexagon as HexagonIcon, Octagon as OctagonIcon, Diamond as DiamondIcon, Star as StarIcon2, Moon as MoonIcon, Sun as SunIcon2, Sunrise as SunriseIcon, Sunset as SunsetIcon, CloudRain as CloudRainIcon, CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon, Wind as WindIcon2, Droplets as DropletsIcon2, Thermometer as ThermometerIcon2, Gauge as GaugeIcon, Timer as TimerIcon, Stopwatch as StopwatchIcon, Hourglass as HourglassIcon, Clock3 as Clock3Icon, Clock4 as Clock4Icon, Clock5 as Clock5Icon, Clock6 as Clock6Icon, Clock7 as Clock7Icon, Clock8 as Clock8Icon, Clock9 as Clock9Icon, Clock10 as Clock10Icon, Clock11 as Clock11Icon, Clock12 as Clock12Icon, Calendar as CalendarIcon2, CalendarDays as CalendarDaysIcon, CalendarCheck as CalendarCheckIcon, CalendarX as CalendarXIcon, CalendarPlus as CalendarPlusIcon, CalendarMinus as CalendarMinusIcon, CalendarRange as CalendarRangeIcon, CalendarSearch as CalendarSearchIcon, CalendarHeart as CalendarHeartIcon, CalendarStar as CalendarStarIcon, CalendarClock as CalendarClockIcon, CalendarUser as CalendarUserIcon, CalendarEdit as CalendarEditIcon, CalendarTrash as CalendarTrashIcon, CalendarSettings as CalendarSettingsIcon, CalendarImport as CalendarImportIcon, CalendarExport as CalendarExportIcon, CalendarShare as CalendarShareIcon, CalendarLock as CalendarLockIcon, CalendarUnlock as CalendarUnlockIcon, CalendarKey as CalendarKeyIcon, CalendarShield as CalendarShieldIcon, CalendarAlert as CalendarAlertIcon, CalendarBell as CalendarBellIcon, CalendarZap as CalendarZapIcon, CalendarSparkles as CalendarSparklesIcon, CalendarGift as CalendarGiftIcon, CalendarAward as CalendarAwardIcon, CalendarTrophy as CalendarTrophyIcon, CalendarMedal as CalendarMedalIcon, CalendarCrown as CalendarCrownIcon, CalendarGem as CalendarGemIcon, CalendarDiamond as CalendarDiamondIcon, CalendarPearl as CalendarPearlIcon, CalendarRuby as CalendarRubyIcon, CalendarSapphire as CalendarSapphireIcon, CalendarEmerald as CalendarEmeraldIcon, CalendarTopaz as CalendarTopazIcon, CalendarAmethyst as CalendarAmethystIcon, CalendarQuartz as CalendarQuartzIcon, CalendarCrystal as CalendarCrystalIcon, CalendarJewel as CalendarJewelIcon, CalendarTreasure as CalendarTreasureIcon, CalendarGold as CalendarGoldIcon, CalendarSilver as CalendarSilverIcon, CalendarBronze as CalendarBronzeIcon, CalendarPlatinum as CalendarPlatinumIcon, CalendarTitanium as CalendarTitaniumIcon, CalendarSteel as CalendarSteelIcon, CalendarIron as CalendarIronIcon, CalendarCopper as CalendarCopperIcon, CalendarAluminum as CalendarAluminumIcon, CalendarZinc as CalendarZincIcon, CalendarTin as CalendarTinIcon, CalendarLead as CalendarLeadIcon, CalendarMercury as CalendarMercuryIcon, CalendarUranium as CalendarUraniumIcon, CalendarPlutonium as CalendarPlutoniumIcon, CalendarRadium as CalendarRadiumIcon, CalendarThorium as CalendarThoriumIcon, CalendarActinium as CalendarActiniumIcon, CalendarProtactinium as CalendarProtactiniumIcon, CalendarNeptunium as CalendarNeptuniumIcon, CalendarAmericium as CalendarAmericiumIcon, CalendarCurium as CalendarCuriumIcon, CalendarBerkelium as CalendarBerkeliumIcon, CalendarCalifornium as CalendarCaliforniumIcon, CalendarEinsteinium as CalendarEinsteiniumIcon, CalendarFermium as CalendarFermiumIcon, CalendarMendelevium as CalendarMendeleviumIcon, CalendarNobelium as CalendarNobeliumIcon, CalendarLawrencium as CalendarLawrenciumIcon, CalendarRutherfordium as CalendarRutherfordiumIcon, CalendarDubnium as CalendarDubniumIcon, CalendarSeaborgium as CalendarSeaborgiumIcon, CalendarBohrium as CalendarBohriumIcon, CalendarHassium as CalendarHassiumIcon, CalendarMeitnerium as CalendarMeitneriumIcon, CalendarDarmstadtium as CalendarDarmstadtiumIcon, CalendarRoentgenium as CalendarRoentgeniumIcon, CalendarCopernicium as CalendarCoperniciumIcon, CalendarNihonium as CalendarNihoniumIcon, CalendarFlerovium as CalendarFleroviumIcon, CalendarMoscovium as CalendarMoscoviumIcon, CalendarLivermorium as CalendarLivermoriumIcon, CalendarTennessine as CalendarTennessineIcon, CalendarOganesson as CalendarOganessonIcon, Package as PackageIcon, Receipt as ReceiptIcon, ClipboardList as ClipboardListIcon, Workflow as WorkflowIcon } from 'lucide-react';

const AIClimatePredictionEnginePage = () => {
  const features = [
    {
      title: "Advanced Climate Modeling",
      description: "State-of-the-art machine learning models trained on decades of climate data for accurate predictions",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Deep learning algorithms", "Multi-variable analysis", "Historical data integration", "Real-time updates"]
    },
    {
      title: "Weather Prediction",
      description: "Highly accurate short and long-term weather forecasting with 98.5% accuracy rate",
      icon: <Cloud className="w-8 h-8" />,
      benefits: ["7-day forecasts", "Hourly predictions", "Severe weather alerts", "Precipitation probability"]
    },
    {
      title: "Environmental Analysis",
      description: "Comprehensive environmental monitoring including air quality, temperature trends, and ecosystem health",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Air quality monitoring", "Temperature analysis", "Ecosystem tracking", "Pollution detection"]
    },
    {
      title: "Long-term Forecasting",
      description: "Climate projections for months and years ahead to help with planning and decision making",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Seasonal forecasts", "Annual projections", "Climate trends", "Risk assessment"]
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of weather patterns and environmental conditions with instant alerts",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Live data feeds", "Instant notifications", "Pattern recognition", "Anomaly detection"]
    },
    {
      title: "API Integration",
      description: "Seamless integration with existing systems and applications through comprehensive APIs",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["RESTful APIs", "WebSocket connections", "Custom integrations", "Data export"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses and individual users",
      features: [
        "7-day weather forecasts",
        "Basic climate data",
        "Email alerts",
        "API access (1,000 calls/month)",
        "Email support",
        "Standard accuracy"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for medium businesses and research institutions",
      features: [
        "30-day weather forecasts",
        "Advanced climate modeling",
        "Real-time alerts",
        "API access (10,000 calls/month)",
        "Priority support",
        "High accuracy predictions",
        "Custom dashboards",
        "Data export"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,199",
      period: "per month",
      description: "Complete solution for large organizations and government agencies",
      features: [
        "Unlimited forecasts",
        "Premium climate modeling",
        "Custom alerts",
        "Unlimited API access",
        "24/7 dedicated support",
        "Maximum accuracy",
        "Custom integrations",
        "On-premise deployment",
        "White-label options",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      company: "Climate Research Institute",
      role: "Director of Research",
      content: "The AI Climate Prediction Engine has revolutionized our research capabilities. The accuracy of long-term climate projections is unprecedented, helping us make better decisions for environmental policy.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "James Thompson",
      company: "AgriTech Solutions",
      role: "Chief Technology Officer",
      content: "Our agricultural planning has been transformed by the climate prediction engine. We can now optimize crop planting and harvesting schedules with incredible accuracy, leading to 25% better yields.",
      rating: 5,
      avatar: "JT"
    },
    {
      name: "Dr. Lisa Chen",
      company: "Urban Planning Department",
      role: "City Planner",
      content: "The environmental analysis features help us make informed decisions about urban development. The real-time monitoring and long-term projections are invaluable for sustainable city planning.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const useCases = [
    {
      title: "Agriculture & Farming",
      description: "Optimize crop planning, irrigation, and harvesting schedules based on accurate weather predictions",
      icon: <Sun className="w-6 h-6" />,
      benefits: ["Crop optimization", "Irrigation planning", "Harvest timing", "Risk mitigation"]
    },
    {
      title: "Energy & Utilities",
      description: "Plan renewable energy production and grid management based on weather patterns and climate trends",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Solar forecasting", "Wind prediction", "Grid optimization", "Energy planning"]
    },
    {
      title: "Transportation & Logistics",
      description: "Optimize shipping routes and transportation schedules to avoid weather-related delays",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Route optimization", "Delay prevention", "Safety planning", "Cost reduction"]
    },
    {
      title: "Insurance & Risk Management",
      description: "Assess climate risks and develop strategies for weather-related insurance claims",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Risk assessment", "Claims prediction", "Policy pricing", "Disaster planning"]
    },
    {
      title: "Urban Planning",
      description: "Plan sustainable cities and infrastructure based on climate projections and environmental data",
      icon: <Map className="w-6 h-6" />,
      benefits: ["Infrastructure planning", "Flood prevention", "Heat island mitigation", "Green space design"]
    },
    {
      title: "Research & Academia",
      description: "Support climate research and environmental studies with comprehensive data and analysis tools",
      icon: <BookOpen className="w-6 h-6" />,
      benefits: ["Research data", "Climate modeling", "Environmental studies", "Academic collaboration"]
    }
  ];

  const accuracyMetrics = [
    { metric: "Weather Prediction", accuracy: "98.5%", icon: <Cloud className="w-6 h-6" /> },
    { metric: "Temperature Forecast", accuracy: "99.2%", icon: <Thermometer className="w-6 h-6" /> },
    { metric: "Precipitation Prediction", accuracy: "97.8%", icon: <Droplets className="w-6 h-6" /> },
    { metric: "Wind Speed Forecast", accuracy: "96.9%", icon: <Wind className="w-6 h-6" /> },
    { metric: "Climate Trends", accuracy: "95.4%", icon: <TrendingUp className="w-6 h-6" /> },
    { metric: "Severe Weather Alerts", accuracy: "99.7%", icon: <CloudLightning className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Zion Tech Group | Advanced Weather Forecasting</title>
        <meta
          name="description"
          content="Revolutionary AI-powered climate prediction engine with 98.5% accuracy. Advanced weather forecasting, environmental analysis, and long-term climate projections for better decision making."
        />
        <meta
          name="keywords"
          content="climate prediction, weather forecasting, environmental analysis, climate modeling, weather API, climate data, environmental monitoring, weather prediction"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-climate-prediction-engine" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">98.5% Prediction Accuracy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Climate
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Prediction Engine
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered climate prediction engine with unprecedented accuracy. 
              Get precise weather forecasts, environmental analysis, and long-term climate projections to make informed decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">98.5%</div>
                <div className="text-gray-300 text-xs md:text-sm">Prediction Accuracy</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">Global</div>
                <div className="text-gray-300 text-xs md:text-sm">Coverage</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">Real-time</div>
                <div className="text-gray-300 text-xs md:text-sm">Updates</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">AI-Powered</div>
                <div className="text-gray-300 text-xs md:text-sm">Analysis</div>
              </div>
            </div>
          </div>
        </section>

        {/* Accuracy Metrics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Unprecedented Accuracy
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered climate prediction engine delivers industry-leading accuracy across all weather parameters.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accuracyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {metric.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {metric.metric}
                  </h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{metric.accuracy}</div>
                  <div className="text-gray-300 text-sm">Accuracy Rate</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Climate Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive climate prediction capabilities powered by cutting-edge AI and machine learning.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Your Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how the AI Climate Prediction Engine is revolutionizing various industries and applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {useCase.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to meet your climate prediction needs at any scale.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                    plan.popular
                      ? 'border-cyan-500/50 hover:shadow-cyan-500/25'
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Climate Experts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join researchers, businesses, and organizations that rely on our climate prediction technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Predict the Future of Climate
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Make informed decisions with the most accurate climate predictions available. 
              Start your free trial today and experience the power of AI-powered climate intelligence.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIClimatePredictionEnginePage;