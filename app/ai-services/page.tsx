import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  BarChart3, 
  Shield, 
  Video, 
  Users, 
  Zap, 
  Sparkles,
  Target,
  Globe,
  Mail,
  Phone,
  MapPin,
  Eye,
  Heart,
  MessageSquare,
  Calendar,
  DollarSign,
  Code,
  FileText,
  Mic,
  Share,
  Activity,
  TrendingDown,
  TrendingUp,
  Headphones,
  Play,
  Settings,
  Database,
  Lock,
  Cpu,
  Network,
  HardDrive,
  Smartphone,
  Laptop,
  Monitor
} from 'lucide-react';

const AIServicesPage = () => {
  const aiServices = [
    {
      id: 'ai-video-generator',
      name: 'AI Video Generator Pro',
      description: 'Create professional videos with AI-powered editing, voice synthesis, and automated content generation.',
      icon: <Video className="w-8 h-8" />,
      price: 'Starting at $199/month',
      originalPrice: '$399/month',
      features: ['AI Video Creation', 'Voice Synthesis', 'Auto Editing', 'Template Library', 'HD Export', 'Brand Integration'],
      category: 'AI Video',
      popular: true,
      link: '/ai-video-generator',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights Pro',
      description: 'Advanced customer analytics with behavioral insights, churn prediction, and personalized recommendations.',
      icon: <Users className="w-8 h-8" />,
      price: 'Starting at $299/month',
      originalPrice: '$599/month',
      features: ['Behavioral Analytics', 'Churn Prediction', 'Personalized Recommendations', 'Customer Segmentation', 'Real-time Insights', 'ROI Tracking'],
      category: 'AI Analytics',
      popular: true,
      link: '/ai-customer-insights',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite Pro',
      description: 'Advanced threat detection and response system with real-time monitoring and automated incident response.',
      icon: <Shield className="w-8 h-8" />,
      price: 'Starting at $499/month',
      originalPrice: '$999/month',
      features: ['Threat Detection', 'Automated Response', '24/7 Monitoring', 'Compliance Reports', 'Incident Response', 'Security Training'],
      category: 'AI Security',
      popular: true,
      link: '/ai-cybersecurity-suite-pro',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation Pro',
      description: 'Create high-quality content at scale with AI-powered writing tools and SEO optimization.',
      icon: <FileText className="w-8 h-8" />,
      price: 'Starting at $149/month',
      originalPrice: '$299/month',
      features: ['SEO Optimization', 'Brand Voice Training', 'Multi-format Output', 'Plagiarism Detection', 'Content Calendar', 'Team Collaboration'],
      category: 'AI Content',
      link: '/ai-content-generation-pro',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Pro',
      description: 'Advanced AI customer support with multi-channel integration and automated ticket routing.',
      icon: <Headphones className="w-8 h-8" />,
      price: 'Starting at $229/month',
      originalPrice: '$459/month',
      features: ['Multi-channel Support', 'Sentiment Analysis', 'Automated Routing', 'Knowledge Base', 'Live Chat Integration', 'Performance Analytics'],
      category: 'AI Support',
      popular: true,
      link: '/ai-customer-support-pro',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      description: 'Intelligent code generation, review, and optimization with support for multiple programming languages.',
      icon: <Code className="w-8 h-8" />,
      price: 'Starting at $159/month',
      originalPrice: '$319/month',
      features: ['Code Generation', 'Bug Detection', 'Security Analysis', 'Performance Optimization', 'Code Quality Metrics', 'Team Collaboration'],
      category: 'AI Development',
      link: '/ai-code-assistant-pro',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Pro',
      description: 'Transform raw data into actionable insights with advanced AI analytics and predictive modeling.',
      icon: <BarChart3 className="w-8 h-8" />,
      price: 'Starting at $299/month',
      originalPrice: '$599/month',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration', 'Mobile App', 'White-label Options'],
      category: 'AI Analytics',
      link: '/ai-business-intelligence-pro',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation Pro',
      description: 'End-to-end marketing automation with AI-driven personalization and advanced lead scoring.',
      icon: <Target className="w-8 h-8" />,
      price: 'Starting at $199/month',
      originalPrice: '$399/month',
      features: ['Email Automation', 'Social Media', 'Lead Scoring', 'A/B Testing', 'Personalization', 'Analytics Dashboard'],
      category: 'AI Marketing',
      link: '/ai-marketing-automation-pro',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant Pro',
      description: 'Advanced voice assistant with natural language processing and multi-language support.',
      icon: <Mic className="w-8 h-8" />,
      price: 'Starting at $199/month',
      originalPrice: '$399/month',
      features: ['Natural Language Processing', 'Multi-language Support', 'Custom Voice Training', 'API Integration', 'Voice Commands', 'Analytics'],
      category: 'AI Voice',
      link: '/ai-voice-assistant-pro',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Intelligence Suite',
      description: 'Intelligent document analysis, extraction, and processing with OCR technology.',
      icon: <FileText className="w-8 h-8" />,
      price: 'Starting at $159/month',
      originalPrice: '$319/month',
      features: ['OCR Technology', 'Form Recognition', 'Data Extraction', 'Workflow Automation', 'Document Classification', 'Search & Retrieval'],
      category: 'AI Document',
      link: '/ai-document-intelligence',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'ai-financial-analytics',
      name: 'AI Financial Analytics Pro',
      description: 'Advanced financial modeling and risk assessment with automated reporting and fraud detection.',
      icon: <DollarSign className="w-8 h-8" />,
      price: 'Starting at $349/month',
      originalPrice: '$699/month',
      features: ['Risk Assessment', 'Fraud Detection', 'Investment Analysis', 'Compliance Reporting', 'Portfolio Optimization', 'Market Prediction'],
      category: 'AI Finance',
      link: '/ai-financial-analysis',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting and logistics automation.',
      icon: <Globe className="w-8 h-8" />,
      price: 'Starting at $279/month',
      originalPrice: '$559/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Risk Assessment', 'Cost Analysis'],
      category: 'AI Supply Chain',
      link: '/ai-supply-chain-optimizer',
      color: 'from-slate-500 to-gray-500'
    }
  ];

  const categories = [
    { name: 'All Services', count: aiServices.length, color: 'from-cyan-500 to-purple-500' },
    { name: 'AI Analytics', count: aiServices.filter(s => s.category.includes('Analytics')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Video', count: aiServices.filter(s => s.category.includes('Video')).length, color: 'from-purple-500 to-pink-500' },
    { name: 'AI Security', count: aiServices.filter(s => s.category.includes('Security')).length, color: 'from-red-500 to-orange-500' },
    { name: 'AI Content', count: aiServices.filter(s => s.category.includes('Content')).length, color: 'from-green-500 to-emerald-500' },
    { name: 'AI Support', count: aiServices.filter(s => s.category.includes('Support')).length, color: 'from-indigo-500 to-purple-500' },
    { name: 'AI Development', count: aiServices.filter(s => s.category.includes('Development')).length, color: 'from-yellow-500 to-orange-500' },
    { name: 'AI Marketing', count: aiServices.filter(s => s.category.includes('Marketing')).length, color: 'from-pink-500 to-rose-500' },
    { name: 'AI Voice', count: aiServices.filter(s => s.category.includes('Voice')).length, color: 'from-violet-500 to-purple-500' },
    { name: 'AI Document', count: aiServices.filter(s => s.category.includes('Document')).length, color: 'from-emerald-500 to-green-500' },
    { name: 'AI Finance', count: aiServices.filter(s => s.category.includes('Finance')).length, color: 'from-amber-500 to-yellow-500' },
    { name: 'AI Supply Chain', count: aiServices.filter(s => s.category.includes('Supply Chain')).length, color: 'from-slate-500 to-gray-500' }
  ];

  const stats = [
    { number: '25+', label: 'AI Services', icon: <Brain className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of AI services including video generation, customer insights, cybersecurity, content creation, and more. Transform your business with cutting-edge AI technology."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, AI video generator, customer insights, AI cybersecurity, content generation, AI analytics, business intelligence, AI automation"
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
              <span className="text-cyan-400 text-sm font-medium">25+ AI-Powered Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI services designed to transform your business operations. 
              From video generation to customer insights, we provide cutting-edge artificial intelligence solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
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
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI-Powered Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services designed to automate and optimize your business processes.
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
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
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
                      {service.name}
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
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI services to drive growth and innovation. 
                Contact us today for a personalized consultation.
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
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
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
};

export default AIServicesPage;