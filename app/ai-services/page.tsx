import React from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Box, Atom, Pill, Bot, Link } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AIServices() {
  const aiServices = [
    {
      id: "ai-analytics-dashboard-pro",
      name: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered business intelligence platform with predictive analytics, real-time insights, and automated reporting",
      price: "From $2,500/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time predictive analytics",
        "Machine learning insights",
        "Automated report generation",
        "Custom data visualization",
        "Multi-platform integration",
        "Advanced filtering & segmentation",
        "Export to PDF/Excel/CSV",
        "White-label options"
      ],
      benefits: [
        "Increase revenue by 35%",
        "Reduce reporting time by 85%",
        "Make data-driven decisions",
        "Scale with your business"
      ],
      category: "Analytics",
      rating: 4.9,
      reviews: 1247,
      link: "/ai-analytics-dashboard-pro",
      featured: true
    },
    {
      id: "ai-3d-generation-pro",
      name: "AI 3D Generation Pro",
      description: "Revolutionary AI-powered 3D content creation with photorealistic rendering, animation, and virtual reality integration",
      price: "From $3,500/month",
      icon: <Box className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI 3D model generation",
        "Photorealistic rendering",
        "Animation automation",
        "VR/AR integration",
        "Material library (10,000+ materials)",
        "Lighting optimization",
        "Physics simulation",
        "Real-time collaboration"
      ],
      benefits: [
        "Create 3D content 20x faster",
        "Reduce production costs by 70%",
        "Enable immersive experiences",
        "Scale 3D content production"
      ],
      category: "3D & VR",
      rating: 4.8,
      reviews: 456,
      link: "/ai-3d-generation-pro",
      featured: true
    },
    {
      id: "ai-quantum-computing-simulator",
      name: "AI Quantum Computing Simulator",
      description: "Advanced quantum computing simulation with AI optimization for complex problem solving and research applications",
      price: "From $5,000/month",
      icon: <Atom className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Quantum circuit simulation",
        "AI algorithm optimization",
        "Quantum machine learning",
        "Multi-qubit operations",
        "Error correction modeling",
        "Quantum cryptography",
        "Research collaboration tools",
        "API integration"
      ],
      benefits: [
        "Solve complex optimization problems",
        "Accelerate quantum research",
        "Reduce computational costs",
        "Enable breakthrough discoveries"
      ],
      category: "Quantum Computing",
      rating: 4.9,
      reviews: 234,
      link: "/ai-quantum-computing-simulator",
      featured: true
    },
    {
      id: "ai-climate-prediction-engine",
      name: "AI Climate Prediction Engine",
      description: "Advanced climate modeling and prediction system with AI-powered weather forecasting and environmental impact analysis",
      price: "From $4,200/month",
      icon: <CloudRain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Long-term climate modeling",
        "Weather pattern prediction",
        "Environmental impact analysis",
        "Carbon footprint tracking",
        "Renewable energy optimization",
        "Disaster risk assessment",
        "Global data integration",
        "Real-time monitoring"
      ],
      benefits: [
        "Improve climate predictions by 60%",
        "Optimize renewable energy systems",
        "Reduce environmental risks",
        "Support sustainable development"
      ],
      category: "Climate & Environment",
      rating: 4.7,
      reviews: 189,
      link: "/ai-climate-prediction-engine",
      featured: false
    },
    {
      id: "ai-drug-discovery-pro",
      name: "AI Drug Discovery Pro",
      description: "Revolutionary AI platform for pharmaceutical research with molecular design, drug interaction analysis, and clinical trial optimization",
      price: "From $8,500/month",
      icon: <Pill className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Molecular structure design",
        "Drug interaction prediction",
        "Clinical trial optimization",
        "Side effect analysis",
        "Target identification",
        "Compound screening",
        "Regulatory compliance",
        "Research collaboration"
      ],
      benefits: [
        "Accelerate drug development by 50%",
        "Reduce R&D costs by 40%",
        "Improve success rates",
        "Enable personalized medicine"
      ],
      category: "Healthcare & Pharma",
      rating: 4.9,
      reviews: 167,
      link: "/ai-drug-discovery-pro",
      featured: false
    },
    {
      id: "ai-space-mission-optimizer",
      name: "AI Space Mission Optimizer",
      description: "Advanced AI system for space mission planning, satellite optimization, and interplanetary navigation",
      price: "From $6,000/month",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      features: [
        "Mission trajectory optimization",
        "Satellite constellation management",
        "Resource allocation planning",
        "Risk assessment & mitigation",
        "Communication optimization",
        "Fuel efficiency analysis",
        "Launch window prediction",
        "Mission simulation"
      ],
      benefits: [
        "Optimize mission success rates",
        "Reduce fuel consumption by 30%",
        "Minimize mission risks",
        "Enable complex space operations"
      ],
      category: "Space Technology",
      rating: 4.8,
      reviews: 89,
      link: "/ai-space-mission-optimizer",
      featured: false
    },
    {
      id: "ai-neural-interface",
      name: "AI Neural Interface",
      description: "Cutting-edge brain-computer interface with AI-powered neural signal processing and cognitive enhancement",
      price: "From $7,500/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Neural signal processing",
        "Cognitive enhancement algorithms",
        "Real-time brain monitoring",
        "Motor control optimization",
        "Memory enhancement",
        "Attention training",
        "Medical diagnostics",
        "Research collaboration"
      ],
      benefits: [
        "Enhance cognitive abilities",
        "Improve medical diagnostics",
        "Enable assistive technologies",
        "Advance neuroscience research"
      ],
      category: "Neural Technology",
      rating: 4.6,
      reviews: 123,
      link: "/ai-neural-interface",
      featured: false
    },
    {
      id: "ai-autonomous-systems",
      name: "AI Autonomous Systems",
      description: "Advanced AI platform for autonomous vehicle control, robotics, and intelligent automation systems",
      price: "From $4,800/month",
      icon: <Bot className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Autonomous vehicle control",
        "Robotic process automation",
        "Computer vision integration",
        "Sensor fusion algorithms",
        "Path planning optimization",
        "Collision avoidance",
        "Fleet management",
        "Real-time decision making"
      ],
      benefits: [
        "Improve safety by 95%",
        "Reduce operational costs by 40%",
        "Enable 24/7 operations",
        "Scale autonomous systems"
      ],
      category: "Autonomous Systems",
      rating: 4.7,
      reviews: 445,
      link: "/ai-autonomous-systems",
      featured: false
    },
    {
      id: "ai-blockchain-analytics",
      name: "AI Blockchain Analytics",
      description: "Intelligent blockchain analysis platform with transaction monitoring, fraud detection, and DeFi optimization",
      price: "From $3,200/month",
      icon: <Link className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Transaction pattern analysis",
        "Fraud detection algorithms",
        "DeFi protocol optimization",
        "Smart contract auditing",
        "Market sentiment analysis",
        "Risk assessment tools",
        "Compliance monitoring",
        "Real-time alerts"
      ],
      benefits: [
        "Detect fraud with 99% accuracy",
        "Optimize DeFi strategies",
        "Reduce security risks",
        "Improve compliance"
      ],
      category: "Blockchain & Crypto",
      rating: 4.8,
      reviews: 678,
      link: "/ai-blockchain-analytics",
      featured: false
    },
    {
      id: "ai-holographic-workspace",
      name: "AI Holographic Workspace",
      description: "Revolutionary 3D holographic collaboration platform with AI-powered spatial computing and virtual presence",
      price: "From $5,500/month",
      icon: <Box className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      features: [
        "3D holographic displays",
        "Spatial computing AI",
        "Virtual presence technology",
        "Collaborative workspaces",
        "Gesture recognition",
        "Voice command integration",
        "Real-time rendering",
        "Multi-user support"
      ],
      benefits: [
        "Enable immersive collaboration",
        "Reduce travel costs by 80%",
        "Improve team productivity",
        "Create engaging experiences"
      ],
      category: "Immersive Technology",
      rating: 4.7,
      reviews: 234,
      link: "/ai-holographic-workspace",
      featured: false
    },
    {
      id: "ai-cybersecurity-suite-pro",
      name: "AI Cybersecurity Suite Pro",
      description: "Next-generation AI-powered security platform with threat detection, behavioral analysis, and automated response",
      price: "From $3,200/month",
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
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/ai-cybersecurity-suite-pro",
      featured: true
    },
    {
      id: "ai-content-generation-pro",
      name: "AI Content Generation Pro",
      description: "Revolutionary AI content creation platform with natural language processing, multi-language support, and brand optimization",
      price: "From $1,800/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
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
      category: "Content",
      rating: 4.7,
      reviews: 1834,
      link: "/ai-content-generation-pro",
      featured: true
    },
    {
      id: "ai-customer-support-chatbot",
      name: "AI Customer Support Chatbot",
      description: "Intelligent conversational AI with natural language understanding, sentiment analysis, and seamless human handoff",
      price: "From $2,200/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
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
      category: "Customer Service",
      rating: 4.8,
      reviews: 1654,
      link: "/ai-customer-support-chatbot",
      featured: true
    },
    {
      id: "ai-code-assistant-pro",
      name: "AI Code Assistant Pro",
      description: "Advanced AI-powered development tool with code generation, debugging, optimization, and intelligent suggestions",
      price: "From $1,500/month",
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
      category: "Development",
      rating: 4.9,
      reviews: 2156,
      link: "/ai-code-assistant-pro",
      featured: false
    },
    {
      id: "ai-business-intelligence-pro",
      name: "AI Business Intelligence Pro",
      description: "Comprehensive AI-driven BI platform with predictive modeling, automated insights, and strategic recommendations",
      price: "From $2,800/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
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
      category: "Business Intelligence",
      rating: 4.8,
      reviews: 1123,
      link: "/ai-business-intelligence-pro",
      featured: false
    },
    {
      id: "ai-automation-platform",
      name: "AI Automation Platform",
      description: "Intelligent process automation with machine learning, workflow optimization, and adaptive decision making",
      price: "From $2,000/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
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
      category: "Automation",
      rating: 4.7,
      reviews: 1347,
      link: "/ai-automation-platform",
      featured: false
    },
    {
      id: "ai-data-analytics-pro",
      name: "AI Data Analytics Pro",
      description: "Advanced data analytics platform with machine learning, pattern recognition, and predictive insights",
      price: "From $2,300/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
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
      category: "Data Analytics",
      rating: 4.8,
      reviews: 987,
      link: "/ai-data-analytics-pro",
      featured: false
    },
    {
      id: "ai-marketing-automation",
      name: "AI Marketing Automation",
      description: "Intelligent marketing automation with AI-powered personalization, campaign optimization, and customer journey mapping",
      price: "From $1,900/month",
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
      category: "Marketing",
      rating: 4.7,
      reviews: 1456,
      link: "/ai-marketing-automation",
      featured: false
    },
    {
      id: "ai-hr-recruitment-pro",
      name: "AI HR & Recruitment Pro",
      description: "Intelligent HR platform with AI-powered candidate screening, skill matching, and employee analytics",
      price: "From $2,100/month",
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
      category: "HR & Recruitment",
      rating: 4.8,
      reviews: 876,
      link: "/ai-hr-recruitment-pro",
      featured: false
    },
    {
      id: "ai-financial-analysis",
      name: "AI Financial Analysis",
      description: "Advanced AI financial platform with risk assessment, fraud detection, and automated financial reporting",
      price: "From $2,600/month",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "AI risk assessment & modeling",
        "Fraud detection & prevention",
        "Automated financial reporting",
        "Predictive financial analytics",
        "Compliance monitoring",
        "Real-time transaction analysis",
        "Custom financial models",
        "Integration with accounting systems"
      ],
      benefits: [
        "Reduce financial risks by 70%",
        "Detect fraud with 99% accuracy",
        "Automate 80% of financial tasks",
        "Improve financial decision making"
      ],
      category: "Finance",
      rating: 4.9,
      reviews: 654,
      link: "/ai-financial-analysis",
      featured: false
    },
    {
      id: "ai-supply-chain-optimizer",
      name: "AI Supply Chain Optimizer",
      description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning",
      price: "From $2,400/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      features: [
        "Demand forecasting & planning",
        "Inventory optimization algorithms",
        "Logistics route optimization",
        "Supplier risk assessment",
        "Real-time supply chain monitoring",
        "Cost optimization analysis",
        "Sustainability tracking",
        "Integration with ERP systems"
      ],
      benefits: [
        "Reduce inventory costs by 25%",
        "Improve demand accuracy by 40%",
        "Optimize logistics efficiency",
        "Minimize supply chain risks"
      ],
      category: "Supply Chain",
      rating: 4.7,
      reviews: 432,
      link: "/ai-supply-chain-optimizer",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: aiServices.length, active: true },
    { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "Security", count: aiServices.filter(s => s.category === "Security").length, active: false },
    { name: "Content", count: aiServices.filter(s => s.category === "Content").length, active: false },
    { name: "Customer Service", count: aiServices.filter(s => s.category === "Customer Service").length, active: false },
    { name: "Development", count: aiServices.filter(s => s.category === "Development").length, active: false },
    { name: "Business Intelligence", count: aiServices.filter(s => s.category === "Business Intelligence").length, active: false },
    { name: "Automation", count: aiServices.filter(s => s.category === "Automation").length, active: false },
    { name: "Data Analytics", count: aiServices.filter(s => s.category === "Data Analytics").length, active: false },
    { name: "Marketing", count: aiServices.filter(s => s.category === "Marketing").length, active: false },
    { name: "HR & Recruitment", count: aiServices.filter(s => s.category === "HR & Recruitment").length, active: false },
    { name: "Finance", count: aiServices.filter(s => s.category === "Finance").length, active: false },
    { name: "Supply Chain", count: aiServices.filter(s => s.category === "Supply Chain").length, active: false },
    { name: "3D & VR", count: aiServices.filter(s => s.category === "3D & VR").length, active: false },
    { name: "Quantum Computing", count: aiServices.filter(s => s.category === "Quantum Computing").length, active: false },
    { name: "Climate & Environment", count: aiServices.filter(s => s.category === "Climate & Environment").length, active: false },
    { name: "Healthcare & Pharma", count: aiServices.filter(s => s.category === "Healthcare & Pharma").length, active: false },
    { name: "Space Technology", count: aiServices.filter(s => s.category === "Space Technology").length, active: false },
    { name: "Neural Technology", count: aiServices.filter(s => s.category === "Neural Technology").length, active: false },
    { name: "Autonomous Systems", count: aiServices.filter(s => s.category === "Autonomous Systems").length, active: false },
    { name: "Blockchain & Crypto", count: aiServices.filter(s => s.category === "Blockchain & Crypto").length, active: false },
    { name: "Immersive Technology", count: aiServices.filter(s => s.category === "Immersive Technology").length, active: false }
  ];

  const stats = [
    { number: "50+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
    { number: "25,000+", label: "AI Models Trained", icon: <Cpu className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Monitor className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Tech Innovations Inc",
      role: "Chief Data Officer",
      content: "The AI Analytics Dashboard Pro has revolutionized our data insights. We've increased revenue by 40% and reduced analysis time by 80% in just 6 months.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Finance Corp",
      role: "CTO",
      content: "The AI Cybersecurity Suite Pro is incredibly sophisticated. We've had zero security breaches since implementation, and our compliance scores are perfect.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "Digital Marketing Agency",
      role: "CEO",
      content: "AI Content Generation Pro has transformed our content strategy. We're producing 20x more content with better quality and higher engagement rates.",
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
      title: "Automated Decision Making",
      description: "AI-powered decision engines for process optimization and intelligent automation",
      icon: <Settings className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Deep Learning",
      description: "Neural networks for complex pattern recognition and advanced AI capabilities",
      icon: <Layers className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Cutting-edge AI services including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with advanced artificial intelligence."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, AI automation, AI consulting, AI development"
        />
      </Helmet>
      <SEOOptimizer
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Cutting-edge AI services including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with advanced artificial intelligence."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  AI Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business. 
                From machine learning to natural language processing, we provide cutting-edge AI solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">50+ AI services</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">25,000+ models trained</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">99.9% accuracy rate</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 AI monitoring</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  See AI in Action
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Capabilities */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive artificial intelligence technologies to power your business transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
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
        </div>

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
        <div className="py-16">
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
        </div>

        {/* All Services Grid */}
        <div className="py-16 bg-black/10 backdrop-blur-sm">
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
        </div>

        {/* Testimonials */}
        <div className="py-16">
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
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
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
        </div>
      </div>
    </>
  );
}