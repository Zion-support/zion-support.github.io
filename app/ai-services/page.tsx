import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, Globe, Mail, Smartphone, Users, Award, Clock, BarChart3, Target, FileText, Settings, Database, Activity, Eye, Download, Share2, Filter, RefreshCw, AlertCircle, CheckCircle2, XCircle, Info, Bot, Code, Palette, Search, MessageSquare, Calendar, CreditCard, PieChart, Globe as World, Headphones, Camera, ShoppingCart, BookOpen, Lightbulb, Rocket, Heart, ThumbsUp, Gift, Crown, Sparkles, TrendingUp, Lock, Upload, Folder, Monitor, Wifi, Headphones as Headset, Camera as Cam, ShoppingCart as Cart, BookOpen as Book, Lightbulb as Bulb, Rocket as RocketIcon, Heart as HeartIcon, ThumbsUp as Thumb, Gift as GiftIcon, Crown as CrownIcon, Sparkles as SparkleIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIServices() {
  const aiServices = [
    {
      id: "ai-business-intelligence",
      name: "AI Business Intelligence",
      description: "Transform raw data into actionable insights with advanced AI analytics, predictive modeling, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "Starting at $299/month",
      originalPrice: "$499/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "Analytics",
      color: "from-blue-500 to-cyan-500",
      popular: true,
      link: "/ai-business-intelligence",
      benefits: ["60% efficiency boost", "Real-time insights", "Predictive analytics", "Custom dashboards"]
    },
    {
      id: "ai-customer-support",
      name: "AI Customer Support",
      description: "Deploy intelligent chatbots and automated customer service solutions with natural language processing and sentiment analysis.",
      icon: <Bot className="w-8 h-8" />,
      price: "Starting at $199/month",
      originalPrice: "$349/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "24/7 Availability", "Custom Training"],
      category: "Customer Service",
      color: "from-green-500 to-emerald-500",
      popular: true,
      link: "/ai-customer-support",
      benefits: ["80% faster response", "24/7 availability", "Multi-language support", "Sentiment analysis"]
    },
    {
      id: "ai-content-generation",
      name: "AI Content Generation",
      description: "Create high-quality content at scale with AI-powered writing tools for blogs, social media, and marketing materials.",
      icon: <FileText className="w-8 h-8" />,
      price: "Starting at $149/month",
      originalPrice: "$249/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar", "Team Collaboration"],
      category: "Content",
      color: "from-purple-500 to-pink-500",
      popular: true,
      link: "/ai-content-generation",
      benefits: ["10x content output", "SEO optimized", "Brand consistency", "Plagiarism free"]
    },
    {
      id: "ai-cybersecurity",
      name: "AI Cybersecurity",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      price: "Starting at $399/month",
      originalPrice: "$599/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Management", "Security Training"],
      category: "Security",
      color: "from-red-500 to-orange-500",
      popular: true,
      link: "/ai-cybersecurity",
      benefits: ["99.9% threat detection", "Automated response", "Compliance ready", "24/7 monitoring"]
    },
    {
      id: "ai-data-analytics",
      name: "AI Data Analytics",
      description: "Advanced data processing and visualization platform with machine learning models, automated insights, and interactive dashboards.",
      icon: <PieChart className="w-8 h-8" />,
      price: "Starting at $179/month",
      originalPrice: "$299/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing", "Custom Algorithms", "API Access"],
      category: "Analytics",
      color: "from-teal-500 to-cyan-500",
      popular: false,
      link: "/ai-data-analytics",
      benefits: ["Advanced ML models", "Real-time processing", "Interactive dashboards", "Custom algorithms"]
    },
    {
      id: "ai-code-assistant",
      name: "AI Code Assistant",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages and automated testing.",
      icon: <Code className="w-8 h-8" />,
      price: "Starting at $129/month",
      originalPrice: "$199/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Multi-language Support", "IDE Integration"],
      category: "Development",
      color: "from-yellow-500 to-orange-500",
      popular: true,
      link: "/ai-code-assistant",
      benefits: ["50% faster coding", "Bug detection", "Auto documentation", "Multi-language support"]
    },
    {
      id: "ai-marketing-automation",
      name: "AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization, email campaigns, social media management, and lead scoring.",
      icon: <Target className="w-8 h-8" />,
      price: "Starting at $199/month",
      originalPrice: "$329/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Personalization", "Campaign Analytics"],
      category: "Marketing",
      color: "from-pink-500 to-rose-500",
      popular: true,
      link: "/ai-marketing-automation",
      benefits: ["3x conversion rate", "Automated campaigns", "Personalized content", "Lead scoring"]
    },
    {
      id: "ai-document-processing",
      name: "AI Document Processing",
      description: "Intelligent document analysis, extraction, and processing with OCR, form recognition, and automated data entry solutions.",
      icon: <FileText className="w-8 h-8" />,
      price: "Starting at $159/month",
      originalPrice: "$259/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation", "Multi-format Support", "Batch Processing"],
      category: "Document Management",
      color: "from-emerald-500 to-green-500",
      popular: false,
      link: "/ai-document-processing",
      benefits: ["95% accuracy", "Automated extraction", "Multi-format support", "Batch processing"]
    },
    {
      id: "ai-crm-assistant",
      name: "AI CRM Assistant",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups with major CRM integrations.",
      icon: <Users className="w-8 h-8" />,
      price: "Starting at $229/month",
      originalPrice: "$379/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Pipeline Management", "Customer Insights"],
      category: "CRM",
      color: "from-violet-500 to-purple-500",
      popular: true,
      link: "/ai-crm-assistant",
      benefits: ["40% more leads", "Accurate forecasting", "Automated follow-ups", "CRM integration"]
    },
    {
      id: "ai-financial-analytics",
      name: "AI Financial Analytics",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis tools.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "Starting at $349/month",
      originalPrice: "$549/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting", "Financial Modeling", "Portfolio Optimization"],
      category: "Finance",
      color: "from-amber-500 to-yellow-500",
      popular: false,
      link: "/ai-financial-analytics",
      benefits: ["Risk reduction", "Fraud detection", "Investment insights", "Compliance ready"]
    },
    {
      id: "ai-computer-vision",
      name: "AI Computer Vision",
      description: "Advanced image and video analysis with object detection, facial recognition, and automated visual content processing.",
      icon: <Camera className="w-8 h-8" />,
      price: "Starting at $279/month",
      originalPrice: "$449/month",
      features: ["Object Detection", "Facial Recognition", "Image Classification", "Video Analysis", "Real-time Processing", "Custom Models"],
      category: "Computer Vision",
      color: "from-indigo-500 to-blue-500",
      popular: false,
      link: "/ai-computer-vision",
      benefits: ["Real-time analysis", "High accuracy", "Custom models", "Video processing"]
    },
    {
      id: "ai-natural-language-processing",
      name: "AI Natural Language Processing",
      description: "Advanced text analysis and language understanding with sentiment analysis, language translation, and text summarization.",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "Starting at $189/month",
      originalPrice: "$299/month",
      features: ["Sentiment Analysis", "Language Translation", "Text Summarization", "Entity Recognition", "Intent Classification", "Multi-language Support"],
      category: "NLP",
      color: "from-cyan-500 to-blue-500",
      popular: true,
      link: "/ai-natural-language-processing",
      benefits: ["Multi-language support", "Sentiment analysis", "Text summarization", "Entity recognition"]
    },
    {
      id: "ai-predictive-analytics",
      name: "AI Predictive Analytics",
      description: "Advanced forecasting and predictive modeling with machine learning algorithms for business trend prediction and risk assessment.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "Starting at $249/month",
      originalPrice: "$399/month",
      features: ["Trend Forecasting", "Risk Assessment", "Demand Prediction", "Churn Analysis", "Price Optimization", "Scenario Planning"],
      category: "Predictive Analytics",
      color: "from-orange-500 to-red-500",
      popular: true,
      link: "/ai-predictive-analytics",
      benefits: ["Accurate forecasting", "Risk assessment", "Demand prediction", "Churn analysis"]
    },
    {
      id: "ai-workflow-automation",
      name: "AI Workflow Automation",
      description: "Intelligent process automation with AI-powered decision making, task routing, and automated workflow optimization.",
      icon: <Zap className="w-8 h-8" />,
      price: "Starting at $169/month",
      originalPrice: "$279/month",
      features: ["Process Automation", "Task Routing", "Decision Making", "Workflow Optimization", "Integration Hub", "Custom Workflows"],
      category: "Automation",
      color: "from-yellow-500 to-orange-500",
      popular: false,
      link: "/ai-workflow-automation",
      benefits: ["Process automation", "Smart routing", "Decision making", "Workflow optimization"]
    },
    {
      id: "ai-recommendation-engine",
      name: "AI Recommendation Engine",
      description: "Personalized recommendation system with machine learning algorithms for products, content, and services optimization.",
      icon: <Heart className="w-8 h-8" />,
      price: "Starting at $219/month",
      originalPrice: "$359/month",
      features: ["Personalized Recommendations", "Collaborative Filtering", "Content-based Filtering", "Real-time Updates", "A/B Testing", "Analytics Dashboard"],
      category: "Recommendations",
      color: "from-pink-500 to-rose-500",
      popular: true,
      link: "/ai-recommendation-engine",
      benefits: ["Personalized content", "Higher engagement", "Real-time updates", "A/B testing"]
    }
  ];

  const categories = ["All", "Analytics", "Customer Service", "Content", "Security", "Development", "Marketing", "Document Management", "CRM", "Finance", "Computer Vision", "NLP", "Predictive Analytics", "Automation", "Recommendations"];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's AI Business Intelligence transformed our data insights. We increased efficiency by 60% and made better decisions with real-time analytics.",
      rating: 5,
      avatar: "SJ",
      metrics: "60% efficiency increase"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI Customer Support solution handles 80% of our inquiries automatically. Our response time improved dramatically and customer satisfaction is at an all-time high.",
      rating: 5,
      avatar: "MC",
      metrics: "80% automated responses"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "AI Content Generation has revolutionized our content strategy. We produce 10x more content while maintaining quality and brand consistency.",
      rating: 5,
      avatar: "ER",
      metrics: "10x content output"
    }
  ];

  const aiCapabilities = [
    {
      title: "Machine Learning",
      description: "Advanced ML algorithms for predictive modeling, pattern recognition, and automated decision making.",
      icon: <Brain className="w-6 h-6" />,
      applications: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Classification"]
    },
    {
      title: "Natural Language Processing",
      description: "Understanding and processing human language for chatbots, sentiment analysis, and content generation.",
      icon: <MessageSquare className="w-6 h-6" />,
      applications: ["Chatbots", "Sentiment Analysis", "Text Summarization", "Language Translation"]
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis with object detection, facial recognition, and visual content processing.",
      icon: <Camera className="w-6 h-6" />,
      applications: ["Object Detection", "Facial Recognition", "Image Classification", "Video Analysis"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecasting future trends and behaviors using historical data and machine learning models.",
      icon: <TrendingUp className="w-6 h-6" />,
      applications: ["Demand Forecasting", "Risk Assessment", "Churn Prediction", "Price Optimization"]
    },
    {
      title: "Process Automation",
      description: "Intelligent automation of business processes with AI-powered decision making and task routing.",
      icon: <Zap className="w-6 h-6" />,
      applications: ["Workflow Automation", "Task Routing", "Decision Making", "Process Optimization"]
    },
    {
      title: "Data Intelligence",
      description: "Transforming raw data into actionable insights with advanced analytics and visualization.",
      icon: <BarChart3 className="w-6 h-6" />,
      applications: ["Data Visualization", "Insight Generation", "Trend Analysis", "Performance Monitoring"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive AI services including business intelligence, customer support, content generation, cybersecurity, and more. Advanced AI solutions for modern businesses."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, business intelligence, customer support AI, content generation, cybersecurity AI, data analytics, predictive analytics, computer vision, natural language processing"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
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
              <span className="text-cyan-400 text-sm font-medium">15+ AI Services Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI solutions. From intelligent automation to advanced analytics, 
              we provide comprehensive AI services that drive growth and innovation.
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
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free AI Consultation
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300 text-sm">AI Services</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-gray-300 text-sm">AI Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">AI Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI services leverage cutting-edge technologies to solve complex business challenges and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  <div className="space-y-2">
                    {capability.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services designed to transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-3">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by AI Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our AI services
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-cyan-400">{testimonial.metrics}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI services to drive growth, efficiency, and innovation. 
                Start your AI transformation journey today.
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
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free AI Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}