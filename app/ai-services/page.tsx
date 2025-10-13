import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, 
  Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, 
  Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, 
  Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, 
  Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, 
  Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, 
  Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, 
  Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, 
  WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, 
  Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, 
  Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, 
  Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, 
  Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, 
  Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, 
  Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, 
  Package, Receipt, ClipboardList, Workflow, Sparkles, Smartphone
} from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      featured: true
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
    },
    {
      id: "ai-video-generation-pro",
      name: "AI Video Generation Pro",
      description: "Revolutionary AI video creation platform with text-to-video, voice synthesis, and advanced editing capabilities",
      price: "From $1,800/month",
      icon: <Video className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Text-to-video generation",
        "AI voice synthesis & dubbing",
        "Advanced video editing tools",
        "Multiple video formats & resolutions",
        "Real-time rendering",
        "Custom avatar creation",
        "Background removal & replacement",
        "Multi-language support"
      ],
      benefits: [
        "Create videos 10x faster",
        "Reduce production costs by 70%",
        "Scale video content creation",
        "Maintain brand consistency"
      ],
      category: "Video",
      rating: 4.8,
      reviews: 1234,
      link: "/ai-video-generation-pro",
      featured: false
    },
    {
      id: "ai-voice-cloning-pro",
      name: "AI Voice Cloning Pro",
      description: "Advanced voice synthesis and cloning technology with natural speech patterns and emotional expression",
      price: "From $1,200/month",
      icon: <Mic className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "High-fidelity voice cloning",
        "Emotional voice synthesis",
        "Multi-language voice support",
        "Real-time voice conversion",
        "Custom voice training",
        "Voice authentication",
        "Audio enhancement tools",
        "API integration"
      ],
      benefits: [
        "Create realistic voice content",
        "Reduce voiceover costs by 80%",
        "Scale audio production",
        "Maintain voice consistency"
      ],
      category: "Voice",
      rating: 4.7,
      reviews: 856,
      link: "/ai-voice-cloning-pro",
      featured: false
    },
    {
      id: "ai-image-generation-pro",
      name: "AI Image Generation Pro",
      description: "Professional AI image creation with advanced editing, style transfer, and high-resolution output",
      price: "From $1,500/month",
      icon: <Image className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "Text-to-image generation",
        "Style transfer & manipulation",
        "High-resolution image upscaling",
        "Background removal & replacement",
        "Object detection & editing",
        "Custom model training",
        "Batch processing",
        "Commercial licensing"
      ],
      benefits: [
        "Generate images instantly",
        "Reduce design costs by 60%",
        "Create unique visual content",
        "Scale creative production"
      ],
      category: "Image",
      rating: 4.6,
      reviews: 1456,
      link: "/ai-image-generation-pro",
      featured: false
    },
    {
      id: "ai-predictive-maintenance",
      name: "AI Predictive Maintenance",
      description: "Intelligent equipment monitoring with failure prediction, maintenance scheduling, and cost optimization",
      price: "From $2,200/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "Equipment failure prediction",
        "Maintenance scheduling optimization",
        "Sensor data analysis",
        "Cost-benefit analysis",
        "Real-time monitoring",
        "Alert & notification system",
        "Maintenance history tracking",
        "Integration with IoT devices"
      ],
      benefits: [
        "Reduce downtime by 60%",
        "Lower maintenance costs by 40%",
        "Extend equipment lifespan",
        "Optimize resource allocation"
      ],
      category: "IoT & Maintenance",
      rating: 4.7,
      reviews: 654,
      link: "/ai-predictive-maintenance",
      featured: false
    },
    {
      id: "ai-sentiment-analysis-pro",
      name: "AI Sentiment Analysis Pro",
      description: "Advanced sentiment analysis with emotion detection, brand monitoring, and social media insights",
      price: "From $1,400/month",
      icon: <Heart className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "Multi-language sentiment analysis",
        "Emotion detection & classification",
        "Brand monitoring & tracking",
        "Social media analysis",
        "Real-time sentiment tracking",
        "Custom sentiment models",
        "Trend analysis & reporting",
        "API integration"
      ],
      benefits: [
        "Monitor brand reputation",
        "Improve customer satisfaction",
        "Identify market trends",
        "Enhance marketing strategies"
      ],
      category: "Analytics",
      rating: 4.6,
      reviews: 987,
      link: "/ai-sentiment-analysis-pro",
      featured: false
    },
    {
      id: "ai-recommendation-engine",
      name: "AI Recommendation Engine",
      description: "Intelligent recommendation system with personalization, collaborative filtering, and content-based suggestions",
      price: "From $1,800/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Collaborative filtering",
        "Content-based recommendations",
        "Hybrid recommendation models",
        "Real-time personalization",
        "A/B testing framework",
        "Performance analytics",
        "Custom algorithm development",
        "Multi-platform integration"
      ],
      benefits: [
        "Increase conversion rates by 35%",
        "Improve user engagement",
        "Boost sales and revenue",
        "Enhance customer experience"
      ],
      category: "Personalization",
      rating: 4.8,
      reviews: 1456,
      link: "/ai-recommendation-engine",
      featured: false
    },
    {
      id: "ai-fraud-detection-pro",
      name: "AI Fraud Detection Pro",
      description: "Advanced fraud detection with real-time monitoring, pattern recognition, and risk scoring",
      price: "From $2,500/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Real-time fraud detection",
        "Pattern recognition algorithms",
        "Risk scoring & assessment",
        "Transaction monitoring",
        "Behavioral analysis",
        "Machine learning models",
        "False positive reduction",
        "Compliance reporting"
      ],
      benefits: [
        "Detect fraud with 99.5% accuracy",
        "Reduce false positives by 80%",
        "Protect against new fraud types",
        "Ensure regulatory compliance"
      ],
      category: "Security",
      rating: 4.9,
      reviews: 876,
      link: "/ai-fraud-detection-pro",
      featured: false
    },
    {
      id: "ai-language-translation",
      name: "AI Language Translation",
      description: "Advanced neural machine translation with real-time processing, context awareness, and domain-specific models",
      price: "From $1,300/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "Neural machine translation",
        "Real-time translation",
        "Context-aware translation",
        "Domain-specific models",
        "100+ language support",
        "Batch translation processing",
        "API integration",
        "Custom model training"
      ],
      benefits: [
        "Break language barriers",
        "Improve global communication",
        "Reduce translation costs",
        "Maintain translation quality"
      ],
      category: "Language Processing",
      rating: 4.7,
      reviews: 1234,
      link: "/ai-language-translation",
      featured: false
    },
    {
      id: "ai-chatbot-enterprise",
      name: "AI Chatbot Enterprise",
      description: "Enterprise-grade conversational AI with advanced NLP, knowledge management, and multi-channel deployment",
      price: "From $2,800/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Advanced NLP capabilities",
        "Knowledge base integration",
        "Multi-channel deployment",
        "Human handoff automation",
        "Conversation analytics",
        "Custom training & fine-tuning",
        "Enterprise security",
        "Scalable infrastructure"
      ],
      benefits: [
        "Reduce support costs by 70%",
        "Improve response times",
        "Scale customer service",
        "Enhance user satisfaction"
      ],
      category: "Customer Service",
      rating: 4.8,
      reviews: 1654,
      link: "/ai-chatbot-enterprise",
      featured: false
    },
    {
      id: "ai-data-mining-pro",
      name: "AI Data Mining Pro",
      description: "Advanced data mining with pattern discovery, anomaly detection, and predictive modeling",
      price: "From $2,100/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      features: [
        "Pattern discovery algorithms",
        "Anomaly detection",
        "Predictive modeling",
        "Big data processing",
        "Real-time analysis",
        "Custom algorithm development",
        "Data visualization",
        "Integration capabilities"
      ],
      benefits: [
        "Discover hidden patterns",
        "Identify anomalies early",
        "Improve decision making",
        "Extract valuable insights"
      ],
      category: "Data Analytics",
      rating: 4.7,
      reviews: 543,
      link: "/ai-data-mining-pro",
      featured: false
    },
    {
      id: "ai-video-analysis",
      name: "AI Video Analysis",
      description: "Intelligent video processing with object tracking, scene recognition, and automated content analysis",
      price: "From $1,900/month",
      icon: <Video className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Object tracking & detection",
        "Scene recognition & classification",
        "Motion analysis",
        "Facial recognition in video",
        "Real-time processing",
        "Batch video analysis",
        "Custom model training",
        "API integration"
      ],
      benefits: [
        "Automate video monitoring",
        "Extract insights from video",
        "Improve security systems",
        "Enhance content management"
      ],
      category: "Computer Vision",
      rating: 4.6,
      reviews: 789,
      link: "/ai-video-analysis",
      featured: false
    },
    {
      id: "ai-time-series-forecasting",
      name: "AI Time Series Forecasting",
      description: "Advanced time series analysis with forecasting, trend detection, and seasonal pattern recognition",
      price: "From $1,500/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Time series forecasting",
        "Trend detection & analysis",
        "Seasonal pattern recognition",
        "Anomaly detection",
        "Multiple forecasting models",
        "Confidence intervals",
        "Real-time predictions",
        "Custom model development"
      ],
      benefits: [
        "Improve forecasting accuracy",
        "Identify trends early",
        "Optimize resource planning",
        "Make better predictions"
      ],
      category: "Analytics",
      rating: 4.8,
      reviews: 876,
      link: "/ai-time-series-forecasting",
      featured: false
    },
    {
      id: "ai-nlp-text-analysis",
      name: "AI NLP Text Analysis",
      description: "Comprehensive natural language processing with text classification, entity extraction, and semantic analysis",
      price: "From $1,600/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Text classification & categorization",
        "Named entity recognition",
        "Sentiment analysis",
        "Topic modeling",
        "Text summarization",
        "Language detection",
        "Custom model training",
        "Batch processing"
      ],
      benefits: [
        "Extract insights from text",
        "Automate text processing",
        "Improve content organization",
        "Enhance search capabilities"
      ],
      category: "Language Processing",
      rating: 4.7,
      reviews: 1123,
      link: "/ai-nlp-text-analysis",
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
    { name: "Video", count: aiServices.filter(s => s.category === "Video").length, active: false },
    { name: "Voice", count: aiServices.filter(s => s.category === "Voice").length, active: false },
    { name: "Image", count: aiServices.filter(s => s.category === "Image").length, active: false },
    { name: "IoT & Maintenance", count: aiServices.filter(s => s.category === "IoT & Maintenance").length, active: false },
    { name: "Personalization", count: aiServices.filter(s => s.category === "Personalization").length, active: false },
    { name: "Language Processing", count: aiServices.filter(s => s.category === "Language Processing").length, active: false },
    { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length, active: false }
  ];

  const stats = [
    { number: "35+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
    { number: "20,000+", label: "AI Models Trained", icon: <Cpu className="w-6 h-6" /> },
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

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Discover 35+ cutting-edge AI services including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with advanced AI technology."
        keywords="AI services, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, AI automation, business intelligence"
        canonical="/ai-services"
      />

      {/* Animated Background */}
      <div className="futuristic-bg"></div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">35+ Advanced AI Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-gradient">
              AI Services
            </span>
            <br />
            & Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to transform your business. 
            From machine learning to natural language processing, we provide cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="btn-futuristic hover-lift hover-glow"
            >
              Get AI Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="glass-card px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all duration-300 group hover:scale-105"
            >
              See AI in Action
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-gradient">
                AI Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI services leverage cutting-edge technologies to deliver intelligent solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div
                key={index}
                className="glass-card p-8 hover-lift hover-glow grid-item"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${capability.color} flex items-center justify-center mb-6 mx-auto`}>
                  <div className="text-white">{capability.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{capability.title}</h3>
                <p className="text-gray-300 text-center">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg neon-glow"
                    : "glass-card text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured AI Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-gradient">
                Featured AI Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most advanced AI solutions trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.filter(service => service.featured).map((service, index) => (
              <div
                key={service.id}
                className="group relative glass-card p-8 hover-lift hover-glow grid-item"
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
                    Get Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All AI Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-gradient">
                All AI Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete collection of AI-powered solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative glass-card p-6 hover-lift grid-item"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-gradient">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join industry leaders who trust our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free AI consultation and discover how our solutions can revolutionize your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-futuristic hover-lift hover-glow"
            >
              Get AI Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="glass-card px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              View Pricing
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;