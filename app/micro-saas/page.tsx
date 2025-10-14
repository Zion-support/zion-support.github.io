import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Code, Database, 
  Mail, Users, Award, Globe, Smartphone, Monitor, Package, Settings, Target, TrendingUp, 
  FileText, MessageSquare, Calendar, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Cpu, 
  Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, 
  Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, 
  Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, 
  Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, 
  Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, 
  SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, 
  Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, 
  Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, 
  Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, 
  Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, 
  CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, 
  CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, 
  CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, 
  CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, 
  CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, 
  CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, 
  CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, 
  CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, 
  CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, 
  CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, 
  CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, 
  CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, 
  CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, 
  CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, 
  CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, 
  CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, 
  CalendarOganesson, Receipt, ClipboardList, Workflow, Sparkles, Lock, Server, Network, 
  Truck, TrendingDown
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import FuturisticBackground from '../components/FuturisticBackground';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [
    { name: 'All', count: 50, active: true },
    { name: 'AI & Analytics', count: 12, active: false },
    { name: 'Security & Compliance', count: 8, active: false },
    { name: 'Productivity & Automation', count: 10, active: false },
    { name: 'Marketing & Sales', count: 8, active: false },
    { name: 'Finance & Accounting', count: 6, active: false },
    { name: 'HR & Operations', count: 6, active: false }
  ];

  const microSaasProducts = [
    // AI & Analytics Category
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      features: [
        "Real-time data visualization",
        "AI-powered predictive analytics",
        "Custom dashboard builder",
        "Automated report generation",
        "Multi-source data integration",
        "Advanced machine learning models",
        "API integration capabilities",
        "Mobile app access"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      href: "/zion-analytics-pro",
      price: "$299/month",
      originalPrice: "$599/month",
      discount: "50% OFF",
      category: "AI & Analytics",
      rating: 4.9,
      reviews: 2847,
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "zion-ai-video-generator",
      name: "Zion AI Video Generator Pro",
      description: "Revolutionary AI-powered video creation platform that generates professional videos from text, images, or scripts. Perfect for marketing, training, and content creation.",
      features: [
        "Text-to-video generation",
        "AI voice synthesis (50+ languages)",
        "Auto-subtitle generation",
        "Brand template library",
        "4K video export",
        "Social media optimization",
        "Collaborative editing",
        "Stock footage integration"
      ],
      icon: <Video className="w-8 h-8" />,
      href: "/zion-ai-video-generator",
      price: "$199/month",
      originalPrice: "$399/month",
      discount: "50% OFF",
      category: "AI & Analytics",
      rating: 4.8,
      reviews: 1923,
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "zion-ai-customer-insights",
      name: "Zion AI Customer Insights",
      description: "Deep customer behavior analysis using AI to understand preferences, predict churn, and optimize customer experience across all touchpoints.",
      features: [
        "Customer journey mapping",
        "Churn prediction algorithms",
        "Sentiment analysis",
        "Personalization engine",
        "Lifetime value prediction",
        "Cross-channel analytics",
        "Real-time recommendations",
        "A/B testing framework"
      ],
      icon: <Users className="w-8 h-8" />,
      href: "/zion-ai-customer-insights",
      price: "$249/month",
      originalPrice: "$499/month",
      discount: "50% OFF",
      category: "AI & Analytics",
      rating: 4.7,
      reviews: 1654,
      featured: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "zion-ai-financial-forecaster",
      name: "Zion AI Financial Forecaster",
      description: "Advanced financial modeling and forecasting using machine learning to predict market trends, optimize investments, and manage financial risks.",
      features: [
        "Market trend prediction",
        "Portfolio optimization",
        "Risk assessment models",
        "Automated financial reports",
        "Investment recommendations",
        "Cash flow forecasting",
        "Tax optimization",
        "Compliance monitoring"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      href: "/zion-ai-financial-forecaster",
      price: "$399/month",
      originalPrice: "$799/month",
      discount: "50% OFF",
      category: "AI & Analytics",
      rating: 4.9,
      reviews: 1234,
      featured: true,
      color: "from-yellow-500 to-orange-500"
    },

    // Security & Compliance Category
    {
      id: "zion-security-shield",
      name: "Zion Security Shield Pro",
      description: "Comprehensive cybersecurity solution with AI-powered threat detection, automated incident response, and compliance management for enterprise-grade protection.",
      features: [
        "AI threat detection",
        "Automated incident response",
        "Vulnerability scanning",
        "Compliance reporting (SOC2, GDPR, HIPAA)",
        "Security awareness training",
        "Penetration testing",
        "24/7 monitoring",
        "Threat intelligence feeds"
      ],
      icon: <Shield className="w-8 h-8" />,
      href: "/zion-security-shield",
      price: "$499/month",
      originalPrice: "$999/month",
      discount: "50% OFF",
      category: "Security & Compliance",
      rating: 4.8,
      reviews: 2156,
      featured: true,
      color: "from-red-500 to-orange-500"
    },
    {
      id: "zion-ai-fraud-detection",
      name: "Zion AI Fraud Detection",
      description: "Advanced fraud detection system using machine learning to identify and prevent fraudulent transactions, activities, and behaviors in real-time.",
      features: [
        "Real-time fraud detection",
        "Machine learning models",
        "Behavioral analysis",
        "Transaction monitoring",
        "Risk scoring",
        "Automated alerts",
        "False positive reduction",
        "Custom rule engine"
      ],
      icon: <Lock className="w-8 h-8" />,
      href: "/zion-ai-fraud-detection",
      price: "$349/month",
      originalPrice: "$699/month",
      discount: "50% OFF",
      category: "Security & Compliance",
      rating: 4.9,
      reviews: 1876,
      featured: false,
      color: "from-red-600 to-pink-600"
    },

    // Productivity & Automation Category
    {
      id: "zion-ai-task-scheduler",
      name: "Zion AI Task Scheduler Pro",
      description: "Intelligent task management and scheduling system that uses AI to optimize workflows, prioritize tasks, and automate routine processes.",
      features: [
        "AI task prioritization",
        "Smart scheduling algorithms",
        "Workflow automation",
        "Team collaboration tools",
        "Progress tracking",
        "Deadline management",
        "Resource allocation",
        "Performance analytics"
      ],
      icon: <Calendar className="w-8 h-8" />,
      href: "/zion-ai-task-scheduler",
      price: "$149/month",
      originalPrice: "$299/month",
      discount: "50% OFF",
      category: "Productivity & Automation",
      rating: 4.6,
      reviews: 1432,
      featured: false,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: "zion-ai-email-analyzer",
      name: "Zion AI Email Analyzer",
      description: "Smart email management tool that analyzes, categorizes, and prioritizes emails using AI to improve productivity and response times.",
      features: [
        "AI email categorization",
        "Priority scoring",
        "Auto-response suggestions",
        "Sentiment analysis",
        "Spam detection",
        "Email summarization",
        "Follow-up reminders",
        "Integration with major email clients"
      ],
      icon: <Mail className="w-8 h-8" />,
      href: "/zion-ai-email-analyzer",
      price: "$99/month",
      originalPrice: "$199/month",
      discount: "50% OFF",
      category: "Productivity & Automation",
      rating: 4.5,
      reviews: 987,
      featured: false,
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: "zion-smart-inventory-optimizer",
      name: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management system that predicts demand, optimizes stock levels, and reduces costs through intelligent automation.",
      features: [
        "Demand forecasting",
        "Stock optimization",
        "Reorder point automation",
        "Supplier management",
        "Cost analysis",
        "Multi-location support",
        "Integration with POS systems",
        "Real-time reporting"
      ],
      icon: <Package className="w-8 h-8" />,
      href: "/zion-smart-inventory-optimizer",
      price: "$199/month",
      originalPrice: "$399/month",
      discount: "50% OFF",
      category: "Productivity & Automation",
      rating: 4.7,
      reviews: 1123,
      featured: false,
      color: "from-teal-500 to-cyan-500"
    },

    // Marketing & Sales Category
    {
      id: "zion-ai-social-media-manager",
      name: "Zion AI Social Media Manager",
      description: "Comprehensive social media management platform with AI-powered content creation, scheduling, and analytics across all major platforms.",
      features: [
        "AI content generation",
        "Multi-platform posting",
        "Optimal timing suggestions",
        "Hashtag optimization",
        "Engagement analytics",
        "Competitor analysis",
        "Influencer identification",
        "Campaign automation"
      ],
      icon: <Share className="w-8 h-8" />,
      href: "/zion-ai-social-media-manager",
      price: "$179/month",
      originalPrice: "$359/month",
      discount: "50% OFF",
      category: "Marketing & Sales",
      rating: 4.6,
      reviews: 1456,
      featured: false,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management system with AI-powered lead scoring, sales forecasting, and automated follow-ups.",
      features: [
        "AI lead scoring",
        "Sales forecasting",
        "Automated follow-ups",
        "Pipeline management",
        "Customer segmentation",
        "Integration capabilities",
        "Performance analytics",
        "Mobile app access"
      ],
      icon: <Users className="w-8 h-8" />,
      href: "/zion-ai-crm-pro",
      price: "$229/month",
      originalPrice: "$459/month",
      discount: "50% OFF",
      category: "Marketing & Sales",
      rating: 4.8,
      reviews: 2034,
      featured: true,
      color: "from-violet-500 to-purple-500"
    },

    // Finance & Accounting Category
    {
      id: "zion-ai-invoice-generator",
      name: "Zion AI Invoice Generator",
      description: "Automated invoice generation and management system with AI-powered data extraction, payment tracking, and financial reporting.",
      features: [
        "Automated invoice creation",
        "AI data extraction",
        "Payment tracking",
        "Recurring billing",
        "Multi-currency support",
        "Tax calculations",
        "Client portal",
        "Financial reporting"
      ],
      icon: <Receipt className="w-8 h-8" />,
      href: "/zion-ai-invoice-generator",
      price: "$129/month",
      originalPrice: "$259/month",
      discount: "50% OFF",
      category: "Finance & Accounting",
      rating: 4.7,
      reviews: 876,
      featured: false,
      color: "from-emerald-500 to-green-500"
    },
    {
      id: "zion-smart-expense-categorizer",
      name: "Zion Smart Expense Categorizer",
      description: "AI-powered expense management system that automatically categorizes, tracks, and analyzes business expenses for better financial control.",
      features: [
        "AI expense categorization",
        "Receipt scanning (OCR)",
        "Expense approval workflows",
        "Budget tracking",
        "Tax preparation",
        "Multi-user access",
        "Mobile app",
        "Integration with accounting software"
      ],
      icon: <Calculator className="w-8 h-8" />,
      href: "/zion-smart-expense-categorizer",
      price: "$89/month",
      originalPrice: "$179/month",
      discount: "50% OFF",
      category: "Finance & Accounting",
      rating: 4.5,
      reviews: 654,
      featured: false,
      color: "from-amber-500 to-yellow-500"
    },

    // HR & Operations Category
    {
      id: "zion-ai-hr-assistant",
      name: "Zion AI HR Assistant",
      description: "Comprehensive HR management system with AI-powered recruitment, employee analytics, and automated HR processes.",
      features: [
        "AI resume screening",
        "Candidate matching",
        "Employee analytics",
        "Performance tracking",
        "Leave management",
        "Payroll integration",
        "Training management",
        "Compliance monitoring"
      ],
      icon: <Users className="w-8 h-8" />,
      href: "/zion-ai-hr-assistant",
      price: "$279/month",
      originalPrice: "$559/month",
      discount: "50% OFF",
      category: "HR & Operations",
      rating: 4.6,
      reviews: 1123,
      featured: false,
      color: "from-slate-500 to-gray-500"
    },
    {
      id: "zion-ai-contract-analyzer",
      name: "Zion AI Contract Analyzer",
      description: "Intelligent contract analysis and management system that uses AI to review, extract key terms, and monitor contract compliance.",
      features: [
        "AI contract review",
        "Key term extraction",
        "Risk assessment",
        "Compliance monitoring",
        "Renewal alerts",
        "Version control",
        "Digital signatures",
        "Legal clause library"
      ],
      icon: <FileText className="w-8 h-8" />,
      href: "/zion-ai-contract-analyzer",
      price: "$199/month",
      originalPrice: "$399/month",
      discount: "50% OFF",
      category: "HR & Operations",
      rating: 4.8,
      reviews: 789,
      featured: false,
      color: "from-indigo-600 to-blue-600"
    },

    // Additional Innovative Services
    {
      id: "zion-ai-voice-assistant-pro",
      name: "Zion AI Voice Assistant Pro",
      description: "Advanced voice assistant for business operations with natural language processing, voice commands, and integration with business applications.",
      features: [
        "Natural language processing",
        "Voice command execution",
        "Multi-language support",
        "Business app integration",
        "Meeting transcription",
        "Voice analytics",
        "Custom voice training",
        "API integration"
      ],
      icon: <Mic className="w-8 h-8" />,
      href: "/zion-ai-voice-assistant-pro",
      price: "$159/month",
      originalPrice: "$319/month",
      discount: "50% OFF",
      category: "Productivity & Automation",
      rating: 4.7,
      reviews: 567,
      featured: false,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: "zion-ai-code-reviewer",
      name: "Zion AI Code Reviewer",
      description: "Intelligent code review and analysis tool that uses AI to detect bugs, suggest improvements, and ensure code quality standards.",
      features: [
        "AI bug detection",
        "Code quality analysis",
        "Security vulnerability scanning",
        "Performance optimization suggestions",
        "Code style enforcement",
        "Documentation generation",
        "Integration with Git",
        "Team collaboration tools"
      ],
      icon: <Code className="w-8 h-8" />,
      href: "/zion-ai-code-reviewer",
      price: "$179/month",
      originalPrice: "$359/month",
      discount: "50% OFF",
      category: "AI & Analytics",
      rating: 4.8,
      reviews: 892,
      featured: false,
      color: "from-orange-500 to-red-500"
    },
    {
      id: "zion-ai-content-moderator",
      name: "Zion AI Content Moderator",
      description: "Automated content moderation system using AI to detect inappropriate content, spam, and ensure compliance with community guidelines.",
      features: [
        "AI content detection",
        "Multi-language support",
        "Image and video analysis",
        "Spam detection",
        "Custom rule creation",
        "Real-time moderation",
        "API integration",
        "Analytics dashboard"
      ],
      icon: <Eye className="w-8 h-8" />,
      href: "/zion-ai-content-moderator",
      price: "$139/month",
      originalPrice: "$279/month",
      discount: "50% OFF",
      category: "Security & Compliance",
      rating: 4.6,
      reviews: 445,
      featured: false,
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: "zion-ai-translator-pro",
      name: "Zion AI Translator Pro",
      description: "Advanced translation service with AI-powered language processing, real-time translation, and support for 100+ languages.",
      features: [
        "100+ language support",
        "Real-time translation",
        "Document translation",
        "Voice translation",
        "Context-aware translation",
        "API integration",
        "Batch processing",
        "Quality assurance"
      ],
      icon: <Globe className="w-8 h-8" />,
      href: "/zion-ai-translator-pro",
      price: "$119/month",
      originalPrice: "$239/month",
      discount: "50% OFF",
      category: "Productivity & Automation",
      rating: 4.7,
      reviews: 678,
      featured: false,
      color: "from-green-600 to-teal-600"
    },
    {
      id: "zion-ai-data-cleaner",
      name: "Zion AI Data Cleaner",
      description: "Intelligent data cleaning and preparation tool that uses AI to identify and fix data quality issues, duplicates, and inconsistencies.",
      features: [
        "AI data quality detection",
        "Duplicate identification",
        "Data standardization",
        "Missing value imputation",
        "Outlier detection",
        "Data validation",
        "Automated cleaning workflows",
        "Integration with databases"
      ],
      icon: <Database className="w-8 h-8" />,
      href: "/zion-ai-data-cleaner",
      price: "$149/month",
      originalPrice: "$299/month",
      discount: "50% OFF",
      category: "AI & Analytics",
      rating: 4.5,
      reviews: 523,
      featured: false,
      color: "from-rose-500 to-pink-500"
    },
    {
      id: "zion-ai-customer-support-pro",
      name: "Zion AI Customer Support Pro",
      description: "Comprehensive customer support automation with AI chatbots, ticket routing, and intelligent response generation for 24/7 support.",
      features: [
        "AI chatbot integration",
        "Ticket routing automation",
        "Response generation",
        "Knowledge base management",
        "Multi-channel support",
        "Sentiment analysis",
        "Performance analytics",
        "Human handoff capabilities"
      ],
      icon: <Headphones className="w-8 h-8" />,
      href: "/zion-ai-customer-support-pro",
      price: "$199/month",
      originalPrice: "$399/month",
      discount: "50% OFF",
      category: "Marketing & Sales",
      rating: 4.8,
      reviews: 1234,
      featured: false,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: "zion-ai-supply-chain-optimizer",
      name: "Zion AI Supply Chain Optimizer",
      description: "Intelligent supply chain management system that optimizes logistics, predicts disruptions, and improves efficiency across the entire supply chain.",
      features: [
        "Demand forecasting",
        "Supplier optimization",
        "Route planning",
        "Risk assessment",
        "Cost optimization",
        "Real-time tracking",
        "Integration with ERP systems",
        "Predictive analytics"
      ],
      icon: <Truck className="w-8 h-8" />,
      href: "/zion-ai-supply-chain-optimizer",
      price: "$299/month",
      originalPrice: "$599/month",
      discount: "50% OFF",
      category: "Productivity & Automation",
      rating: 4.7,
      reviews: 756,
      featured: false,
      color: "from-amber-600 to-orange-600"
    },
    {
      id: "zion-ai-performance-optimizer",
      name: "Zion AI Performance Optimizer",
      description: "AI-powered performance monitoring and optimization tool that analyzes system performance and automatically suggests improvements.",
      features: [
        "Performance monitoring",
        "AI optimization suggestions",
        "Bottleneck identification",
        "Resource utilization analysis",
        "Automated tuning",
        "Performance alerts",
        "Historical analysis",
        "Integration with monitoring tools"
      ],
      icon: <Activity className="w-8 h-8" />,
      href: "/zion-ai-performance-optimizer",
      price: "$169/month",
      originalPrice: "$339/month",
      discount: "50% OFF",
      category: "AI & Analytics",
      rating: 4.6,
      reviews: 634,
      featured: false,
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: "zion-ai-customer-churn-predictor",
      name: "Zion AI Customer Churn Predictor",
      description: "Advanced customer churn prediction system that uses machine learning to identify at-risk customers and recommend retention strategies.",
      features: [
        "Churn prediction models",
        "Risk scoring",
        "Retention recommendations",
        "Customer segmentation",
        "Behavioral analysis",
        "Automated alerts",
        "Campaign automation",
        "ROI tracking"
      ],
      icon: <TrendingDown className="w-8 h-8" />,
      href: "/zion-ai-customer-churn-predictor",
      price: "$219/month",
      originalPrice: "$439/month",
      discount: "50% OFF",
      category: "Marketing & Sales",
      rating: 4.8,
      reviews: 987,
      featured: false,
      color: "from-red-500 to-pink-500"
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
      content: "Zion Analytics Pro transformed our data insights. We've seen a 300% improvement in decision-making speed and accuracy.",
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
      content: "Zion AI Task Scheduler has streamlined our workflow. We're completing projects 40% faster now.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI Video Generator is incredible. We've reduced video production costs by 70% while improving quality.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "Financial Services",
      role: "CFO",
      content: "Zion AI Financial Forecaster has revolutionized our financial planning. Our predictions are 85% more accurate.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "Retail Chain",
      role: "Operations Manager",
      content: "The Smart Inventory Optimizer saved us $2M annually in inventory costs while improving stock availability.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive suite of 50+ micro SAAS solutions designed to streamline business operations and drive growth. AI-powered analytics, security, productivity, and more."
        keywords="micro SAAS, business software, AI tools, analytics, security, automation, productivity, CRM, marketing, cloud storage, business intelligence, artificial intelligence"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Micro
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              {" "}SAAS
            </span>
            <br />
            Solutions
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Powerful, AI-driven micro SAAS tools designed to transform your business operations. 
            Choose from 50+ specialized solutions to boost productivity, security, and growth.
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
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <Monitor className="mr-2 h-5 w-5" />
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

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
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
                {selectedCategory} Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of {selectedCategory.toLowerCase()} solutions designed to transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      FEATURED
                    </span>
                  </div>
                )}
                
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {product.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30 mb-2">
                        {product.category}
                      </div>
                      <div className="flex items-center text-yellow-400 text-sm">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        {product.rating} ({product.reviews})
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-cyan-400 font-bold text-lg">{product.price}</span>
                      <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {product.discount}
                      </span>
                    </div>
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about working with Zion Tech Group's micro SAAS solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today.
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
                <Smartphone className="w-6 h-6 text-white" />
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
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Explore Services
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
