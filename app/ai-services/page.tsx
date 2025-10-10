'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  TrendingUp,
  DollarSign,
  Cpu,
  Database,
  Eye,
  Mic,
  Video,
  Camera,
  Music,
  Palette,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Compass,
  Navigation as NavIcon,
  PieChart,
  Activity,
  Phone,
  MapPin,
  Rocket,
  Sparkles,
  Cloud,
  Code,
  MessageSquare,
  Mail,
  Calendar,
  Smartphone,
  Search,
  Bot,
  Palette as PaletteIcon,
  Camera as CameraIcon,
  Music as MusicIcon,
  Video as VideoIcon,
  Gamepad2,
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  Building as BuildingIcon,
  Factory as FactoryIcon,
  Car as CarIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Train as TrainIcon,
  Home as HomeIcon,
  Heart as HeartIcon,
  Stethoscope as StethoscopeIcon,
  GraduationCap as GraduationCapIcon,
  Briefcase as BriefcaseIcon,
  Wrench as WrenchIcon,
  Hammer as HammerIcon,
  Paintbrush as PaintbrushIcon,
  Scissors as ScissorsIcon,
  BookOpen as BookOpenIcon,
  Calculator as CalculatorIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Compass as CompassIcon,
  Navigation as NavigationIcon,
  PieChart as PieChartIcon,
  TrendingDown,
  Activity as ActivityIcon,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone as SmartphoneIcon,
  ChefHat,
  Rocket as RocketIcon,
  Sprout,
  Scale
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServiceCategories = [
    {
      category: 'AI Automation & Workflow',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      services: [
        {
          name: 'AI Workflow Automation Platform',
          description: 'End-to-end business process automation with intelligent decision-making and self-optimization. Reduce manual work by 80% and increase efficiency by 300%.',
          features: ['Visual Workflow Builder', 'Smart Process Optimization', 'Error Detection & Correction', 'Cost Reduction', 'Scalable Architecture'],
          pricing: 'Starting at $5,000/month',
          trial: '30-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-workflow-automation',
          popular: true,
          capabilities: [
            'Intelligent process mapping',
            'Automated decision trees',
            'Real-time optimization',
            'Cross-system integration'
          ]
        },
        {
          name: 'AI Customer Support Suite',
          description: 'Advanced 24/7 customer support with natural language processing, sentiment analysis, and human handoff. Achieve 95% customer satisfaction.',
          features: ['Multi-language NLP', 'Sentiment Analysis', 'Escalation Management', 'Knowledge Base Integration', 'Performance Analytics'],
          pricing: 'Starting at $3,000/month',
          trial: '14-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-customer-support',
          popular: true,
          capabilities: [
            'Natural language understanding',
            'Context-aware responses',
            'Emotional intelligence',
            'Seamless human handoff'
          ]
        },
        {
          name: 'AI Sales Automation Engine',
          description: 'Intelligent sales process automation with lead scoring, automated follow-ups, and predictive analytics. Increase conversions by 250%.',
          features: ['AI Lead Scoring', 'Automated Outreach', 'Sales Forecasting', 'CRM Integration', 'Revenue Optimization'],
          pricing: 'Starting at $4,000/month',
          trial: '14-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-sales-automation',
          popular: true,
          capabilities: [
            'Predictive lead scoring',
            'Automated email sequences',
            'Sales opportunity identification',
            'Revenue forecasting'
          ]
        },
        {
          name: 'AI Document Processing System',
          description: 'Intelligent document analysis, extraction, and processing with OCR and natural language understanding. Process 10,000+ documents daily.',
          features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Integration', 'Compliance Tracking'],
          pricing: 'Starting at $2,500/month',
          trial: '7-day free trial',
          roi: '180-350% ROI',
          link: 'https://ziontechgroup.com/ai-document-processing',
          popular: false,
          capabilities: [
            'Advanced OCR recognition',
            'Intelligent data extraction',
            'Document classification',
            'Automated workflow triggers'
          ]
        }
      ]
    },
    {
      category: 'AI Analytics & Business Intelligence',
      icon: BarChart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'AI Data Analytics Platform',
          description: 'Advanced analytics and insights with machine learning-powered predictions and real-time dashboards. Make data-driven decisions 10x faster.',
          features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization', 'Automated Insights'],
          pricing: 'Starting at $6,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-data-analytics',
          popular: true,
          capabilities: [
            'Machine learning predictions',
            'Real-time data processing',
            'Automated insight generation',
            'Custom visualization creation'
          ]
        },
        {
          name: 'AI Business Intelligence Suite',
          description: 'Transform raw data into actionable business insights with AI-powered analysis and recommendations. Drive 400% better decision making.',
          features: ['KPI Tracking', 'Trend Analysis', 'Performance Metrics', 'Strategic Planning', 'ROI Measurement'],
          pricing: 'Starting at $7,000/month',
          trial: '14-day free trial',
          roi: '400-700% ROI',
          link: 'https://ziontechgroup.com/ai-business-intelligence',
          popular: true,
          capabilities: [
            'Intelligent KPI monitoring',
            'Predictive trend analysis',
            'Automated reporting',
            'Strategic recommendation engine'
          ]
        },
        {
          name: 'AI Predictive Analytics Engine',
          description: 'Forecast future trends, outcomes, and opportunities with advanced machine learning models. Achieve 95% prediction accuracy.',
          features: ['Demand Forecasting', 'Risk Assessment', 'Market Analysis', 'Scenario Planning', 'Anomaly Detection'],
          pricing: 'Starting at $8,000/month',
          trial: '14-day free trial',
          roi: '500-800% ROI',
          link: 'https://ziontechgroup.com/ai-predictive-analytics',
          popular: true,
          capabilities: [
            'Advanced ML algorithms',
            'Multi-variable forecasting',
            'Risk probability modeling',
            'Scenario simulation'
          ]
        },
        {
          name: 'AI Real-time Monitoring System',
          description: 'Continuous monitoring and alerting system with AI-powered anomaly detection and automated responses. Prevent 99% of issues.',
          features: ['Real-time Monitoring', 'Anomaly Detection', 'Automated Alerts', 'Performance Tracking', 'Predictive Maintenance'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-450% ROI',
          link: 'https://ziontechgroup.com/ai-monitoring',
          popular: false,
          capabilities: [
            'Behavioral anomaly detection',
            'Predictive failure analysis',
            'Automated incident response',
            'Performance optimization'
          ]
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
          description: 'Complete content creation suite with AI writing, editing, optimization, and multi-format support. Create 100x more content.',
          features: ['AI Writing Assistant', 'Content Optimization', 'SEO Analysis', 'Brand Voice Training', 'Multi-format Support'],
          pricing: 'Starting at $2,000/month',
          trial: '7-day free trial',
          roi: '100-300% ROI',
          link: 'https://ziontechgroup.com/ai-content-generation',
          popular: true,
          capabilities: [
            'Natural language generation',
            'SEO optimization',
            'Brand voice consistency',
            'Multi-format content creation'
          ]
        },
        {
          name: 'AI Email Marketing Platform',
          description: 'Intelligent email campaigns with personalization, A/B testing, and performance optimization. Increase open rates by 300%.',
          features: ['Smart Personalization', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'List Segmentation'],
          pricing: 'Starting at $3,500/month',
          trial: '7-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-email-marketing',
          popular: true,
          capabilities: [
            'Advanced personalization',
            'Optimal send time prediction',
            'Subject line optimization',
            'Audience behavior analysis'
          ]
        },
        {
          name: 'AI SEO Optimization Suite',
          description: 'Comprehensive SEO analysis, keyword research, and content optimization with AI recommendations. Rank 200% higher.',
          features: ['Keyword Research', 'Content Analysis', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-seo-optimizer',
          popular: true,
          capabilities: [
            'Intelligent keyword research',
            'Content optimization suggestions',
            'Technical SEO analysis',
            'Competitor gap analysis'
          ]
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media content creation, scheduling, and engagement optimization across platforms. Grow followers by 400%.',
          features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics', 'Hashtag Optimization', 'Multi-platform Management'],
          pricing: 'Starting at $1,500/month',
          trial: '7-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-social-media-manager',
          popular: false,
          capabilities: [
            'Cross-platform content adaptation',
            'Optimal posting time prediction',
            'Engagement rate optimization',
            'Viral content identification'
          ]
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
          description: 'Advanced AI-powered healthcare solutions including medical imaging, diagnosis support, and patient care. Improve outcomes by 60%.',
          features: ['Medical Imaging Analysis', 'Diagnosis Support', 'Patient Monitoring', 'Drug Discovery', 'Clinical Decision Support'],
          pricing: 'Starting at $15,000/month',
          trial: '30-day free trial',
          roi: '400-800% ROI',
          link: 'https://ziontechgroup.com/ai-healthcare',
          popular: true,
          capabilities: [
            'Medical image analysis',
            'Diagnostic assistance',
            'Patient risk assessment',
            'Treatment recommendation'
          ]
        },
        {
          name: 'AI Fintech Platform',
          description: 'Comprehensive financial technology solutions with fraud detection, risk assessment, and algorithmic trading. Reduce fraud by 95%.',
          features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Regulatory Compliance'],
          pricing: 'Starting at $12,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-fintech',
          popular: true,
          capabilities: [
            'Real-time fraud detection',
            'Risk scoring algorithms',
            'Automated trading strategies',
            'Regulatory compliance monitoring'
          ]
        },
        {
          name: 'AI E-commerce Optimization',
          description: 'E-commerce platform optimization with personalization, inventory management, and customer insights. Increase sales by 200%.',
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'Conversion Optimization'],
          pricing: 'Starting at $5,000/month',
          trial: '14-day free trial',
          roi: '200-500% ROI',
          link: 'https://ziontechgroup.com/ai-ecommerce-solutions',
          popular: true,
          capabilities: [
            'Personalized recommendations',
            'Dynamic pricing optimization',
            'Inventory demand forecasting',
            'Customer behavior analysis'
          ]
        },
        {
          name: 'AI Manufacturing Intelligence',
          description: 'Smart manufacturing solutions with predictive maintenance, quality control, and process optimization. Reduce downtime by 70%.',
          features: ['Predictive Maintenance', 'Quality Control', 'Process Optimization', 'Supply Chain Management', 'Energy Efficiency'],
          pricing: 'Starting at $10,000/month',
          trial: '14-day free trial',
          roi: '350-650% ROI',
          link: 'https://ziontechgroup.com/ai-manufacturing',
          popular: false,
          capabilities: [
            'Predictive maintenance scheduling',
            'Quality defect detection',
            'Process optimization',
            'Supply chain optimization'
          ]
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
          description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis. Achieve 99% accuracy.',
          features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Visual Search', 'Quality Inspection'],
          pricing: 'Starting at $8,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-computer-vision',
          popular: true,
          capabilities: [
            'Advanced image processing',
            'Real-time object detection',
            'Facial recognition technology',
            'Visual search capabilities'
          ]
        },
        {
          name: 'AI Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI. Process 1M+ documents daily.',
          features: ['Text Analysis', 'Language Understanding', 'Sentiment Analysis', 'Translation', 'Conversational AI'],
          pricing: 'Starting at $6,500/month',
          trial: '14-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-nlp',
          popular: true,
          capabilities: [
            'Natural language understanding',
            'Sentiment analysis',
            'Multi-language translation',
            'Conversational AI development'
          ]
        },
        {
          name: 'AI Machine Learning Platform',
          description: 'Complete ML platform with model training, deployment, and management capabilities. Deploy models 10x faster.',
          features: ['Model Training', 'Model Deployment', 'Model Management', 'AutoML', 'MLOps'],
          pricing: 'Starting at $9,000/month',
          trial: '14-day free trial',
          roi: '400-700% ROI',
          link: 'https://ziontechgroup.com/ai-ml-platform',
          popular: true,
          capabilities: [
            'Automated model training',
            'One-click deployment',
            'Model performance monitoring',
            'MLOps pipeline automation'
          ]
        },
        {
          name: 'AI Quantum Computing Solutions',
          description: 'Next-generation quantum computing solutions for complex optimization and simulation problems. Solve impossible problems.',
          features: ['Quantum Optimization', 'Quantum Simulation', 'Quantum Machine Learning', 'Quantum Security', 'Hybrid Computing'],
          pricing: 'Starting at $20,000/month',
          trial: '30-day free trial',
          roi: '500-1000% ROI',
          link: 'https://ziontechgroup.com/ai-quantum-computing',
          popular: false,
          capabilities: [
            'Quantum algorithm development',
            'Quantum simulation',
            'Hybrid quantum-classical computing',
            'Quantum security protocols'
          ]
        }
      ]
    }
  ];

  const categories = ['all', ...aiServiceCategories.map(cat => cat.category)];

  const benefits = [
    {
      icon: TrendingUp,
      stat: '300%',
      title: 'Average ROI Increase',
      description: 'Our AI solutions deliver measurable business value within the first quarter'
    },
    {
      icon: Users,
      stat: '50K+',
      title: 'Active Users',
      description: 'Trusted by enterprises worldwide for their critical AI needs'
    },
    {
      icon: Award,
      stat: '99.9%',
      title: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability with comprehensive SLA coverage'
    },
    {
      icon: Target,
      stat: '24/7',
      title: 'AI Support',
      description: 'Round-the-clock assistance from our expert AI team'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'MedTech Solutions',
      content: 'AI Healthcare Solutions revolutionized our diagnostic accuracy. We now catch 40% more early-stage diseases.',
      rating: 5,
      avatar: '/images/testimonials/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Operations',
      company: 'FinanceFirst Bank',
      content: 'AI Fintech Platform reduced our fraud losses by 95%. The ROI was evident within the first month.',
      rating: 5,
      avatar: '/images/testimonials/michael-rodriguez.jpg'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Marketing',
      company: 'RetailMax',
      content: 'AI E-commerce Optimization increased our conversion rates by 200%. Our sales team is amazed by the results.',
      rating: 5,
      avatar: '/images/testimonials/emily-watson.jpg'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServiceCategories.flatMap(cat => cat.services)
    : aiServiceCategories.find(cat => cat.category === selectedCategory)?.services || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-3000"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Advanced AI Services
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From automation to analytics, we deliver enterprise-grade AI that drives real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore AI Services
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 neon-text">{benefit.stat}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Services by Category */}
        {selectedCategory === 'all' ? (
          <div className={`space-y-16 mb-20 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {aiServiceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative group">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
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
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative group">
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
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
        )}

        {/* Testimonials */}
        <div className={`mb-20 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their businesses with our AI solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;