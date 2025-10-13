import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";

export default function AIServices() {
  const aiServices = [
    {
      id: "ai-quantum-computing",
      name: "AI Quantum Computing Solutions",
      description: "Revolutionary quantum AI for complex optimization, cryptography, and scientific computing",
      price: "From $5,000/month",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Quantum machine learning algorithms",
        "Cryptographic security solutions",
        "Complex optimization problems",
        "Scientific simulation and modeling",
        "Quantum neural networks",
        "Advanced quantum algorithms",
        "Custom quantum applications",
        "Quantum cloud infrastructure"
      ],
      benefits: [
        "Solve problems 1000x faster than classical computers",
        "Breakthrough in cryptography and security",
        "Revolutionary optimization capabilities",
        "Next-generation scientific discoveries"
      ],
      category: "Quantum AI",
      rating: 4.9,
      reviews: 1247,
      link: "/ai-quantum-computing",
      featured: true
    },
    {
      id: "ai-blockchain-solutions",
      name: "AI Blockchain Solutions",
      description: "Intelligent blockchain applications with AI-powered smart contracts and decentralized systems",
      price: "From $3,500/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI-powered smart contracts",
        "Decentralized AI networks",
        "Blockchain data analytics",
        "Cryptocurrency trading algorithms",
        "NFT marketplace intelligence",
        "DeFi protocol optimization",
        "Cross-chain AI solutions",
        "Blockchain security AI"
      ],
      benefits: [
        "Automate complex blockchain operations",
        "Enhance security with AI monitoring",
        "Optimize DeFi protocols",
        "Create intelligent NFT ecosystems"
      ],
      category: "Blockchain AI",
      rating: 4.8,
      reviews: 892,
      link: "/ai-blockchain-solutions",
      featured: true
    },
    {
      id: "ai-powered-devops",
      name: "AI-Powered DevOps",
      description: "Intelligent automation for CI/CD pipelines, infrastructure management, and deployment optimization",
      price: "From $2,800/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Intelligent CI/CD automation",
        "Predictive infrastructure scaling",
        "Automated testing and QA",
        "Smart deployment strategies",
        "Performance monitoring AI",
        "Security vulnerability detection",
        "Cost optimization algorithms",
        "Self-healing infrastructure"
      ],
      benefits: [
        "Reduce deployment time by 80%",
        "Minimize infrastructure costs by 40%",
        "Eliminate human errors in deployments",
        "Achieve 99.9% uptime automatically"
      ],
      category: "DevOps AI",
      rating: 4.7,
      reviews: 1834,
      link: "/ai-powered-devops",
      featured: true
    },
    {
      id: "ai-cybersecurity-suite-pro",
      name: "AI Cybersecurity Suite Pro",
      description: "Next-generation AI security platform with threat detection, behavioral analysis, and automated response",
      price: "From $4,200/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "AI threat detection & prevention",
        "Behavioral analysis & anomaly detection",
        "Automated incident response",
        "Zero-day vulnerability protection",
        "Compliance monitoring (GDPR, HIPAA, SOX)",
        "24/7 AI security monitoring",
        "Predictive threat intelligence",
        "Custom AI model training"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 98%",
        "Ensure compliance requirements",
        "Save on security costs"
      ],
      category: "Security AI",
      rating: 4.8,
      reviews: 892,
      link: "/ai-cybersecurity-suite-pro",
      featured: false
    },
    {
      id: "ai-content-generation-pro",
      name: "AI Content Generation Pro",
      description: "Revolutionary AI content creation with natural language processing, multi-language support, and brand optimization",
      price: "From $2,200/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Advanced NLP content generation",
        "Multi-language support (100+ languages)",
        "Brand voice customization",
        "SEO optimization & keyword research",
        "Content calendar management",
        "Social media optimization",
        "Plagiarism detection & originality",
        "Performance analytics & insights"
      ],
      benefits: [
        "Create 20x more content",
        "Improve SEO rankings by 60%",
        "Maintain brand consistency",
        "Save 25+ hours weekly"
      ],
      category: "Content AI",
      rating: 4.7,
      reviews: 1834,
      link: "/ai-content-generation-pro",
      featured: false
    },
    {
      id: "ai-customer-support-chatbot",
      name: "AI Customer Support Chatbot",
      description: "Intelligent conversational AI with natural language understanding, sentiment analysis, and seamless human handoff",
      price: "From $2,800/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Natural language understanding",
        "Sentiment analysis & emotion detection",
        "Multi-channel support (web, mobile, social)",
        "Knowledge base integration",
        "Live chat handoff automation",
        "Performance analytics & insights",
        "Custom AI training & fine-tuning",
        "Multi-language support (50+ languages)"
      ],
      benefits: [
        "Reduce response time by 90%",
        "Handle 95% of queries automatically",
        "Improve customer satisfaction by 40%",
        "Scale support operations 10x"
      ],
      category: "Customer Service AI",
      rating: 4.8,
      reviews: 1654,
      link: "/ai-customer-support-chatbot",
      featured: false
    },
    {
      id: "ai-code-assistant-pro",
      name: "AI Code Assistant Pro",
      description: "Advanced AI-powered development tool with code generation, debugging, optimization, and intelligent suggestions",
      price: "From $1,800/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "AI code generation & completion",
        "Intelligent debugging & error detection",
        "Code optimization suggestions",
        "Multi-language support (50+ languages)",
        "Security vulnerability detection",
        "Performance analysis & optimization",
        "Code review automation",
        "Team collaboration features"
      ],
      benefits: [
        "Increase development speed by 50%",
        "Reduce bugs by 70%",
        "Improve code quality",
        "Accelerate learning & onboarding"
      ],
      category: "Development AI",
      rating: 4.9,
      reviews: 2156,
      link: "/ai-code-assistant-pro",
      featured: false
    },
    {
      id: "ai-business-intelligence-pro",
      name: "AI Business Intelligence Pro",
      description: "Comprehensive AI-driven BI platform with predictive modeling, automated insights, and strategic recommendations",
      price: "From $3,200/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Predictive modeling & forecasting",
        "Automated insight generation",
        "Strategic recommendation engine",
        "Real-time data processing",
        "Advanced visualization tools",
        "Custom dashboard creation",
        "API integration & data connectors",
        "White-label & customization"
      ],
      benefits: [
        "Make strategic decisions 3x faster",
        "Increase revenue by 45%",
        "Identify opportunities automatically",
        "Reduce analysis time by 80%"
      ],
      category: "Business Intelligence AI",
      rating: 4.8,
      reviews: 1123,
      link: "/ai-business-intelligence-pro",
      featured: false
    },
    {
      id: "ai-automation-platform",
      name: "AI Automation Platform",
      description: "Intelligent process automation with machine learning, workflow optimization, and adaptive decision making",
      price: "From $2,500/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Intelligent process automation",
        "Machine learning workflow optimization",
        "Adaptive decision making",
        "500+ app integrations",
        "Natural language process design",
        "Error handling & self-correction",
        "Performance analytics & optimization",
        "Custom AI model integration"
      ],
      benefits: [
        "Automate 90% of repetitive tasks",
        "Reduce errors by 95%",
        "Save 30+ hours weekly",
        "Improve process efficiency by 60%"
      ],
      category: "Automation AI",
      rating: 4.7,
      reviews: 1347,
      link: "/ai-automation-platform",
      featured: false
    },
    {
      id: "ai-data-analytics-pro",
      name: "AI Data Analytics Pro",
      description: "Advanced data analytics platform with machine learning, pattern recognition, and predictive insights",
      price: "From $2,800/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "Machine learning data analysis",
        "Pattern recognition & anomaly detection",
        "Predictive data modeling",
        "Real-time data processing",
        "Advanced statistical analysis",
        "Custom algorithm development",
        "Data visualization & reporting",
        "API integration & data connectors"
      ],
      benefits: [
        "Uncover hidden data insights",
        "Predict trends with 85% accuracy",
        "Reduce analysis time by 75%",
        "Make data-driven decisions"
      ],
      category: "Data Analytics AI",
      rating: 4.8,
      reviews: 987,
      link: "/ai-data-analytics-pro",
      featured: false
    },
    {
      id: "ai-marketing-automation",
      name: "AI Marketing Automation",
      description: "Intelligent marketing automation with AI-powered personalization, campaign optimization, and customer journey mapping",
      price: "From $2,200/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "AI-powered personalization",
        "Behavioral trigger campaigns",
        "Customer journey mapping",
        "A/B testing automation",
        "Predictive customer scoring",
        "Multi-channel campaign management",
        "Performance optimization",
        "ROI analysis & reporting"
      ],
      benefits: [
        "Increase conversion rates by 55%",
        "Improve customer engagement by 40%",
        "Reduce marketing costs by 35%",
        "Scale marketing efforts 10x"
      ],
      category: "Marketing AI",
      rating: 4.7,
      reviews: 1456,
      link: "/ai-marketing-automation",
      featured: false
    },
    {
      id: "ai-hr-recruitment-pro",
      name: "AI HR & Recruitment Pro",
      description: "Intelligent HR platform with AI-powered candidate screening, skill matching, and employee analytics",
      price: "From $2,600/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "AI candidate screening & matching",
        "Skill assessment & evaluation",
        "Bias-free hiring algorithms",
        "Employee performance analytics",
        "Predictive retention modeling",
        "Automated interview scheduling",
        "Onboarding automation",
        "Compliance monitoring"
      ],
      benefits: [
        "Reduce hiring time by 60%",
        "Improve candidate quality by 45%",
        "Eliminate hiring bias",
        "Increase employee retention by 30%"
      ],
      category: "HR AI",
      rating: 4.8,
      reviews: 876,
      link: "/ai-hr-recruitment-pro",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: aiServices.length, active: true },
    { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length, active: false },
    { name: "Blockchain AI", count: aiServices.filter(s => s.category === "Blockchain AI").length, active: false },
    { name: "DevOps AI", count: aiServices.filter(s => s.category === "DevOps AI").length, active: false },
    { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length, active: false },
    { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length, active: false },
    { name: "Customer Service AI", count: aiServices.filter(s => s.category === "Customer Service AI").length, active: false },
    { name: "Development AI", count: aiServices.filter(s => s.category === "Development AI").length, active: false },
    { name: "Business Intelligence AI", count: aiServices.filter(s => s.category === "Business Intelligence AI").length, active: false },
    { name: "Automation AI", count: aiServices.filter(s => s.category === "Automation AI").length, active: false },
    { name: "Data Analytics AI", count: aiServices.filter(s => s.category === "Data Analytics AI").length, active: false },
    { name: "Marketing AI", count: aiServices.filter(s => s.category === "Marketing AI").length, active: false },
    { name: "HR AI", count: aiServices.filter(s => s.category === "HR AI").length, active: false }
  ];

  const stats = [
    { number: "25+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
    { number: "15,000+", label: "AI Models Trained", icon: <Cpu className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Monitor className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Tech Innovations Inc",
      role: "Chief Data Officer",
      content: "The AI Quantum Computing solutions have revolutionized our research capabilities. We're solving complex optimization problems 1000x faster than before.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Finance Corp",
      role: "CTO",
      content: "The AI Blockchain solutions are incredibly sophisticated. We've automated our DeFi protocols and increased efficiency by 300%.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "Digital Marketing Agency",
      role: "CEO",
      content: "AI-Powered DevOps has transformed our deployment process. We're deploying 10x faster with zero errors. It's game-changing.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const aiCapabilities = [
    {
      title: "Machine Learning",
      description: "Advanced ML algorithms for predictive analytics, pattern recognition, and intelligent decision making",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Natural Language Processing",
      description: "Sophisticated NLP for content generation, sentiment analysis, and conversational AI",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Computer Vision",
      description: "Advanced image and video analysis for automation, quality control, and visual insights",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Analytics",
      description: "Intelligent forecasting and trend analysis for strategic business planning",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Quantum Computing",
      description: "Revolutionary quantum algorithms for complex optimization and scientific computing",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Blockchain Intelligence",
      description: "AI-powered smart contracts and decentralized systems for next-generation applications",
      icon: <Lock className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Cutting-edge AI services including quantum computing, blockchain AI, DevOps automation, and machine learning. Transform your business with advanced artificial intelligence solutions."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, quantum computing, blockchain AI, machine learning, NLP, computer vision, predictive analytics, AI automation, AI consulting"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>
      <EnhancedSEO
        title="AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group"
        description="Cutting-edge AI services including quantum computing, blockchain AI, DevOps automation, and machine learning. Transform your business with advanced artificial intelligence solutions."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Next-Generation AI Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Harness the power of cutting-edge artificial intelligence to transform your business. 
              From quantum computing to blockchain AI, we provide revolutionary solutions that drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                See AI in Action
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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

        {/* AI Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive artificial intelligence technologies to power your business transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${capability.color} rounded-xl mb-6`}>
                    <div className="text-white">{capability.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <div className="py-8 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured AI Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our most advanced AI solutions trusted by leading organizations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.filter(service => service.featured).map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      Get AI Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-16 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  All AI Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete artificial intelligence solutions for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="ml-1 text-xs font-medium">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm line-clamp-2">{service.description}</p>

                  <div className="flex items-center mb-3">
                    <span className="text-lg font-bold text-white">{service.price}</span>
                  </div>

                  <div className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="w-full inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how our AI solutions have transformed businesses across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our advanced AI solutions. Get a free consultation and discover the possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get AI Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                View Pricing
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}