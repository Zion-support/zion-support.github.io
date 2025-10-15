'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap, 
  Code, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Search, 
  Target, 
  Users, 
  Globe, 
  Database, 
  Cloud, 
  Lock, 
  Smartphone, 
  Monitor, 
  Server, 
  Palette, 
  Calendar, 
  ShoppingCart, 
  CreditCard, 
  Settings, 
  Wrench, 
  Lightbulb, 
  Rocket, 
  Award,
  CheckCircle, 
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Phone,
  Mail,
  TrendingUp,
  Layers,
  Bot,
  Sparkles,
  Workflow,
  Network,
  Microscope,
  Atom,
  CircuitBoard,
  CpuChip,
  DatabaseBackup,
  FileSearch,
  ImageIcon,
  VideoIcon,
  MusicIcon,
  SearchIcon,
  TargetIcon,
  UsersIcon,
  GlobeIcon,
  DatabaseIcon,
  CloudIcon,
  LockIcon,
  SmartphoneIcon,
  MonitorIcon,
  ServerIcon,
  PaletteIcon,
  CalendarIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  SettingsIcon,
  WrenchIcon,
  LightbulbIcon,
  RocketIcon,
  AwardIcon
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      category: 'AI Development & Integration',
      services: [
        {
          name: 'Custom AI Model Development',
          description: 'Tailored AI models built specifically for your business needs using cutting-edge machine learning algorithms and deep learning techniques.',
          features: ['Custom Model Training', 'Data Preprocessing', 'Model Optimization', 'Performance Tuning', 'Deployment Support'],
          pricing: 'Starting at $5,000',
          icon: Brain,
          color: 'from-purple-500 to-pink-600',
          link: 'https://ziontechgroup.com/custom-ai-models'
        },
        {
          name: 'AI Integration Services',
          description: 'Seamless integration of AI capabilities into your existing systems and workflows with minimal disruption.',
          features: ['API Development', 'System Integration', 'Data Pipeline Setup', 'Testing & Validation', 'Documentation'],
          pricing: 'Starting at $3,000',
          icon: Cpu,
          color: 'from-blue-500 to-cyan-600',
          link: 'https://ziontechgroup.com/ai-integration'
        },
        {
          name: 'Machine Learning Platform',
          description: 'End-to-end ML platform that enables your team to build, train, and deploy machine learning models at scale.',
          features: ['Model Training', 'AutoML', 'Model Management', 'A/B Testing', 'Monitoring'],
          pricing: '$2,500/month',
          icon: Layers,
          color: 'from-green-500 to-emerald-600',
          link: 'https://ziontechgroup.com/ml-platform'
        },
        {
          name: 'AI Consulting & Strategy',
          description: 'Strategic AI consulting to help you identify opportunities, plan implementation, and maximize ROI from AI investments.',
          features: ['AI Strategy Planning', 'Use Case Identification', 'ROI Analysis', 'Implementation Roadmap', 'Training & Support'],
          pricing: '$200/hour',
          icon: Lightbulb,
          color: 'from-orange-500 to-red-600',
          link: 'https://ziontechgroup.com/ai-consulting'
        }
      ]
    },
    {
      category: 'Computer Vision & Image Processing',
      services: [
        {
          name: 'Computer Vision Solutions',
          description: 'Advanced computer vision systems for object detection, recognition, and analysis in various industries.',
          features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'OCR Technology', 'Real-time Processing'],
          pricing: 'Starting at $4,000',
          icon: Eye,
          color: 'from-cyan-500 to-blue-600',
          link: 'https://ziontechgroup.com/computer-vision'
        },
        {
          name: 'Image & Video Analysis',
          description: 'AI-powered analysis of images and videos for content moderation, quality assessment, and insights extraction.',
          features: ['Content Moderation', 'Quality Assessment', 'Metadata Extraction', 'Scene Recognition', 'Batch Processing'],
          pricing: '$1,500/month',
          icon: Image,
          color: 'from-pink-500 to-purple-600',
          link: 'https://ziontechgroup.com/image-video-analysis'
        },
        {
          name: 'Medical Imaging AI',
          description: 'Specialized AI solutions for medical imaging analysis, diagnosis assistance, and treatment planning.',
          features: ['X-ray Analysis', 'MRI Interpretation', 'CT Scan Processing', 'Diagnosis Assistance', 'FDA Compliance'],
          pricing: 'Starting at $8,000',
          icon: Microscope,
          color: 'from-emerald-500 to-teal-600',
          link: 'https://ziontechgroup.com/medical-imaging-ai'
        },
        {
          name: 'Autonomous Vehicle Vision',
          description: 'Computer vision systems for autonomous vehicles including object detection, lane detection, and obstacle avoidance.',
          features: ['Object Detection', 'Lane Detection', 'Traffic Sign Recognition', 'Pedestrian Detection', 'Real-time Processing'],
          pricing: 'Starting at $15,000',
          icon: Car,
          color: 'from-slate-500 to-gray-600',
          link: 'https://ziontechgroup.com/autonomous-vehicle-vision'
        }
      ]
    },
    {
      category: 'Natural Language Processing',
      services: [
        {
          name: 'Chatbot & Conversational AI',
          description: 'Intelligent chatbots and conversational AI systems that understand context and provide human-like interactions.',
          features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
          pricing: '$2,000/month',
          icon: Bot,
          color: 'from-indigo-500 to-purple-600',
          link: 'https://ziontechgroup.com/chatbot-ai'
        },
        {
          name: 'Language Translation AI',
          description: 'Advanced translation services powered by neural networks for accurate, context-aware translations.',
          features: ['100+ Languages', 'Real-time Translation', 'Context Awareness', 'Industry-specific Terms', 'API Integration'],
          pricing: '$1,200/month',
          icon: Globe,
          color: 'from-teal-500 to-cyan-600',
          link: 'https://ziontechgroup.com/translation-ai'
        },
        {
          name: 'Sentiment Analysis Platform',
          description: 'AI-powered sentiment analysis for social media, reviews, and customer feedback to understand public opinion.',
          features: ['Real-time Analysis', 'Multi-language Support', 'Emotion Detection', 'Trend Analysis', 'Custom Models'],
          pricing: '$800/month',
          icon: BarChart3,
          color: 'from-amber-500 to-yellow-600',
          link: 'https://ziontechgroup.com/sentiment-analysis'
        },
        {
          name: 'Document Intelligence',
          description: 'AI-powered document processing that extracts, analyzes, and categorizes information from various document types.',
          features: ['Document Classification', 'Data Extraction', 'OCR Technology', 'Form Processing', 'Batch Processing'],
          pricing: '$1,500/month',
          icon: FileText,
          color: 'from-violet-500 to-purple-600',
          link: 'https://ziontechgroup.com/document-intelligence'
        }
      ]
    },
    {
      category: 'Predictive Analytics & Forecasting',
      services: [
        {
          name: 'Predictive Analytics Suite',
          description: 'Advanced predictive analytics platform that forecasts trends, behaviors, and outcomes using machine learning.',
          features: ['Time Series Forecasting', 'Predictive Modeling', 'Risk Assessment', 'Scenario Planning', 'Real-time Updates'],
          pricing: '$3,000/month',
          icon: TrendingUp,
          color: 'from-red-500 to-pink-600',
          link: 'https://ziontechgroup.com/predictive-analytics'
        },
        {
          name: 'Demand Forecasting AI',
          description: 'AI-powered demand forecasting for inventory management, supply chain optimization, and sales planning.',
          features: ['Inventory Optimization', 'Supply Chain Planning', 'Sales Forecasting', 'Seasonal Analysis', 'Risk Management'],
          pricing: '$2,200/month',
          icon: Target,
          color: 'from-green-500 to-emerald-600',
          link: 'https://ziontechgroup.com/demand-forecasting'
        },
        {
          name: 'Financial Risk Assessment',
          description: 'AI-driven financial risk analysis and fraud detection for banks, insurance companies, and financial institutions.',
          features: ['Fraud Detection', 'Credit Risk Analysis', 'Market Risk Assessment', 'Compliance Monitoring', 'Real-time Alerts'],
          pricing: '$4,500/month',
          icon: Shield,
          color: 'from-blue-500 to-indigo-600',
          link: 'https://ziontechgroup.com/financial-risk-ai'
        },
        {
          name: 'Customer Lifetime Value Prediction',
          description: 'AI models that predict customer behavior, lifetime value, and churn probability for better customer retention.',
          features: ['Churn Prediction', 'Lifetime Value Calculation', 'Behavioral Analysis', 'Segmentation', 'Retention Strategies'],
          pricing: '$1,800/month',
          icon: Users,
          color: 'from-purple-500 to-pink-600',
          link: 'https://ziontechgroup.com/customer-lifetime-value'
        }
      ]
    },
    {
      category: 'AI Automation & Workflow',
      services: [
        {
          name: 'Intelligent Process Automation',
          description: 'AI-powered automation that handles complex business processes with decision-making capabilities.',
          features: ['Process Discovery', 'Workflow Automation', 'Decision Trees', 'Exception Handling', 'Performance Monitoring'],
          pricing: '$3,500/month',
          icon: Workflow,
          color: 'from-orange-500 to-red-600',
          link: 'https://ziontechgroup.com/process-automation'
        },
        {
          name: 'AI-Powered Testing',
          description: 'Automated testing solutions that use AI to generate test cases, identify bugs, and ensure quality assurance.',
          features: ['Test Case Generation', 'Bug Detection', 'Performance Testing', 'Regression Testing', 'Continuous Integration'],
          pricing: '$2,800/month',
          icon: Wrench,
          color: 'from-cyan-500 to-blue-600',
          link: 'https://ziontechgroup.com/ai-testing'
        },
        {
          name: 'Smart Data Processing',
          description: 'AI-driven data processing pipeline that cleans, transforms, and enriches data automatically.',
          features: ['Data Cleaning', 'Data Transformation', 'Data Enrichment', 'Quality Validation', 'Real-time Processing'],
          pricing: '$1,600/month',
          icon: Database,
          color: 'from-emerald-500 to-teal-600',
          link: 'https://ziontechgroup.com/smart-data-processing'
        },
        {
          name: 'AI Content Generation',
          description: 'Advanced content generation AI that creates high-quality text, images, and multimedia content.',
          features: ['Text Generation', 'Image Creation', 'Video Production', 'Content Optimization', 'Brand Consistency'],
          pricing: '$2,200/month',
          icon: Sparkles,
          color: 'from-pink-500 to-purple-600',
          link: 'https://ziontechgroup.com/ai-content-generation'
        }
      ]
    },
    {
      category: 'AI Security & Compliance',
      services: [
        {
          name: 'AI Security Monitoring',
          description: 'Advanced AI-powered security monitoring that detects threats, anomalies, and potential breaches in real-time.',
          features: ['Threat Detection', 'Anomaly Detection', 'Behavioral Analysis', 'Incident Response', 'Compliance Reporting'],
          pricing: '$4,000/month',
          icon: Shield,
          color: 'from-red-500 to-orange-600',
          link: 'https://ziontechgroup.com/ai-security-monitoring'
        },
        {
          name: 'AI Model Security',
          description: 'Comprehensive security solutions for AI models including adversarial attack protection and model integrity.',
          features: ['Adversarial Protection', 'Model Encryption', 'Access Control', 'Audit Logging', 'Compliance Validation'],
          pricing: '$3,200/month',
          icon: Lock,
          color: 'from-blue-500 to-indigo-600',
          link: 'https://ziontechgroup.com/ai-model-security'
        },
        {
          name: 'AI Ethics & Compliance',
          description: 'AI ethics consulting and compliance services to ensure responsible AI development and deployment.',
          features: ['Ethics Assessment', 'Bias Detection', 'Fairness Auditing', 'Compliance Training', 'Policy Development'],
          pricing: '$2,500/month',
          icon: Award,
          color: 'from-purple-500 to-pink-600',
          link: 'https://ziontechgroup.com/ai-ethics-compliance'
        },
        {
          name: 'AI Governance Platform',
          description: 'Comprehensive AI governance platform that manages AI models, tracks performance, and ensures compliance.',
          features: ['Model Registry', 'Performance Tracking', 'Compliance Monitoring', 'Risk Assessment', 'Audit Trail'],
          pricing: '$3,800/month',
          icon: Settings,
          color: 'from-slate-500 to-gray-600',
          link: 'https://ziontechgroup.com/ai-governance'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Cutting-Edge Technology',
      description: 'Latest AI and machine learning technologies with continuous updates and improvements'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, access controls, and compliance certifications'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced AI engineers and data scientists with proven track records'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation with minimal disruption to your existing systems'
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Tailored AI solutions designed specifically for your business requirements'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support from our AI experts and technical team'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Microscope, description: 'Medical imaging, drug discovery, patient care optimization' },
    { name: 'Finance', icon: CreditCard, description: 'Fraud detection, risk assessment, algorithmic trading' },
    { name: 'Retail', icon: ShoppingCart, description: 'Personalization, inventory management, demand forecasting' },
    { name: 'Manufacturing', icon: Settings, description: 'Quality control, predictive maintenance, supply chain optimization' },
    { name: 'Transportation', icon: Car, description: 'Autonomous vehicles, route optimization, traffic management' },
    { name: 'Education', icon: Users, description: 'Personalized learning, student assessment, content generation' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services & Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including custom AI development, computer vision, NLP, predictive analytics, automation, and security. Expert AI consulting and implementation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, NLP, predictive analytics, AI consulting, custom AI development" />
        <meta property="og:title" content="AI Services & Solutions - Zion Tech Group" />
        <meta property="og:description" content="Leading AI services provider offering custom AI development, computer vision, NLP, and predictive analytics solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                AI Services &
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From custom AI development 
                to computer vision, natural language processing, and predictive analytics - we deliver AI that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get AI Consultation
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Custom AI Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 AI Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our AI Services Portfolio
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to address every aspect of artificial intelligence implementation, 
                from strategy and development to deployment and maintenance.
              </p>
            </div>

            {aiServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-cyan-400">{service.pricing}</span>
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <a
                        href={service.link}
                        className="w-full cyber-button text-center inline-flex items-center justify-center group-hover:bg-cyan-600 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                AI Solutions Across Industries
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are trusted by leading companies across various industries, 
                delivering measurable results and competitive advantages.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI services combine cutting-edge technology with deep industry expertise 
                to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI services. From strategy to implementation, 
              we're your trusted partner in the AI revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get AI Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;