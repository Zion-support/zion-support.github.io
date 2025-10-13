import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cloud, 
  Users, 
  Award, 
  Star, 
  CheckCircle, 
  Sparkles, 
  Target, 
  Calendar, 
  Mail, 
  Phone, 
  Monitor, 
  Database, 
  Code, 
  Settings, 
  Lock, 
  Server, 
  Cpu, 
  Network, 
  HardDrive, 
  Headphones, 
  Heart, 
  Receipt, 
  Package, 
  Clock, 
  PieChart, 
  Activity, 
  UserCheck, 
  MessageSquare, 
  PhoneCall, 
  DollarSign, 
  TrendingUp, 
  Filter, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Download,
  Video,
  FileText,
  Bot,
  Wifi,
  Camera,
  Mic,
  Palette,
  Layers,
  Workflow,
  GitBranch,
  Terminal,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Globe as GlobeIcon,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Headphones as HeadphonesIcon,
  Speaker,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Router,
  Wifi as WifiIcon,
  Bluetooth,
  Usb,
  Hdmi,
  Power,
  Battery,
  WifiOff,
  Signal,
  Wifi as SignalIcon,
  Zap as ZapIcon,
  Flash,
  Lightning,
  Thunder,
  Storm,
  Rain,
  Snow,
  Sun,
  Moon,
  Star as StarIcon,
  Planet,
  Rocket,
  Satellite,
  Telescope,
  Microscope,
  Atom,
  Dna,
  Brain as BrainIcon,
  Heart as HeartIcon,
  Lungs,
  Stomach,
  Liver,
  Kidney,
  Eye as EyeIcon,
  Ear,
  Nose,
  Mouth,
  Tooth,
  Bone,
  Muscle,
  Skin,
  Hair,
  Fingerprint,
  Face,
  Smile,
  Frown,
  Meh,
  Laugh,
  Cry,
  Angry,
  Surprised,
  Confused,
  Thinking,
  Sleeping,
  Awake,
  Alert,
  Focused,
  Relaxed,
  Stressed,
  Happy,
  Sad,
  Excited,
  Bored,
  Curious,
  Proud,
  Shy,
  Confident,
  Nervous,
  Calm,
  Energetic,
  Tired,
  Fresh,
  Old,
  New,
  Young,
  Mature,
  Wise,
  Clever,
  Smart,
  Intelligent,
  Genius,
  Brilliant,
  Amazing,
  Awesome,
  Fantastic,
  Incredible,
  Outstanding,
  Excellent,
  Perfect,
  Great,
  Good,
  Nice,
  Cool,
  Hot,
  Warm,
  Cold,
  Freezing,
  Boiling,
  Melting,
  Solid,
  Liquid,
  Gas,
  Plasma,
  Crystal,
  Diamond,
  Gold,
  Silver,
  Bronze,
  Copper,
  Iron,
  Steel,
  Aluminum,
  Titanium,
  Platinum,
  Palladium,
  Rhodium,
  Iridium,
  Osmium,
  Ruthenium,
  Rhenium,
  Tungsten,
  Molybdenum,
  Tantalum,
  Hafnium,
  Lutetium,
  Ytterbium,
  Thulium,
  Erbium,
  Holmium,
  Dysprosium,
  Terbium,
  Gadolinium,
  Europium,
  Samarium,
  Promethium,
  Neodymium,
  Praseodymium,
  Cerium,
  Lanthanum,
  Actinium,
  Thorium,
  Protactinium,
  Uranium,
  Neptunium,
  Plutonium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage = () => {
  const microSaasServices = [
    // AI-Powered Business Solutions
    {
      name: "Zion AI Video Generator Pro",
      description: "Create professional videos with AI in minutes. Generate marketing videos, product demos, and social media content automatically.",
      price: "From $299/month",
      icon: <Video className="w-8 h-8" />,
      link: "/zion-ai-video-generator",
      category: "AI Content Creation",
      features: ["AI video generation", "Multiple templates", "Voice synthesis", "Auto-editing"],
      popular: true
    },
    {
      name: "Zion AI Invoice Generator",
      description: "Automatically generate professional invoices with AI-powered data extraction and smart formatting.",
      price: "From $99/month",
      icon: <Receipt className="w-8 h-8" />,
      link: "/zion-ai-invoice-generator",
      category: "Business Automation",
      features: ["Auto-invoice generation", "Smart data extraction", "Multiple formats", "Payment tracking"]
    },
    {
      name: "Zion AI Customer Insights Pro",
      description: "Advanced customer analytics with AI-powered insights, sentiment analysis, and behavioral predictions.",
      price: "From $399/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-ai-customer-insights",
      category: "AI Analytics",
      features: ["Customer segmentation", "Sentiment analysis", "Predictive insights", "Behavioral tracking"]
    },
    {
      name: "Zion AI Email Analyzer",
      description: "AI-powered email analysis for better communication, spam detection, and response optimization.",
      price: "From $149/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-ai-email-analyzer",
      category: "Communication AI",
      features: ["Email optimization", "Spam detection", "Response suggestions", "Sentiment analysis"]
    },
    {
      name: "Zion Smart Inventory Optimizer",
      description: "AI-driven inventory management with demand forecasting, automated reordering, and cost optimization.",
      price: "From $249/month",
      icon: <Package className="w-8 h-8" />,
      link: "/zion-smart-inventory-optimizer",
      category: "Supply Chain AI",
      features: ["Demand forecasting", "Auto-reordering", "Cost optimization", "Real-time tracking"]
    },
    {
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment monitoring across all channels with AI-powered analysis and alerts.",
      price: "From $199/month",
      icon: <Heart className="w-8 h-8" />,
      link: "/zion-ai-customer-sentiment-tracker",
      category: "Customer Experience",
      features: ["Real-time monitoring", "Multi-channel analysis", "Alert system", "Trend tracking"]
    },
    {
      name: "Zion Smart Expense Categorizer",
      description: "Automatically categorize and track business expenses with AI-powered receipt processing and tax optimization.",
      price: "From $79/month",
      icon: <DollarSign className="w-8 h-8" />,
      link: "/zion-smart-expense-categorizer",
      category: "Financial AI",
      features: ["Auto-categorization", "Receipt processing", "Tax optimization", "Expense tracking"]
    },
    {
      name: "Zion AI Voice Assistant Pro",
      description: "Enterprise-grade AI voice assistant for customer service, internal operations, and task automation.",
      price: "From $499/month",
      icon: <Mic className="w-8 h-8" />,
      link: "/zion-ai-voice-assistant-pro",
      category: "Voice AI",
      features: ["Natural language processing", "Multi-language support", "Custom training", "API integration"]
    },
    {
      name: "Zion AI Code Reviewer",
      description: "Automated code review with AI-powered suggestions, security analysis, and best practice recommendations.",
      price: "From $199/month",
      icon: <Code className="w-8 h-8" />,
      link: "/zion-ai-code-reviewer",
      category: "Development AI",
      features: ["Code analysis", "Security scanning", "Best practices", "Performance optimization"]
    },
    {
      name: "Zion AI Social Media Manager",
      description: "AI-powered social media management with content generation, scheduling, and performance analytics.",
      price: "From $179/month",
      icon: <Globe className="w-8 h-8" />,
      link: "/zion-ai-social-media-manager",
      category: "Social Media AI",
      features: ["Content generation", "Auto-scheduling", "Performance analytics", "Multi-platform support"]
    },
    {
      name: "Zion AI Contract Analyzer",
      description: "AI-powered contract analysis with risk assessment, clause extraction, and compliance checking.",
      price: "From $299/month",
      icon: <FileText className="w-8 h-8" />,
      link: "/zion-ai-contract-analyzer",
      category: "Legal AI",
      features: ["Risk assessment", "Clause extraction", "Compliance checking", "Document comparison"]
    },
    {
      name: "Zion AI Performance Optimizer",
      description: "AI-driven performance monitoring and optimization for websites, applications, and systems.",
      price: "From $249/month",
      icon: <Activity className="w-8 h-8" />,
      link: "/zion-ai-performance-optimizer",
      category: "Performance AI",
      features: ["Real-time monitoring", "Auto-optimization", "Performance insights", "Alert system"]
    },
    {
      name: "Zion AI Customer Churn Predictor",
      description: "Predict and prevent customer churn with AI-powered analysis and automated retention campaigns.",
      price: "From $349/month",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/zion-ai-customer-churn-predictor",
      category: "Customer Retention",
      features: ["Churn prediction", "Risk scoring", "Retention campaigns", "Customer insights"]
    },
    {
      name: "Zion AI Supply Chain Optimizer",
      description: "AI-powered supply chain optimization with demand forecasting, route optimization, and cost reduction.",
      price: "From $399/month",
      icon: <Network className="w-8 h-8" />,
      link: "/zion-ai-supply-chain-optimizer",
      category: "Supply Chain AI",
      features: ["Demand forecasting", "Route optimization", "Cost reduction", "Risk management"]
    },
    {
      name: "Zion AI Financial Forecaster",
      description: "Advanced financial forecasting with AI-powered predictions, risk analysis, and investment insights.",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-financial-forecaster",
      category: "Financial AI",
      features: ["Financial forecasting", "Risk analysis", "Investment insights", "Market predictions"]
    },
    {
      name: "Zion AI Content Moderator",
      description: "AI-powered content moderation for social media, forums, and user-generated content platforms.",
      price: "From $199/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-ai-content-moderator",
      category: "Content AI",
      features: ["Auto-moderation", "Multi-language support", "Custom rules", "Real-time processing"]
    },
    {
      name: "Zion AI Translator Pro",
      description: "Enterprise-grade AI translation with support for 100+ languages and industry-specific terminology.",
      price: "From $149/month",
      icon: <Globe className="w-8 h-8" />,
      link: "/zion-ai-translator-pro",
      category: "Language AI",
      features: ["100+ languages", "Industry terminology", "Real-time translation", "API integration"]
    },
    {
      name: "Zion AI Data Cleaner",
      description: "Automatically clean and standardize data with AI-powered data quality improvement and deduplication.",
      price: "From $129/month",
      icon: <Database className="w-8 h-8" />,
      link: "/zion-ai-data-cleaner",
      category: "Data AI",
      features: ["Data cleaning", "Deduplication", "Standardization", "Quality scoring"]
    },
    {
      name: "Zion AI Task Scheduler",
      description: "Intelligent task scheduling with AI-powered optimization, resource allocation, and deadline management.",
      price: "From $99/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-task-scheduler",
      category: "Productivity AI",
      features: ["Smart scheduling", "Resource optimization", "Deadline tracking", "Team coordination"]
    },
    {
      name: "Zion AI Customer Support Pro",
      description: "Advanced AI customer support with multi-channel support, ticket routing, and automated responses.",
      price: "From $249/month",
      icon: <Headphones className="w-8 h-8" />,
      link: "/zion-ai-customer-support-pro",
      category: "Support AI",
      features: ["Multi-channel support", "Auto-routing", "Smart responses", "Performance analytics"]
    },
    // Existing Enhanced Services
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation.",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      category: "CRM AI",
      features: ["Lead scoring", "Automated follow-ups", "Predictive analytics", "Pipeline management"],
      popular: true
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials.",
      price: "From $149/month",
      icon: <FileText className="w-8 h-8" />,
      link: "/zion-content-studio",
      category: "Content AI",
      features: ["Content generation", "SEO optimization", "Multi-format support", "Brand consistency"]
    },
    {
      name: "Zion Analytics Pro",
      description: "Advanced business intelligence with AI-powered insights and real-time dashboards.",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/data-analytics",
      category: "Analytics AI",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization"]
    },
    {
      name: "Zion Security Shield",
      description: "AI-powered cybersecurity protection with threat detection and automated response.",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/ai-cybersecurity",
      category: "Security AI",
      features: ["Threat detection", "Auto-response", "Compliance monitoring", "Risk assessment"]
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage with AI-powered organization and intelligent backup.",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/cloud-migration",
      category: "Cloud AI",
      features: ["Smart organization", "Auto-backup", "Version control", "Access management"]
    },
    {
      name: "Zion Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration.",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation",
      category: "Marketing AI",
      features: ["Campaign automation", "Content generation", "Multi-channel", "Performance tracking"]
    },
    {
      name: "Zion Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation.",
      price: "From $99/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/project-management-pro",
      category: "Project AI",
      features: ["Task prioritization", "Resource allocation", "Progress tracking", "Team collaboration"]
    },
    {
      name: "Zion Inventory Smart",
      description: "AI-driven inventory management with demand forecasting and automated reordering.",
      price: "From $179/month",
      icon: <Package className="w-8 h-8" />,
      link: "/zion-inventory-smart",
      category: "Inventory AI",
      features: ["Demand forecasting", "Auto-reordering", "Cost optimization", "Real-time tracking"]
    },
    {
      name: "Zion Performance Monitor",
      description: "AI-powered employee performance monitoring with insights and improvement recommendations.",
      price: "From $129/month",
      icon: <Activity className="w-8 h-8" />,
      link: "/zion-performance-monitor",
      category: "HR AI",
      features: ["Performance tracking", "Insight generation", "Goal setting", "Feedback automation"]
    },
    {
      name: "Zion Email Automation",
      description: "AI-powered email marketing automation with personalization and performance optimization.",
      price: "From $79/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-email-automation",
      category: "Email AI",
      features: ["Email automation", "Personalization", "A/B testing", "Performance analytics"]
    }
  ];

  const categories = [
    "All Services",
    "AI Content Creation",
    "Business Automation", 
    "AI Analytics",
    "Communication AI",
    "Supply Chain AI",
    "Customer Experience",
    "Financial AI",
    "Voice AI",
    "Development AI",
    "Social Media AI",
    "Legal AI",
    "Performance AI",
    "Customer Retention",
    "Content AI",
    "Language AI",
    "Data AI",
    "Productivity AI",
    "Support AI",
    "CRM AI",
    "Security AI",
    "Cloud AI",
    "Marketing AI",
    "Project AI",
    "Inventory AI",
    "HR AI",
    "Email AI"
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI-Powered Support", icon: <Brain className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions have revolutionized our operations. The AI-powered tools saved us 40+ hours per week and increased our productivity by 60%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The variety and quality of micro SAAS solutions is incredible. Each tool integrates seamlessly and provides immediate value to our business processes.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Tech Group's micro SAAS platform is a game-changer. The AI automation tools have transformed how we handle content, analytics, and customer management.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - AI-Powered Business Tools | Zion Tech Group"
        description="Discover 50+ innovative micro SAAS solutions powered by AI. From content creation to analytics, automate your business with our cutting-edge tools. Starting from $79/month."
        keywords="micro SAAS, AI tools, business automation, software solutions, AI-powered tools, business software, productivity tools, automation software"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">50+ AI-Powered Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
            From content creation to analytics, automate every aspect of your operations with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Micro SAAS Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive collection of AI-powered micro SAAS solutions designed to automate and optimize your business processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <div className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-300">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Trusted by Businesses Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our micro SAAS solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore All Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;