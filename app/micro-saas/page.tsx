import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Code, 
  Database, 
  Users, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Video,
  FileText,
  Mail,
  Calendar,
  Smartphone,
  Globe,
  Lock,
  Settings,
  Monitor,
  Headphones,
  Star,
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  Activity,
  Cpu,
  Wifi,
  Camera,
  Mic,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  PieChart,
  Layers,
  Workflow,
  Bot,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
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
  Trash2,
  Edit,
  Save,
  Send,
  Share,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  AlertTriangle,
  Info,
  HelpCircle,
  X,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Sidebar,
  Maximize2,
  Minimize2,
  ExternalLink,
  Link as LinkIcon,
  Bookmark,
  BookmarkCheck,
  Tag,
  Tags,
  Hash,
  AtSign,
  Hash as Hashtag,
  Percent,
  Slash,
  Backslash,
  ForwardSlash,
  QuestionMark,
  ExclamationMark,
  Period,
  Comma,
  Semicolon,
  Colon,
  Quote,
  Apostrophe,
  Parentheses,
  Brackets,
  Braces,
  LessThan,
  GreaterThan,
  Equal,
  Plus as PlusSign,
  Minus as MinusSign,
  Multiply,
  Divide,
  Infinity,
  Pi,
  Sigma,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Rho,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      title: "Zion AI Video Generator Pro",
      description: "Create professional videos in minutes with AI-powered video generation. Perfect for marketing, training, and social media content with automated voiceovers and animations.",
      icon: <Video className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["AI Video Creation", "Voice Synthesis", "Auto-editing", "Template Library", "HD Export", "Brand Integration"],
      category: "Content Creation",
      popular: true,
      link: "/zion-ai-video-generator",
      stats: "10,000+ videos created"
    },
    {
      title: "Zion AI Invoice Generator",
      description: "Automate invoice creation with AI-powered templates, smart calculations, and automated follow-ups. Integrates with accounting software and payment gateways.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "From $49/month",
      originalPrice: "$99/month",
      features: ["Auto Invoice Generation", "Payment Tracking", "Tax Calculations", "Multi-currency", "PDF Export", "Email Automation"],
      category: "Finance & Billing",
      popular: true,
      link: "/zion-ai-invoice-generator",
      stats: "50,000+ invoices generated"
    },
    {
      title: "Zion AI Customer Insights Pro",
      description: "Deep customer analytics with AI-powered insights, sentiment analysis, and predictive behavior modeling to boost customer satisfaction and retention.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Sentiment Analysis", "Behavior Prediction", "Churn Prevention", "Customer Segmentation", "Real-time Analytics", "ROI Tracking"],
      category: "Customer Analytics",
      popular: true,
      link: "/zion-ai-customer-insights",
      stats: "95% accuracy rate"
    },
    {
      title: "Zion AI Email Analyzer",
      description: "Intelligent email analysis with spam detection, sentiment scoring, and automated categorization. Perfect for customer service and marketing teams.",
      icon: <Mail className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "From $79/month",
      originalPrice: "$159/month",
      features: ["Spam Detection", "Sentiment Analysis", "Auto-categorization", "Priority Scoring", "Response Suggestions", "Analytics Dashboard"],
      category: "Email Management",
      link: "/zion-ai-email-analyzer",
      stats: "1M+ emails analyzed"
    },
    {
      title: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization for retail and e-commerce businesses.",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Demand Forecasting", "Auto Reordering", "Cost Optimization", "Multi-location", "Barcode Scanning", "Analytics Reports"],
      category: "Inventory Management",
      popular: true,
      link: "/zion-smart-inventory-optimizer",
      stats: "30% cost reduction"
    },
    {
      title: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment monitoring across all channels with automated alerts and actionable insights for customer success teams.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "From $129/month",
      originalPrice: "$259/month",
      features: ["Real-time Monitoring", "Multi-channel Analysis", "Automated Alerts", "Trend Analysis", "Team Collaboration", "Custom Dashboards"],
      category: "Customer Experience",
      link: "/zion-ai-customer-sentiment-tracker",
      stats: "24/7 monitoring"
    },
    {
      title: "Zion Smart Expense Categorizer",
      description: "Automated expense categorization and receipt processing with AI-powered OCR and smart categorization for accounting and finance teams.",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "From $89/month",
      originalPrice: "$179/month",
      features: ["OCR Receipt Processing", "Auto Categorization", "Tax Compliance", "Multi-currency", "Export Options", "Mobile App"],
      category: "Expense Management",
      link: "/zion-smart-expense-categorizer",
      stats: "99.5% accuracy"
    },
    {
      title: "Zion AI Voice Assistant Pro",
      description: "Advanced voice assistant for business operations with natural language processing, task automation, and multi-language support.",
      icon: <Mic className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["Voice Commands", "Task Automation", "Multi-language", "API Integration", "Custom Commands", "Analytics"],
      category: "Voice Technology",
      popular: true,
      link: "/zion-ai-voice-assistant-pro",
      stats: "50+ languages supported"
    },
    {
      title: "Zion AI Code Reviewer",
      description: "Automated code review with AI-powered analysis, security scanning, and performance optimization suggestions for development teams.",
      icon: <Code className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Code Analysis", "Security Scanning", "Performance Review", "Best Practices", "Team Collaboration", "CI/CD Integration"],
      category: "Development Tools",
      link: "/zion-ai-code-reviewer",
      stats: "1000+ code reviews daily"
    },
    {
      title: "Zion AI Social Media Manager",
      description: "Comprehensive social media management with AI-powered content creation, scheduling, and analytics across all major platforms.",
      icon: <Share className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      price: "From $159/month",
      originalPrice: "$319/month",
      features: ["Content Creation", "Auto Scheduling", "Multi-platform", "Analytics", "Hashtag Optimization", "Engagement Tracking"],
      category: "Social Media",
      popular: true,
      link: "/zion-ai-social-media-manager",
      stats: "500+ posts scheduled"
    },
    {
      title: "Zion AI Contract Analyzer",
      description: "Intelligent contract analysis with risk assessment, clause extraction, and compliance checking for legal and business teams.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      price: "From $299/month",
      originalPrice: "$599/month",
      features: ["Risk Assessment", "Clause Extraction", "Compliance Check", "Version Comparison", "Legal Database", "Team Collaboration"],
      category: "Legal Tech",
      link: "/zion-ai-contract-analyzer",
      stats: "10,000+ contracts analyzed"
    },
    {
      title: "Zion AI Performance Optimizer",
      description: "Website and application performance optimization with AI-powered analysis, automated fixes, and continuous monitoring.",
      icon: <Activity className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      price: "From $139/month",
      originalPrice: "$279/month",
      features: ["Performance Analysis", "Auto Optimization", "Real-time Monitoring", "Speed Testing", "Mobile Optimization", "SEO Integration"],
      category: "Performance",
      link: "/zion-ai-performance-optimizer",
      stats: "40% speed improvement"
    },
    {
      title: "Zion AI Customer Churn Predictor",
      description: "Predict and prevent customer churn with AI-powered analysis, early warning systems, and automated retention campaigns.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      price: "From $219/month",
      originalPrice: "$439/month",
      features: ["Churn Prediction", "Early Warning", "Retention Campaigns", "Customer Scoring", "Behavioral Analysis", "ROI Tracking"],
      category: "Customer Retention",
      popular: true,
      link: "/zion-ai-customer-churn-predictor",
      stats: "25% churn reduction"
    },
    {
      title: "Zion AI Supply Chain Optimizer",
      description: "End-to-end supply chain optimization with demand forecasting, route optimization, and risk management for manufacturing and logistics.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      price: "From $279/month",
      originalPrice: "$559/month",
      features: ["Demand Forecasting", "Route Optimization", "Risk Management", "Supplier Analysis", "Cost Optimization", "Real-time Tracking"],
      category: "Supply Chain",
      link: "/zion-ai-supply-chain-optimizer",
      stats: "20% cost savings"
    },
    {
      title: "Zion AI Financial Forecaster",
      description: "Advanced financial forecasting with AI-powered models, scenario planning, and automated reporting for finance and accounting teams.",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      price: "From $249/month",
      originalPrice: "$499/month",
      features: ["Financial Modeling", "Scenario Planning", "Risk Analysis", "Automated Reports", "Multi-currency", "Compliance"],
      category: "Financial Planning",
      link: "/zion-ai-financial-forecaster",
      stats: "90% accuracy rate"
    },
    {
      title: "Zion AI Content Moderator",
      description: "Automated content moderation with AI-powered detection of inappropriate content, spam, and policy violations across all platforms.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["Content Detection", "Spam Filtering", "Policy Enforcement", "Real-time Moderation", "Custom Rules", "Analytics"],
      category: "Content Moderation",
      link: "/zion-ai-content-moderator",
      stats: "99.9% accuracy"
    },
    {
      title: "Zion AI Translator Pro",
      description: "Professional translation service with AI-powered accuracy, context understanding, and support for 100+ languages with industry-specific terminology.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      price: "From $129/month",
      originalPrice: "$259/month",
      features: ["100+ Languages", "Context Understanding", "Industry Terms", "Real-time Translation", "Document Support", "API Integration"],
      category: "Translation",
      popular: true,
      link: "/zion-ai-translator-pro",
      stats: "100+ languages"
    },
    {
      title: "Zion AI Data Cleaner",
      description: "Automated data cleaning and validation with AI-powered error detection, duplicate removal, and data quality improvement.",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["Error Detection", "Duplicate Removal", "Data Validation", "Format Standardization", "Quality Scoring", "Batch Processing"],
      category: "Data Management",
      link: "/zion-ai-data-cleaner",
      stats: "1M+ records cleaned"
    },
    {
      title: "Zion AI Task Scheduler",
      description: "Intelligent task scheduling and project management with AI-powered optimization, resource allocation, and deadline management.",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      price: "From $119/month",
      originalPrice: "$239/month",
      features: ["Smart Scheduling", "Resource Optimization", "Deadline Management", "Team Collaboration", "Progress Tracking", "Automated Reminders"],
      category: "Project Management",
      link: "/zion-ai-task-scheduler",
      stats: "30% efficiency boost"
    },
    {
      title: "Zion AI Customer Support Pro",
      description: "Advanced customer support automation with AI-powered chatbots, ticket routing, and knowledge base management for 24/7 support.",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["AI Chatbots", "Ticket Routing", "Knowledge Base", "Multi-channel", "Sentiment Analysis", "Performance Analytics"],
      category: "Customer Support",
      popular: true,
      link: "/zion-ai-customer-support-pro",
      stats: "24/7 support"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length, color: "from-cyan-500 to-purple-500" },
    { name: "Content Creation", count: microSaasServices.filter(s => s.category === "Content Creation").length, color: "from-purple-500 to-pink-500" },
    { name: "Finance & Billing", count: microSaasServices.filter(s => s.category === "Finance & Billing").length, color: "from-green-500 to-emerald-500" },
    { name: "Customer Analytics", count: microSaasServices.filter(s => s.category === "Customer Analytics").length, color: "from-blue-500 to-cyan-500" },
    { name: "Email Management", count: microSaasServices.filter(s => s.category === "Email Management").length, color: "from-orange-500 to-red-500" },
    { name: "Inventory Management", count: microSaasServices.filter(s => s.category === "Inventory Management").length, color: "from-indigo-500 to-purple-500" },
    { name: "Customer Experience", count: microSaasServices.filter(s => s.category === "Customer Experience").length, color: "from-pink-500 to-rose-500" },
    { name: "Expense Management", count: microSaasServices.filter(s => s.category === "Expense Management").length, color: "from-teal-500 to-cyan-500" },
    { name: "Voice Technology", count: microSaasServices.filter(s => s.category === "Voice Technology").length, color: "from-violet-500 to-purple-500" },
    { name: "Development Tools", count: microSaasServices.filter(s => s.category === "Development Tools").length, color: "from-yellow-500 to-orange-500" },
    { name: "Social Media", count: microSaasServices.filter(s => s.category === "Social Media").length, color: "from-cyan-500 to-blue-500" },
    { name: "Legal Tech", count: microSaasServices.filter(s => s.category === "Legal Tech").length, color: "from-slate-500 to-gray-500" },
    { name: "Performance", count: microSaasServices.filter(s => s.category === "Performance").length, color: "from-emerald-500 to-green-500" },
    { name: "Customer Retention", count: microSaasServices.filter(s => s.category === "Customer Retention").length, color: "from-red-500 to-pink-500" },
    { name: "Supply Chain", count: microSaasServices.filter(s => s.category === "Supply Chain").length, color: "from-amber-500 to-yellow-500" },
    { name: "Financial Planning", count: microSaasServices.filter(s => s.category === "Financial Planning").length, color: "from-green-500 to-teal-500" },
    { name: "Content Moderation", count: microSaasServices.filter(s => s.category === "Content Moderation").length, color: "from-red-500 to-orange-500" },
    { name: "Translation", count: microSaasServices.filter(s => s.category === "Translation").length, color: "from-blue-500 to-indigo-500" },
    { name: "Data Management", count: microSaasServices.filter(s => s.category === "Data Management").length, color: "from-purple-500 to-violet-500" },
    { name: "Project Management", count: microSaasServices.filter(s => s.category === "Project Management").length, color: "from-cyan-500 to-teal-500" },
    { name: "Customer Support", count: microSaasServices.filter(s => s.category === "Customer Support").length, color: "from-emerald-500 to-green-500" }
  ];

  const benefits = [
    {
      title: "Instant Deployment",
      description: "Get started in minutes with our ready-to-use micro SAAS solutions",
      icon: <Zap className="w-6 h-6" />,
      stat: "5 min setup"
    },
    {
      title: "Cost Effective",
      description: "Affordable pricing with no hidden fees or long-term contracts",
      icon: <DollarSign className="w-6 h-6" />,
      stat: "50% savings"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team",
      icon: <Headphones className="w-6 h-6" />,
      stat: "24/7 available"
    },
    {
      title: "Scalable Solutions",
      description: "Grow with your business with our scalable micro SAAS platform",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "Unlimited scale"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions including AI video generation, invoice automation, customer insights, and more. Transform your business with ready-to-use tools." />
        <meta name="keywords" content="micro SAAS, AI tools, business automation, video generation, invoice automation, customer analytics, inventory management, social media management" />
      </Helmet>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">20+ Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              Micro SAAS Solutions
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
            Ready-to-use tools that deliver instant value and scale with your business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              Watch Demo
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions are designed for immediate deployment and maximum impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Micro SAAS Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered micro SAAS solutions designed to solve specific business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
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
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="text-center mb-4">
                    <div className="text-cyan-400 text-sm font-medium">{service.stats}</div>
                  </div>
                  
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            {/* Contact Details */}
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
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;