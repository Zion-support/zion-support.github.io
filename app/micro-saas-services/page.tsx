import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Mail, 
  Package, 
  Clock, 
  Globe, 
  Target, 
  FileText, 
  Heart, 
  Receipt, 
  TrendingUp, 
  Cpu, 
  Database, 
  Smartphone, 
  Monitor, 
  Cloud, 
  Lock, 
  CheckCircle, 
  Star, 
  Award, 
  Sparkles,
  Calendar,
  CreditCard,
  Settings,
  PieChart,
  MessageSquare,
  Image,
  Video,
  Music,
  Camera,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  Bookmark,
  Flag,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Copy,
  Scissors,
  Palette,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Code,
  Link as LinkIcon,
  ExternalLink,
  Info,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  InfoIcon,
  Lightbulb,
  Rocket,
  Crown,
  Gem,
  Diamond,
  Zap as Lightning,
  Flame,
  Sun,
  Moon,
  Droplets,
  Wind,
  Snowflake,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudSun,
  CloudMoon,
  Sunrise,
  Sunset,
  Thermometer,
  Gauge,
  Activity,
  Pulse,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Kiss,
  Wink,
  Tongue,
  Sad,
  Happy,
  Neutral,
  Excited,
  Proud,
  Shy,
  Cool,
  Hot,
  Cold,
  Warm,
  Fresh,
  Stale,
  New,
  Old,
  Young,
  Mature,
  Beginner,
  Expert,
  Pro,
  Amateur,
  Rookie,
  Veteran,
  Master,
  Legend,
  Hero,
  Champion,
  Winner,
  Loser,
  Success,
  Failure,
  Victory,
  Defeat,
  Win,
  Lose,
  Draw,
  Tie,
  Equal,
  Different,
  Same,
  Similar,
  Unique,
  Common,
  Rare,
  Frequent,
  Occasional,
  Regular,
  Irregular,
  Normal,
  Abnormal,
  Standard,
  Custom,
  Default,
  Special,
  General,
  Specific,
  Broad,
  Narrow,
  Wide,
  Thin,
  Thick,
  Large,
  Small,
  Big,
  Tiny,
  Huge,
  Massive,
  Mini,
  Micro,
  Macro,
  Mega,
  Giga,
  Tera,
  Peta,
  Exa,
  Zetta,
  Yotta,
  Kilo,
  Hecto,
  Deca,
  Deci,
  Centi,
  Milli,
  Micro as MicroIcon,
  Nano,
  Pico,
  Femto,
  Atto,
  Zepto,
  Yocto
} from "lucide-react";

