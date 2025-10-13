import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Share, 
  BarChart3, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Zap,
  Clock,
  Users,
  Award,
  Target,
  Shield,
  Cloud,
  Database,
  Settings,
  Eye,
  Heart,
  ThumbsUp,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  PieChart,
  LineChart,
  Calendar,
  AlertCircle,
  CheckSquare,
  FileCheck,
  Banknote,
  Coins,
  Wallet,
  TrendingDown,
  Percent,
  Activity,
  Brain,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Search,
  Filter,
  Download,
  Upload,
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
  SignalMedium,
  Truck,
  Warehouse,
  ShoppingCart,
  Store,
  CreditCard,
  DollarSign,
  Calculator,
  Receipt,
  FileText,
  Download as DownloadIcon,
  Send,
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
  Play,
  Pause,
  Stop,
  RefreshCw,
  RotateCcw,
  Save,
  Image,
  Video,
  Music,
  Palette,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  Battery as BatteryIcon,
  BatteryLow as BatteryLowIcon,
  Signal as SignalIcon,
  SignalLow as SignalLowIcon,
  SignalZero as SignalZeroIcon,
  SignalHigh as SignalHighIcon,
  SignalMedium as SignalMediumIcon
} from 'lucide-react';

const AISocialMediaManagerPro = () => {
  const features = [
    {
      title: "Content Generation",
      description: "AI-powered content creation for all major social media platforms",
      icon: <FileText className="w-6 h-6" />,
      details: ["Post generation", "Hashtag optimization", "Image creation", "Video scripts"]
    },
    {
      title: "Optimal Posting Times",
      description: "AI determines the best times to post for maximum engagement",
      icon: <Clock className="w-6 h-6" />,
      details: ["Audience analysis", "Engagement prediction", "Time zone optimization", "Platform-specific timing"]
    },
    {
      title: "Automated Engagement",
      description: "Intelligent responses and engagement with your audience",
      icon: <MessageSquare className="w-6 h-6" />,
      details: ["Auto-replies", "Comment management", "Mention tracking", "Sentiment analysis"]
    },
    {
      title: "Multi-platform Management",
      description: "Manage all your social media accounts from one dashboard",
      icon: <Globe className="w-6 h-6" />,
      details: ["Facebook integration", "Instagram management", "Twitter automation", "LinkedIn posting"]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and performance insights",
      icon: <BarChart3 className="w-6 h-6" />,
      details: ["Engagement metrics", "Reach analysis", "ROI tracking", "Custom reports"]
    },
    {
      title: "Brand Voice Training",
      description: "Train AI to match your brand's unique voice and tone",
      icon: <Mic className="w-6 h-6" />,
      details: ["Brand personality", "Tone consistency", "Style guidelines", "Content approval"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$179",
      period: "/month",
      originalPrice: "$359",
      description: "Perfect for small businesses and influencers",
      features: [
        "Up to 5 social accounts",
        "Basic content generation",
        "Standard analytics",
        "Email support",
        "5 platforms supported",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$359",
      period: "/month",
      originalPrice: "$719",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 20 social accounts",
        "Advanced content generation",
        "Priority support",
        "Advanced analytics",
        "All platforms supported",
        "Team collaboration",
        "Brand voice training",
        "Automated engagement"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$719",
      period: "/month",
      originalPrice: "$1439",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited social accounts",
        "Premium content generation",
        "24/7 dedicated support",
        "Custom analytics",
        "White-label options",
        "Advanced integrations",
        "Custom AI training",
        "SLA guarantee",
        "Training & onboarding",
        "Account management"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Reduce social media management time by 80% with AI automation",
      icon: <Clock className="w-8 h-8" />,
      stat: "80% time saved"
    },
    {
      title: "Increase Engagement",
      description: "Boost engagement rates by 150% with optimized content and timing",
      icon: <Heart className="w-8 h-8" />,
      stat: "150% more engagement"
    },
    {
      title: "Grow Followers",
      description: "Grow your social media following by 200% with consistent, quality content",
      icon: <Users className="w-8 h-8" />,
      stat: "200% follower growth"
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Drive sales and brand awareness for online stores",
      icon: <ShoppingCart className="w-8 h-8" />,
      examples: ["Product promotion", "Customer engagement", "Influencer collaboration", "Sales tracking"]
    },
    {
      title: "Agencies",
      description: "Manage multiple client accounts efficiently",
      icon: <Target className="w-8 h-8" />,
      examples: ["Client management", "Campaign automation", "Performance reporting", "Team collaboration"]
    },
    {
      title: "Personal Brands",
      description: "Build and maintain personal brand presence",
      icon: <Star className="w-8 h-8" />,
      examples: ["Content creation", "Audience building", "Engagement growth", "Brand consistency"]
    },
    {
      title: "B2B Companies",
      description: "Generate leads and thought leadership content",
      icon: <Building className="w-8 h-8" />,
      examples: ["Lead generation", "Thought leadership", "Industry insights", "Professional networking"]
    }
  ];

  const stats = [
    { number: "10,000+", label: "Posts Generated", icon: <FileText className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "150%", label: "Engagement Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager Pro - Zion Tech Group | Automated Social Media Management</title>
        <meta
          name="description"
          content="Automate social media management with AI Social Media Manager Pro. Content generation, optimal posting times, automated engagement, and multi-platform management for all major social networks."
        />
        <meta
          name="keywords"
          content="social media management, AI content generation, social media automation, social media analytics, brand voice training, multi-platform management"
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
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Social Media Automation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Social Media Manager Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Automate social media management with AI-powered content generation, optimal posting times, 
              and automated engagement. Grow your following and boost engagement across all platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Choose AI Social Media Manager Pro?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your social media presence with AI-powered automation and optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate and optimize your social media presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Business Type
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From e-commerce to agencies, our social media manager adapts to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                    {useCase.description}
                  </p>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx} className="text-xs text-cyan-400 text-center">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your social media management needs. All plans include our core features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">Was {plan.originalPrice}</span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Social Media?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using AI Social Media Manager Pro to grow their social presence. 
                Start your free trial today.
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
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
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
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISocialMediaManagerPro;