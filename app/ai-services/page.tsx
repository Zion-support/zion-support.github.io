import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Brain, Cpu, Shield, Globe, Database, Smartphone, Mail, Calendar, DollarSign, Users, BarChart, FileText, Lock, Clock, Star, Sparkles, Eye, Mic, Image, Code, Search, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All AI Services', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'content', name: 'Content Generation', icon: <FileText className="w-4 h-4" /> },
    { id: 'analytics', name: 'Analytics & Insights', icon: <BarChart className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-4 h-4" /> },
    { id: 'vision', name: 'Computer Vision', icon: <Eye className="w-4 h-4" /> },
    { id: 'nlp', name: 'Natural Language', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  const services = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blog posts, marketing copy, and social media content.',
      category: 'content',
      price: '$49/month',
      features: ['Unlimited content generation', 'Multiple writing styles', 'SEO optimization', 'Plagiarism detection', 'Multi-language support', 'Brand voice customization'],
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-400/50',
      glowColor: 'shadow-cyan-500/25',
      popular: true
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent conversational AI chatbots for customer service, sales, and support with advanced natural language processing.',
      category: 'nlp',
      price: '$79/month',
      features: ['Visual chatbot builder', 'Multi-channel deployment', 'Advanced NLP', 'Integration APIs', 'Analytics dashboard', 'Custom training'],
      icon: <MessageSquare className="w-8 h-8 text-emerald-400" />,
      gradient: 'from-emerald-500/20 to-green-500/20',
      borderColor: 'border-emerald-400/50',
      glowColor: 'shadow-emerald-500/25'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
      category: 'analytics',
      price: '$99/month',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization', 'Automated reports', 'Machine learning models'],
      icon: <BarChart className="w-8 h-8 text-purple-400" />,
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-400/50',
      glowColor: 'shadow-purple-500/25'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Intelligent voice recognition and synthesis system for hands-free interaction and automated voice responses.',
      category: 'nlp',
      price: '$65/month',
      features: ['Voice recognition', 'Text-to-speech', 'Multi-language support', 'Custom wake words', 'API integration', 'Real-time processing'],
      icon: <Mic className="w-8 h-8 text-orange-400" />,
      gradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-400/50',
      glowColor: 'shadow-orange-500/25'
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator',
      description: 'Create stunning images, artwork, and visual content using advanced AI image generation models.',
      category: 'vision',
      price: '$59/month',
      features: ['Text-to-image generation', 'Style transfer', 'Image editing', 'Batch processing', 'High-resolution output', 'Commercial license'],
      icon: <Image className="w-8 h-8 text-yellow-400" />,
      gradient: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-400/50',
      glowColor: 'shadow-yellow-500/25'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant',
      description: 'Intelligent coding companion that helps with code generation, debugging, optimization, and documentation.',
      category: 'automation',
      price: '$89/month',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Documentation generation', 'Multi-language support', 'IDE integration'],
      icon: <Code className="w-8 h-8 text-pink-400" />,
      gradient: 'from-pink-500/20 to-purple-500/20',
      borderColor: 'border-pink-400/50',
      glowColor: 'shadow-pink-500/25'
    },
    {
      id: 'ai-search-engine',
      name: 'AI Search Engine',
      description: 'Advanced search capabilities with semantic understanding, natural language queries, and intelligent ranking.',
      category: 'nlp',
      price: '$75/month',
      features: ['Semantic search', 'Natural language queries', 'Intelligent ranking', 'Real-time indexing', 'Custom filters', 'Analytics'],
      icon: <Search className="w-8 h-8 text-indigo-400" />,
      gradient: 'from-indigo-500/20 to-purple-500/20',
      borderColor: 'border-indigo-400/50',
      glowColor: 'shadow-indigo-500/25'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Automate complex business processes with AI-powered workflow orchestration and intelligent decision making.',
      category: 'automation',
      price: '$95/month',
      features: ['Process automation', 'Intelligent routing', 'Decision trees', 'Integration connectors', 'Monitoring dashboard', 'Custom triggers'],
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      gradient: 'from-teal-500/20 to-cyan-500/20',
      borderColor: 'border-teal-400/50',
      glowColor: 'shadow-teal-500/25'
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      description: 'Forecast future trends and outcomes using machine learning models and advanced statistical analysis.',
      category: 'analytics',
      price: '$120/month',
      features: ['Predictive modeling', 'Trend forecasting', 'Risk assessment', 'Custom algorithms', 'Real-time predictions', 'Model training'],
      icon: <Brain className="w-8 h-8 text-rose-400" />,
      gradient: 'from-rose-500/20 to-pink-500/20',
      borderColor: 'border-rose-400/50',
      glowColor: 'shadow-rose-500/25'
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      description: 'Intelligent document analysis, extraction, and processing with OCR and natural language understanding.',
      category: 'content',
      price: '$69/month',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Format conversion', 'Batch processing', 'API integration'],
      icon: <FileText className="w-8 h-8 text-violet-400" />,
      gradient: 'from-violet-500/20 to-purple-500/20',
      borderColor: 'border-violet-400/50',
      glowColor: 'shadow-violet-500/25'
    },
    {
      id: 'ai-recommendation-engine',
      name: 'AI Recommendation Engine',
      description: 'Personalized recommendation system that learns from user behavior to suggest relevant content and products.',
      category: 'analytics',
      price: '$85/month',
      features: ['Personalized recommendations', 'Behavioral analysis', 'A/B testing', 'Real-time updates', 'Multi-domain support', 'Performance metrics'],
      icon: <Star className="w-8 h-8 text-amber-400" />,
      gradient: 'from-amber-500/20 to-yellow-500/20',
      borderColor: 'border-amber-400/50',
      glowColor: 'shadow-amber-500/25'
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced fraud detection system using machine learning to identify suspicious activities and prevent financial losses.',
      category: 'analytics',
      price: '$150/month',
      features: ['Real-time monitoring', 'Pattern recognition', 'Risk scoring', 'Alert system', 'Custom rules', 'Compliance reporting'],
      icon: <Shield className="w-8 h-8 text-red-400" />,
      gradient: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-400/50',
      glowColor: 'shadow-red-500/25'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const stats = [
    { number: '25+', label: 'AI Services', icon: <Brain className="w-6 h-6 text-cyan-400" /> },
    { number: '50K+', label: 'AI Models', icon: <Cpu className="w-6 h-6 text-emerald-400" /> },
    { number: '99.9%', label: 'Accuracy', icon: <Shield className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'AI Processing', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  const useCases = [
    {
      title: 'Content Marketing',
      description: 'Generate high-quality blog posts, social media content, and marketing copy at scale.',
      icon: <FileText className="w-6 h-6 text-cyan-400" />,
      benefits: ['10x faster content creation', 'Consistent brand voice', 'SEO optimization', 'Multi-language support']
    },
    {
      title: 'Customer Service',
      description: 'Deploy intelligent chatbots and voice assistants for 24/7 customer support.',
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
      benefits: ['Instant responses', 'Reduced support costs', 'Improved satisfaction', 'Scalable solutions']
    },
    {
      title: 'Business Intelligence',
      description: 'Gain actionable insights from your data with AI-powered analytics and predictions.',
      icon: <BarChart className="w-6 h-6 text-purple-400" />,
      benefits: ['Predictive insights', 'Automated reporting', 'Data visualization', 'Trend analysis']
    },
    {
      title: 'Process Automation',
      description: 'Automate complex workflows and business processes with intelligent decision making.',
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      benefits: ['Reduced manual work', 'Faster processing', 'Error reduction', 'Cost savings']
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered solutions including content generation, chatbots, analytics, and automation to transform your business." />
        <meta name="keywords" content="ai services, artificial intelligence, machine learning, content generation, chatbots, analytics" />
      </Helmet>
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgba(168,85,247,0.1)_60deg,_transparent_120deg)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Artificial Intelligence Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advanced AI Services
              </span>
              <br />
              <span className="text-white">for Modern Business</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4 leading-relaxed">
              Harness the power of artificial intelligence to automate processes, generate content, analyze data, and transform your business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/micro-saas-services" 
                className="group border-2 border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Micro SAAS
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2 group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Use Cases</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Discover how AI can transform different aspects of your business
            </p>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-white/5 border border-white/20'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {filteredServices.map((service, index) => (
              <div key={service.id} className={`group relative bg-gradient-to-br ${service.gradient} backdrop-blur-lg rounded-2xl p-8 border ${service.borderColor} hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:${service.glowColor} hover:shadow-2xl ${service.popular ? 'ring-2 ring-cyan-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-sm">
                      Get Started
                    </button>
                    <button className="px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 delay-1300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-12 border border-purple-400/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Harness AI Power?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                  Transform your business with our advanced AI services and start seeing results immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <span className="flex items-center">
                      Start AI Journey
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link 
                    to="/micro-saas-services" 
                    className="group border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="relative py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-400 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📱 +1 302 464 0950 | 🏢 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;