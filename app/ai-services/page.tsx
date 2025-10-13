import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp, 
  Zap, 
  Globe, 
  Smartphone, 
  Mail, 
  Phone, 
  MapPin,
  Play,
  Shield,
  BarChart3,
  Settings,
  FileText,
  Target,
  Calendar,
  Database,
  Eye,
  Cpu,
  Network,
  Award,
  Clock,
  Sparkles,
  Bot,
  Code,
  Image,
  Mic,
  Search,
  Layers,
  Activity
} from 'lucide-react';

export default function AIServices() {
  const aiServices = [
    {
      id: 'ai-analytics-dashboard-pro',
      name: 'AI Analytics Dashboard Pro',
      description: 'Real-time business intelligence with AI-powered insights, predictive analytics, and automated reporting for data-driven decisions.',
      icon: <BarChart3 className="w-8 h-8" />,
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Real-time Analytics',
        'Predictive Modeling',
        'Custom Dashboards',
        'API Integration',
        'Mobile App',
        'White-label Options'
      ],
      category: 'Analytics & BI',
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      link: '/ai-analytics-dashboard-pro',
      benefits: [
        'Increase data-driven decisions by 85%',
        'Reduce reporting time by 70%',
        'Real-time insights across all departments',
        'Customizable dashboards for every role'
      ]
    },
    {
      id: 'ai-cybersecurity-suite-pro',
      name: 'AI Cybersecurity Suite Pro',
      description: 'Advanced threat detection and response with AI-powered security monitoring, automated incident response, and compliance reporting.',
      icon: <Shield className="w-8 h-8" />,
      price: '$499/month',
      originalPrice: '$999/month',
      features: [
        'AI Threat Detection',
        'Automated Response',
        'Compliance Reports',
        '24/7 Monitoring',
        'Incident Response',
        'Security Training'
      ],
      category: 'Cybersecurity',
      color: 'from-red-500 to-orange-500',
      popular: true,
      link: '/ai-cybersecurity-suite-pro',
      benefits: [
        '99.9% threat detection accuracy',
        'Reduce security incidents by 90%',
        'Automated compliance reporting',
        '24/7 security monitoring'
      ]
    },
    {
      id: 'ai-content-generation-pro',
      name: 'AI Content Generation Pro',
      description: 'Create high-quality content at scale with AI-powered writing tools, SEO optimization, and brand voice training.',
      icon: <FileText className="w-8 h-8" />,
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'SEO Optimization',
        'Brand Voice Training',
        'Multi-format Output',
        'Plagiarism Detection',
        'Content Calendar',
        'Team Collaboration'
      ],
      category: 'Content Creation',
      color: 'from-purple-500 to-pink-500',
      popular: true,
      link: '/ai-content-generation-pro',
      benefits: [
        'Create content 10x faster',
        'Improve SEO rankings by 60%',
        'Maintain consistent brand voice',
        'Automate content workflows'
      ]
    },
    {
      id: 'ai-customer-support-chatbot',
      name: 'AI Customer Support Chatbot',
      description: 'Intelligent customer service with natural language processing, sentiment analysis, and seamless human handoff.',
      icon: <Bot className="w-8 h-8" />,
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Multi-language Support',
        'Sentiment Analysis',
        'CRM Integration',
        'Live Chat Handoff',
        'Voice Recognition',
        'Custom Training'
      ],
      category: 'Customer Service',
      color: 'from-green-500 to-emerald-500',
      popular: true,
      link: '/ai-customer-support-chatbot',
      benefits: [
        'Reduce support costs by 50%',
        'Improve response time by 80%',
        'Handle 90% of queries automatically',
        'Enhance customer satisfaction'
      ]
    },
    {
      id: 'ai-code-assistant-pro',
      name: 'AI Code Assistant Pro',
      description: 'Intelligent code generation, review, and optimization with support for multiple programming languages and automated testing.',
      icon: <Code className="w-8 h-8" />,
      price: '$129/month',
      originalPrice: '$259/month',
      features: [
        'Code Generation',
        'Bug Detection',
        'Performance Optimization',
        'Documentation',
        'Code Review',
        'Refactoring'
      ],
      category: 'Development Tools',
      color: 'from-yellow-500 to-orange-500',
      popular: true,
      link: '/ai-code-assistant-pro',
      benefits: [
        'Increase development speed by 40%',
        'Reduce bugs by 60%',
        'Automate code reviews',
        'Improve code quality'
      ]
    },
    {
      id: 'ai-business-intelligence-pro',
      name: 'AI Business Intelligence Pro',
      description: 'Transform raw data into actionable insights with advanced analytics, machine learning models, and predictive forecasting.',
      icon: <TrendingUp className="w-8 h-8" />,
      price: '$349/month',
      originalPrice: '$699/month',
      features: [
        'Advanced Analytics',
        'Machine Learning Models',
        'Predictive Forecasting',
        'Custom Reports',
        'Data Visualization',
        'Real-time Insights'
      ],
      category: 'Business Intelligence',
      color: 'from-indigo-500 to-purple-500',
      popular: true,
      link: '/ai-business-intelligence-pro',
      benefits: [
        'Make data-driven decisions',
        'Predict business trends',
        'Optimize operations',
        'Increase profitability'
      ]
    },
    {
      id: 'ai-automation-platform',
      name: 'AI Automation Platform',
      description: 'Intelligent workflow automation with AI-powered process optimization, decision making, and task orchestration.',
      icon: <Zap className="w-8 h-8" />,
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Workflow Automation',
        'Process Optimization',
        'Decision Making',
        'Task Orchestration',
        'Integration Hub',
        'Performance Monitoring'
      ],
      category: 'Process Automation',
      color: 'from-cyan-500 to-blue-500',
      link: '/ai-automation-platform',
      benefits: [
        'Automate 90% of repetitive tasks',
        'Reduce process errors by 95%',
        'Increase team productivity',
        'Optimize business processes'
      ]
    },
    {
      id: 'ai-data-analytics-pro',
      name: 'AI Data Analytics Pro',
      description: 'Advanced data processing and visualization with machine learning models, automated insights, and interactive dashboards.',
      icon: <Database className="w-8 h-8" />,
      price: '$229/month',
      originalPrice: '$459/month',
      features: [
        'ML Models',
        'Interactive Dashboards',
        'Data Pipeline',
        'Real-time Processing',
        'Data Visualization',
        'Custom Reports'
      ],
      category: 'Data Analytics',
      color: 'from-teal-500 to-cyan-500',
      link: '/ai-data-analytics-pro',
      benefits: [
        'Process data 5x faster',
        'Generate insights automatically',
        'Visualize complex data',
        'Make informed decisions'
      ]
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'End-to-end marketing automation with AI-driven personalization, campaign optimization, and advanced lead scoring.',
      icon: <Target className="w-8 h-8" />,
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Email Automation',
        'Social Media',
        'Lead Scoring',
        'A/B Testing',
        'Personalization',
        'Analytics Dashboard'
      ],
      category: 'Marketing Automation',
      color: 'from-pink-500 to-rose-500',
      link: '/ai-marketing-automation',
      benefits: [
        'Increase lead generation by 60%',
        'Automate 90% of marketing tasks',
        'Personalize customer journeys',
        'Optimize campaign performance'
      ]
    },
    {
      id: 'ai-hr-recruitment-pro',
      name: 'AI HR & Recruitment Pro',
      description: 'Intelligent talent management with AI-powered resume screening, candidate matching, and performance analytics.',
      icon: <Users className="w-8 h-8" />,
      price: '$249/month',
      originalPrice: '$499/month',
      features: [
        'Resume Screening',
        'Candidate Matching',
        'Performance Analytics',
        'Interview Scheduling',
        'Onboarding Automation',
        'Skills Assessment'
      ],
      category: 'Human Resources',
      color: 'from-amber-500 to-yellow-500',
      link: '/ai-hr-recruitment-pro',
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Automate HR processes',
        'Enhance employee experience'
      ]
    },
    {
      id: 'ai-financial-analysis',
      name: 'AI Financial Analysis',
      description: 'Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis.',
      icon: <TrendingUp className="w-8 h-8" />,
      price: '$399/month',
      originalPrice: '$799/month',
      features: [
        'Risk Assessment',
        'Fraud Detection',
        'Investment Analysis',
        'Compliance Reporting',
        'Portfolio Optimization',
        'Market Prediction'
      ],
      category: 'Financial Services',
      color: 'from-emerald-500 to-green-500',
      link: '/ai-financial-analysis',
      benefits: [
        'Improve risk management',
        'Detect fraud in real-time',
        'Optimize investment portfolios',
        'Ensure regulatory compliance'
      ]
    },
    {
      id: 'ai-supply-chain-optimizer',
      name: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.',
      icon: <Globe className="w-8 h-8" />,
      price: '$279/month',
      originalPrice: '$559/month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Planning',
        'Supplier Management',
        'Risk Assessment',
        'Cost Analysis'
      ],
      category: 'Supply Chain',
      color: 'from-slate-500 to-gray-500',
      link: '/ai-supply-chain-optimizer',
      benefits: [
        'Reduce inventory costs by 25%',
        'Improve demand forecasting',
        'Optimize logistics routes',
        'Minimize supply chain risks'
      ]
    },
    {
      id: 'ai-voice-assistant-pro',
      name: 'AI Voice Assistant Pro',
      description: 'Voice-activated AI assistant with natural language processing, speech recognition, and multi-language support.',
      icon: <Mic className="w-8 h-8" />,
      price: '$159/month',
      originalPrice: '$319/month',
      features: [
        'Voice Recognition',
        'Natural Language Processing',
        'Multi-language Support',
        'Custom Commands',
        'Integration Hub',
        'Mobile App'
      ],
      category: 'Voice AI',
      color: 'from-violet-500 to-purple-500',
      link: '/ai-voice-assistant-pro',
      benefits: [
        'Hands-free operation',
        'Natural conversation flow',
        'Multi-language support',
        'Seamless integration'
      ]
    },
    {
      id: 'ai-image-recognition-pro',
      name: 'AI Image Recognition Pro',
      description: 'Computer vision solutions with object detection, facial recognition, and automated image analysis for various industries.',
      icon: <Image className="w-8 h-8" />,
      price: '$189/month',
      originalPrice: '$379/month',
      features: [
        'Object Detection',
        'Facial Recognition',
        'Image Classification',
        'OCR Technology',
        'Quality Control',
        'Automated Analysis'
      ],
      category: 'Computer Vision',
      color: 'from-cyan-500 to-blue-500',
      link: '/ai-image-recognition-pro',
      benefits: [
        'Automate visual inspections',
        'Improve accuracy by 95%',
        'Process images in real-time',
        'Reduce manual work'
      ]
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'Predictive analytics for equipment maintenance with failure prediction, optimization recommendations, and cost reduction.',
      icon: <Settings className="w-8 h-8" />,
      price: '$229/month',
      originalPrice: '$459/month',
      features: [
        'Failure Prediction',
        'Maintenance Scheduling',
        'Cost Optimization',
        'Performance Monitoring',
        'Alert System',
        'Reporting Dashboard'
      ],
      category: 'Predictive Analytics',
      color: 'from-orange-500 to-red-500',
      link: '/ai-predictive-maintenance',
      benefits: [
        'Reduce maintenance costs by 30%',
        'Prevent equipment failures',
        'Optimize maintenance schedules',
        'Extend equipment lifespan'
      ]
    },
    {
      id: 'ai-sentiment-analysis-pro',
      name: 'AI Sentiment Analysis Pro',
      description: 'Advanced sentiment analysis with social media monitoring, customer feedback analysis, and brand reputation tracking.',
      icon: <Search className="w-8 h-8" />,
      price: '$119/month',
      originalPrice: '$239/month',
      features: [
        'Social Media Monitoring',
        'Customer Feedback Analysis',
        'Brand Reputation Tracking',
        'Trend Detection',
        'Alert System',
        'Reporting Dashboard'
      ],
      category: 'Sentiment Analysis',
      color: 'from-pink-500 to-purple-500',
      link: '/ai-sentiment-analysis-pro',
      benefits: [
        'Monitor brand sentiment 24/7',
        'Identify trends early',
        'Improve customer satisfaction',
        'Protect brand reputation'
      ]
    },
    {
      id: 'ai-recommendation-engine',
      name: 'AI Recommendation Engine',
      description: 'Personalized recommendation system with machine learning algorithms for e-commerce, content, and product suggestions.',
      icon: <Star className="w-8 h-8" />,
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'Personalized Recommendations',
        'Machine Learning Algorithms',
        'Real-time Processing',
        'A/B Testing',
        'Performance Analytics',
        'Custom Models'
      ],
      category: 'Recommendation Systems',
      color: 'from-yellow-500 to-orange-500',
      link: '/ai-recommendation-engine',
      benefits: [
        'Increase conversion rates by 35%',
        'Improve customer engagement',
        'Personalize user experience',
        'Boost sales and revenue'
      ]
    },
    {
      id: 'ai-fraud-detection-pro',
      name: 'AI Fraud Detection Pro',
      description: 'Advanced fraud prevention with real-time detection, behavioral analysis, and automated risk assessment.',
      icon: <Shield className="w-8 h-8" />,
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Real-time Detection',
        'Behavioral Analysis',
        'Risk Assessment',
        'Pattern Recognition',
        'Alert System',
        'Compliance Reporting'
      ],
      category: 'Fraud Prevention',
      color: 'from-red-500 to-pink-500',
      link: '/ai-fraud-detection-pro',
      benefits: [
        'Detect fraud in real-time',
        'Reduce false positives by 80%',
        'Protect against new threats',
        'Ensure regulatory compliance'
      ]
    },
    {
      id: 'ai-language-translation',
      name: 'AI Language Translation',
      description: 'Real-time language translation with support for 100+ languages, context understanding, and industry-specific terminology.',
      icon: <Globe className="w-8 h-8" />,
      price: '$89/month',
      originalPrice: '$179/month',
      features: [
        '100+ Languages',
        'Real-time Translation',
        'Context Understanding',
        'Industry Terminology',
        'Voice Translation',
        'Document Translation'
      ],
      category: 'Language Processing',
      color: 'from-blue-500 to-indigo-500',
      link: '/ai-language-translation',
      benefits: [
        'Break language barriers',
        'Improve global communication',
        'Support international business',
        'Enhance customer experience'
      ]
    },
    {
      id: 'ai-chatbot-enterprise',
      name: 'AI Chatbot Enterprise',
      description: 'Enterprise-grade chatbot solution with advanced NLP, multi-channel support, and seamless human handoff.',
      icon: <Bot className="w-8 h-8" />,
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Advanced NLP',
        'Multi-channel Support',
        'Human Handoff',
        'Custom Training',
        'Analytics Dashboard',
        'Integration Hub'
      ],
      category: 'Conversational AI',
      color: 'from-green-500 to-teal-500',
      link: '/ai-chatbot-enterprise',
      benefits: [
        'Handle complex conversations',
        'Support multiple channels',
        'Seamless human escalation',
        'Improve customer satisfaction'
      ]
    },
    {
      id: 'ai-data-mining-pro',
      name: 'AI Data Mining Pro',
      description: 'Advanced data extraction and analysis with machine learning algorithms, pattern recognition, and automated insights.',
      icon: <Database className="w-8 h-8" />,
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Data Extraction',
        'Pattern Recognition',
        'Machine Learning',
        'Automated Insights',
        'Data Cleaning',
        'Visualization Tools'
      ],
      category: 'Data Mining',
      color: 'from-indigo-500 to-purple-500',
      link: '/ai-data-mining-pro',
      benefits: [
        'Extract valuable insights',
        'Identify hidden patterns',
        'Automate data analysis',
        'Improve decision making'
      ]
    },
    {
      id: 'ai-video-analysis',
      name: 'AI Video Analysis',
      description: 'Intelligent video processing with object detection, motion analysis, and automated content moderation.',
      icon: <Play className="w-8 h-8" />,
      price: '$219/month',
      originalPrice: '$439/month',
      features: [
        'Object Detection',
        'Motion Analysis',
        'Content Moderation',
        'Scene Recognition',
        'Real-time Processing',
        'Custom Models'
      ],
      category: 'Video AI',
      color: 'from-purple-500 to-pink-500',
      link: '/ai-video-analysis',
      benefits: [
        'Automate video analysis',
        'Detect objects and actions',
        'Moderate content automatically',
        'Process videos in real-time'
      ]
    },
    {
      id: 'ai-time-series-forecasting',
      name: 'AI Time Series Forecasting',
      description: 'Advanced time series analysis with predictive modeling, trend detection, and automated forecasting for business metrics.',
      icon: <Activity className="w-8 h-8" />,
      price: '$159/month',
      originalPrice: '$319/month',
      features: [
        'Predictive Modeling',
        'Trend Detection',
        'Seasonal Analysis',
        'Anomaly Detection',
        'Automated Forecasting',
        'Performance Metrics'
      ],
      category: 'Time Series Analysis',
      color: 'from-cyan-500 to-blue-500',
      link: '/ai-time-series-forecasting',
      benefits: [
        'Predict future trends',
        'Identify anomalies early',
        'Optimize business planning',
        'Improve forecasting accuracy'
      ]
    },
    {
      id: 'ai-nlp-text-analysis',
      name: 'AI NLP Text Analysis',
      description: 'Natural language processing with text classification, sentiment analysis, and automated document processing.',
      icon: <FileText className="w-8 h-8" />,
      price: '$129/month',
      originalPrice: '$259/month',
      features: [
        'Text Classification',
        'Sentiment Analysis',
        'Entity Recognition',
        'Document Processing',
        'Language Detection',
        'Custom Models'
      ],
      category: 'Natural Language Processing',
      color: 'from-teal-500 to-cyan-500',
      link: '/ai-nlp-text-analysis',
      benefits: [
        'Process text automatically',
        'Extract meaningful insights',
        'Classify documents',
        'Understand language context'
      ]
    }
  ];

  const categories = [
    'All',
    'Analytics & BI',
    'Cybersecurity',
    'Content Creation',
    'Customer Service',
    'Development Tools',
    'Business Intelligence',
    'Process Automation',
    'Data Analytics',
    'Marketing Automation',
    'Human Resources',
    'Financial Services',
    'Supply Chain',
    'Voice AI',
    'Computer Vision',
    'Predictive Analytics',
    'Sentiment Analysis',
    'Recommendation Systems',
    'Fraud Prevention',
    'Language Processing',
    'Conversational AI',
    'Data Mining',
    'Video AI',
    'Time Series Analysis',
    'Natural Language Processing'
  ];

  const stats = [
    { number: '25+', label: 'AI Services', icon: <Brain className="w-6 h-6" /> },
    { number: '95%', label: 'Accuracy Rate', icon: <Award className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Support', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of AI services including analytics, cybersecurity, content generation, automation, and more. Transform your business with cutting-edge artificial intelligence."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, analytics, cybersecurity, content generation, automation, chatbot, business intelligence, predictive analytics"
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
              <span className="text-cyan-400 text-sm font-medium">25+ AI Services Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI services. From intelligent analytics to 
              automated workflows, we provide cutting-edge artificial intelligence solutions for every industry.
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
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
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

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Complete AI Solutions Suite
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of AI services designed to address every aspect of modern business operations.
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
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Key Benefits */}
                    <div className="space-y-2 mb-6">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
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
                Ready to Implement AI Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your AI transformation journey today. Contact us for personalized recommendations 
                and implementation support for your business needs.
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
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}