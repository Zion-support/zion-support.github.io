import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Code, 
  Database, 
  Users, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Mail,
  Phone,
  MapPin,
  Award,
  Lock,
  Settings,
  PieChart,
  FileText,
  Video,
  Image,
  MessageSquare,
  Calendar,
  ShoppingCart,
  CreditCard,
  Truck,
  Wifi,
  Camera,
  Headphones,
  Mic,
  Palette,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Heart,
  ThumbsUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
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
  Scissors,
  Save,
  Folder,
  File,
  Archive,
  Tag,
  Flag,
  Bookmark,
  Bell,
  AlertCircle,
  Info,
  HelpCircle,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Sidebar,
  Navigation,
  Compass,
  Map,
  Home,
  Building,
  Store,
  Factory,
  Warehouse,
  Office,
  School,
  Hospital,
  Bank,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Bus,
  Taxi,
  Truck as TruckIcon,
  Package,
  Box,
  Gift,
  ShoppingBag,
  CreditCard as CreditCardIcon,
  Wallet,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  Percent,
  TrendingDown,
  Activity,
  Pulse,
  Thermometer,
  Gauge,
  Battery,
  Wifi as WifiIcon,
  Bluetooth,
  Radio,
  Tv,
  Laptop,
  Tablet,
  Smartphone as SmartphoneIcon,
  Watch,
  Headphones as HeadphonesIcon,
  Speaker,
  Mic as MicIcon,
  Camera as CameraIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  Music,
  Film,
  Book,
  Newspaper,
  FileText as FileTextIcon,
  File,
  Folder as FolderIcon,
  Archive as ArchiveIcon,
  HardDrive,
  Server,
  Cpu,
  MemoryStick,
  HardDrive as HardDriveIcon,
  Disc,
  Cd,
  Dvd,
  FloppyDisk,
  Usb,
  Hdmi,
  Ethernet,
  Wifi as WifiIcon2,
  Bluetooth as BluetoothIcon,
  Radio as RadioIcon,
  Tv as TvIcon,
  Laptop as LaptopIcon,
  Tablet as TabletIcon,
  Smartphone as SmartphoneIcon2,
  Watch as WatchIcon,
  Headphones as HeadphonesIcon2,
  Speaker as SpeakerIcon,
  Mic as MicIcon2,
  Camera as CameraIcon2,
  Video as VideoIcon2,
  Image as ImageIcon2,
  Music as MusicIcon,
  Film as FilmIcon,
  Book as BookIcon,
  Newspaper as NewspaperIcon,
  FileText as FileTextIcon2,
  File as FileIcon,
  Folder as FolderIcon2,
  Archive as ArchiveIcon2,
  HardDrive as HardDriveIcon2,
  Server as ServerIcon,
  Cpu as CpuIcon,
  MemoryStick as MemoryStickIcon,
  HardDrive as HardDriveIcon3,
  Disc as DiscIcon,
  Cd as CdIcon,
  Dvd as DvdIcon,
  FloppyDisk as FloppyDiskIcon,
  Usb as UsbIcon,
  Hdmi as HdmiIcon,
  Ethernet as EthernetIcon
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

    // Business Management Solutions
    {
      id: 'zion-project-manager-pro',
      name: 'Zion Project Manager Pro',
      description: 'Advanced project management tool with AI-powered task prioritization, resource allocation, and automated progress tracking.',
      price: '$99/month',
      features: [
        'AI task prioritization',
        'Resource allocation',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Budget management',
        'Gantt charts',
        'Mobile app'
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      category: 'Project Management',
      link: '/zion-project-manager-pro',
      popular: false,
      rating: 4.6,
      users: '1,200+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with predictive analytics, automated reordering, and real-time stock optimization.',
      price: '$179/month',
      features: [
        'Predictive analytics',
        'Automated reordering',
        'Real-time tracking',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization',
        'Reporting suite'
      ],
      icon: <Package className="w-8 h-8" />,
      color: 'from-amber-500 to-yellow-500',
      category: 'Inventory Management',
      link: '/zion-inventory-smart',
      popular: false,
      rating: 4.5,
      users: '900+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-financial-analytics',
      name: 'Zion Financial Analytics',
      description: 'Comprehensive financial management platform with AI-powered forecasting, expense tracking, and automated financial reporting.',
      price: '$149/month',
      features: [
        'AI financial forecasting',
        'Expense categorization',
        'Automated reporting',
        'Cash flow analysis',
        'Budget planning',
        'Tax preparation',
        'Investment tracking',
        'Compliance monitoring'
      ],
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      category: 'Financial Management',
      link: '/zion-financial-analytics',
      popular: false,
      rating: 4.7,
      users: '1,400+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-hr-management-pro',
      name: 'Zion HR Management Pro',
      description: 'Complete human resources management system with AI-powered recruitment, employee analytics, and automated HR workflows.',
      price: '$129/month',
      features: [
        'AI recruitment tools',
        'Employee analytics',
        'Performance tracking',
        'Payroll management',
        'Time and attendance',
        'Benefits administration',
        'Training management',
        'Compliance tracking'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      category: 'HR Management',
      link: '/zion-hr-management-pro',
      popular: false,
      rating: 4.6,
      users: '800+',
      freeTrial: '14 days'
    },

    // E-commerce Solutions
    {
      id: 'zion-ecommerce-suite',
      name: 'Zion E-commerce Suite',
      description: 'Complete e-commerce platform with AI-powered product recommendations, automated inventory management, and advanced analytics.',
      price: '$299/month',
      features: [
        'AI product recommendations',
        'Inventory automation',
        'Order management',
        'Payment processing',
        'Shipping integration',
        'Customer analytics',
        'Mobile commerce',
        'Multi-channel selling'
      ],
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      category: 'E-commerce',
      link: '/zion-ecommerce-suite',
      popular: true,
      rating: 4.8,
      users: '1,600+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-social-media-manager',
      name: 'Zion Social Media Manager',
      description: 'AI-powered social media management platform with automated posting, content optimization, and performance analytics.',
      price: '$99/month',
      features: [
        'Automated posting',
        'Content optimization',
        'Hashtag research',
        'Engagement tracking',
        'Multi-platform support',
        'Content calendar',
        'Analytics dashboard',
        'Team collaboration'
      ],
      icon: <Share className="w-8 h-8" />,
      color: 'from-purple-500 to-violet-500',
      category: 'Social Media',
      link: '/zion-social-media-manager',
      popular: false,
      rating: 4.5,
      users: '2,300+',
      freeTrial: '7 days'
    },

    // Security & Compliance
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity platform with AI-powered threat detection, automated incident response, and compliance monitoring.',
      price: '$499/month',
      features: [
        'AI threat detection',
        'Automated response',
        'Compliance monitoring',
        'Vulnerability scanning',
        'Security analytics',
        'Incident management',
        '24/7 monitoring',
        'Expert support'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      category: 'Cybersecurity',
      link: '/zion-security-shield',
      popular: true,
      rating: 4.9,
      users: '1,100+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-compliance-manager',
      name: 'Zion Compliance Manager',
      description: 'Automated compliance management system with AI-powered risk assessment, policy monitoring, and regulatory reporting.',
      price: '$199/month',
      features: [
        'AI risk assessment',
        'Policy monitoring',
        'Regulatory reporting',
        'Audit trails',
        'Compliance dashboards',
        'Automated alerts',
        'Document management',
        'Training modules'
      ],
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      category: 'Compliance',
      link: '/zion-compliance-manager',
      popular: false,
      rating: 4.6,
      users: '700+',
      freeTrial: '14 days'
    },

    // Data & Analytics
    {
      id: 'zion-data-visualization',
      name: 'Zion Data Visualization',
      description: 'Powerful data visualization platform with AI-powered insights, interactive dashboards, and automated report generation.',
      price: '$179/month',
      features: [
        'Interactive dashboards',
        'AI-powered insights',
        'Automated reports',
        'Data connectors',
        'Custom visualizations',
        'Real-time updates',
        'Collaborative features',
        'Mobile access'
      ],
      icon: <PieChart className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'Data Analytics',
      link: '/zion-data-visualization',
      popular: false,
      rating: 4.7,
      users: '1,300+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-business-intelligence',
      name: 'Zion Business Intelligence',
      description: 'Comprehensive BI platform with AI-powered analytics, predictive modeling, and automated business insights generation.',
      price: '$249/month',
      features: [
        'AI-powered analytics',
        'Predictive modeling',
        'Automated insights',
        'Data warehousing',
        'ETL processes',
        'Custom metrics',
        'Alert system',
        'API integration'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'Business Intelligence',
      link: '/zion-business-intelligence',
      popular: true,
      rating: 4.8,
      users: '1,000+',
      freeTrial: '14 days'
    },

    // Communication & Collaboration
    {
      id: 'zion-team-collaboration',
      name: 'Zion Team Collaboration',
      description: 'Advanced team collaboration platform with AI-powered meeting optimization, document sharing, and project coordination.',
      price: '$79/month',
      features: [
        'AI meeting optimization',
        'Document collaboration',
        'Project coordination',
        'Video conferencing',
        'File sharing',
        'Task management',
        'Team analytics',
        'Mobile apps'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Collaboration',
      link: '/zion-team-collaboration',
      popular: false,
      rating: 4.5,
      users: '3,500+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization, automated campaigns, and advanced analytics.',
      price: '$89/month',
      features: [
        'AI personalization',
        'Automated campaigns',
        'A/B testing',
        'List segmentation',
        'Email templates',
        'Analytics dashboard',
        'Integration tools',
        'Compliance tools'
      ],
      icon: <Mail className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'Email Marketing',
      link: '/zion-email-automation',
      popular: false,
      rating: 4.6,
      users: '2,700+',
      freeTrial: '14 days'
    },

    // Specialized Solutions
    {
      id: 'zion-ai-translator',
      name: 'Zion AI Translator',
      description: 'Advanced AI translation platform with real-time translation, document processing, and multi-language support for global businesses.',
      price: '$149/month',
      features: [
        'Real-time translation',
        'Document processing',
        '100+ languages',
        'Context awareness',
        'API integration',
        'Batch processing',
        'Quality assurance',
        'Custom glossaries'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-teal-500 to-green-500',
      category: 'Translation',
      link: '/zion-ai-translator',
      popular: false,
      rating: 4.7,
      users: '1,800+',
      freeTrial: '7 days'
    },
    {
      id: 'zion-ai-code-assistant',
      name: 'Zion AI Code Assistant',
      description: 'AI-powered coding assistant with intelligent code completion, bug detection, and automated testing for developers.',
      price: '$199/month',
      features: [
        'Code completion',
        'Bug detection',
        'Automated testing',
        'Code review',
        'Documentation generation',
        'Multi-language support',
        'IDE integration',
        'Team collaboration'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-gray-500 to-slate-500',
      category: 'Development',
      link: '/zion-ai-code-assistant',
      popular: true,
      rating: 4.8,
      users: '2,200+',
      freeTrial: '14 days'
    },
    {
      id: 'zion-ai-design-studio',
      name: 'Zion AI Design Studio',
      description: 'AI-powered design platform that creates logos, graphics, and marketing materials automatically with brand consistency.',
      price: '$179/month',
      features: [
        'Logo generation',
        'Graphic design',
        'Brand consistency',
        'Template library',
        'Custom styles',
        'Batch processing',
        'High-res exports',
        'Team collaboration'
      ],
      icon: <Palette className="w-8 h-8" />,
      color: 'from-pink-500 to-purple-500',
      category: 'Design',
      link: '/zion-ai-design-studio',
      popular: false,
      rating: 4.6,
      users: '1,500+',
      freeTrial: '7 days'
    },
    {
      id: 'zion-ai-voice-assistant',
      name: 'Zion AI Voice Assistant',
      description: 'Custom AI voice assistant for businesses with natural language processing, voice commands, and integration capabilities.',
      price: '$299/month',
      features: [
        'Natural language processing',
        'Voice commands',
        'Custom training',
        'Multi-language support',
        'API integration',
        'Analytics dashboard',
        'Mobile app',
        '24/7 availability'
      ],
      icon: <Mic className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      category: 'Voice AI',
      link: '/zion-ai-voice-assistant',
      popular: false,
      rating: 4.7,
      users: '900+',
      freeTrial: '14 days'
    }
  ];

  const categories = [
    'All',
    'AI Analytics',
    'AI CRM',
    'AI Content',
    'AI Video',
    'AI Support',
    'AI Marketing',
    'Project Management',
    'Inventory Management',
    'Financial Management',
    'HR Management',
    'E-commerce',
    'Social Media',
    'Cybersecurity',
    'Compliance',
    'Data Analytics',
    'Business Intelligence',
    'Collaboration',
    'Email Marketing',
    'Translation',
    'Development',
    'Design',
    'Voice AI'
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '25,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions powered by AI. From analytics to automation, we have the tools to transform your business operations." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, automation, analytics, CRM, project management, e-commerce" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Micro SAAS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
            From analytics to automation, we have the tools you need to succeed in the digital age.
          </p>

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

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/20 hover:border-cyan-500/50"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        {/* Testimonials Section */}
        <div className="mb-20">
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

        {/* CTA Section */}
        <div className="text-center">
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
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;