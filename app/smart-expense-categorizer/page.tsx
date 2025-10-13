import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Receipt, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Clock, 
  Target, 
  MessageSquare, 
  FileText, 
  Smartphone, 
  Globe, 
  Lock, 
  Download, 
  Upload, 
  Filter, 
  Search, 
  Settings, 
  Bell, 
  Eye, 
  Heart, 
  ThumbsUp, 
  Award, 
  Rocket, 
  Cpu, 
  Wifi, 
  Battery, 
  Camera, 
  Headphones, 
  Mic, 
  Video, 
  Image, 
  Music, 
  BookOpen, 
  Lightbulb, 
  Puzzle, 
  Gamepad2, 
  ShoppingCart, 
  CreditCard, 
  Wallet, 
  Banknote, 
  Coins, 
  Gift, 
  Tag, 
  Percent, 
  Calculator, 
  PieChart, 
  LineChart, 
  Activity, 
  Layers, 
  Grid, 
  List, 
  Map, 
  Compass, 
  Navigation, 
  Globe2, 
  WifiOff, 
  Signal, 
  Bluetooth, 
  Usb, 
  HardDrive, 
  MemoryStick, 
  Printer, 
  Scanner, 
  Fax, 
  Phone, 
  Voicemail, 
  Headset, 
  Speaker, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Stop, 
  SkipBack, 
  SkipForward, 
  RotateCcw, 
  RotateCw, 
  Shuffle, 
  Repeat, 
  Repeat1, 
  Shuffle2, 
  Maximize, 
  Minimize, 
  Square, 
  Circle, 
  Triangle, 
  Hexagon, 
  Octagon, 
  Diamond, 
  Star as StarIcon, 
  Moon, 
  Sun, 
  Sunrise, 
  Sunset, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  Wind, 
  Droplets, 
  Thermometer, 
  Gauge, 
  Timer, 
  Stopwatch, 
  Hourglass, 
  Clock3, 
  Clock4, 
  Clock5, 
  Clock6, 
  Clock7, 
  Clock8, 
  Clock9, 
  Clock10, 
  Clock11, 
  Clock12, 
  Calendar as CalendarIcon, 
  CalendarDays, 
  CalendarCheck, 
  CalendarX, 
  CalendarPlus, 
  CalendarMinus, 
  CalendarRange, 
  CalendarSearch, 
  CalendarHeart, 
  CalendarStar, 
  CalendarClock, 
  CalendarUser, 
  CalendarEdit, 
  CalendarTrash, 
  CalendarSettings, 
  CalendarImport, 
  CalendarExport, 
  CalendarShare, 
  CalendarLock, 
  CalendarUnlock, 
  CalendarKey, 
  CalendarShield, 
  CalendarAlert, 
  CalendarBell, 
  CalendarZap, 
  CalendarSparkles, 
  CalendarGift, 
  CalendarAward, 
  CalendarTrophy, 
  CalendarMedal, 
  CalendarCrown, 
  CalendarGem, 
  CalendarDiamond, 
  CalendarPearl, 
  CalendarRuby, 
  CalendarSapphire, 
  CalendarEmerald, 
  CalendarTopaz, 
  CalendarAmethyst, 
  CalendarQuartz, 
  CalendarCrystal, 
  CalendarJewel, 
  CalendarTreasure, 
  CalendarGold, 
  CalendarSilver, 
  CalendarBronze, 
  CalendarPlatinum, 
  CalendarTitanium, 
  CalendarSteel, 
  CalendarIron, 
  CalendarCopper, 
  CalendarAluminum, 
  CalendarZinc, 
  CalendarTin, 
  CalendarLead, 
  CalendarMercury, 
  CalendarUranium, 
  CalendarPlutonium, 
  CalendarRadium, 
  CalendarThorium, 
  CalendarActinium, 
  CalendarProtactinium, 
  CalendarNeptunium, 
  CalendarAmericium, 
  CalendarCurium, 
  CalendarBerkelium, 
  CalendarCalifornium, 
  CalendarEinsteinium, 
  CalendarFermium, 
  CalendarMendelevium, 
  CalendarNobelium, 
  CalendarLawrencium, 
  CalendarRutherfordium, 
  CalendarDubnium, 
  CalendarSeaborgium, 
  CalendarBohrium, 
  CalendarHassium, 
  CalendarMeitnerium, 
  CalendarDarmstadtium, 
  CalendarRoentgenium, 
  CalendarCopernicium, 
  CalendarNihonium, 
  CalendarFlerovium, 
  CalendarMoscovium, 
  CalendarLivermorium, 
  CalendarTennessine, 
  CalendarOganesson, 
  Package, 
  ClipboardList, 
  Workflow,
  Sparkles,
  DollarSign,
  Monitor,
  Phone as PhoneIcon,
  MapPin,
  Shield,
  AlertTriangle,
  RefreshCw,
  TrendingDown,
  Camera,
  ScanLine
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

