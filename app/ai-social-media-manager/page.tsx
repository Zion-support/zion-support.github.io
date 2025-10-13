import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Share2, 
  Brain, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  TrendingUp,
  Smartphone, 
  Globe, 
  Mail, 
  Phone, 
  Settings,
  Monitor,
  Lock,
  Server,
  Cpu,
  Network,
  HardDrive,
  Headphones,
  Sparkles,
  Target,
  FileText,
  Code,
  Bot,
  Wifi,
  Heart,
  Receipt,
  Package,
  Clock,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Activity,
  PieChart,
  LineChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  Lightbulb,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Music,
  MessageCircle,
  Image,
  Video,
  Calendar,
  BarChart3,
  Hash,
  AtSign,
  ThumbsUp,
  MessageSquare,
  Retweet,
  Bookmark,
  Send,
  Plus,
  Edit,
  Trash2,
  Copy,
  Share,
  Download as DownloadIcon,
  Upload as UploadIcon
} from "lucide-react";

export default function AISocialMediaManager() {
  const features = [
    {
      title: "AI Content Generation",
      description: "Generate engaging social media posts, captions, and hashtags using advanced AI that understands your brand voice and audience.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Brand voice matching", "Trending hashtags", "Content optimization", "Multi-language support"]
    },
    {
      title: "Multi-Platform Management",
      description: "Manage all your social media accounts from one dashboard - Facebook, Instagram, Twitter, LinkedIn, YouTube, and TikTok.",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["8+ platforms", "Unified dashboard", "Cross-platform posting", "Platform-specific optimization"]
    },
    {
      title: "Smart Scheduling",
      description: "AI-powered scheduling that posts at optimal times based on your audience's activity patterns and engagement data.",
      icon: <Clock className="w-8 h-8" />,
      benefits: ["Optimal timing", "Audience analysis", "Engagement prediction", "Auto-scheduling"]
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive analytics and insights to track performance, engagement, and ROI across all your social media channels.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Performance tracking", "Engagement metrics", "ROI analysis", "Competitor insights"]
    },
    {
      title: "Content Calendar",
      description: "Visual content calendar with drag-and-drop functionality, content planning, and campaign management tools.",
      icon: <Calendar className="w-8 h-8" />,
      benefits: ["Visual planning", "Campaign management", "Content approval", "Team collaboration"]
    },
    {
      title: "Automated Engagement",
      description: "AI-powered engagement tools that respond to comments, mentions, and messages with personalized, brand-appropriate responses.",
      icon: <MessageCircle className="w-8 h-8" />,
      benefits: ["Auto-responses", "Sentiment analysis", "Crisis management", "Customer service"]
    }
  ];

  const platforms = [
    { name: "Facebook", icon: <Facebook className="w-6 h-6" />, color: "text-blue-600", users: "2.9B" },
    { name: "Instagram", icon: <Instagram className="w-6 h-6" />, color: "text-pink-600", users: "1.4B" },
    { name: "Twitter", icon: <Twitter className="w-6 h-6" />, color: "text-blue-400", users: "450M" },
    { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, color: "text-blue-700", users: "900M" },
    { name: "YouTube", icon: <Youtube className="w-6 h-6" />, color: "text-red-600", users: "2.7B" },
    { name: "TikTok", icon: <Music className="w-6 h-6" />, color: "text-black", users: "1.1B" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Perfect for small businesses and influencers",
      features: [
        "Up to 3 social accounts",
        "Basic AI content generation",
        "Standard scheduling",
        "Basic analytics",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 10 social accounts",
        "Advanced AI features",
        "Smart scheduling",
        "Advanced analytics",
        "Priority support",
        "Up to 5 user accounts",
        "Content calendar",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited social accounts",
        "Full AI capabilities",
        "Custom automation",
        "Advanced reporting",
        "24/7 dedicated support",
        "Unlimited user accounts",
        "White-label options",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Digital Marketing Agency",
      role: "Social Media Manager",
      content: "AI Social Media Manager has completely transformed our social media strategy. The AI content generation saves us hours every day and the engagement has increased by 300%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Brand",
      role: "Marketing Director",
      content: "The multi-platform management and smart scheduling features are game-changers. We can now manage all our social accounts efficiently from one place.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Startup Inc.",
      role: "Founder",
      content: "The analytics insights helped us understand our audience better and optimize our content strategy. Our follower growth increased by 500% in just 3 months.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Intelligent Social Media Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your social media with AI Social Media Manager - intelligent content generation, multi-platform management, and advanced analytics. Starting at $29/month."
        />
        <meta
          name="keywords"
          content="AI social media, social media management, content generation, social media automation, social media analytics, multi-platform posting"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-media-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
                  <Brain className="w-4 h-4 text-pink-400 mr-2" />
                  <span className="text-pink-400 text-sm font-medium">#1 AI Social Media Tool 2024</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                    AI Social Media Manager
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Revolutionize your social media presence with AI-powered content generation, 
                  multi-platform management, and intelligent automation that drives engagement and growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-pink-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Share2 className="w-6 h-6 text-pink-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">300%</div>
                    <div className="text-gray-300 text-sm">Engagement Boost</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-pink-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">8+</div>
                    <div className="text-gray-300 text-sm">Platforms</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                      <Share2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starting at $29/month</h3>
                    <p className="text-gray-300">AI-powered social media management</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                      <span>8+ platform support</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                      <span>AI content generation</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                      <span>Smart scheduling</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                      <span>Advanced analytics</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Started Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Manage All Your Platforms
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect and manage all your social media accounts from one powerful dashboard
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center ${platform.color} group-hover:scale-110 transition-transform`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-pink-400 text-xs font-medium">{platform.users} users</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-pink-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Powerful Social Media Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to dominate social media with AI-powered tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your social media needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-pink-500/50 shadow-pink-500/25' 
                      : 'border-white/20 hover:border-pink-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-pink-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-pink-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Trusted by Social Media Experts
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about AI Social Media Manager
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of brands using AI Social Media Manager to grow their presence and engagement.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300 transition-colors">kleber@ziontechgroup.com</a>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-pink-400 hover:text-pink-300 transition-colors">+1 302 464 0950</a>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-pink-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-pink-500/25 hover:scale-105"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}