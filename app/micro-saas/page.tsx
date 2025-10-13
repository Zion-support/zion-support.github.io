import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Package, Shield, BarChart3, Cloud, Users, Zap, Mail, Brain, Code, Database, Globe, Smartphone, Monitor, Target, Settings, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Receipt, ClipboardList, Workflow } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "Advanced analytics platform with AI-powered insights and real-time reporting for data-driven decision making",
      features: [
        "Real-time data visualization",
        "AI-powered insights",
        "Custom dashboards",
        "Automated reporting",
        "Multi-source data integration",
        "Predictive analytics",
        "Mobile app access",
        "White-label options"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      href: "/zion-analytics-pro",
      price: "$299/month",
      originalPrice: "$599/month",
      discount: "50% OFF",
      color: "from-blue-500 to-cyan-500",
      category: "Analytics",
      rating: 4.9,
      reviews: 1892,
      featured: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity solution with AI-powered threat detection and automated response for small to medium businesses",
      features: [
        "24/7 threat monitoring",
        "AI-powered threat detection",
        "Automated incident response",
        "Vulnerability scanning",
        "Security compliance reporting",
        "Employee training modules",
        "Real-time alerts",
        "Incident forensics"
      ],
      icon: <Shield className="w-8 h-8" />,
      href: "/zion-security-shield",
      price: "$499/month",
      originalPrice: "$999/month",
      discount: "50% OFF",
      color: "from-red-500 to-orange-500",
      category: "Security",
      rating: 4.8,
      reviews: 1654,
      featured: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and backup solution with enterprise-grade encryption and unlimited scalability",
      features: [
        "End-to-end encryption",
        "Automated backups",
        "File versioning",
        "Team collaboration",
        "Cross-platform sync",
        "Unlimited storage",
        "Advanced sharing",
        "Compliance tools"
      ],
      icon: <Cloud className="w-8 h-8" />,
      href: "/zion-cloud-vault",
      price: "$99/month",
      originalPrice: "$199/month",
      discount: "50% OFF",
      color: "from-indigo-500 to-purple-500",
      category: "Storage",
      rating: 4.7,
      reviews: 1234,
      featured: true
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered automation, lead scoring, and sales forecasting",
      features: [
        "AI lead scoring",
        "Automated follow-ups",
        "Sales forecasting",
        "Customer segmentation",
        "Integration capabilities",
        "Pipeline management",
        "Performance analytics",
        "Mobile access"
      ],
      icon: <Users className="w-8 h-8" />,
      href: "/zion-ai-crm-pro",
      price: "$199/month",
      originalPrice: "$399/month",
      discount: "50% OFF",
      color: "from-green-500 to-emerald-500",
      category: "CRM",
      rating: 4.8,
      reviews: 1456,
      featured: false
    },
    {
      id: "zion-ai-marketing-automation-pro",
      name: "Zion AI Marketing Automation Pro",
      description: "Complete marketing automation platform with AI-driven campaign optimization and multi-channel orchestration",
      features: [
        "Email marketing automation",
        "Social media scheduling",
        "Lead nurturing workflows",
        "A/B testing",
        "Performance analytics",
        "AI content generation",
        "Customer journey mapping",
        "ROI tracking"
      ],
      icon: <Target className="w-8 h-8" />,
      href: "/zion-ai-marketing-automation-pro",
      price: "$149/month",
      originalPrice: "$299/month",
      discount: "50% OFF",
      color: "from-pink-500 to-rose-500",
      category: "Marketing",
      rating: 4.6,
      reviews: 987,
      featured: false
    },
    {
      id: "zion-ai-project-manager-pro",
      name: "Zion AI Project Manager Pro",
      description: "Smart project management tool with AI-powered resource allocation, timeline optimization, and team collaboration",
      features: [
        "AI task prioritization",
        "Resource optimization",
        "Timeline forecasting",
        "Team collaboration",
        "Progress tracking",
        "Risk assessment",
        "Budget management",
        "Integration hub"
      ],
      icon: <Calendar className="w-8 h-8" />,
      href: "/zion-ai-project-manager-pro",
      price: "$99/month",
      originalPrice: "$199/month",
      discount: "50% OFF",
      color: "from-purple-500 to-violet-500",
      category: "Productivity",
      rating: 4.7,
      reviews: 1123,
      featured: false
    },
    {
      id: "zion-ai-video-generator",
      name: "Zion AI Video Generator",
      description: "AI-powered video creation platform with automated editing, voice synthesis, and multi-language support",
      features: [
        "AI video generation",
        "Automated editing",
        "Voice synthesis",
        "Multi-language support",
        "Template library",
        "Brand customization",
        "Social media optimization",
        "Analytics dashboard"
      ],
      icon: <Video className="w-8 h-8" />,
      href: "/zion-ai-video-generator",
      price: "$79/month",
      originalPrice: "$159/month",
      discount: "50% OFF",
      color: "from-cyan-500 to-blue-500",
      category: "Content Creation",
      rating: 4.5,
      reviews: 876,
      featured: false
    },
    {
      id: "zion-ai-invoice-generator",
      name: "Zion AI Invoice Generator",
      description: "Intelligent invoice creation and management with automated billing, payment tracking, and financial insights",
      features: [
        "AI invoice generation",
        "Automated billing",
        "Payment tracking",
        "Financial insights",
        "Multi-currency support",
        "Tax calculations",
        "Client portal",
        "Reporting suite"
      ],
      icon: <Receipt className="w-8 h-8" />,
      href: "/zion-ai-invoice-generator",
      price: "$49/month",
      originalPrice: "$99/month",
      discount: "50% OFF",
      color: "from-emerald-500 to-green-500",
      category: "Finance",
      rating: 4.6,
      reviews: 654,
      featured: false
    },
    {
      id: "zion-ai-customer-insights",
      name: "Zion AI Customer Insights",
      description: "Advanced customer analytics platform with sentiment analysis, behavior tracking, and predictive modeling",
      features: [
        "Sentiment analysis",
        "Behavior tracking",
        "Predictive modeling",
        "Customer segmentation",
        "Churn prediction",
        "Lifetime value analysis",
        "Real-time insights",
        "Custom reports"
      ],
      icon: <Eye className="w-8 h-8" />,
      href: "/zion-ai-customer-insights",
      price: "$129/month",
      originalPrice: "$259/month",
      discount: "50% OFF",
      color: "from-amber-500 to-yellow-500",
      category: "Analytics",
      rating: 4.8,
      reviews: 432,
      featured: false
    },
    {
      id: "zion-ai-email-analyzer",
      name: "Zion AI Email Analyzer",
      description: "Intelligent email analysis tool with spam detection, sentiment analysis, and automated categorization",
      features: [
        "Spam detection",
        "Sentiment analysis",
        "Automated categorization",
        "Priority scoring",
        "Response suggestions",
        "Email templates",
        "Performance metrics",
        "Integration tools"
      ],
      icon: <Mail className="w-8 h-8" />,
      href: "/zion-ai-email-analyzer",
      price: "$39/month",
      originalPrice: "$79/month",
      discount: "50% OFF",
      color: "from-orange-500 to-red-500",
      category: "Communication",
      rating: 4.4,
      reviews: 321,
      featured: false
    },
    {
      id: "zion-smart-inventory-optimizer",
      name: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization",
      features: [
        "Demand forecasting",
        "Automated reordering",
        "Cost optimization",
        "Stock level monitoring",
        "Supplier management",
        "Waste reduction",
        "Analytics dashboard",
        "Mobile app"
      ],
      icon: <Package className="w-8 h-8" />,
      href: "/zion-smart-inventory-optimizer",
      price: "$89/month",
      originalPrice: "$179/month",
      discount: "50% OFF",
      color: "from-teal-500 to-cyan-500",
      category: "Inventory",
      rating: 4.7,
      reviews: 543,
      featured: false
    },
    {
      id: "zion-ai-customer-sentiment-tracker",
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment monitoring across all channels with automated alerts and response recommendations",
      features: [
        "Real-time monitoring",
        "Multi-channel tracking",
        "Automated alerts",
        "Response recommendations",
        "Trend analysis",
        "Competitor comparison",
        "Custom dashboards",
        "API integration"
      ],
      icon: <Heart className="w-8 h-8" />,
      href: "/zion-ai-customer-sentiment-tracker",
      price: "$69/month",
      originalPrice: "$139/month",
      discount: "50% OFF",
      color: "from-rose-500 to-pink-500",
      category: "Customer Service",
      rating: 4.5,
      reviews: 287,
      featured: false
    },
    {
      id: "zion-smart-expense-categorizer",
      name: "Zion Smart Expense Categorizer",
      description: "AI-powered expense management with automatic categorization, receipt scanning, and budget tracking",
      features: [
        "Automatic categorization",
        "Receipt scanning",
        "Budget tracking",
        "Tax preparation",
        "Expense reports",
        "Mobile app",
        "Integration tools",
        "Analytics dashboard"
      ],
      icon: <Calculator className="w-8 h-8" />,
      href: "/zion-smart-expense-categorizer",
      price: "$29/month",
      originalPrice: "$59/month",
      discount: "50% OFF",
      color: "from-slate-500 to-gray-500",
      category: "Finance",
      rating: 4.6,
      reviews: 198,
      featured: false
    },
    {
      id: "zion-ai-voice-assistant-pro",
      name: "Zion AI Voice Assistant Pro",
      description: "Enterprise-grade voice assistant with natural language processing, task automation, and multi-language support",
      features: [
        "Natural language processing",
        "Task automation",
        "Multi-language support",
        "Voice commands",
        "Calendar integration",
        "Email management",
        "Custom skills",
        "Analytics tracking"
      ],
      icon: <Mic className="w-8 h-8" />,
      href: "/zion-ai-voice-assistant-pro",
      price: "$159/month",
      originalPrice: "$319/month",
      discount: "50% OFF",
      color: "from-violet-500 to-purple-500",
      category: "Productivity",
      rating: 4.7,
      reviews: 456,
      featured: false
    },
    {
      id: "zion-ai-code-reviewer",
      name: "Zion AI Code Reviewer",
      description: "Intelligent code review tool with automated analysis, security scanning, and performance optimization suggestions",
      features: [
        "Automated code analysis",
        "Security scanning",
        "Performance optimization",
        "Bug detection",
        "Code quality metrics",
        "Team collaboration",
        "Integration tools",
        "Custom rules"
      ],
      icon: <Code className="w-8 h-8" />,
      href: "/zion-ai-code-reviewer",
      price: "$119/month",
      originalPrice: "$239/month",
      discount: "50% OFF",
      color: "from-yellow-500 to-orange-500",
      category: "Development",
      rating: 4.8,
      reviews: 789,
      featured: false
    },
    {
      id: "zion-ai-social-media-manager",
      name: "Zion AI Social Media Manager",
      description: "AI-powered social media management with content optimization, scheduling, and performance analytics",
      features: [
        "Content optimization",
        "Smart scheduling",
        "Performance analytics",
        "Hashtag research",
        "Competitor analysis",
        "Multi-platform posting",
        "Engagement tracking",
        "ROI measurement"
      ],
      icon: <Share className="w-8 h-8" />,
      href: "/zion-ai-social-media-manager",
      price: "$79/month",
      originalPrice: "$159/month",
      discount: "50% OFF",
      color: "from-sky-500 to-blue-500",
      category: "Social Media",
      rating: 4.5,
      reviews: 567,
      featured: false
    },
    {
      id: "zion-ai-contract-analyzer",
      name: "Zion AI Contract Analyzer",
      description: "Intelligent contract analysis with risk assessment, clause extraction, and compliance monitoring",
      features: [
        "Risk assessment",
        "Clause extraction",
        "Compliance monitoring",
        "Contract comparison",
        "Renewal tracking",
        "Template generation",
        "Legal insights",
        "Team collaboration"
      ],
      icon: <FileText className="w-8 h-8" />,
      href: "/zion-ai-contract-analyzer",
      price: "$199/month",
      originalPrice: "$399/month",
      discount: "50% OFF",
      color: "from-indigo-500 to-blue-500",
      category: "Legal",
      rating: 4.9,
      reviews: 234,
      featured: false
    },
    {
      id: "zion-ai-performance-optimizer",
      name: "Zion AI Performance Optimizer",
      description: "AI-driven performance optimization for websites and applications with automated testing and recommendations",
      features: [
        "Automated testing",
        "Performance recommendations",
        "Speed optimization",
        "SEO analysis",
        "Mobile optimization",
        "Core Web Vitals",
        "Competitor analysis",
        "Custom reports"
      ],
      icon: <Activity className="w-8 h-8" />,
      href: "/zion-ai-performance-optimizer",
      price: "$89/month",
      originalPrice: "$179/month",
      discount: "50% OFF",
      color: "from-green-500 to-emerald-500",
      category: "SEO",
      rating: 4.6,
      reviews: 345,
      featured: false
    },
    {
      id: "zion-ai-customer-churn-predictor",
      name: "Zion AI Customer Churn Predictor",
      description: "Predictive analytics tool for identifying at-risk customers and implementing retention strategies",
      features: [
        "Churn prediction",
        "Risk scoring",
        "Retention strategies",
        "Customer segmentation",
        "Behavioral analysis",
        "Automated alerts",
        "Campaign management",
        "ROI tracking"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      href: "/zion-ai-customer-churn-predictor",
      price: "$149/month",
      originalPrice: "$299/month",
      discount: "50% OFF",
      color: "from-red-500 to-pink-500",
      category: "Analytics",
      rating: 4.7,
      reviews: 412,
      featured: false
    },
    {
      id: "zion-ai-supply-chain-optimizer",
      name: "Zion AI Supply Chain Optimizer",
      description: "AI-powered supply chain optimization with demand forecasting, logistics planning, and cost reduction",
      features: [
        "Demand forecasting",
        "Logistics planning",
        "Cost reduction",
        "Supplier optimization",
        "Risk management",
        "Sustainability tracking",
        "Real-time monitoring",
        "Analytics dashboard"
      ],
      icon: <Globe className="w-8 h-8" />,
      href: "/zion-ai-supply-chain-optimizer",
      price: "$279/month",
      originalPrice: "$559/month",
      discount: "50% OFF",
      color: "from-cyan-500 to-teal-500",
      category: "Supply Chain",
      rating: 4.8,
      reviews: 298,
      featured: false
    },
    {
      id: "zion-ai-financial-forecaster",
      name: "Zion AI Financial Forecaster",
      description: "Advanced financial forecasting with AI-powered predictions, risk analysis, and investment recommendations",
      features: [
        "Financial forecasting",
        "Risk analysis",
        "Investment recommendations",
        "Market analysis",
        "Portfolio optimization",
        "Scenario planning",
        "Compliance reporting",
        "Custom models"
      ],
      icon: <PieChart className="w-8 h-8" />,
      href: "/zion-ai-financial-forecaster",
      price: "$349/month",
      originalPrice: "$699/month",
      discount: "50% OFF",
      color: "from-emerald-500 to-green-500",
      category: "Finance",
      rating: 4.9,
      reviews: 156,
      featured: false
    },
    {
      id: "zion-ai-content-moderator",
      name: "Zion AI Content Moderator",
      description: "Automated content moderation with AI-powered detection of inappropriate content and compliance monitoring",
      features: [
        "Content detection",
        "Compliance monitoring",
        "Automated moderation",
        "Custom rules",
        "Multi-language support",
        "Real-time processing",
        "Analytics dashboard",
        "API integration"
      ],
      icon: <Shield className="w-8 h-8" />,
      href: "/zion-ai-content-moderator",
      price: "$99/month",
      originalPrice: "$199/month",
      discount: "50% OFF",
      color: "from-red-500 to-orange-500",
      category: "Content Management",
      rating: 4.5,
      reviews: 423,
      featured: false
    },
    {
      id: "zion-ai-translator-pro",
      name: "Zion AI Translator Pro",
      description: "Advanced AI translation service with 100+ languages, context awareness, and real-time translation",
      features: [
        "100+ languages",
        "Context awareness",
        "Real-time translation",
        "Document translation",
        "Voice translation",
        "Custom glossaries",
        "API integration",
        "Quality assurance"
      ],
      icon: <Globe2 className="w-8 h-8" />,
      href: "/zion-ai-translator-pro",
      price: "$59/month",
      originalPrice: "$119/month",
      discount: "50% OFF",
      color: "from-blue-500 to-indigo-500",
      category: "Translation",
      rating: 4.6,
      reviews: 678,
      featured: false
    },
    {
      id: "zion-ai-data-cleaner",
      name: "Zion AI Data Cleaner",
      description: "Intelligent data cleaning and validation tool with automated error detection and data quality improvement",
      features: [
        "Automated error detection",
        "Data validation",
        "Duplicate removal",
        "Format standardization",
        "Quality scoring",
        "Batch processing",
        "Custom rules",
        "API integration"
      ],
      icon: <Database className="w-8 h-8" />,
      href: "/zion-ai-data-cleaner",
      price: "$79/month",
      originalPrice: "$159/month",
      discount: "50% OFF",
      color: "from-purple-500 to-violet-500",
      category: "Data Management",
      rating: 4.7,
      reviews: 334,
      featured: false
    },
    {
      id: "zion-ai-task-scheduler",
      name: "Zion AI Task Scheduler",
      description: "Smart task scheduling with AI optimization, resource allocation, and automated deadline management",
      features: [
        "AI optimization",
        "Resource allocation",
        "Deadline management",
        "Priority scheduling",
        "Team coordination",
        "Progress tracking",
        "Integration tools",
        "Mobile app"
      ],
      icon: <Clock className="w-8 h-8" />,
      href: "/zion-ai-task-scheduler",
      price: "$49/month",
      originalPrice: "$99/month",
      discount: "50% OFF",
      color: "from-amber-500 to-yellow-500",
      category: "Productivity",
      rating: 4.5,
      reviews: 267,
      featured: false
    },
    {
      id: "zion-ai-customer-support-pro",
      name: "Zion AI Customer Support Pro",
      description: "Comprehensive customer support automation with chatbots, ticket routing, and knowledge base management",
      features: [
        "AI chatbots",
        "Ticket routing",
        "Knowledge base",
        "Multi-channel support",
        "Sentiment analysis",
        "Escalation management",
        "Performance metrics",
        "Integration tools"
      ],
      icon: <Headphones className="w-8 h-8" />,
      href: "/zion-ai-customer-support-pro",
      price: "$129/month",
      originalPrice: "$259/month",
      discount: "50% OFF",
      color: "from-cyan-500 to-blue-500",
      category: "Customer Service",
      rating: 4.8,
      reviews: 589,
      featured: false
    }
  ];

  const stats = [
    { label: "Active Users", value: "50,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
    { label: "Data Security", value: "100%", icon: <Cloud className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data insights. We've seen a 300% improvement in decision-making speed.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Security Shield gives us peace of mind. Our security incidents dropped by 95% since implementation.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Project Manager",
      content: "Zion AI Project Manager Pro has streamlined our workflow. We're completing projects 40% faster now.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive suite of 25+ micro SAAS solutions. AI-powered analytics, security, automation, and productivity tools designed to transform your business operations."
        keywords="micro SAAS, business software, AI tools, analytics, security, automation, productivity, CRM, marketing, cloud storage, project management, content creation"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Package className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">25+ Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Powerful, AI-driven micro SAAS tools designed to transform your business operations. 
            Choose from our comprehensive suite of specialized solutions to boost productivity, security, and growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">Free 14-day trial</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">No setup fees</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">Cancel anytime</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">24/7 support</span>
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
              <Monitor className="w-5 h-5 mr-2 inline" />
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Micro SAAS Products
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered business tools designed to streamline operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  </div>
                )}
                
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}
                    >
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30 mb-2">
                        {product.category}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 font-bold text-lg">{product.price}</span>
                      <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                    </div>
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                      {product.discount}
                    </span>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 4 && (
                      <div className="text-xs text-cyan-400 text-center">
                        +{product.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                      <span className="text-sm text-gray-300 ml-2">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400">{product.reviews} reviews</span>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link
                      to={product.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied customers have to say about our micro SAAS solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
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
                
                <p className="text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey with our micro SAAS solutions today. Choose the perfect tools for your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <Monitor className="w-5 h-5 mr-2 inline" />
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;