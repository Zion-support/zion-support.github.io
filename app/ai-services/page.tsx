import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Brain, 
  Shield, 
  BarChart3, 
  Cloud, 
  Users, 
  Settings, 
  Zap, 
  Monitor, 
  Smartphone, 
  Database, 
  Lock, 
  RefreshCw, 
  Award, 
  Clock, 
  DollarSign,
  ExternalLink,
  Sparkles,
  FileText,
  MessageSquare,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  ChevronRight,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Save,
  Share2,
  Copy,
  Scissors,
  Paperclip,
  Image,
  Video,
  Music,
  File,
  Folder,
  Archive,
  Tag,
  Flag,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Phone,
  MapPin,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Server,
  Network,
  HardDrive,
  Cpu,
  MemoryStick,
  Router,
  Wifi,
  Bluetooth,
  Usb,
  Hdmi,
  Camera,
  Mic,
  Headphones,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Fax,
  Laptop,
  Desktop,
  Tablet,
  Watch,
  Gamepad2,
  Joystick,
  Tv,
  Radio,
  Speaker,
  Volume1,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  List,
  Grid,
  Layout,
  Sidebar,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  MoreHorizontal,
  MoreVertical,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Check,
  AlertTriangle,
  Info as InfoIcon,
  HelpCircle,
  QuestionMarkCircle,
  ExclamationTriangle,
  XCircle as XCircleIcon,
  CheckCircle as CheckCircleIcon,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon2,
  HelpCircle as HelpCircleIcon,
  QuestionMarkCircle as QuestionMarkCircleIcon,
  ExclamationTriangle as ExclamationTriangleIcon,
  Target,
  TrendingUp,
  Globe,
  Calendar,
  Mail,
  Phone as PhoneIcon2,
  MapPin as MapPinIcon2,
  Mail as MailIcon2,
  Phone as PhoneIcon3,
  MapPin as MapPinIcon3,
  Mail as MailIcon4,
  Phone as PhoneIcon4,
  MapPin as MapPinIcon4,
  Mail as MailIcon5,
  Phone as PhoneIcon5,
  MapPin as MapPinIcon5,
  Mail as MailIcon6,
  Phone as PhoneIcon6,
  MapPin as MapPinIcon6,
  Mail as MailIcon7,
  Phone as PhoneIcon7,
  MapPin as MapPinIcon7,
  Mail as MailIcon8,
  Phone as PhoneIcon8,
  MapPin as MapPinIcon8,
  Mail as MailIcon9,
  Phone as PhoneIcon9,
  MapPin as MapPinIcon9,
  Mail as MailIcon10,
  Phone as PhoneIcon10,
  MapPin as MapPinIcon10
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import ResponsiveText from '../components/ResponsiveText';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Services - Zion Tech Group",
    "description": "Advanced AI services including machine learning, natural language processing, computer vision, predictive analytics, and AI automation solutions.",
    "url": "https://ziontechgroup.com/ai-services",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "AI Analytics Dashboard Pro",
          "description": "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
          "offers": {
            "@type": "Offer",
            "price": "500",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "RecurringPaymentsPriceSpecification",
              "billingDuration": "P1M"
            }
          }
        }
      ]
    }
  };

  const aiServices = [
    {
      id: 'ai-analytics-dashboard-pro',
      name: 'AI Analytics Dashboard Pro',
      description: 'Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated insights. Transform your data into actionable intelligence.',
      shortDescription: 'AI-powered business intelligence platform',
      price: 'From $500/month',
      priceRange: { min: 500, max: 2000 },
      category: 'Analytics & BI',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Automated insight generation',
        'Custom dashboard builder',
        'Multi-source data integration',
        'Advanced machine learning models',
        'Natural language queries',
        'Automated report generation',
        'Anomaly detection',
        'API access and webhooks'
      ],
      benefits: [
        'Increase data-driven decision making by 85%',
        'Reduce report generation time by 90%',
        'Improve forecasting accuracy by 60%',
        'Save 25+ hours per week on analytics'
      ],
      useCases: [
        'E-commerce performance tracking',
        'Financial forecasting',
        'Customer behavior analysis',
        'Marketing campaign optimization',
        'Operational efficiency monitoring'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Python', 'R', 'Apache Spark', 'Kubernetes'],
      timeline: '4-8 weeks',
      support: '24/7',
      link: '/ai-analytics-dashboard-pro',
      featured: true,
      popular: true
    },
    {
      id: 'ai-cybersecurity-suite-pro',
      name: 'AI Cybersecurity Suite Pro',
      description: 'Advanced AI-powered cybersecurity solution with threat detection, behavioral analysis, and automated response. Protect your business from evolving cyber threats.',
      shortDescription: 'AI-powered cybersecurity protection',
      price: 'From $800/month',
      priceRange: { min: 800, max: 3000 },
      category: 'Security',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      features: [
        'AI threat detection and analysis',
        'Behavioral anomaly detection',
        'Automated incident response',
        'Real-time security monitoring',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Security orchestration',
        'Threat intelligence integration',
        'Machine learning models',
        '24/7 security operations'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 80%',
        'Improve security posture by 95%',
        'Save $100,000+ annually on security costs'
      ],
      useCases: [
        'Enterprise security monitoring',
        'Threat hunting and analysis',
        'Compliance management',
        'Incident response automation',
        'Security audit preparation'
      ],
      technologies: ['Machine Learning', 'Deep Learning', 'SIEM', 'SOAR', 'Python', 'TensorFlow'],
      timeline: '3-6 weeks',
      support: '24/7',
      link: '/ai-cybersecurity-suite-pro',
      featured: true,
      popular: true
    },
    {
      id: 'ai-content-generation-pro',
      name: 'AI Content Generation Pro',
      description: 'Advanced AI content creation platform with natural language processing, automated writing, and multi-format content generation. Scale your content production.',
      shortDescription: 'AI-powered content creation platform',
      price: 'From $300/month',
      priceRange: { min: 300, max: 1200 },
      category: 'Content & Marketing',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Natural language generation',
        'Multi-format content creation',
        'Brand voice customization',
        'SEO optimization',
        'Content planning and strategy',
        'Automated publishing',
        'Content performance analytics',
        'Multi-language support',
        'Plagiarism detection',
        'Content approval workflows'
      ],
      benefits: [
        'Increase content production by 500%',
        'Reduce content costs by 70%',
        'Improve SEO performance by 60%',
        'Save 30+ hours per week on content creation'
      ],
      useCases: [
        'Blog and article writing',
        'Social media content',
        'Email marketing campaigns',
        'Product descriptions',
        'Marketing copy'
      ],
      technologies: ['GPT-4', 'BERT', 'Transformer', 'NLP', 'Python', 'OpenAI API'],
      timeline: '2-4 weeks',
      support: '24/7',
      link: '/ai-content-generation-pro',
      featured: true,
      popular: true
    },
    {
      id: 'ai-customer-support-chatbot',
      name: 'AI Customer Support Chatbot',
      description: 'Intelligent customer service chatbot with natural language understanding, sentiment analysis, and automated ticket resolution. Deliver exceptional customer support.',
      shortDescription: 'AI-powered customer service chatbot',
      price: 'From $200/month',
      priceRange: { min: 200, max: 800 },
      category: 'Customer Service',
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Natural language understanding',
        'Sentiment analysis',
        'Automated ticket resolution',
        'Multi-channel support',
        'Knowledge base integration',
        'Escalation management',
        'Performance analytics',
        'Custom training',
        'API integration',
        '24/7 availability'
      ],
      benefits: [
        'Reduce response time by 80%',
        'Increase customer satisfaction by 45%',
        'Handle 70% more inquiries automatically',
        'Save 25+ hours per week on support'
      ],
      useCases: [
        'Customer service automation',
        'FAQ handling',
        'Technical support',
        'Sales inquiries',
        'Order tracking'
      ],
      technologies: ['NLP', 'BERT', 'GPT', 'Dialogflow', 'Python', 'TensorFlow'],
      timeline: '2-3 weeks',
      support: '24/7',
      link: '/ai-customer-support-chatbot',
      featured: true,
      popular: true
    },
    {
      id: 'ai-code-assistant-pro',
      name: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with code generation, debugging, optimization, and automated testing. Accelerate your development process.',
      shortDescription: 'AI-powered coding assistant',
      price: 'From $150/month',
      priceRange: { min: 150, max: 600 },
      category: 'Development',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'AI code generation',
        'Automated debugging',
        'Code optimization suggestions',
        'Automated testing',
        'Code review assistance',
        'Documentation generation',
        'Multi-language support',
        'IDE integration',
        'Version control integration',
        'Performance analysis'
      ],
      benefits: [
        'Increase coding speed by 50%',
        'Reduce bugs by 60%',
        'Improve code quality by 40%',
        'Save 20+ hours per week on development'
      ],
      useCases: [
        'Software development',
        'Code review and optimization',
        'Automated testing',
        'Documentation generation',
        'Legacy code modernization'
      ],
      technologies: ['GPT-4', 'Codex', 'Copilot', 'Python', 'JavaScript', 'TypeScript'],
      timeline: '1-2 weeks',
      support: '24/7',
      link: '/ai-code-assistant-pro',
      featured: true,
      popular: true
    },
    {
      id: 'ai-business-intelligence-pro',
      name: 'AI Business Intelligence Pro',
      description: 'Comprehensive AI-powered business intelligence solution with advanced analytics, predictive modeling, and automated insights. Make data-driven decisions.',
      shortDescription: 'AI-powered business intelligence',
      price: 'From $600/month',
      priceRange: { min: 600, max: 2500 },
      category: 'Analytics & BI',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Advanced predictive modeling',
        'Automated insight generation',
        'Real-time analytics',
        'Custom dashboard creation',
        'Data visualization',
        'Statistical analysis',
        'Machine learning models',
        'Data integration',
        'Report automation',
        'Collaborative analytics'
      ],
      benefits: [
        'Improve decision accuracy by 70%',
        'Reduce analysis time by 85%',
        'Identify new opportunities',
        'Increase revenue by 25%'
      ],
      useCases: [
        'Sales forecasting',
        'Market analysis',
        'Customer segmentation',
        'Risk assessment',
        'Performance optimization'
      ],
      technologies: ['Python', 'R', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
      timeline: '4-6 weeks',
      support: '24/7',
      link: '/ai-business-intelligence-pro',
      featured: true,
      popular: true
    },
    {
      id: 'ai-automation-platform',
      name: 'AI Automation Platform',
      description: 'Comprehensive AI automation platform with workflow automation, process optimization, and intelligent decision making. Streamline your business processes.',
      shortDescription: 'AI-powered automation platform',
      price: 'From $400/month',
      priceRange: { min: 400, max: 1500 },
      category: 'Automation',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Workflow automation',
        'Process optimization',
        'Intelligent decision making',
        'RPA integration',
        'API automation',
        'Data processing',
        'Task scheduling',
        'Error handling',
        'Performance monitoring',
        'Custom automation rules'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 70%',
        'Improve accuracy by 90%',
        'Save 40+ hours per week on manual work'
      ],
      useCases: [
        'Data entry automation',
        'Email processing',
        'Document management',
        'Order processing',
        'Customer onboarding'
      ],
      technologies: ['Python', 'RPA', 'APIs', 'Machine Learning', 'Workflow Engines', 'Automation Tools'],
      timeline: '3-5 weeks',
      support: '24/7',
      link: '/ai-automation-platform',
      featured: true,
      popular: true
    },
    {
      id: 'ai-data-analytics-pro',
      name: 'AI Data Analytics Pro',
      description: 'Advanced AI-powered data analytics solution with machine learning, statistical analysis, and automated reporting. Unlock insights from your data.',
      shortDescription: 'AI-powered data analytics',
      price: 'From $350/month',
      priceRange: { min: 350, max: 1200 },
      category: 'Analytics & BI',
      icon: <Database className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      features: [
        'Machine learning analytics',
        'Statistical analysis',
        'Data mining',
        'Predictive modeling',
        'Data visualization',
        'Automated reporting',
        'Data quality assessment',
        'Anomaly detection',
        'Trend analysis',
        'Custom analytics models'
      ],
      benefits: [
        'Extract insights 10x faster',
        'Improve data accuracy by 85%',
        'Identify patterns and trends',
        'Make better business decisions'
      ],
      useCases: [
        'Customer analytics',
        'Sales performance analysis',
        'Market research',
        'Risk assessment',
        'Operational optimization'
      ],
      technologies: ['Python', 'R', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Jupyter'],
      timeline: '3-6 weeks',
      support: '24/7',
      link: '/ai-data-analytics-pro',
      featured: true,
      popular: true
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing automation platform with AI-powered campaign optimization, personalization, and performance analytics. Maximize your marketing ROI.',
      shortDescription: 'AI-powered marketing automation',
      price: 'From $250/month',
      priceRange: { min: 250, max: 1000 },
      category: 'Marketing',
      icon: <Target className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      features: [
        'AI campaign optimization',
        'Personalization engine',
        'Audience segmentation',
        'Content optimization',
        'A/B testing automation',
        'Performance analytics',
        'Multi-channel orchestration',
        'Lead scoring',
        'Email automation',
        'Social media management'
      ],
      benefits: [
        'Increase conversion rates by 60%',
        'Reduce marketing costs by 40%',
        'Improve campaign performance by 80%',
        'Save 30+ hours per week on marketing'
      ],
      useCases: [
        'Email marketing campaigns',
        'Social media advertising',
        'Lead nurturing',
        'Customer retention',
        'Product promotion'
      ],
      technologies: ['Machine Learning', 'NLP', 'Python', 'Marketing APIs', 'Analytics Tools', 'Automation Platforms'],
      timeline: '2-4 weeks',
      support: '24/7',
      link: '/ai-marketing-automation',
      featured: true,
      popular: true
    },
    {
      id: 'ai-hr-recruitment-pro',
      name: 'AI HR & Recruitment Pro',
      description: 'AI-powered human resources and recruitment solution with automated screening, candidate matching, and performance analytics. Optimize your talent acquisition.',
      shortDescription: 'AI-powered HR and recruitment',
      price: 'From $300/month',
      priceRange: { min: 300, max: 1200 },
      category: 'Human Resources',
      icon: <Users className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      features: [
        'AI resume screening',
        'Candidate matching',
        'Interview scheduling',
        'Performance analytics',
        'Talent pipeline management',
        'Skills assessment',
        'Bias detection',
        'Onboarding automation',
        'Employee analytics',
        'Compliance monitoring'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality by 40%',
        'Eliminate bias in hiring',
        'Save 25+ hours per week on recruitment'
      ],
      useCases: [
        'Resume screening',
        'Candidate matching',
        'Interview scheduling',
        'Performance management',
        'Talent analytics'
      ],
      technologies: ['NLP', 'Machine Learning', 'Python', 'HR APIs', 'Analytics Tools', 'Assessment Platforms'],
      timeline: '3-5 weeks',
      support: '24/7',
      link: '/ai-hr-recruitment-pro',
      featured: true,
      popular: true
    },
    {
      id: 'ai-financial-analysis',
      name: 'AI Financial Analysis',
      description: 'Advanced AI-powered financial analysis solution with predictive modeling, risk assessment, and automated reporting. Make informed financial decisions.',
      shortDescription: 'AI-powered financial analysis',
      price: 'From $450/month',
      priceRange: { min: 450, max: 1800 },
      category: 'Finance',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-amber-500 to-yellow-500',
      features: [
        'Predictive financial modeling',
        'Risk assessment and analysis',
        'Automated financial reporting',
        'Fraud detection',
        'Credit scoring',
        'Investment analysis',
        'Budget optimization',
        'Cash flow forecasting',
        'Compliance monitoring',
        'Real-time financial insights'
      ],
      benefits: [
        'Improve financial accuracy by 75%',
        'Reduce risk exposure by 60%',
        'Automate 90% of financial analysis',
        'Save 35+ hours per week on financial tasks'
      ],
      useCases: [
        'Financial forecasting',
        'Risk management',
        'Investment analysis',
        'Fraud detection',
        'Budget planning'
      ],
      technologies: ['Python', 'R', 'TensorFlow', 'Financial APIs', 'Machine Learning', 'Statistical Models'],
      timeline: '4-6 weeks',
      support: '24/7',
      link: '/ai-financial-analysis',
      featured: true,
      popular: true
    },
    {
      id: 'ai-supply-chain-optimizer',
      name: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain optimization with demand forecasting, inventory management, and logistics optimization. Streamline your supply chain operations.',
      shortDescription: 'AI-powered supply chain optimization',
      price: 'From $500/month',
      priceRange: { min: 500, max: 2000 },
      category: 'Supply Chain',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Logistics optimization',
        'Supplier management',
        'Risk assessment',
        'Cost optimization',
        'Performance analytics',
        'Automated planning',
        'Real-time monitoring',
        'Predictive maintenance'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve demand accuracy by 70%',
        'Optimize logistics by 50%',
        'Save $100,000+ annually on supply chain costs'
      ],
      useCases: [
        'Inventory management',
        'Demand planning',
        'Logistics optimization',
        'Supplier selection',
        'Risk management'
      ],
      technologies: ['Machine Learning', 'Optimization Algorithms', 'Python', 'Supply Chain APIs', 'Analytics Tools', 'IoT'],
      timeline: '4-8 weeks',
      support: '24/7',
      link: '/ai-supply-chain-optimizer',
      featured: true,
      popular: true
    }
  ];

  const categories = [
    { name: 'All', count: aiServices.length, color: 'from-gray-500 to-gray-600' },
    { name: 'Analytics & BI', count: aiServices.filter(s => s.category === 'Analytics & BI').length, color: 'from-blue-500 to-cyan-500' },
    { name: 'Security', count: aiServices.filter(s => s.category === 'Security').length, color: 'from-red-500 to-orange-500' },
    { name: 'Content & Marketing', count: aiServices.filter(s => s.category === 'Content & Marketing').length, color: 'from-purple-500 to-pink-500' },
    { name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length, color: 'from-green-500 to-emerald-500' },
    { name: 'Development', count: aiServices.filter(s => s.category === 'Development').length, color: 'from-indigo-500 to-purple-500' },
    { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length, color: 'from-cyan-500 to-blue-500' },
    { name: 'Marketing', count: aiServices.filter(s => s.category === 'Marketing').length, color: 'from-pink-500 to-rose-500' },
    { name: 'Human Resources', count: aiServices.filter(s => s.category === 'Human Resources').length, color: 'from-violet-500 to-purple-500' },
    { name: 'Finance', count: aiServices.filter(s => s.category === 'Finance').length, color: 'from-amber-500 to-yellow-500' },
    { name: 'Supply Chain', count: aiServices.filter(s => s.category === 'Supply Chain').length, color: 'from-emerald-500 to-green-500' }
  ];

  const stats = [
    { number: '25+', label: 'AI Service Categories', icon: <Brain className="w-6 h-6" /> },
    { number: '1,000+', label: 'AI Models Deployed', icon: <Zap className="w-6 h-6" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Machine Learning, NLP, Computer Vision & More"
        description="Advanced AI services including machine learning, natural language processing, computer vision, predictive analytics, and AI automation solutions for businesses."
        keywords="AI services, machine learning, natural language processing, computer vision, predictive analytics, AI automation, artificial intelligence"
        canonical="https://ziontechgroup.com/ai-services"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">1,000+ AI Models Deployed</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Advanced AI services powered by cutting-edge machine learning, natural language processing, 
            and computer vision. Transform your business with intelligent automation and insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start AI Journey
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View AI Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
        </ResponsiveContainer>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.name === 'All'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured AI Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our most advanced and powerful AI services, designed to transform your business operations.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {aiServices.filter(service => service.featured).map((service, index) => (
              <FuturisticCard
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
                
                <Link to={service.link} className="block">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Category</span>
                      <span className="px-2 py-1 bg-white/10 rounded-full">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Timeline</span>
                      <span className="text-green-400">{service.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Support</span>
                      <span>{service.support}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* All AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of AI services organized by category.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-6">
            {aiServices.map((service, index) => (
              <FuturisticCard
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
                
                <Link to={service.link} className="block">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Category</span>
                      <span className="px-2 py-1 bg-white/10 rounded-full">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Timeline</span>
                      <span className="text-green-400">{service.timeline}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your business with our advanced AI services. From machine learning to automation, 
            we help you unlock the full potential of artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start AI Transformation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              View AI Pricing
              <DollarSign className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;