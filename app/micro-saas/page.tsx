import React from 'react';
import { Helmet } from 'react-helmet-async';
import FuturisticBackgroundAdvanced from '../components/FuturisticBackgroundAdvanced';
import FuturisticNavigation from '../components/FuturisticNavigation';
import FuturisticFooter from '../components/FuturisticFooter';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Mail, 
  Smartphone, 
  Globe, 
  Star, 
  CheckCircle, 
  Sparkles,
  Target,
  FileText,
  Bot,
  Cloud,
  Database,
  Settings,
  Monitor,
  Lock,
  Server,
  Cpu,
  Network,
  HardDrive,
  Smartphone as Phone,
  Laptop,
  Headphones,
  Award,
  Rocket,
  TrendingUp,
  Calendar,
  MessageSquare,
  Image,
  Video,
  Music,
  Palette,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Eye,
  Heart,
  ThumbsUp,
  Clock,
  DollarSign,
  Percent,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Play,
  Pause,
  Stop,
  RefreshCw,
  RotateCcw,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Maximize,
  Minimize,
  Move,
  Copy,
  Scissors,
  Clipboard,
  Bookmark,
  Tag,
  Flag,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalLow,
  SignalZero,
  SignalHigh,
  SignalMedium,
  Box,
  Link as LinkIcon,
  Code
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasServices = [
    // AI-Powered Business Solutions
    {
      id: 'zion-ai-analytics-pro',
      name: 'Zion AI Analytics Pro',
      description: 'Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated insights generation.',
      price: '$299/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics engine',
        'Automated report generation',
        'Custom dashboard builder',
        'Multi-source data integration',
        'AI-powered insights',
        'Mobile app included',
        '24/7 support'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI Analytics',
      link: '/zion-ai-analytics-pro',
      popular: true,
      rating: 4.9,
      users: '2,500+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-ai-crm-pro',
      name: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and predictive customer behavior analysis.',
      price: '$199/month',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Predictive analytics',
        'Email integration',
        'Sales pipeline management',
        'Customer segmentation',
        'Performance analytics',
        'Mobile CRM app'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'AI CRM',
      link: '/zion-ai-crm-pro',
      popular: true,
      rating: 4.8,
      users: '1,800+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-ai-content-generator',
      name: 'Zion AI Content Generator',
      description: 'AI-powered content creation platform that generates high-quality blog posts, social media content, and marketing copy in seconds.',
      price: '$149/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing copy',
        'SEO optimization',
        'Multi-language support',
        'Brand voice training',
        'Content calendar',
        'Plagiarism checker'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'AI Content',
      link: '/zion-ai-content-generator',
      popular: true,
      rating: 4.7,
      users: '3,200+',
      freeTrial: '7 days'
    },
    {
      id: 'zion-ai-video-generator',
      name: 'Zion AI Video Generator',
      description: 'Create professional videos from text prompts using advanced AI technology. Perfect for marketing, training, and social media content.',
      price: '$399/month',
      features: [
        'Text-to-video generation',
        'Multiple video styles',
        'Voice synthesis',
        'Background music library',
        'HD/4K export',
        'Brand customization',
        'Social media templates',
        'Batch processing'
      ],
      icon: <Video className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      category: 'AI Video',
      link: '/zion-ai-video-generator',
      popular: true,
      rating: 4.9,
      users: '1,500+',
      freeTrial: '7 days'
    },
    {
      id: 'zion-ai-customer-support',
      name: 'Zion AI Customer Support',
      description: 'Intelligent customer support system with AI chatbots, automated ticket routing, and sentiment analysis for enhanced customer experience.',
      price: '$249/month',
      features: [
        'AI chatbot integration',
        'Automated ticket routing',
        'Sentiment analysis',
        'Knowledge base management',
        'Multi-channel support',
        'Performance analytics',
        'Custom workflows',
        'API integration'
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'AI Support',
      link: '/zion-ai-customer-support',
      popular: true,
      rating: 4.8,
      users: '2,100+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-ai-marketing-automation',
      name: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered campaign optimization, lead nurturing, and personalized content delivery.',
      price: '$199/month',
      features: [
        'Email marketing automation',
        'Lead nurturing workflows',
        'Campaign optimization',
        'A/B testing',
        'Personalization engine',
        'Social media scheduling',
        'Analytics dashboard',
        'ROI tracking'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'AI Marketing',
      link: '/zion-ai-marketing-automation',
      popular: true,
      rating: 4.7,
      users: '2,800+',
      freeTrial: '14 days'
    },

    // New Innovative AI Services
    {
      id: 'zion-ai-3d-model-generator',
      name: 'Zion AI 3D Model Generator Pro',
      description: 'Create stunning 3D models from text descriptions or 2D images using advanced AI technology. Perfect for gaming, architecture, and product design.',
      icon: <Box className="w-8 h-8" />,
      price: 'Starting at $399/month',
      originalPrice: '$799/month',
      features: ['Text-to-3D Generation', 'Image-to-3D Conversion', 'High-Resolution Output', 'Multiple Formats', 'Animation Support', 'API Integration'],
      category: 'AI 3D Design',
      popular: true,
      link: '/zion-ai-3d-model-generator',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'zion-ai-voice-cloning-pro',
      name: 'Zion AI Voice Cloning Pro',
      description: 'Create realistic voice clones for narration, audiobooks, and voiceovers with just a few minutes of sample audio. Professional quality voice synthesis.',
      icon: <Mic className="w-8 h-8" />,
      price: 'Starting at $299/month',
      originalPrice: '$599/month',
      features: ['Voice Cloning', 'Emotion Control', 'Multiple Languages', 'Real-time Synthesis', 'Voice Library', 'Custom Training'],
      category: 'AI Voice',
      popular: true,
      link: '/zion-ai-voice-cloning-pro',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'zion-ai-code-generator-pro',
      name: 'Zion AI Code Generator Pro',
      description: 'Generate production-ready code from natural language descriptions. Supports 50+ programming languages with intelligent debugging and optimization.',
      icon: <Code className="w-8 h-8" />,
      price: 'Starting at $199/month',
      originalPrice: '$399/month',
      features: ['Natural Language to Code', '50+ Languages', 'Auto Debugging', 'Code Optimization', 'Documentation Generation', 'Version Control'],
      category: 'AI Development',
      popular: true,
      link: '/zion-ai-code-generator-pro',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'zion-ai-document-analyzer-pro',
      name: 'Zion AI Document Analyzer Pro',
      description: 'Intelligent document analysis with OCR, data extraction, and automated insights generation. Perfect for legal, financial, and research applications.',
      icon: <FileText className="w-8 h-8" />,
      price: 'Starting at $249/month',
      originalPrice: '$499/month',
      features: ['Advanced OCR', 'Data Extraction', 'Insight Generation', 'Document Classification', 'Search & Retrieval', 'Batch Processing'],
      category: 'AI Document Processing',
      popular: false,
      link: '/zion-ai-document-analyzer-pro',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'zion-ai-predictive-maintenance',
      name: 'Zion AI Predictive Maintenance Pro',
      description: 'Predict equipment failures before they happen with IoT sensors and machine learning. Reduce downtime and maintenance costs by up to 40%.',
      icon: <Settings className="w-8 h-8" />,
      price: 'Starting at $349/month',
      originalPrice: '$699/month',
      features: ['IoT Integration', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Real-time Alerts', 'Analytics Dashboard'],
      category: 'AI IoT',
      popular: true,
      link: '/zion-ai-predictive-maintenance',
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 'zion-ai-personalization-engine',
      name: 'Zion AI Personalization Engine Pro',
      description: 'Deliver hyper-personalized experiences across all touchpoints with advanced recommendation algorithms and behavioral analysis.',
      icon: <Target className="w-8 h-8" />,
      price: 'Starting at $279/month',
      originalPrice: '$559/month',
      features: ['Behavioral Analysis', 'Recommendation Engine', 'A/B Testing', 'Real-time Personalization', 'Cross-platform Sync', 'Performance Analytics'],
      category: 'AI Personalization',
      popular: true,
      link: '/zion-ai-personalization-engine',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      id: 'zion-ai-fraud-detection-pro',
      name: 'Zion AI Fraud Detection Pro',
      description: 'Advanced fraud detection system with real-time monitoring, pattern recognition, and automated risk assessment for financial transactions.',
      icon: <Shield className="w-8 h-8" />,
      price: 'Starting at $399/month',
      originalPrice: '$799/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Automated Alerts', 'Machine Learning Models', 'Compliance Reporting'],
      category: 'AI Security',
      popular: true,
      link: '/zion-ai-fraud-detection-pro',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'zion-ai-content-moderator-pro',
      name: 'Zion AI Content Moderator Pro',
      description: 'Automated content moderation with AI-powered detection of inappropriate content, spam, and policy violations across all platforms.',
      icon: <Eye className="w-8 h-8" />,
      price: 'Starting at $179/month',
      originalPrice: '$359/month',
      features: ['Content Detection', 'Spam Filtering', 'Policy Violations', 'Automated Actions', 'Custom Rules', 'Analytics Dashboard'],
      category: 'AI Moderation',
      popular: false,
      link: '/zion-ai-content-moderator-pro',
      color: 'from-slate-500 to-gray-500'
    },
    {
      id: 'zion-ai-recommendation-engine',
      name: 'Zion AI Recommendation Engine Pro',
      description: 'Powerful recommendation system that increases engagement and sales by up to 35% with personalized product and content suggestions.',
      icon: <TrendingUp className="w-8 h-8" />,
      price: 'Starting at $229/month',
      originalPrice: '$459/month',
      features: ['Collaborative Filtering', 'Content-based Filtering', 'Hybrid Algorithms', 'Real-time Updates', 'A/B Testing', 'Performance Metrics'],
      category: 'AI Recommendations',
      popular: true,
      link: '/zion-ai-recommendation-engine',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'zion-ai-chatbot-builder-pro',
      name: 'Zion AI Chatbot Builder Pro',
      description: 'Create intelligent chatbots without coding. Drag-and-drop interface with natural language processing and multi-platform deployment.',
      icon: <Bot className="w-8 h-8" />,
      price: 'Starting at $149/month',
      originalPrice: '$299/month',
      features: ['No-Code Builder', 'NLP Integration', 'Multi-platform', 'Analytics Dashboard', 'Custom Training', 'API Integration'],
      category: 'AI Chatbots',
      popular: true,
      link: '/zion-ai-chatbot-builder-pro',
      color: 'from-emerald-500 to-green-500'
    },

    // New IT Infrastructure Services
    {
      id: 'zion-cloud-native-platform',
      name: 'Zion Cloud Native Platform Pro',
      description: 'Complete cloud-native development platform with Kubernetes orchestration, microservices architecture, and automated CI/CD pipelines.',
      icon: <Cloud className="w-8 h-8" />,
      price: 'Starting at $399/month',
      originalPrice: '$799/month',
      features: ['Kubernetes Orchestration', 'Microservices Architecture', 'Auto-scaling', 'Service Mesh', 'Monitoring & Logging', 'Security Hardening'],
      category: 'Cloud Native',
      popular: true,
      link: '/zion-cloud-native-platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'zion-edge-computing-suite',
      name: 'Zion Edge Computing Suite Pro',
      description: 'Deploy applications closer to users with edge computing infrastructure. Reduce latency by up to 80% and improve user experience.',
      icon: <Wifi className="w-8 h-8" />,
      price: 'Starting at $299/month',
      originalPrice: '$599/month',
      features: ['Global Edge Network', 'Low Latency', 'CDN Integration', 'Edge Analytics', 'Auto-scaling', 'Security'],
      category: 'Edge Computing',
      popular: true,
      link: '/zion-edge-computing-suite',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'zion-blockchain-platform',
      name: 'Zion Blockchain Platform Pro',
      description: 'Enterprise blockchain solutions with smart contracts, DeFi protocols, and NFT marketplaces. Built for scalability and security.',
      icon: <LinkIcon className="w-8 h-8" />,
      price: 'Starting at $499/month',
      originalPrice: '$999/month',
      features: ['Smart Contracts', 'DeFi Protocols', 'NFT Marketplace', 'Cross-chain', 'Security Audits', 'API Integration'],
      category: 'Blockchain',
      popular: true,
      link: '/zion-blockchain-platform',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'zion-iot-management-platform',
      name: 'Zion IoT Management Platform Pro',
      description: 'Comprehensive IoT device management with real-time monitoring, data analytics, and automated device provisioning for smart cities.',
      icon: <Wifi className="w-8 h-8" />,
      price: 'Starting at $349/month',
      originalPrice: '$699/month',
      features: ['Device Management', 'Real-time Monitoring', 'Data Analytics', 'Automated Provisioning', 'Security', 'Scalability'],
      category: 'IoT Management',
      popular: false,
      link: '/zion-iot-management-platform',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'zion-api-gateway-pro',
      name: 'Zion API Gateway Pro',
      description: 'Enterprise API management with rate limiting, authentication, monitoring, and analytics. Secure and scale your APIs effortlessly.',
      icon: <Network className="w-8 h-8" />,
      price: 'Starting at $199/month',
      originalPrice: '$399/month',
      features: ['Rate Limiting', 'Authentication', 'API Monitoring', 'Analytics', 'Documentation', 'Developer Portal'],
      category: 'API Management',
      popular: true,
      link: '/zion-api-gateway-pro',
      color: 'from-purple-500 to-pink-500'
    },

    // New Business Intelligence Services
    {
      id: 'zion-real-time-analytics-pro',
      name: 'Zion Real-time Analytics Pro',
      description: 'Process and analyze data in real-time with sub-second latency. Perfect for financial trading, gaming, and IoT applications.',
      icon: <Activity className="w-8 h-8" />,
      price: 'Starting at $399/month',
      originalPrice: '$799/month',
      features: ['Sub-second Latency', 'Stream Processing', 'Real-time Dashboards', 'Alert System', 'Scalable Architecture', 'Data Visualization'],
      category: 'Real-time Analytics',
      popular: true,
      link: '/zion-real-time-analytics-pro',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'zion-data-warehouse-pro',
      name: 'Zion Data Warehouse Pro',
      description: 'Enterprise data warehouse with automated ETL processes, data modeling, and advanced analytics. Handle petabytes of data efficiently.',
      icon: <Database className="w-8 h-8" />,
      price: 'Starting at $499/month',
      originalPrice: '$999/month',
      features: ['Automated ETL', 'Data Modeling', 'Advanced Analytics', 'Data Governance', 'Scalability', 'Security'],
      category: 'Data Warehouse',
      popular: true,
      link: '/zion-data-warehouse-pro',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'zion-mlops-platform',
      name: 'Zion MLOps Platform Pro',
      description: 'Complete machine learning operations platform with model training, deployment, monitoring, and automated retraining pipelines.',
      icon: <Cpu className="w-8 h-8" />,
      price: 'Starting at $449/month',
      originalPrice: '$899/month',
      features: ['Model Training', 'Auto Deployment', 'Model Monitoring', 'A/B Testing', 'Auto Retraining', 'Version Control'],
      category: 'MLOps',
      popular: true,
      link: '/zion-mlops-platform',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const categories = [
    { name: 'All Services', count: microSaasServices.length, color: 'from-cyan-500 to-purple-500' },
    { name: 'AI Analytics', count: microSaasServices.filter(s => s.category.includes('Analytics')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Finance', count: microSaasServices.filter(s => s.category.includes('Finance')).length, color: 'from-green-500 to-emerald-500' },
    { name: 'AI Video', count: microSaasServices.filter(s => s.category.includes('Video')).length, color: 'from-purple-500 to-pink-500' },
    { name: 'AI Communication', count: microSaasServices.filter(s => s.category.includes('Communication')).length, color: 'from-orange-500 to-red-500' },
    { name: 'AI Development', count: microSaasServices.filter(s => s.category.includes('Development')).length, color: 'from-yellow-500 to-orange-500' },
    { name: 'AI Social Media', count: microSaasServices.filter(s => s.category.includes('Social Media')).length, color: 'from-violet-500 to-purple-500' },
    { name: 'AI Legal', count: microSaasServices.filter(s => s.category.includes('Legal')).length, color: 'from-slate-500 to-gray-500' },
    { name: 'AI Performance', count: microSaasServices.filter(s => s.category.includes('Performance')).length, color: 'from-teal-500 to-cyan-500' },
    { name: 'AI Supply Chain', count: microSaasServices.filter(s => s.category.includes('Supply Chain')).length, color: 'from-indigo-500 to-blue-500' },
    { name: 'AI Moderation', count: microSaasServices.filter(s => s.category.includes('Moderation')).length, color: 'from-red-500 to-orange-500' },
    { name: 'AI Translation', count: microSaasServices.filter(s => s.category.includes('Translation')).length, color: 'from-cyan-500 to-teal-500' },
    { name: 'AI Data', count: microSaasServices.filter(s => s.category.includes('Data')).length, color: 'from-purple-500 to-violet-500' },
    { name: 'AI Productivity', count: microSaasServices.filter(s => s.category.includes('Productivity')).length, color: 'from-orange-500 to-amber-500' },
    { name: 'AI Support', count: microSaasServices.filter(s => s.category.includes('Support')).length, color: 'from-blue-500 to-indigo-500' },
    { name: 'AI 3D Design', count: microSaasServices.filter(s => s.category.includes('3D Design')).length, color: 'from-purple-500 to-violet-500' },
    { name: 'AI Voice', count: microSaasServices.filter(s => s.category.includes('Voice')).length, color: 'from-pink-500 to-rose-500' },
    { name: 'AI Document Processing', count: microSaasServices.filter(s => s.category.includes('Document Processing')).length, color: 'from-indigo-500 to-blue-500' },
    { name: 'AI IoT', count: microSaasServices.filter(s => s.category.includes('IoT')).length, color: 'from-orange-500 to-amber-500' },
    { name: 'AI Personalization', count: microSaasServices.filter(s => s.category.includes('Personalization')).length, color: 'from-cyan-500 to-teal-500' },
    { name: 'AI Security', count: microSaasServices.filter(s => s.category.includes('Security')).length, color: 'from-red-500 to-pink-500' },
    { name: 'AI Recommendations', count: microSaasServices.filter(s => s.category.includes('Recommendations')).length, color: 'from-violet-500 to-purple-500' },
    { name: 'AI Chatbots', count: microSaasServices.filter(s => s.category.includes('Chatbots')).length, color: 'from-emerald-500 to-green-500' },
    { name: 'Cloud Native', count: microSaasServices.filter(s => s.category.includes('Cloud Native')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'Edge Computing', count: microSaasServices.filter(s => s.category.includes('Edge Computing')).length, color: 'from-cyan-500 to-blue-500' },
    { name: 'Blockchain', count: microSaasServices.filter(s => s.category.includes('Blockchain')).length, color: 'from-yellow-500 to-orange-500' },
    { name: 'IoT Management', count: microSaasServices.filter(s => s.category.includes('IoT Management')).length, color: 'from-green-500 to-emerald-500' },
    { name: 'API Management', count: microSaasServices.filter(s => s.category.includes('API Management')).length, color: 'from-purple-500 to-pink-500' },
    { name: 'Real-time Analytics', count: microSaasServices.filter(s => s.category.includes('Real-time Analytics')).length, color: 'from-red-500 to-orange-500' },
    { name: 'Data Warehouse', count: microSaasServices.filter(s => s.category.includes('Data Warehouse')).length, color: 'from-indigo-500 to-purple-500' },
    { name: 'MLOps', count: microSaasServices.filter(s => s.category.includes('MLOps')).length, color: 'from-teal-500 to-cyan-500' }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> },
    { number: '25,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion AI Analytics Pro transformed our data insights. We increased our conversion rate by 40% in just 3 months.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      role: 'CTO',
      content: 'The AI CRM system is incredible. Our sales team productivity increased by 60% with automated lead scoring.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Marketing Agency',
      role: 'Operations Director',
      content: 'Zion AI Content Generator saves us 20 hours per week. The quality is outstanding and our clients love it.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <FuturisticBackgroundAdvanced variant="neon" intensity="high" animated={true}>
      <FuturisticNavigation />
      
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of AI-powered micro SAAS solutions. From video generation to customer insights, we provide ready-to-use business tools that transform your operations."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI tools, business automation, video generator, invoice generator, customer insights, social media manager, AI analytics, business software"
        />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ AI-Powered Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use AI-powered business tools that transform your operations. 
              From video generation to customer insights, our micro SAAS solutions are designed for immediate deployment and maximum impact.
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/20 hover:border-cyan-500/50"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="mr-2">{service.rating}</span>
                        <span>•</span>
                        <span className="ml-2">{service.users} users</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    {service.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                    )}
                    <div className="text-sm text-gray-400">{service.freeTrial} free trial</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                      Try Free
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our micro SAAS solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
                Start your free trial today and experience the power of AI-driven automation.
              </p>
              
              {/* Contact Information */}
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
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Discuss Your Needs
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Schedule Demo
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <FuturisticFooter />
    </FuturisticBackgroundAdvanced>
  );
};

export default MicroSaasPage;