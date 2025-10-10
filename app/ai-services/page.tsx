'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone,
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Database, 
  Users, 
  Settings,
  Cpu,
  Bot,
  Sparkles,
  Layers,
  Workflow,
  BarChart3,
  Smartphone,
  Cloud,
  Lock,
  Code,
  Palette,
  Headphones,
  Mail,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
const AIServicesPagePage: React.FC = () => {
const features = [
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that provides 24/7 customer support and engagement.',
      icon: Bot,
      category: 'Customer Service',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'Integration with CRM systems',
        'Real-time learning capabilities'
      ],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions']
    },
    {
      id: 2,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing.',
      icon: FileText,
      category: 'Content',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing campaigns',
        'SEO-optimized content',
        'Brand voice customization'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms.',
      icon: BarChart3,
      category: 'Analytics',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models'
      ],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization']
    },
    {
      id: 4,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation.',
      icon: Eye,
      category: 'Computer Vision',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing'
      ],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction']
    },
    {
      id: 5,
      title: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions.',
      icon: Mic,
      category: 'Voice AI',
      features: [
        'Speech-to-text conversion',
        'Voice synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support'
      ],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['Improved accessibility', 'Voice automation', 'Call quality insights', 'Multi-language support']
    },
    {
      id: 6,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows.',
      icon: Workflow,
      category: 'Automation',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring'
      ],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation']
    },
    {
      id: 7,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security monitoring using AI algorithms.',
      icon: Shield,
      category: 'Security',
      features: [
        'Threat detection',
        'Behavioral analysis',
        'Incident response',
        'Vulnerability assessment',
        'Compliance monitoring'
      ],
      price: 'Starting at $499/month',
      marketPrice: '$800-4000/month',
      benefits: ['Proactive security', 'Reduced false positives', 'Faster incident response', 'Compliance assurance']
    },
    {
      id: 8,
      title: 'AI Mobile Applications',
      description: 'Custom mobile apps with integrated AI features for iOS and Android.',
      icon: Smartphone,
      category: 'Mobile',
      features: [
        'AI-powered features',
        'Cross-platform development',
        'Offline AI capabilities',
        'Real-time processing',
        'Custom integrations'
      ],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Enhanced user experience', 'Intelligent features', 'Competitive advantage', 'Future-proof solutions']
    },
    {
      id: 9,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure and model deployment on cloud platforms.',
      icon: Cloud,
      category: 'Infrastructure',
      features: [
        'Model deployment',
        'Auto-scaling',
        'GPU optimization',
        'Data pipeline management',
        'Monitoring and logging'
      ],
      price: 'Starting at $699/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Scalable infrastructure', 'Cost optimization', 'High availability', 'Easy deployment']
    },
    {
      id: 10,
      title: 'AI Design Assistant',
      description: 'AI-powered design tools for graphics, UI/UX, and creative content generation.',
      icon: Palette,
      category: 'Design',
      features: [
        'Automated design generation',
        'Brand consistency',
        'A/B testing optimization',
        'Color and layout suggestions',
        'Template customization'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1200/month',
      benefits: ['Faster design process', 'Consistent branding', 'Creative inspiration', 'Cost-effective solutions']
    }
  ];
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];
  return (
    <React.Fragment>
      <Helmet></Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." /></meta>
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, data analytics, computer vision, AI automation" />
      </meta>
      <Navigation /></Navigation>
      
      <main className="pt-20">
  ];

  return (</main>
    <>
      <Helmet></Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered services for modern businesses." /></meta>
        <meta name="keywords" content="AI services, artificial intelligence, automation, AI solutions, intelligent automation" />
      </meta>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}</div>
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Services;
  </
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From chatbots to computer vision, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started;
  </
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo;
  </
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features;
  </
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results;
  </
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (</div>
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                </feature>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="flex flex-col md:flex-row gap-4 mb-8"></div>
              <div className="relative flex-1"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /></Search>
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </input>
              <div className="relative"></div>
                <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /></Settings>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (</select>
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (</div>
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <service.icon className="w-8 h-8 text-white" />
                  </service>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4"></div>
                    <span className="text-sm text-gray-400">Category: </span>
                    <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (</ul>
                      <li key={index} className="flex items-center text-sm text-gray-400"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </CheckCircle>
                    ))}
                  </ul>
                  <div className="space-y-3 mb-6"></div>
                    <div className="flex items-center justify-between"></div>
                      <span className="text-purple-400 font-semibold">Our Price:</span>
                      <span className="text-white font-bold">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between"></div>
                      <span className="text-gray-400 text-sm">Market Price:</span>
                      <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between"></div>
                    <Link 
                      to="/contact"
                      className="flex items-center text-white hover:text-purple-400 transition-colors"
                    >
                      Learn More</Link>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </ArrowRight>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency;
  </
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                  <TrendingUp className="w-8 h-8 text-white" />
                </TrendingUp>
                <h3 className="text-xl font-bold text-white mb-4">Increase Efficiency by 60%</h3>
                <p className="text-gray-300">Our AI solutions automate repetitive tasks and optimize workflows, delivering measurable efficiency gains.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                  <DollarSign className="w-8 h-8 text-white" />
                </DollarSign>
                <h3 className="text-xl font-bold text-white mb-4">Reduce Costs by 40%</h3>
                <p className="text-gray-300">Automation and AI-driven optimization significantly reduce operational costs and resource requirements.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                  <Brain className="w-8 h-8 text-white" />
                </Brain>
                <h3 className="text-xl font-bold text-white mb-4">Enhanced Decision Making</h3>
                <p className="text-gray-300">AI-powered insights and predictive analytics enable data-driven decision making at scale.</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our AI experts to discuss your requirements and get a customized solution that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
  </
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More;
  </
                Ready to Get Started?
              </h2>
              <p className;

export default AIServicesPagePage
  </button>
  </p>
  </p>
  </p>
  </h2>
  </button>
  </button>
  </h1>

const AIServicesPage: React.FC = () => {
const features = [
    {
      icon: Brain,
      title: 'Machine Learning & Deep Learning',
      description: 'Advanced ML algorithms and neural networks for complex pattern recognition and predictive modeling.',
      benefits: ['Custom model development', 'Deep learning frameworks', 'Predictive analytics', 'Automated model training', 'Real-time inference', 'Model optimization', 'A/B testing for models', 'Continuous learning systems']
    },
    {
      icon: BarChart,
      title: 'AI-Powered Business Intelligence',
      description: 'Intelligent analytics platform that transforms raw data into actionable business insights.',
      benefits: ['Automated data analysis', 'Predictive forecasting', 'Anomaly detection', 'Custom dashboards', 'Natural language queries', 'Automated reporting', 'Data visualization', 'ROI optimization']
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text understanding, generation, and human-AI interaction.',
      benefits: ['Sentiment analysis', 'Text classification', 'Language translation', 'Chatbot development', 'Document processing', 'Content generation', 'Voice recognition', 'Conversational AI']
    },
    {
      icon: Eye,
      title: 'Computer Vision & Image Processing',
      description: 'AI-powered visual recognition and image analysis for various business applications.',
      benefits: ['Object detection', 'Facial recognition', 'OCR and document scanning', 'Quality inspection', 'Medical imaging', 'Autonomous vehicles', 'Augmented reality', 'Video analytics']
    },
    {
      icon: Zap,
      title: 'AI Automation & RPA',
      description: 'Intelligent process automation that mimics human actions to streamline business operations.',
      benefits: ['Workflow automation', 'Document processing', 'Data extraction', 'Email automation', 'Calendar management', 'Invoice processing', 'Customer onboarding', 'Compliance monitoring']
    },
    {
      icon: Shield,
      title: 'AI Security & Fraud Detection',
      description: 'Advanced AI security solutions for threat detection, fraud prevention, and risk management.',
      benefits: ['Real-time threat detection', 'Fraud pattern recognition', 'Behavioral analysis', 'Risk assessment', 'Security monitoring', 'Compliance automation', 'Incident response', 'Threat intelligence']
    }
  ]
  ;

const services = [
    {
      icon: Zap,
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to identify opportunities and plan your AI transformation journey.',
      price: 'Starting at $5,000/month',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Vendor evaluation', 'Implementation planning']
    },
    {
      icon: Shield,
      title: 'AI Solution Development',
      description: 'End-to-end AI solution development with our expert team of AI engineers and data scientists.',
      price: 'Starting at $15,000/project',
      features: ['Custom AI model development', 'Data pipeline creation', 'API development', 'Integration services', 'Testing and validation']
    },
    {
      icon: TrendingUp,
      title: 'AI Model Optimization',
      description: 'Optimize your existing AI systems for better performance, accuracy, and efficiency.',
      price: 'Starting at $3,000/month',
      features: ['Performance analysis', 'Model fine-tuning', 'Hyperparameter optimization', 'A/B testing', 'Continuous monitoring']
    },
    {
      icon: Target,
      title: 'AI Training & Education',
      description: 'Comprehensive training programs to upskill your team in AI technologies and best practices.',
      price: 'Starting at $2,500/session',
      features: ['Custom training programs', 'Hands-on workshops', 'Certification courses', 'Ongoing support', 'Team mentoring']
    },
    {
      icon: Brain,
      title: 'AI Data Services',
      description: 'Complete data preparation, cleaning, and annotation services for AI model training.',
      price: 'Starting at $1,500/month',
      features: ['Data collection', 'Data cleaning', 'Data annotation', 'Quality assurance', 'Data governance']
    },
    {
      icon: BarChart,
      title: 'AI Analytics & Insights',
      description: 'Advanced AI-powered analytics to extract meaningful insights from your business data.',
      price: 'Starting at $4,000/month',
      features: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Custom dashboards', 'Automated reporting']
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot Development',
      description: 'Intelligent chatbot solutions for customer service, sales, and internal operations.',
      price: 'Starting at $8,000/project',
      features: ['Natural language processing', 'Multi-channel support', 'Integration capabilities', 'Analytics dashboard', 'Continuous learning']
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Custom computer vision applications for image recognition, quality control, and automation.',
      price: 'Starting at $12,000/project',
      features: ['Object detection', 'Image classification', 'OCR solutions', 'Quality inspection', 'Real-time processing']
    }
  ];

  const benefits = [
    'Increased operational efficiency',
    'Better decision making with data insights',
    'Automated repetitive tasks',
    'Enhanced customer experience',
    'Cost reduction through automation',
    'Scalable AI solutions',
    '24/7 AI-powered support',
    'Continuous learning and improvement'
  ];
const stats = [
    { icon: Brain, value: '95%', label: 'Accuracy Rate' },
    { icon: Zap, value: '10x', label: 'Faster Processing' },
    { icon: Shield, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '300%', label: 'Efficiency Gain' }
  ];
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and AI consulting. Transform your business with our AI expertise." /></meta>
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI consulting, artificial intelligence, Zion Tech Group" />
      </meta>
      <Navigation />
      {/* Hero Section */}</Navigation>
      <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-4"></section>
        <div className="max-w-6xl mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="flex justify-center mb-4"></div>
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </stat>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6"></div>
                  <feature.icon className="w-8 h-8 text-white" />
                </feature>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end AI solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"></div>
                  <service.icon className="w-8 h-8 text-white" />
                </service>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {service.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven AI solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (</div>
              <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4"></div>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /></CheckCircle>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Footer>
  );
};

export default AIServicesPage;
      </div>
      <Footer />
    </>
  );
};

export default AIServicesPage;</React.Fragment>
