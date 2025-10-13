import { ArrowRight, Target, Brain, BarChart3, CheckCircle, Star, Zap, Mail, MessageSquare, Calendar, Users, TrendingUp, Shield, Globe, Clock, Award, Database, Eye, Filter, Search, Bell, Settings, Lock, RefreshCw, Download, Upload, Share2, Plus, Minus, X, Check, AlertTriangle, Info, ExternalLink, Play, Pause,SkipForward, SkipBack, Volume2, VolumeX, Mic, MicOff, Video, VideoOff, Camera, CameraOff, Image, FileText, File, Folder, FolderOpen, Archive, Trash2, Edit, Save, Copy, Cut, Paste, Undo, Redo, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, Grid, Table, Columns, Rows, PlusCircle, MinusCircle, XCircle, CheckCircle2, AlertCircle, HelpCircle, InfoIcon, Lightbulb, Bookmark, Heart, ThumbsUp, ThumbsDown, Flag, FlagOff, Star as StarIcon, StarOff, Moon, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Activity,Heart as HeartIcon, Zap as ZapIcon, Flash, Thunder, Fire, Water, Earth, Air, Space, Rocket, Satellite, Planet, Sun as SunIcon, Moon as MoonIcon, Star as StarIcon2, Comet, Meteor, Galaxy, Nebula, BlackHole, Wormhole, Time, Space as SpaceIcon, Infinity, Atom, Molecule, DNA, Cell, Organism, Evolution, Growth, Development, Progress, Success, Achievement, Victory, Trophy, Medal, Badge, Certificate, Diploma, Degree, License, Permit, Passport, ID, Card, Ticket, Voucher, Coupon, Discount, Sale, Price, Money, Dollar, Euro, Pound, Yen, Rupee, Bitcoin, Ethereum, Crypto, Blockchain, Wallet,Credit, Debit, Payment, Transaction, Transfer, Exchange, Trade, Market, Stock, Bond, Investment, Portfolio, Fund, Asset, Liability, Equity, Revenue, Profit, Loss, Income, Expense, Budget, Finance, Accounting, Bookkeeping, Tax, Audit, Compliance, Legal, Contract, Agreement, Terms, Conditions, Privacy, Security, Protection, Safety, Risk, Insurance, Claim, Policy, Coverage, Premium, Deductible, Copay, Coinsurance, OutOfPocket, Maximum, Minimum, Limit, Cap, Floor, Ceiling, Range, Scale, Level, Grade, Rank, Position, Status, State, Condition, Situation, Circumstance, Context, Environment, Setting, Location, Place, Address, City, State, Country, Region, Area, Zone, District, Neighborhood, Street, Road, Avenue, Boulevard, Lane, Drive, Court, Circle, Square, Plaza, Mall, Center, Complex, Building, Tower, Skyscraper, House, Home, Apartment, Condo, Townhouse, Villa, Mansion, Palace, Castle, Fort, Tower, Bridge, Tunnel, Highway, Freeway, Expressway, Parkway, Street, Road, Avenue, Boulevard, Lane, Drive, Court, Circle, Square, Plaza, Mall, Center, Complex, Building, Tower, Skyscraper, House, Home, Apartment, Condo, Townhouse, Villa, Mansion, Palace, Castle, Fort, Tower, Bridge, Tunnel, Highway, Freeway, Expressway, Parkway } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiMarketingAutomationPro() {

  const testimonials = [
    {
        "name": "Sarah Johnson",
        "role": "CEO, TechCorp",
        "company": "TechCorp",
        "content": "Zion Tech Group transformed our business operations with their innovative AI solutions. The results exceeded our expectations.",
        "rating": 5,
        "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        "name": "Michael Chen",
        "role": "CTO, InnovateLabs",
        "company": "InnovateLabs",
        "content": "Outstanding technical expertise and exceptional customer service. They delivered exactly what we needed.",
        "rating": 5,
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        "name": "Emily Rodriguez",
        "role": "Director, DataFlow Inc",
        "company": "DataFlow Inc",
        "content": "The team's attention to detail and commitment to quality is unmatched. Highly recommended!",
        "rating": 5,
        "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
];

  const stats = [
    {
        "number": "500+",
        "label": "Projects Completed"
    },
    {
        "number": "50+",
        "label": "Happy Clients"
    },
    {
        "number": "99%",
        "label": "Success Rate"
    },
    {
        "number": "24/7",
        "label": "Support"
    }
];

  const benefits = [
    {
        "title": "Increased Efficiency",
        "description": "Streamline your operations with our advanced automation solutions.",
        "icon": "⚡"
    },
    {
        "title": "Cost Reduction",
        "description": "Reduce operational costs by up to 40% with our optimized solutions.",
        "icon": "💰"
    },
    {
        "title": "Enhanced Security",
        "description": "Enterprise-grade security measures to protect your valuable data.",
        "icon": "🔒"
    },
    {
        "title": "Scalable Solutions",
        "description": "Grow your business with solutions that scale with your needs.",
        "icon": "📈"
    }
];

  const features = [
    {
      title: "AI-Powered Campaign Optimization",
      description: "Automatically optimize your marketing campaigns using machine learning algorithms that analyze performance data and adjust targeting, timing, and content in real-time.",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Real-time optimization", "A/B testing automation", "Performance prediction", "ROI maximization"]
    },
    {
      title: "Intelligent Audience Segmentation",
      description: "AI-driven audience segmentation that automatically groups customers based on behavior, preferences, and engagement patterns for highly targeted campaigns.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Behavioral segmentation", "Predictive modeling", "Dynamic audience updates", "Personalization at scale"]
    },
    {
      title: "Multi-Channel Campaign Orchestration",
      description: "Seamlessly coordinate campaigns across email, social media, SMS, push notifications, and web with unified messaging and timing.",
      icon: <MessageSquare className="w-6 h-6" />,
      benefits: ["Cross-channel consistency", "Unified customer journey", "Automated scheduling", "Performance tracking"]
    },
    {
      title: "Predictive Content Generation",
      description: "AI-powered content creation that generates personalized marketing messages, subject lines, and creative assets based on audience data and preferences.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Personalized content", "A/B testing automation", "Brand voice consistency", "Performance optimization"]
    },
    {
      title: "Advanced Analytics & Insights",
      description: "Comprehensive analytics dashboard with AI-powered insights, attribution modeling, and predictive analytics for data-driven marketing decisions.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Attribution modeling", "Predictive analytics", "Custom dashboards", "Real-time reporting"]
    },
    {
      title: "Automated Lead Nurturing",
      description: "Intelligent lead nurturing workflows that automatically guide prospects through the sales funnel with personalized content and timing.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Behavioral triggers", "Personalized sequences", "Lead scoring integration", "Conversion optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5,000 contacts",
        "Basic AI features",
        "Email campaigns",
        "Social media integration",
        "Email support",
        "Basic analytics",
        "5 users included"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25,000 contacts",
        "Advanced AI features",
        "Multi-channel campaigns",
        "Priority support",
        "Advanced analytics",
        "Custom workflows",
        "15 users included",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited contacts",
        "AI-powered insights",
        "Custom integrations",
        "24/7 phone support",
        "Advanced security",
        "White-label options",
        "Unlimited users",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Marketing Automation Pro - AI-Powered Marketing Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your marketing with Zion AI Marketing Automation Pro. AI-powered campaign optimization, predictive content generation, and multi-channel orchestration for modern marketers."
        />
        <meta
          name="keywords"
          content="AI marketing automation, marketing automation, campaign optimization, predictive analytics, content generation, multi-channel marketing, marketing platform"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
                  <Target className="w-4 h-4 text-pink-400 mr-2" />
                  <span className="text-pink-400 text-sm font-medium">AI-Powered Marketing Platform</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion AI Marketing
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-pulse">
                    {" "}Automation Pro
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your marketing with the world's most intelligent automation platform. 
                  AI-powered campaign optimization, predictive content generation, and multi-channel orchestration for modern marketers.
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
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Marketing Dashboard</h3>
                    <p className="text-gray-300">See your campaigns in action</p>
                  </div>
                  
                  {/* Mock Marketing Dashboard */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">Campaign ROI</span>
                        <span className="text-green-400 text-sm">+67%</span>
                      </div>
                      <div className="text-2xl font-bold text-white">$45,230</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg p-4">
                        <div className="text-white font-semibold text-sm mb-1">Open Rate</div>
                        <div className="text-xl font-bold text-white">34.2%</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                        <div className="text-white font-semibold text-sm mb-1">Click Rate</div>
                        <div className="text-xl font-bold text-white">8.7%</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">AI Insights</span>
                        <span className="text-yellow-400 text-sm">Live</span>
                      </div>
                      <div className="text-sm text-gray-300">Optimal send time: 2:30 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  AI-Powered Marketing Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your marketing with artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-pink-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-pink-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your marketing needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-pink-500/50 shadow-2xl shadow-pink-500/25' 
                      : 'border-white/20 hover:border-pink-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-pink-500/25'
                        : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Marketers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of marketers already using Zion AI Marketing Automation Pro to boost their performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to start your free trial or schedule a personalized demo.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-pink-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-pink-400">+1 302 464 0950</p>
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
                  className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-pink-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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
}