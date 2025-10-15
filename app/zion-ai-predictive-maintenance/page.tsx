import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Wrench, Brain, Zap, AlertTriangle, BarChart3, Clock, Users, Globe, Smartphone, Monitor, Target, Calendar, Mail, Phone, MapPin, Award, TrendingUp, Cloud, Settings, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Sparkles, MessageSquare, FileText, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Cpu, Wifi, Battery, Camera, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone as PhoneIcon, Voicemail, Headset, Speaker, Volume2, VolumeX, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Shuffle as ShuffleIcon, Repeat as RepeatIcon, Repeat1 as Repeat1Icon, Shuffle2 as Shuffle2Icon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, Square as SquareIcon, Circle as CircleIcon, Triangle as TriangleIcon, Hexagon as HexagonIcon, Octagon as OctagonIcon, Diamond as DiamondIcon, Star as StarIconAlias, Moon as MoonIcon, Sun as SunIcon, Sunrise as SunriseIcon, Sunset as SunsetIcon, CloudRain as CloudRainIcon, CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon, Wind as WindIcon, Droplets as DropletsIcon, Thermometer as ThermometerIcon, Gauge as GaugeIcon, Timer as TimerIcon, Stopwatch as StopwatchIcon, Hourglass as HourglassIcon, Clock3 as Clock3Icon, Clock4 as Clock4Icon, Clock5 as Clock5Icon, Clock6 as Clock6Icon, Clock7 as Clock7Icon, Clock8 as Clock8Icon, Clock9 as Clock9Icon, Clock10 as Clock10Icon, Clock11 as Clock11Icon, Clock12 as Clock12Icon, Calendar as CalendarIconAlias, CalendarDays as CalendarDaysIcon, CalendarCheck as CalendarCheckIcon, CalendarX as CalendarXIcon, CalendarPlus as CalendarPlusIcon, CalendarMinus as CalendarMinusIcon, CalendarRange as CalendarRangeIcon, CalendarSearch as CalendarSearchIcon, CalendarHeart as CalendarHeartIcon, CalendarStar as CalendarStarIcon, CalendarClock as CalendarClockIcon, CalendarUser as CalendarUserIcon, CalendarEdit as CalendarEditIcon, CalendarTrash as CalendarTrashIcon, CalendarSettings as CalendarSettingsIcon, CalendarImport as CalendarImportIcon, CalendarExport as CalendarExportIcon, CalendarShare as CalendarShareIcon, CalendarLock as CalendarLockIcon, CalendarUnlock as CalendarUnlockIcon, CalendarKey as CalendarKeyIcon, CalendarShield as CalendarShieldIcon, CalendarAlert as CalendarAlertIcon, CalendarBell as CalendarBellIcon, CalendarZap as CalendarZapIcon, CalendarSparkles as CalendarSparklesIcon, CalendarGift as CalendarGiftIcon, CalendarAward as CalendarAwardIcon, CalendarTrophy as CalendarTrophyIcon, CalendarMedal as CalendarMedalIcon, CalendarCrown as CalendarCrownIcon, CalendarGem as CalendarGemIcon, CalendarDiamond as CalendarDiamondIcon, CalendarPearl as CalendarPearlIcon, CalendarRuby as CalendarRubyIcon, CalendarSapphire as CalendarSapphireIcon, CalendarEmerald as CalendarEmeraldIcon, CalendarTopaz as CalendarTopazIcon, CalendarAmethyst as CalendarAmethystIcon, CalendarQuartz as CalendarQuartzIcon, CalendarCrystal as CalendarCrystalIcon, CalendarJewel as CalendarJewelIcon, CalendarTreasure as CalendarTreasureIcon, CalendarGold as CalendarGoldIcon, CalendarSilver as CalendarSilverIcon, CalendarBronze as CalendarBronzeIcon, CalendarPlatinum as CalendarPlatinumIcon, CalendarTitanium as CalendarTitaniumIcon, CalendarSteel as CalendarSteelIcon, CalendarIron as CalendarIronIcon, CalendarCopper as CalendarCopperIcon, CalendarAluminum as CalendarAluminumIcon, CalendarZinc as CalendarZincIcon, CalendarTin as CalendarTinIcon, CalendarLead as CalendarLeadIcon, CalendarMercury as CalendarMercuryIcon, CalendarUranium as CalendarUraniumIcon, CalendarPlutonium as CalendarPlutoniumIcon, CalendarRadium as CalendarRadiumIcon, CalendarThorium as CalendarThoriumIcon, CalendarActinium as CalendarActiniumIcon, CalendarProtactinium as CalendarProtactiniumIcon, CalendarNeptunium as CalendarNeptuniumIcon, CalendarAmericium as CalendarAmericiumIcon, CalendarCurium as CalendarCuriumIcon, CalendarBerkelium as CalendarBerkeliumIcon, CalendarCalifornium as CalendarCaliforniumIcon, CalendarEinsteinium as CalendarEinsteiniumIcon, CalendarFermium as CalendarFermiumIcon, CalendarMendelevium as CalendarMendeleviumIcon, CalendarNobelium as CalendarNobeliumIcon, CalendarLawrencium as CalendarLawrenciumIcon, CalendarRutherfordium as CalendarRutherfordiumIcon, CalendarDubnium as CalendarDubniumIcon, CalendarSeaborgium as CalendarSeaborgiumIcon, CalendarBohrium as CalendarBohriumIcon, CalendarHassium as CalendarHassiumIcon, CalendarMeitnerium as CalendarMeitneriumIcon, CalendarDarmstadtium as CalendarDarmstadtiumIcon, CalendarRoentgenium as CalendarRoentgeniumIcon, CalendarCopernicium as CalendarCoperniciumIcon, CalendarNihonium as CalendarNihoniumIcon, CalendarFlerovium as CalendarFleroviumIcon, CalendarMoscovium as CalendarMoscoviumIcon, CalendarLivermorium as CalendarLivermoriumIcon, CalendarTennessine as CalendarTennessineIcon, CalendarOganesson as CalendarOganessonIcon, Package as PackageIcon, Sparkles as SparklesIcon } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionAIPredictiveMaintenance = () => {
  const features = [
    {
      title: "AI-Powered Predictions",
      description: "Advanced machine learning algorithms predict equipment failures before they occur.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["99.5% accuracy", "Real-time monitoring", "Predictive analytics"]
    },
    {
      title: "Smart Maintenance Scheduling",
      description: "Optimize maintenance schedules based on actual equipment condition and usage patterns.",
      icon: <Calendar className="w-8 h-8" />,
      benefits: ["Reduced downtime", "Cost optimization", "Resource planning"]
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of equipment health with instant alerts and notifications.",
      icon: <Monitor className="w-8 h-8" />,
      benefits: ["24/7 monitoring", "Instant alerts", "Performance tracking"]
    },
    {
      title: "Predictive Analytics",
      description: "Comprehensive analytics and reporting to optimize maintenance strategies.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Data insights", "Trend analysis", "Performance metrics"]
    }
  ];

  const benefits = [
    "Reduce maintenance costs by up to 40%",
    "Increase equipment uptime by 25%",
    "Prevent unexpected failures",
    "Optimize resource allocation",
    "Improve safety and compliance",
    "Extend equipment lifespan"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$99/month",
      features: ["Up to 10 devices", "Basic monitoring", "Email alerts", "Standard support"]
    },
    {
      name: "Professional",
      price: "$299/month",
      features: ["Up to 50 devices", "Advanced analytics", "SMS alerts", "Priority support"]
    },
    {
      name: "Enterprise",
      price: "$599/month",
      features: ["Unlimited devices", "Custom analytics", "API access", "24/7 support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Predictive Maintenance - Zion Tech Group"
        description="Revolutionary AI-powered predictive maintenance solution that prevents equipment failures and optimizes maintenance schedules."
        keywords="AI predictive maintenance, equipment monitoring, maintenance optimization, IoT sensors, machine learning"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
              <Brain className="w-4 h-4 mr-2" />
              AI Predictive Maintenance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion AI <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Predictive Maintenance</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Prevent equipment failures before they happen with our advanced AI-powered predictive maintenance solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/60 transition-all duration-300 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to implement effective predictive maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Solution?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your maintenance operations with proven benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  plan.name === 'Professional' ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.name === 'Professional' && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-semibold text-yellow-400">Most Popular</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                
                <div className="text-3xl font-bold text-white mb-6">
                  {plan.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Maintenance?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Start your free trial today and see the difference AI can make in your maintenance operations.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default ZionAIPredictiveMaintenance;