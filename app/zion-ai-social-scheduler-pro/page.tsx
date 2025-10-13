import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Share2, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Heart, 
  MessageCircle, 
  Retweet, 
  Eye, 
  Target, 
  Zap, 
  Brain, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  Languages,
  Settings,
  Bell,
  Plus,
  Minus,
  Edit3,
  Trash2,
  Search,
  Filter,
  Tag,
  Bookmark,
  Send,
  Copy,
  Save,
  RefreshCw,
  AlertCircle,
  Check,
  X,
  Info,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  Lightbulb,
  Rocket,
  Shield,
  Lock,
  EyeOff,
  Upload,
  Download,
  Monitor,
  Smartphone,
  Tablet,
  Headphones,
  Camera,
  Video,
  Image,
  File,
  Folder,
  Database,
  Server,
  Wifi,
  Signal,
  Battery,
  WifiOff,
  SignalOff,
  BatteryLow,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  InfoIcon,
  QuestionMarkCircle,
  ExclamationTriangle,
  Ban,
  LockKeyhole,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  CreditCard,
  DollarSign,
  Euro,
  PoundSterling,
  Yen,
  Bitcoin,
  Ethereum,
  Coins,
  Wallet,
  Receipt,
  Calculator,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  MinusCircle,
  PlusCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Diamond,
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
  Sad,
  Happy,
  Wink,
  Kiss,
  Tongue
} from 'lucide-react';

const ZionAiSocialSchedulerProPage = () => {
  const features = [
    {
      title: "AI Content Generation",
      description: "Generate engaging posts, captions, and hashtags using advanced AI that understands your brand voice and audience preferences.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Optimal Timing Analysis",
      description: "AI analyzes your audience behavior to determine the best times to post for maximum engagement across all platforms.",
      icon: <Clock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Platform Management",
      description: "Schedule and manage content across Instagram, Facebook, Twitter, LinkedIn, TikTok, and YouTube from one dashboard.",
      icon: <Share2 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Visual Content Creation",
      description: "Create stunning graphics, videos, and carousels with AI-powered design tools and templates tailored to each platform.",
      icon: <Camera className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Advanced Analytics",
      description: "Get detailed insights into your performance with AI-powered recommendations to improve engagement and reach.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Hashtag Intelligence",
      description: "AI suggests trending and relevant hashtags to maximize your content's discoverability and reach.",
      icon: <Target className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "Up to 5 social accounts",
        "30 posts per month",
        "Basic AI content generation",
        "2 platforms supported",
        "Basic analytics",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$89",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 15 social accounts",
        "Unlimited posts",
        "Advanced AI features",
        "All platforms supported",
        "Advanced analytics & insights",
        "Team collaboration",
        "Priority support",
        "API access",
        "Custom branding"
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited social accounts",
        "Unlimited posts",
        "All AI features included",
        "White-label options",
        "Advanced team management",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom reporting",
        "SSO integration"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      company: "Digital Marketing Agency",
      role: "Social Media Manager",
      content: "Zion AI Social Scheduler Pro has transformed our social media strategy. The AI content generation saves us hours, and the optimal timing feature has increased our engagement by 150%.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Alex Thompson",
      company: "E-commerce Store",
      role: "Marketing Director",
      content: "The multi-platform management is incredible. We can now manage all our social accounts from one place, and the AI suggestions help us create content that actually converts.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Sarah Johnson",
      company: "Content Creator",
      role: "Influencer",
      content: "As a content creator, I need to stay consistent across platforms. This tool helps me plan weeks ahead and the AI-generated captions are always on-brand and engaging.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  const stats = [
    { number: "500%", label: "Average Engagement Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "6", label: "Platforms Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "25,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "10M+", label: "Posts Scheduled", icon: <Calendar className="w-6 h-6" /> }
  ];

  const platforms = [
    { name: "Instagram", logo: "IG", color: "from-pink-500 to-purple-500" },
    { name: "Facebook", logo: "FB", color: "from-blue-500 to-blue-600" },
    { name: "Twitter", logo: "TW", color: "from-cyan-500 to-blue-500" },
    { name: "LinkedIn", logo: "LI", color: "from-blue-600 to-blue-700" },
    { name: "TikTok", logo: "TT", color: "from-black to-gray-800" },
    { name: "YouTube", logo: "YT", color: "from-red-500 to-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Social Media Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zion AI Social
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Scheduler Pro
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The ultimate AI-powered social media management platform. Generate content, schedule posts, 
            and grow your audience across all major platforms with intelligent automation.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our advanced AI technology makes social media management smarter, faster, and more effective.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Major Platforms Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from one powerful dashboard.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {platform.logo}
                </div>
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                  {platform.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and scale as your social media presence grows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center group`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Social Media Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Social Scheduler Pro
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
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of marketers and creators who trust Zion AI Social Scheduler Pro 
            for intelligent, automated social media management. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Pricing
              <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAiSocialSchedulerProPage;