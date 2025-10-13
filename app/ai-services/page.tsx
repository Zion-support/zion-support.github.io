import { ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, Brain, BarChart3, Bot, Target, FileText, Users, TrendingUp, Mail, CheckCircle, Star, Clock, DollarSign, Monitor, Settings, Lock, Sparkles, Eye, Cpu, Network, Layers, Workflow, MessageSquare, Image, Video, Mic, Search, Filter, Download, Upload, Share2, RefreshCw, AlertTriangle, CheckCircle2, XCircle, Info, Lightbulb, Rocket, Award, Heart, ThumbsUp, BookOpen, Calendar, MapPin, Phone, Mail as MailIcon, ExternalLink, Play, Pause, Stop, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Edit, Trash2, Copy, Save, Send, Plus, Minus, X, Menu, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Home, User, Users as UsersIcon, Settings as SettingsIcon, Bell, Search as SearchIcon, Filter as FilterIcon, Grid, List, Layout, Sidebar, PanelLeft, PanelRight, PanelTop, PanelBottom, Square, Circle, Triangle, Hexagon, Pentagon, Octagon, Diamond, Heart as HeartIcon, Star as StarIcon, Moon, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Battery, Wifi, Bluetooth, Radio, Tv, Camera, CameraOff, Mic as MicIcon, MicOff, Headphones, Speaker, Volume1, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, Repeat1, Shuffle as ShuffleIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, RefreshCw as RefreshCwIcon, RefreshCcw, Rotate3d, FlipHorizontal, FlipVertical, FlipHorizontal2, FlipVertical2, RotateLeft, RotateRight, RotateLeft as RotateLeftIcon, RotateRight as RotateRightIcon, RotateCcw as RotateCcwIcon2, RotateCw as RotateCwIcon2, RotateCcw as RotateCcwIcon3, RotateCw as RotateCwIcon3, RotateCcw as RotateCcwIcon4, RotateCw as RotateCwIcon4, RotateCcw as RotateCcwIcon5, RotateCw as RotateCwIcon5, RotateCcw as RotateCcwIcon6, RotateCw as RotateCwIcon6, RotateCcw as RotateCcwIcon7, RotateCw as RotateCwIcon7, RotateCcw as RotateCcwIcon8, RotateCw as RotateCwIcon8, RotateCcw as RotateCcwIcon9, RotateCw as RotateCwIcon9, RotateCcw as RotateCcwIcon10, RotateCw as RotateCwIcon10 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AiServices() {
  const aiServices = [
    {
      id: "ai-business-intelligence",
      title: "AI Business Intelligence Pro",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting for data-driven decision making.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-business-intelligence",
      color: "from-blue-500 to-cyan-500",
      price: "$299",
      pricePeriod: "month",
      originalPrice: "$499",
      features: [
        "Real-time data visualization",
        "Predictive analytics models",
        "Custom dashboard creation",
        "Automated report generation",
        "API integrations",
        "Mobile app access",
        "Advanced data mining",
        "Machine learning insights"
      ],
      benefits: [
        "40% increase in data-driven decisions",
        "60% reduction in reporting time",
        "Real-time insights across all channels",
        "Automated anomaly detection"
      ],
      category: "Analytics",
      popularity: "Most Popular",
      useCases: ["Financial Analysis", "Sales Forecasting", "Market Research", "Performance Tracking"]
    },
    {
      id: "ai-customer-support",
      title: "AI Customer Support Suite",
      description: "Deploy intelligent chatbots and automated customer service solutions with natural language processing, sentiment analysis, and seamless human handoff capabilities.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "$199",
      pricePeriod: "month",
      originalPrice: "$349",
      features: [
        "Multi-language support",
        "Sentiment analysis",
        "CRM integration",
        "Live chat handoff",
        "Knowledge base management",
        "Voice recognition",
        "Escalation protocols",
        "Performance analytics"
      ],
      benefits: [
        "90% query resolution rate",
        "24/7 availability",
        "50% reduction in support costs",
        "Improved customer satisfaction"
      ],
      category: "Customer Service",
      popularity: "Best Value",
      useCases: ["E-commerce Support", "Technical Help", "Order Inquiries", "Account Management"]
    },
    {
      id: "ai-content-generation",
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with our AI-powered writing tools. Generate blog posts, social media content, product descriptions, and marketing copy with brand voice consistency.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      price: "$149",
      pricePeriod: "month",
      originalPrice: "$249",
      features: [
        "SEO optimization",
        "Brand voice training",
        "Multi-format output",
        "Plagiarism detection",
        "Content scheduling",
        "A/B testing",
        "Performance tracking",
        "Team collaboration"
      ],
      benefits: [
        "10x faster content creation",
        "Consistent brand voice",
        "SEO-optimized content",
        "Reduced content costs"
      ],
      category: "Content Creation",
      popularity: "Creative Boost",
      useCases: ["Blog Writing", "Social Media", "Product Descriptions", "Marketing Copy"]
    },
    {
      id: "ai-cybersecurity",
      title: "AI Cybersecurity Monitor",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting for enterprise-grade security.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "$399",
      pricePeriod: "month",
      originalPrice: "$599",
      features: [
        "AI threat detection",
        "Automated response",
        "Compliance reporting",
        "24/7 monitoring",
        "Vulnerability scanning",
        "Security training",
        "Incident management",
        "Risk assessment"
      ],
      benefits: [
        "99.9% threat detection accuracy",
        "50% faster incident response",
        "Automated compliance reports",
        "Reduced security costs"
      ],
      category: "Security",
      popularity: "Enterprise Grade",
      useCases: ["Threat Detection", "Compliance", "Incident Response", "Risk Management"]
    },
    {
      id: "ai-marketing-automation",
      title: "AI Marketing Automation Hub",
      description: "End-to-end marketing automation with AI-driven personalization, email campaigns, social media management, lead scoring, and comprehensive analytics.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-indigo-500 to-purple-500",
      price: "$199",
      pricePeriod: "month",
      originalPrice: "$299",
      features: [
        "Email automation",
        "Social media scheduling",
        "Lead scoring",
        "A/B testing",
        "Analytics dashboard",
        "CRM integration",
        "Personalization engine",
        "Campaign optimization"
      ],
      benefits: [
        "3x higher email open rates",
        "50% increase in lead conversion",
        "Automated campaign optimization",
        "Comprehensive analytics"
      ],
      category: "Marketing",
      popularity: "Growth Engine",
      useCases: ["Email Marketing", "Social Media", "Lead Generation", "Campaign Optimization"]
    },
    {
      id: "ai-data-analytics",
      title: "AI Data Analytics Platform",
      description: "Advanced data processing and visualization platform with machine learning models, automated insights, interactive dashboards, and real-time data processing capabilities.",
      icon: <Database className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "$179",
      pricePeriod: "month",
      originalPrice: "$279",
      features: [
        "ML model deployment",
        "Interactive dashboards",
        "Data pipeline automation",
        "Real-time processing",
        "Predictive modeling",
        "Data visualization",
        "API integrations",
        "Custom algorithms"
      ],
      benefits: [
        "80% faster data processing",
        "Automated insight generation",
        "Real-time analytics",
        "Custom ML models"
      ],
      category: "Data Science",
      popularity: "Data Driven",
      useCases: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Machine Learning"]
    },
    {
      id: "ai-code-assistant",
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages, automated testing, and comprehensive documentation generation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "$129",
      pricePeriod: "month",
      originalPrice: "$199",
      features: [
        "Code generation",
        "Bug detection",
        "Performance optimization",
        "Documentation generation",
        "Code review",
        "Refactoring suggestions",
        "Multi-language support",
        "IDE integration"
      ],
      benefits: [
        "50% faster development",
        "Reduced bugs and errors",
        "Automated code review",
        "Improved code quality"
      ],
      category: "Development",
      popularity: "Developer Favorite",
      useCases: ["Code Generation", "Bug Detection", "Code Review", "Documentation"]
    },
    {
      id: "ai-document-processing",
      title: "AI Document Intelligence",
      description: "Intelligent document analysis, extraction, and processing with OCR technology, form recognition, automated data entry, and workflow automation capabilities.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-processing",
      color: "from-emerald-500 to-green-500",
      price: "$159",
      pricePeriod: "month",
      originalPrice: "$249",
      features: [
        "OCR technology",
        "Form recognition",
        "Data extraction",
        "Workflow automation",
        "Document classification",
        "Version control",
        "Digital signatures",
        "Compliance tracking"
      ],
      benefits: [
        "90% faster document processing",
        "Automated data extraction",
        "Reduced manual errors",
        "Enhanced productivity"
      ],
      category: "Document Management",
      popularity: "Efficiency Boost",
      useCases: ["Document Processing", "Data Extraction", "Form Recognition", "Workflow Automation"]
    },
    {
      id: "ai-crm-assistant",
      title: "AI CRM Assistant",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, automated follow-ups, and seamless integration with major CRM platforms.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "$229",
      pricePeriod: "month",
      originalPrice: "$349",
      features: [
        "Lead scoring",
        "Sales forecasting",
        "Automated follow-ups",
        "CRM integration",
        "Pipeline management",
        "Customer insights",
        "Email automation",
        "Performance tracking"
      ],
      benefits: [
        "30% increase in sales",
        "Automated lead qualification",
        "Improved forecasting accuracy",
        "Enhanced customer relationships"
      ],
      category: "Sales",
      popularity: "Sales Booster",
      useCases: ["Lead Management", "Sales Forecasting", "Customer Relations", "Pipeline Optimization"]
    },
    {
      id: "ai-financial-analytics",
      title: "AI Financial Analytics Suite",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, investment analysis, and compliance monitoring tools.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "$349",
      pricePeriod: "month",
      originalPrice: "$499",
      features: [
        "Risk assessment",
        "Fraud detection",
        "Investment analysis",
        "Compliance reporting",
        "Financial modeling",
        "Portfolio optimization",
        "Market analysis",
        "Regulatory compliance"
      ],
      benefits: [
        "95% fraud detection accuracy",
        "Automated risk assessment",
        "Improved investment decisions",
        "Compliance automation"
      ],
      category: "Finance",
      popularity: "Financial Expert",
      useCases: ["Risk Management", "Fraud Detection", "Investment Analysis", "Compliance"]
    },
    {
      id: "ai-project-management",
      title: "AI Project Management Pro",
      description: "Intelligent project management with AI-powered planning, resource optimization, risk prediction, and automated task assignment for maximum efficiency.",
      icon: <Workflow className="w-8 h-8" />,
      path: "/ai-project-management",
      color: "from-rose-500 to-pink-500",
      price: "$89",
      pricePeriod: "month",
      originalPrice: "$149",
      features: [
        "AI-powered planning",
        "Resource optimization",
        "Risk prediction",
        "Task automation",
        "Team collaboration",
        "Progress tracking",
        "Budget management",
        "Timeline optimization"
      ],
      benefits: [
        "25% faster project delivery",
        "Automated resource allocation",
        "Proactive risk management",
        "Improved team productivity"
      ],
      category: "Project Management",
      popularity: "Productivity Pro",
      useCases: ["Project Planning", "Resource Management", "Risk Assessment", "Team Collaboration"]
    },
    {
      id: "ai-visual-content",
      title: "AI Visual Content Creator",
      description: "Generate stunning visual content with AI-powered image and video creation, automated design, brand consistency, and multi-format output capabilities.",
      icon: <Image className="w-8 h-8" />,
      path: "/ai-visual-content",
      color: "from-pink-500 to-rose-500",
      price: "$119",
      pricePeriod: "month",
      originalPrice: "$199",
      features: [
        "AI image generation",
        "Video creation",
        "Design automation",
        "Brand consistency",
        "Multi-format output",
        "Template library",
        "Batch processing",
        "Quality optimization"
      ],
      benefits: [
        "10x faster content creation",
        "Consistent brand visuals",
        "Reduced design costs",
        "Professional quality output"
      ],
      category: "Visual Content",
      popularity: "Creative AI",
      useCases: ["Image Generation", "Video Creation", "Design Automation", "Brand Marketing"]
    }
  ];

  const categories = ["All", "Analytics", "Customer Service", "Content Creation", "Security", "Marketing", "Data Science", "Development", "Document Management", "Sales", "Finance", "Project Management", "Visual Content"];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's AI Business Intelligence transformed our data analysis. We now make decisions 3x faster with real-time insights.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI Customer Support Suite reduced our support costs by 50% while improving customer satisfaction scores.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion's AI Content Generation Studio increased our content output by 10x while maintaining quality and brand consistency.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Enterprise Clients", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Comprehensive AI services including business intelligence, customer support, content generation, cybersecurity, marketing automation, and more. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, machine learning, business intelligence, customer support AI, content generation, cybersecurity AI, marketing automation, data analytics, code assistant, document processing, CRM AI, financial analytics, project management AI, visual content creation"
        canonical="https://ziontechgroup.com/ai-services"
      />

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
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">12 Advanced AI Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we provide comprehensive AI services that drive growth, innovation, and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive AI services designed to accelerate your business growth and digital transformation. 
                Each solution is powered by advanced machine learning algorithms and enterprise-grade infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popularity Badge */}
                  {service.popularity && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30">
                        {service.popularity}
                      </span>
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">
                          {service.price}
                          <span className="text-lg text-gray-400">/{service.pricePeriod}</span>
                        </div>
                        {service.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">
                            {service.originalPrice}/{service.pricePeriod}
                          </div>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-cyan-400 mb-2">Key Benefits:</div>
                      <div className="text-xs text-gray-300">
                        {service.benefits[0]}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-cyan-400 mb-2">Use Cases:</div>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases.slice(0, 2).map((useCase, idx) => (
                          <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                            {useCase}
                          </span>
                        ))}
                        {service.useCases.length > 2 && (
                          <span className="text-xs text-cyan-400">
                            +{service.useCases.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        to={service.path}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm group-hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center text-sm group-hover:scale-105"
                      >
                        Start Trial
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our AI solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our AI solutions to drive growth and innovation. 
              Start your AI transformation journey today with our expert team.
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
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Case Studies
                <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
