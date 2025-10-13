import { ArrowRight, Brain, Shield, Globe, Database, Code, Smartphone, BarChart3, Bot, FileText, Target, Users, TrendingUp, Camera, Lock, Settings, Bell, Search, Filter, Download, Upload, Share, Eye, Edit, Trash2, Plus, Minus, RefreshCw, Play, Pause, Stop, Volume2, VolumeX, Wifi, Battery, WifiOff, Signal, Mail, Star, CheckCircle, Clock, DollarSign, Percent, Calendar, AlertCircle, Info, ExternalLink, Zap, Activity, PieChart, LineChart, BarChart, Layers, Cpu, HardDrive, Monitor, Headphones, Mic, MicOff, Video, VideoOff, Phone, PhoneOff, MessageCircle, MessageSquare, Send, Archive, Bookmark, Flag, Heart, ThumbsUp, ThumbsDown, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      id: "ai-business-intelligence",
      title: "AI Business Intelligence Pro",
      description: "Advanced AI-powered analytics platform with real-time insights, predictive modeling, and automated reporting for data-driven decision making.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: 299,
      period: "month",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time data visualization",
        "Predictive analytics & forecasting",
        "Custom dashboard creation",
        "Automated report generation",
        "Natural language queries",
        "Multi-source data integration",
        "Advanced statistical modeling",
        "Anomaly detection",
        "ROI tracking & optimization",
        "24/7 AI monitoring"
      ],
      benefits: [
        "Increase revenue by 35% on average",
        "Reduce decision-making time by 60%",
        "Improve forecast accuracy by 85%",
        "Cut reporting costs by 70%"
      ],
      marketPrice: "Enterprise BI: $500-2000/month",
      link: "/ai-business-intelligence",
      category: "Analytics",
      rating: 4.9,
      users: "2,500+",
      launchDate: "2023"
    },
    {
      id: "ai-customer-support-chatbot",
      title: "AI Customer Support Chatbot",
      description: "Intelligent conversational AI that provides 24/7 customer support with natural language processing, sentiment analysis, and seamless human handoff.",
      icon: <Bot className="w-8 h-8" />,
      price: 199,
      period: "month",
      color: "from-green-500 to-emerald-500",
      features: [
        "Natural language understanding",
        "Multi-language support (25+ languages)",
        "Sentiment analysis & emotion detection",
        "Context-aware conversations",
        "Knowledge base integration",
        "Live agent handoff",
        "Voice & text support",
        "Custom personality training",
        "Analytics & insights",
        "API integrations"
      ],
      benefits: [
        "Reduce support costs by 50%",
        "Increase customer satisfaction by 40%",
        "Handle 80% of queries automatically",
        "Available 24/7 without breaks"
      ],
      marketPrice: "Enterprise chatbots: $300-1000/month",
      link: "/ai-customer-support-chatbot",
      category: "Customer Service",
      rating: 4.7,
      users: "3,200+",
      launchDate: "2023"
    },
    {
      id: "ai-content-generation-suite",
      title: "AI Content Generation Suite",
      description: "Comprehensive AI-powered content creation platform that generates high-quality articles, social media posts, marketing copy, and multimedia content at scale.",
      icon: <FileText className="w-8 h-8" />,
      price: 149,
      period: "month",
      color: "from-purple-500 to-pink-500",
      features: [
        "50+ content formats supported",
        "SEO optimization tools",
        "Brand voice training",
        "Plagiarism detection",
        "Multi-language generation",
        "Content calendar management",
        "Social media scheduling",
        "Performance analytics",
        "Team collaboration",
        "White-label options"
      ],
      benefits: [
        "Create content 10x faster",
        "Increase engagement by 45%",
        "Improve SEO rankings by 60%",
        "Reduce content costs by 70%"
      ],
      marketPrice: "Content tools: $200-600/month",
      link: "/ai-content-generation-suite",
      category: "Content",
      rating: 4.6,
      users: "4,100+",
      launchDate: "2023"
    },
    {
      id: "ai-cybersecurity-monitor",
      title: "AI Cybersecurity Monitor",
      description: "Advanced AI-powered security platform with real-time threat detection, automated incident response, and predictive security analytics.",
      icon: <Shield className="w-8 h-8" />,
      price: 499,
      period: "month",
      color: "from-red-500 to-orange-500",
      features: [
        "AI threat detection & analysis",
        "Real-time security monitoring",
        "Automated incident response",
        "Behavioral anomaly detection",
        "Vulnerability assessment",
        "Compliance reporting",
        "Security orchestration",
        "Threat intelligence feeds",
        "24/7 SOC monitoring",
        "Custom security policies"
      ],
      benefits: [
        "Prevent 99.7% of cyber attacks",
        "Reduce response time by 90%",
        "Achieve compliance 3x faster",
        "Save $100K+ annually on security"
      ],
      marketPrice: "Enterprise security: $2000-10000/month",
      link: "/ai-cybersecurity-monitor",
      category: "Security",
      rating: 4.8,
      users: "1,800+",
      launchDate: "2023"
    },
    {
      id: "ai-marketing-automation",
      title: "AI Marketing Automation",
      description: "Intelligent marketing platform with AI-driven personalization, automated campaigns, lead scoring, and conversion optimization.",
      icon: <Target className="w-8 h-8" />,
      price: 229,
      period: "month",
      color: "from-indigo-500 to-purple-500",
      features: [
        "AI-powered personalization",
        "Automated email campaigns",
        "Lead scoring & qualification",
        "A/B testing optimization",
        "Social media automation",
        "Content recommendation engine",
        "Customer journey mapping",
        "ROI tracking & analytics",
        "Multi-channel campaigns",
        "CRM integrations"
      ],
      benefits: [
        "Increase conversion rates by 40%",
        "Boost lead quality by 65%",
        "Reduce cost per acquisition by 50%",
        "Generate 3x more qualified leads"
      ],
      marketPrice: "Marketing automation: $300-800/month",
      link: "/ai-marketing-automation",
      category: "Marketing",
      rating: 4.7,
      users: "2,900+",
      launchDate: "2023"
    },
    {
      id: "ai-code-assistant-pro",
      title: "AI Code Assistant Pro",
      description: "Advanced AI-powered coding assistant with intelligent code generation, review, optimization, and automated testing capabilities.",
      icon: <Code className="w-8 h-8" />,
      price: 179,
      period: "month",
      color: "from-yellow-500 to-orange-500",
      features: [
        "Intelligent code generation",
        "Multi-language support (20+ languages)",
        "Code review & optimization",
        "Bug detection & fixing",
        "Automated testing",
        "Documentation generation",
        "Performance optimization",
        "Security vulnerability scanning",
        "Team collaboration tools",
        "IDE integrations"
      ],
      benefits: [
        "Increase development speed by 50%",
        "Reduce bugs by 70%",
        "Improve code quality by 60%",
        "Save 20 hours/week per developer"
      ],
      marketPrice: "Code tools: $200-500/month",
      link: "/ai-code-assistant-pro",
      category: "Development",
      rating: 4.8,
      users: "3,500+",
      launchDate: "2023"
    },
    {
      id: "ai-document-processing",
      title: "AI Document Processing",
      description: "Intelligent document analysis and processing platform with OCR, form recognition, data extraction, and workflow automation.",
      icon: <FileText className="w-8 h-8" />,
      price: 159,
      period: "month",
      color: "from-teal-500 to-cyan-500",
      features: [
        "Advanced OCR technology",
        "Form recognition & extraction",
        "Document classification",
        "Data validation & verification",
        "Workflow automation",
        "Multi-format support",
        "Batch processing",
        "API integrations",
        "Compliance tracking",
        "Custom templates"
      ],
      benefits: [
        "Process documents 20x faster",
        "Reduce errors by 95%",
        "Eliminate manual data entry",
        "Save 30 hours/week per team"
      ],
      marketPrice: "Document processing: $250-700/month",
      link: "/ai-document-processing",
      category: "Automation",
      rating: 4.6,
      users: "2,200+",
      launchDate: "2023"
    },
    {
      id: "ai-crm-assistant",
      title: "AI CRM Assistant",
      description: "Intelligent CRM platform with AI-powered lead qualification, sales forecasting, automated follow-ups, and customer insights.",
      icon: <Users className="w-8 h-8" />,
      price: 249,
      period: "month",
      color: "from-violet-500 to-purple-500",
      features: [
        "AI lead scoring & qualification",
        "Sales forecasting & predictions",
        "Automated follow-up sequences",
        "Customer behavior analysis",
        "Pipeline optimization",
        "Email & call automation",
        "Integration with 50+ tools",
        "Custom workflows",
        "Advanced analytics",
        "Mobile & desktop apps"
      ],
      benefits: [
        "Increase sales by 35%",
        "Improve lead conversion by 50%",
        "Reduce sales cycle by 40%",
        "Boost team productivity by 45%"
      ],
      marketPrice: "Enterprise CRM: $400-1200/month",
      link: "/ai-crm-assistant",
      category: "Sales",
      rating: 4.7,
      users: "2,800+",
      launchDate: "2023"
    },
    {
      id: "ai-financial-analytics",
      title: "AI Financial Analytics",
      description: "Advanced financial modeling and risk assessment platform with automated reporting, fraud detection, and investment analysis.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: 349,
      period: "month",
      color: "from-amber-500 to-yellow-500",
      features: [
        "Financial modeling & forecasting",
        "Risk assessment & management",
        "Fraud detection & prevention",
        "Investment analysis",
        "Compliance reporting",
        "Real-time market analysis",
        "Portfolio optimization",
        "Automated alerts",
        "Custom dashboards",
        "API integrations"
      ],
      benefits: [
        "Improve financial accuracy by 80%",
        "Reduce risk exposure by 60%",
        "Detect fraud 95% faster",
        "Save 25 hours/week on reporting"
      ],
      marketPrice: "Financial tools: $500-1500/month",
      link: "/ai-financial-analytics",
      category: "Finance",
      rating: 4.8,
      users: "1,600+",
      launchDate: "2023"
    },
    {
      id: "ai-workflow-automation",
      title: "AI Workflow Automation",
      description: "Intelligent workflow automation platform that streamlines business processes with AI-powered decision making and no-code automation tools.",
      icon: <Zap className="w-8 h-8" />,
      price: 199,
      period: "month",
      color: "from-pink-500 to-rose-500",
      features: [
        "No-code workflow builder",
        "AI-powered decision making",
        "100+ pre-built templates",
        "Custom automation rules",
        "Multi-app integrations",
        "Error handling & recovery",
        "Performance monitoring",
        "Team collaboration",
        "Compliance tracking",
        "Scalable infrastructure"
      ],
      benefits: [
        "Automate 80% of repetitive tasks",
        "Reduce processing time by 70%",
        "Eliminate human errors by 95%",
        "Save 30 hours/week per team"
      ],
      marketPrice: "Automation tools: $300-800/month",
      link: "/ai-workflow-automation",
      category: "Automation",
      rating: 4.7,
      users: "2,700+",
      launchDate: "2023"
    },
    {
      id: "ai-computer-vision",
      title: "AI Computer Vision",
      description: "Advanced computer vision platform with image recognition, object detection, facial recognition, and visual analytics capabilities.",
      icon: <Camera className="w-8 h-8" />,
      price: 279,
      period: "month",
      color: "from-emerald-500 to-green-500",
      features: [
        "Image classification & recognition",
        "Object detection & tracking",
        "Facial recognition & analysis",
        "OCR & text extraction",
        "Quality inspection",
        "Real-time video analysis",
        "Custom model training",
        "API integrations",
        "Batch processing",
        "Mobile SDK"
      ],
      benefits: [
        "Improve accuracy by 90%",
        "Reduce inspection time by 80%",
        "Enable 24/7 monitoring",
        "Cut manual labor costs by 60%"
      ],
      marketPrice: "Computer vision: $400-1000/month",
      link: "/ai-computer-vision",
      category: "Computer Vision",
      rating: 4.6,
      users: "1,900+",
      launchDate: "2023"
    },
    {
      id: "ai-natural-language-processing",
      title: "AI Natural Language Processing",
      description: "Advanced NLP platform with text analysis, sentiment analysis, language translation, and conversational AI capabilities.",
      icon: <MessageCircle className="w-8 h-8" />,
      price: 189,
      period: "month",
      color: "from-cyan-500 to-blue-500",
      features: [
        "Text analysis & classification",
        "Sentiment & emotion analysis",
        "Language translation (50+ languages)",
        "Named entity recognition",
        "Text summarization",
        "Question answering",
        "Chatbot integration",
        "API & SDK access",
        "Custom model training",
        "Real-time processing"
      ],
      benefits: [
        "Process text 50x faster",
        "Improve accuracy by 85%",
        "Support 50+ languages",
        "Reduce manual review by 90%"
      ],
      marketPrice: "NLP tools: $250-600/month",
      link: "/ai-natural-language-processing",
      category: "NLP",
      rating: 4.7,
      users: "2,400+",
      launchDate: "2023"
    }
  ];

  const categories = [
    { name: "All", count: aiServices.length },
    { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
    { name: "Customer Service", count: aiServices.filter(s => s.category === "Customer Service").length },
    { name: "Content", count: aiServices.filter(s => s.category === "Content").length },
    { name: "Security", count: aiServices.filter(s => s.category === "Security").length },
    { name: "Marketing", count: aiServices.filter(s => s.category === "Marketing").length },
    { name: "Development", count: aiServices.filter(s => s.category === "Development").length },
    { name: "Automation", count: aiServices.filter(s => s.category === "Automation").length },
    { name: "Sales", count: aiServices.filter(s => s.category === "Sales").length },
    { name: "Finance", count: aiServices.filter(s => s.category === "Finance").length },
    { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
    { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length }
  ];

  const stats = [
    { number: "12+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
    { number: "25K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "4.7/5", label: "Average Rating", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, customer support, content generation, cybersecurity, marketing automation, and more. Transform your business with cutting-edge AI technology."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, business intelligence, customer support AI, content generation, cybersecurity AI, marketing automation, computer vision, natural language processing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">12+ AI Services Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From advanced analytics to intelligent automation, our AI services drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-white font-semibold">{service.rating}</span>
                        </div>
                        <div className="text-sm text-gray-400">{service.users} users</div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-cyan-400">${service.price}</span>
                        <span className="text-gray-400 ml-1">/{service.period}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{service.marketPrice}</div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        <div className="text-xs text-cyan-400 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Proven Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-xs text-green-300">
                            <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-2">
                      <Link
                        to={service.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Contact
                      </Link>
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI solutions to drive growth and innovation. 
                Contact us today for a personalized consultation and demo.
              </p>
              
              {/* Contact Details */}
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
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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