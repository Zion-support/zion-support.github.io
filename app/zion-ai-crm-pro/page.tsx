import { ArrowRight, Users, Brain, BarChart3, CheckCircle, Star, Zap, Target, MessageSquare, Calendar, Phone, Mail, TrendingUp, Shield, Globe, Clock, Award, Database, Eye, Filter, Search, Bell, Settings, Lock, RefreshCw, Download, Upload, Share2, Plus, Minus, X, Check, AlertTriangle, Info, ExternalLink, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Mic, MicOff, Video, VideoOff, Camera, CameraOff, Image, FileText, File, Folder, FolderOpen, Archive, Trash2, Edit, Save, Copy, Cut, Paste, Undo, Redo, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, Grid, Table, Columns, Rows, PlusCircle, MinusCircle, XCircle, CheckCircle2, AlertCircle, HelpCircle, InfoIcon, Lightbulb, Bookmark, Heart, ThumbsUp, ThumbsDown, Flag, FlagOff, Star as StarIcon, StarOff, Moon, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Activity, Pulse, Heart as HeartIcon, Zap as ZapIcon, Flash, Thunder, Fire, Water, Earth, Air, Space, Rocket, Satellite, Planet, Sun as SunIcon, Moon as MoonIcon, Star as StarIcon2, Comet, Meteor, Galaxy, Nebula, BlackHole, Wormhole, Time, Space as SpaceIcon, Infinity, Atom, Molecule, DNA, Cell, Organism, Evolution, Growth, Development, Progress, Success, Achievement, Victory, Trophy, Medal, Badge, Certificate, Diploma, Degree, License, Permit, Passport, ID, Card, Ticket, Voucher, Coupon, Discount, Sale, Price, Money, Dollar, Euro, Pound, Yen, Rupee, Bitcoin, Ethereum, Crypto, Blockchain, Wallet, Bank, Credit, Debit, Payment, Transaction, Transfer, Exchange, Trade, Market, Stock, Bond, Investment, Portfolio, Fund, Asset, Liability, Equity, Revenue, Profit, Loss, Income, Expense, Budget, Finance, Accounting, Bookkeeping, Tax, Audit, Compliance, Legal, Contract, Agreement, Terms, Conditions, Privacy, Security, Protection, Safety, Risk, Insurance, Claim, Policy, Coverage, Premium, Deductible, Copay, Coinsurance, OutOfPocket, Maximum, Minimum, Limit, Cap, Floor, Ceiling, Range, Scale, Level, Grade, Rank, Position, Status, State, Condition, Situation, Circumstance, Context, Environment, Setting, Location, Place, Address, City, State, Country, Region, Area, Zone, District, Neighborhood, Street, Road, Avenue, Boulevard, Lane, Drive, Court, Circle, Square, Plaza, Mall, Center, Complex, Building, Tower, Skyscraper, House, Home, Apartment, Condo, Townhouse, Villa, Mansion, Palace, Castle, Fort, Tower, Bridge, Tunnel, Highway, Freeway, Expressway, Parkway, Street, Road, Avenue, Boulevard, Lane, Drive, Court, Circle, Square, Plaza, Mall, Center, Complex, Building, Tower, Skyscraper, House, Home, Apartment, Condo, Townhouse, Villa, Mansion, Palace, Castle, Fort, Tower, Bridge, Tunnel, Highway, Freeway, Expressway, Parkway } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiCrmPro() {
  const features = [
    {
      title: "AI-Powered Lead Scoring",
      description: "Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns, engagement levels, and conversion probability.",
      icon: <Target className="w-6 h-6" />,
      benefits: ["95% accuracy in lead scoring", "Real-time lead prioritization", "Behavioral pattern analysis", "Predictive conversion modeling"]
    },
    {
      title: "Intelligent Contact Management",
      description: "Smart contact database with AI-powered data enrichment, duplicate detection, and automatic contact information updates.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Auto data enrichment", "Duplicate detection", "Contact deduplication", "Social media integration"]
    },
    {
      title: "Conversational AI Assistant",
      description: "AI-powered chatbot that handles customer inquiries, schedules meetings, and provides instant support 24/7.",
      icon: <MessageSquare className="w-6 h-6" />,
      benefits: ["24/7 customer support", "Natural language processing", "Multi-language support", "Sentiment analysis"]
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Advanced analytics and forecasting tools that predict sales trends, customer behavior, and revenue projections.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Sales forecasting", "Revenue predictions", "Customer lifetime value", "Churn prediction"]
    },
    {
      title: "Automated Workflow Engine",
      description: "Create complex sales and marketing workflows with AI-powered automation that adapts to your business processes.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Visual workflow builder", "AI-powered optimization", "Multi-channel automation", "Performance tracking"]
    },
    {
      title: "Advanced Reporting Suite",
      description: "Comprehensive reporting and analytics with custom dashboards, real-time insights, and automated report generation.",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Custom dashboards", "Real-time insights", "Automated reports", "Data visualization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 contacts",
        "Basic AI features",
        "Email integration",
        "Mobile app access",
        "Email support",
        "Basic reporting",
        "5 users included"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10,000 contacts",
        "Advanced AI features",
        "Full integrations",
        "Priority support",
        "Advanced analytics",
        "Custom workflows",
        "25 users included",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
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

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "SalesForce Solutions",
      role: "VP of Sales",
      content: "Zion AI CRM Pro has revolutionized our sales process. The AI lead scoring increased our conversion rate by 45% in just 3 months.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Sarah Williams",
      company: "Tech Innovations Inc.",
      role: "Sales Director",
      content: "The predictive analytics are incredibly accurate. We can now forecast our quarterly revenue with 95% accuracy.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Enterprises",
      role: "CRM Manager",
      content: "The AI assistant handles 80% of our customer inquiries automatically. Our response time improved from hours to minutes.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const stats = [
    { number: "15,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "45%", label: "Average Conversion Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "95%", label: "AI Accuracy Rate", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI CRM Pro - AI-Powered Customer Relationship Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your sales process with Zion AI CRM Pro. AI-powered lead scoring, predictive analytics, and automated workflows for modern sales teams."
        />
        <meta
          name="keywords"
          content="AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, sales forecasting, CRM software"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
                  <Brain className="w-4 h-4 text-indigo-400 mr-2" />
                  <span className="text-indigo-400 text-sm font-medium">AI-Powered CRM Platform</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion AI CRM
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
                    {" "}Pro
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your sales process with the world's most intelligent CRM platform. 
                  AI-powered lead scoring, predictive analytics, and automated workflows for modern sales teams.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    <h3 className="text-2xl font-bold text-white mb-2">AI CRM Dashboard</h3>
                    <p className="text-gray-300">See your sales data in action</p>
                  </div>
                  
                  {/* Mock CRM Dashboard */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">Pipeline Value</span>
                        <span className="text-green-400 text-sm">+23.5%</span>
                      </div>
                      <div className="text-2xl font-bold text-white">$2.4M</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                        <div className="text-white font-semibold text-sm mb-1">Active Leads</div>
                        <div className="text-xl font-bold text-white">1,247</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                        <div className="text-white font-semibold text-sm mb-1">Conversion Rate</div>
                        <div className="text-xl font-bold text-white">18.3%</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">AI Insights</span>
                        <span className="text-yellow-400 text-sm">Live</span>
                      </div>
                      <div className="text-sm text-gray-300">High-value leads identified: 23</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  AI-Powered Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your sales process with artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-indigo-300 transition-colors">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your sales team. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/25' 
                      : 'border-white/20 hover:border-indigo-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
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
                What Sales Teams Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of sales professionals already using Zion AI CRM Pro to boost their performance.
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
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
                Ready to Transform Your Sales?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to start your free trial or schedule a personalized demo.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-indigo-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-indigo-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-indigo-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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