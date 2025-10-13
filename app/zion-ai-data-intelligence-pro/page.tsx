import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Database, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  Star, 
  Award,
  Shield,
  Cloud,
  Code,
  Mail,
  Smartphone,
  Monitor,
  Globe,
  DollarSign,
  Settings,
  FileText,
  MessageSquare,
  Calendar,
  Search,
  Filter,
  Eye,
  Heart,
  ThumbsUp,
  Rocket,
  Cpu,
  Wifi,
  Battery,
  Camera,
  Headphones,
  Mic,
  Video,
  Image,
  Music,
  BookOpen,
  Lightbulb,
  Puzzle,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Gift,
  Tag,
  Percent,
  Calculator,
  PieChart,
  LineChart,
  Activity,
  Layers,
  Grid,
  List,
  Map,
  Compass,
  Navigation,
  Globe2,
  WifiOff,
  Signal,
  Bluetooth,
  Usb,
  HardDrive,
  MemoryStick,
  Printer,
  Scanner,
  Fax,
  Phone,
  Voicemail,
  Headset,
  Speaker,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Hourglass,
  Bell,
  Bookmark,
  Briefcase,
  Building,
  Clipboard,
  Command,
  Compass as CompassIcon,
  Download,
  Edit,
  ExternalLink,
  Flag,
  Folder,
  Home,
  Info,
  Key,
  Lock,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  MoreVertical,
  Plus,
  Save,
  Send,
  Share,
  Trash2,
  Upload,
  User,
  UserCheck,
  UserPlus,
  UserX,
  X,
  Clock,
  Users
} from "lucide-react";
import SEOOptimizer from "@/components/SEOOptimizer";
import FuturisticCard from "@/components/FuturisticCard";
import FuturisticButton from "@/components/FuturisticButton";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import ResponsiveGrid from "@/components/ResponsiveGrid";

