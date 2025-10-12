'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Brain, 
  PenTool, 
  Image, 
  Video, 
  Globe, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Play, 
  Settings, 
  Download,
  Upload,
  Share,
  Edit,
  Copy,
  Trash2,
  Save,
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
  Bookmark,
  Flag,
  Tag,
  Hash,
  AtSign,
  Link as LinkIcon,
  Paperclip,
  File,
  Folder,
  Archive,
  Inbox,
  Outbox,
  Sent,
  Draft,
  Trash,
  Spam,
  Users,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Globe as GlobeIcon,
  Smartphone,
  Monitor,
  Headphones,
  Volume2,
  Mic,
  Send,
  Bot,
  User,
  Shield,
  Lock,
  Eye,
  EyeOff,
  DollarSign as DollarSignIcon,
  Clock as ClockIcon,
  Target as TargetIcon,
  Lightbulb as LightbulbIcon,
  Cpu as CpuIcon,
  Network as NetworkIcon,
  Database as DatabaseIcon,
  BarChart3 as BarChart3Icon,
  TrendingUp as TrendingUpIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  BarChart as BarChartIcon,
  Activity as ActivityIcon,
  Filter as FilterIcon,
  Search as SearchIcon,
  SortAsc as SortAscIcon,
  SortDesc as SortDescIcon,
  MoreHorizontal as MoreHorizontalIcon,
  Menu as MenuIcon,
  MoreVertical as MoreVerticalIcon,
  Bookmark as BookmarkIcon,
  Flag as FlagIcon,
  Tag as TagIcon,
  Hash as HashIcon,
  AtSign as AtSignIcon,
  Link as LinkIcon2,
  Paperclip as PaperclipIcon,
  File as FileIcon,
  Folder as FolderIcon,
  Archive as ArchiveIcon,
  Inbox as InboxIcon,
  Outbox as OutboxIcon,
  Sent as SentIcon,
  Draft as DraftIcon,
  Trash as TrashIcon,
  Spam as SpamIcon,
  Users as UsersIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Calendar as CalendarIcon,
  MapPin as MapPinIcon,
  Globe as GlobeIcon2,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  Headphones as HeadphonesIcon,
  Volume2 as Volume2Icon,
  Mic as MicIcon,
  Send as SendIcon,
  Bot as BotIcon,
  User as UserIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  ShoppingBag
} from 'lucide-react';

const ZionContentStudioPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content with our advanced AI that understands context, tone, and brand voice.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'Content Templates',
      description: 'Access hundreds of professionally designed templates for blogs, social media, emails, and more.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Optimize your content for search engines with built-in SEO analysis and keyword suggestions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Create content in 25+ languages with accurate translations and cultural adaptation.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track content performance across platforms with detailed analytics and insights.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate content creation workflows, approvals, and publishing across multiple channels.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$25',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        'Up to 50 content pieces/month',
        'Basic AI writing assistant',
        '10 content templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 200 content pieces/month',
        'Advanced AI capabilities',
        '100+ content templates',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
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
        'Unlimited content pieces',
        'Premium AI features',
        'All templates included',
        '24/7 dedicated support',
        'Custom analytics',
        'White-label solution',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Content Manager, DigitalFlow',
      content: 'Zion Content Studio increased our content output by 300% while maintaining quality. The AI writing assistant is incredible.',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'Maria Garcia',
      role: 'Marketing Director, GrowthLabs',
      content: 'The SEO optimization features helped us improve our search rankings significantly. Our organic traffic doubled in 3 months.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'James Wilson',
      role: 'Founder, TechStart',
      content: 'The multi-language support is a game-changer for our global audience. We can now create content in 10+ languages effortlessly.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FileText },
    { id: 'features', name: 'Features', icon: CheckCircle },
    { id: 'pricing', name: 'Pricing', icon: DollarSign },
    { id: 'testimonials', name: 'Testimonials', icon: Star }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts',
      description: 'Create engaging blog content with AI assistance and SEO optimization.',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Social Media',
      description: 'Generate posts for all major social platforms with platform-specific optimization.',
      icon: Share,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Email Marketing',
      description: 'Craft compelling email campaigns with personalized content and A/B testing.',
      icon: Mail,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Product Descriptions',
      description: 'Write persuasive product descriptions that convert visitors into customers.',
      icon: ShoppingBag,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Content Studio - AI-Powered Content Creation Platform | Zion Tech Group</title>
        <meta name="description" content="Create amazing content with Zion Content Studio - the AI-powered content creation platform featuring writing assistance, templates, SEO optimization, and multi-language support. Start your free trial today." />
        <meta name="keywords" content="content creation, AI writing, content marketing, SEO optimization, content templates, blog writing, social media content, email marketing" />
        <meta property="og:title" content="Zion Content Studio - AI-Powered Content Creation Platform" />
        <meta property="og:description" content="Create amazing content with Zion Content Studio - the AI-powered content creation platform featuring writing assistance, templates, SEO optimization, and multi-language support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-content-studio" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Content Studio",
            "description": "AI-powered content creation platform with writing assistance, templates, and SEO optimization",
            "url": "https://ziontechgroup.com/zion-content-studio",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "25",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "ratingCount": "180"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                AI Content Creation Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent neon-text">
                  Zion Content Studio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Create compelling content at scale with AI-powered writing assistance, professional templates, and SEO optimization that drives engagement and conversions.
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
                  <div className="text-3xl font-bold text-green-400 mb-2">1M+</div>
                  <div className="text-gray-400 text-sm">Content Pieces Created</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">25+</div>
                  <div className="text-gray-400 text-sm">Languages Supported</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Content Templates</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-blue-400 mb-2">4.7★</div>
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
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
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
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Content Creation Made Simple
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Zion Content Studio combines the power of AI with professional design tools, making it easy to create high-quality content that engages your audience and drives results.
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Content Types Section */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-white text-center mb-12">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Create Any Type of Content
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {contentTypes.map((contentType, index) => (
                    <div 
                      key={index}
                      className="cyber-card text-center group hover:scale-105 transition-all duration-300"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${contentType.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <contentType.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                        {contentType.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {contentType.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Section */}
              <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">See Zion Content Studio in Action</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Watch how our platform transforms ideas into compelling content that engages and converts
                </p>
                <div className="bg-slate-900/50 rounded-xl p-8 mb-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-green-400 mx-auto mb-4" />
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
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Powerful Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to create, optimize, and distribute amazing content
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">AI Writing Assistant</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our advanced AI understands context, tone, and brand voice to generate high-quality content that resonates with your audience. From blog posts to social media captions, create content that converts.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Context-aware content generation
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Brand voice customization
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Multiple content formats
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Real-time content suggestions
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                    <Brain className="w-24 h-24 text-green-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="bg-slate-800/50 rounded-xl p-8 order-2 lg:order-1">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                    <FileText className="w-24 h-24 text-blue-400" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-white mb-6">Professional Content Templates</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Access hundreds of professionally designed templates for every type of content. From blog posts to email campaigns, start with proven formats and customize them to match your brand.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      500+ professional templates
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Industry-specific designs
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Easy customization
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Brand consistency tools
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">SEO Optimization & Analytics</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Optimize your content for search engines with built-in SEO analysis, keyword suggestions, and performance tracking. Monitor how your content performs across all channels.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Real-time SEO scoring
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Keyword research tools
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Performance analytics
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Content optimization suggestions
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-24 h-24 text-purple-400" />
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
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Simple, Transparent Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the perfect plan for your content creation needs. All plans include a 14-day free trial.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`cyber-card text-center relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">
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
                <Link to="/contact" className="text-green-400 hover:text-green-300 transition-colors">
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
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    What Our Customers Say
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Don't just take our word for it - hear from content creators who have transformed their workflow with Zion Content Studio.
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
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Create Amazing Content?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of content creators already using Zion Content Studio to produce engaging, high-quality content at scale.
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

export default ZionContentStudioPage;