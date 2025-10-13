import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Target, 
  Users, 
  DollarSign, 
  PieChart, 
  LineChart, 
  Activity, 
  Zap, 
  Eye, 
  Globe, 
  Shield, 
  Award,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Settings,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Crown,
  Diamond,
  Flame,
  Thunder,
  Sun,
  Moon,
  Heart,
  ThumbsUp,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Gift,
  Tag,
  Percent,
  Calculator,
  Monitor,
  Smartphone,
  Wifi,
  HardDrive,
  MemoryStick,
  Printer,
  Scanner,
  Fax,
  Phone,
  Voicemail,
  Headset,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
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
  Diamond as DiamondIcon,
  Star as StarIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
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
  Filter,
  Download,
  Share,
  Mail,
  MessageSquare,
  Calendar,
  Search,
  Bell,
  BookOpen,
  Lightbulb,
  Puzzle,
  Gamepad2,
  Package,
  Receipt,
  ClipboardList,
  Workflow
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIBusinessIntelligencePro = () => {
  const features = [
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend analysis to predict future business outcomes with high accuracy",
      icon: <Brain className="w-6 h-6" />,
      stats: "85% prediction accuracy"
    },
    {
      title: "Natural Language Queries",
      description: "Ask questions in plain English and get instant insights from your data using conversational AI",
      icon: <MessageSquare className="w-6 h-6" />,
      stats: "50+ languages supported"
    },
    {
      title: "Real-time Dashboards",
      description: "Live dashboards that update automatically with real-time data from all your business systems",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Sub-second updates"
    },
    {
      title: "Custom AI Models",
      description: "Build and deploy custom machine learning models tailored to your specific business needs",
      icon: <Cpu className="w-6 h-6" />,
      stats: "Unlimited models"
    },
    {
      title: "Automated Insights",
      description: "AI automatically discovers patterns, anomalies, and opportunities in your data",
      icon: <Eye className="w-6 h-6" />,
      stats: "100+ insight types"
    },
    {
      title: "Multi-source Integration",
      description: "Connect and analyze data from CRM, ERP, marketing tools, and other business systems",
      icon: <Globe className="w-6 h-6" />,
      stats: "200+ integrations"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "month",
      description: "Perfect for small businesses getting started with business intelligence",
      features: [
        "Up to 5 users",
        "Basic dashboards",
        "Standard reports",
        "5 data sources",
        "Email support",
        "Monthly insights"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$499",
      period: "month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 25 users",
        "Advanced dashboards",
        "Predictive analytics",
        "Custom AI models",
        "20 data sources",
        "Priority support",
        "Real-time alerts",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "month",
      description: "For large organizations with complex data and analytics requirements",
      features: [
        "Unlimited users",
        "Custom dashboards",
        "Advanced AI insights",
        "White-label solution",
        "Unlimited data sources",
        "Dedicated support",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const analyticsModules = [
    {
      title: "Sales Analytics",
      description: "Comprehensive sales performance analysis with forecasting and optimization",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Revenue forecasting", "Sales pipeline analysis", "Performance tracking", "Goal setting"]
    },
    {
      title: "Customer Analytics",
      description: "Deep insights into customer behavior, preferences, and lifetime value",
      icon: <Users className="w-8 h-8" />,
      features: ["Customer segmentation", "Churn prediction", "Lifetime value", "Behavior analysis"]
    },
    {
      title: "Marketing Analytics",
      description: "Track and optimize marketing campaigns across all channels and touchpoints",
      icon: <Target className="w-8 h-8" />,
      features: ["Campaign performance", "ROI analysis", "Attribution modeling", "A/B testing"]
    },
    {
      title: "Financial Analytics",
      description: "Comprehensive financial analysis with budgeting, forecasting, and reporting",
      icon: <DollarSign className="w-8 h-8" />,
      features: ["Financial forecasting", "Budget analysis", "Profitability analysis", "Cash flow"]
    },
    {
      title: "Operations Analytics",
      description: "Optimize operational efficiency with data-driven insights and recommendations",
      icon: <Settings className="w-8 h-8" />,
      features: ["Process optimization", "Resource allocation", "Performance metrics", "Efficiency tracking"]
    },
    {
      title: "Risk Analytics",
      description: "Identify and mitigate business risks with advanced risk modeling and monitoring",
      icon: <Shield className="w-8 h-8" />,
      features: ["Risk assessment", "Fraud detection", "Compliance monitoring", "Early warning"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Retail Chain",
      role: "VP of Analytics",
      content: "Zion AI Business Intelligence Pro has transformed our decision-making process. We can now predict sales trends with 90% accuracy and make data-driven decisions in real-time.",
      rating: 5,
      avatar: "SC",
      results: "90% prediction accuracy"
    },
    {
      name: "Michael Rodriguez",
      company: "SaaS Company",
      role: "Head of Data",
      content: "The natural language queries and automated insights have made analytics accessible to everyone in our organization. Our data adoption increased by 300%.",
      rating: 5,
      avatar: "MR",
      results: "300% adoption increase"
    },
    {
      name: "Emily Johnson",
      company: "Manufacturing",
      role: "Operations Director",
      content: "The predictive analytics helped us optimize our supply chain and reduce costs by 25%. The ROI on this platform has been incredible.",
      rating: 5,
      avatar: "EJ",
      results: "25% cost reduction"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Using", icon: <Users className="w-6 h-6" /> },
    { number: "1B+", label: "Data Points Analyzed", icon: <Database className="w-6 h-6" /> },
    { number: "85%", label: "Prediction Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "50%", label: "Faster Decision Making", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI Business Intelligence Pro - Advanced Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business data into actionable insights with AI-powered business intelligence. Predictive analytics, natural language queries, and real-time dashboards. Start your free trial today!" />
        <meta name="keywords" content="AI business intelligence, predictive analytics, data visualization, business analytics, data insights, dashboard, reporting, machine learning, data science" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-business-intelligence-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <BarChart3 className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Business Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              AI Business Intelligence Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business data into actionable insights with our AI-powered analytics platform. 
            Predict trends, ask questions in natural language, and make data-driven decisions with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful AI features that transform raw data into actionable business insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Analytics Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized analytics modules for every aspect of your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsModules.map((module, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                  {module.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {module.description}
                </p>
                <div className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Analytics Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and scale as your data needs grow. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#signup"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Data Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how companies are using AI business intelligence to drive growth and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-blue-400">{testimonial.results}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Data into Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of companies using AI business intelligence to make better decisions, 
              predict trends, and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<BarChart3 className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Eye className="w-5 h-5" />}
              >
                View Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>14-day free trial • No setup fees • Cancel anytime</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIBusinessIntelligencePro;