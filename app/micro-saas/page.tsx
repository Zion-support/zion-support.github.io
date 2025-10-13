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
  Mail,
  Smartphone,
  Globe,
  CheckCircle,
  Star,
  Award,
  Rocket,
  FileText,
  Bot,
  Settings,
  Monitor,
  Lock,
  Server,
  Cpu,
  Network,
  HardDrive,
  Phone,
  Laptop,
  Headphones,
  Calendar,
  DollarSign,
  PieChart,
  Activity,
  Layers,
  Workflow,
  MessageSquare,
  Video,
  Image,
  Music,
  Camera,
  Mic,
  Palette,
  Wrench,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Eye,
  Heart,
  ThumbsUp,
  Clock,
  MapPin,
  PhoneCall,
  Mail as MailIcon,
  Globe as GlobeIcon,
  Building,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
  Home,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Coffee,
  Utensils,
  Gamepad2,
  Book,
  Newspaper,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FileSpreadsheet,
  FileText as FileTextIcon,
  FilePdf,
  FileZip,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Cut,
  Paste,
  Save,
  Undo,
  Redo,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Move,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  Divide,
  Equal,
  Percent,
  Hash,
  AtSign,
  DollarSign as Dollar,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  CreditCard as Credit,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  TrendingUp as Trending,
  TrendingDown,
  BarChart,
  LineChart,
  PieChart as Pie,
  Scatter,
  AreaChart,
  Candlestick,
  Gauge,
  Thermometer,
  Droplet,
  Wind,
  Sun,
  Moon,
  Cloud as CloudIcon,
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
  Compass,
  Map,
  Navigation,
  Flag,
  Anchor,
  Sailboat,
  Anchor as AnchorIcon,
  Sailboat as SailboatIcon,
  Anchor as AnchorIcon2,
  Sailboat as SailboatIcon2,
  Anchor as AnchorIcon3,
  Sailboat as SailboatIcon3,
  Anchor as AnchorIcon4,
  Sailboat as SailboatIcon4,
  Anchor as AnchorIcon5,
  Sailboat as SailboatIcon5,
  Anchor as AnchorIcon6,
  Sailboat as SailboatIcon6,
  Anchor as AnchorIcon7,
  Sailboat as SailboatIcon7,
  Anchor as AnchorIcon8,
  Sailboat as SailboatIcon8,
  Anchor as AnchorIcon9,
  Sailboat as SailboatIcon9,
  Anchor as AnchorIcon10,
  Sailboat as SailboatIcon10
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      title: "Zion AI Video Generator Pro",
      description: "Create professional videos in minutes with AI-powered video generation. Perfect for marketing, training, and social media content.",
      icon: <Video className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["AI Video Creation", "Multiple Templates", "Voice Synthesis", "Auto-editing", "HD Export", "Brand Integration"],
      category: "Content Creation",
      popular: true,
      link: "/zion-ai-video-generator"
    },
    {
      title: "Zion AI Invoice Generator",
      description: "Automatically generate professional invoices with AI-powered data extraction and smart categorization. Save hours on billing.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "From $49/month",
      originalPrice: "$99/month",
      features: ["Auto Invoice Generation", "Smart Categorization", "Multi-currency", "PDF Export", "Payment Tracking", "Tax Calculation"],
      category: "Business Tools",
      popular: true,
      link: "/zion-ai-invoice-generator"
    },
    {
      title: "Zion AI Customer Insights Pro",
      description: "Deep customer analytics with AI-powered sentiment analysis, behavior tracking, and predictive customer lifetime value.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Sentiment Analysis", "Behavior Tracking", "Predictive Analytics", "Customer Segmentation", "Churn Prediction", "ROI Analysis"],
      category: "Analytics",
      popular: true,
      link: "/zion-ai-customer-insights"
    },
    {
      title: "Zion AI Email Analyzer",
      description: "Intelligent email analysis with spam detection, sentiment analysis, and automated response suggestions for better communication.",
      icon: <Mail className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "From $79/month",
      originalPrice: "$159/month",
      features: ["Spam Detection", "Sentiment Analysis", "Auto Responses", "Email Templates", "Priority Scoring", "Team Collaboration"],
      category: "Communication",
      link: "/zion-ai-email-analyzer"
    },
    {
      title: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization for retail and e-commerce.",
      icon: <Package className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Demand Forecasting", "Auto Reordering", "Cost Optimization", "Multi-location", "Supplier Management", "Analytics Dashboard"],
      category: "Inventory Management",
      popular: true,
      link: "/zion-smart-inventory-optimizer"
    },
    {
      title: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment monitoring across all channels with automated alerts and response recommendations.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "From $89/month",
      originalPrice: "$179/month",
      features: ["Real-time Monitoring", "Multi-channel Tracking", "Automated Alerts", "Response Suggestions", "Trend Analysis", "Team Notifications"],
      category: "Customer Experience",
      link: "/zion-ai-customer-sentiment-tracker"
    },
    {
      title: "Zion Smart Expense Categorizer",
      description: "Automatically categorize and track business expenses with AI-powered receipt scanning and tax optimization.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      price: "From $69/month",
      originalPrice: "$139/month",
      features: ["Receipt Scanning", "Auto Categorization", "Tax Optimization", "Expense Reports", "Receipt Storage", "Integration APIs"],
      category: "Finance",
      link: "/zion-smart-expense-categorizer"
    },
    {
      title: "Zion AI Voice Assistant Pro",
      description: "Advanced voice assistant for business operations with custom commands, integrations, and multi-language support.",
      icon: <Mic className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      price: "From $129/month",
      originalPrice: "$259/month",
      features: ["Custom Commands", "Multi-language", "API Integrations", "Voice Analytics", "Team Management", "Custom Training"],
      category: "Voice Technology",
      popular: true,
      link: "/zion-ai-voice-assistant-pro"
    },
    {
      title: "Zion AI Code Reviewer",
      description: "Automated code review with security analysis, performance optimization suggestions, and best practice recommendations.",
      icon: <Code className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["Security Analysis", "Performance Review", "Best Practices", "Bug Detection", "Code Quality", "Team Collaboration"],
      category: "Development",
      link: "/zion-ai-code-reviewer"
    },
    {
      title: "Zion AI Social Media Manager",
      description: "AI-powered social media management with content generation, optimal posting times, and engagement analytics.",
      icon: <Share className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "From $119/month",
      originalPrice: "$239/month",
      features: ["Content Generation", "Optimal Timing", "Engagement Analytics", "Multi-platform", "Hashtag Optimization", "Competitor Analysis"],
      category: "Social Media",
      link: "/zion-ai-social-media-manager"
    },
    {
      title: "Zion AI Contract Analyzer",
      description: "Intelligent contract analysis with risk assessment, compliance checking, and automated clause suggestions.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["Risk Assessment", "Compliance Checking", "Clause Suggestions", "Contract Templates", "Version Control", "Legal Database"],
      category: "Legal Tech",
      link: "/zion-ai-contract-analyzer"
    },
    {
      title: "Zion AI Performance Optimizer",
      description: "Website and application performance optimization with AI-powered analysis and automated improvements.",
      icon: <Activity className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "From $89/month",
      originalPrice: "$179/month",
      features: ["Performance Analysis", "Auto Optimization", "Speed Monitoring", "Core Web Vitals", "Mobile Optimization", "CDN Integration"],
      category: "Performance",
      link: "/zion-ai-performance-optimizer"
    },
    {
      title: "Zion AI Customer Churn Predictor",
      description: "Predict and prevent customer churn with AI-powered analysis and automated retention campaigns.",
      icon: <TrendingDown className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      price: "From $159/month",
      originalPrice: "$319/month",
      features: ["Churn Prediction", "Risk Scoring", "Retention Campaigns", "Customer Segmentation", "Early Warning", "ROI Tracking"],
      category: "Customer Retention",
      popular: true,
      link: "/zion-ai-customer-churn-predictor"
    },
    {
      title: "Zion AI Supply Chain Optimizer",
      description: "Optimize supply chain operations with AI-powered demand forecasting, route optimization, and cost analysis.",
      icon: <Truck className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      price: "From $229/month",
      originalPrice: "$459/month",
      features: ["Demand Forecasting", "Route Optimization", "Cost Analysis", "Supplier Management", "Risk Assessment", "Sustainability Tracking"],
      category: "Supply Chain",
      link: "/zion-ai-supply-chain-optimizer"
    },
    {
      title: "Zion AI Financial Forecaster",
      description: "Advanced financial forecasting with AI-powered market analysis, budget planning, and investment recommendations.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Market Analysis", "Budget Planning", "Investment Advice", "Risk Assessment", "Scenario Planning", "Compliance Reporting"],
      category: "Finance",
      link: "/zion-ai-financial-forecaster"
    },
    {
      title: "Zion AI Content Moderator",
      description: "Automated content moderation with AI-powered detection of inappropriate content, spam, and policy violations.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "From $79/month",
      originalPrice: "$159/month",
      features: ["Content Detection", "Spam Filtering", "Policy Enforcement", "Multi-language", "Custom Rules", "Team Dashboard"],
      category: "Content Moderation",
      link: "/zion-ai-content-moderator"
    },
    {
      title: "Zion AI Translator Pro",
      description: "Advanced translation service with AI-powered accuracy, context understanding, and real-time translation capabilities.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      price: "From $59/month",
      originalPrice: "$119/month",
      features: ["100+ Languages", "Context Understanding", "Real-time Translation", "Document Translation", "Voice Translation", "API Integration"],
      category: "Translation",
      link: "/zion-ai-translator-pro"
    },
    {
      title: "Zion AI Data Cleaner",
      description: "Automated data cleaning and validation with AI-powered error detection, deduplication, and data quality scoring.",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      price: "From $89/month",
      originalPrice: "$179/month",
      features: ["Error Detection", "Data Deduplication", "Quality Scoring", "Auto Correction", "Data Validation", "Export Options"],
      category: "Data Management",
      link: "/zion-ai-data-cleaner"
    },
    {
      title: "Zion AI Task Scheduler",
      description: "Intelligent task scheduling with AI-powered optimization, resource allocation, and deadline management.",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "From $69/month",
      originalPrice: "$139/month",
      features: ["Smart Scheduling", "Resource Allocation", "Deadline Management", "Team Coordination", "Priority Optimization", "Progress Tracking"],
      category: "Project Management",
      link: "/zion-ai-task-scheduler"
    },
    {
      title: "Zion AI Customer Support Pro",
      description: "Advanced customer support automation with AI-powered ticket routing, response generation, and escalation management.",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Smart Routing", "Auto Responses", "Escalation Management", "Knowledge Base", "Multi-channel", "Analytics Dashboard"],
      category: "Customer Support",
      popular: true,
      link: "/zion-ai-customer-support-pro"
    },
    {
      title: "Zion AI Analytics Dashboard Pro",
      description: "Comprehensive business analytics with AI-powered insights, custom dashboards, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["Custom Dashboards", "AI Insights", "Automated Reports", "Real-time Data", "Data Visualization", "Team Collaboration"],
      category: "Analytics",
      popular: true,
      link: "/zion-analytics-pro"
    },
    {
      title: "Zion AI Security Shield Pro",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and compliance monitoring.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      price: "From $299/month",
      originalPrice: "$599/month",
      features: ["Threat Detection", "Automated Response", "Compliance Monitoring", "24/7 Protection", "Incident Response", "Security Training"],
      category: "Cybersecurity",
      popular: true,
      link: "/zion-security-shield-pro"
    },
    {
      title: "Zion AI Cloud Vault Pro",
      description: "Secure cloud storage with AI-powered organization, automatic backup, and intelligent file management.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["AI Organization", "Auto Backup", "File Management", "Collaboration", "Version Control", "Security Encryption"],
      category: "Cloud Storage",
      popular: true,
      link: "/zion-cloud-vault-pro"
    },
    {
      title: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered lead scoring, sales forecasting, and automation.",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automation", "Pipeline Management", "Customer Insights", "Team Collaboration"],
      category: "CRM",
      popular: true,
      link: "/zion-ai-crm-pro"
    },
    {
      title: "Zion AI Marketing Automation Pro",
      description: "Complete marketing automation with AI-powered campaigns, personalization, and multi-channel orchestration.",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Campaign Automation", "Personalization", "Multi-channel", "Lead Nurturing", "A/B Testing", "Analytics"],
      category: "Marketing",
      popular: true,
      link: "/zion-ai-marketing-automation-pro"
    },
    {
      title: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and progress tracking.",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["Task Prioritization", "Resource Allocation", "Progress Tracking", "Team Collaboration", "Risk Management", "Reporting"],
      category: "Project Management",
      popular: true,
      link: "/zion-ai-project-manager-pro"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Content Creation", count: microSaasServices.filter(s => s.category === "Content Creation").length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Business Tools", count: microSaasServices.filter(s => s.category === "Business Tools").length },
    { name: "Communication", count: microSaasServices.filter(s => s.category === "Communication").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Development", count: microSaasServices.filter(s => s.category === "Development").length },
    { name: "Cybersecurity", count: microSaasServices.filter(s => s.category === "Cybersecurity").length }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions including AI video generation, invoice automation, customer insights, and more. Transform your business with intelligent tools." />
        <meta name="keywords" content="micro SAAS, business tools, AI automation, video generation, invoice automation, customer insights, inventory management, expense tracking" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
            From content creation to analytics, we provide intelligent tools that drive growth and efficiency.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SAAS solutions and start transforming your business today. 
              All solutions come with 24/7 support and 30-day money-back guarantee.
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;