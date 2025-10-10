'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
  Lock,
  Mail,
  Smartphone,
  Code,
  Sparkles,
  Award,
  DollarSign,
  Calendar,
  Cloud,
  Wifi,
  Camera,
  Headphones,
  Monitor,
  Server,
  HardDrive,
  Wrench,
  Lightbulb,
  Rocket,
  Layers,
  Activity,
  PieChart,
  LineChart,
  TrendingDown,
  AlertTriangle,
  CheckSquare,
  XCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Copy,
  Trash2,
  Edit,
  Save,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Map,
  MapPin,
  Navigation,
  Compass,
  Globe2,
  Earth,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Flame,
  Snowflake,
  Zap as Lightning,
  Wifi as WifiIcon,
  WifiOff,
  Signal,
  SignalZero,
  SignalOne,
  SignalTwo,
  SignalThree,
  Battery,
  BatteryLow,
  BatteryMedium,
  BatteryHigh,
  BatteryFull,
  Power,
  PowerOff,
  Plug,
  Unplug,
  Charging,
  BatteryCharging,
  BatteryWarning,
  BatteryAlert,
  BatteryCritical,
  BatteryDead,
  BatteryEmpty,
  BatteryHalf,
  BatteryQuarter,
  BatteryThreeQuarters,
  BatteryUnknown,
  BatteryX,
  BatteryCheck,
  BatteryMinus,
  BatteryPlus,
  BatterySlash,
  BatteryXmark,
  BatteryExclamation,
  BatteryQuestion,
  BatteryInfo,
  BatteryExclamationTriangle,
  BatteryExclamationMark,
  BatteryExclamationCircle,
  BatteryExclamationSquare,
  BatteryExclamationDiamond,
  BatteryExclamationHexagon,
  BatteryExclamationOctagon,
  BatteryExclamationTriangleFill,
  BatteryExclamationMarkFill,
  BatteryExclamationCircleFill,
  BatteryExclamationSquareFill,
  BatteryExclamationDiamondFill,
  BatteryExclamationHexagonFill,
  BatteryExclamationOctagonFill
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  marketPrice: string;
  savings: string;
  rating: number;
  reviews: number;
  launchDate: string;
  integrations: string[];
  useCases: string[];
  benefits: string[];
  technicalSpecs: {
    accuracy: string;
    processingSpeed: string;
    dataCapacity: string;
    languages: string[];
    apis: string[];
  };
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices: AIService[] = [
    // Core AI Services
    {
      id: '1',
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced AI-driven business intelligence platform that transforms raw data into actionable insights with 95% accuracy and real-time processing.',
      features: [
        'Real-time data processing and analysis',
        'Predictive analytics with 95% accuracy',
        'Natural language query interface',
        'Automated report generation',
        'Custom dashboard creation',
        'Multi-source data integration',
        'Advanced visualization tools',
        'Machine learning model deployment'
      ],
      price: '$2,999/month',
      category: 'Business Intelligence',
      popular: true,
      marketPrice: '$4,999/month',
      savings: '40% off',
      rating: 4.9,
      reviews: 1847,
      launchDate: '2024-01-15',
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'AWS', 'Azure', 'Snowflake', 'Tableau', 'Power BI'],
      useCases: ['Financial forecasting', 'Customer behavior analysis', 'Market trend prediction', 'Operational optimization'],
      benefits: ['50% faster decision making', '30% cost reduction', '95% accuracy in predictions', 'Real-time insights'],
      technicalSpecs: {
        accuracy: '95%',
        processingSpeed: '< 100ms',
        dataCapacity: 'Unlimited',
        languages: ['Python', 'R', 'SQL', 'JavaScript'],
        apis: ['REST', 'GraphQL', 'WebSocket', 'gRPC']
      }
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'AI Customer Support Suite',
      description: 'Revolutionary AI-powered customer support system with natural language processing, sentiment analysis, and automated resolution capabilities.',
      features: [
        'Advanced NLP and intent recognition',
        'Multi-channel support (web, mobile, social)',
        'Sentiment analysis and emotion detection',
        'Automated ticket routing and resolution',
        'Knowledge base integration',
        'Human handoff automation',
        'Real-time analytics and reporting',
        'Voice and video support'
      ],
      price: '$1,499/month',
      category: 'Customer Support',
      popular: true,
      marketPrice: '$2,499/month',
      savings: '40% off',
      rating: 4.8,
      reviews: 2156,
      launchDate: '2024-02-01',
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook Messenger'],
      useCases: ['24/7 customer support', 'Ticket automation', 'Customer satisfaction improvement', 'Support team optimization'],
      benefits: ['80% faster response times', '60% reduction in support costs', '95% customer satisfaction', '24/7 availability'],
      technicalSpecs: {
        accuracy: '92%',
        processingSpeed: '< 200ms',
        dataCapacity: '10M+ conversations',
        languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'],
        apis: ['REST', 'WebSocket', 'Webhook', 'SDK']
      }
    },
    {
      id: '3',
      icon: Eye,
      title: 'AI Computer Vision Platform',
      description: 'Advanced computer vision platform with object detection, image recognition, and video analysis capabilities for various industries.',
      features: [
        'Object detection and classification',
        'Facial recognition and analysis',
        'OCR and text extraction',
        'Video content analysis',
        'Real-time image processing',
        'Custom model training',
        'API integration',
        'Cloud and edge deployment'
      ],
      price: '$1,999/month',
      category: 'Computer Vision',
      popular: false,
      marketPrice: '$3,499/month',
      savings: '43% off',
      rating: 4.7,
      reviews: 1234,
      launchDate: '2024-01-20',
      integrations: ['AWS Rekognition', 'Google Vision', 'Azure Computer Vision', 'OpenCV', 'TensorFlow', 'PyTorch'],
      useCases: ['Quality control', 'Security monitoring', 'Medical imaging', 'Autonomous vehicles'],
      benefits: ['99% accuracy in object detection', 'Real-time processing', 'Scalable infrastructure', 'Custom model support'],
      technicalSpecs: {
        accuracy: '99%',
        processingSpeed: '< 50ms',
        dataCapacity: '100M+ images',
        languages: ['Python', 'C++', 'JavaScript', 'Go'],
        apis: ['REST', 'gRPC', 'WebSocket', 'GraphQL']
      }
    },
    {
      id: '4',
      icon: Mic,
      title: 'AI Voice & Speech Processing',
      description: 'Comprehensive voice and speech processing platform with speech-to-text, text-to-speech, and voice analytics capabilities.',
      features: [
        'High-accuracy speech-to-text (99%+)',
        'Natural text-to-speech synthesis',
        'Voice biometrics and authentication',
        'Real-time transcription',
        'Multi-language support',
        'Voice emotion analysis',
        'Custom voice model training',
        'API and SDK integration'
      ],
      price: '$1,299/month',
      category: 'Voice Processing',
      popular: true,
      marketPrice: '$2,199/month',
      savings: '41% off',
      rating: 4.8,
      reviews: 1678,
      launchDate: '2024-02-05',
      integrations: ['AWS Polly', 'Google Cloud Speech', 'Azure Speech', 'Twilio', 'Vonage', 'Zoom'],
      useCases: ['Call center automation', 'Voice assistants', 'Accessibility tools', 'Language learning'],
      benefits: ['99%+ accuracy', 'Real-time processing', 'Multi-language support', 'Custom voice models'],
      technicalSpecs: {
        accuracy: '99%+',
        processingSpeed: '< 100ms',
        dataCapacity: 'Unlimited',
        languages: ['50+ languages'],
        apis: ['REST', 'WebSocket', 'gRPC', 'WebRTC']
      }
    },
    {
      id: '5',
      icon: BarChart,
      title: 'AI Predictive Analytics Engine',
      description: 'Advanced predictive analytics platform that uses machine learning to forecast trends, behaviors, and outcomes with high accuracy.',
      features: [
        'Time series forecasting',
        'Customer behavior prediction',
        'Demand forecasting',
        'Risk assessment and modeling',
        'Anomaly detection',
        'Automated model selection',
        'Real-time predictions',
        'Custom algorithm development'
      ],
      price: '$2,499/month',
      category: 'Predictive Analytics',
      popular: true,
      marketPrice: '$4,199/month',
      savings: '40% off',
      rating: 4.9,
      reviews: 1456,
      launchDate: '2024-01-10',
      integrations: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
      useCases: ['Sales forecasting', 'Inventory optimization', 'Customer churn prediction', 'Financial risk analysis'],
      benefits: ['90%+ prediction accuracy', 'Automated model training', 'Real-time insights', 'Scalable processing'],
      technicalSpecs: {
        accuracy: '90%+',
        processingSpeed: '< 500ms',
        dataCapacity: 'Unlimited',
        languages: ['Python', 'R', 'SQL', 'Julia'],
        apis: ['REST', 'GraphQL', 'gRPC', 'WebSocket']
      }
    },
    {
      id: '6',
      icon: Target,
      title: 'AI Marketing Automation Platform',
      description: 'Intelligent marketing automation platform that personalizes campaigns, optimizes ad spend, and maximizes ROI using AI.',
      features: [
        'AI-powered campaign personalization',
        'Predictive customer segmentation',
        'Automated A/B testing',
        'Dynamic content optimization',
        'Cross-channel campaign management',
        'Real-time performance analytics',
        'Customer journey mapping',
        'ROI optimization algorithms'
      ],
      price: '$1,799/month',
      category: 'Marketing',
      popular: true,
      marketPrice: '$2,999/month',
      savings: '40% off',
      rating: 4.7,
      reviews: 1987,
      launchDate: '2024-02-15',
      integrations: ['HubSpot', 'Salesforce', 'Mailchimp', 'Facebook Ads', 'Google Ads', 'LinkedIn Ads'],
      useCases: ['Email marketing', 'Social media advertising', 'Content personalization', 'Lead nurturing'],
      benefits: ['40% increase in conversion rates', '30% reduction in ad spend', 'Personalized experiences', 'Automated optimization'],
      technicalSpecs: {
        accuracy: '85%',
        processingSpeed: '< 300ms',
        dataCapacity: '50M+ contacts',
        languages: ['Python', 'JavaScript', 'SQL', 'R'],
        apis: ['REST', 'GraphQL', 'Webhook', 'SDK']
      }
    },
    {
      id: '7',
      icon: Shield,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity platform that detects threats, prevents attacks, and protects digital assets in real-time.',
      features: [
        'AI threat detection and prevention',
        'Behavioral analysis and anomaly detection',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Security orchestration',
        'Threat intelligence integration',
        'Real-time monitoring and alerting'
      ],
      price: '$2,999/month',
      category: 'Cybersecurity',
      popular: false,
      marketPrice: '$4,999/month',
      savings: '40% off',
      rating: 4.8,
      reviews: 1123,
      launchDate: '2024-01-25',
      integrations: ['Splunk', 'QRadar', 'CrowdStrike', 'Palo Alto', 'Cisco', 'Fortinet'],
      useCases: ['Threat detection', 'Incident response', 'Compliance management', 'Security monitoring'],
      benefits: ['99.9% threat detection rate', 'Real-time protection', 'Automated response', 'Compliance assurance'],
      technicalSpecs: {
        accuracy: '99.9%',
        processingSpeed: '< 10ms',
        dataCapacity: 'Unlimited',
        languages: ['Python', 'Go', 'C++', 'Rust'],
        apis: ['REST', 'gRPC', 'WebSocket', 'Webhook']
      }
    },
    {
      id: '8',
      icon: FileText,
      title: 'AI Document Processing System',
      description: 'Intelligent document processing platform that extracts, analyzes, and processes documents with high accuracy and speed.',
      features: [
        'OCR and text extraction',
        'Document classification',
        'Data extraction and validation',
        'Automated document routing',
        'Compliance checking',
        'Multi-format support',
        'Batch processing',
        'API integration'
      ],
      price: '$999/month',
      category: 'Document Processing',
      popular: true,
      marketPrice: '$1,699/month',
      savings: '41% off',
      rating: 4.6,
      reviews: 876,
      launchDate: '2024-02-10',
      integrations: ['AWS Textract', 'Google Document AI', 'Azure Form Recognizer', 'Adobe Acrobat'],
      useCases: ['Invoice processing', 'Contract analysis', 'Compliance checking', 'Data extraction'],
      benefits: ['95% accuracy in extraction', '50% faster processing', 'Automated validation', 'Multi-format support'],
      technicalSpecs: {
        accuracy: '95%',
        processingSpeed: '< 2 seconds',
        dataCapacity: '1M+ documents',
        languages: ['Python', 'Java', 'C#', 'JavaScript'],
        apis: ['REST', 'GraphQL', 'Webhook', 'Batch API']
      }
    },
    {
      id: '9',
      icon: Search,
      title: 'AI Search & Discovery Engine',
      description: 'Intelligent search and discovery platform that provides relevant results using natural language processing and machine learning.',
      features: [
        'Natural language search',
        'Semantic search capabilities',
        'Personalized recommendations',
        'Real-time indexing',
        'Multi-language support',
        'Voice search integration',
        'Analytics and insights',
        'Custom ranking algorithms'
      ],
      price: '$1,399/month',
      category: 'Search & Discovery',
      popular: false,
      marketPrice: '$2,299/month',
      savings: '39% off',
      rating: 4.7,
      reviews: 1345,
      launchDate: '2024-01-30',
      integrations: ['Elasticsearch', 'Solr', 'Algolia', 'Google Search', 'Bing', 'Amazon CloudSearch'],
      useCases: ['E-commerce search', 'Content discovery', 'Knowledge management', 'Customer support'],
      benefits: ['90% relevance accuracy', 'Real-time search', 'Personalized results', 'Multi-language support'],
      technicalSpecs: {
        accuracy: '90%',
        processingSpeed: '< 100ms',
        dataCapacity: '100M+ documents',
        languages: ['Python', 'Java', 'Go', 'C++'],
        apis: ['REST', 'GraphQL', 'WebSocket', 'gRPC']
      }
    },
    {
      id: '10',
      icon: Users,
      title: 'AI HR & Talent Management',
      description: 'Comprehensive AI-powered HR platform that streamlines recruitment, employee management, and talent development.',
      features: [
        'AI-powered resume screening',
        'Candidate matching and ranking',
        'Interview scheduling automation',
        'Employee performance analytics',
        'Skills gap analysis',
        'Training recommendations',
        'Retention prediction',
        'Diversity and inclusion insights'
      ],
      price: '$1,599/month',
      category: 'HR & Talent',
      popular: true,
      marketPrice: '$2,599/month',
      savings: '38% off',
      rating: 4.8,
      reviews: 1567,
      launchDate: '2024-02-20',
      integrations: ['Workday', 'BambooHR', 'ADP', 'LinkedIn', 'Indeed', 'Glassdoor'],
      useCases: ['Recruitment automation', 'Performance management', 'Talent development', 'Employee engagement'],
      benefits: ['60% faster hiring', 'Better candidate matching', 'Reduced bias', 'Improved retention'],
      technicalSpecs: {
        accuracy: '88%',
        processingSpeed: '< 200ms',
        dataCapacity: '1M+ profiles',
        languages: ['Python', 'R', 'SQL', 'JavaScript'],
        apis: ['REST', 'GraphQL', 'Webhook', 'SDK']
      }
    }
  ];

  const categories = [
    'All',
    'Business Intelligence',
    'Customer Support',
    'Computer Vision',
    'Voice Processing',
    'Predictive Analytics',
    'Marketing',
    'Cybersecurity',
    'Document Processing',
    'Search & Discovery',
    'HR & Talent'
  ];

  const benefits = [
    'Increase efficiency by up to 60%',
    'Reduce operational costs by 40%',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology',
    '24/7 automated operations',
    'Real-time data processing',
    'Custom AI model development'
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | 10+ Advanced AI Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including business intelligence, computer vision, voice processing, predictive analytics, and more. Real market pricing starting from $999/month." />
        <meta name="keywords" content="AI services, artificial intelligence, business intelligence, computer vision, voice processing, predictive analytics, AI automation, machine learning" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="10+ Advanced AI Solutions with Real Market Pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight holographic-text cyber-text glitch" data-text="AI Services">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span className="text-cyan-400 font-semibold">10+ Advanced AI Solutions</span> with real market pricing. 
              Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
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
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive collection of <span className="text-cyan-400 font-semibold">10+ AI solutions</span> designed to transform your business operations.
              </p>
              <div className="mt-4 text-cyan-400 font-semibold">
                {filteredServices.length} services found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative cyber-card hologram-card p-6 border transition-all duration-300 group hover:scale-105 ${
                    service.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20 shadow-2xl shadow-cyan-500/25'
                      : 'border-cyan-500/20 hover:border-cyan-400/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4 quantum-field">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">{service.savings}</span>
                      </div>
                      <div className="text-gray-400 text-sm">{service.category}</div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({service.reviews} reviews)</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm ml-7">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Technical Specs:</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-700/50 p-2 rounded">
                        <div className="text-cyan-400">Accuracy</div>
                        <div className="text-white">{service.technicalSpecs.accuracy}</div>
                      </div>
                      <div className="bg-slate-700/50 p-2 rounded">
                        <div className="text-cyan-400">Speed</div>
                        <div className="text-white">{service.technicalSpecs.processingSpeed}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Use Cases:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases.slice(0, 2).map((useCase, index) => (
                        <span key={index} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                      {service.useCases.length > 2 && (
                        <span className="text-xs text-gray-400">+{service.useCases.length - 2} more</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-slate-700/50 text-white border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Proven results that drive <span className="text-cyan-400 font-semibold">business growth and efficiency</span> with cutting-edge AI technology.
              </p>
            </div>

            <div className="cyber-card hologram-card p-8 md:p-12 border border-cyan-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 md:p-16 border border-cyan-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Choose from <span className="text-cyan-400 font-semibold">10+ AI solutions</span> that fit your business needs. 
                  Get started with a free consultation and see the power of AI in action.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                    <div className="text-gray-300">AI Solutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                    <div className="text-gray-300">Average Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                    <div className="text-gray-300">Accuracy Rate</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="cyber-button bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                    <Phone className="w-6 h-6" />
                    Get Free Consultation
                  </button>
                  <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3">
                    <Brain className="w-6 h-6" />
                    View AI Demo
                  </button>
                </div>
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