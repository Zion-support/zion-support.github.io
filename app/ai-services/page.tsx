'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Zap,
  Eye,
  MessageSquare,
  BarChart3,
  Shield,
  Users,
  Code,
  Globe,
  Smartphone,
  Camera,
  Video,
  Mic,
  Image,
  FileText,
  Mail,
  Calendar,
  DollarSign,
  Target,
  Settings,
  Cpu,
  Network,
  Database,
  Cloud,
  Lock,
  Key,
  Fingerprint,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload,
  Share,
  Link,
  Star,
  TrendingUp,
  TrendingDown,
  Activity,
  Monitor,
  Laptop,
  Headphones,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Bell,
  Clock,
  MapPin,
  Phone,
  User,
  UserPlus,
  UserCheck,
  UserX,
  Crown,
  Award,
  Trophy,
  Medal,
  Gift,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PieChart,
  BarChart,
  LineChart,
  Minus,
  Plus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Building,
  Factory,
  Store,
  ShoppingBag,
  Package,
  Truck,
  Plane,
  Car,
  Bike,
  Train,
  Ship,
  Rocket,
  Satellite,
  Wifi,
  Bluetooth,
  Radio,
  Signal,
  Battery,
  Power,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Flame,
  Snowflake,
  Umbrella,
  TreePine,
  Flower,
  Leaf,
  Sprout,
  Tree,
  Mountain,
  Waves,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Mouse,
  Bug,
  Spider,
  Butterfly,
  Bee,
  Ant,
  Ladybug,
  Snail,
  Octopus,
  Whale,
  Shark,
  Dolphin,
  Penguin,
  Eagle,
  Owl,
  Parrot,
  Peacock,
  Flamingo,
  Toucan,
  Hummingbird,
  Robin,
  Sparrow,
  Crow,
  Raven,
  Dove,
  Pigeon,
  Chicken,
  Rooster,
  Duck,
  Goose,
  Swan,
  Turkey
} from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  category: string;
  link: string;
  popular?: boolean;
  useCases: string[];
}

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices: AIService[] = [
    {
      id: '1',
      icon: Brain,
      title: 'AI-Powered Chatbots & Virtual Assistants',
      description: 'Advanced conversational AI with natural language processing, sentiment analysis, and multi-channel support for 24/7 customer engagement.',
      features: ['GPT-4 & Claude Integration', 'Natural Language Processing', 'Multi-language Support (50+ languages)', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning', 'Voice Recognition', 'Intent Classification', 'Context Awareness', 'Fallback Handling'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions', 'Improved customer satisfaction'],
      category: 'conversational',
      link: 'https://ziontechgroup.com/ai-chatbots',
      popular: true,
      useCases: ['Customer Support', 'Lead Generation', 'Sales Assistance', 'FAQ Automation', 'Order Processing']
    },
    {
      id: '2',
      icon: BarChart3,
      title: 'AI Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Report Generation', 'Anomaly Detection', 'Custom Data Models', 'Machine Learning Pipelines', 'Data Visualization', 'Statistical Analysis', 'Trend Forecasting', 'ROI Optimization'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization', 'Competitive advantage'],
      category: 'analytics',
      link: 'https://ziontechgroup.com/ai-analytics',
      popular: true,
      useCases: ['Business Intelligence', 'Sales Forecasting', 'Market Analysis', 'Performance Monitoring', 'Risk Assessment']
    },
    {
      id: '3',
      icon: Eye,
      title: 'AI Computer Vision & Image Recognition',
      description: 'Image and video analysis solutions for quality control, security, automation, and visual content understanding.',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing', 'Image Classification', 'OCR (Optical Character Recognition)', 'Medical Imaging', 'Autonomous Vehicles', 'Surveillance Systems'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction', 'Improved accuracy'],
      category: 'vision',
      link: 'https://ziontechgroup.com/ai-vision',
      popular: true,
      useCases: ['Quality Control', 'Security & Surveillance', 'Medical Diagnosis', 'Autonomous Vehicles', 'Content Moderation']
    },
    {
      id: '4',
      icon: Zap,
      title: 'AI Workflow Automation & RPA',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency and cost savings.',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring', 'Document Processing', 'Email Automation', 'Data Entry Automation', 'Approval Workflows', 'Integration APIs'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation', 'Improved productivity'],
      category: 'automation',
      link: 'https://ziontechgroup.com/ai-automation',
      popular: true,
      useCases: ['Document Processing', 'Email Management', 'Data Entry', 'Invoice Processing', 'Customer Onboarding']
    },
    {
      id: '5',
      icon: Shield,
      title: 'AI Fraud Detection & Security',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities, security threats, and compliance violations.',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts', 'Pattern Recognition', 'Threat Intelligence', 'Compliance Monitoring', 'Incident Response', 'Forensic Analysis'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready', 'Enhanced security'],
      category: 'security',
      link: 'https://ziontechgroup.com/ai-fraud-detection',
      popular: true,
      useCases: ['Financial Fraud', 'Cybersecurity', 'Identity Verification', 'Transaction Monitoring', 'Compliance Management']
    },
    {
      id: '6',
      icon: MessageSquare,
      title: 'AI Content Generation & Marketing',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, video production, and marketing automation.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language', 'Brand Voice Training', 'Content Calendar', 'A/B Testing', 'Social Media Automation', 'Email Marketing'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['Save 80% content time', 'Consistent quality', 'SEO optimized', 'Multi-platform', 'Increased engagement'],
      category: 'content',
      link: 'https://ziontechgroup.com/ai-content',
      popular: true,
      useCases: ['Blog Writing', 'Social Media', 'Email Campaigns', 'Product Descriptions', 'Marketing Materials']
    },
    {
      id: '7',
      icon: Users,
      title: 'AI Customer Insights & Personalization',
      description: 'Advanced customer analytics with sentiment analysis, churn prediction, personalized recommendations, and behavioral insights.',
      features: ['Sentiment Analysis', 'Churn Prediction', 'Customer Segmentation', 'Personalized Recommendations', 'Behavioral Analytics', 'Survey Analysis', 'NPS Tracking', 'ROI Measurement', 'Customer Journey Mapping', 'Predictive Modeling'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Increase retention by 40%', 'Predict customer churn', 'Personalized experiences', 'Data-driven insights', 'Improved satisfaction'],
      category: 'customer',
      link: 'https://ziontechgroup.com/ai-customer-insights',
      popular: true,
      useCases: ['Customer Retention', 'Personalization', 'Recommendation Engines', 'Churn Prevention', 'Customer Experience']
    },
    {
      id: '8',
      icon: Code,
      title: 'AI Code Assistant & Development Tools',
      description: 'Intelligent code completion, debugging, optimization, and development assistance for multiple programming languages.',
      features: ['Code Completion', 'Debugging Help', 'Code Optimization', 'Multi-language Support', 'Documentation', 'Code Review', 'Refactoring', 'Testing Generation', 'Security Analysis', 'Performance Optimization'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase productivity by 50%', 'Reduce bugs by 70%', 'Faster development', 'Better code quality', 'Learning assistance'],
      category: 'development',
      link: 'https://ziontechgroup.com/ai-code-assistant',
      popular: true,
      useCases: ['Code Development', 'Debugging', 'Code Review', 'Documentation', 'Testing']
    },
    {
      id: '9',
      icon: Globe,
      title: 'AI Translation & Language Processing',
      description: 'Advanced translation platform with real-time translation, context understanding, and industry-specific terminology.',
      features: ['Real-time Translation', 'Context-Aware Translation', 'Industry-Specific Terminology', 'Voice Translation', 'Document Translation', 'Website Translation', 'API Integration', 'Quality Assurance', 'Multi-language Support', 'Cultural Adaptation'],
      price: 'Starting at $79/month',
      marketPrice: '$150-500/month',
      benefits: ['99.5% translation accuracy', 'Real-time translation', 'Industry-specific terms', 'Multi-format support', 'Cultural context'],
      category: 'language',
      link: 'https://ziontechgroup.com/ai-translation',
      popular: true,
      useCases: ['Document Translation', 'Website Localization', 'Customer Support', 'Content Creation', 'International Business']
    },
    {
      id: '10',
      icon: Video,
      title: 'AI Video & Media Processing',
      description: 'AI-powered video editing, analysis, and media processing with automatic editing, voice synthesis, and content optimization.',
      features: ['AI Auto-Editing', 'Voice Synthesis & Dubbing', 'Multi-format Export', 'Template Library', 'Color Correction AI', 'Audio Enhancement', 'Subtitle Generation', 'Cloud Rendering', 'Motion Graphics', 'Content Moderation'],
      price: 'Starting at $89/month',
      marketPrice: '$200-600/month',
      benefits: ['Save 70% editing time', 'Professional quality output', 'Automated editing', 'Multi-format support', 'Cost-effective production'],
      category: 'media',
      link: 'https://ziontechgroup.com/ai-video-processing',
      popular: true,
      useCases: ['Video Editing', 'Content Creation', 'Social Media', 'Training Videos', 'Marketing Content']
    },
    {
      id: '11',
      icon: Database,
      title: 'AI Data Processing & ETL',
      description: 'Intelligent data processing, extraction, transformation, and loading with automated data quality and cleansing.',
      features: ['Data Extraction', 'Data Transformation', 'Data Loading', 'Data Quality Assessment', 'Data Cleansing', 'Schema Mapping', 'Data Validation', 'Error Detection', 'Data Integration', 'ETL Automation'],
      price: 'Starting at $129/month',
      marketPrice: '$250-800/month',
      benefits: ['Reduce data processing time by 80%', 'Improved data quality', 'Automated workflows', 'Error reduction', 'Cost savings'],
      category: 'data',
      link: 'https://ziontechgroup.com/ai-data-processing',
      popular: true,
      useCases: ['Data Migration', 'Data Integration', 'Data Quality', 'ETL Processes', 'Data Warehousing']
    },
    {
      id: '12',
      icon: Target,
      title: 'AI Predictive Analytics & Forecasting',
      description: 'Advanced predictive modeling and forecasting for business planning, demand prediction, and risk assessment.',
      features: ['Demand Forecasting', 'Sales Prediction', 'Risk Assessment', 'Market Analysis', 'Trend Prediction', 'Scenario Planning', 'Monte Carlo Simulation', 'Time Series Analysis', 'Machine Learning Models', 'Real-time Updates'],
      price: 'Starting at $179/month',
      marketPrice: '$350-1000/month',
      benefits: ['Improved planning accuracy', 'Risk mitigation', 'Better resource allocation', 'Competitive advantage', 'Data-driven decisions'],
      category: 'predictive',
      link: 'https://ziontechgroup.com/ai-predictive-analytics',
      popular: true,
      useCases: ['Sales Forecasting', 'Demand Planning', 'Risk Management', 'Market Analysis', 'Resource Planning']
    },
    {
      id: '13',
      icon: Settings,
      title: 'AI Process Optimization & Intelligence',
      description: 'Intelligent process optimization and business intelligence with automated decision-making and performance enhancement.',
      features: ['Process Mining', 'Performance Optimization', 'Decision Automation', 'Resource Allocation', 'Cost Optimization', 'Efficiency Analysis', 'Bottleneck Detection', 'Workflow Optimization', 'KPI Monitoring', 'Continuous Improvement'],
      price: 'Starting at $159/month',
      marketPrice: '$300-900/month',
      benefits: ['Process efficiency gains', 'Cost reduction', 'Improved performance', 'Automated optimization', 'Better resource utilization'],
      category: 'optimization',
      link: 'https://ziontechgroup.com/ai-process-optimization',
      popular: true,
      useCases: ['Process Improvement', 'Resource Optimization', 'Cost Reduction', 'Performance Enhancement', 'Operational Excellence']
    },
    {
      id: '14',
      icon: Cpu,
      title: 'AI Edge Computing & IoT',
      description: 'AI-powered edge computing solutions for IoT devices, real-time processing, and distributed intelligence.',
      features: ['Edge AI Processing', 'IoT Integration', 'Real-time Analytics', 'Device Management', 'Data Processing', 'Model Deployment', 'Offline Capability', 'Low Latency', 'Resource Optimization', 'Security'],
      price: 'Starting at $229/month',
      marketPrice: '$450-1200/month',
      benefits: ['Reduced latency', 'Offline processing', 'Cost efficiency', 'Real-time insights', 'Scalable deployment'],
      category: 'edge',
      link: 'https://ziontechgroup.com/ai-edge-computing',
      popular: true,
      useCases: ['IoT Analytics', 'Real-time Processing', 'Edge Intelligence', 'Device Management', 'Industrial Automation']
    },
    {
      id: '15',
      icon: Network,
      title: 'AI Network Intelligence & Optimization',
      description: 'Intelligent network management, optimization, and security with AI-powered monitoring and automated responses.',
      features: ['Network Monitoring', 'Traffic Optimization', 'Security Analysis', 'Performance Tuning', 'Anomaly Detection', 'Predictive Maintenance', 'Load Balancing', 'Quality of Service', 'Bandwidth Management', 'Incident Response'],
      price: 'Starting at $189/month',
      marketPrice: '$380-1000/month',
      benefits: ['Improved network performance', 'Reduced downtime', 'Enhanced security', 'Cost optimization', 'Automated management'],
      category: 'network',
      link: 'https://ziontechgroup.com/ai-network-intelligence',
      popular: true,
      useCases: ['Network Optimization', 'Security Monitoring', 'Performance Management', 'Traffic Analysis', 'Predictive Maintenance']
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'conversational', name: 'Conversational AI', count: aiServices.filter(s => s.category === 'conversational').length },
    { id: 'analytics', name: 'Analytics & BI', count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'vision', name: 'Computer Vision', count: aiServices.filter(s => s.category === 'vision').length },
    { id: 'automation', name: 'Automation & RPA', count: aiServices.filter(s => s.category === 'automation').length },
    { id: 'security', name: 'Security & Fraud', count: aiServices.filter(s => s.category === 'security').length },
    { id: 'content', name: 'Content & Marketing', count: aiServices.filter(s => s.category === 'content').length },
    { id: 'customer', name: 'Customer Intelligence', count: aiServices.filter(s => s.category === 'customer').length },
    { id: 'development', name: 'Development Tools', count: aiServices.filter(s => s.category === 'development').length },
    { id: 'language', name: 'Language Processing', count: aiServices.filter(s => s.category === 'language').length },
    { id: 'media', name: 'Media & Video', count: aiServices.filter(s => s.category === 'media').length },
    { id: 'data', name: 'Data Processing', count: aiServices.filter(s => s.category === 'data').length },
    { id: 'predictive', name: 'Predictive Analytics', count: aiServices.filter(s => s.category === 'predictive').length },
    { id: 'optimization', name: 'Process Optimization', count: aiServices.filter(s => s.category === 'optimization').length },
    { id: 'edge', name: 'Edge Computing', count: aiServices.filter(s => s.category === 'edge').length },
    { id: 'network', name: 'Network Intelligence', count: aiServices.filter(s => s.category === 'network').length }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const features = [
    {
      title: 'Cutting-Edge AI Technology',
      description: 'Leverage the latest AI models including GPT-4, Claude, and custom-trained models.',
      icon: Brain
    },
    {
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across healthcare, finance, e-commerce, and more.',
      icon: Target
    },
    {
      title: 'Scalable Solutions',
      description: 'From startup to enterprise, our AI solutions scale with your business.',
      icon: TrendingUp
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and AI model monitoring.',
      icon: Shield
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI services including chatbots, analytics, computer vision, automation, and more. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, computer vision, data analytics, automation, Zion Tech Group" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From chatbots to computer vision, we deliver AI that works.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group cyber-card-enhanced">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases.slice(0, 3).map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our AI Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center cyber-card-enhanced">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our AI experts help you identify the best opportunities for AI implementation in your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Free AI Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AIServicesPage;