export default function ZionAiDataIntelligencePro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms automatically discover patterns and generate actionable business insights"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Live dashboards with instant data processing and visualization for immediate decision-making"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Predictive Modeling",
      description: "Forecast future trends, customer behavior, and market conditions with 95% accuracy"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Integration",
      description: "Connect and analyze data from 100+ sources including databases, APIs, and cloud platforms"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "AI automatically optimizes queries and data processing for maximum performance and efficiency"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      description: "Enterprise-grade security with encryption, access controls, and compliance monitoring"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      originalPrice: "$199",
      discount: "50% OFF",
      features: [
        "Up to 1M data points",
        "Basic AI insights",
        "5 data sources",
        "Standard dashboards",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      originalPrice: "$599",
      discount: "50% OFF",
      features: [
        "Up to 10M data points",
        "Advanced AI features",
        "Unlimited data sources",
        "Custom dashboards",
        "Priority support",
        "API access",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      originalPrice: "$1599",
      discount: "50% OFF",
      features: [
        "Unlimited data points",
        "Premium AI capabilities",
        "Custom AI training",
        "White-label solution",
        "24/7 dedicated support",
        "On-premise deployment",
        "Custom compliance",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase Revenue",
      description: "Data-driven insights help increase revenue by 25% on average"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Automated analysis saves 20+ hours per week on data processing"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Better Decisions",
      description: "Make informed decisions with AI-powered predictions and recommendations"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reduce Costs",
      description: "Eliminate manual data processing and reduce analytics costs by 60%"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Liu",
      role: "Chief Data Officer",
      company: "Retail Analytics Corp",
      content: "Zion AI Data Intelligence Pro transformed our analytics capabilities. We now make data-driven decisions 10x faster with incredible accuracy.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Michael Brown",
      role: "VP of Analytics",
      company: "Financial Services Group",
      content: "The predictive modeling features are outstanding. We've increased our forecasting accuracy by 40% and saved millions in operational costs.",
      rating: 5,
      avatar: "MB"
    },
    {
      name: "Sarah Davis",
      role: "Head of Business Intelligence",
      company: "E-commerce Platform",
      content: "Best analytics platform we've used. The AI insights have helped us identify new revenue opportunities worth millions.",
      rating: 5,
      avatar: "SD"
    }
  ];

  const aiCapabilities = [
    {
      title: "Natural Language Queries",
      description: "Ask questions in plain English and get instant answers from your data using advanced NLP",
      icon: <MessageSquare className="w-8 h-8" />,
      features: ["Voice queries", "Text analysis", "Multi-language support", "Context understanding"]
    },
    {
      title: "Automated Report Generation",
      description: "AI automatically generates comprehensive reports with insights, visualizations, and recommendations",
      icon: <FileText className="w-8 h-8" />,
      features: ["Scheduled reports", "Custom templates", "Multi-format export", "Smart summaries"]
    },
    {
      title: "Anomaly Detection",
      description: "Machine learning algorithms automatically detect unusual patterns and alert you to potential issues",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ["Real-time monitoring", "Pattern recognition", "Alert system", "Root cause analysis"]
    },
    {
      title: "Customer Segmentation",
      description: "AI-powered customer analysis and segmentation for targeted marketing and personalization",
      icon: <Users className="w-8 h-8" />,
      features: ["Behavioral analysis", "Predictive scoring", "Lifecycle tracking", "Personalization engine"]
    }
  ];

  const dataSources = [
    { name: "Databases", icon: <Database className="w-6 h-6" />, count: "50+" },
    { name: "APIs", icon: <Code className="w-6 h-6" />, count: "100+" },
    { name: "Cloud Platforms", icon: <Cloud className="w-6 h-6" />, count: "20+" },
    { name: "File Formats", icon: <FileText className="w-6 h-6" />, count: "15+" },
    { name: "Social Media", icon: <Globe className="w-6 h-6" />, count: "10+" },
    { name: "IoT Devices", icon: <Wifi className="w-6 h-6" />, count: "Unlimited" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Data Intelligence Pro - Advanced Analytics Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your data into actionable insights with Zion AI Data Intelligence Pro. AI-powered analytics, predictive modeling, and real-time dashboards. Start free trial!"
        />
        <meta
          name="keywords"
          content="AI data analytics, business intelligence, predictive analytics, data visualization, machine learning, data insights"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-data-intelligence-pro" />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Data Analytics
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Zion AI Data Intelligence
                <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with the most advanced AI-powered analytics platform. 
                Make smarter decisions with predictive modeling and real-time intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </FuturisticButton>
                <FuturisticButton
                  href="#demo"
                  variant="outline"
                  className="border-green-500 text-green-300 hover:bg-green-500/20 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </FuturisticButton>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1B+</div>
                <div className="text-gray-300">Data Points Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                <div className="text-gray-300">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4.9★</div>
                <div className="text-gray-300">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence for superior data analysis
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {aiCapabilities.map((capability, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-green-900/30 border border-green-500/20"
                >
                  <div className="text-green-400 mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Data Sources Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-green-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Connect Any Data Source
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly integrate with 200+ data sources and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {dataSources.map((source, index) => (
                <FuturisticCard
                  key={index}
                  className="p-6 text-center bg-gradient-to-br from-slate-800/50 to-green-900/30 border border-green-500/20"
                >
                  <div className="text-green-400 mb-3">{source.icon}</div>
                  <div className="text-lg font-semibold text-white mb-1">{source.name}</div>
                  <div className="text-sm text-gray-400">{source.count}</div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform data into business value
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-green-900/30 border border-green-500/20"
                >
                  <div className="text-green-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-green-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your data analytics needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard
                  key={index}
                  className={`p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/50 scale-105'
                      : 'bg-gradient-to-br from-slate-800/50 to-green-900/30 border-green-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-400 line-through">{plan.originalPrice}</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {plan.discount}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <FuturisticButton
                    href="/contact"
                    className={`w-full py-3 font-semibold rounded-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                        : 'border border-green-500 text-green-300 hover:bg-green-500/20'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI Analytics Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses transforming their data into competitive advantage
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 text-center bg-gradient-to-br from-slate-800/50 to-green-900/30 border border-green-500/20"
                >
                  <div className="text-green-400 mb-4 mx-auto w-fit">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-green-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are achieving remarkable results with AI-powered analytics
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-green-900/30 border border-green-500/20"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <FuturisticCard className="p-12 text-center bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/50">
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Data Into Intelligence
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Stop guessing and start knowing. Get AI-powered insights that drive real business results. 
                Start your free trial today - no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </FuturisticButton>
                <FuturisticButton
                  href="tel:+13024640950"
                  variant="outline"
                  className="border-green-500 text-green-300 hover:bg-green-500/20 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Call: +1 302 464 0950
                  <Phone className="ml-2 h-5 w-5" />
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}