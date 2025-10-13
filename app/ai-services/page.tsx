import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  BarChart3, 
  Bot, 
  FileText, 
  Target, 
  Users, 
  TrendingUp, 
  Code, 
  Eye, 
  MessageSquare, 
  Zap, 
  Globe, 
  Database, 
  Cloud, 
  Lock, 
  CheckCircle, 
  Star,
  Sparkles,
  Monitor,
  Smartphone,
  Mail,
  Award,
  Clock,
  DollarSign,
  PieChart,
  Settings,
  Workflow,
  FileCheck,
  Calendar,
  CreditCard,
  Headphones,
  Lightbulb,
  Cpu,
  Network,
  Layers,
  Activity,
  Zap as Lightning
} from "lucide-react";
import FuturisticButton from "../components/FuturisticButton";
import FuturisticCard from "../components/FuturisticCard";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

const AIServicesPage = () => {
  const aiServices = [
    {
      name: "AI Business Intelligence Pro",
      description: "Advanced AI-powered analytics platform that transforms raw data into actionable business insights with predictive modeling and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$299",
      period: "month",
      features: [
        "Real-time Data Analytics",
        "Predictive Modeling & Forecasting",
        "Custom Dashboard Builder",
        "Natural Language Queries",
        "API Integration",
        "24/7 AI Support"
      ],
      color: "from-blue-500 to-cyan-500",
      glowColor: "cyan",
      link: "/ai-business-intelligence-pro",
      popular: true,
      category: "Analytics",
      marketPrice: "$999/month",
      savings: "70%",
      capabilities: [
        "Process 1M+ data points in real-time",
        "Generate 50+ automated reports daily",
        "Predict trends with 95% accuracy",
        "Support 100+ data sources"
      ]
    },
    {
      name: "AI Customer Support Suite",
      description: "Intelligent customer service automation with advanced NLP, sentiment analysis, and seamless human handoff capabilities.",
      icon: <Bot className="w-8 h-8" />,
      price: "$199",
      period: "month",
      features: [
        "Multi-language Chatbot",
        "Sentiment Analysis",
        "Live Agent Handoff",
        "CRM Integration",
        "Voice & Text Support",
        "Performance Analytics"
      ],
      color: "from-green-500 to-emerald-500",
      glowColor: "green",
      link: "/ai-customer-support",
      popular: false,
      category: "Customer Service",
      marketPrice: "$599/month",
      savings: "67%",
      capabilities: [
        "Handle 10,000+ conversations simultaneously",
        "95% customer satisfaction rate",
        "Support 50+ languages",
        "Reduce response time by 80%"
      ]
    },
    {
      name: "AI Content Generation Studio",
      description: "Revolutionary content creation platform that generates high-quality, SEO-optimized content across multiple formats and platforms.",
      icon: <FileText className="w-8 h-8" />,
      price: "$149",
      period: "month",
      features: [
        "Multi-format Content Creation",
        "SEO Optimization",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Content Calendar Management",
        "Performance Tracking"
      ],
      color: "from-purple-500 to-pink-500",
      glowColor: "purple",
      link: "/ai-content-generation-pro",
      popular: false,
      category: "Content",
      marketPrice: "$399/month",
      savings: "63%",
      capabilities: [
        "Generate 1000+ articles per day",
        "Support 20+ content formats",
        "99.9% plagiarism-free content",
        "SEO score improvement of 40%"
      ]
    },
    {
      name: "AI Cybersecurity Monitor",
      description: "Advanced AI-powered security platform with real-time threat detection, automated incident response, and compliance monitoring.",
      icon: <Shield className="w-8 h-8" />,
      price: "$399",
      period: "month",
      features: [
        "Real-time Threat Detection",
        "Automated Incident Response",
        "Compliance Monitoring",
        "Behavioral Analysis",
        "Security Dashboard",
        "24/7 Monitoring"
      ],
      color: "from-red-500 to-orange-500",
      glowColor: "red",
      link: "/ai-cybersecurity-suite-pro",
      popular: false,
      category: "Security",
      marketPrice: "$1299/month",
      savings: "69%",
      capabilities: [
        "Detect 99.9% of known threats",
        "Response time under 30 seconds",
        "Monitor 1M+ events per second",
        "Compliance with 20+ standards"
      ]
    },
    {
      name: "AI Marketing Automation Pro",
      description: "Comprehensive marketing automation platform with AI-driven personalization, campaign optimization, and advanced analytics.",
      icon: <Target className="w-8 h-8" />,
      price: "$249",
      period: "month",
      features: [
        "AI Campaign Optimization",
        "Customer Segmentation",
        "Email Personalization",
        "Social Media Management",
        "Lead Scoring & Nurturing",
        "ROI Analytics"
      ],
      color: "from-pink-500 to-rose-500",
      glowColor: "pink",
      link: "/ai-marketing-automation",
      popular: false,
      category: "Marketing",
      marketPrice: "$799/month",
      savings: "69%",
      capabilities: [
        "Increase conversion rates by 60%",
        "Personalize 1M+ customer interactions",
        "Automate 95% of marketing tasks",
        "Track 100+ performance metrics"
      ]
    },
    {
      name: "AI Data Analytics Platform",
      description: "Powerful data processing and visualization platform with machine learning models, automated insights, and interactive dashboards.",
      icon: <PieChart className="w-8 h-8" />,
      price: "$179",
      period: "month",
      features: [
        "Machine Learning Models",
        "Interactive Dashboards",
        "Data Pipeline Automation",
        "Real-time Processing",
        "Custom Visualizations",
        "API Access"
      ],
      color: "from-teal-500 to-cyan-500",
      glowColor: "teal",
      link: "/ai-data-analytics",
      popular: false,
      category: "Analytics",
      marketPrice: "$599/month",
      savings: "70%",
      capabilities: [
        "Process 10TB+ data daily",
        "Generate 500+ insights automatically",
        "Support 50+ visualization types",
        "Real-time processing under 1 second"
      ]
    },
    {
      name: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization platform supporting multiple programming languages with automated testing.",
      icon: <Code className="w-8 h-8" />,
      price: "$129",
      period: "month",
      features: [
        "Multi-language Code Generation",
        "Automated Code Review",
        "Bug Detection & Fixing",
        "Performance Optimization",
        "Documentation Generation",
        "Team Collaboration"
      ],
      color: "from-yellow-500 to-orange-500",
      glowColor: "yellow",
      link: "/ai-code-assistant-pro",
      popular: false,
      category: "Development",
      marketPrice: "$399/month",
      savings: "68%",
      capabilities: [
        "Support 50+ programming languages",
        "Reduce development time by 70%",
        "Detect 99% of code issues",
        "Generate 1000+ lines of code per hour"
      ]
    },
    {
      name: "AI Computer Vision Suite",
      description: "Advanced computer vision platform for image recognition, object detection, and visual content analysis with real-time processing.",
      icon: <Eye className="w-8 h-8" />,
      price: "$199",
      period: "month",
      features: [
        "Image Recognition",
        "Object Detection",
        "Facial Recognition",
        "OCR Technology",
        "Video Analysis",
        "Custom Model Training"
      ],
      color: "from-indigo-500 to-purple-500",
      glowColor: "indigo",
      link: "/ai-computer-vision",
      popular: false,
      category: "Computer Vision",
      marketPrice: "$699/month",
      savings: "72%",
      capabilities: [
        "Process 10,000+ images per minute",
        "99.5% accuracy in object detection",
        "Support 100+ image formats",
        "Real-time video analysis"
      ]
    },
    {
      name: "AI Document Intelligence",
      description: "Intelligent document processing platform with OCR, form recognition, and automated data extraction capabilities.",
      icon: <FileCheck className="w-8 h-8" />,
      price: "$159",
      period: "month",
      features: [
        "Advanced OCR Technology",
        "Form Recognition",
        "Data Extraction",
        "Workflow Automation",
        "Document Classification",
        "API Integration"
      ],
      color: "from-emerald-500 to-green-500",
      glowColor: "emerald",
      link: "/ai-document-intelligence",
      popular: false,
      category: "Document Processing",
      marketPrice: "$499/month",
      savings: "68%",
      capabilities: [
        "Process 50,000+ documents daily",
        "99.8% accuracy in data extraction",
        "Support 200+ document types",
        "Reduce processing time by 90%"
      ]
    },
    {
      name: "AI Voice & Speech Solutions",
      description: "Comprehensive voice AI platform with speech recognition, text-to-speech, voice cloning, and conversational AI capabilities.",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "$179",
      period: "month",
      features: [
        "Speech Recognition",
        "Text-to-Speech",
        "Voice Cloning",
        "Conversational AI",
        "Multi-language Support",
        "Real-time Processing"
      ],
      color: "from-violet-500 to-purple-500",
      glowColor: "violet",
      link: "/ai-voice-solutions",
      popular: false,
      category: "Voice AI",
      marketPrice: "$599/month",
      savings: "70%",
      capabilities: [
        "Support 100+ languages",
        "99.5% speech recognition accuracy",
        "Generate 1000+ voice samples",
        "Real-time conversation processing"
      ]
    },
    {
      name: "AI Financial Analytics Pro",
      description: "Advanced financial modeling and risk assessment platform with automated reporting, fraud detection, and investment analysis.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "$349",
      period: "month",
      features: [
        "Risk Assessment Models",
        "Fraud Detection",
        "Investment Analysis",
        "Compliance Reporting",
        "Portfolio Optimization",
        "Market Prediction"
      ],
      color: "from-amber-500 to-yellow-500",
      glowColor: "amber",
      link: "/ai-financial-analytics-pro",
      popular: false,
      category: "Finance",
      marketPrice: "$1299/month",
      savings: "73%",
      capabilities: [
        "Analyze 1M+ transactions daily",
        "Detect 99.9% of fraudulent activities",
        "Predict market trends with 85% accuracy",
        "Generate 100+ financial reports"
      ]
    },
    {
      name: "AI Healthcare Diagnostics",
      description: "Revolutionary healthcare AI platform for medical image analysis, diagnosis assistance, and patient monitoring with clinical accuracy.",
      icon: <Activity className="w-8 h-8" />,
      price: "$499",
      period: "month",
      features: [
        "Medical Image Analysis",
        "Diagnosis Assistance",
        "Patient Monitoring",
        "Drug Discovery Support",
        "Clinical Documentation",
        "HIPAA Compliance"
      ],
      color: "from-rose-500 to-pink-500",
      glowColor: "rose",
      link: "/ai-healthcare-diagnostics",
      popular: false,
      category: "Healthcare",
      marketPrice: "$1999/month",
      savings: "75%",
      capabilities: [
        "Analyze 10,000+ medical images daily",
        "95% accuracy in diagnosis assistance",
        "Support 50+ medical specialties",
        "Full HIPAA compliance"
      ]
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
    { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
    { name: "Document Processing", count: aiServices.filter(s => s.category === "Document Processing").length },
    { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
    { name: "Finance", count: aiServices.filter(s => s.category === "Finance").length },
    { name: "Healthcare", count: aiServices.filter(s => s.category === "Healthcare").length }
  ];

  const stats = [
    { number: "25+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
    { number: "50,000+", label: "AI Models Trained", icon: <Cpu className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Headphones className="w-6 h-6" /> }
  ];

  const capabilities = [
    {
      title: "Advanced Machine Learning",
      description: "Our AI services leverage cutting-edge machine learning algorithms and neural networks to deliver unprecedented accuracy and performance.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Processing",
      description: "Process massive amounts of data in real-time with our high-performance AI infrastructure designed for enterprise-scale operations.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Custom Model Training",
      description: "Train custom AI models tailored to your specific business needs with our advanced machine learning platform and expert support.",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Seamless Integration",
      description: "Integrate our AI services with your existing systems through comprehensive APIs and pre-built connectors for popular platforms.",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive AI services including business intelligence, customer support automation, content generation, cybersecurity, computer vision, and more. Enterprise-grade AI solutions starting from $129/month."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, business intelligence, customer support automation, content generation, cybersecurity AI, computer vision, document processing, voice AI, financial analytics, healthcare AI"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">25+ AI Services Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Services
              </span>
              <br />
              <span className="text-white">Powered by Intelligence</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI services. From advanced analytics to intelligent automation, 
              we provide enterprise-grade artificial intelligence solutions that drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Get Started Today
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Watch Demo
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <ResponsiveGrid cols={{ default: 2, md: 4 }} className="max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* AI Capabilities */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Choose Our AI Services?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI services are built on cutting-edge technology and designed to deliver exceptional results for your business.
              </p>
            </div>
            
            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 4 }}>
              {capabilities.map((capability, index) => (
                <FuturisticCard
                  key={index}
                  className="text-center group"
                  glowColor="cyan"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{capability.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 text-sm font-medium"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our AI Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services. All plans include 24/7 support, regular updates, and 30-day money-back guarantee.
              </p>
            </div>
            
            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }}>
              {aiServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  className={`group cursor-pointer relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}
                  glowColor={service.glowColor}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <Link
                    to={service.link}
                    className="block p-6"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    <div className="text-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <div className="text-white">{service.icon}</div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-3xl font-bold text-white">${service.price}</span>
                        <span className="text-gray-400 ml-1">/{service.period}</span>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <span className="text-sm text-gray-400 line-through">${service.marketPrice}</span>
                        <span className="text-sm text-green-400 font-semibold">Save {service.savings}</span>
                      </div>
                      
                      <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        {service.category}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-center mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Capabilities:</h4>
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-400">
                          <Lightning className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          <span>{capability}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI services to automate processes, 
                gain insights, and drive innovation. Start your AI transformation journey today.
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
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Sparkles className="w-5 h-5" />}
                >
                  Start AI Journey
                </FuturisticButton>
                <FuturisticButton
                  href="/pricing"
                  variant="outline"
                  size="lg"
                  icon={<DollarSign className="w-5 h-5" />}
                >
                  View All Pricing
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;