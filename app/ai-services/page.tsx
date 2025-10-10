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
  Users,
  Globe,
  Database,
  Settings,
  Code,
  Camera,
  Headphones,
  Mail,
  Calendar,
  CreditCard,
  Lock,
  Activity,
  Award,
  BookOpen,
  Briefcase,
  Edit,
  Filter,
  Home,
  Image,
  Layers,
  MapPin,
  Monitor,
  Palette,
  Play,
  Plus,
  RefreshCw,
  Save,
  Send,
  ShoppingCart,
  Tag,
  ThumbsUp,
  Tool,
  Upload,
  Video,
  Wifi,
  X,
  Zap as Lightning,
  PieChart,
  DollarSign,
  Heart,
  Truck,
  Package,
  Cog,
  Wrench,
  Scale
} from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  category: string;
  popular: boolean;
  benefits: string[];
  useCases: string[];
  link: string;
  technology: string[];
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices: AIService[] = [
    // AI Analytics & Business Intelligence
    {
      id: '1',
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      title: 'AI Business Intelligence Platform',
      description: 'Advanced AI-powered business intelligence platform that transforms raw data into actionable insights with predictive analytics and automated reporting.',
      features: [
        'Real-time data processing and analysis',
        'AI-powered predictive analytics',
        'Natural language query interface',
        'Automated report generation',
        'Custom dashboard creation',
        'Multi-source data integration',
        'Anomaly detection and alerting',
        'Mobile-first responsive design'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$2,500/month',
      category: 'Analytics',
      popular: true,
      benefits: ['Increase data insights by 300%', 'Reduce reporting time by 80%', 'Improve decision accuracy by 45%'],
      useCases: ['Financial forecasting', 'Customer behavior analysis', 'Market trend prediction', 'Operational optimization'],
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      technology: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision']
    },
    {
      id: '2',
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: 'AI Revenue Optimization Suite',
      description: 'Intelligent revenue optimization platform that analyzes sales patterns, predicts customer behavior, and suggests dynamic pricing strategies.',
      features: [
        'Revenue forecasting with 95% accuracy',
        'Customer lifetime value prediction',
        'Dynamic pricing optimization',
        'Churn prediction and prevention',
        'Sales performance analytics',
        'Commission tracking and optimization',
        'Market trend analysis',
        'ROI calculation and optimization'
      ],
      price: 'Starting at $2,000/month',
      marketPrice: '$3,500/month',
      category: 'Analytics',
      popular: true,
      benefits: ['Increase revenue by 25%', 'Reduce churn by 40%', 'Optimize pricing by 15%'],
      useCases: ['E-commerce optimization', 'SaaS pricing', 'Retail pricing', 'Subscription management'],
      link: 'https://ziontechgroup.com/ai-revenue-optimization',
      technology: ['Machine Learning', 'Time Series Analysis', 'Predictive Modeling', 'Optimization Algorithms']
    },

    // AI Customer Experience & Support
    {
      id: '3',
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: 'AI Customer Experience Platform',
      description: 'Comprehensive AI-powered customer experience platform with intelligent chatbots, sentiment analysis, and personalized interactions.',
      features: [
        'AI-powered chatbots (50+ languages)',
        'Sentiment analysis and mood detection',
        'Personalized customer interactions',
        'Omnichannel communication',
        'Customer journey mapping',
        'Predictive customer service',
        'Integration with CRM systems',
        'Advanced analytics dashboard'
      ],
      price: 'Starting at $1,200/month',
      marketPrice: '$2,000/month',
      category: 'Customer Experience',
      popular: true,
      benefits: ['Reduce response time by 80%', 'Increase customer satisfaction by 40%', 'Handle 3x more inquiries'],
      useCases: ['Customer support automation', 'Sales qualification', 'Lead nurturing', 'Customer feedback analysis'],
      link: 'https://ziontechgroup.com/ai-customer-experience',
      technology: ['Natural Language Processing', 'Sentiment Analysis', 'Machine Learning', 'Conversational AI']
    },
    {
      id: '4',
      icon: <Phone className="w-8 h-8 text-teal-600" />,
      title: 'AI Call Center Intelligence',
      description: 'Advanced AI-powered call center solution with real-time transcription, sentiment analysis, and intelligent call routing.',
      features: [
        'Real-time call transcription',
        'Sentiment analysis during calls',
        'Intelligent call routing',
        'Call quality monitoring',
        'Customer intent detection',
        'Agent performance analytics',
        'Integration with CRM systems',
        'Multi-language support'
      ],
      price: 'Starting at $1,800/month',
      marketPrice: '$3,000/month',
      category: 'Customer Experience',
      popular: false,
      benefits: ['Improve call efficiency by 50%', 'Increase customer satisfaction by 35%', 'Reduce training time by 60%'],
      useCases: ['Call center automation', 'Quality assurance', 'Customer service optimization', 'Sales call analysis'],
      link: 'https://ziontechgroup.com/ai-call-center',
      technology: ['Speech Recognition', 'Natural Language Processing', 'Machine Learning', 'Real-time Analytics']
    },

    // AI Content & Marketing
    {
      id: '5',
      icon: <Edit className="w-8 h-8 text-indigo-600" />,
      title: 'AI Content Creation Suite',
      description: 'Complete AI-powered content creation platform with writing, image generation, video editing, and social media automation.',
      features: [
        'AI-powered content writing (100+ templates)',
        'Image generation and editing',
        'Video creation and editing',
        'Social media content automation',
        'SEO optimization tools',
        'Plagiarism detection',
        'Multi-language support',
        'Brand voice customization'
      ],
      price: 'Starting at $800/month',
      marketPrice: '$1,500/month',
      category: 'Content & Marketing',
      popular: true,
      benefits: ['Create content 10x faster', 'Increase engagement by 200%', 'Reduce content costs by 70%'],
      useCases: ['Blog content creation', 'Social media marketing', 'Email campaigns', 'Video marketing'],
      link: 'https://ziontechgroup.com/ai-content-creation',
      technology: ['Natural Language Generation', 'Computer Vision', 'Deep Learning', 'Generative AI']
    },
    {
      id: '6',
      icon: <Mail className="w-8 h-8 text-red-600" />,
      title: 'AI Marketing Automation Platform',
      description: 'Intelligent marketing automation platform with AI optimization, personalization, and advanced analytics for maximum ROI.',
      features: [
        'AI-powered campaign optimization',
        'Dynamic content personalization',
        'Advanced customer segmentation',
        'A/B testing automation',
        'Deliverability optimization',
        'Advanced analytics and reporting',
        'Integration with 1000+ tools',
        'Compliance management'
      ],
      price: 'Starting at $1,000/month',
      marketPrice: '$2,000/month',
      category: 'Content & Marketing',
      popular: true,
      benefits: ['Increase open rates by 45%', 'Boost click-through rates by 60%', 'Reduce unsubscribe rates by 30%'],
      useCases: ['Email marketing', 'Lead nurturing', 'Customer retention', 'Marketing attribution'],
      link: 'https://ziontechgroup.com/ai-marketing-automation',
      technology: ['Machine Learning', 'Predictive Analytics', 'Personalization Engines', 'Marketing Automation']
    },

    // AI Development & Technical
    {
      id: '7',
      icon: <Code className="w-8 h-8 text-gray-600" />,
      title: 'AI Development Assistant Pro',
      description: 'Advanced AI-powered development platform with code completion, debugging, testing, and optimization for multiple programming languages.',
      features: [
        'AI code completion and suggestions',
        'Automated debugging assistance',
        'Code optimization recommendations',
        'Multi-language support (30+ languages)',
        'Integration with popular IDEs',
        'Automated testing generation',
        'Security vulnerability detection',
        'Documentation generation'
      ],
      price: 'Starting at $500/month',
      marketPrice: '$1,000/month',
      category: 'Development',
      popular: true,
      benefits: ['Increase coding speed by 40%', 'Reduce bugs by 60%', 'Improve code quality by 50%'],
      useCases: ['Software development', 'Code review', 'Bug fixing', 'Technical documentation'],
      link: 'https://ziontechgroup.com/ai-development-assistant',
      technology: ['Large Language Models', 'Code Analysis', 'Machine Learning', 'Natural Language Processing']
    },
    {
      id: '8',
      icon: <Settings className="w-8 h-8 text-yellow-600" />,
      title: 'AI DevOps Automation Platform',
      description: 'Intelligent DevOps platform with AI-powered deployment, monitoring, and optimization for continuous integration and delivery.',
      features: [
        'AI-powered deployment automation',
        'Intelligent monitoring and alerting',
        'Performance optimization',
        'Security vulnerability scanning',
        'Infrastructure as Code',
        'Automated testing and validation',
        'Integration with cloud platforms',
        'Advanced analytics dashboard'
      ],
      price: 'Starting at $1,200/month',
      marketPrice: '$2,500/month',
      category: 'Development',
      popular: false,
      benefits: ['Reduce deployment time by 70%', 'Improve system reliability by 50%', 'Decrease downtime by 80%'],
      useCases: ['CI/CD automation', 'Infrastructure management', 'Performance monitoring', 'Security compliance'],
      link: 'https://ziontechgroup.com/ai-devops-automation',
      technology: ['Machine Learning', 'Automation', 'Monitoring', 'Cloud Computing']
    },

    // AI Security & Compliance
    {
      id: '9',
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity platform with threat detection, vulnerability scanning, and automated incident response.',
      features: [
        'AI-powered threat detection',
        'Real-time vulnerability scanning',
        'Automated incident response',
        'Behavioral analysis',
        'Compliance monitoring (GDPR, HIPAA, SOX)',
        'Penetration testing automation',
        'Security awareness training',
        '24/7 monitoring dashboard'
      ],
      price: 'Starting at $2,500/month',
      marketPrice: '$5,000/month',
      category: 'Security',
      popular: true,
      benefits: ['Reduce security incidents by 70%', 'Improve compliance by 90%', 'Decrease response time by 80%'],
      useCases: ['Threat detection', 'Vulnerability management', 'Compliance monitoring', 'Incident response'],
      link: 'https://ziontechgroup.com/ai-cybersecurity',
      technology: ['Machine Learning', 'Anomaly Detection', 'Behavioral Analysis', 'Threat Intelligence']
    },
    {
      id: '10',
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: 'AI Data Privacy & Compliance Manager',
      description: 'Intelligent data privacy and compliance platform for GDPR, CCPA, and other privacy regulations with automated monitoring.',
      features: [
        'Automated compliance assessment',
        'Data mapping and classification',
        'Privacy impact assessments',
        'Consent management',
        'Data subject request handling',
        'Breach notification automation',
        'Compliance reporting',
        'Legal document templates'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$3,000/month',
      category: 'Security',
      popular: false,
      benefits: ['Ensure 100% compliance', 'Reduce legal risks by 80%', 'Save 60% on compliance costs'],
      useCases: ['GDPR compliance', 'Data privacy management', 'Regulatory reporting', 'Risk assessment'],
      link: 'https://ziontechgroup.com/ai-data-privacy',
      technology: ['Natural Language Processing', 'Machine Learning', 'Compliance Automation', 'Data Classification']
    },

    // AI Financial & Accounting
    {
      id: '11',
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: 'AI Financial Intelligence Platform',
      description: 'Comprehensive AI-powered financial platform with automated accounting, fraud detection, and intelligent financial reporting.',
      features: [
        'Automated bookkeeping and accounting',
        'AI-powered fraud detection',
        'Financial forecasting and planning',
        'Tax preparation and filing',
        'Invoice processing and management',
        'Expense categorization and tracking',
        'Multi-currency support',
        'Integration with banking systems'
      ],
      price: 'Starting at $1,800/month',
      marketPrice: '$3,500/month',
      category: 'Finance',
      popular: true,
      benefits: ['Reduce accounting time by 70%', 'Improve accuracy by 95%', 'Save 50% on accounting costs'],
      useCases: ['Financial management', 'Fraud prevention', 'Tax compliance', 'Financial reporting'],
      link: 'https://ziontechgroup.com/ai-financial-intelligence',
      technology: ['Machine Learning', 'Fraud Detection', 'Financial Modeling', 'Natural Language Processing']
    },
    {
      id: '12',
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: 'AI Payment Processing Intelligence',
      description: 'Smart payment processing platform with fraud detection, risk assessment, and automated payment optimization.',
      features: [
        'Real-time fraud detection',
        'Payment risk assessment',
        'Transaction optimization',
        'Chargeback prevention',
        'Multi-payment gateway support',
        'Compliance management',
        'Advanced analytics',
        'API integration'
      ],
      price: 'Starting at $1,200/month',
      marketPrice: '$2,500/month',
      category: 'Finance',
      popular: false,
      benefits: ['Reduce fraud by 85%', 'Increase approval rates by 20%', 'Decrease chargebacks by 60%'],
      useCases: ['Payment processing', 'Fraud prevention', 'Risk management', 'Transaction optimization'],
      link: 'https://ziontechgroup.com/ai-payment-processing',
      technology: ['Machine Learning', 'Fraud Detection', 'Risk Assessment', 'Real-time Analytics']
    },

    // AI Healthcare & Medical
    {
      id: '13',
      icon: <Activity className="w-8 h-8 text-red-600" />,
      title: 'AI Medical Diagnosis Assistant',
      description: 'HIPAA-compliant AI medical platform with diagnostic assistance, patient monitoring, and treatment recommendations.',
      features: [
        'AI-powered diagnostic assistance',
        'Medical image analysis',
        'Patient monitoring and alerts',
        'Treatment recommendation engine',
        'Drug interaction checking',
        'Integration with EHR systems',
        'Clinical decision support',
        'Patient portal integration'
      ],
      price: 'Starting at $3,000/month',
      marketPrice: '$6,000/month',
      category: 'Healthcare',
      popular: true,
      benefits: ['Improve diagnosis accuracy by 30%', 'Reduce diagnostic time by 50%', 'Increase patient satisfaction by 40%'],
      useCases: ['Medical diagnosis', 'Patient monitoring', 'Treatment planning', 'Clinical research'],
      link: 'https://ziontechgroup.com/ai-medical-diagnosis',
      technology: ['Deep Learning', 'Computer Vision', 'Medical AI', 'Natural Language Processing']
    },
    {
      id: '14',
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: 'AI Health Monitoring Platform',
      description: 'Personalized health monitoring platform with AI analysis of vital signs, symptoms, and wellness recommendations.',
      features: [
        'Vital signs monitoring and analysis',
        'Symptom tracking and prediction',
        'Personalized health insights',
        'Medication reminder system',
        'Integration with wearables',
        'Telemedicine capabilities',
        'Health trend analysis',
        'Emergency alert system'
      ],
      price: 'Starting at $800/month',
      marketPrice: '$1,500/month',
      category: 'Healthcare',
      popular: false,
      benefits: ['Improve health outcomes by 40%', 'Reduce hospital visits by 30%', 'Increase patient engagement by 50%'],
      useCases: ['Health monitoring', 'Preventive care', 'Chronic disease management', 'Wellness tracking'],
      link: 'https://ziontechgroup.com/ai-health-monitoring',
      technology: ['Machine Learning', 'IoT Integration', 'Health Analytics', 'Predictive Modeling']
    },

    // AI Education & Learning
    {
      id: '15',
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: 'AI Learning Management System',
      description: 'Intelligent learning platform with personalized content, adaptive assessments, and AI-powered tutoring.',
      features: [
        'Personalized learning paths',
        'Adaptive assessments',
        'AI-powered tutoring',
        'Progress tracking and analytics',
        'Gamification elements',
        'Multi-language support',
        'Integration with video platforms',
        'Certification management'
      ],
      price: 'Starting at $1,200/month',
      marketPrice: '$2,500/month',
      category: 'Education',
      popular: true,
      benefits: ['Increase learning retention by 50%', 'Reduce training time by 40%', 'Improve completion rates by 60%'],
      useCases: ['Corporate training', 'Online education', 'Skills development', 'Certification programs'],
      link: 'https://ziontechgroup.com/ai-learning-management',
      technology: ['Machine Learning', 'Adaptive Learning', 'Natural Language Processing', 'Educational AI']
    },
    {
      id: '16',
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: 'AI Skills Assessment Platform',
      description: 'Comprehensive AI-powered skills testing and certification platform with intelligent evaluation and personalized feedback.',
      features: [
        'AI-powered skill assessments',
        'Automated grading and feedback',
        'Certification management',
        'Skills gap analysis',
        'Personalized improvement plans',
        'Integration with learning platforms',
        'Industry-specific assessments',
        'Advanced analytics dashboard'
      ],
      price: 'Starting at $1,000/month',
      marketPrice: '$2,000/month',
      category: 'Education',
      popular: false,
      benefits: ['Improve assessment accuracy by 45%', 'Reduce grading time by 80%', 'Increase candidate satisfaction by 35%'],
      useCases: ['Skills testing', 'Certification programs', 'Hiring assessments', 'Performance evaluation'],
      link: 'https://ziontechgroup.com/ai-skills-assessment',
      technology: ['Machine Learning', 'Assessment AI', 'Natural Language Processing', 'Psychometrics']
    },

    // AI Legal & Compliance
    {
      id: '17',
      icon: <Scale className="w-8 h-8 text-indigo-600" />,
      title: 'AI Legal Research Assistant',
      description: 'Intelligent legal research platform with case law analysis, document review, and automated legal research.',
      features: [
        'AI-powered legal research',
        'Case law analysis and citation',
        'Document review and analysis',
        'Legal precedent identification',
        'Contract analysis and review',
        'Integration with legal databases',
        'Client portal access',
        'Billing and time tracking'
      ],
      price: 'Starting at $2,000/month',
      marketPrice: '$4,000/month',
      category: 'Legal',
      popular: true,
      benefits: ['Reduce research time by 70%', 'Improve accuracy by 60%', 'Increase billable hours by 30%'],
      useCases: ['Legal research', 'Case preparation', 'Document review', 'Contract analysis'],
      link: 'https://ziontechgroup.com/ai-legal-research',
      technology: ['Natural Language Processing', 'Legal AI', 'Document Analysis', 'Machine Learning']
    },
    {
      id: '18',
      icon: <FileText className="w-8 h-8 text-gray-600" />,
      title: 'AI Contract Management Platform',
      description: 'Intelligent contract management platform with automated analysis, risk assessment, and compliance monitoring.',
      features: [
        'Contract analysis and review',
        'Risk assessment and scoring',
        'Compliance monitoring',
        'Automated contract generation',
        'Integration with legal databases',
        'Client portal access',
        'Billing and time tracking',
        'Advanced reporting'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$3,000/month',
      category: 'Legal',
      popular: false,
      benefits: ['Reduce contract review time by 80%', 'Improve risk assessment by 50%', 'Increase compliance by 90%'],
      useCases: ['Contract management', 'Risk assessment', 'Compliance monitoring', 'Legal document automation'],
      link: 'https://ziontechgroup.com/ai-contract-management',
      technology: ['Natural Language Processing', 'Contract AI', 'Risk Assessment', 'Compliance Automation']
    },

    // AI E-commerce & Retail
    {
      id: '19',
      icon: <ShoppingCart className="w-8 h-8 text-orange-600" />,
      title: 'AI E-commerce Optimization Suite',
      description: 'Comprehensive AI-powered e-commerce platform with intelligent recommendations, dynamic pricing, and inventory optimization.',
      features: [
        'AI product recommendations',
        'Dynamic pricing optimization',
        'Inventory management',
        'Customer behavior analysis',
        'A/B testing automation',
        'Conversion rate optimization',
        'Multi-channel integration',
        'Advanced analytics dashboard'
      ],
      price: 'Starting at $2,000/month',
      marketPrice: '$4,000/month',
      category: 'E-commerce',
      popular: true,
      benefits: ['Increase sales by 35%', 'Reduce cart abandonment by 40%', 'Optimize inventory by 25%'],
      useCases: ['E-commerce optimization', 'Product recommendations', 'Pricing strategy', 'Inventory management'],
      link: 'https://ziontechgroup.com/ai-ecommerce-optimization',
      technology: ['Machine Learning', 'Recommendation Systems', 'Optimization Algorithms', 'E-commerce AI']
    },
    {
      id: '20',
      icon: <Image className="w-8 h-8 text-purple-600" />,
      title: 'AI Visual Search & Recognition',
      description: 'Advanced visual search and recognition platform for e-commerce with AI-powered image analysis and product matching.',
      features: [
        'Visual search capabilities',
        'Product image recognition',
        'Style and color matching',
        'Similar product recommendations',
        'Brand recognition',
        'Quality assessment',
        'Integration with e-commerce platforms',
        'Mobile app support'
      ],
      price: 'Starting at $1,200/month',
      marketPrice: '$2,500/month',
      category: 'E-commerce',
      popular: false,
      benefits: ['Increase search accuracy by 60%', 'Improve user experience by 40%', 'Boost conversion rates by 25%'],
      useCases: ['Visual search', 'Product matching', 'Style recommendations', 'Brand recognition'],
      link: 'https://ziontechgroup.com/ai-visual-search',
      technology: ['Computer Vision', 'Deep Learning', 'Image Recognition', 'Visual Search AI']
    }
  ];

  const categories = [
    'All',
    'Analytics',
    'Customer Experience',
    'Content & Marketing',
    'Development',
    'Security',
    'Finance',
    'Healthcare',
    'Education',
    'Legal',
    'E-commerce'
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularServices = aiServices.filter(service => service.popular);

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including machine learning, natural language processing, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI consulting, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced artificial intelligence solutions that transform your business with machine learning, natural language processing, computer vision, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore AI Services
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        {selectedCategory === 'All' && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Featured AI Services</h2>
                <p className="text-xl text-gray-300">Our most popular and powerful AI solutions</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularServices.slice(0, 6).map((service) => (
                  <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                    <div className="flex items-start mb-6">
                      <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                      </div>
                      <div className="text-sm text-gray-300">Contact for custom pricing</div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Services`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                    <div className="text-sm text-gray-300">Contact for custom pricing</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you choose the perfect solution for your business needs and implement it successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AIServicesPage;