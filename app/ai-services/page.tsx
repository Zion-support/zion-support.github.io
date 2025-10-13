import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Phone, Laptop, Headphones, Package, Heart, Receipt, Calendar, Clock, Award, Sparkles, CheckCircle, Star, Rocket, DollarSign, Zap as Lightning, Download, Play, Eye, PieChart, LineChart, Activity, MessageSquare, Image, Video, Mic, Search, Filter, Layers, Cpu as CpuIcon, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIServices() {
  const aiServices = [
    {
      title: "AI Business Intelligence & Analytics",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform. Real-time dashboards, predictive modeling, and automated reporting with 99.9% accuracy.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-analytics",
      color: "from-blue-500 to-cyan-500",
      price: "From $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "AI Analytics",
      popular: true,
      capabilities: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      useCases: ["E-commerce Analytics", "Marketing Performance", "Financial Reporting", "Operations Monitoring"]
    },
    {
      title: "AI Content Generation & Marketing",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and marketing materials with SEO optimization.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar", "Team Collaboration"],
      category: "AI Content",
      capabilities: ["Natural Language Generation", "Content Optimization", "SEO Analysis", "Brand Consistency"],
      useCases: ["Blog Writing", "Marketing Content", "Social Media", "Product Descriptions"]
    },
    {
      title: "AI Customer Support & Chatbots",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing, sentiment analysis, and multilingual capabilities.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Voice Recognition", "Custom Training"],
      category: "AI Customer Service",
      popular: true,
      capabilities: ["Natural Language Understanding", "Conversational AI", "Sentiment Analysis", "Multi-language Processing"],
      useCases: ["Customer Service", "Lead Generation", "Technical Support", "FAQ Automation"]
    },
    {
      title: "AI Cybersecurity & Threat Detection",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting. Protect your business 24/7.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "From $399/month",
      originalPrice: "$799/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response", "Security Training"],
      category: "AI Security",
      popular: true,
      capabilities: ["Anomaly Detection", "Behavioral Analysis", "Threat Intelligence", "Automated Response"],
      useCases: ["Threat Detection", "Fraud Prevention", "Compliance Monitoring", "Security Automation"]
    },
    {
      title: "AI Data Analytics & Processing",
      description: "Advanced data processing and visualization platform with machine learning models, automated insights, and interactive dashboards for data-driven decisions.",
      icon: <Database className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing", "Data Visualization", "Custom Reports"],
      category: "AI Data",
      capabilities: ["Machine Learning", "Data Mining", "Pattern Recognition", "Predictive Modeling"],
      useCases: ["Data Analysis", "Business Intelligence", "Research & Development", "Quality Control"]
    },
    {
      title: "AI Document Processing & Intelligence",
      description: "Intelligent document analysis, extraction, and processing with OCR technology, form recognition, and automated data entry solutions.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-processing",
      color: "from-emerald-500 to-green-500",
      price: "From $159/month",
      originalPrice: "$319/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation", "Document Classification", "Search & Retrieval"],
      category: "AI Documents",
      capabilities: ["Optical Character Recognition", "Document Understanding", "Form Processing", "Text Extraction"],
      useCases: ["Document Digitization", "Form Processing", "Data Entry Automation", "Compliance Management"]
    },
    {
      title: "AI Marketing Automation & Personalization",
      description: "End-to-end marketing automation with AI-driven personalization, email campaigns, social media management, and advanced lead scoring algorithms.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-pink-500 to-rose-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Personalization", "Analytics Dashboard"],
      category: "AI Marketing",
      capabilities: ["Customer Segmentation", "Personalization Engine", "Campaign Optimization", "Lead Scoring"],
      useCases: ["Email Marketing", "Social Media Management", "Lead Nurturing", "Campaign Optimization"]
    },
    {
      title: "AI Predictive Analytics & Forecasting",
      description: "Advanced predictive modeling and forecasting with machine learning algorithms for sales forecasting, demand planning, and risk assessment.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-predictive-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "From $229/month",
      originalPrice: "$459/month",
      features: ["Sales Forecasting", "Demand Planning", "Risk Assessment", "Trend Analysis", "Scenario Modeling", "Performance Metrics"],
      category: "AI Forecasting",
      capabilities: ["Time Series Analysis", "Regression Models", "Neural Networks", "Ensemble Methods"],
      useCases: ["Sales Forecasting", "Inventory Management", "Risk Assessment", "Financial Planning"]
    },
    {
      title: "AI Voice Assistant & Speech Recognition",
      description: "Advanced voice recognition and natural language processing with custom voice commands, multi-language support, and integration capabilities.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/ai-voice-assistant",
      color: "from-violet-500 to-purple-500",
      price: "From $159/month",
      originalPrice: "$319/month",
      features: ["Voice Recognition", "Natural Language", "Multi-language", "Custom Commands", "API Integration", "Analytics"],
      category: "AI Voice",
      capabilities: ["Speech Recognition", "Natural Language Understanding", "Text-to-Speech", "Voice Synthesis"],
      useCases: ["Voice Commands", "Customer Service", "Accessibility", "Automation"]
    },
    {
      title: "AI Workflow Automation & Process Intelligence",
      description: "Intelligent workflow automation with process optimization, task routing, and performance monitoring. Automate complex business processes with AI-powered workflows.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-workflow-automation",
      color: "from-orange-500 to-amber-500",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["Process Automation", "Task Routing", "Performance Monitoring", "Custom Workflows", "Integration", "Analytics"],
      category: "AI Automation",
      capabilities: ["Process Mining", "Workflow Optimization", "Task Automation", "Performance Analytics"],
      useCases: ["Business Process Automation", "Task Management", "Workflow Optimization", "Process Monitoring"]
    },
    {
      title: "AI Computer Vision & Image Processing",
      description: "Advanced computer vision solutions with image recognition, object detection, facial recognition, and visual content analysis for various industries.",
      icon: <Eye className="w-8 h-8" />,
      path: "/ai-computer-vision",
      color: "from-indigo-500 to-blue-500",
      price: "From $249/month",
      originalPrice: "$499/month",
      features: ["Image Recognition", "Object Detection", "Facial Recognition", "Visual Search", "Quality Control", "Real-time Processing"],
      category: "AI Vision",
      capabilities: ["Image Classification", "Object Detection", "Facial Recognition", "Visual Search"],
      useCases: ["Quality Control", "Security Systems", "Medical Imaging", "Retail Analytics"]
    },
    {
      title: "AI Code Assistant & Development Tools",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages, automated testing, and documentation generation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-slate-500 to-gray-500",
      price: "From $129/month",
      originalPrice: "$259/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Code Review", "Refactoring"],
      category: "AI Development",
      capabilities: ["Code Analysis", "Bug Detection", "Performance Optimization", "Documentation Generation"],
      useCases: ["Software Development", "Code Review", "Bug Fixing", "Documentation"]
    }
  ];

  const aiCapabilities = [
    {
      title: "Machine Learning & Deep Learning",
      description: "Advanced ML algorithms and neural networks for complex pattern recognition and predictive modeling",
      icon: <Brain className="w-8 h-8" />,
      applications: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Recommendation Systems"]
    },
    {
      title: "Natural Language Processing",
      description: "Understanding and generating human language with advanced NLP models and techniques",
      icon: <MessageSquare className="w-8 h-8" />,
      applications: ["Text Analysis", "Language Translation", "Sentiment Analysis", "Content Generation"]
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis with advanced computer vision algorithms and deep learning models",
      icon: <Eye className="w-8 h-8" />,
      applications: ["Image Recognition", "Object Detection", "Facial Recognition", "Visual Search"]
    },
    {
      title: "Speech Recognition & Synthesis",
      description: "Voice processing technologies for speech-to-text, text-to-speech, and voice command recognition",
      icon: <Mic className="w-8 h-8" />,
      applications: ["Voice Commands", "Speech Translation", "Voice Assistants", "Accessibility Tools"]
    },
    {
      title: "Robotic Process Automation",
      description: "Intelligent automation of repetitive tasks and business processes with AI-powered bots",
      icon: <Zap className="w-8 h-8" />,
      applications: ["Task Automation", "Process Optimization", "Workflow Management", "Data Processing"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecasting future trends and outcomes using historical data and machine learning models",
      icon: <TrendingUp className="w-8 h-8" />,
      applications: ["Sales Forecasting", "Demand Planning", "Risk Assessment", "Performance Prediction"]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: <Heart className="w-6 h-6" />,
      applications: ["Medical Diagnosis", "Drug Discovery", "Patient Monitoring", "Medical Imaging"],
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Finance",
      icon: <DollarSign className="w-6 h-6" />,
      applications: ["Fraud Detection", "Risk Assessment", "Algorithmic Trading", "Credit Scoring"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "E-commerce",
      icon: <Package className="w-6 h-6" />,
      applications: ["Recommendation Systems", "Price Optimization", "Inventory Management", "Customer Service"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Manufacturing",
      icon: <Settings className="w-6 h-6" />,
      applications: ["Quality Control", "Predictive Maintenance", "Supply Chain Optimization", "Process Automation"],
      color: "from-orange-500 to-amber-500"
    },
    {
      name: "Education",
      icon: <Users className="w-6 h-6" />,
      applications: ["Personalized Learning", "Student Assessment", "Content Generation", "Learning Analytics"],
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Transportation",
      icon: <Globe className="w-6 h-6" />,
      applications: ["Autonomous Vehicles", "Route Optimization", "Traffic Management", "Predictive Maintenance"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const stats = [
    { number: "50+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Shield className="w-6 h-6" /> },
    { number: "100+", label: "Integrations", icon: <Database className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, content generation, customer support, cybersecurity, data analytics, and more. Transform your business with cutting-edge artificial intelligence solutions."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, natural language processing, computer vision, predictive analytics, AI automation, business intelligence, AI consulting"
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
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Solutions Provider 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                AI Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI services. From machine learning and natural language processing 
              to computer vision and predictive analytics, we provide cutting-edge artificial intelligence solutions for every industry.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive AI capabilities cover all aspects of artificial intelligence and machine learning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  <div className="space-y-2">
                    {capability.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services designed to transform your business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
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

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are tailored for various industries and use cases
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {industry.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{app}</span>
                      </div>
                    ))}
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our AI solutions to drive growth and innovation. 
              Start your AI transformation journey today with our comprehensive suite of artificial intelligence services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/micro-saas-services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore Micro SAAS
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}