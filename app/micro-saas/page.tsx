import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Mail, 
  Smartphone, 
  Globe, 
  Star, 
  CheckCircle, 
  Sparkles,
  Target,
  FileText,
  Bot,
  Cloud,
  Database,
  Settings,
  Monitor,
  Lock,
  Server,
  Cpu,
  Network,
  HardDrive,
  Smartphone as Phone,
  Laptop,
  Headphones,
  Award,
  Rocket,
  TrendingUp,
  Calendar,
  MessageSquare,
  Image,
  Video,
  Music,
  Palette,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Eye,
  Heart,
  ThumbsUp,
  Clock,
  DollarSign,
  Percent,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Play,
  Pause,
  Stop,
  RefreshCw,
  RotateCcw,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Maximize,
  Minimize,
  Move,
  Copy,
  Scissors,
  Clipboard,
  Bookmark,
  Tag,
  Flag,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalLow,
  SignalZero,
  SignalHigh,
  SignalMedium
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      id: 'zion-ai-video-generator',
      name: 'Zion AI Video Generator Pro',
      description: 'Create professional videos with AI-powered editing, voice synthesis, and automated content generation. Perfect for marketing, training, and social media.',
      icon: <Video className="w-8 h-8" />,
      price: 'Starting at $199/month',
      originalPrice: '$399/month',
      features: ['AI Video Creation', 'Voice Synthesis', 'Auto Editing', 'Template Library', 'HD Export', 'Brand Integration'],
      category: 'AI Video',
      popular: true,
      link: '/zion-ai-video-generator',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'zion-ai-invoice-generator',
      name: 'Zion AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered data extraction, smart categorization, and seamless accounting integration.',
      icon: <FileText className="w-8 h-8" />,
      price: 'Starting at $99/month',
      originalPrice: '$199/month',
      features: ['Auto Invoice Creation', 'Data Extraction', 'Smart Categorization', 'Accounting Integration', 'Multi-currency', 'PDF Export'],
      category: 'AI Finance',
      popular: true,
      link: '/zion-ai-invoice-generator',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'zion-ai-customer-insights',
      name: 'Zion AI Customer Insights Pro',
      description: 'Advanced customer analytics with behavioral insights, churn prediction, and personalized recommendations for better customer retention.',
      icon: <Users className="w-8 h-8" />,
      price: 'Starting at $299/month',
      originalPrice: '$599/month',
      features: ['Behavioral Analytics', 'Churn Prediction', 'Personalized Recommendations', 'Customer Segmentation', 'Real-time Insights', 'ROI Tracking'],
      category: 'AI Analytics',
      popular: true,
      link: '/zion-ai-customer-insights',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'zion-ai-email-analyzer',
      name: 'Zion AI Email Analyzer Pro',
      description: 'Intelligent email analysis with sentiment detection, spam filtering, and automated response suggestions for better communication.',
      icon: <Mail className="w-8 h-8" />,
      price: 'Starting at $149/month',
      originalPrice: '$299/month',
      features: ['Sentiment Analysis', 'Spam Detection', 'Auto Response', 'Email Classification', 'Priority Scoring', 'Team Collaboration'],
      category: 'AI Communication',
      link: '/zion-ai-email-analyzer',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'zion-smart-inventory-optimizer',
      name: 'Zion Smart Inventory Optimizer',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and cost optimization for retail and e-commerce.',
      icon: <Package className="w-8 h-8" />,
      price: 'Starting at $249/month',
      originalPrice: '$499/month',
      features: ['Demand Forecasting', 'Auto Reordering', 'Cost Optimization', 'Multi-location', 'Supplier Management', 'Analytics Dashboard'],
      category: 'AI Inventory',
      popular: true,
      link: '/zion-smart-inventory-optimizer',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'zion-ai-customer-sentiment-tracker',
      name: 'Zion AI Customer Sentiment Tracker',
      description: 'Real-time customer sentiment monitoring across all channels with automated alerts and actionable insights for customer success teams.',
      icon: <Heart className="w-8 h-8" />,
      price: 'Starting at $179/month',
      originalPrice: '$359/month',
      features: ['Real-time Monitoring', 'Multi-channel Analysis', 'Automated Alerts', 'Sentiment Trends', 'Actionable Insights', 'Team Notifications'],
      category: 'AI Sentiment',
      link: '/zion-ai-customer-sentiment-tracker',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'zion-smart-expense-categorizer',
      name: 'Zion Smart Expense Categorizer',
      description: 'AI-powered expense categorization and tracking with receipt scanning, tax optimization, and automated reporting for businesses.',
      icon: <DollarSign className="w-8 h-8" />,
      price: 'Starting at $129/month',
      originalPrice: '$259/month',
      features: ['Receipt Scanning', 'Auto Categorization', 'Tax Optimization', 'Expense Reports', 'Budget Tracking', 'Mobile App'],
      category: 'AI Finance',
      link: '/zion-smart-expense-categorizer',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'zion-ai-voice-assistant-pro',
      name: 'Zion AI Voice Assistant Pro',
      description: 'Advanced voice assistant with natural language processing, multi-language support, and custom voice training for business applications.',
      icon: <Mic className="w-8 h-8" />,
      price: 'Starting at $199/month',
      originalPrice: '$399/month',
      features: ['Natural Language Processing', 'Multi-language Support', 'Custom Voice Training', 'API Integration', 'Voice Commands', 'Analytics'],
      category: 'AI Voice',
      popular: true,
      link: '/zion-ai-voice-assistant-pro',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'zion-ai-code-reviewer',
      name: 'Zion AI Code Reviewer Pro',
      description: 'Intelligent code review with automated bug detection, security analysis, and performance optimization suggestions for development teams.',
      icon: <Code className="w-8 h-8" />,
      price: 'Starting at $159/month',
      originalPrice: '$319/month',
      features: ['Automated Code Review', 'Bug Detection', 'Security Analysis', 'Performance Optimization', 'Code Quality Metrics', 'Team Collaboration'],
      category: 'AI Development',
      link: '/zion-ai-code-reviewer',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'zion-ai-social-media-manager',
      name: 'Zion AI Social Media Manager',
      description: 'AI-powered social media management with content generation, optimal posting times, and automated engagement for all major platforms.',
      icon: <Share className="w-8 h-8" />,
      price: 'Starting at $179/month',
      originalPrice: '$359/month',
      features: ['Content Generation', 'Optimal Posting Times', 'Automated Engagement', 'Multi-platform', 'Analytics Dashboard', 'Brand Voice Training'],
      category: 'AI Social Media',
      popular: true,
      link: '/zion-ai-social-media-manager',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'zion-ai-contract-analyzer',
      name: 'Zion AI Contract Analyzer Pro',
      description: 'Intelligent contract analysis with risk assessment, clause extraction, and automated compliance checking for legal teams.',
      icon: <FileText className="w-8 h-8" />,
      price: 'Starting at $299/month',
      originalPrice: '$599/month',
      features: ['Risk Assessment', 'Clause Extraction', 'Compliance Checking', 'Contract Comparison', 'Legal Templates', 'Team Collaboration'],
      category: 'AI Legal',
      link: '/zion-ai-contract-analyzer',
      color: 'from-slate-500 to-gray-500'
    },
    {
      id: 'zion-ai-performance-optimizer',
      name: 'Zion AI Performance Optimizer',
      description: 'AI-powered performance monitoring and optimization for websites, applications, and infrastructure with automated recommendations.',
      icon: <Activity className="w-8 h-8" />,
      price: 'Starting at $199/month',
      originalPrice: '$399/month',
      features: ['Performance Monitoring', 'Automated Optimization', 'Real-time Alerts', 'Performance Reports', 'A/B Testing', 'CDN Integration'],
      category: 'AI Performance',
      link: '/zion-ai-performance-optimizer',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const categories = [
    { name: 'All', count: microSaasServices.length },
    { name: 'AI Video', count: microSaasServices.filter(s => s.category === 'AI Video').length },
    { name: 'AI Finance', count: microSaasServices.filter(s => s.category === 'AI Finance').length },
    { name: 'AI Analytics', count: microSaasServices.filter(s => s.category === 'AI Analytics').length },
    { name: 'AI Communication', count: microSaasServices.filter(s => s.category === 'AI Communication').length },
    { name: 'AI Inventory', count: microSaasServices.filter(s => s.category === 'AI Inventory').length },
    { name: 'AI Sentiment', count: microSaasServices.filter(s => s.category === 'AI Sentiment').length },
    { name: 'AI Voice', count: microSaasServices.filter(s => s.category === 'AI Voice').length },
    { name: 'AI Development', count: microSaasServices.filter(s => s.category === 'AI Development').length },
    { name: 'AI Social Media', count: microSaasServices.filter(s => s.category === 'AI Social Media').length },
    { name: 'AI Legal', count: microSaasServices.filter(s => s.category === 'AI Legal').length },
    { name: 'AI Performance', count: microSaasServices.filter(s => s.category === 'AI Performance').length }
  ];

  const benefits = [
    {
      title: "Ready to Deploy",
      description: "Get started in minutes with our pre-configured solutions",
      icon: <Rocket className="w-6 h-6" />,
      stat: "5-minute setup"
    },
    {
      title: "Cost Effective",
      description: "Save up to 70% compared to custom development",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "70% savings"
    },
    {
      title: "Scalable",
      description: "Grow with your business needs seamlessly",
      icon: <Cloud className="w-6 h-6" />,
      stat: "Unlimited scaling"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support for all our solutions",
      icon: <Headphones className="w-6 h-6" />,
      stat: "24/7 support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use AI Software Tools</title>
        <meta name="description" content="Discover our comprehensive range of micro SAAS solutions designed to streamline your business operations with ready-to-use AI-powered software tools." />
        <meta name="keywords" content="micro SAAS, AI software, business tools, analytics, CRM, project management, marketing automation, AI solutions" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business operations with our comprehensive suite of micro SAAS solutions. 
            Ready-to-use AI-powered software tools that integrate seamlessly with your existing workflow.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Browse by Category</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white hover:text-cyan-400"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Micro SAAS Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaasServices.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <div className="mb-2">
                <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                {service.originalPrice && (
                  <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                )}
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {service.features.length > 4 && (
                  <li className="text-sm text-cyan-400">
                    +{service.features.length - 4} more features
                  </li>
                )}
              </ul>
              
              <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team can create a custom micro SAAS solution tailored to your specific business needs. 
              Let's discuss your requirements and build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Discuss Your Needs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group border border-cyan-500/30 hover:border-cyan-400"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;