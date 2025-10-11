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
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Cpu,
  Link as LinkIcon,
  Server,
  Globe,
  Database,
  Smartphone,
  Lock,
  DollarSign,
  Calendar,
  Mail,
  Code,
  Workflow,
  Sparkles,
  Award,
  Lightbulb,
  Gauge,
  Phone,
  MapPin,
  BarChart3,
  MessageCircle,
  ShoppingCart,
  Wifi,
  Monitor,
  Headphones,
  Package,
  Rocket,
  Layers,
  Activity,
  PieChart,
  TrendingDown,
  RefreshCw,
  Search,
  Filter,
  ChevronDown
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    // Customer Service & Support
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing, sentiment analysis, and multi-channel support for superior customer experience.',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'CRM integration',
        'Real-time learning',
        'Voice integration',
        'Custom training',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 availability',
        'Instant responses',
        'Scalable solutions',
        'Improved customer satisfaction',
        'Lead generation'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare,
      setupTime: '2-3 days',
      users: 'Unlimited'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Suite',
      description: 'Comprehensive AI-powered customer support with omnichannel communication, intelligent routing, and automated resolution.',
      price: '$499/month',
      marketPrice: '$800-3000/month',
      features: [
        'Omnichannel support',
        'Intelligent ticket routing',
        'Automated resolution',
        'Knowledge base integration',
        'Live agent handoff',
        'Performance analytics',
        'Multi-language support',
        'Custom workflows'
      ],
      benefits: [
        'Improve response time by 80%',
        'Reduce support costs by 50%',
        'Better customer satisfaction',
        '24/7 availability',
        'Scalable support',
        'Data-driven insights'
      ],
      category: 'Customer Service',
      popular: true,
      icon: Headphones,
      setupTime: '1-2 weeks',
      users: 'Unlimited'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant Platform',
      description: 'Enterprise-grade voice AI with speech recognition, natural language understanding, and voice synthesis for phone and IVR systems.',
      price: '$399/month',
      marketPrice: '$700-2500/month',
      features: [
        'Speech recognition',
        'Natural language understanding',
        'Voice synthesis',
        'IVR integration',
        'Multi-language support',
        'Custom voice training',
        'Real-time processing',
        'Analytics & reporting'
      ],
      benefits: [
        'Reduce call center costs by 40%',
        'Improve call handling efficiency',
        'Better customer experience',
        '24/7 voice support',
        'Scalable voice solutions',
        'Cost-effective operations'
      ],
      category: 'Voice AI',
      popular: false,
      icon: Mic,
      setupTime: '2-3 weeks',
      users: 'Unlimited'
    },

    // Content & Marketing
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation Pro',
      description: 'Advanced AI content creation with GPT-4 integration, brand voice training, SEO optimization, and multi-format content generation.',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: [
        'GPT-4 powered writing',
        'Brand voice training',
        'SEO optimization',
        'Multi-format content',
        'Content scheduling',
        'Plagiarism detection',
        'Multi-language support',
        'Team collaboration'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO-optimized content',
        'Higher engagement rates',
        'Cost-effective content',
        'Scalable content production'
      ],
      category: 'Content',
      popular: true,
      icon: FileText,
      setupTime: '1-2 days',
      users: 'Up to 20 users'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing automation with AI-powered campaign optimization, lead scoring, and personalized customer journeys.',
      price: '$349/month',
      marketPrice: '$600-2000/month',
      features: [
        'Campaign optimization',
        'Lead scoring & nurturing',
        'Personalized journeys',
        'A/B testing automation',
        'Email marketing AI',
        'Social media automation',
        'Analytics & insights',
        'ROI tracking'
      ],
      benefits: [
        'Increase conversions by 60%',
        'Better lead quality',
        'Automated personalization',
        'Higher engagement rates',
        'Cost-effective marketing',
        'Data-driven decisions'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target,
      setupTime: '1-2 weeks',
      users: 'Up to 25 users'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Advanced SEO analysis and optimization with AI-powered keyword research, content suggestions, and ranking tracking.',
      price: '$149/month',
      marketPrice: '$250-800/month',
      features: [
        'AI keyword research',
        'Content optimization',
        'Ranking tracking',
        'Competitor analysis',
        'Technical SEO audit',
        'Link building suggestions',
        'Performance monitoring',
        'Automated reporting'
      ],
      benefits: [
        'Increase organic traffic by 150%',
        'Better search rankings',
        'Automated optimization',
        'Competitive advantage',
        'Time savings',
        'ROI tracking'
      ],
      category: 'SEO',
      popular: false,
      icon: Search,
      setupTime: '3-5 days',
      users: 'Up to 15 users'
    },

    // Analytics & Business Intelligence
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics Platform',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms with predictive modeling and real-time insights.',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models',
        'API integrations',
        'Mobile app access',
        'Team collaboration'
      ],
      benefits: [
        'Data-driven insights',
        'Predictive forecasting',
        'Automated reporting',
        'ROI optimization',
        'Better decision making',
        'Competitive advantage'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart3,
      setupTime: '1-2 weeks',
      users: 'Up to 30 users'
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      description: 'Advanced predictive modeling with machine learning algorithms for forecasting, trend analysis, and business intelligence.',
      price: '$599/month',
      marketPrice: '$1000-4000/month',
      features: [
        'Machine learning models',
        'Forecasting algorithms',
        'Trend analysis',
        'Risk assessment',
        'Scenario planning',
        'Custom model training',
        'Real-time predictions',
        'API integration'
      ],
      benefits: [
        'Accurate predictions',
        'Better planning',
        'Risk mitigation',
        'Cost optimization',
        'Competitive advantage',
        'Data-driven strategy'
      ],
      category: 'Analytics',
      popular: false,
      icon: TrendingUp,
      setupTime: '2-3 weeks',
      users: 'Up to 25 users'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Comprehensive BI solution with AI-powered insights, automated reporting, and intelligent data visualization.',
      price: '$449/month',
      marketPrice: '$800-2500/month',
      features: [
        'AI-powered insights',
        'Automated reporting',
        'Data visualization',
        'Custom dashboards',
        'KPI tracking',
        'Alert systems',
        'Mobile access',
        'Team collaboration'
      ],
      benefits: [
        'Better business insights',
        'Automated reporting',
        'Improved decision making',
        'Time savings',
        'Cost optimization',
        'Competitive advantage'
      ],
      category: 'Business Intelligence',
      popular: false,
      icon: PieChart,
      setupTime: '1-2 weeks',
      users: 'Up to 35 users'
    },

    // Computer Vision & Image Processing
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Advanced image and video analysis solutions for quality control, security, automation, and business intelligence.',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Object detection & recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing',
        'Custom model training',
        'API integration',
        'Cloud & edge deployment'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Real-time monitoring',
        'Cost reduction',
        'Improved accuracy',
        'Scalable solutions'
      ],
      category: 'Computer Vision',
      popular: true,
      icon: Eye,
      setupTime: '2-4 weeks',
      users: 'Unlimited'
    },
    {
      id: 'ai-image-recognition',
      name: 'AI Image Recognition',
      description: 'Intelligent image recognition and classification with custom model training for specific business needs.',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Image classification',
        'Object detection',
        'Custom model training',
        'Batch processing',
        'API integration',
        'Real-time analysis',
        'Multi-format support',
        'Cloud processing'
      ],
      benefits: [
        'Automated image processing',
        'Custom solutions',
        'High accuracy',
        'Cost-effective',
        'Scalable processing',
        'Time savings'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Eye,
      setupTime: '1-2 weeks',
      users: 'Unlimited'
    },

    // Automation & Workflow
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation with AI decision-making, exception handling, and performance optimization.',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring',
        'Custom workflows',
        'Integration capabilities',
        'Audit trails'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation',
        'Better compliance',
        'Time optimization'
      ],
      category: 'Automation',
      popular: true,
      icon: Workflow,
      setupTime: '2-3 weeks',
      users: 'Up to 30 users'
    },
    {
      id: 'ai-robotic-process-automation',
      name: 'AI Robotic Process Automation',
      description: 'Advanced RPA with AI capabilities for complex business process automation and intelligent decision making.',
      price: '$499/month',
      marketPrice: '$800-3000/month',
      features: [
        'AI-powered RPA',
        'Complex process automation',
        'Intelligent decision making',
        'Exception handling',
        'Process optimization',
        'Integration capabilities',
        'Monitoring & analytics',
        'Scalable deployment'
      ],
      benefits: [
        'Reduce manual work by 90%',
        'Improved accuracy',
        'Cost savings',
        'Better compliance',
        'Scalable automation',
        'ROI optimization'
      ],
      category: 'Automation',
      popular: false,
      icon: Settings,
      setupTime: '3-4 weeks',
      users: 'Up to 25 users'
    },

    // Security & Fraud Detection
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms for real-time fraud detection, risk assessment, and automated response.',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Real-time monitoring',
        'Behavioral analysis',
        'Risk scoring',
        'Anomaly detection',
        'Automated alerts',
        'Custom rules engine',
        'API integration',
        'Compliance reporting'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time protection',
        'False positive reduction',
        'Compliance ready',
        'Cost savings',
        'Peace of mind'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      setupTime: '2-3 weeks',
      users: 'Unlimited'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered cybersecurity with threat detection, vulnerability assessment, and automated response.',
      price: '$699/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Threat detection',
        'Vulnerability assessment',
        'Automated response',
        'Security monitoring',
        'Compliance management',
        'Incident response',
        'Security analytics',
        '24/7 monitoring'
      ],
      benefits: [
        'Proactive threat protection',
        'Reduced security incidents',
        'Compliance assurance',
        'Expert security guidance',
        'Cost-effective security',
        'Better risk management'
      ],
      category: 'Security',
      popular: true,
      icon: Lock,
      setupTime: '2-4 weeks',
      users: 'Unlimited'
    },

    // Healthcare & Life Sciences
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Advanced AI solutions for medical imaging, drug discovery, patient care, and healthcare analytics.',
      price: '$999/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Medical image analysis',
        'Drug discovery AI',
        'Patient monitoring',
        'Diagnostic assistance',
        'Treatment optimization',
        'Clinical decision support',
        'Health analytics',
        'Compliance management'
      ],
      benefits: [
        'Improved patient outcomes',
        'Faster diagnosis',
        'Cost reduction',
        'Better treatment plans',
        'Research acceleration',
        'Compliance ready'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Heart,
      setupTime: '4-6 weeks',
      users: 'Up to 50 users'
    },
    {
      id: 'ai-medical-imaging',
      name: 'AI Medical Imaging',
      description: 'AI-powered medical image analysis for radiology, pathology, and diagnostic imaging with high accuracy.',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Radiology AI analysis',
        'Pathology image processing',
        'Diagnostic assistance',
        'Image enhancement',
        'Automated reporting',
        'Integration capabilities',
        'Quality assurance',
        'Compliance ready'
      ],
      benefits: [
        'Faster diagnosis',
        'Improved accuracy',
        'Reduced errors',
        'Cost savings',
        'Better patient care',
        'Workflow optimization'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Eye,
      setupTime: '3-4 weeks',
      users: 'Up to 30 users'
    },

    // Financial Services
    {
      id: 'ai-financial-services',
      name: 'AI Financial Services',
      description: 'Comprehensive AI solutions for banking, insurance, investment, and financial analytics with regulatory compliance.',
      price: '$899/month',
      marketPrice: '$1800-6000/month',
      features: [
        'Risk assessment',
        'Credit scoring',
        'Fraud detection',
        'Algorithmic trading',
        'Insurance underwriting',
        'Regulatory compliance',
        'Financial analytics',
        'Customer insights'
      ],
      benefits: [
        'Better risk management',
        'Improved accuracy',
        'Cost reduction',
        'Compliance assurance',
        'Competitive advantage',
        'Data-driven decisions'
      ],
      category: 'Finance',
      popular: false,
      icon: DollarSign,
      setupTime: '3-5 weeks',
      users: 'Up to 40 users'
    },
    {
      id: 'ai-trading-algorithms',
      name: 'AI Trading Algorithms',
      description: 'Advanced algorithmic trading with AI-powered market analysis, risk management, and automated trading strategies.',
      price: '$1299/month',
      marketPrice: '$2500-10000/month',
      features: [
        'Market analysis AI',
        'Trading algorithms',
        'Risk management',
        'Portfolio optimization',
        'Real-time execution',
        'Backtesting capabilities',
        'Performance analytics',
        'Regulatory compliance'
      ],
      benefits: [
        'Improved trading performance',
        'Better risk management',
        'Automated execution',
        'Cost optimization',
        'Competitive advantage',
        'Data-driven strategies'
      ],
      category: 'Finance',
      popular: false,
      icon: TrendingUp,
      setupTime: '4-6 weeks',
      users: 'Up to 20 users'
    },

    // E-commerce & Retail
    {
      id: 'ai-ecommerce',
      name: 'AI E-commerce Solutions',
      description: 'Comprehensive AI solutions for online retail including recommendation engines, inventory optimization, and customer analytics.',
      price: '$599/month',
      marketPrice: '$1000-4000/month',
      features: [
        'Recommendation engines',
        'Inventory optimization',
        'Customer analytics',
        'Price optimization',
        'Search optimization',
        'Personalization',
        'Demand forecasting',
        'Customer insights'
      ],
      benefits: [
        'Increase sales by 30%',
        'Better customer experience',
        'Optimized inventory',
        'Higher conversion rates',
        'Cost reduction',
        'Data-driven decisions'
      ],
      category: 'E-commerce',
      popular: true,
      icon: ShoppingCart,
      setupTime: '2-3 weeks',
      users: 'Up to 35 users'
    },
    {
      id: 'ai-recommendation-engine',
      name: 'AI Recommendation Engine',
      description: 'Advanced recommendation system with machine learning algorithms for personalized product and content recommendations.',
      price: '$399/month',
      marketPrice: '$700-2500/month',
      features: [
        'Personalized recommendations',
        'Collaborative filtering',
        'Content-based filtering',
        'Real-time processing',
        'A/B testing',
        'Analytics dashboard',
        'API integration',
        'Custom algorithms'
      ],
      benefits: [
        'Increase conversions by 40%',
        'Better customer engagement',
        'Higher average order value',
        'Improved user experience',
        'Data-driven personalization',
        'ROI optimization'
      ],
      category: 'E-commerce',
      popular: false,
      icon: Target,
      setupTime: '2-3 weeks',
      users: 'Unlimited'
    },

    // Human Resources
    {
      id: 'ai-hr-solutions',
      name: 'AI HR Solutions',
      description: 'Comprehensive AI-powered human resources platform with recruitment, employee analytics, and workforce optimization.',
      price: '$449/month',
      marketPrice: '$800-2500/month',
      features: [
        'Resume screening AI',
        'Candidate matching',
        'Employee analytics',
        'Performance prediction',
        'Churn prediction',
        'Training recommendations',
        'Workforce planning',
        'Bias detection'
      ],
      benefits: [
        'Reduce hiring time by 60%',
        'Better candidate quality',
        'Improved retention',
        'Bias-free hiring',
        'Cost savings',
        'Data-driven HR'
      ],
      category: 'Human Resources',
      popular: false,
      icon: Users,
      setupTime: '2-3 weeks',
      users: 'Up to 50 users'
    },
    {
      id: 'ai-recruitment',
      name: 'AI Recruitment Platform',
      description: 'Intelligent recruitment platform with AI-powered candidate screening, interview scheduling, and talent matching.',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'AI candidate screening',
        'Interview scheduling',
        'Talent matching',
        'Resume parsing',
        'Skill assessment',
        'Background checks',
        'Onboarding automation',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Better candidate quality',
        'Automated processes',
        'Cost savings',
        'Improved efficiency',
        'Better matches'
      ],
      category: 'Human Resources',
      popular: false,
      icon: Users,
      setupTime: '1-2 weeks',
      users: 'Up to 25 users'
    },

    // Document Processing
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      description: 'Advanced document processing with AI-powered extraction, classification, and intelligent data management.',
      price: '$199/month',
      marketPrice: '$400-1500/month',
      features: [
        'Document extraction',
        'Classification',
        'Data management',
        'OCR capabilities',
        'Version control',
        'Search functionality',
        'Integration capabilities',
        'Custom workflows'
      ],
      benefits: [
        'Reduce processing time by 80%',
        'Better accuracy',
        'Automated processes',
        'Cost savings',
        'Better organization',
        'Compliance ready'
      ],
      category: 'Document Processing',
      popular: true,
      icon: FileText,
      setupTime: '1-2 weeks',
      users: 'Up to 30 users'
    },
    {
      id: 'ai-contract-analysis',
      name: 'AI Contract Analysis',
      description: 'AI-powered contract analysis with risk assessment, clause extraction, and automated compliance checking.',
      price: '$349/month',
      marketPrice: '$600-2000/month',
      features: [
        'Contract analysis',
        'Risk assessment',
        'Clause extraction',
        'Compliance checking',
        'Automated summaries',
        'Version comparison',
        'Deadline tracking',
        'Legal insights'
      ],
      benefits: [
        'Reduce review time by 70%',
        'Better risk management',
        'Improved compliance',
        'Cost savings',
        'Faster negotiations',
        'Legal insights'
      ],
      category: 'Document Processing',
      popular: false,
      icon: FileText,
      setupTime: '2-3 weeks',
      users: 'Up to 20 users'
    },

    // IoT & Edge Computing
    {
      id: 'ai-iot-analytics',
      name: 'AI IoT Analytics',
      description: 'AI-powered IoT data analysis with real-time processing, predictive maintenance, and intelligent automation.',
      price: '$599/month',
      marketPrice: '$1000-4000/month',
      features: [
        'Real-time IoT data processing',
        'Predictive maintenance',
        'Anomaly detection',
        'Edge computing',
        'Device management',
        'Data visualization',
        'API integration',
        'Custom analytics'
      ],
      benefits: [
        'Real-time insights',
        'Predictive maintenance',
        'Cost optimization',
        'Better efficiency',
        'Automated processes',
        'Data-driven decisions'
      ],
      category: 'IoT & Edge',
      popular: false,
      icon: Wifi,
      setupTime: '3-4 weeks',
      users: 'Unlimited'
    },
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing',
      description: 'Distributed AI processing at the edge with real-time inference, reduced latency, and intelligent data processing.',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Edge AI processing',
        'Real-time inference',
        'Reduced latency',
        'Distributed computing',
        'Model optimization',
        'Data synchronization',
        'Cloud integration',
        'Performance monitoring'
      ],
      benefits: [
        'Reduced latency',
        'Better performance',
        'Cost optimization',
        'Real-time processing',
        'Scalable solutions',
        'Edge intelligence'
      ],
      category: 'IoT & Edge',
      popular: false,
      icon: Cpu,
      setupTime: '4-6 weeks',
      users: 'Unlimited'
    },

    // Blockchain & Web3
    {
      id: 'ai-blockchain-solutions',
      name: 'AI Blockchain Solutions',
      description: 'AI-powered blockchain applications with smart contract analysis, DeFi optimization, and Web3 intelligence.',
      price: '$999/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Smart contract analysis',
        'DeFi optimization',
        'Web3 intelligence',
        'Token analytics',
        'Risk assessment',
        'Trading algorithms',
        'Compliance monitoring',
        'Custom solutions'
      ],
      benefits: [
        'Better DeFi performance',
        'Risk mitigation',
        'Compliance assurance',
        'Cost optimization',
        'Competitive advantage',
        'Innovation leadership'
      ],
      category: 'Blockchain',
      popular: false,
      icon: LinkIcon,
      setupTime: '4-6 weeks',
      users: 'Up to 30 users'
    },

    // Supply Chain & Logistics
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Intelligence',
      description: 'AI-powered supply chain optimization with demand forecasting, inventory management, and logistics optimization.',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Logistics planning',
        'Supplier management',
        'Risk assessment',
        'Cost optimization',
        'Real-time tracking',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce costs by 25%',
        'Better inventory management',
        'Improved efficiency',
        'Risk mitigation',
        'Cost optimization',
        'Better planning'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Package,
      setupTime: '3-4 weeks',
      users: 'Up to 40 users'
    },

    // Energy & Sustainability
    {
      id: 'ai-energy-management',
      name: 'AI Energy Management',
      description: 'Intelligent energy management with consumption optimization, cost analysis, and sustainability tracking.',
      price: '$599/month',
      marketPrice: '$1000-4000/month',
      features: [
        'Energy consumption tracking',
        'Cost optimization',
        'Sustainability metrics',
        'Predictive analytics',
        'IoT integration',
        'Custom reporting',
        'Alert system',
        'Multi-site support'
      ],
      benefits: [
        'Reduce energy costs by 30%',
        'Better sustainability',
        'Predictive insights',
        'Cost savings',
        'Environmental impact',
        'Automated optimization'
      ],
      category: 'Energy',
      popular: false,
      icon: Zap,
      setupTime: '2-3 weeks',
      users: 'Up to 35 users'
    },

    // Education & Training
    {
      id: 'ai-education',
      name: 'AI Education Platform',
      description: 'AI-powered educational platform with personalized learning, intelligent tutoring, and adaptive assessment.',
      price: '$449/month',
      marketPrice: '$800-2500/month',
      features: [
        'Personalized learning',
        'Intelligent tutoring',
        'Adaptive assessment',
        'Learning analytics',
        'Content generation',
        'Progress tracking',
        'Multi-language support',
        'Mobile access'
      ],
      benefits: [
        'Improved learning outcomes',
        'Personalized education',
        'Better engagement',
        'Cost-effective training',
        'Scalable education',
        'Data-driven insights'
      ],
      category: 'Education',
      popular: false,
      icon: BookOpen,
      setupTime: '2-3 weeks',
      users: 'Up to 100 users'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'Customer Service', name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length },
    { id: 'Content', name: 'Content', count: aiServices.filter(s => s.category === 'Content').length },
    { id: 'Marketing', name: 'Marketing', count: aiServices.filter(s => s.category === 'Marketing').length },
    { id: 'SEO', name: 'SEO', count: aiServices.filter(s => s.category === 'SEO').length },
    { id: 'Analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { id: 'Business Intelligence', name: 'Business Intelligence', count: aiServices.filter(s => s.category === 'Business Intelligence').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
    { id: 'Voice AI', name: 'Voice AI', count: aiServices.filter(s => s.category === 'Voice AI').length },
    { id: 'Automation', name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
    { id: 'Security', name: 'Security', count: aiServices.filter(s => s.category === 'Security').length },
    { id: 'Healthcare', name: 'Healthcare', count: aiServices.filter(s => s.category === 'Healthcare').length },
    { id: 'Finance', name: 'Finance', count: aiServices.filter(s => s.category === 'Finance').length },
    { id: 'E-commerce', name: 'E-commerce', count: aiServices.filter(s => s.category === 'E-commerce').length },
    { id: 'Human Resources', name: 'Human Resources', count: aiServices.filter(s => s.category === 'Human Resources').length },
    { id: 'Document Processing', name: 'Document Processing', count: aiServices.filter(s => s.category === 'Document Processing').length },
    { id: 'IoT & Edge', name: 'IoT & Edge', count: aiServices.filter(s => s.category === 'IoT & Edge').length },
    { id: 'Blockchain', name: 'Blockchain', count: aiServices.filter(s => s.category === 'Blockchain').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: aiServices.filter(s => s.category === 'Supply Chain').length },
    { id: 'Energy', name: 'Energy', count: aiServices.filter(s => s.category === 'Energy').length },
    { id: 'Education', name: 'Education', count: aiServices.filter(s => s.category === 'Education').length }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularServices = aiServices.filter(service => service.popular);

  const benefits = [
    'Increase efficiency by up to 60%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology',
    '24/7 AI-powered operations',
    'Custom AI model training',
    'Enterprise-grade security'
  ];

  const stats = [
    { icon: <Brain className="w-8 h-8 text-cyan-500" />, value: '50+', label: 'AI Services' },
    { icon: <Users className="w-8 h-8 text-green-500" />, value: '500+', label: 'Happy Clients' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-500" />, value: '99%', label: 'Success Rate' },
    { icon: <Clock className="w-8 h-8 text-orange-500" />, value: '24/7', label: 'AI Support' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, data analytics, computer vision, AI automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From chatbots to computer vision, we deliver AI that drives real results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="/consultation"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        {popularServices.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Featured AI Services</h2>
                <p className="text-xl text-gray-300">Our most popular AI solutions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularServices.map((service) => (
                  <div key={service.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 text-sm font-semibold">Popular</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{service.users}</div>
                        <div className="text-xs text-gray-500">Setup: {service.setupTime}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex space-x-3">
                      <a 
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                      >
                        Get Quote
                      </a>
                      <a 
                        href="/contact"
                        className="px-4 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* All AI Services */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">All AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.popular && (
                      <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{service.category}</p>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div>{service.users}</div>
                      <div className="text-xs">Setup: {service.setupTime}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex space-x-3">
                    <a 
                      href="/contact"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm"
                    >
                      Get Quote
                    </a>
                    <a 
                      href="/contact"
                      className="px-4 py-2 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No AI services found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI experts help you choose the right solutions for your business needs. 
                Get a free consultation and see how AI can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiServicesPage;