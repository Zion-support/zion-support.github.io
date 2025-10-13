import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Brain, 
  Shield, 
  BarChart3, 
  Cloud, 
  Users, 
  Target, 
  Calendar,
  Mail,
  Smartphone,
  Monitor,
  Settings,
  Globe,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  ExternalLink,
  Play,
  Download,
  Eye,
  Heart,
  MessageSquare,
  FileText,
  Database,
  Lock,
  Cpu,
  Wifi,
  Smartphone as Phone,
  CreditCard,
  PieChart,
  Activity,
  Layers,
  Workflow,
  Bot,
  Search,
  Filter,
  RefreshCw,
  Plus,
  Minus,
  ChevronRight,
  Zap,
  Sparkles,
  Cpu as AI,
  Network,
  Microscope,
  Lightbulb,
  Rocket,
  Infinity,
  Atom,
  CircuitBoard,
  BrainCircuit,
  Cpu2,
  Database2,
  Network2,
  Layers3,
  Workflow2,
  Bot2,
  Search2,
  Filter2,
  RefreshCw2,
  Plus2,
  Minus2,
  ChevronRight2
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AiServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group - AI Services",
    "url": "https://ziontechgroup.com/ai-services",
    "description": "Comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, and intelligent automation solutions.",
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Analytics Dashboard Pro",
        "description": "AI-powered business intelligence platform",
        "price": "299",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer", 
        "name": "AI Cybersecurity Suite Pro",
        "description": "Advanced AI-powered cybersecurity protection",
        "price": "499",
        "priceCurrency": "USD"
      }
    ]
  };

  const aiServiceCategories = [
    {
      title: "AI Analytics & Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "AI Analytics Dashboard Pro",
          description: "Advanced business intelligence platform powered by machine learning algorithms. Get real-time insights, predictive analytics, and automated reporting for data-driven decision making.",
          price: "From $299/month",
          features: ["Real-time dashboards", "Predictive analytics", "ML algorithms", "Automated reporting", "Custom metrics", "API integration"],
          icon: <BarChart3 className="w-6 h-6" />,
          link: "/ai-analytics-dashboard-pro",
          featured: true,
          rating: 4.9,
          users: "3,200+",
          category: "Analytics",
          capabilities: ["Data Processing", "Machine Learning", "Visualization", "Real-time Analysis"]
        },
        {
          name: "AI Business Intelligence Pro",
          description: "Comprehensive BI solution with natural language querying, automated insights generation, and advanced data visualization capabilities powered by AI.",
          price: "From $399/month",
          features: ["Natural language queries", "Automated insights", "Advanced visualization", "Data storytelling", "Collaborative dashboards", "Mobile access"],
          icon: <PieChart className="w-6 h-6" />,
          link: "/ai-business-intelligence-pro",
          rating: 4.8,
          users: "2,500+",
          category: "Business Intelligence",
          capabilities: ["Natural Language Processing", "Data Visualization", "Insight Generation", "Collaboration"]
        },
        {
          name: "AI Data Mining Pro",
          description: "Intelligent data extraction and analysis platform that discovers hidden patterns, trends, and insights from large datasets using advanced AI algorithms.",
          price: "From $249/month",
          features: ["Pattern recognition", "Trend analysis", "Data extraction", "Automated discovery", "Statistical modeling", "Export capabilities"],
          icon: <Database className="w-6 h-6" />,
          link: "/ai-data-mining-pro",
          rating: 4.7,
          users: "1,800+",
          category: "Data Mining",
          capabilities: ["Pattern Recognition", "Statistical Analysis", "Data Extraction", "Trend Analysis"]
        }
      ]
    },
    {
      title: "AI Cybersecurity & Protection",
      description: "Advanced AI-powered security solutions for comprehensive protection",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "AI Cybersecurity Suite Pro",
          description: "Comprehensive AI-powered cybersecurity platform with real-time threat detection, automated response, and advanced behavioral analysis to protect against sophisticated attacks.",
          price: "From $499/month",
          features: ["AI threat detection", "Behavioral analysis", "Automated response", "Real-time monitoring", "Incident response", "Compliance reporting"],
          icon: <Shield className="w-6 h-6" />,
          link: "/ai-cybersecurity-suite-pro",
          featured: true,
          rating: 4.9,
          users: "2,100+",
          category: "Cybersecurity",
          capabilities: ["Threat Detection", "Behavioral Analysis", "Automated Response", "Real-time Monitoring"]
        },
        {
          name: "AI Fraud Detection Pro",
          description: "Advanced fraud prevention system using machine learning to detect and prevent fraudulent activities across all business channels with 99.9% accuracy.",
          price: "From $399/month",
          features: ["ML fraud detection", "Real-time analysis", "Multi-channel monitoring", "Risk scoring", "Automated blocking", "False positive reduction"],
          icon: <Lock className="w-6 h-6" />,
          link: "/ai-fraud-detection-pro",
          rating: 4.8,
          users: "2,800+",
          category: "Fraud Prevention",
          capabilities: ["Machine Learning", "Real-time Analysis", "Risk Assessment", "Pattern Recognition"]
        },
        {
          name: "AI Cybersecurity Monitor Pro",
          description: "24/7 AI-powered security monitoring solution that continuously analyzes network traffic, user behavior, and system activities to detect and prevent security threats.",
          price: "From $349/month",
          features: ["24/7 monitoring", "Network analysis", "User behavior tracking", "Threat intelligence", "Automated alerts", "Security reporting"],
          icon: <Activity className="w-6 h-6" />,
          link: "/ai-cybersecurity-monitor-pro",
          rating: 4.7,
          users: "1,600+",
          category: "Security Monitoring",
          capabilities: ["Continuous Monitoring", "Network Analysis", "Behavioral Tracking", "Threat Intelligence"]
        }
      ]
    },
    {
      title: "AI Content & Communication",
      description: "Intelligent content creation and communication solutions",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "AI Content Generation Pro",
          description: "Advanced AI content creation platform that generates high-quality text, images, and multimedia content for marketing, documentation, and creative purposes.",
          price: "From $199/month",
          features: ["Text generation", "Image creation", "Content optimization", "SEO integration", "Brand voice training", "Multi-language support"],
          icon: <FileText className="w-6 h-6" />,
          link: "/ai-content-generation-pro",
          featured: true,
          rating: 4.8,
          users: "4,500+",
          category: "Content Creation",
          capabilities: ["Natural Language Generation", "Image Generation", "Content Optimization", "SEO Integration"]
        },
        {
          name: "AI Customer Support Chatbot",
          description: "Intelligent customer service chatbot powered by advanced NLP that provides 24/7 support, handles complex queries, and escalates issues to human agents when needed.",
          price: "From $149/month",
          features: ["Natural language processing", "24/7 availability", "Multi-language support", "Context awareness", "Human handoff", "Analytics dashboard"],
          icon: <Bot className="w-6 h-6" />,
          link: "/ai-customer-support-chatbot",
          rating: 4.7,
          users: "6,200+",
          category: "Customer Support",
          capabilities: ["Natural Language Processing", "Context Understanding", "Multi-language Support", "Sentiment Analysis"]
        },
        {
          name: "AI Language Translation",
          description: "Real-time AI-powered translation service supporting 100+ languages with context-aware translations, document processing, and voice translation capabilities.",
          price: "From $99/month",
          features: ["100+ languages", "Real-time translation", "Context awareness", "Document processing", "Voice translation", "API integration"],
          icon: <Globe className="w-6 h-6" />,
          link: "/ai-language-translation",
          rating: 4.6,
          users: "3,800+",
          category: "Translation",
          capabilities: ["Machine Translation", "Context Understanding", "Voice Processing", "Document Analysis"]
        }
      ]
    },
    {
      title: "AI Automation & Workflow",
      description: "Intelligent automation solutions for business processes",
      icon: <Workflow className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "AI Automation Platform",
          description: "Comprehensive AI-powered automation platform that streamlines business processes, reduces manual work, and increases operational efficiency through intelligent decision-making.",
          price: "From $299/month",
          features: ["Process automation", "AI decision making", "Workflow optimization", "Integration hub", "Performance analytics", "Custom automation"],
          icon: <Workflow className="w-6 h-6" />,
          link: "/ai-automation-platform",
          featured: true,
          rating: 4.8,
          users: "3,500+",
          category: "Process Automation",
          capabilities: ["Process Optimization", "Decision Making", "Workflow Management", "Integration"]
        },
        {
          name: "AI Marketing Automation",
          description: "Intelligent marketing automation platform that uses AI to optimize campaigns, personalize content, and maximize ROI across all marketing channels.",
          price: "From $249/month",
          features: ["Campaign optimization", "Content personalization", "Audience segmentation", "A/B testing", "ROI tracking", "Multi-channel marketing"],
          icon: <Target className="w-6 h-6" />,
          link: "/ai-marketing-automation",
          rating: 4.7,
          users: "2,900+",
          category: "Marketing Automation",
          capabilities: ["Campaign Optimization", "Personalization", "Audience Segmentation", "Performance Tracking"]
        },
        {
          name: "AI HR & Recruitment Pro",
          description: "AI-powered human resources platform that automates recruitment, employee management, performance evaluation, and talent development processes.",
          price: "From $199/month",
          features: ["Resume screening", "Candidate matching", "Performance evaluation", "Talent development", "Employee analytics", "Compliance management"],
          icon: <Users className="w-6 h-6" />,
          link: "/ai-hr-recruitment-pro",
          rating: 4.6,
          users: "2,200+",
          category: "Human Resources",
          capabilities: ["Resume Analysis", "Candidate Matching", "Performance Evaluation", "Talent Analytics"]
        }
      ]
    },
    {
      title: "AI Computer Vision & Image Processing",
      description: "Advanced computer vision and image analysis solutions",
      icon: <Eye className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      services: [
        {
          name: "AI Image Recognition Pro",
          description: "Advanced computer vision platform that can identify, classify, and analyze images with high accuracy. Perfect for quality control, security, and content moderation.",
          price: "From $349/month",
          features: ["Object recognition", "Image classification", "Quality control", "Content moderation", "Real-time processing", "API integration"],
          icon: <Eye className="w-6 h-6" />,
          link: "/ai-image-recognition-pro",
          featured: true,
          rating: 4.8,
          users: "1,900+",
          category: "Computer Vision",
          capabilities: ["Object Recognition", "Image Classification", "Quality Control", "Real-time Processing"]
        },
        {
          name: "AI Video Analysis",
          description: "Intelligent video analysis platform that can process, analyze, and extract insights from video content for security, marketing, and operational purposes.",
          price: "From $399/month",
          features: ["Video processing", "Motion detection", "Object tracking", "Scene analysis", "Real-time monitoring", "Analytics dashboard"],
          icon: <Monitor className="w-6 h-6" />,
          link: "/ai-video-analysis",
          rating: 4.7,
          users: "1,400+",
          category: "Video Analysis",
          capabilities: ["Video Processing", "Motion Detection", "Object Tracking", "Scene Analysis"]
        },
        {
          name: "AI Document Intelligence",
          description: "AI-powered document processing solution that can extract, analyze, and understand information from various document types including PDFs, images, and scanned documents.",
          price: "From $199/month",
          features: ["Document extraction", "OCR technology", "Data validation", "Template matching", "Batch processing", "API integration"],
          icon: <FileText className="w-6 h-6" />,
          link: "/ai-document-intelligence",
          rating: 4.6,
          users: "2,600+",
          category: "Document Processing",
          capabilities: ["Document Extraction", "OCR Technology", "Data Validation", "Template Matching"]
        }
      ]
    },
    {
      title: "AI Predictive Analytics & Forecasting",
      description: "Advanced predictive analytics and forecasting solutions",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          name: "AI Predictive Maintenance",
          description: "Intelligent predictive maintenance solution that uses machine learning to predict equipment failures, optimize maintenance schedules, and reduce downtime.",
          price: "From $399/month",
          features: ["Failure prediction", "Maintenance optimization", "Downtime reduction", "Cost savings", "Real-time monitoring", "Analytics dashboard"],
          icon: <Settings className="w-6 h-6" />,
          link: "/ai-predictive-maintenance",
          featured: true,
          rating: 4.8,
          users: "1,700+",
          category: "Predictive Analytics",
          capabilities: ["Failure Prediction", "Maintenance Optimization", "Cost Analysis", "Real-time Monitoring"]
        },
        {
          name: "AI Time Series Forecasting",
          description: "Advanced time series forecasting platform that uses machine learning to predict future trends, demand patterns, and business metrics with high accuracy.",
          price: "From $299/month",
          features: ["Trend prediction", "Demand forecasting", "Seasonal analysis", "Anomaly detection", "Confidence intervals", "Model optimization"],
          icon: <TrendingUp className="w-6 h-6" />,
          link: "/ai-time-series-forecasting",
          rating: 4.7,
          users: "2,300+",
          category: "Forecasting",
          capabilities: ["Trend Prediction", "Demand Forecasting", "Seasonal Analysis", "Anomaly Detection"]
        },
        {
          name: "AI Sentiment Analysis Pro",
          description: "Comprehensive sentiment analysis platform that analyzes customer feedback, social media, and reviews to provide insights into customer satisfaction and brand perception.",
          price: "From $149/month",
          features: ["Sentiment analysis", "Emotion detection", "Social media monitoring", "Review analysis", "Trend tracking", "Custom models"],
          icon: <Heart className="w-6 h-6" />,
          link: "/ai-sentiment-analysis-pro",
          rating: 4.6,
          users: "3,100+",
          category: "Sentiment Analysis",
          capabilities: ["Sentiment Analysis", "Emotion Detection", "Social Media Monitoring", "Trend Tracking"]
        }
      ]
    }
  ];

  const stats = [
    { number: "25+", label: "AI Service Categories", icon: <Brain className="w-6 h-6" /> },
    { number: "50,000+", label: "AI Models Deployed", icon: <Cpu className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "TechInnovate Labs",
      role: "Chief Data Officer",
      content: "Zion's AI services have revolutionized our data analytics capabilities. We've achieved 95% accuracy in predictive modeling and reduced analysis time by 80%.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Security Corp",
      role: "CISO",
      content: "The AI cybersecurity suite is exceptional. It detected threats we never knew existed and automated our response processes, improving our security posture significantly.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "Content Marketing Agency",
      role: "Creative Director",
      content: "AI content generation has transformed our creative process. We're producing 10x more content with higher quality and consistency than ever before.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services | Zion Tech Group - Advanced Artificial Intelligence Solutions"
        description="Discover our comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, and intelligent automation. Transform your business with cutting-edge AI technology."
        keywords="AI services, machine learning, artificial intelligence, natural language processing, computer vision, predictive analytics, AI automation, business intelligence, AI consulting"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Harness the power of artificial intelligence to transform your business. 
            From machine learning and natural language processing to computer vision and predictive analytics, 
            we provide cutting-edge AI solutions that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start AI Journey
            </FuturisticButton>
            <FuturisticButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              Explore AI Services
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* AI Services by Category */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              AI Services by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive collection of AI services, organized by category for easy discovery and implementation.
            </p>
          </div>

          {aiServiceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-300 text-lg">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                  >
                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-cyan-400 font-medium">{service.price}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-gray-300 text-sm">{service.rating}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-300 text-sm">{service.users} users</span>
                      </div>
                      <div className="text-xs text-cyan-400 font-medium">{service.category}</div>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-white font-medium mb-2 text-sm">AI Capabilities:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.capabilities.map((capability, capabilityIndex) => (
                          <span key={capabilityIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-white font-medium mb-2 text-sm">Key Features:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-cyan-400 px-2 py-1">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={service.link}
                        className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors flex items-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <FuturisticButton
                        href="/contact"
                        variant="outline"
                        size="sm"
                        icon={<Play className="w-4 h-4" />}
                      >
                        Get Started
                      </FuturisticButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by AI Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what industry experts say about our AI services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness AI Power?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our AI services to drive innovation, efficiency, and growth. 
            Start your AI transformation journey today with our expert team and cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start AI Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Watch AI Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;