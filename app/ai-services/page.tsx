'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Globe, 
  Brain, 
  Cpu, 
  Target, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign, 
  Award, 
  Lock, 
  Database, 
  Cloud, 
  Code, 
  Smartphone, 
  Settings, 
  BarChart3, 
  FileText, 
  Search, 
  Bot, 
  Palette, 
  Camera, 
  Music, 
  Video, 
  Gamepad2, 
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
  Calendar, 
  Clock3, 
  Compass, 
  Globe2, 
  Map, 
  Navigation, 
  PieChart, 
  TrendingDown, 
  Activity, 
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
  Play,
  Pause,
  RefreshCw,
  Download,
  Upload,
  Share2,
  ExternalLink,
  Plus,
  Minus,
  X,
  ChevronRight,
  ChevronDown,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Loader2,
  Brain as BrainIcon,
  Cpu as CpuIcon,
  Target as TargetIcon,
  BarChart as BarChartIcon,
  MessageSquare as MessageSquareIcon,
  Eye as EyeIcon,
  Sparkles as SparklesIcon,
  ArrowRight as ArrowRightIcon,
  Phone as PhoneIcon2,
  Mail as MailIcon2,
  MapPin as MapPinIcon,
  DollarSign as DollarSignIcon,
  Award as AwardIcon,
  Lock as LockIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Smartphone as SmartphoneIcon,
  Settings as SettingsIcon,
  BarChart3 as BarChart3Icon,
  FileText as FileTextIcon,
  Search as SearchIcon,
  Bot as BotIcon,
  Palette as PaletteIcon,
  Camera as CameraIcon,
  Music as MusicIcon,
  Video as VideoIcon,
  Gamepad2 as Gamepad2Icon,
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
  Clock3 as Clock3Icon,
  Compass as CompassIcon,
  Globe2 as Globe2Icon,
  Map as MapIcon,
  Navigation as NavigationIcon,
  PieChart as PieChartIcon,
  TrendingDown as TrendingDownIcon,
  Activity as ActivityIcon,
  Zap as ZapIcon,
  Target as TargetIcon2,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Star as StarIcon2,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon2,
  Phone as PhoneIcon3,
  Mail as MailIcon3,
  MapPin as MapPinIcon2,
  Play as PlayIcon,
  Pause as PauseIcon,
  RefreshCw as RefreshCwIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Share2 as Share2Icon,
  ExternalLink as ExternalLinkIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  Info as InfoIcon,
  AlertCircle as AlertCircleIcon,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon,
  Loader2 as Loader2Icon
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoData, setDemoData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const aiServices = [
    {
      id: 'ai-consulting',
      title: 'AI Consulting & Strategy',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      price: '$2,500/month',
      description: 'Comprehensive AI strategy development and implementation planning for enterprise organizations',
      features: [
        'AI roadmap development and planning',
        'Technology assessment and evaluation',
        'ROI analysis and business case development',
        'Implementation planning and execution',
        'Change management and training',
        'Performance measurement and optimization',
        'Vendor selection and management',
        'Compliance and governance framework'
      ],
      benefits: [
        'Develop clear AI strategy and roadmap',
        'Achieve 300% ROI on AI investments',
        'Reduce implementation risks by 80%',
        'Accelerate AI adoption and success'
      ],
      demo: {
        title: 'AI Strategy Workshop Demo',
        description: 'Experience our AI consulting approach',
        features: ['Strategy assessment', 'ROI calculator', 'Implementation roadmap', 'Success metrics']
      },
      marketPrice: '$3,999-7,999/month',
      competitors: ['McKinsey', 'BCG', 'Deloitte'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-consulting'
      }
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning Solutions',
      icon: Cpu,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      price: '$1,500/month',
      description: 'Custom ML models for predictive analytics, decision-making, and business intelligence',
      features: [
        'Predictive analytics and forecasting',
        'Custom model development and training',
        'Data pipeline setup and optimization',
        'Model monitoring and maintenance',
        'A/B testing and validation',
        'Real-time inference and deployment',
        'Multi-cloud and hybrid deployment',
        'Integration with existing systems'
      ],
      benefits: [
        'Improve decision-making accuracy by 200%',
        'Reduce operational costs by 40%',
        'Increase revenue through better predictions',
        'Scale ML operations efficiently'
      ],
      demo: {
        title: 'ML Model Demo',
        description: 'See our machine learning models in action',
        features: ['Model training', 'Prediction accuracy', 'Performance metrics', 'Real-time inference']
      },
      marketPrice: '$2,499-4,999/month',
      competitors: ['DataRobot', 'H2O.ai', 'Dataiku'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/machine-learning'
      }
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing',
      icon: MessageSquare,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      price: '$1,200/month',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI',
      features: [
        'Text analysis and sentiment analysis',
        'Language translation and localization',
        'Chatbot and conversational AI development',
        'Document processing and extraction',
        'Voice recognition and synthesis',
        'Content generation and summarization',
        'Multi-language support',
        'API integration and deployment'
      ],
      benefits: [
        'Process text data 10x faster',
        'Improve customer experience by 150%',
        'Reduce manual text processing by 90%',
        'Enable multilingual operations'
      ],
      demo: {
        title: 'NLP Demo',
        description: 'Experience our natural language processing capabilities',
        features: ['Text analysis', 'Sentiment detection', 'Language translation', 'Content generation']
      },
      marketPrice: '$1,999-3,999/month',
      competitors: ['OpenAI', 'Google Cloud AI', 'Amazon Comprehend'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/natural-language-processing'
      }
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision Solutions',
      icon: Eye,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      price: '$1,800/month',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence',
      features: [
        'Object detection and classification',
        'Image recognition and tagging',
        'Video analysis and processing',
        'Facial recognition and biometrics',
        'Medical imaging and diagnostics',
        'Quality control and inspection',
        'Augmented reality integration',
        'Real-time processing and inference'
      ],
      benefits: [
        'Automate visual inspection by 95%',
        'Improve accuracy and consistency',
        'Reduce human error and costs',
        'Enable new visual applications'
      ],
      demo: {
        title: 'Computer Vision Demo',
        description: 'See our computer vision models in action',
        features: ['Object detection', 'Image classification', 'Video analysis', 'Real-time processing']
      },
      marketPrice: '$2,999-5,999/month',
      competitors: ['Google Vision AI', 'Amazon Rekognition', 'Microsoft Computer Vision'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/computer-vision'
      }
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      icon: Settings,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      price: '$1,400/month',
      description: 'Intelligent process automation with decision-making capabilities and exception handling',
      features: [
        'Process automation and optimization',
        'Workflow design and implementation',
        'Decision trees and rule engines',
        'Exception handling and escalation',
        'Integration with existing systems',
        'Monitoring and performance analytics',
        'Scalable and flexible architecture',
        'User training and support'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 70%',
        'Improve accuracy and consistency',
        'Free up human resources for strategic work'
      ],
      demo: {
        title: 'Process Automation Demo',
        description: 'See how AI automates your business processes',
        features: ['Workflow design', 'Process automation', 'Exception handling', 'Performance monitoring']
      },
      marketPrice: '$2,199-4,499/month',
      competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-automation'
      }
    },
    {
      id: 'ai-chatbots',
      title: 'AI Chatbots & Virtual Assistants',
      icon: Bot,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      price: '$800/month',
      description: 'Intelligent conversational AI for customer service, support, and business operations',
      features: [
        '24/7 customer support automation',
        'Multi-language and multi-channel support',
        'Integration with CRM and business systems',
        'Natural language understanding',
        'Context awareness and memory',
        'Escalation to human agents',
        'Analytics and performance tracking',
        'Custom training and optimization'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response times by 90%',
        'Increase customer satisfaction by 150%',
        'Scale support operations efficiently'
      ],
      demo: {
        title: 'Chatbot Demo',
        description: 'Chat with our AI-powered virtual assistant',
        features: ['Natural conversations', 'Context awareness', 'Multi-language support', 'Escalation handling']
      },
      marketPrice: '$1,299-2,999/month',
      competitors: ['Intercom', 'Zendesk', 'Freshdesk'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-chatbots'
      }
    },
    {
      id: 'ai-analytics',
      title: 'AI-Powered Analytics',
      icon: BarChart3,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      price: '$1,600/month',
      description: 'Advanced analytics and business intelligence with AI-powered insights and predictions',
      features: [
        'Predictive analytics and forecasting',
        'Anomaly detection and alerting',
        'Custom dashboard creation',
        'Real-time data processing',
        'Automated report generation',
        'Data visualization and storytelling',
        'Integration with multiple data sources',
        'Self-service analytics capabilities'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify trends and opportunities',
        'Reduce manual reporting by 85%',
        'Improve business performance'
      ],
      demo: {
        title: 'AI Analytics Demo',
        description: 'Explore our AI-powered analytics platform',
        features: ['Predictive insights', 'Anomaly detection', 'Custom dashboards', 'Automated reports']
      },
      marketPrice: '$2,499-4,999/month',
      competitors: ['Tableau', 'Power BI', 'Looker'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-analytics'
      }
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      icon: Palette,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      price: '$1,100/month',
      description: 'AI-powered content creation for blogs, social media, marketing, and business communications',
      features: [
        'Blog post and article generation',
        'Social media content creation',
        'Email and marketing copy',
        'Product descriptions and reviews',
        'Technical documentation',
        'Multilingual content generation',
        'Brand voice customization',
        'Content optimization and SEO'
      ],
      benefits: [
        'Create content 5x faster',
        'Maintain consistent brand voice',
        'Improve SEO performance by 200%',
        'Scale content production efficiently'
      ],
      demo: {
        title: 'Content Generation Demo',
        description: 'Generate high-quality content with our AI writer',
        features: ['Content creation', 'Brand voice matching', 'SEO optimization', 'Multi-language support']
      },
      marketPrice: '$1,799-3,499/month',
      competitors: ['Jasper', 'Copy.ai', 'Writesonic'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-content-generation'
      }
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare Solutions',
      icon: Stethoscope,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      price: '$2,999/month',
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine',
      features: [
        'Medical image analysis and diagnosis',
        'Drug discovery and development',
        'Personalized treatment recommendations',
        'Patient monitoring and risk assessment',
        'Clinical decision support systems',
        'Electronic health record analysis',
        'Telemedicine and remote care',
        'Regulatory compliance and validation'
      ],
      benefits: [
        'Improve diagnostic accuracy by 300%',
        'Reduce treatment costs by 40%',
        'Accelerate drug discovery by 200%',
        'Enhance patient outcomes'
      ],
      demo: {
        title: 'Healthcare AI Demo',
        description: 'See our AI solutions for healthcare',
        features: ['Medical imaging', 'Diagnostic support', 'Treatment recommendations', 'Patient monitoring']
      },
      marketPrice: '$4,999-9,999/month',
      competitors: ['IBM Watson Health', 'Google Health', 'Microsoft Healthcare'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-healthcare'
      }
    },
    {
      id: 'ai-fintech',
      title: 'AI FinTech Solutions',
      icon: CreditCard,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      price: '$2,200/month',
      description: 'AI-powered financial technology solutions for banking, trading, and risk management',
      features: [
        'Fraud detection and prevention',
        'Algorithmic trading and investment',
        'Credit scoring and risk assessment',
        'Regulatory compliance and reporting',
        'Customer service automation',
        'Personalized financial advice',
        'Real-time market analysis',
        'Blockchain and cryptocurrency integration'
      ],
      benefits: [
        'Reduce fraud by 95%',
        'Improve investment returns by 150%',
        'Accelerate loan processing by 80%',
        'Enhance regulatory compliance'
      ],
      demo: {
        title: 'FinTech AI Demo',
        description: 'Explore our AI solutions for financial services',
        features: ['Fraud detection', 'Risk assessment', 'Trading algorithms', 'Compliance monitoring']
      },
      marketPrice: '$3,499-6,999/month',
      competitors: ['Palantir', 'QuantConnect', 'Kensho'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-fintech'
      }
    },
    {
      id: 'ai-ecommerce',
      title: 'AI E-commerce Solutions',
      icon: ShoppingCart,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      price: '$1,800/month',
      description: 'AI-powered e-commerce optimization and management for online stores and marketplaces',
      features: [
        'Product recommendation engines',
        'Price optimization and dynamic pricing',
        'Inventory management and forecasting',
        'Customer behavior analysis',
        'Personalized shopping experiences',
        'A/B testing and optimization',
        'Fraud detection and prevention',
        'Revenue optimization and growth'
      ],
      benefits: [
        'Increase conversion rates by 200%',
        'Boost average order value by 150%',
        'Reduce cart abandonment by 60%',
        'Maximize revenue and profitability'
      ],
      demo: {
        title: 'E-commerce AI Demo',
        description: 'See how AI optimizes your online store',
        features: ['Product recommendations', 'Price optimization', 'Customer insights', 'Revenue tracking']
      },
      marketPrice: '$2,999-5,999/month',
      competitors: ['Dynamic Yield', 'Barilliance', 'Nosto'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-ecommerce'
      }
    },
    {
      id: 'ai-robotics',
      title: 'AI Robotics Solutions',
      icon: Settings,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      price: '$3,500/month',
      description: 'Intelligent robotic solutions for manufacturing, service industries, and autonomous operations',
      features: [
        'Robotic process automation (RPA)',
        'Computer vision integration',
        'Human-robot collaboration',
        'Autonomous navigation and control',
        'Predictive maintenance systems',
        'Quality control and inspection',
        'Warehouse and logistics automation',
        'Custom robotic solutions development'
      ],
      benefits: [
        'Increase productivity by 300%',
        'Reduce operational costs by 50%',
        'Improve quality and consistency',
        'Enable 24/7 autonomous operations'
      ],
      demo: {
        title: 'Robotics AI Demo',
        description: 'See our AI-powered robotic solutions',
        features: ['Autonomous navigation', 'Object manipulation', 'Quality inspection', 'Human collaboration']
      },
      marketPrice: '$5,999-12,999/month',
      competitors: ['Boston Dynamics', 'ABB', 'KUKA'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-robotics'
      }
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings across all AI services'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all AI solutions and data processing'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all AI services and models'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class AI engineers, data scientists, and machine learning experts'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation and deployment of AI solutions and models'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Serving clients worldwide with multi-language and multi-currency AI solutions'
    }
  ];

  const handleDemoClick = async (serviceId: string) => {
    setIsLoading(true);
    setActiveDemo(serviceId);
    
    // Simulate demo data loading
    setTimeout(() => {
      setDemoData({
        [serviceId]: {
          status: 'ready',
          data: 'Demo data loaded successfully'
        }
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <SEOOptimizer
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services and solutions for modern businesses. From machine learning to computer vision, we provide cutting-edge AI technology that drives innovation and growth."
        keywords={['ai services', 'artificial intelligence', 'machine learning', 'computer vision', 'nlp', 'ai consulting', 'ai automation']}
        canonicalUrl="https://ziontechgroup.com/ai-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16 transition-all duration-1000 cyber-scan-line">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Services">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Cutting-Edge Artificial Intelligence Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your business with our comprehensive AI services and solutions. 
                From machine learning to computer vision, we provide cutting-edge AI technology that drives innovation and growth.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">12+ AI Services</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Comprehensive suite of AI services and solutions</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">300% ROI</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Proven return on investment across all AI services</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for all AI solutions</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">24/7 Support</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Round-the-clock support and monitoring for all AI services</p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Services Grid */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our AI Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {aiServices.map((service, index) => (
                <div key={service.id} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Demo Section */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Live Demo:</h4>
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h5 className="text-sm font-medium text-white mb-2">{service.demo.title}</h5>
                      <p className="text-xs text-gray-300 mb-3">{service.demo.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.demo.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDemoClick(service.id)}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading && activeDemo === service.id ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Loading Demo...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Play className="w-4 h-4 mr-2" />
                          Try Live Demo
                        </div>
                      )}
                    </button>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex flex-col sm:flex-row gap-2 mb-4">
                      <a
                        href={`tel:${service.contact.phone}`}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <a
                        href={`mailto:${service.contact.email}?subject=Interest in ${service.title}`}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </div>
                    <div className="text-center">
                      <a
                        href={service.contact.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        View Full Demo →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Why Choose Our AI Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                    <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get started with our AI services today and see the difference cutting-edge technology can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;