export default function SmartExpenseCategorizer() {
  const features = [
    {
      title: "AI Receipt Scanning",
      description: "Automatically extract data from receipts using advanced OCR and machine learning",
      icon: <Camera className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Categorization",
      description: "AI automatically categorizes expenses based on merchant, amount, and context",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Policy Compliance",
      description: "Automatically check expenses against company policies and flag violations",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Real-Time Processing",
      description: "Process and categorize expenses instantly as they're uploaded",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Multi-Currency Support",
      description: "Handle expenses in multiple currencies with automatic conversion",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile App",
      description: "Capture receipts on-the-go with our intuitive mobile application",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Individual",
      price: "$19",
      period: "/month",
      description: "Perfect for freelancers",
      features: [
        "Up to 100 receipts/month",
        "Basic categorization",
        "Mobile app access",
        "Email support",
        "Basic reporting",
        "Single user"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Business",
      price: "$59",
      period: "/month",
      description: "Ideal for small teams",
      features: [
        "Up to 1,000 receipts/month",
        "Advanced AI categorization",
        "Policy compliance checking",
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom categories"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited receipts",
        "Custom AI training",
        "Advanced policy engine",
        "White-label options",
        "Advanced security",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom integrations"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Save 10+ Hours Monthly",
      description: "Automate expense categorization and eliminate manual data entry",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Reduce Errors by 95%",
      description: "AI-powered categorization eliminates human errors and inconsistencies",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Improve Compliance",
      description: "Automatically enforce expense policies and reduce audit risks",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Faster Reimbursements",
      description: "Streamlined processing leads to quicker employee reimbursements",
      icon: <RefreshCw className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "Finance Manager",
      content: "Smart Expense Categorizer has transformed our expense management. We process expenses 5x faster and our compliance rates have improved dramatically.",
      rating: 5,
      avatar: "JA"
    },
    {
      name: "Mark Thompson",
      company: "Operations Director",
      content: "The AI categorization is incredibly accurate. We've eliminated manual categorization work and our expense reports are now generated automatically.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Wilson",
      company: "Accounting Supervisor",
      content: "This tool has revolutionized our expense processing. The mobile app makes it easy for employees to submit receipts, and the AI handles everything else.",
      rating: 5,
      avatar: "SW"
    }
  ];

  const stats = [
    { number: "95%", label: "Categorization Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "10+", label: "Hours Saved Monthly", icon: <Clock className="w-6 h-6" /> },
    { number: "5x", label: "Faster Processing", icon: <Zap className="w-6 h-6" /> },
    { number: "100%", label: "Policy Compliance", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Expense Categorizer - Zion Tech Group | AI-Powered Expense Management</title>
        <meta
          name="description"
          content="Automate expense categorization with AI-powered receipt scanning, policy compliance checking, and real-time processing. Save time and reduce errors."
        />
        <meta
          name="keywords"
          content="expense management, receipt scanning, expense categorization, AI expense tools, policy compliance, expense automation, OCR receipts"
        />
        <link rel="canonical" href="https://ziontechgroup.com/smart-expense-categorizer" />
      </Helmet>
      <SEOOptimizer
        title="Smart Expense Categorizer - Zion Tech Group | AI-Powered Expense Management"
        description="Automate expense categorization with AI-powered receipt scanning, policy compliance checking, and real-time processing. Save time and reduce errors."
      />

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
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Expense Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Smart Expense Categorizer
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Automate expense categorization with AI-powered receipt scanning, policy compliance checking, and real-time processing. 
              Save time, reduce errors, and streamline your expense management workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Intelligent Expense Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI-powered expense categorizer provides comprehensive tools to automate, categorize, and manage your business expenses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
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

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our customers see significant improvements in expense processing efficiency and accuracy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
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
                Simple Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your expense volume and team size
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                      : 'border-white/20 hover:border-white/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Finance Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about our expense categorization platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
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
              Ready to Automate Your Expenses?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using our AI-powered expense categorizer to save time, reduce errors, and improve compliance.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/micro-saas-services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Solutions
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}