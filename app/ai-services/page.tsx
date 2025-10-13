import React from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Cube, Scale } from "lucide-react";
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
    },
    {
