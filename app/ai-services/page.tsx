import React from 'react';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Target, Layers, PieChart, LineChart, Activity, Sparkles, Atom, Cpu as CpuIcon } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      category: 'AI Automation & Workflow',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      services: [
        {
          name: 'AI Workflow Automation Platform',
          description: 'End-to-end business process automation with intelligent decision-making and self-optimization',
          features: ['Visual Workflow Builder', 'Smart Process Optimization', 'Error Detection & Correction', 'Cost Reduction', 'Scalable Architecture'],
          pricing: 'Starting at $5,000/month',
          trial: '30-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-workflow-automation',
          popular: true,
          marketPrice: '$8,000-15,000/month',
          capabilities: ['Process 10,000+ workflows daily', '99.9% automation accuracy', 'Real-time optimization', 'Multi-system integration']
        },
        {
          name: 'AI Customer Support Suite',
          description: 'Advanced 24/7 customer support with natural language processing, sentiment analysis, and human handoff',
          features: ['Multi-language NLP', 'Sentiment Analysis', 'Escalation Management', 'Knowledge Base Integration', 'Performance Analytics'],
          pricing: 'Starting at $3,000/month',
          trial: '14-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-customer-support',
          popular: true,
          marketPrice: '$5,000-12,000/month',
          capabilities: ['95% query resolution rate', '50+ language support', 'Real-time sentiment tracking', 'Seamless human escalation']
        },
        {
          name: 'AI Sales Automation Engine',
          description: 'Intelligent sales process automation with lead scoring, automated follow-ups, and predictive analytics',
          features: ['AI Lead Scoring', 'Automated Outreach', 'Sales Forecasting', 'CRM Integration', 'Revenue Optimization'],
          pricing: 'Starting at $4,000/month',
          trial: '14-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-sales-automation',
          popular: true,
          marketPrice: '$6,000-15,000/month',
          capabilities: ['300% increase in conversion rates', 'Automated campaign optimization', 'Real-time performance tracking', 'Predictive customer behavior']
        },
        {
          name: 'AI Document Processing System',
          description: 'Intelligent document analysis, extraction, and processing with OCR and natural language understanding',
          features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Integration', 'Compliance Tracking'],
          pricing: 'Starting at $2,500/month',
          trial: '7-day free trial',
          roi: '180-350% ROI',
          link: 'https://ziontechgroup.com/ai-document-processing',
          popular: false,
          marketPrice: '$4,000-10,000/month',
          capabilities: ['99.5% accuracy in text extraction', 'Process 10,000+ documents/hour', '50+ file formats supported', 'Automated compliance checking']
        }
      ]
    },
    {
      category: 'AI Analytics & Business Intelligence',
      icon: BarChart3,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'AI Data Analytics Platform',
          description: 'Advanced analytics and insights with machine learning-powered predictions and real-time dashboards',
          features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization', 'Automated Insights'],
          pricing: 'Starting at $6,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-data-analytics',
          popular: true,
          marketPrice: '$10,000-25,000/month',
          capabilities: ['Process 10TB+ data daily', '99.9% accuracy in predictions', 'Real-time insights delivery', 'Custom ML model training']
        },
        {
          name: 'AI Business Intelligence Suite',
          description: 'Transform raw data into actionable business insights with AI-powered analysis and recommendations',
          features: ['KPI Tracking', 'Trend Analysis', 'Performance Metrics', 'Strategic Planning', 'ROI Measurement'],
          pricing: 'Starting at $7,000/month',
          trial: '14-day free trial',
          roi: '400-700% ROI',
          link: 'https://ziontechgroup.com/ai-business-intelligence',
          popular: true,
          marketPrice: '$12,000-30,000/month',
          capabilities: ['Natural language queries', 'Automated report generation', 'Real-time dashboards', 'Custom KPI tracking']
        },
        {
          name: 'AI Predictive Analytics Engine',
          description: 'Forecast future trends, outcomes, and opportunities with advanced machine learning models',
          features: ['Demand Forecasting', 'Risk Assessment', 'Market Analysis', 'Scenario Planning', 'Anomaly Detection'],
          pricing: 'Starting at $8,000/month',
          trial: '14-day free trial',
          roi: '500-800% ROI',
          link: 'https://ziontechgroup.com/ai-predictive-analytics',
          popular: true,
          marketPrice: '$15,000-35,000/month',
          capabilities: ['99.8% forecast accuracy', 'Real-time risk assessment', 'Multi-scenario modeling', 'Automated anomaly detection']
        },
        {
          name: 'AI Real-time Monitoring System',
          description: 'Continuous monitoring and alerting system with AI-powered anomaly detection and automated responses',
          features: ['Real-time Monitoring', 'Anomaly Detection', 'Automated Alerts', 'Performance Tracking', 'Predictive Maintenance'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-450% ROI',
          link: 'https://ziontechgroup.com/ai-monitoring',
          popular: false,
          marketPrice: '$7,000-18,000/month',
          capabilities: ['24/7 real-time monitoring', '99.9% anomaly detection rate', 'Automated incident response', 'Predictive maintenance alerts']
        }
      ]
    },
    {
      category: 'AI Content & Marketing Solutions',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Content Generation Studio',
          description: 'Complete content creation suite with AI writing, editing, optimization, and multi-format support',
          features: ['AI Writing Assistant', 'Content Optimization', 'SEO Analysis', 'Brand Voice Training', 'Multi-format Support'],
          pricing: 'Starting at $2,000/month',
          trial: '7-day free trial',
          roi: '100-300% ROI',
          link: 'https://ziontechgroup.com/ai-content-generation',
          popular: true,
          marketPrice: '$3,500-8,000/month',
          capabilities: ['Generate 1000+ articles daily', '40+ languages supported', 'SEO score optimization', 'Brand consistency maintenance']
        },
        {
          name: 'AI Email Marketing Platform',
          description: 'Intelligent email campaigns with personalization, A/B testing, and performance optimization',
          features: ['Smart Personalization', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'List Segmentation'],
          pricing: 'Starting at $3,500/month',
          trial: '7-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-email-marketing',
          popular: true,
          marketPrice: '$5,000-12,000/month',
          capabilities: ['300% increase in open rates', 'Automated campaign optimization', 'Real-time performance tracking', 'Predictive send time optimization']
        },
        {
          name: 'AI SEO Optimization Suite',
          description: 'Comprehensive SEO analysis, keyword research, and content optimization with AI recommendations',
          features: ['Keyword Research', 'Content Analysis', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-seo-optimizer',
          popular: true,
          marketPrice: '$7,000-15,000/month',
          capabilities: ['200% increase in organic traffic', 'Automated keyword research', 'Real-time rank tracking', 'Competitor analysis automation']
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media content creation, scheduling, and engagement optimization across platforms',
          features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics', 'Hashtag Optimization', 'Multi-platform Management'],
          pricing: 'Starting at $1,500/month',
          trial: '7-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-social-media-manager',
          popular: false,
          marketPrice: '$2,500-6,000/month',
          capabilities: ['150% increase in engagement', 'Automated content scheduling', 'Real-time performance analytics', 'Multi-platform optimization']
        }
      ]
    },
    {
      category: 'AI Industry-Specific Solutions',
      icon: Target,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Healthcare Solutions',
          description: 'Advanced AI-powered healthcare solutions including medical imaging, diagnosis support, and patient care',
          features: ['Medical Imaging Analysis', 'Diagnosis Support', 'Patient Monitoring', 'Drug Discovery', 'Clinical Decision Support'],
          pricing: 'Starting at $15,000/month',
          trial: '30-day free trial',
          roi: '400-800% ROI',
          link: 'https://ziontechgroup.com/ai-healthcare',
          popular: true,
          marketPrice: '$25,000-60,000/month',
          capabilities: ['95% diagnostic accuracy', 'HIPAA compliant processing', 'Real-time medical imaging', 'Drug interaction analysis']
        },
        {
          name: 'AI Fintech Platform',
          description: 'Comprehensive financial technology solutions with fraud detection, risk assessment, and algorithmic trading',
          features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Regulatory Compliance'],
          pricing: 'Starting at $12,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-fintech',
          popular: true,
          marketPrice: '$20,000-50,000/month',
          capabilities: ['99.9% fraud detection accuracy', 'Real-time risk assessment', 'Regulatory compliance automation', 'Advanced predictive modeling']
        },
        {
          name: 'AI E-commerce Optimization',
          description: 'E-commerce platform optimization with personalization, inventory management, and customer insights',
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'Conversion Optimization'],
          pricing: 'Starting at $5,000/month',
          trial: '14-day free trial',
          roi: '200-500% ROI',
          link: 'https://ziontechgroup.com/ai-ecommerce-solutions',
          popular: true,
          marketPrice: '$8,000-20,000/month',
          capabilities: ['250% increase in conversion rates', 'Automated price optimization', 'Real-time inventory management', 'Predictive customer behavior']
        },
        {
          name: 'AI Manufacturing Intelligence',
          description: 'Smart manufacturing solutions with predictive maintenance, quality control, and process optimization',
          features: ['Predictive Maintenance', 'Quality Control', 'Process Optimization', 'Supply Chain Management', 'Energy Efficiency'],
          pricing: 'Starting at $10,000/month',
          trial: '14-day free trial',
          roi: '350-650% ROI',
          link: 'https://ziontechgroup.com/ai-manufacturing',
          popular: false,
          marketPrice: '$18,000-40,000/month',
          capabilities: ['30% reduction in downtime', '99.5% quality control accuracy', 'Real-time process optimization', 'Predictive maintenance alerts']
        }
      ]
    },
    {
      category: 'AI Advanced Technologies',
      icon: Cpu,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'AI Computer Vision Platform',
          description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis',
          features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Visual Search', 'Quality Inspection'],
          pricing: 'Starting at $8,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-computer-vision',
          popular: true,
          marketPrice: '$12,000-30,000/month',
          capabilities: ['99.8% accuracy in object detection', 'Real-time video processing', 'Advanced facial recognition', 'Content safety monitoring']
        },
        {
          name: 'AI Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI',
          features: ['Text Analysis', 'Language Understanding', 'Sentiment Analysis', 'Translation', 'Conversational AI'],
          pricing: 'Starting at $6,500/month',
          trial: '14-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-nlp',
          popular: true,
          marketPrice: '$10,000-25,000/month',
          capabilities: ['99.2% language understanding accuracy', '50+ languages supported', 'Real-time text processing', 'Natural conversation flow']
        },
        {
          name: 'AI Machine Learning Platform',
          description: 'Complete ML platform with model training, deployment, and management capabilities',
          features: ['Model Training', 'Model Deployment', 'Model Management', 'AutoML', 'MLOps'],
          pricing: 'Starting at $9,000/month',
          trial: '14-day free trial',
          roi: '400-700% ROI',
          link: 'https://ziontechgroup.com/ai-ml-platform',
          popular: true,
          marketPrice: '$15,000-35,000/month',
          capabilities: ['Automated model training', 'Real-time model deployment', 'Model performance monitoring', 'AutoML optimization']
        },
        {
          name: 'AI Quantum Computing Solutions',
          description: 'Next-generation quantum computing solutions for complex optimization and simulation problems',
          features: ['Quantum Optimization', 'Quantum Simulation', 'Quantum Machine Learning', 'Quantum Security', 'Hybrid Computing'],
          pricing: 'Starting at $20,000/month',
          trial: '30-day free trial',
          roi: '500-1000% ROI',
          link: 'https://ziontechgroup.com/ai-quantum-computing',
          popular: false,
          marketPrice: '$35,000-80,000/month',
          capabilities: ['Exponential speed improvements', 'Complex optimization problems', 'Quantum machine learning', 'Advanced security protocols']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our AI solutions deliver an average ROI of 300% within 6 months',
      stat: '300%'
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      description: 'Get up and running in 2-4 weeks with our streamlined implementation',
      stat: '2-4 weeks'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and end-to-end encryption',
      stat: '99.9%'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 AI expert support and dedicated success managers',
      stat: '24/7'
    }
  ];

  const technologies = [
    {
      category: 'AI Frameworks',
      icon: Brain,
      techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Hugging Face']
    },
    {
      category: 'Cloud Platforms',
      icon: Cloud,
      techs: ['AWS SageMaker', 'Azure ML', 'Google AI Platform', 'IBM Watson', 'NVIDIA DGX']
    },
    {
      category: 'Data Processing',
      icon: Database,
      techs: ['Apache Spark', 'Kafka', 'Elasticsearch', 'Redis', 'MongoDB']
    },
    {
      category: 'Monitoring',
      icon: BarChart3,
      techs: ['MLflow', 'Weights & Biases', 'Neptune', 'Comet', 'TensorBoard']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Advanced AI Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From automation to analytics, we deliver AI that drives real business value.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">300% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Real-time Processing</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven expertise and enterprise-grade AI solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve real business challenges
            </p>
          </div>
          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Market Price:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.marketPrice}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Trial:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.trial}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Expected ROI:</span>
                          <span className="text-sm font-medium text-green-400">{service.roi}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                        >
                          Learn More
                        </a>
                        <a
                          href="/contact"
                          className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                        >
                          Start Free Trial
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable AI technologies in the industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.techs.map((technology, techIndex) => (
                    <div key={techIndex} className="text-sm text-gray-300 bg-slate-700/50 px-3 py-1 rounded">
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;