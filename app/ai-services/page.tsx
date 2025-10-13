import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Shield, BarChart3, Users, Target, Calendar, 
  ArrowRight, Star, CheckCircle, Zap, Globe, Settings,
  Search, Filter, Grid, List, TrendingUp, Award,
  DollarSign, Clock, Users2, Database, FileText, 
  MessageSquare, ShoppingCart, Briefcase, PieChart, 
  Activity, Lock, Smartphone, Monitor, Cpu, Eye,
  Mic, Image, Code, Search as SearchIcon, Bot,
  Layers, Workflow, Network, Zap as ZapIcon
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AiServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    'All', 'Analytics', 'Security', 'Automation', 'Content', 'Customer Service',
    'Development', 'Marketing', 'Healthcare', 'Finance', 'Education', 'E-commerce',
    'Computer Vision', 'NLP', 'Predictive', 'Recommendation', 'Voice', 'Image'
  ];

  const aiServices = [
    {
      id: 1,
      name: "AI Business Intelligence Pro",
      description: "Advanced AI-powered business intelligence with predictive analytics, automated reporting, and intelligent data visualization for data-driven decision making.",
      price: 399,
      category: "Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Predictive Analytics", "Automated Reporting", "Data Visualization", "Real-time Insights", "Custom Dashboards"],
      rating: 4.9,
      reviews: 1847,
      link: "/ai-business-intelligence-pro",
      popular: true,
      new: false,
      complexity: "Advanced"
    },
    {
      id: 2,
      name: "AI Cybersecurity Suite Pro",
      description: "Comprehensive AI-powered cybersecurity solution with threat detection, automated response, and intelligent security monitoring for enterprise protection.",
      price: 599,
      category: "Security",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat Detection", "Automated Response", "Security Monitoring", "Incident Management", "Compliance Tools"],
      rating: 4.8,
      reviews: 1292,
      link: "/ai-cybersecurity-suite-pro",
      popular: true,
      new: false,
      complexity: "Advanced"
    },
    {
      id: 3,
      name: "AI Content Generation Pro",
      description: "Revolutionary AI content creation platform with natural language processing, automated writing, and multi-format content generation capabilities.",
      price: 199,
      category: "Content",
      icon: <FileText className="w-8 h-8" />,
      features: ["Natural Language Processing", "Automated Writing", "Multi-format Content", "SEO Optimization", "Brand Voice Matching"],
      rating: 4.7,
      reviews: 2156,
      link: "/ai-content-generation-pro",
      popular: true,
      new: false,
      complexity: "Intermediate"
    },
    {
      id: 4,
      name: "AI Customer Support Chatbot",
      description: "Intelligent customer support chatbot with natural language understanding, automated ticket resolution, and seamless human handoff capabilities.",
      price: 299,
      category: "Customer Service",
      icon: <MessageSquare className="w-8 h-8" />,
      features: ["Natural Language Understanding", "Automated Resolution", "Human Handoff", "Multi-language Support", "Sentiment Analysis"],
      rating: 4.8,
      reviews: 1683,
      link: "/ai-customer-support-chatbot",
      popular: true,
      new: false,
      complexity: "Intermediate"
    },
    {
      id: 5,
      name: "AI Code Assistant Pro",
      description: "Advanced AI coding assistant with intelligent code completion, bug detection, refactoring suggestions, and automated testing capabilities.",
      price: 249,
      category: "Development",
      icon: <Code className="w-8 h-8" />,
      features: ["Code Completion", "Bug Detection", "Refactoring Suggestions", "Automated Testing", "Code Review"],
      rating: 4.9,
      reviews: 2234,
      link: "/ai-code-assistant-pro",
      popular: true,
      new: false,
      complexity: "Advanced"
    },
    {
      id: 6,
      name: "AI Marketing Automation Hub",
      description: "Comprehensive AI marketing automation with predictive customer behavior, personalized campaigns, and intelligent lead scoring.",
      price: 349,
      category: "Marketing",
      icon: <Target className="w-8 h-8" />,
      features: ["Predictive Behavior", "Personalized Campaigns", "Lead Scoring", "A/B Testing", "ROI Optimization"],
      rating: 4.7,
      reviews: 1124,
      link: "/ai-marketing-automation-hub",
      popular: true,
      new: false,
      complexity: "Advanced"
    },
    {
      id: 7,
      name: "AI Healthcare Diagnostics",
      description: "Advanced AI-powered medical diagnostics with image analysis, symptom recognition, and treatment recommendation capabilities.",
      price: 799,
      category: "Healthcare",
      icon: <Activity className="w-8 h-8" />,
      features: ["Medical Image Analysis", "Symptom Recognition", "Treatment Recommendations", "Patient Monitoring", "Clinical Decision Support"],
      rating: 4.9,
      reviews: 456,
      link: "/ai-healthcare-diagnostics",
      popular: false,
      new: true,
      complexity: "Expert"
    },
    {
      id: 8,
      name: "AI Financial Analytics Pro",
      description: "Intelligent financial analytics with risk assessment, fraud detection, investment recommendations, and automated financial reporting.",
      price: 449,
      category: "Finance",
      icon: <DollarSign className="w-8 h-8" />,
      features: ["Risk Assessment", "Fraud Detection", "Investment Recommendations", "Financial Reporting", "Compliance Monitoring"],
      rating: 4.8,
      reviews: 756,
      link: "/ai-financial-analytics-pro",
      popular: false,
      new: true,
      complexity: "Advanced"
    },
    {
      id: 9,
      name: "AI Computer Vision Pro",
      description: "Advanced computer vision AI with object detection, facial recognition, image classification, and real-time video analysis capabilities.",
      price: 399,
      category: "Computer Vision",
      icon: <Eye className="w-8 h-8" />,
      features: ["Object Detection", "Facial Recognition", "Image Classification", "Video Analysis", "Real-time Processing"],
      rating: 4.7,
      reviews: 634,
      link: "/ai-computer-vision-pro",
      popular: false,
      new: true,
      complexity: "Advanced"
    },
    {
      id: 10,
      name: "AI Voice Assistant Pro",
      description: "Intelligent voice assistant with natural language processing, speech recognition, and multi-modal interaction capabilities.",
      price: 199,
      category: "Voice",
      icon: <Mic className="w-8 h-8" />,
      features: ["Speech Recognition", "Natural Language Processing", "Multi-modal Interaction", "Voice Commands", "Conversational AI"],
      rating: 4.6,
      reviews: 892,
      link: "/ai-voice-assistant-pro",
      popular: true,
      new: false,
      complexity: "Intermediate"
    },
    {
      id: 11,
      name: "AI Image Recognition Pro",
      description: "Advanced image recognition AI with object detection, scene understanding, and automated image tagging capabilities.",
      price: 179,
      category: "Image",
      icon: <Image className="w-8 h-8" />,
      features: ["Object Detection", "Scene Understanding", "Image Tagging", "Content Moderation", "Visual Search"],
      rating: 4.7,
      reviews: 523,
      link: "/ai-image-recognition-pro",
      popular: false,
      new: true,
      complexity: "Intermediate"
    },
    {
      id: 12,
      name: "AI Predictive Maintenance",
      description: "Intelligent predictive maintenance with equipment monitoring, failure prediction, and automated maintenance scheduling.",
      price: 299,
      category: "Predictive",
      icon: <Settings className="w-8 h-8" />,
      features: ["Equipment Monitoring", "Failure Prediction", "Maintenance Scheduling", "Performance Optimization", "Cost Reduction"],
      rating: 4.8,
      reviews: 412,
      link: "/ai-predictive-maintenance",
      popular: false,
      new: true,
      complexity: "Advanced"
    },
    {
      id: 13,
      name: "AI Recommendation Engine",
      description: "Advanced recommendation system with collaborative filtering, content-based filtering, and hybrid recommendation algorithms.",
      price: 249,
      category: "Recommendation",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Collaborative Filtering", "Content-based Filtering", "Hybrid Algorithms", "Real-time Recommendations", "A/B Testing"],
      rating: 4.6,
      reviews: 678,
      link: "/ai-recommendation-engine",
      popular: false,
      new: true,
      complexity: "Advanced"
    },
    {
      id: 14,
      name: "AI NLP Text Analysis",
      description: "Advanced natural language processing with sentiment analysis, entity recognition, text classification, and language translation.",
      price: 199,
      category: "NLP",
      icon: <SearchIcon className="w-8 h-8" />,
      features: ["Sentiment Analysis", "Entity Recognition", "Text Classification", "Language Translation", "Text Summarization"],
      rating: 4.7,
      reviews: 567,
      link: "/ai-nlp-text-analysis",
      popular: false,
      new: true,
      complexity: "Intermediate"
    },
    {
      id: 15,
      name: "AI Workflow Automation",
      description: "Intelligent workflow automation with process optimization, task automation, and intelligent decision making capabilities.",
      price: 329,
      category: "Automation",
      icon: <Workflow className="w-8 h-8" />,
      features: ["Process Optimization", "Task Automation", "Decision Making", "Integration Hub", "Performance Monitoring"],
      rating: 4.8,
      reviews: 345,
      link: "/ai-workflow-automation",
      popular: false,
      new: true,
      complexity: "Advanced"
    }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { number: "25+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
    { number: "15,000+", label: "AI Models Deployed", icon: <Cpu className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Activity className="w-6 h-6" /> }
  ];

  const complexityColors = {
    "Beginner": "bg-green-500/20 text-green-400",
    "Intermediate": "bg-yellow-500/20 text-yellow-400",
    "Advanced": "bg-orange-500/20 text-orange-400",
    "Expert": "bg-red-500/20 text-red-400"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Discover our comprehensive AI services including machine learning, computer vision, NLP, and automation. Transform your business with cutting-edge artificial intelligence technology."
        keywords="AI services, artificial intelligence, machine learning, computer vision, NLP, automation, AI consulting, AI development"
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
            <span className="text-cyan-400 text-sm font-medium">25+ AI Services Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="neon-text futuristic-text animate-neon-glow" data-text="AI Services">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Harness the power of artificial intelligence with our comprehensive suite of AI services. 
            From machine learning to computer vision, we provide cutting-edge AI solutions for every business need.
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
        </ResponsiveContainer>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  viewMode === 'grid' ? (
                    index % 3 === 0 ? 'cyber-card' : 
                    index % 3 === 1 ? 'hologram-card' : 
                    'quantum-card'
                  ) : 'cyber-card'
                }`}
              >
                <Link to={service.link} className="block">
                  {/* Badges */}
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    {service.popular && (
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                        Popular
                      </span>
                    )}
                    {service.new && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        New
                      </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${complexityColors[service.complexity as keyof typeof complexityColors]}`}>
                      {service.complexity}
                    </span>
                  </div>

                  <div className={`${viewMode === 'list' ? 'flex items-start space-x-6' : ''}`}>
                    {/* Icon */}
                    <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'flex items-center mb-4'}`}>
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform animate-quantum-pulse">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors futuristic-text">
                          {service.name}
                        </h3>
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-cyan-400">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Rating and Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(service.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-400'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">
                            {service.rating} ({service.reviews} reviews)
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">
                            ${service.price}
                          </div>
                          <div className="text-sm text-gray-400">/month</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No AI services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness AI Power?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your business with our advanced AI services. From automation to intelligence, 
            we provide the AI solutions you need to stay ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button group"
            >
              Start AI Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch AI Demo
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;