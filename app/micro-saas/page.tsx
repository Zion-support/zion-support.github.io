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
  Code,
  Database,
  Cpu,
  Network,
  FileText,
  PieChart,
  Activity,
  MessageSquare,
  Settings,
  Lock,
  Server,
  HardDrive,
  Headphones,
  Heart,
  Receipt,
  Package,
  Clock,
  TrendingUp,
  DollarSign,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Smartphone,
  MapPin,
  Wifi,
  Bot,
  UserCheck,
  PhoneCall,
  EmailIcon,
  CalendarIcon,
  TrendingUpIcon,
  Filter as FilterIcon,
  Search as SearchIcon,
  Plus as PlusIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  Eye as EyeIcon,
  Download as DownloadIcon
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const microSaasServices = [
    // AI-Powered Business Solutions
    {
      name: "Zion AI Video Generator Pro",
      description: "Create professional videos with AI-powered editing, voice synthesis, and automated content generation",
      price: "From $149/month",
      icon: <Monitor className="w-8 h-8" />,
      link: "/zion-ai-video-generator",
      category: "AI Content",
      features: ["AI video editing", "Voice synthesis", "Auto-captioning", "Multi-format export"],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Zion AI Invoice Generator",
      description: "Automated invoice creation with AI-powered pricing optimization and payment tracking",
      price: "From $99/month",
      icon: <Receipt className="w-8 h-8" />,
      link: "/zion-ai-invoice-generator",
      category: "AI Finance",
      features: ["Auto-invoice generation", "Payment tracking", "Tax calculations", "Multi-currency support"],
      popular: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Zion AI Customer Insights Pro",
      description: "Advanced customer analytics with AI-powered sentiment analysis and behavior prediction",
      price: "From $299/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-customer-insights",
      category: "AI Analytics",
      features: ["Sentiment analysis", "Behavior prediction", "Customer segmentation", "Churn prevention"],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Zion AI Email Analyzer Pro",
      description: "AI-powered email analysis for productivity, sentiment tracking, and response optimization",
      price: "From $79/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-ai-email-analyzer",
      category: "AI Communication",
      features: ["Email sentiment analysis", "Response suggestions", "Productivity metrics", "Spam detection"],
      popular: false,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting and automated reordering",
      price: "From $199/month",
      icon: <Package className="w-8 h-8" />,
      link: "/zion-smart-inventory-optimizer",
      category: "AI Operations",
      features: ["Demand forecasting", "Auto-reordering", "Stock optimization", "Cost analysis"],
      popular: true,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment monitoring across all channels with AI-powered insights",
      price: "From $149/month",
      icon: <Heart className="w-8 h-8" />,
      link: "/zion-ai-customer-sentiment-tracker",
      category: "AI Analytics",
      features: ["Real-time monitoring", "Multi-channel tracking", "Sentiment alerts", "Trend analysis"],
      popular: false,
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Zion Smart Expense Categorizer",
      description: "AI-powered expense categorization and financial reporting for businesses",
      price: "From $59/month",
      icon: <DollarSign className="w-8 h-8" />,
      link: "/zion-smart-expense-categorizer",
      category: "AI Finance",
      features: ["Auto-categorization", "Receipt scanning", "Tax preparation", "Budget tracking"],
      popular: false,
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Zion AI Voice Assistant Pro",
      description: "Advanced voice assistant for business operations with custom commands and integrations",
      price: "From $199/month",
      icon: <Headphones className="w-8 h-8" />,
      link: "/zion-ai-voice-assistant-pro",
      category: "AI Automation",
      features: ["Custom commands", "Multi-language support", "Business integrations", "Voice analytics"],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Zion AI Code Reviewer Pro",
      description: "AI-powered code review and quality assurance with automated testing suggestions",
      price: "From $299/month",
      icon: <Code className="w-8 h-8" />,
      link: "/zion-ai-code-reviewer",
      category: "AI Development",
      features: ["Code quality analysis", "Security scanning", "Performance optimization", "Best practices"],
      popular: false,
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "Zion AI Social Media Manager",
      description: "AI-powered social media management with content generation and scheduling",
      price: "From $149/month",
      icon: <MessageSquare className="w-8 h-8" />,
      link: "/zion-ai-social-media-manager",
      category: "AI Marketing",
      features: ["Content generation", "Auto-scheduling", "Engagement tracking", "Trend analysis"],
      popular: true,
      color: "from-rose-500 to-pink-500"
    },
    {
      name: "Zion AI Contract Analyzer",
      description: "AI-powered contract analysis with risk assessment and compliance checking",
      price: "From $399/month",
      icon: <FileText className="w-8 h-8" />,
      link: "/zion-ai-contract-analyzer",
      category: "AI Legal",
      features: ["Risk assessment", "Compliance checking", "Clause analysis", "Automated summaries"],
      popular: false,
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Zion AI Performance Optimizer",
      description: "AI-powered website and application performance optimization with automated fixes",
      price: "From $199/month",
      icon: <Activity className="w-8 h-8" />,
      link: "/zion-ai-performance-optimizer",
      category: "AI Development",
      features: ["Performance monitoring", "Auto-optimization", "Speed analysis", "Resource optimization"],
      popular: true,
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Zion AI Customer Churn Predictor",
      description: "Predict customer churn with AI-powered analytics and retention strategies",
      price: "From $249/month",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/zion-ai-customer-churn-predictor",
      category: "AI Analytics",
      features: ["Churn prediction", "Retention strategies", "Risk scoring", "Intervention alerts"],
      popular: false,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Zion AI Supply Chain Optimizer",
      description: "AI-powered supply chain optimization with demand forecasting and logistics planning",
      price: "From $499/month",
      icon: <Network className="w-8 h-8" />,
      link: "/zion-ai-supply-chain-optimizer",
      category: "AI Operations",
      features: ["Demand forecasting", "Route optimization", "Inventory planning", "Cost reduction"],
      popular: true,
      color: "from-slate-500 to-gray-500"
    },
    {
      name: "Zion AI Financial Forecaster",
      description: "AI-powered financial forecasting with market analysis and investment recommendations",
      price: "From $399/month",
      icon: <PieChart className="w-8 h-8" />,
      link: "/zion-ai-financial-forecaster",
      category: "AI Finance",
      features: ["Financial forecasting", "Market analysis", "Investment insights", "Risk assessment"],
      popular: false,
      color: "from-yellow-500 to-amber-500"
    },
    {
      name: "Zion AI Content Moderator",
      description: "AI-powered content moderation with automated filtering and compliance checking",
      price: "From $199/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-ai-content-moderator",
      category: "AI Security",
      features: ["Content filtering", "Compliance checking", "Automated moderation", "Custom rules"],
      popular: true,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Zion AI Translator Pro",
      description: "Advanced AI translation service with context-aware translations and real-time processing",
      price: "From $149/month",
      icon: <Globe className="w-8 h-8" />,
      link: "/zion-ai-translator-pro",
      category: "AI Communication",
      features: ["100+ languages", "Context-aware translation", "Real-time processing", "Document translation"],
      popular: false,
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Zion AI Data Cleaner Pro",
      description: "AI-powered data cleaning and validation with automated error detection and correction",
      price: "From $179/month",
      icon: <Database className="w-8 h-8" />,
      link: "/zion-ai-data-cleaner",
      category: "AI Data",
      features: ["Data validation", "Error detection", "Auto-correction", "Quality metrics"],
      popular: true,
      color: "from-green-500 to-lime-500"
    },
    {
      name: "Zion AI Task Scheduler Pro",
      description: "AI-powered task scheduling and project management with intelligent resource allocation",
      price: "From $129/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-task-scheduler",
      category: "AI Productivity",
      features: ["Smart scheduling", "Resource allocation", "Deadline optimization", "Team coordination"],
      popular: false,
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Zion AI Customer Support Pro",
      description: "Advanced AI customer support with chatbot integration and ticket management",
      price: "From $299/month",
      icon: <UserCheck className="w-8 h-8" />,
      link: "/zion-ai-customer-support-pro",
      category: "AI Support",
      features: ["AI chatbot", "Ticket management", "Knowledge base", "Multi-channel support"],
      popular: true,
      color: "from-cyan-500 to-teal-500"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "AI Content", count: microSaasServices.filter(s => s.category === "AI Content").length },
    { name: "AI Analytics", count: microSaasServices.filter(s => s.category === "AI Analytics").length },
    { name: "AI Finance", count: microSaasServices.filter(s => s.category === "AI Finance").length },
    { name: "AI Marketing", count: microSaasServices.filter(s => s.category === "AI Marketing").length },
    { name: "AI Development", count: microSaasServices.filter(s => s.category === "AI Development").length },
    { name: "AI Operations", count: microSaasServices.filter(s => s.category === "AI Operations").length },
    { name: "AI Communication", count: microSaasServices.filter(s => s.category === "AI Communication").length },
    { name: "AI Security", count: microSaasServices.filter(s => s.category === "AI Security").length },
    { name: "AI Data", count: microSaasServices.filter(s => s.category === "AI Data").length },
    { name: "AI Productivity", count: microSaasServices.filter(s => s.category === "AI Productivity").length },
    { name: "AI Support", count: microSaasServices.filter(s => s.category === "AI Support").length },
    { name: "AI Legal", count: microSaasServices.filter(s => s.category === "AI Legal").length }
  ];

  const stats = [
    { number: "20+", label: "AI-Powered Solutions", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - AI-Powered Business Tools | Zion Tech Group</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of AI-powered micro SAAS solutions. From content generation to analytics, we have the tools to transform your business operations."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI tools, business automation, software solutions, productivity tools, AI analytics, content generation, business intelligence"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">20+ AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive collection of AI-powered micro SAAS solutions. 
              From content generation to advanced analytics, we have the tools to accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Get Started Today
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Watch Demo
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-purple-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                      {service.category}
                    </span>
                    <Link
                      to={service.link}
                      className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <ResponsiveContainer className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-purple-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-purple-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore All Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;