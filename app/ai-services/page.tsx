'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Settings, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Calendar, 
  CheckSquare, 
  FileText,
  Mail,
  CreditCard,
  Search,
  Filter,
  Eye,
  MessageSquare,
  PieChart,
  Layers,
  Cpu,
  Wifi,
  Monitor,
  Headphones,
  Camera,
  Mic,
  Video,
  Palette,
  Image,
  Music,
  Download,
  Upload,
  Share,
  Heart,
  ThumbsUp,
  Award,
  Rocket,
  Lightbulb,
  Wrench,
  Tool,
  Activity,
  Bell,
  Bookmark,
  Flag,
  Gift,
  Home,
  MapPin,
  Phone,
  Send,
  ShoppingCart,
  Tag,
  User,
  UserPlus,
  Volume2,
  WifiOff,
  X,
  Y,
  ZoomIn,
  ZoomOut,
  Bot,
  CircuitBoard,
  Cpu2,
  Database2,
  Fingerprint,
  Key,
  Lock2,
  Network,
  Server,
  Terminal,
  Wifi2
} from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  rating: number;
  useCases: string[];
  benefits: string[];
  link: string;
}

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices: AIService[] = [
    // Machine Learning & Deep Learning
    {
      id: '1',
      icon: Brain,
      title: 'Custom Machine Learning Models',
      description: 'Build and deploy custom ML models tailored to your specific business needs with our advanced AI development services.',
      features: [
        'Custom model development and training',
        'Deep learning and neural network implementation',
        'Data preprocessing and feature engineering',
        'Model optimization and hyperparameter tuning',
        'Real-time inference and deployment',
        'Model monitoring and maintenance',
        'A/B testing and performance validation',
        'Integration with existing systems'
      ],
      price: 'Starting at $5,000/month',
      category: 'Machine Learning',
      popular: true,
      rating: 4.9,
      useCases: [
        'Predictive analytics for sales forecasting',
        'Customer churn prediction and retention',
        'Fraud detection and risk assessment',
        'Image recognition and computer vision',
        'Natural language processing applications'
      ],
      benefits: [
        'Improved decision making with data-driven insights',
        'Automated processes reducing manual work',
        'Enhanced customer experience through personalization',
        'Cost reduction through process optimization',
        'Competitive advantage through AI adoption'
      ],
      link: 'https://ziontechgroup.com/custom-ml-models'
    },
    {
      id: '2',
      icon: CircuitBoard,
      title: 'Deep Learning Solutions',
      description: 'Advanced deep learning implementations using TensorFlow, PyTorch, and custom architectures for complex AI applications.',
      features: [
        'CNN, RNN, LSTM, and Transformer models',
        'Computer vision and image processing',
        'Natural language understanding and generation',
        'Reinforcement learning implementations',
        'Transfer learning and fine-tuning',
        'Model compression and optimization',
        'Distributed training on cloud infrastructure',
        'Real-time inference optimization'
      ],
      price: 'Starting at $8,000/month',
      category: 'Machine Learning',
      popular: false,
      rating: 4.8,
      useCases: [
        'Autonomous vehicle perception systems',
        'Medical image analysis and diagnosis',
        'Voice assistants and speech recognition',
        'Recommendation systems and personalization',
        'Time series forecasting and analysis'
      ],
      benefits: [
        'State-of-the-art AI performance',
        'Scalable solutions for large datasets',
        'Reduced development time and costs',
        'Expert guidance and support',
        'Future-proof technology implementation'
      ],
      link: 'https://ziontechgroup.com/deep-learning-solutions'
    },

    // Natural Language Processing
    {
      id: '3',
      icon: MessageSquare,
      title: 'Natural Language Processing (NLP)',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
      features: [
        'Text classification and sentiment analysis',
        'Named entity recognition and extraction',
        'Language translation and localization',
        'Text summarization and generation',
        'Question answering systems',
        'Chatbot and conversational AI development',
        'Document processing and analysis',
        'Multilingual support and processing'
      ],
      price: 'Starting at $3,500/month',
      category: 'NLP',
      popular: true,
      rating: 4.8,
      useCases: [
        'Customer support automation',
        'Content moderation and filtering',
        'Legal document analysis',
        'Social media monitoring',
        'Email classification and routing'
      ],
      benefits: [
        'Automated text processing and analysis',
        'Improved customer service efficiency',
        'Better content understanding and insights',
        'Reduced manual review and processing',
        'Enhanced user experience through AI'
      ],
      link: 'https://ziontechgroup.com/nlp-solutions'
    },
    {
      id: '4',
      icon: Bot,
      title: 'Conversational AI & Chatbots',
      description: 'Intelligent chatbot development with advanced conversational capabilities, context awareness, and multi-platform deployment.',
      features: [
        'Context-aware conversation management',
        'Multi-platform deployment (web, mobile, social)',
        'Voice and text interaction support',
        'Integration with CRM and business systems',
        'Sentiment analysis and emotion detection',
        'Escalation to human agents',
        'Analytics and conversation insights',
        'Custom training and fine-tuning'
      ],
      price: 'Starting at $2,500/month',
      category: 'NLP',
      popular: true,
      rating: 4.7,
      useCases: [
        'Customer service automation',
        'Lead qualification and nurturing',
        'Internal employee support',
        'E-commerce product recommendations',
        'Healthcare patient assistance'
      ],
      benefits: [
        '24/7 customer support availability',
        'Consistent and accurate responses',
        'Reduced support costs and workload',
        'Improved customer satisfaction',
        'Scalable support operations'
      ],
      link: 'https://ziontechgroup.com/chatbot-development'
    },

    // Computer Vision
    {
      id: '5',
      icon: Camera,
      title: 'Computer Vision Solutions',
      description: 'Advanced computer vision applications including object detection, facial recognition, image analysis, and video processing.',
      features: [
        'Object detection and classification',
        'Facial recognition and analysis',
        'OCR and text extraction from images',
        'Image quality assessment and enhancement',
        'Video analysis and processing',
        'Real-time image processing',
        'Custom model training and deployment',
        'Integration with existing systems'
      ],
      price: 'Starting at $4,500/month',
      category: 'Computer Vision',
      popular: true,
      rating: 4.9,
      useCases: [
        'Quality control in manufacturing',
        'Security and surveillance systems',
        'Medical image analysis',
        'Retail inventory management',
        'Autonomous vehicle perception'
      ],
      benefits: [
        'Automated visual inspection and analysis',
        'Improved accuracy and consistency',
        'Reduced human error and fatigue',
        'Real-time processing capabilities',
        'Cost-effective automation solutions'
      ],
      link: 'https://ziontechgroup.com/computer-vision'
    },
    {
      id: '6',
      icon: Eye,
      title: 'Facial Recognition & Biometrics',
      description: 'Secure facial recognition systems for authentication, access control, and identity verification with privacy compliance.',
      features: [
        'High-accuracy facial recognition',
        'Liveness detection and anti-spoofing',
        'Age and emotion recognition',
        'Privacy-compliant data handling',
        'Real-time processing and matching',
        'Integration with access control systems',
        'Multi-factor authentication support',
        'Audit trails and compliance reporting'
      ],
      price: 'Starting at $6,000/month',
      category: 'Computer Vision',
      popular: false,
      rating: 4.8,
      useCases: [
        'Employee access control',
        'Customer identity verification',
        'Security and surveillance',
        'Mobile app authentication',
        'Event and venue management'
      ],
      benefits: [
        'Enhanced security and access control',
        'Improved user experience',
        'Reduced fraud and identity theft',
        'Compliance with privacy regulations',
        'Scalable authentication solutions'
      ],
      link: 'https://ziontechgroup.com/facial-recognition'
    },

    // Predictive Analytics
    {
      id: '7',
      icon: TrendingUp,
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced predictive modeling for business forecasting, demand prediction, and risk assessment using machine learning.',
      features: [
        'Time series forecasting and analysis',
        'Demand prediction and inventory optimization',
        'Risk assessment and fraud detection',
        'Customer lifetime value prediction',
        'Market trend analysis and forecasting',
        'Anomaly detection and alerting',
        'Real-time prediction and scoring',
        'Custom model development and training'
      ],
      price: 'Starting at $4,000/month',
      category: 'Predictive Analytics',
      popular: true,
      rating: 4.8,
      useCases: [
        'Sales forecasting and planning',
        'Inventory management optimization',
        'Financial risk assessment',
        'Customer churn prediction',
        'Supply chain optimization'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved accuracy in forecasting',
        'Reduced inventory costs and waste',
        'Better risk management',
        'Competitive advantage through insights'
      ],
      link: 'https://ziontechgroup.com/predictive-analytics'
    },
    {
      id: '8',
      icon: BarChart,
      title: 'Business Intelligence & Analytics',
      description: 'AI-powered business intelligence solutions with automated insights, reporting, and data visualization.',
      features: [
        'Automated insight generation',
        'Interactive dashboards and visualizations',
        'Natural language query interface',
        'Real-time data processing and analysis',
        'Predictive modeling and forecasting',
        'Anomaly detection and alerting',
        'Custom report generation',
        'Integration with multiple data sources'
      ],
      price: 'Starting at $3,000/month',
      category: 'Predictive Analytics',
      popular: false,
      rating: 4.7,
      useCases: [
        'Executive dashboards and reporting',
        'Sales performance analysis',
        'Marketing campaign optimization',
        'Operational efficiency monitoring',
        'Financial analysis and reporting'
      ],
      benefits: [
        'Automated report generation',
        'Real-time insights and alerts',
        'Improved data accessibility',
        'Better decision making support',
        'Reduced manual analysis time'
      ],
      link: 'https://ziontechgroup.com/business-intelligence'
    },

    // AI Automation
    {
      id: '9',
      icon: Zap,
      title: 'AI Process Automation (RPA)',
      description: 'Intelligent process automation using AI to automate complex business processes and workflows.',
      features: [
        'Intelligent document processing',
        'Workflow automation and orchestration',
        'Decision-making automation',
        'Exception handling and escalation',
        'Integration with existing systems',
        'Process monitoring and optimization',
        'Compliance and audit trails',
        'Scalable automation solutions'
      ],
      price: 'Starting at $5,500/month',
      category: 'Automation',
      popular: true,
      rating: 4.9,
      useCases: [
        'Invoice processing and approval',
        'Customer onboarding automation',
        'Data entry and validation',
        'Report generation and distribution',
        'Compliance monitoring and reporting'
      ],
      benefits: [
        'Significant cost reduction',
        'Improved accuracy and consistency',
        'Faster process execution',
        'Reduced human error',
        'Scalable automation solutions'
      ],
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      id: '10',
      icon: Settings,
      title: 'AI Workflow Optimization',
      description: 'Optimize existing workflows and processes using AI to improve efficiency, reduce costs, and enhance performance.',
      features: [
        'Process analysis and optimization',
        'Workflow redesign and automation',
        'Performance monitoring and analytics',
        'Bottleneck identification and resolution',
        'Resource allocation optimization',
        'Quality improvement recommendations',
        'Change management and training',
        'Continuous improvement support'
      ],
      price: 'Starting at $4,500/month',
      category: 'Automation',
      popular: false,
      rating: 4.7,
      useCases: [
        'Manufacturing process optimization',
        'Customer service workflow improvement',
        'Supply chain optimization',
        'Financial process automation',
        'HR process streamlining'
      ],
      benefits: [
        'Improved process efficiency',
        'Reduced operational costs',
        'Better resource utilization',
        'Enhanced quality and consistency',
        'Data-driven process improvements'
      ],
      link: 'https://ziontechgroup.com/workflow-optimization'
    },

    // AI Consulting & Strategy
    {
      id: '11',
      icon: Lightbulb,
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development, technology assessment, and implementation planning for your organization.',
      features: [
        'AI readiness assessment and audit',
        'Strategic AI roadmap development',
        'Technology evaluation and selection',
        'Implementation planning and project management',
        'Change management and training',
        'ROI analysis and business case development',
        'Vendor evaluation and selection',
        'Ongoing advisory and support'
      ],
      price: 'Starting at $2,000/month',
      category: 'Consulting',
      popular: true,
      rating: 4.8,
      useCases: [
        'AI transformation planning',
        'Technology modernization',
        'Digital transformation initiatives',
        'Competitive advantage development',
        'Innovation and R&D planning'
      ],
      benefits: [
        'Clear AI strategy and roadmap',
        'Reduced implementation risks',
        'Faster time to value',
        'Expert guidance and support',
        'Maximized ROI on AI investments'
      ],
      link: 'https://ziontechgroup.com/ai-consulting'
    },
    {
      id: '12',
      icon: Users,
      title: 'AI Training & Education',
      description: 'Comprehensive AI training programs for your team, from basic concepts to advanced implementation techniques.',
      features: [
        'Customized training curriculum',
        'Hands-on workshops and labs',
        'Certification programs',
        'Executive AI education',
        'Technical implementation training',
        'Change management support',
        'Ongoing learning and development',
        'Mentoring and coaching programs'
      ],
      price: 'Starting at $1,500/month',
      category: 'Consulting',
      popular: false,
      rating: 4.7,
      useCases: [
        'Team skill development',
        'AI literacy improvement',
        'Implementation readiness',
        'Leadership education',
        'Continuous learning programs'
      ],
      benefits: [
        'Improved team capabilities',
        'Faster AI adoption',
        'Reduced implementation risks',
        'Better project outcomes',
        'Competitive advantage through skills'
      ],
      link: 'https://ziontechgroup.com/ai-training'
    },

    // AI Infrastructure & Cloud
    {
      id: '13',
      icon: Cloud,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure on cloud platforms with GPU acceleration, model serving, and monitoring capabilities.',
      features: [
        'GPU-accelerated computing instances',
        'Model training and inference infrastructure',
        'Auto-scaling and load balancing',
        'Model versioning and deployment',
        'Monitoring and logging systems',
        'Security and compliance features',
        'Cost optimization and management',
        'Multi-cloud and hybrid deployments'
      ],
      price: 'Starting at $3,500/month',
      category: 'Infrastructure',
      popular: true,
      rating: 4.8,
      useCases: [
        'Large-scale model training',
        'Real-time inference services',
        'Data processing and analytics',
        'MLOps and model management',
        'AI application hosting'
      ],
      benefits: [
        'Scalable and flexible infrastructure',
        'Reduced operational overhead',
        'High availability and reliability',
        'Cost-effective resource utilization',
        'Expert infrastructure management'
      ],
      link: 'https://ziontechgroup.com/ai-infrastructure'
    },
    {
      id: '14',
      icon: Server,
      title: 'AI Model Deployment & MLOps',
      description: 'End-to-end MLOps solutions for model deployment, monitoring, and management in production environments.',
      features: [
        'Model deployment and serving',
        'A/B testing and canary deployments',
        'Model monitoring and drift detection',
        'Automated retraining pipelines',
        'Version control and model registry',
        'Performance monitoring and alerting',
        'Security and compliance features',
        'Integration with CI/CD pipelines'
      ],
      price: 'Starting at $4,000/month',
      category: 'Infrastructure',
      popular: false,
      rating: 4.7,
      useCases: [
        'Production model management',
        'Automated model updates',
        'Performance monitoring',
        'Model governance and compliance',
        'Continuous integration and deployment'
      ],
      benefits: [
        'Reliable model deployment',
        'Automated model management',
        'Improved model performance',
        'Reduced operational risks',
        'Faster time to production'
      ],
      link: 'https://ziontechgroup.com/mlops'
    },

    // AI Security & Ethics
    {
      id: '15',
      icon: Shield,
      title: 'AI Security & Privacy',
      description: 'Comprehensive AI security solutions including model protection, data privacy, and ethical AI implementation.',
      features: [
        'Model security and protection',
        'Data privacy and anonymization',
        'Adversarial attack prevention',
        'Bias detection and mitigation',
        'Ethical AI guidelines and compliance',
        'Audit trails and monitoring',
        'Regulatory compliance support',
        'Security risk assessment'
      ],
      price: 'Starting at $3,000/month',
      category: 'Security',
      popular: false,
      rating: 4.8,
      useCases: [
        'Model protection and security',
        'Privacy-preserving AI',
        'Bias detection and fairness',
        'Regulatory compliance',
        'Ethical AI implementation'
      ],
      benefits: [
        'Enhanced AI security',
        'Privacy compliance',
        'Reduced bias and discrimination',
        'Regulatory compliance',
        'Ethical AI practices'
      ],
      link: 'https://ziontechgroup.com/ai-security'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services' },
    { id: 'Machine Learning', name: 'Machine Learning' },
    { id: 'NLP', name: 'Natural Language Processing' },
    { id: 'Computer Vision', name: 'Computer Vision' },
    { id: 'Predictive Analytics', name: 'Predictive Analytics' },
    { id: 'Automation', name: 'AI Automation' },
    { id: 'Consulting', name: 'AI Consulting' },
    { id: 'Infrastructure', name: 'AI Infrastructure' },
    { id: 'Security', name: 'AI Security' }
  ];

  const stats = [
    { number: '500+', label: 'AI Projects Delivered' },
    { number: '99.9%', label: 'Model Accuracy' },
    { number: '24/7', label: 'AI Support' },
    { number: '50+', label: 'AI Experts' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : aiServices.filter(service => 
        service.category === selectedCategory && (
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>AI Services | Zion Tech Group - Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and predictive analytics. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, predictive analytics, AI consulting, artificial intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Services">
            <span className="text-cyan-400 neon-text">AI</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive <span className="text-cyan-400 font-bold">artificial intelligence solutions</span>. 
            From machine learning to computer vision, we deliver cutting-edge AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              aria-label="Call us at (302) 464-0950">
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              aria-label="Email us at kleber@ziontechgroup.com">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white cyber-glow'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white neon-text">
              {selectedCategory === 'all' ? 'All AI Services' : `${selectedCategory} Services`}
            </h2>
            <span className="text-cyan-400 font-semibold">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`cyber-card group hover:scale-105 transition-all duration-300 relative ${
                service.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-slate-700/50'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          {service.rating}
                        </div>
                        <div className="text-cyan-400 font-medium">
                          {service.category}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.slice(0, 3).map((useCase, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-800/50 text-gray-300 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300">Contact for custom pricing and implementation</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      className="flex-1 cyber-button text-center py-3 px-6 inline-flex items-center justify-center group-hover:scale-105 transition-transform"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/contact"
                      className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">No AI services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search terms or category filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="cyber-button"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you identify the best opportunities for AI implementation in your business. 
              Get a free consultation and discover how AI can drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Get Free AI Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-2">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
              <p className="text-gray-300 text-sm">
                ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;