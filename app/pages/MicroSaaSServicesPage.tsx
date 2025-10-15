'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  CheckCircle, 
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Target,
  TrendingUp,
  Lock,
  Cloud,
  Database,
  Code,
  Palette,
  Search,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Camera,
  Smartphone,
  Laptop,
  Server,
  Wifi,
  Settings,
  Monitor,
  Headphones,
  Mic,
  Keyboard,
  Mouse,
  Printer,
  HardDrive,
  Cpu,
  MemoryStick,
  Wrench,
  Cog,
  Layers,
  Grid,
  Layout,
  PieChart,
  Activity,
  AlertCircle,
  Bell,
  Calendar,
  Clock as ClockIcon,
  Download,
  Upload,
  Share,
  Link,
  Copy,
  Edit,
  Trash2,
  Save,
  Plus,
  Minus,
  X,
  Check,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Home,
  User,
  UserPlus,
  UserCheck,
  UserX,
  LogIn,
  LogOut,
  Key,
  Eye,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  RefreshCw,
  RotateCcw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Volume1,
  Maximize,
  Minimize,
  Move,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Search as SearchIcon,
  Filter,
  SortAsc,
  SortDesc,
  List,
  Grid as GridIcon,
  Columns,
  Rows,
  Layout as LayoutIcon,
  Sidebar,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Info,
  HelpCircle,
  QuestionMarkCircle,
  ExternalLink,
  ArrowUpRight,
  ArrowDownRight,
  ArrowUpLeft,
  ArrowDownLeft,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  MoveUp,
  MoveDown,
  MoveLeft,
  MoveRight,
  CornerUpLeft,
  CornerUpRight,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftUp,
  CornerLeftDown,
  CornerRightUp,
  CornerRightDown,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
  Repeat,
  Repeat1,
  Shuffle,
  Shuffle2,
  Shuffle3,
  Shuffle4,
  Shuffle5,
  Shuffle6,
  Shuffle7,
  Shuffle8,
  Shuffle9,
  Shuffle10,
  Shuffle11,
  Shuffle12,
  Shuffle13,
  Shuffle14,
  Shuffle15,
  Shuffle16,
  Shuffle17,
  Shuffle18,
  Shuffle19,
  Shuffle20,
  Shuffle21,
  Shuffle22,
  Shuffle23,
  Shuffle24,
  Shuffle25,
  Shuffle26,
  Shuffle27,
  Shuffle28,
  Shuffle29,
  Shuffle30,
  Shuffle31,
  Shuffle32,
  Shuffle33,
  Shuffle34,
  Shuffle35,
  Shuffle36,
  Shuffle37,
  Shuffle38,
  Shuffle39,
  Shuffle40,
  Shuffle41,
  Shuffle42,
  Shuffle43,
  Shuffle44,
  Shuffle45,
  Shuffle46,
  Shuffle47,
  Shuffle48,
  Shuffle49,
  Shuffle50,
  Shuffle51,
  Shuffle52,
  Shuffle53,
  Shuffle54,
  Shuffle55,
  Shuffle56,
  Shuffle57,
  Shuffle58,
  Shuffle59,
  Shuffle60,
  Shuffle61,
  Shuffle62,
  Shuffle63,
  Shuffle64,
  Shuffle65,
  Shuffle66,
  Shuffle67,
  Shuffle68,
  Shuffle69,
  Shuffle70,
  Shuffle71,
  Shuffle72,
  Shuffle73,
  Shuffle74,
  Shuffle75,
  Shuffle76,
  Shuffle77,
  Shuffle78,
  Shuffle79,
  Shuffle80,
  Shuffle81,
  Shuffle82,
  Shuffle83,
  Shuffle84,
  Shuffle85,
  Shuffle86,
  Shuffle87,
  Shuffle88,
  Shuffle89,
  Shuffle90,
  Shuffle91,
  Shuffle92,
  Shuffle93,
  Shuffle94,
  Shuffle95,
  Shuffle96,
  Shuffle97,
  Shuffle98,
  Shuffle99,
  Shuffle100
} from 'lucide-react';

const MicroSaaSServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy.',
      icon: Brain,
      price: '$29/month',
      features: [
        'Generate unlimited content',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      category: 'AI & Content',
      rating: 4.9,
      users: '10,000+',
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'social-media-manager',
      name: 'Social Media Manager',
      description: 'Comprehensive social media management platform with AI-powered scheduling, analytics, and engagement tools.',
      icon: Share,
      price: '$49/month',
      features: [
        'Multi-platform posting',
        'AI content suggestions',
        'Engagement analytics',
        'Hashtag optimization',
        'Competitor analysis',
        'Auto-responder',
        'Team collaboration',
        'White-label options'
      ],
      category: 'Social Media',
      rating: 4.8,
      users: '15,000+',
      link: 'https://ziontechgroup.com/social-media-manager'
    },
    {
      id: 'email-marketing-automation',
      name: 'Email Marketing Automation',
      description: 'Powerful email marketing platform with advanced automation, segmentation, and personalization features.',
      icon: Mail,
      price: '$39/month',
      features: [
        'Drag-and-drop editor',
        'Advanced automation',
        'A/B testing',
        'Behavioral triggers',
        'List segmentation',
        'Deliverability optimization',
        'ROI tracking',
        'Integration ecosystem'
      ],
      category: 'Marketing',
      rating: 4.7,
      users: '25,000+',
      link: 'https://ziontechgroup.com/email-marketing'
    },
    {
      id: 'project-management-ai',
      name: 'AI Project Manager',
      description: 'Intelligent project management tool with AI-powered task allocation, timeline prediction, and resource optimization.',
      icon: Target,
      price: '$59/month',
      features: [
        'AI task prioritization',
        'Resource optimization',
        'Timeline prediction',
        'Risk assessment',
        'Team performance analytics',
        'Automated reporting',
        'Integration hub',
        'Mobile app'
      ],
      category: 'Productivity',
      rating: 4.9,
      users: '8,000+',
      link: 'https://ziontechgroup.com/ai-project-manager'
    },
    {
      id: 'customer-support-chatbot',
      name: 'AI Customer Support Bot',
      description: 'Advanced chatbot solution with natural language processing, multi-channel support, and seamless human handoff.',
      icon: MessageSquare,
      price: '$79/month',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Human handoff',
        'Sentiment analysis',
        'Knowledge base integration',
        'Custom training',
        'Analytics dashboard',
        'API access'
      ],
      category: 'Customer Support',
      rating: 4.8,
      users: '12,000+',
      link: 'https://ziontechgroup.com/ai-chatbot'
    },
    {
      id: 'data-analytics-dashboard',
      name: 'Business Intelligence Dashboard',
      description: 'Comprehensive data analytics platform with real-time insights, predictive analytics, and custom reporting.',
      icon: BarChart3,
      price: '$99/month',
      features: [
        'Real-time analytics',
        'Predictive modeling',
        'Custom dashboards',
        'Data visualization',
        'Automated reports',
        'API integrations',
        'White-label options',
        'Advanced security'
      ],
      category: 'Analytics',
      rating: 4.9,
      users: '5,000+',
      link: 'https://ziontechgroup.com/business-intelligence'
    },
    {
      id: 'inventory-management',
      name: 'Smart Inventory Manager',
      description: 'AI-powered inventory management system with demand forecasting, automated reordering, and supply chain optimization.',
      icon: Package,
      price: '$69/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Supply chain optimization',
        'Multi-location support',
        'Barcode scanning',
        'Vendor management',
        'Cost tracking',
        'Mobile app'
      ],
      category: 'E-commerce',
      rating: 4.7,
      users: '7,000+',
      link: 'https://ziontechgroup.com/inventory-manager'
    },
    {
      id: 'hr-recruitment-ai',
      name: 'AI HR & Recruitment',
      description: 'Intelligent HR platform with AI-powered candidate screening, interview scheduling, and employee analytics.',
      icon: Users,
      price: '$89/month',
      features: [
        'AI candidate screening',
        'Interview scheduling',
        'Employee analytics',
        'Performance tracking',
        'Onboarding automation',
        'Compliance management',
        'Integration ecosystem',
        'Mobile accessibility'
      ],
      category: 'Human Resources',
      rating: 4.8,
      users: '6,000+',
      link: 'https://ziontechgroup.com/ai-hr-recruitment'
    },
    {
      id: 'financial-forecasting',
      name: 'AI Financial Forecaster',
      description: 'Advanced financial planning and forecasting tool with AI-powered predictions and risk analysis.',
      icon: TrendingUp,
      price: '$119/month',
      features: [
        'Financial forecasting',
        'Risk analysis',
        'Scenario planning',
        'Cash flow optimization',
        'Investment insights',
        'Compliance reporting',
        'Multi-currency support',
        'API integrations'
      ],
      category: 'Finance',
      rating: 4.9,
      users: '4,000+',
      link: 'https://ziontechgroup.com/financial-forecaster'
    },
    {
      id: 'website-builder-ai',
      name: 'AI Website Builder',
      description: 'Intelligent website builder with AI-powered design suggestions, content generation, and SEO optimization.',
      icon: Globe,
      price: '$49/month',
      features: [
        'AI design suggestions',
        'Content generation',
        'SEO optimization',
        'Mobile responsiveness',
        'E-commerce integration',
        'Analytics tracking',
        'Custom domains',
        '24/7 support'
      ],
      category: 'Web Development',
      rating: 4.8,
      users: '20,000+',
      link: 'https://ziontechgroup.com/ai-website-builder'
    },
    {
      id: 'cybersecurity-monitor',
      name: 'AI Security Monitor',
      description: 'Advanced cybersecurity monitoring platform with AI-powered threat detection and automated response.',
      icon: Shield,
      price: '$149/month',
      features: [
        'Threat detection',
        'Automated response',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Incident management',
        'Security analytics',
        'Integration ecosystem',
        '24/7 monitoring'
      ],
      category: 'Cybersecurity',
      rating: 4.9,
      users: '3,000+',
      link: 'https://ziontechgroup.com/ai-security-monitor'
    },
    {
      id: 'video-editing-ai',
      name: 'AI Video Editor',
      description: 'Intelligent video editing platform with AI-powered features, auto-captioning, and content optimization.',
      icon: Video,
      price: '$79/month',
      features: [
        'AI video editing',
        'Auto-captioning',
        'Content optimization',
        'Multi-format support',
        'Cloud processing',
        'Collaboration tools',
        'Template library',
        'Export options'
      ],
      category: 'Media & Design',
      rating: 4.7,
      users: '9,000+',
      link: 'https://ziontechgroup.com/ai-video-editor'
    }
  ];

  const categories = [
    'All',
    'AI & Content',
    'Social Media',
    'Marketing',
    'Productivity',
    'Customer Support',
    'Analytics',
    'E-commerce',
    'Human Resources',
    'Finance',
    'Web Development',
    'Cybersecurity',
    'Media & Design'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS services including AI tools, productivity apps, marketing automation, and business solutions. Start your free trial today." />
        <meta name="keywords" content="micro saas, saas tools, ai software, business automation, productivity tools, marketing software" />
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive suite of micro SAAS services for modern businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 cyber-text neon-pulse">
                Micro SAAS Services
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Power Your Business
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Discover our comprehensive suite of micro SAAS services designed to streamline your business operations, 
                boost productivity, and drive growth with cutting-edge AI and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                    <div className="text-sm text-gray-400">{service.users} users</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
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
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Try Free
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our micro SAAS services. 
              Start your free trial today and experience the power of AI-driven automation.
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
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSServicesPage;