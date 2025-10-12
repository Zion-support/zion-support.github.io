'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Brain, 
  Users, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Play, 
  Settings, 
  Globe,
  Smartphone,
  Monitor,
  Mail,
  Phone,
  Calendar,
  FileText,
  Image,
  Video,
  Mic,
  Headphones,
  Volume2,
  Send,
  Bot,
  User,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Edit,
  Copy,
  Share,
  Download,
  Upload,
  RefreshCw,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Loader,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  Move,
  Grip,
  Grid,
  List,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Split,
  Columns,
  Rows,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Sad,
  Wink,
  Kiss,
  Tongue,
  DollarSign,
  Clock,
  Target,
  Lightbulb,
  Cpu,
  Network,
  Database,
  BarChart3,
  TrendingUp,
  PieChart,
  LineChart,
  BarChart,
  Activity,
  Filter,
  Search,
  SortAsc,
  SortDesc,
  MoreHorizontal,
  Menu,
  MoreVertical,
  Trash2,
  Save,
  Bookmark,
  Flag,
  Tag,
  Hash,
  AtSign,
  Link as LinkIcon,
  Paperclip,
  ImageIcon,
  File,
  Folder,
  Archive,
  Inbox,
  Outbox,
  Sent,
  Draft,
  Trash,
  Spam,
  Star as StarIcon2,
  Heart as HeartIcon,
  Bookmark as BookmarkIcon,
  Flag as FlagIcon,
  Tag as TagIcon,
  Hash as HashIcon,
  AtSign as AtSignIcon,
  Link as LinkIcon2,
  Paperclip as PaperclipIcon,
  Image as ImageIcon2,
  File as FileIcon,
  Folder as FolderIcon,
  Archive as ArchiveIcon,
  Inbox as InboxIcon,
  Outbox as OutboxIcon,
  Sent as SentIcon,
  Draft as DraftIcon,
  Trash as TrashIcon,
  Spam as SpamIcon,
  ShoppingCart
} from 'lucide-react';

const ZionChatAiPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, sentiment, and intent for more human-like conversations.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Custom Training',
      description: 'Train your chatbot with your specific knowledge base, FAQs, and business processes.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track conversation metrics, user satisfaction, and performance insights in real-time.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, compliance, and privacy protection.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Automate complex workflows, lead qualification, and customer support processes.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Website integration',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced NLP & AI',
        'Multi-channel support',
        'Priority support',
        'Advanced analytics',
        'Custom training',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Premium AI capabilities',
        'All channels included',
        '24/7 dedicated support',
        'Custom analytics',
        'White-label solution',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Customer Success Manager, TechFlow',
      content: 'Zion Chat AI reduced our response time by 80% and improved customer satisfaction scores significantly.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      role: 'Founder, StartupHub',
      content: 'The custom training feature is amazing. Our chatbot now handles 90% of customer inquiries without human intervention.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director, GrowthCorp',
      content: 'The analytics dashboard gives us incredible insights into customer behavior and conversation patterns.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: MessageSquare },
    { id: 'features', name: 'Features', icon: CheckCircle },
    { id: 'pricing', name: 'Pricing', icon: DollarSign },
    { id: 'testimonials', name: 'Testimonials', icon: Star }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle common inquiries, provide instant responses, and escalate complex issues to human agents.',
      icon: Headphones,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Lead Qualification',
      description: 'Engage website visitors, qualify leads, and schedule meetings with sales teams automatically.',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, answer questions, and guide them through the purchase process.',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Internal Support',
      description: 'Assist employees with HR questions, IT support, and company policy information.',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Chat AI - Intelligent Chatbot Platform | Zion Tech Group</title>
        <meta name="description" content="Transform customer engagement with Zion Chat AI - the intelligent chatbot platform featuring advanced NLP, multi-channel support, and custom training. Start your free trial today." />
        <meta name="keywords" content="chatbot, AI chatbot, customer service, natural language processing, conversational AI, customer support automation, chatbot platform" />
        <meta property="og:title" content="Zion Chat AI - Intelligent Chatbot Platform" />
        <meta property="og:description" content="Transform customer engagement with Zion Chat AI - the intelligent chatbot platform featuring advanced NLP, multi-channel support, and custom training." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-chat-ai" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Chat AI",
            "description": "Intelligent chatbot platform with natural language processing and multi-channel support",
            "url": "https://ziontechgroup.com/zion-chat-ai",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "19",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "200"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                AI Chatbot Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text">
                  Zion Chat AI
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Create intelligent, conversational chatbots that engage customers, automate support, and drive business growth with advanced AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="#pricing"
                  className="cyber-button group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="#demo"
                  className="cyber-button-secondary group"
                >
                  <Play className="mr-2" />
                  Watch Demo
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
                  <div className="text-gray-400 text-sm">Conversations/Day</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
                  <div className="text-gray-400 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                  <div className="text-gray-400 text-sm">Languages</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-green-400 mb-2">4.8★</div>
                  <div className="text-gray-400 text-sm">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-slate-800/30 backdrop-blur-sm border-b border-gray-700/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Intelligent Conversations Made Simple
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Zion Chat AI combines cutting-edge natural language processing with an intuitive interface, making it easy to create and deploy powerful chatbots that understand and engage your customers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="cyber-card group hover:scale-105 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Use Cases Section */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-white text-center mb-12">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Perfect for Every Use Case
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {useCases.map((useCase, index) => (
                    <div 
                      key={index}
                      className="cyber-card text-center group hover:scale-105 transition-all duration-300"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <useCase.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {useCase.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Section */}
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">See Zion Chat AI in Action</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Watch how our platform creates intelligent conversations that engage and convert
                </p>
                <div className="bg-slate-900/50 rounded-xl p-8 mb-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                      <p className="text-gray-300">Demo Video Coming Soon</p>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="cyber-button"
                >
                  Request Live Demo
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Advanced Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to create, deploy, and manage intelligent chatbots
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Natural Language Understanding</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our advanced NLP engine understands context, sentiment, and intent, enabling your chatbot to have natural, human-like conversations with your customers.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Context-aware responses
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Sentiment analysis
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Intent recognition
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Multi-language support
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                    <Brain className="w-24 h-24 text-purple-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="bg-slate-800/50 rounded-xl p-8 order-2 lg:order-1">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                    <Globe className="w-24 h-24 text-cyan-400" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-white mb-6">Multi-Channel Deployment</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Deploy your chatbot across multiple channels including websites, mobile apps, social media platforms, and messaging services for maximum reach.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Website integration
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Mobile app SDK
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Social media bots
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Messaging platforms
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Custom Training & Knowledge Base</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Train your chatbot with your specific knowledge base, FAQs, product information, and business processes to provide accurate, brand-specific responses.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Knowledge base integration
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Custom training data
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Continuous learning
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Performance monitoring
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                    <Users className="w-24 h-24 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Simple, Transparent Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the perfect plan for your business needs. All plans include a 14-day free trial.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`cyber-card text-center relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 mb-8">{plan.description}</p>
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact"
                      className={`w-full justify-center ${
                        plan.popular ? 'cyber-button' : 'cyber-button-secondary'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-400 mb-4">Need a custom solution?</p>
                <Link to="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Contact our sales team →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    What Our Customers Say
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Don't just take our word for it - hear from businesses that have transformed their customer engagement with Zion Chat AI.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="cyber-card">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Customer Engagement?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using Zion Chat AI to provide exceptional customer experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="cyber-button"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/demo"
                    className="cyber-button-secondary"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-8 text-sm text-gray-400">
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionChatAiPage;