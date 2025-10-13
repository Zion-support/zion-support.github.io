import { ArrowRight, Brain, Shield, Zap, Globe, BarChart3, Cloud, Bot, Code, FileText, Target, Users, TrendingUp, Mail, Smartphone, Star, CheckCircle, Sparkles, Lock, Clock, DollarSign, Award, Rocket, Database, Cpu, Wifi, Smartphone as Phone, Monitor, Server, Key, Eye, Search, Filter, Download, Upload, Settings, Bell, Heart, ThumbsUp, MessageCircle, Share2, Plus, Minus, RefreshCw, Play, Pause, Stop, Volume2, Camera, Image, Video, Music, Headphones, Mic, MicOff, VideoOff, WifiOff, Battery, Wifi as WifiIcon, Signal, SignalHigh, SignalLow, SignalZero, SignalMedium, SignalMax, SignalMin, SignalNone, SignalOne, SignalTwo, SignalThree, SignalFour, SignalFive, SignalSix, SignalSeven, SignalEight, SignalNine, SignalTen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive modeling, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$299/month",
      originalPrice: "$399/month",
      discount: "25% OFF",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time Dashboard",
        "Predictive Analytics", 
        "Custom Reports",
        "API Integration",
        "Data Visualization",
        "Mobile App",
        "24/7 Support"
      ],
      benefits: [
        "40% increase in decision speed",
        "60% reduction in manual reporting",
        "Real-time insights across all departments",
        "Automated anomaly detection"
      ],
      link: "/zion-analytics-pro",
      category: "Analytics",
      rating: 4.9,
      users: "2,500+",
      launchDate: "2024-01-15"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance monitoring for enterprise-grade security.",
      icon: <Shield className="w-8 h-8" />,
      price: "$499/month",
      originalPrice: "$699/month",
      discount: "28% OFF",
      color: "from-red-500 to-orange-500",
      features: [
        "AI Threat Detection",
        "Automated Response",
        "Compliance Reports",
        "24/7 Monitoring",
        "Vulnerability Scanning",
        "Incident Management",
        "Security Training"
      ],
      benefits: [
        "99.9% threat detection accuracy",
        "50% faster incident response",
        "Automated compliance reporting",
        "Reduced security costs by 35%"
      ],
      link: "/zion-security-shield",
      category: "Security",
      rating: 4.8,
      users: "1,800+",
      launchDate: "2024-02-01"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with AI-powered file organization, automated backup, and advanced encryption for maximum data protection.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$19/month",
      originalPrice: "$29/month",
      discount: "34% OFF",
      color: "from-indigo-500 to-purple-500",
      features: [
        "1TB Storage",
        "AI File Organization",
        "Automated Backup",
        "End-to-End Encryption",
        "File Sharing",
        "Version Control",
        "Mobile Sync"
      ],
      benefits: [
        "Unlimited file types supported",
        "99.99% uptime guarantee",
        "Automatic file categorization",
        "Cross-platform synchronization"
      ],
      link: "/zion-cloud-vault",
      category: "Storage",
      rating: 4.7,
      users: "5,200+",
      launchDate: "2024-01-01"
    },
    {
      id: "zion-ai-chatbot",
      name: "Zion AI Chatbot Pro",
      description: "Intelligent customer support chatbot with natural language processing, multi-language support, and seamless human handoff capabilities.",
      icon: <Bot className="w-8 h-8" />,
      price: "$199/month",
      originalPrice: "$299/month",
      discount: "33% OFF",
      color: "from-green-500 to-emerald-500",
      features: [
        "Multi-language Support",
        "Sentiment Analysis",
        "CRM Integration",
        "Live Chat Handoff",
        "Custom Training",
        "Analytics Dashboard",
        "API Access"
      ],
      benefits: [
        "80% reduction in support tickets",
        "24/7 customer availability",
        "Multilingual support in 50+ languages",
        "Seamless human agent escalation"
      ],
      link: "/zion-ai-chatbot",
      category: "Customer Support",
      rating: 4.9,
      users: "3,100+",
      launchDate: "2024-01-20"
    },
    {
      id: "zion-code-assistant",
      name: "Zion Code Assistant",
      description: "AI-powered code generation, review, and optimization tool supporting 20+ programming languages with automated testing and documentation.",
      icon: <Code className="w-8 h-8" />,
      price: "$149/month",
      originalPrice: "$199/month",
      discount: "25% OFF",
      color: "from-yellow-500 to-orange-500",
      features: [
        "Code Generation",
        "Bug Detection",
        "Performance Optimization",
        "Auto Documentation",
        "20+ Languages",
        "IDE Integration",
        "Team Collaboration"
      ],
      benefits: [
        "50% faster development",
        "90% reduction in bugs",
        "Automated code reviews",
        "Real-time optimization suggestions"
      ],
      link: "/zion-code-assistant",
      category: "Development",
      rating: 4.8,
      users: "4,300+",
      launchDate: "2024-02-10"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, marketing materials, and technical documentation with SEO optimization.",
      icon: <FileText className="w-8 h-8" />,
      price: "$129/month",
      originalPrice: "$179/month,
      discount: "28% OFF",
      color: "from-pink-500 to-rose-500",
      features: [
        "Content Generation",
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Social Media Scheduler",
        "Analytics Dashboard"
      ],
      benefits: [
        "10x faster content creation",
        "SEO-optimized content",
        "Consistent brand voice",
        "Multi-platform publishing"
      ],
      link: "/zion-content-studio",
      category: "Content",
      rating: 4.7,
      users: "2,800+",
      launchDate: "2024-01-25"
    },
    {
      id: "zion-marketing-automation",
      name: "Zion Marketing Automation",
      description: "End-to-end marketing automation platform with AI-driven personalization, email campaigns, and lead scoring for maximum ROI.",
      icon: <Target className="w-8 h-8" />,
      price: "$249/month",
      originalPrice: "$349/month",
      discount: "29% OFF",
      color: "from-purple-500 to-violet-500",
      features: [
        "Email Automation",
        "Lead Scoring",
        "A/B Testing",
        "Social Media Management",
        "Campaign Analytics",
        "Customer Segmentation",
        "ROI Tracking"
      ],
      benefits: [
        "300% increase in lead conversion",
        "Automated campaign optimization",
        "Personalized customer journeys",
        "Real-time performance tracking"
      ],
      link: "/zion-marketing-automation",
      category: "Marketing",
      rating: 4.8,
      users: "1,900+",
      launchDate: "2024-02-05"
    },
    {
      id: "zion-data-pipeline",
      name: "Zion Data Pipeline",
      description: "Automated data processing and ETL platform with real-time streaming, data transformation, and integration with 100+ data sources.",
      icon: <Database className="w-8 h-8" />,
      price: "$399/month",
      originalPrice: "$549/month,
      discount: "27% OFF",
      color: "from-teal-500 to-cyan-500",
      features: [
        "Real-time Streaming",
        "Data Transformation",
        "100+ Integrations",
        "Automated Scheduling",
        "Data Quality Checks",
        "Error Handling",
        "Monitoring Dashboard"
      ],
      benefits: [
        "99.9% data accuracy",
        "Real-time data processing",
        "Automated error recovery",
        "Scalable infrastructure"
      ],
      link: "/zion-data-pipeline",
      category: "Data",
      rating: 4.9,
      users: "1,200+",
      launchDate: "2024-01-30"
    },
    {
      id: "zion-iot-manager",
      name: "Zion IoT Manager",
      description: "Comprehensive IoT device management platform with real-time monitoring, predictive maintenance, and automated device provisioning.",
      icon: <Cpu className="w-8 h-8" />,
      price: "$179/month",
      originalPrice: "$249/month,
      discount: "28% OFF",
      color: "from-emerald-500 to-green-500",
      features: [
        "Device Management",
        "Real-time Monitoring",
        "Predictive Maintenance",
        "Automated Provisioning",
        "Firmware Updates",
        "Security Management",
        "Analytics Dashboard"
      ],
      benefits: [
        "50% reduction in downtime",
        "Predictive maintenance alerts",
        "Automated device onboarding",
        "Centralized device control"
      ],
      link: "/zion-iot-manager",
      category: "IoT",
      rating: 4.6,
      users: "950+",
      launchDate: "2024-02-15"
    },
    {
      id: "zion-api-gateway",
      name: "Zion API Gateway",
      description: "Enterprise-grade API management platform with rate limiting, authentication, monitoring, and automated documentation generation.",
      icon: <Key className="w-8 h-8" />,
      price: "$329/month",
      originalPrice: "$449/month,
      discount: "27% OFF",
      color: "from-amber-500 to-yellow-500",
      features: [
        "API Gateway",
        "Rate Limiting",
        "Authentication",
        "API Documentation",
        "Monitoring & Analytics",
        "Developer Portal",
        "Load Balancing"
      ],
      benefits: [
        "99.99% API uptime",
        "Automated API documentation",
        "Advanced security features",
        "Developer-friendly portal"
      ],
      link: "/zion-api-gateway",
      category: "API",
      rating: 4.7,
      users: "1,600+",
      launchDate: "2024-02-20"
    },
    {
      id: "zion-video-ai",
      name: "Zion Video AI Studio",
      description: "AI-powered video creation and editing platform with automated transcription, subtitle generation, and intelligent video optimization.",
      icon: <Video className="w-8 h-8" />,
      price: "$199/month",
      originalPrice: "$279/month,
      discount: "29% OFF",
      color: "from-rose-500 to-pink-500",
      features: [
        "AI Video Editing",
        "Auto Transcription",
        "Subtitle Generation",
        "Video Optimization",
        "Template Library",
        "Cloud Rendering",
        "Analytics Dashboard"
      ],
      benefits: [
        "90% faster video production",
        "Automated subtitle generation",
        "AI-powered video optimization",
        "Professional-quality output"
      ],
      link: "/zion-video-ai",
      category: "Video",
      rating: 4.8,
      users: "2,100+",
      launchDate: "2024-02-25"
    },
    {
      id: "zion-blockchain-tracker",
      name: "Zion Blockchain Tracker",
      description: "Comprehensive blockchain analytics platform with real-time transaction monitoring, smart contract analysis, and DeFi portfolio tracking.",
      icon: <Globe className="w-8 h-8" />,
      price: "$449/month",
      originalPrice: "$599/month,
      discount: "25% OFF",
      color: "from-violet-500 to-purple-500",
      features: [
        "Transaction Monitoring",
        "Smart Contract Analysis",
        "DeFi Portfolio Tracking",
        "Risk Assessment",
        "Real-time Alerts",
        "API Access",
        "Custom Dashboards"
      ],
      benefits: [
        "Real-time blockchain insights",
        "Advanced risk analysis",
        "Portfolio optimization",
        "Automated alert system"
      ],
      link: "/zion-blockchain-tracker",
      category: "Blockchain",
      rating: 4.9,
      users: "800+",
      launchDate: "2024-03-01"
    }
  ];

  const categories = [
    "All",
    "Analytics", 
    "Security",
    "Storage",
    "Customer Support",
    "Development",
    "Content",
    "Marketing",
    "Data",
    "IoT",
    "API",
    "Video",
    "Blockchain"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "Email support",
        "Standard templates",
        "1GB storage"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 25 users",
        "Advanced analytics",
        "Priority support",
        "Custom templates",
        "10GB storage",
        "API access"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Premium analytics",
        "24/7 support",
        "White-label options",
        "Unlimited storage",
        "Custom integrations",
        "Dedicated account manager"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including AI analytics, cybersecurity, cloud storage, chatbots, code assistants, content creation, marketing automation, and more. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="micro SAAS, business software, AI tools, analytics platform, cybersecurity, cloud storage, chatbot, code assistant, content creation, marketing automation, data pipeline, IoT management, API gateway, video AI, blockchain tracker"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">12+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use AI-powered software solutions that transform your business operations immediately. 
              From analytics to cybersecurity, we have the tools you need to succeed.
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">25,000+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">12+</div>
                <div className="text-gray-300 text-sm">Micro SAAS Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Flexible Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include 14-day free trial and no setup fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                    tier.popular 
                      ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20 scale-105' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover our comprehensive suite of AI-powered micro SAAS solutions designed to transform your business operations.
              </p>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full bg-white/10 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 border border-white/20 hover:border-cyan-400/50"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {service.discount}
                    </span>
                  </div>
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Service Icon and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-semibold">{service.rating}</span>
                      </div>
                    </div>
                    
                    {/* Service Info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{service.users} users</span>
                        <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-gray-400 line-through text-sm">{service.originalPrice}</span>
                      </div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-gray-400">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2 text-sm">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="text-xs text-gray-300 flex items-start">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Link
                        to={service.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group-hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group-hover:scale-105"
                      >
                        Try Free
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your free trial today and experience the power of AI-driven automation.
            </p>
            
            {/* Contact Information */}
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
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Schedule Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}