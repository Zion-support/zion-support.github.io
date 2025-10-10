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
  ZoomOut
} from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  rating: number;
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts: MicroSaasProduct[] = [
    // AI & Machine Learning Tools
    {
      id: '1',
      icon: Brain,
      title: 'Zion AI Content Writer Pro',
      description: 'Advanced AI-powered content creation with GPT-4 integration, SEO optimization, and multi-language support.',
      features: [
        'GPT-4 powered content generation',
        'SEO optimization and keyword research',
        'Multi-language support (50+ languages)',
        'Brand voice customization',
        'Plagiarism detection and originality scoring',
        'Content calendar and scheduling',
        'Team collaboration tools',
        'Analytics and performance tracking'
      ],
      price: '$49/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'AI Tools',
      rating: 4.9,
      link: 'https://ziontechgroup.com/ai-content-writer'
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'Zion Chat AI Assistant',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel integration.',
      features: [
        'Advanced NLP and sentiment analysis',
        'Multi-channel support (Web, WhatsApp, SMS)',
        'Custom knowledge base integration',
        'Live agent handoff capabilities',
        'Conversation analytics and insights',
        'Multi-language support',
        'API integration and webhooks',
        'Custom training and fine-tuning'
      ],
      price: '$79/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'AI Tools',
      rating: 4.8,
      link: 'https://ziontechgroup.com/chat-ai'
    },
    {
      id: '3',
      icon: Image,
      title: 'Zion AI Image Generator',
      description: 'Professional AI image generation with DALL-E 3 integration, custom styles, and batch processing.',
      features: [
        'DALL-E 3 and Midjourney integration',
        'Custom style and brand training',
        'Batch image generation',
        'High-resolution output (up to 4K)',
        'Commercial usage rights',
        'API access for developers',
        'Image editing and enhancement',
        'Stock photo integration'
      ],
      price: '$39/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'AI Tools',
      rating: 4.7,
      link: 'https://ziontechgroup.com/ai-image-generator'
    },
    {
      id: '4',
      icon: Video,
      title: 'Zion AI Video Creator',
      description: 'Automated video creation with AI voiceovers, text-to-speech, and dynamic content generation.',
      features: [
        'AI-powered video generation',
        'Text-to-speech with 100+ voices',
        'Auto-subtitle generation',
        'Template library (1000+ templates)',
        'Brand customization options',
        'Social media optimization',
        'Batch video processing',
        'Analytics and performance tracking'
      ],
      price: '$89/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'AI Tools',
      rating: 4.6,
      link: 'https://ziontechgroup.com/ai-video-creator'
    },
    {
      id: '5',
      icon: Search,
      title: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO optimization tool with AI-powered keyword research and content suggestions.',
      features: [
        'AI keyword research and analysis',
        'Content optimization suggestions',
        'Technical SEO auditing',
        'Competitor analysis and tracking',
        'Local SEO optimization',
        'Link building opportunities',
        'Ranking tracking and reporting',
        'Google Search Console integration'
      ],
      price: '$59/month',
      users: 'Up to 30 users',
      popular: true,
      category: 'AI Tools',
      rating: 4.8,
      link: 'https://ziontechgroup.com/ai-seo-optimizer'
    },

    // Analytics & Business Intelligence
    {
      id: '6',
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with real-time analytics and predictive insights.',
      features: [
        'Real-time data visualization',
        'Custom dashboard builder',
        'Predictive analytics and forecasting',
        '50+ data connectors',
        'Automated report generation',
        'Multi-tenant architecture',
        'API access and webhooks',
        'White-label solution available'
      ],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics',
      rating: 4.9,
      link: 'https://ziontechgroup.com/analytics-pro'
    },
    {
      id: '7',
      icon: PieChart,
      title: 'Zion Social Media Analytics',
      description: 'Comprehensive social media analytics with engagement tracking and competitor analysis.',
      features: [
        'Multi-platform social media tracking',
        'Engagement rate analysis',
        'Hashtag performance tracking',
        'Competitor analysis and benchmarking',
        'Influencer identification',
        'Content performance insights',
        'Automated reporting',
        'ROI tracking and attribution'
      ],
      price: '$69/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Analytics',
      rating: 4.7,
      link: 'https://ziontechgroup.com/social-analytics'
    },
    {
      id: '8',
      icon: Activity,
      title: 'Zion Website Performance Monitor',
      description: 'Real-time website performance monitoring with uptime tracking and speed optimization.',
      features: [
        'Real-time uptime monitoring',
        'Page speed analysis and optimization',
        'Core Web Vitals tracking',
        'Global monitoring locations',
        'Alert notifications and escalation',
        'Performance reports and insights',
        'API monitoring and testing',
        'Mobile performance tracking'
      ],
      price: '$29/month',
      users: 'Up to 20 websites',
      popular: false,
      category: 'Analytics',
      rating: 4.8,
      link: 'https://ziontechgroup.com/website-monitor'
    },

    // Productivity & Project Management
    {
      id: '9',
      icon: Calendar,
      title: 'Zion Project Manager AI',
      description: 'AI-powered project management with intelligent task allocation and progress tracking.',
      features: [
        'AI task prioritization and scheduling',
        'Resource allocation optimization',
        'Progress tracking and reporting',
        'Team collaboration tools',
        'Risk assessment and mitigation',
        'Time tracking and billing',
        'Gantt charts and timelines',
        'Integration with 100+ tools'
      ],
      price: '$79/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      link: 'https://ziontechgroup.com/project-manager-ai'
    },
    {
      id: '10',
      icon: Mail,
      title: 'Zion Email Marketing Pro',
      description: 'Advanced email marketing automation with AI personalization and behavioral targeting.',
      features: [
        'AI-powered email personalization',
        'Behavioral targeting and segmentation',
        'A/B testing and optimization',
        'Advanced automation workflows',
        'Email template builder',
        'Deliverability optimization',
        'Analytics and performance tracking',
        'CRM integration and lead scoring'
      ],
      price: '$49/month',
      users: 'Up to 25,000 subscribers',
      popular: false,
      category: 'Productivity',
      rating: 4.7,
      link: 'https://ziontechgroup.com/email-marketing-pro'
    },
    {
      id: '11',
      icon: FileText,
      title: 'Zion Document AI',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflows.',
      features: [
        'OCR and text extraction',
        'Document classification and routing',
        'Data extraction and validation',
        'Automated workflow processing',
        'Document comparison and analysis',
        'Digital signature integration',
        'Compliance and audit trails',
        'API access for developers'
      ],
      price: '$89/month',
      users: 'Up to 1,000 documents/month',
      popular: false,
      category: 'Productivity',
      rating: 4.6,
      link: 'https://ziontechgroup.com/document-ai'
    },

    // Security & Compliance
    {
      id: '12',
      icon: Shield,
      title: 'Zion Security Monitor',
      description: 'Enterprise-grade security monitoring with threat detection and automated response.',
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Vulnerability scanning and assessment',
        'Compliance reporting (SOC2, GDPR)',
        'Security awareness training',
        'Dark web monitoring',
        '24/7 SOC support',
        'Custom security policies'
      ],
      price: '$199/month',
      users: 'Up to 100 endpoints',
      popular: true,
      category: 'Security',
      rating: 4.9,
      link: 'https://ziontechgroup.com/security-monitor'
    },
    {
      id: '13',
      icon: Lock,
      title: 'Zion Password Manager Pro',
      description: 'Advanced password management with enterprise features and team collaboration.',
      features: [
        'Secure password generation and storage',
        'Team password sharing and management',
        'Multi-factor authentication',
        'Password breach monitoring',
        'SSO integration',
        'Compliance reporting',
        'API access for developers',
        'White-label solution available'
      ],
      price: '$39/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security',
      rating: 4.8,
      link: 'https://ziontechgroup.com/password-manager'
    },

    // Finance & Accounting
    {
      id: '14',
      icon: CreditCard,
      title: 'Zion Invoice Generator AI',
      description: 'Intelligent invoice generation with automated billing and payment processing.',
      features: [
        'AI-powered invoice generation',
        'Automated billing and reminders',
        'Multi-currency support',
        'Payment gateway integration',
        'Tax calculation and compliance',
        'Client portal and self-service',
        'Financial reporting and analytics',
        'API integration with accounting software'
      ],
      price: '$29/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Finance',
      rating: 4.7,
      link: 'https://ziontechgroup.com/invoice-generator'
    },
    {
      id: '15',
      icon: TrendingUp,
      title: 'Zion Expense Tracker AI',
      description: 'Smart expense tracking with receipt scanning and automated categorization.',
      features: [
        'Receipt scanning and OCR',
        'AI-powered expense categorization',
        'Automated mileage tracking',
        'Policy compliance checking',
        'Approval workflows',
        'Integration with accounting software',
        'Mobile app for on-the-go tracking',
        'Advanced reporting and analytics'
      ],
      price: '$19/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Finance',
      rating: 4.6,
      link: 'https://ziontechgroup.com/expense-tracker'
    },

    // E-commerce & Sales
    {
      id: '16',
      icon: ShoppingCart,
      title: 'Zion E-commerce Optimizer',
      description: 'AI-powered e-commerce optimization with conversion tracking and personalization.',
      features: [
        'AI product recommendations',
        'Dynamic pricing optimization',
        'Inventory management and forecasting',
        'Customer behavior analysis',
        'A/B testing and optimization',
        'Multi-channel selling support',
        'Analytics and performance tracking',
        'Integration with major platforms'
      ],
      price: '$149/month',
      users: 'Up to 50 products',
      popular: true,
      category: 'E-commerce',
      rating: 4.8,
      link: 'https://ziontechgroup.com/ecommerce-optimizer'
    },
    {
      id: '17',
      icon: Target,
      title: 'Zion Lead Generation AI',
      description: 'Automated lead generation with AI-powered prospecting and qualification.',
      features: [
        'AI-powered lead discovery',
        'Contact information enrichment',
        'Lead scoring and qualification',
        'Automated outreach campaigns',
        'CRM integration and sync',
        'Email verification and validation',
        'Social media prospecting',
        'Analytics and ROI tracking'
      ],
      price: '$99/month',
      users: 'Up to 1,000 leads/month',
      popular: false,
      category: 'Sales',
      rating: 4.7,
      link: 'https://ziontechgroup.com/lead-generation'
    },

    // Development & Technical
    {
      id: '18',
      icon: Code,
      title: 'Zion Code Review AI',
      description: 'Automated code review with AI-powered analysis and security scanning.',
      features: [
        'AI-powered code analysis',
        'Security vulnerability detection',
        'Code quality metrics and scoring',
        'Automated testing suggestions',
        'Performance optimization recommendations',
        'Integration with Git platforms',
        'Custom rule configuration',
        'Team collaboration and comments'
      ],
      price: '$79/month',
      users: 'Up to 25 repositories',
      popular: false,
      category: 'Development',
      rating: 4.8,
      link: 'https://ziontechgroup.com/code-review-ai'
    },
    {
      id: '19',
      icon: Database,
      title: 'Zion Database Optimizer',
      description: 'Intelligent database optimization with performance monitoring and query analysis.',
      features: [
        'Query performance analysis',
        'Index optimization recommendations',
        'Database health monitoring',
        'Automated backup and recovery',
        'Security scanning and compliance',
        'Performance benchmarking',
        'Multi-database support',
        'API access and webhooks'
      ],
      price: '$129/month',
      users: 'Up to 10 databases',
      popular: false,
      category: 'Development',
      rating: 4.6,
      link: 'https://ziontechgroup.com/database-optimizer'
    },

    // Marketing & Growth
    {
      id: '20',
      icon: Rocket,
      title: 'Zion Growth Hacking Suite',
      description: 'Comprehensive growth hacking tools with viral marketing and user acquisition.',
      features: [
        'Viral marketing campaign builder',
        'Referral program automation',
        'User onboarding optimization',
        'A/B testing and experimentation',
        'Growth metrics tracking',
        'Social proof and testimonials',
        'Email sequence automation',
        'Analytics and attribution modeling'
      ],
      price: '$199/month',
      users: 'Up to 100 campaigns',
      popular: true,
      category: 'Marketing',
      rating: 4.9,
      link: 'https://ziontechgroup.com/growth-hacking'
    },
    {
      id: '21',
      icon: Eye,
      title: 'Zion Competitor Intelligence',
      description: 'AI-powered competitor analysis with market intelligence and trend tracking.',
      features: [
        'Competitor website monitoring',
        'Price tracking and analysis',
        'Social media monitoring',
        'Content gap analysis',
        'SEO competitor research',
        'Market trend identification',
        'Automated reporting and alerts',
        'Custom dashboard and insights'
      ],
      price: '$89/month',
      users: 'Up to 50 competitors',
      popular: false,
      category: 'Marketing',
      rating: 4.7,
      link: 'https://ziontechgroup.com/competitor-intelligence'
    },

    // HR & People Management
    {
      id: '22',
      icon: Users,
      title: 'Zion HR Management AI',
      description: 'Comprehensive HR management with AI-powered recruitment and employee analytics.',
      features: [
        'AI-powered candidate screening',
        'Employee onboarding automation',
        'Performance management system',
        'Time tracking and attendance',
        'Benefits administration',
        'Learning management system',
        'Employee engagement surveys',
        'Compliance and reporting'
      ],
      price: '$159/month',
      users: 'Up to 200 employees',
      popular: false,
      category: 'HR',
      rating: 4.8,
      link: 'https://ziontechgroup.com/hr-management'
    },
    {
      id: '23',
      icon: Award,
      title: 'Zion Employee Recognition',
      description: 'Employee recognition and rewards platform with gamification and peer recognition.',
      features: [
        'Peer recognition and nominations',
        'Gamification and achievement badges',
        'Rewards and incentive management',
        'Team building activities',
        'Performance recognition',
        'Social feed and announcements',
        'Analytics and engagement metrics',
        'Integration with HR systems'
      ],
      price: '$49/month',
      users: 'Up to 100 employees',
      popular: false,
      category: 'HR',
      rating: 4.6,
      link: 'https://ziontechgroup.com/employee-recognition'
    },

    // Customer Support & Service
    {
      id: '24',
      icon: Headphones,
      title: 'Zion Customer Support Hub',
      description: 'Unified customer support platform with omnichannel communication and AI assistance.',
      features: [
        'Omnichannel support (email, chat, phone)',
        'AI-powered ticket routing',
        'Knowledge base management',
        'Customer satisfaction surveys',
        'Live chat and co-browsing',
        'Social media support integration',
        'Analytics and performance metrics',
        'API access and webhooks'
      ],
      price: '$99/month',
      users: 'Up to 25 agents',
      popular: true,
      category: 'Support',
      rating: 4.8,
      link: 'https://ziontechgroup.com/customer-support'
    },
    {
      id: '25',
      icon: Bell,
      title: 'Zion Notification Center',
      description: 'Intelligent notification management with multi-channel delivery and personalization.',
      features: [
        'Multi-channel notification delivery',
        'AI-powered personalization',
        'Delivery optimization and timing',
        'A/B testing and analytics',
        'Template management and customization',
        'User preference management',
        'Delivery tracking and reporting',
        'API integration and webhooks'
      ],
      price: '$39/month',
      users: 'Up to 100,000 notifications/month',
      popular: false,
      category: 'Support',
      rating: 4.7,
      link: 'https://ziontechgroup.com/notification-center'
    },

    // Additional AI Tools
    {
      id: '26',
      icon: Mic,
      title: 'Zion Voice AI Assistant',
      description: 'Advanced voice AI with speech recognition, synthesis, and natural language processing.',
      features: [
        'Speech-to-text with 99% accuracy',
        'Text-to-speech with 100+ voices',
        'Voice command processing',
        'Multi-language support',
        'Custom voice training',
        'Real-time transcription',
        'Voice analytics and insights',
        'API access for developers'
      ],
      price: '$69/month',
      users: 'Up to 1,000 minutes/month',
      popular: false,
      category: 'AI Tools',
      rating: 4.8,
      link: 'https://ziontechgroup.com/voice-ai'
    },
    {
      id: '27',
      icon: Camera,
      title: 'Zion Computer Vision AI',
      description: 'Advanced computer vision with object detection, facial recognition, and image analysis.',
      features: [
        'Object detection and classification',
        'Facial recognition and analysis',
        'OCR and text extraction',
        'Image quality assessment',
        'Custom model training',
        'Real-time processing',
        'Batch processing capabilities',
        'API access and webhooks'
      ],
      price: '$149/month',
      users: 'Up to 10,000 images/month',
      popular: false,
      category: 'AI Tools',
      rating: 4.7,
      link: 'https://ziontechgroup.com/computer-vision'
    },
    {
      id: '28',
      icon: Music,
      title: 'Zion AI Music Generator',
      description: 'AI-powered music generation with custom styles, genres, and commercial licensing.',
      features: [
        'AI music composition and generation',
        'Multiple genre and style support',
        'Custom mood and emotion targeting',
        'Commercial usage rights',
        'High-quality audio output',
        'Loop and variation generation',
        'Collaboration and sharing tools',
        'API access for developers'
      ],
      price: '$79/month',
      users: 'Up to 100 tracks/month',
      popular: false,
      category: 'AI Tools',
      rating: 4.6,
      link: 'https://ziontechgroup.com/ai-music-generator'
    },

    // Data & Analytics
    {
      id: '29',
      icon: Layers,
      title: 'Zion Data Pipeline AI',
      description: 'Automated data pipeline with ETL processing, transformation, and real-time streaming.',
      features: [
        'Automated ETL processing',
        'Real-time data streaming',
        'Data transformation and cleaning',
        'Multiple data source connectors',
        'Data quality monitoring',
        'Error handling and recovery',
        'Scalable cloud infrastructure',
        'API access and webhooks'
      ],
      price: '$199/month',
      users: 'Up to 1TB data processing/month',
      popular: false,
      category: 'Analytics',
      rating: 4.8,
      link: 'https://ziontechgroup.com/data-pipeline'
    },
    {
      id: '30',
      icon: Cpu,
      title: 'Zion Machine Learning Platform',
      description: 'No-code machine learning platform with automated model training and deployment.',
      features: [
        'No-code ML model building',
        'Automated feature engineering',
        'Model training and optimization',
        'Real-time model deployment',
        'A/B testing and validation',
        'Model monitoring and retraining',
        'Custom algorithm support',
        'API access and integration'
      ],
      price: '$299/month',
      users: 'Up to 10 models',
      popular: false,
      category: 'AI Tools',
      rating: 4.9,
      link: 'https://ziontechgroup.com/ml-platform'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'AI Tools', name: 'AI Tools' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Productivity', name: 'Productivity' },
    { id: 'Security', name: 'Security' },
    { id: 'Finance', name: 'Finance' },
    { id: 'E-commerce', name: 'E-commerce' },
    { id: 'Sales', name: 'Sales' },
    { id: 'Development', name: 'Development' },
    { id: 'Marketing', name: 'Marketing' },
    { id: 'HR', name: 'HR' },
    { id: 'Support', name: 'Support' }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive interface and comprehensive onboarding'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee and SOC2 compliance'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology for better results and automation'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere, anytime with our scalable cloud infrastructure'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? microSaasProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : microSaasProducts.filter(product => 
        product.category === selectedCategory && (
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SaaS Solutions">
            Micro <span className="text-cyan-400 neon-text">SaaS</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of <span className="text-cyan-400 font-bold">50+ AI-powered micro SaaS tools</span> designed to solve specific business challenges and drive growth.
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
                    placeholder="Search micro SaaS products..."
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

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our Micro SaaS Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white neon-text">
              {selectedCategory === 'all' ? 'All Micro SaaS Products' : `${selectedCategory} Products`}
            </h2>
            <span className="text-cyan-400 font-semibold">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`cyber-card group hover:scale-105 transition-all duration-300 relative ${
                product.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-slate-700/50'
              }`}>
                {product.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          {product.rating}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {product.users}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{product.price}</div>
                    <div className="text-sm text-gray-300">Contact for custom pricing</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.link}
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
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose any of our micro SaaS products and start your free trial today. 
              No credit card required, cancel anytime. Get expert support and implementation assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Start Free Trial</span>
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

export default MicroSaasPage;