const MicroSaasServicesPage = () => {
  const microSaasServices = [
    // AI-Powered Business Tools
    {
      id: "ai-email-analyzer",
      name: "AI Email Analyzer Pro",
      description: "Intelligent email analysis with sentiment detection, priority scoring, and automated response suggestions. Perfect for sales teams and customer service.",
      icon: <Mail className="w-8 h-8" />,
      price: "$29/month",
      originalPrice: "$59/month",
      features: [
        "Sentiment Analysis",
        "Priority Scoring",
        "Auto Response Suggestions",
        "Email Templates",
        "Team Collaboration",
        "Analytics Dashboard",
        "Integration with CRM",
        "Multi-language Support"
      ],
      category: "AI Business Tools",
      color: "from-blue-500 to-cyan-500",
      popular: true,
      link: "/ai-powered-email-analyzer",
      benefits: [
        "Increase email response rates by 40%",
        "Reduce email processing time by 60%",
        "Improve customer satisfaction scores",
        "Automated follow-up reminders"
      ],
      useCases: [
        "Sales teams managing leads",
        "Customer service departments",
        "Marketing campaign management",
        "Internal communication optimization"
      ]
    },
    {
      id: "smart-inventory-optimizer",
      name: "Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization. Reduce stockouts and overstock by 50%.",
      icon: <Package className="w-8 h-8" />,
      price: "$49/month",
      originalPrice: "$99/month",
      features: [
        "Demand Forecasting",
        "Automated Reordering",
        "Cost Optimization",
        "Multi-location Support",
        "Supplier Management",
        "Analytics & Reporting",
        "Mobile App",
        "API Integration"
      ],
      category: "AI Business Tools",
      color: "from-green-500 to-emerald-500",
      popular: true,
      link: "/smart-inventory-optimizer",
      benefits: [
        "Reduce inventory costs by 30%",
        "Eliminate stockouts and overstock",
        "Automated supplier communication",
        "Real-time inventory tracking"
      ],
      useCases: [
        "E-commerce businesses",
        "Retail stores",
        "Manufacturing companies",
        "Wholesale distributors"
      ]
    },
    {
      id: "ai-customer-sentiment-tracker",
      name: "AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment analysis across all channels. Monitor brand perception, identify issues early, and improve customer experience.",
      icon: <Heart className="w-8 h-8" />,
      price: "$39/month",
      originalPrice: "$79/month",
      features: [
        "Real-time Sentiment Analysis",
        "Multi-channel Monitoring",
        "Brand Perception Tracking",
        "Alert System",
        "Trend Analysis",
        "Competitor Comparison",
        "Custom Dashboards",
        "Team Notifications"
      ],
      category: "AI Business Tools",
      color: "from-pink-500 to-rose-500",
      popular: true,
      link: "/ai-customer-sentiment-tracker",
      benefits: [
        "Improve customer satisfaction by 35%",
        "Early issue detection and resolution",
        "Brand reputation management",
        "Data-driven customer insights"
      ],
      useCases: [
        "Brand management teams",
        "Customer service departments",
        "Marketing agencies",
        "E-commerce businesses"
      ]
    },
    {
      id: "smart-expense-categorizer",
      name: "Smart Expense Categorizer",
      description: "AI-powered expense management with automatic categorization, receipt scanning, and compliance reporting. Perfect for small businesses and freelancers.",
      icon: <Receipt className="w-8 h-8" />,
      price: "$19/month",
      originalPrice: "$39/month",
      features: [
        "Automatic Categorization",
        "Receipt Scanning",
        "Tax Compliance",
        "Expense Reports",
        "Receipt Storage",
        "Multi-currency Support",
        "Team Management",
        "Integration with Accounting"
      ],
      category: "AI Business Tools",
      color: "from-yellow-500 to-orange-500",
      popular: false,
      link: "/smart-expense-categorizer",
      benefits: [
        "Save 5+ hours per week on expense management",
        "100% accurate categorization",
        "Automated tax preparation",
        "Real-time expense tracking"
      ],
      useCases: [
        "Small businesses",
        "Freelancers and consultants",
        "Startups",
        "Remote teams"
      ]
    },

    // Productivity & Project Management
    {
      id: "ai-project-manager-pro",
      name: "AI Project Manager Pro",
      description: "Intelligent project management with AI-powered task prioritization, resource allocation, and risk prediction. Boost team productivity by 45%.",
      icon: <Calendar className="w-8 h-8" />,
      price: "$39/month",
      originalPrice: "$79/month",
      features: [
        "AI Task Prioritization",
        "Resource Allocation",
        "Risk Prediction",
        "Team Collaboration",
        "Time Tracking",
        "Progress Analytics",
        "Gantt Charts",
        "Mobile App"
      ],
      category: "Productivity Tools",
      color: "from-purple-500 to-violet-500",
      popular: true,
      link: "/ai-project-manager-pro",
      benefits: [
        "Increase team productivity by 45%",
        "Reduce project delays by 60%",
        "Automated risk management",
        "Real-time project insights"
      ],
      useCases: [
        "Project managers",
        "Development teams",
        "Marketing agencies",
        "Consulting firms"
      ]
    },
    {
      id: "ai-crm-assistant",
      name: "AI CRM Assistant Pro",
      description: "Intelligent CRM with AI-powered lead scoring, automated follow-ups, and sales forecasting. Increase conversion rates by 50%.",
      icon: <Users className="w-8 h-8" />,
      price: "$59/month",
      originalPrice: "$119/month",
      features: [
        "AI Lead Scoring",
        "Automated Follow-ups",
        "Sales Forecasting",
        "Pipeline Management",
        "Email Integration",
        "Call Tracking",
        "Performance Analytics",
        "Custom Workflows"
      ],
      category: "Productivity Tools",
      color: "from-indigo-500 to-blue-500",
      popular: true,
      link: "/ai-crm-assistant",
      benefits: [
        "Increase conversion rates by 50%",
        "Automated lead nurturing",
        "Predictive sales insights",
        "Seamless team collaboration"
      ],
      useCases: [
        "Sales teams",
        "Business development",
        "Account managers",
        "Sales managers"
      ]
    },
    {
      id: "ai-time-tracker",
      name: "AI Time Tracker Pro",
      description: "Smart time tracking with automatic activity detection, productivity analysis, and intelligent reporting. Perfect for remote teams and freelancers.",
      icon: <Clock className="w-8 h-8" />,
      price: "$15/month",
      originalPrice: "$30/month",
      features: [
        "Automatic Time Tracking",
        "Productivity Analysis",
        "Project Billing",
        "Team Management",
        "Screenshots & Activity",
        "Detailed Reports",
        "Mobile App",
        "API Integration"
      ],
      category: "Productivity Tools",
      color: "from-teal-500 to-cyan-500",
      popular: false,
      link: "/ai-time-tracker",
      benefits: [
        "Accurate time tracking without manual input",
        "Detailed productivity insights",
        "Automated client billing",
        "Team performance analytics"
      ],
      useCases: [
        "Freelancers",
        "Remote teams",
        "Consulting agencies",
        "Development teams"
      ]
    },

    // Marketing & Content Tools
    {
      id: "ai-content-generator",
      name: "AI Content Generator Pro",
      description: "Create high-quality content at scale with AI-powered writing tools. Blog posts, social media, emails, and marketing materials with SEO optimization.",
      icon: <FileText className="w-8 h-8" />,
      price: "$29/month",
      originalPrice: "$59/month",
      features: [
        "AI Content Writing",
        "SEO Optimization",
        "Multi-language Support",
        "Brand Voice Training",
        "Content Calendar",
        "Plagiarism Check",
        "Team Collaboration",
        "Analytics Dashboard"
      ],
      category: "Marketing Tools",
      color: "from-pink-500 to-purple-500",
      popular: true,
      link: "/ai-content-generator",
      benefits: [
        "Create 10x more content in the same time",
        "SEO-optimized content automatically",
        "Consistent brand voice across all content",
        "Multi-language content generation"
      ],
      useCases: [
        "Content marketing teams",
        "Social media managers",
        "Blog writers",
        "Marketing agencies"
      ]
    },
    {
      id: "ai-social-media-scheduler",
      name: "AI Social Media Scheduler",
      description: "Intelligent social media management with AI-powered posting times, content optimization, and engagement analytics. Increase engagement by 65%.",
      icon: <Globe className="w-8 h-8" />,
      price: "$25/month",
      originalPrice: "$50/month",
      features: [
        "AI Posting Times",
        "Content Optimization",
        "Multi-platform Support",
        "Engagement Analytics",
        "Hashtag Suggestions",
        "Content Calendar",
        "Team Collaboration",
        "Automated Responses"
      ],
      category: "Marketing Tools",
      color: "from-blue-500 to-indigo-500",
      popular: true,
      link: "/ai-social-media-scheduler",
      benefits: [
        "Increase social media engagement by 65%",
        "Optimal posting times automatically",
        "Content performance insights",
        "Multi-platform management"
      ],
      useCases: [
        "Social media managers",
        "Marketing teams",
        "Small businesses",
        "Influencers"
      ]
    },
    {
      id: "ai-email-marketing-pro",
      name: "AI Email Marketing Pro",
      description: "Advanced email marketing with AI-powered personalization, A/B testing, and automated campaigns. Increase open rates by 40% and click rates by 55%.",
      icon: <Mail className="w-8 h-8" />,
      price: "$35/month",
      originalPrice: "$70/month",
      features: [
        "AI Personalization",
        "A/B Testing",
        "Automated Campaigns",
        "Segmentation",
        "Analytics Dashboard",
        "Template Library",
        "Drip Campaigns",
        "Integration with CRM"
      ],
      category: "Marketing Tools",
      color: "from-green-500 to-teal-500",
      popular: true,
      link: "/ai-email-marketing-pro",
      benefits: [
        "Increase open rates by 40%",
        "Boost click rates by 55%",
        "Automated campaign optimization",
        "Advanced segmentation and targeting"
      ],
      useCases: [
        "Email marketing teams",
        "E-commerce businesses",
        "SaaS companies",
        "Marketing agencies"
      ]
    },

    // Analytics & Reporting
    {
      id: "ai-analytics-dashboard",
      name: "AI Analytics Dashboard Pro",
      description: "Comprehensive business analytics with AI-powered insights, predictive analytics, and automated reporting. Make data-driven decisions with confidence.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$49/month",
      originalPrice: "$99/month",
      features: [
        "AI-Powered Insights",
        "Predictive Analytics",
        "Custom Dashboards",
        "Automated Reports",
        "Data Visualization",
        "Real-time Monitoring",
        "Team Collaboration",
        "API Integration"
      ],
      category: "Analytics Tools",
      color: "from-cyan-500 to-blue-500",
      popular: true,
      link: "/ai-analytics-dashboard",
      benefits: [
        "Make data-driven decisions 3x faster",
        "Predictive insights for business growth",
        "Automated report generation",
        "Real-time business monitoring"
      ],
      useCases: [
        "Business analysts",
        "Marketing teams",
        "Sales managers",
        "Executive teams"
      ]
    },
    {
      id: "ai-financial-analyzer",
      name: "AI Financial Analyzer Pro",
      description: "Advanced financial analysis with AI-powered forecasting, risk assessment, and investment insights. Perfect for small businesses and financial advisors.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "$69/month",
      originalPrice: "$139/month",
      features: [
        "Financial Forecasting",
        "Risk Assessment",
        "Investment Analysis",
        "Cash Flow Management",
        "Budget Planning",
        "Tax Optimization",
        "Compliance Reporting",
        "Multi-currency Support"
      ],
      category: "Analytics Tools",
      color: "from-emerald-500 to-green-500",
      popular: false,
      link: "/ai-financial-analyzer",
      benefits: [
        "Accurate financial forecasting",
        "Automated risk assessment",
        "Tax optimization strategies",
        "Comprehensive financial insights"
      ],
      useCases: [
        "Small business owners",
        "Financial advisors",
        "Accountants",
        "Investment managers"
      ]
    },

    // Security & Compliance
    {
      id: "ai-security-monitor",
      name: "AI Security Monitor Pro",
      description: "Advanced security monitoring with AI-powered threat detection, automated incident response, and compliance reporting. Protect your business 24/7.",
      icon: <Shield className="w-8 h-8" />,
      price: "$79/month",
      originalPrice: "$159/month",
      features: [
        "AI Threat Detection",
        "Automated Response",
        "Compliance Monitoring",
        "24/7 Monitoring",
        "Incident Management",
        "Security Reports",
        "Team Alerts",
        "Integration with SIEM"
      ],
      category: "Security Tools",
      color: "from-red-500 to-orange-500",
      popular: true,
      link: "/ai-security-monitor",
      benefits: [
        "Detect threats 10x faster",
        "Automated incident response",
        "Compliance with industry standards",
        "24/7 security monitoring"
      ],
      useCases: [
        "IT security teams",
        "Compliance officers",
        "Small businesses",
        "Managed service providers"
      ]
    },
    {
      id: "ai-compliance-manager",
      name: "AI Compliance Manager Pro",
      description: "Automated compliance management with AI-powered monitoring, reporting, and risk assessment. Ensure compliance with GDPR, HIPAA, and other regulations.",
      icon: <Lock className="w-8 h-8" />,
      price: "$59/month",
      originalPrice: "$119/month",
      features: [
        "GDPR Compliance",
        "HIPAA Compliance",
        "Risk Assessment",
        "Automated Reporting",
        "Policy Management",
        "Audit Trails",
        "Team Training",
        "Integration with HR"
      ],
      category: "Security Tools",
      color: "from-slate-500 to-gray-500",
      popular: false,
      link: "/ai-compliance-manager",
      benefits: [
        "Automated compliance monitoring",
        "Reduce compliance costs by 60%",
        "Real-time risk assessment",
        "Automated audit reporting"
      ],
      useCases: [
        "Compliance officers",
        "Legal teams",
        "Healthcare organizations",
        "Financial institutions"
      ]
    },

    // Communication & Collaboration
    {
      id: "ai-meeting-assistant",
      name: "AI Meeting Assistant Pro",
      description: "Intelligent meeting management with AI-powered transcription, action items extraction, and follow-up automation. Never miss important details again.",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "$25/month",
      originalPrice: "$50/month",
      features: [
        "AI Transcription",
        "Action Items Extraction",
        "Meeting Summaries",
        "Follow-up Automation",
        "Multi-language Support",
        "Integration with Calendar",
        "Team Collaboration",
        "Mobile App"
      ],
      category: "Communication Tools",
      color: "from-violet-500 to-purple-500",
      popular: true,
      link: "/ai-meeting-assistant",
      benefits: [
        "Never miss important meeting details",
        "Automated follow-up actions",
        "Multi-language transcription",
        "Seamless team collaboration"
      ],
      useCases: [
        "Project managers",
        "Sales teams",
        "Executive assistants",
        "Remote teams"
      ]
    },
    {
      id: "ai-chatbot-builder",
      name: "AI Chatbot Builder Pro",
      description: "Create intelligent chatbots without coding. AI-powered conversation flows, multi-language support, and seamless integration with your website and apps.",
      icon: <Bot className="w-8 h-8" />,
      price: "$39/month",
      originalPrice: "$79/month",
      features: [
        "No-Code Builder",
        "AI Conversation Flows",
        "Multi-language Support",
        "Website Integration",
        "Mobile App Integration",
        "Analytics Dashboard",
        "Team Management",
        "API Access"
      ],
      category: "Communication Tools",
      color: "from-cyan-500 to-teal-500",
      popular: true,
      link: "/ai-chatbot-builder",
      benefits: [
        "Create chatbots without coding",
        "24/7 customer support",
        "Multi-language capabilities",
        "Seamless integration options"
      ],
      useCases: [
        "Customer service teams",
        "E-commerce businesses",
        "SaaS companies",
        "Marketing agencies"
      ]
    },

    // Creative & Design Tools
    {
      id: "ai-design-studio",
      name: "AI Design Studio Pro",
      description: "AI-powered design tools for creating logos, graphics, and marketing materials. Professional designs in minutes, not hours.",
      icon: <Palette className="w-8 h-8" />,
      price: "$29/month",
      originalPrice: "$59/month",
      features: [
        "AI Logo Generation",
        "Graphic Design Tools",
        "Template Library",
        "Brand Kit Management",
        "Team Collaboration",
        "Export Options",
        "Mobile App",
        "API Integration"
      ],
      category: "Creative Tools",
      color: "from-pink-500 to-rose-500",
      popular: true,
      link: "/ai-design-studio",
      benefits: [
        "Create professional designs in minutes",
        "Consistent brand identity",
        "No design skills required",
        "Extensive template library"
      ],
      useCases: [
        "Small business owners",
        "Marketing teams",
        "Freelancers",
        "Startups"
      ]
    },
    {
      id: "ai-video-editor",
      name: "AI Video Editor Pro",
      description: "Intelligent video editing with AI-powered features like auto-cropping, background removal, and smart transitions. Create professional videos effortlessly.",
      icon: <Video className="w-8 h-8" />,
      price: "$45/month",
      originalPrice: "$90/month",
      features: [
        "AI Auto-editing",
        "Background Removal",
        "Smart Transitions",
        "Audio Enhancement",
        "Multi-format Export",
        "Cloud Storage",
        "Team Collaboration",
        "Mobile App"
      ],
      category: "Creative Tools",
      color: "from-purple-500 to-violet-500",
      popular: false,
      link: "/ai-video-editor",
      benefits: [
        "Create professional videos in minutes",
        "AI-powered editing features",
        "No video editing experience needed",
        "Cloud-based collaboration"
      ],
      useCases: [
        "Content creators",
        "Marketing teams",
        "Social media managers",
        "Small businesses"
      ]
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "AI Business Tools", count: microSaasServices.filter(s => s.category === "AI Business Tools").length },
    { name: "Productivity Tools", count: microSaasServices.filter(s => s.category === "Productivity Tools").length },
    { name: "Marketing Tools", count: microSaasServices.filter(s => s.category === "Marketing Tools").length },
    { name: "Analytics Tools", count: microSaasServices.filter(s => s.category === "Analytics Tools").length },
    { name: "Security Tools", count: microSaasServices.filter(s => s.category === "Security Tools").length },
    { name: "Communication Tools", count: microSaasServices.filter(s => s.category === "Communication Tools").length },
    { name: "Creative Tools", count: microSaasServices.filter(s => s.category === "Creative Tools").length }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS services including AI-powered business tools, productivity solutions, marketing automation, analytics dashboards, and security tools. Transform your business with intelligent software solutions."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI business tools, productivity software, marketing automation, analytics dashboard, security tools, project management, CRM, email marketing, social media management, content generation, time tracking, expense management"
        />
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
              <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Powerful, AI-driven micro SAAS solutions designed to transform your business operations. 
              From intelligent automation to advanced analytics, we have the tools you need to succeed.
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
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300 text-xs md:text-sm">Micro SAAS Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-gray-300 text-xs md:text-sm">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-xs md:text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-xs md:text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 text-sm font-medium"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered micro SAAS solutions designed to streamline your business operations and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-center mb-2">
                          <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                            {service.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.link}
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your free trial today and experience the power of AI-driven automation.
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
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasServicesPage;