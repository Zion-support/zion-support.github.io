import { ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, Brain, Bot, BarChart3, FileText, Users, Target, TrendingUp, Mail, Camera, Video, Music, Palette, Search, Lock, Settings, Headphones, Star, CheckCircle, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Business Intelligence Pro",
      description: "Advanced AI-powered business intelligence platform with real-time analytics, predictive modeling, and automated insights generation for data-driven decision making.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-business-intelligence-pro",
      color: "from-blue-500 to-cyan-500",
      price: "From $299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App"],
      category: "Analytics",
      popular: true
    },
    {
      title: "AI Customer Support Suite",
      description: "Comprehensive AI customer service solution with intelligent chatbots, sentiment analysis, and automated ticket routing for 24/7 customer support.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "From $199/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Analytics"],
      category: "Customer Service",
      popular: true
    },
    {
      title: "AI Content Generation Studio",
      description: "AI-powered content creation platform with automated writing, SEO optimization, and multi-format content generation for blogs, social media, and marketing.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation-pro",
      color: "from-purple-500 to-pink-500",
      price: "From $149/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar"],
      category: "Content Creation",
      popular: true
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Advanced AI-powered cybersecurity solution with real-time threat detection, automated incident response, and compliance monitoring for enterprise security.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-monitor-pro",
      color: "from-red-500 to-orange-500",
      price: "From $399/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Risk Assessment"],
      category: "Security"
    },
    {
      title: "AI Marketing Automation",
      description: "Intelligent marketing automation platform with AI-driven campaign optimization, customer segmentation, and personalized content delivery.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-indigo-500 to-purple-500",
      price: "From $199/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "ROI Analytics"],
      category: "Marketing"
    },
    {
      title: "AI Data Analytics Platform",
      description: "Comprehensive AI data analytics solution with machine learning models, automated insights, and interactive dashboards for business intelligence.",
      icon: <Database className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "From $179/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing", "Custom Reports"],
      category: "Analytics"
    },
    {
      title: "AI Code Assistant Pro",
      description: "Advanced AI code generation and review tool with multi-language support, automated testing, and intelligent debugging assistance for developers.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant-pro",
      color: "from-yellow-500 to-orange-500",
      price: "From $129/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Code Review"],
      category: "Development"
    },
    {
      title: "AI Document Intelligence",
      description: "Intelligent document processing with OCR, automated data extraction, and smart categorization for efficient document management and workflow automation.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-intelligence",
      color: "from-amber-500 to-yellow-500",
      price: "From $159/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation", "Search & Index"],
      category: "Document Management"
    },
    {
      title: "AI Sales CRM Assistant",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups for enhanced sales performance and customer relationship management.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "From $229/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Performance Analytics"],
      category: "Sales"
    },
    {
      title: "AI Financial Analytics",
      description: "Advanced AI financial modeling and risk assessment platform with automated reporting, fraud detection, and investment analysis tools for financial institutions.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-emerald-500 to-green-500",
      price: "From $349/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting", "Portfolio Optimization"],
      category: "Finance"
    },
    {
      title: "AI Computer Vision",
      description: "Advanced computer vision platform with image recognition, object detection, and automated visual analysis for various industries and applications.",
      icon: <Camera className="w-8 h-8" />,
      path: "/ai-computer-vision",
      color: "from-pink-500 to-rose-500",
      price: "From $189/month",
      features: ["Image Recognition", "Object Detection", "Facial Recognition", "Quality Control", "Real-time Analysis"],
      category: "Computer Vision"
    },
    {
      title: "AI Video Analytics",
      description: "Intelligent video processing platform with automated editing, content analysis, and real-time video analytics for content creators and businesses.",
      icon: <Video className="w-8 h-8" />,
      path: "/ai-video-analytics",
      color: "from-red-500 to-pink-500",
      price: "From $219/month",
      features: ["Auto Editing", "Content Analysis", "Real-time Analytics", "Quality Enhancement", "Multi-format Export"],
      category: "Video Processing"
    },
    {
      title: "AI Voice Assistant",
      description: "Advanced voice AI platform with natural language processing, voice recognition, and automated voice response systems for customer service and automation.",
      icon: <Headphones className="w-8 h-8" />,
      path: "/ai-voice-assistant",
      color: "from-blue-500 to-indigo-500",
      price: "From $169/month",
      features: ["Voice Recognition", "NLP Processing", "Multi-language", "Voice Synthesis", "Integration APIs"],
      category: "Voice AI"
    },
    {
      title: "AI Search Engine",
      description: "Intelligent search platform with semantic search, natural language queries, and AI-powered search optimization for websites and applications.",
      icon: <Search className="w-8 h-8" />,
      path: "/ai-search-engine",
      color: "from-lime-500 to-green-500",
      price: "From $139/month",
      features: ["Semantic Search", "Natural Language", "Search Analytics", "Auto-suggestions", "Custom Ranking"],
      category: "Search"
    },
    {
      title: "AI Design Assistant",
      description: "AI-powered design tool with automated logo creation, brand kit generation, and intelligent design suggestions for businesses and creatives.",
      icon: <Palette className="w-8 h-8" />,
      path: "/ai-design-studio",
      color: "from-rose-500 to-pink-500",
      price: "From $124/month",
      features: ["Logo Creation", "Brand Kit", "Design Suggestions", "Template Library", "Vector Graphics"],
      category: "Design"
    },
    {
      title: "AI Music Generator",
      description: "AI-powered music creation platform with automated composition, beat generation, and professional mixing capabilities for musicians and content creators.",
      icon: <Music className="w-8 h-8" />,
      path: "/ai-music-generator",
      color: "from-purple-500 to-indigo-500",
      price: "From $89/month",
      features: ["Auto Composition", "Beat Generation", "Professional Mixing", "MIDI Support", "Cloud Collaboration"],
      category: "Music AI"
    },
    {
      title: "AI Email Optimizer",
      description: "Intelligent email marketing platform with AI-powered subject line optimization, content personalization, and automated campaign management.",
      icon: <Mail className="w-8 h-8" />,
      path: "/ai-email-optimizer",
      color: "from-cyan-500 to-blue-500",
      price: "From $99/month",
      features: ["Subject Optimization", "Content Personalization", "A/B Testing", "Send Time Optimization", "Analytics"],
      category: "Email Marketing"
    },
    {
      title: "AI Project Manager",
      description: "Intelligent project management platform with AI-powered task prioritization, resource allocation, and automated progress tracking for teams.",
      icon: <Settings className="w-8 h-8" />,
      path: "/ai-project-manager",
      color: "from-slate-500 to-gray-500",
      price: "From $149/month",
      features: ["Task Prioritization", "Resource Allocation", "Progress Tracking", "Risk Assessment", "Team Collaboration"],
      category: "Project Management"
    },
    {
      title: "AI Security Auditor",
      description: "Comprehensive AI security auditing platform with automated vulnerability scanning, compliance checking, and security recommendations.",
      icon: <Lock className="w-8 h-8" />,
      path: "/ai-security-auditor",
      color: "from-red-500 to-orange-500",
      price: "From $279/month",
      features: ["Vulnerability Scanning", "Compliance Checking", "Security Recommendations", "Penetration Testing", "Risk Reports"],
      category: "Security"
    },
    {
      title: "AI Translation Engine",
      description: "Advanced AI translation platform with real-time language translation, document processing, and multi-language content localization.",
      icon: <Globe className="w-8 h-8" />,
      path: "/ai-translation-engine",
      color: "from-sky-500 to-blue-500",
      price: "From $119/month",
      features: ["Real-time Translation", "Document Processing", "Content Localization", "Multi-language", "API Integration"],
      category: "Translation"
    }
  ];

  const categories = [
    "All", "Analytics", "Customer Service", "Content Creation", "Security", "Marketing", 
    "Development", "Document Management", "Sales", "Finance", "Computer Vision", 
    "Video Processing", "Voice AI", "Search", "Design", "Music AI", "Email Marketing", 
    "Project Management", "Translation"
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, customer support, content generation, cybersecurity, marketing automation, and more. 20+ AI solutions starting from $89/month."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, automation, analytics, content generation, customer service, marketing AI, cybersecurity AI, computer vision, voice AI, translation AI"
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
              <span className="text-cyan-400 text-sm font-medium">20+ AI Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From advanced analytics to intelligent automation, we provide comprehensive AI services that drive growth and innovation.
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
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-300 text-sm">AI Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">15,000+</div>
                <div className="text-gray-300 text-sm">AI Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-300 text-sm">User Rating</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-cyan-400 transition-all duration-300 text-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our AI Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to accelerate your business growth and digital transformation. 
                Choose from our extensive collection of intelligent solutions.
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
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
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
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Get Started
                      </Link>
                    </div>
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
              Start your artificial intelligence journey today with our comprehensive suite of intelligent tools.
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
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
